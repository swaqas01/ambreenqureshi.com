import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
mkdirSync('shots', { recursive: true });
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1728];
const pages = { home:'/', about:'/about/', leadership:'/leadership/', awards:'/awards/', media:'/media/', insights:'/insights/', article:'/insights/behind-a-successful-property-transaction/', amber:'/amber-homes/', evidence:'/evidence/', contact:'/contact/', privacy:'/privacy/', terms:'/terms/' };
const errors = [];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext();
const p = await ctx.newPage();
p.on('console', m => { if (m.type() === 'error') errors.push(m.location().url + ' :: ' + m.text()); });
p.on('pageerror', e => errors.push('PAGEERROR :: ' + e.message));
// homepage at every width
for (const w of widths) {
  await p.setViewportSize({ width: w, height: 900 });
  await p.goto('http://localhost:8777/', { waitUntil: 'networkidle' }).catch(()=>{});
  await p.evaluate(() => { document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')); document.body.classList.add('loaded'); });
  await p.waitForTimeout(500);
  await p.screenshot({ path: `shots/home-${w}.png`, fullPage: true });
}
// all pages at 1440 and 390
for (const [name, path] of Object.entries(pages)) {
  for (const w of [1440, 390]) {
    await p.setViewportSize({ width: w, height: 900 });
    await p.goto('http://localhost:8777' + path, { waitUntil: 'networkidle' }).catch(()=>{});
    await p.evaluate(() => { document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')); document.body.classList.add('loaded'); });
    await p.waitForTimeout(400);
    await p.screenshot({ path: `shots/${name}-${w}.png`, fullPage: true });
  }
}
// horizontal overflow check at 320/375/390
for (const w of [320, 375, 390, 430]) {
  for (const [name, path] of Object.entries(pages)) {
    await p.setViewportSize({ width: w, height: 900 });
    await p.goto('http://localhost:8777' + path, { waitUntil: 'domcontentloaded' }).catch(()=>{});
    await p.waitForTimeout(250);
    const over = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 1) console.log(`OVERFLOW ${name} @${w}: +${over}px`);
  }
}
await b.close();
console.log('console errors:', errors.length ? JSON.stringify([...new Set(errors)], null, 1) : 'none');
console.log('SHOTS DONE');
