import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = new URL('../site/', import.meta.url).pathname;
const TYPES = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain' };
const srv = createServer(async (req,res)=>{
  try{
    let p = decodeURIComponent(req.url.split('?')[0]);
    let fp = join(ROOT,p);
    try{ const s= await stat(fp); if(s.isDirectory()) fp=join(fp,'index.html'); }
    catch{ try{ await stat(fp+'.html'); fp=fp+'.html'; }catch{ fp=join(ROOT,p,'index.html'); } }
    const b= await readFile(fp);
    res.writeHead(200,{'content-type':TYPES[extname(fp)]||'application/octet-stream'}); res.end(b);
  }catch{ res.writeHead(404); res.end('nf'); }
});
await new Promise(r=>srv.listen(8781,r));
await mkdir('shots-new',{recursive:true});

const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium' });
const errs = [];

// selector-targeted shots so I see the new components, not whole pages
const targets = [
  { name:'home-knownfor',  path:'/',         sel:'.known-list' },
  { name:'awards-role',    path:'/awards',   sel:'.lead-list' },
  { name:'evidence-verify',path:'/evidence', sel:'.evidence-list' },
  { name:'evidence-changelog', path:'/evidence', sel:'.changelog' },
  { name:'media-chrono',   path:'/media',    sel:'.chrono' },
  { name:'footer',         path:'/',         sel:'.footer-grid' },
  { name:'timeline',       path:'/timeline', sel:'.chrono' },
  { name:'presskit-bio',   path:'/press-kit',sel:'.lead-list' },
  { name:'presskit-facts', path:'/press-kit',sel:'.facts-table' }
];

for (const w of [1440, 390]) {
  for (const t of targets) {
    const ctx = await b.newContext({ viewport:{ width:w, height:900 } });
    const p = await ctx.newPage();
    p.on('pageerror', e=>errs.push(t.name+' :: '+e.message));
    await p.goto('http://localhost:8781'+t.path,{waitUntil:'networkidle'}).catch(()=>{});
    await p.evaluate(async()=>{ document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')); document.body.classList.add('loaded'); document.querySelectorAll('img[loading="lazy"]').forEach(i=>{i.loading='eager';}); await Promise.all([...document.images].filter(i=>!i.complete).map(i=>new Promise(r=>{i.onload=i.onerror=r;}))); });
    await p.waitForTimeout(350);
    const el = await p.$(t.sel);
    if (el) await el.screenshot({ path:`shots-new/${t.name}-${w}.png` }).catch(()=>{});
    else console.log('MISSING SELECTOR', t.name, t.sel);
    await ctx.close();
  }
}

// overflow regression check across every page and width
for (const w of [320,375,390,768,1024,1440]) {
  for (const path of ['/','/about','/awards','/media','/evidence','/timeline','/press-kit','/contact','/privacy','/terms']) {
    const ctx = await b.newContext({ viewport:{ width:w, height:900 } });
    const p = await ctx.newPage();
    await p.goto('http://localhost:8781'+path,{waitUntil:'domcontentloaded'}).catch(()=>{});
    await p.waitForTimeout(150);
    const over = await p.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
    if (over>1) console.log(`OVERFLOW ${path} @${w}: +${over}px`);
    await ctx.close();
  }
}
await b.close(); srv.close();
console.log('page errors:', errs.length?[...new Set(errs)]:'none');
console.log('SHOTS DONE');
