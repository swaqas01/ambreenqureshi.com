/* ============================================================
   QA crawler — every generated page:
   exactly one H1 · title/description present & sane lengths ·
   canonical present · JSON-LD parses · internal links + assets resolve ·
   no unresolved template markers · alt text on every <img>.
   ============================================================ */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
let failures = 0;
const fail = (page, msg) => { failures++; console.error(`FAIL ${page}: ${msg}`); };

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith('.html')) yield p;
  }
}

const pages = [...htmlFiles(OUT)];
for (const file of pages) {
  const rel = file.slice(OUT.length) || '/';
  const html = readFileSync(file, 'utf8');

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) fail(rel, `expected 1 <h1>, found ${h1s.length}`);

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!title) fail(rel, 'missing <title>');
  if (title.length > 75) console.warn(`warn ${rel}: title ${title.length} chars`);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!desc) fail(rel, 'missing meta description');
  if (desc.length < 70 || desc.length > 320) console.warn(`warn ${rel}: description ${desc.length} chars`);

  if (!html.includes('rel="canonical"')) fail(rel, 'missing canonical');
  if (/\$\{|undefined<|>undefined|\[object Object\]/.test(html)) fail(rel, 'unresolved template marker');

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(rel, 'JSON-LD parse error: ' + e.message); }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(m[0])) fail(rel, 'img missing alt: ' + m[0].slice(0, 80));
  }

  for (const m of html.matchAll(/(?:href|src)="(\/[^"#]*?)(?:#[^"]*)?"/g)) {
    const url = m[1];
    if (url.startsWith('//')) continue;
    let p = url;
    if (p.includes('.')) { if (!existsSync(join(OUT, p))) fail(rel, `asset 404: ${p}`); }
    else {
      const target = p === '/' ? join(OUT, 'index.html') : join(OUT, p, 'index.html');
      if (!existsSync(target)) fail(rel, `internal link 404: ${p}`);
    }
  }
}

const dupTitles = new Map();
for (const file of pages) {
  const t = (readFileSync(file, 'utf8').match(/<title>([^<]*)<\/title>/) || [])[1];
  if (dupTitles.has(t)) fail(file.slice(OUT.length), `duplicate title with ${dupTitles.get(t)}`);
  dupTitles.set(t, file.slice(OUT.length));
}

for (const req of ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'feed.xml', '404.html']) {
  if (!existsSync(join(OUT, req))) fail('/', `missing ${req}`);
}

if (failures) { console.error(`\nQA FAILED — ${failures} issue(s) across ${pages.length} pages`); process.exit(1); }
console.log(`QA PASSED — ${pages.length} pages checked (H1s, titles, descriptions, canonicals, JSON-LD, links, assets, alts)`);
