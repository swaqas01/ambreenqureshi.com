/* ============================================================
   ambreenqureshi.com — builders (page shell + components)
   Static HTML output, Midnight Keynote design family.
   ============================================================ */
import { SITE, NAV, NAV_CTA, OVERLAY_NAV, FAQS } from './site-data.mjs';

export const esc = (s) => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const abs = (path) => SITE.origin + (path === '/' ? '/' : path);

/* ---------- head ---------- */
export function head({ title, desc, path, ogType = 'website', ogImage = '/assets/og/og-default.png', ogImageAlt = 'Ambreen Qureshi — Founder & Managing Director, Amber Homes Real Estate, Dubai', schema }) {
  const canonical = abs(path);
  const ga = SITE.gaId ? `
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${SITE.gaId}',{anonymize_ip:true});</script>` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preload" href="/assets/fonts/cormorant-garamond-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/manrope-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="${SITE.themeColor}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Ambreen Qureshi">
<meta property="og:image" content="${SITE.origin}${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(ogImageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE.origin}${ogImage}">
<link rel="icon" type="image/png" sizes="256x256" href="/assets/img/favicon-256.png">
<link rel="icon" type="image/png" sizes="64x64" href="/assets/img/favicon-64.png">
<link rel="apple-touch-icon" href="/assets/img/favicon-180.png">
<link rel="alternate" type="application/rss+xml" title="Ambreen Qureshi — Insights" href="${SITE.origin}/feed.xml">
<link rel="stylesheet" href="/assets/css/main.css">${ga}
<script type="application/ld+json">
${JSON.stringify(schema, null, 1)}
</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
`;
}

/* ---------- shared schema nodes ---------- */
export function personNode() {
  return {
    '@type': 'Person',
    '@id': SITE.personId,
    name: 'Ambreen Qureshi',
    alternateName: 'Ambreen Kiran Qureshi',
    url: SITE.origin + '/',
    image: SITE.origin + '/assets/img/ambreen-qureshi-founder-managing-director.webp',
    jobTitle: 'Founder & Managing Director',
    description: 'Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage founded in 2017. She leads the company’s operations, team, processes and client-care standards, and was featured by RAKBANK in its “She Means Business” campaign for female entrepreneurs in the UAE.',
    worksFor: { '@id': SITE.orgId },
    founder: { '@id': SITE.orgId },
    gender: 'Female',
    knowsLanguage: ['English', 'Urdu'],
    knowsAbout: [
      'Real estate brokerage operations',
      'Client service standards in real estate',
      'Dubai off-plan transaction process',
      'Real estate team leadership and training',
      'Female entrepreneurship in the UAE',
      'Short-stay holiday home operations'
    ],
    identifier: { '@type': 'PropertyValue', propertyID: 'Dubai Land Department Broker Number', value: SITE.brn },
    homeLocation: { '@type': 'Place', name: 'Dubai, United Arab Emirates' },
    workLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
    sameAs: SITE.sameAs
  };
}

export function orgNode() {
  return {
    '@type': 'RealEstateAgent',
    '@id': SITE.orgId,
    name: 'Amber Homes Real Estate',
    url: 'https://www.amberhomes.ae/',
    foundingDate: '2017',
    founder: [{ '@id': SITE.personId }, { '@type': 'Person', name: 'Saad Waqas', url: 'https://saadwaqas.com/', jobTitle: 'Founder & Managing Partner' }],
    address: { '@type': 'PostalAddress', streetAddress: 'Office 2102, Burj Al Salam Tower, Sheikh Zayed Road', addressLocality: 'Dubai', addressCountry: 'AE' },
    areaServed: 'Dubai, United Arab Emirates',
    telephone: '+97143684497',
    identifier: [{ '@type': 'PropertyValue', name: 'RERA ORN', value: SITE.orn }],
    employee: { '@id': SITE.personId }
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE.origin + '/#website',
    url: SITE.origin + '/',
    name: 'Ambreen Qureshi',
    inLanguage: 'en',
    publisher: { '@id': SITE.personId },
    about: { '@id': SITE.personId }
  };
}

export function webpageNode({ path, title, breadcrumb, type = 'WebPage', extra = {} }) {
  const node = {
    '@type': type,
    '@id': abs(path) + '#webpage',
    url: abs(path),
    name: title,
    isPartOf: { '@id': SITE.origin + '/#website' },
    about: { '@id': SITE.personId },
    inLanguage: 'en',
    ...extra
  };
  if (breadcrumb) {
    node.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: abs(b.path) }))
    };
  }
  return node;
}

export function faqNode(faqs, path = '/') {
  return {
    '@type': 'FAQPage',
    '@id': abs(path) + '#faq',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
}

/* ---------- header / footer ---------- */
export function header(activePath = '') {
  const links = NAV.map(n => `      <a href="${n.href}"${activePath === n.href ? ' aria-current="page"' : ''}>${n.label}</a>`).join('\n');
  return `<header class="site-header">
  <div class="container">
    <a class="brandmark" href="/" aria-label="Ambreen Qureshi — home">
      <span class="bm-first">Ambreen</span><span class="bm-div" aria-hidden="true"></span><span class="bm-last">Qureshi</span>
    </a>
    <nav class="site-nav" aria-label="Primary">
${links}
      <a class="btn" href="${NAV_CTA.href}">${NAV_CTA.label}</a>
    </nav>
    <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu"><span></span><span></span></button>
  </div>
</header>

<div class="overlay" id="site-menu" aria-hidden="true">
  <button class="overlay-close" aria-label="Close menu">&#10005;</button>
  <nav aria-label="Menu">
${OVERLAY_NAV.map(n => `    <a href="${n.href}">${n.label}</a>`).join('\n')}
  </nav>
  <div class="overlay-meta">Ambreen Qureshi &middot; Dubai &middot; United Arab Emirates</div>
</div>
<main id="main">
`;
}

export function footer() {
  return `</main>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <p class="footer-brand"><span class="bm-first">Ambreen</span><span class="bm-div" aria-hidden="true"></span><span class="bm-last">Qureshi</span></p>
        <p class="footer-tag">Founder &amp; Managing Director of Amber Homes Real Estate &mdash; a RERA-licensed Dubai brokerage, ORN ${SITE.orn} &middot; DLD BRN ${SITE.brn} &middot; Dubai, UAE.</p>
        <div class="socials">
          <a href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello — I would like to reach Ambreen Qureshi’s team at Amber Homes.')}" rel="noopener" aria-label="WhatsApp — Amber Homes"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.1.1-.3.2-.4v-.4L9.7 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.2Z"/></svg></a>
          <a href="mailto:${SITE.email}" aria-label="Email Ambreen Qureshi’s team"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm10 7.5L3.5 6H20.5L12 11.5zM3 8.2V18h18V8.2l-9 6-9-6z"/></svg></a>
          <a href="tel:${SITE.phoneHref}" aria-label="Call Amber Homes"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 2.2Z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <a href="/about">About</a>
        <a href="/leadership">Leadership</a>
        <a href="/awards">Awards &amp; Recognition</a>
        <a href="/media">Media</a>
        <a href="/insights">Insights</a>
        <a href="/evidence">Evidence &amp; Sources</a>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <a href="/contact">Private Conversation</a>
        <a href="https://www.amberhomes.ae/" rel="noopener">Amber Homes Real Estate<span class="ext" aria-hidden="true"> &#8599;</span></a>
        <a href="https://saadwaqas.com/" rel="noopener">Saad Waqas &mdash; Managing Partner<span class="ext" aria-hidden="true"> &#8599;</span></a>
        <a href="/contact">Contact</a>
      </div>
    </div>
    <div class="footer-legal">
      <span>&copy; 2026 Ambreen Qureshi. All rights reserved. &middot; Amber Homes Real Estate &middot; RERA ORN ${SITE.orn} &middot; Dubai, UAE</span>
      <span><a href="/privacy">Privacy Policy</a> &nbsp;&middot;&nbsp; <a href="/terms">Terms &amp; Disclaimer</a></span>
    </div>
    <p class="footer-legal footer-disclaimer">Information on this website is general in nature. Property information, availability and pricing change and require independent confirmation. Nothing here constitutes guaranteed investment, legal, tax or financial advice. Client engagements are handled through Amber Homes Real Estate (RERA ORN ${SITE.orn}).</p>
  </div>
</footer>

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

/* ---------- shared components ---------- */
export const rail = (num, label) => `<div class="rail"><b>${num}</b><span>${esc(label)}</span></div>`;

export function pageHeader(crumbLabel, h1, lede) {
  return `  <section class="page-header">
    <div class="container">
      <p class="crumb"><a href="/">Home</a> &nbsp;/&nbsp; ${esc(crumbLabel)}</p>
      <h1>${h1}</h1>
      ${lede ? `<p class="lede">${lede}</p>` : ''}
    </div>
  </section>
`;
}

export function faqBlock(faqs, heading = 'Questions, answered plainly.', num = null, eyebrow = 'FAQ') {
  return `  <section class="section" id="faq">
    <div class="container reveal">
      ${num ? rail(num, eyebrow) : ''}
      <h2 class="section-title">${esc(heading)}</h2>
      <div class="faq-block">
${faqs.map(f => `        <details class="faq"><summary>${esc(f.q)}</summary><div class="faq-a"><p>${esc(f.a)}</p></div></details>`).join('\n')}
      </div>
    </div>
  </section>
`;
}

export function ctaInline(line = 'Begin a private conversation with Ambreen’s team — handled in confidence.') {
  return `  <section class="cta-inline reveal">
    <div class="inline-wrap">
      <p class="cta-line">${esc(line)}</p>
      <div class="cta-actions">
        <a class="btn" href="/contact">Contact Ambreen&rsquo;s Team</a>
        <a class="btn-ghost" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello — I would like to reach Ambreen Qureshi’s team at Amber Homes.')}" rel="noopener">WhatsApp Amber Homes<span class="ext" aria-hidden="true"> &#8599;</span></a>
      </div>
    </div>
  </section>
`;
}
