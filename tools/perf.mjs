import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { gzipSync, brotliCompressSync } from 'node:zlib';

const ROOT = new URL('../site/', import.meta.url).pathname;
const TYPES = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json',
  '.webp':'image/webp', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml',
  '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain', '.ico':'image/x-icon' };

// embedded static server (clean-URLs)
const srv = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let fp = join(ROOT, p);
    try { const s = await stat(fp); if (s.isDirectory()) fp = join(fp, 'index.html'); }
    catch { try { await stat(fp + '.html'); fp = fp + '.html'; } catch { fp = join(ROOT, p, 'index.html'); } }
    const buf = await readFile(fp);
    res.writeHead(200, { 'content-type': TYPES[extname(fp)] || 'application/octet-stream' });
    res.end(buf);
  } catch { res.writeHead(404); res.end('nf'); }
});
await new Promise(r => srv.listen(8777, r));

const PAGES = { home:'/', about:'/about', awards:'/awards', media:'/media', contact:'/contact', evidence:'/evidence' };
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

for (const [name, path] of Object.entries(PAGES)) {
  const ctx = await b.newContext();
  const p = await ctx.newPage();
  const res = [];
  p.on('response', async r => {
    const url = r.url();
    if (url.startsWith('data:')) return;
    let len = 0;
    try { const h = r.headers(); len = h['content-length'] ? +h['content-length'] : (await r.body()).length; } catch {}
    res.push({ url: url.replace('http://localhost:8777',''), type: r.request().resourceType(), bytes: len });
  });
  await p.goto('http://localhost:8777' + path, { waitUntil: 'networkidle' });
  const vitals = await p.evaluate(() => new Promise(resolve => {
    let lcp = 0, cls = 0;
    try { new PerformanceObserver(l => { for (const e of l.getEntries()) lcp = e.startTime; }).observe({ type:'largest-contentful-paint', buffered:true }); } catch {}
    try { new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; }).observe({ type:'layout-shift', buffered:true }); } catch {}
    setTimeout(() => {
      const nav = performance.getEntriesByType('navigation')[0] || {};
      resolve({ lcp: Math.round(lcp), cls: +cls.toFixed(4), dcl: Math.round(nav.domContentLoadedEventEnd||0), load: Math.round(nav.loadEventEnd||0) });
    }, 600);
  }));
  const total = res.reduce((a,r)=>a+r.bytes,0);
  const byType = {};
  for (const r of res) byType[r.type] = (byType[r.type]||0) + r.bytes;
  const kb = n => (n/1024).toFixed(1).padStart(7) + ' KB';
  console.log(`\n### ${name.toUpperCase()}  (${path})`);
  console.log(`  requests: ${res.length}   total: ${kb(total)}   LCP: ${vitals.lcp}ms   CLS: ${vitals.cls}   DCL: ${vitals.dcl}ms   load: ${vitals.load}ms`);
  console.log('  by type: ' + Object.entries(byType).sort((a,b)=>b[1]-a[1]).map(([t,v])=>`${t} ${kb(v).trim()}`).join(' · '));
  const top = res.filter(r=>r.bytes>8000).sort((a,b)=>b.bytes-a.bytes).slice(0,6);
  if (top.length) console.log('  heaviest: ' + top.map(r=>`${kb(r.bytes).trim()} ${r.url.split('/').pop()}`).join(' · '));
  await ctx.close();
}

// estimate real-world compressed weight of text assets (Vercel serves brotli)
console.log('\n### TEXT-ASSET COMPRESSION (what Vercel actually sends)');
for (const f of ['index.html','about/index.html','assets/css/main.css','assets/js/main.js']) {
  try {
    const buf = await readFile(join(ROOT, f));
    const g = gzipSync(buf).length, br = brotliCompressSync(buf).length;
    console.log(`  ${f.padEnd(24)} raw ${(buf.length/1024).toFixed(1)}KB → gzip ${(g/1024).toFixed(1)}KB → br ${(br/1024).toFixed(1)}KB`);
  } catch {}
}

await b.close();
srv.close();
console.log('\nPERF DONE');
