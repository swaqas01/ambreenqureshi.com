/* ============================================================
   ambreenqureshi.com — site data (single source of truth)
   Facts discipline: every claim traceable to /evidence sources.
   ============================================================ */

export const SITE = {
  origin: 'https://ambreenqureshi.com',
  name: 'Ambreen Qureshi',
  title: 'Founder & Managing Director, Amber Homes Real Estate',
  themeColor: '#0D111A',
  buildDate: '2026-07-29',
  personId: 'https://ambreenqureshi.com/#person',
  orgId: 'https://www.amberhomes.ae/#organization',
  whatsapp: '971544556731',           // official Amber Homes WhatsApp (amberhomes.ae)
  phone: '+971 4 368 4497',           // official Amber Homes office line
  phoneHref: '+97143684497',
  email: 'ambreen@amberhomes.ae',     // published on amberhomes.ae/about-us
  emailFallback: 'info@amberhomes.ae',
  address: 'Office 2102, Burj Al Salam Tower, Sheikh Zayed Road, Dubai, UAE',
  orn: '18690',
  brn: '39777',                       // DLD licence — public on the Property Finder register
  gaId: 'G-9049Q5WTMS',               // GA4 Measurement ID (AmbreenQureshi.com property, Saad Waqas account)
  sameAs: [
    'https://www.wikidata.org/wiki/Q132734671',
    'https://about.me/ambreenqureshi',
    'https://www.crunchbase.com/person/ambreen-qureshi-8090',
    'https://www.propertyfinder.ae/en/agent/ambreen-qureshi-145563',
    'https://www.amberhomes.ae/about-us'
  ]
};

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/awards', label: 'Awards' },
  { href: '/media', label: 'Media' },
  { href: 'https://www.amberhomes.ae/', label: 'Amber Homes' }
];
export const NAV_CTA = { href: '/contact', label: 'Connect' };

export const OVERLAY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/awards', label: 'Awards & Recognition' },
  { href: '/media', label: 'Media' },
  { href: 'https://www.amberhomes.ae/', label: 'Amber Homes' },
  { href: '/evidence', label: 'Facts & Sources' },
  { href: '/contact', label: 'Connect' }
];

/* ---------------- verified facts ---------------- */

export const FACTS = {
  role: 'Founder and Managing Director of Amber Homes Real Estate',
  founded: '2017',
  enteredRealEstate: '2011',
  platinumYears: '2022–2025',
  companySales: 'USD 1.5B+',
  companySalesQualifier: 'Cumulative company sales figure from company records; company-level performance of over USD 1.5 billion in recent transactions is also cited in Business Wire coverage (December 2025).',
  rakbank: 'Featured by RAKBANK in its “She Means Business” campaign, highlighting female entrepreneurship in the UAE.',
  education: 'Gold medalist, Master’s in Economics — Government College (GC), Lahore.',
  interiorsYear: '2019',
  holidayHomesYear: '2021'
};

/* ---------------- home ---------------- */

export const HOME = {
  metaTitle: 'Ambreen Qureshi | Founder & Managing Director, Amber Homes Real Estate',
  metaDesc: 'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage (est. 2017) Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years (2022–2025). Featured by RAKBANK in “She Means Business”.',
  hero: {
    eyebrow: 'Founder & Managing Director · Amber Homes Real Estate',
    tagline: 'Building an award-recognised Dubai real estate company through disciplined operations, client care and long-term leadership.',
    recognition: 'Featured by RAKBANK in “She Means Business” · Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years',
    ctaPrimary: { href: '/about', label: 'About Ambreen' },
    ctaSecondary: { href: '/contact', label: 'Contact Amber Homes' },
    imgAlt: 'Ambreen Qureshi, Founder and Managing Director of Amber Homes Real Estate, holding the Black Onyx Award at the ceremony in Dubai'
  },
  stats: [
    { num: '2017', cap: 'Amber Homes founded in Dubai' },
    { num: '4 Years', cap: 'Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years' },
    { num: 'USD 1.5 Billion', cap: 'Cumulative Amber Homes Sales' },
    { num: 'RAKBANK', cap: 'Featured — “She Means Business” female entrepreneur' }
  ],
  meet: {
    heading: 'The Leadership Behind Amber Homes.',
    paras: [
      'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, an award-winning Dubai brokerage established in 2017. Under her leadership, the company has earned Top Platinum Sales Agency recognition from Dubai Holding, Meraas and Nakheel for four consecutive years.',
      'A gold medalist in Economics, Ambreen has worked in Dubai real estate since 2011, building expertise in property investment, team development and operational excellence. She leads the standards behind Amber Homes, from client care and training to documentation and transaction management.',
      'The name \u201cAmber Homes\u201d is derived from Ambreen, reflecting the personal vision behind the company.'
    ]
  },
  pillars: {
    heading: 'Growth is built through the systems clients rarely see.',
    note: 'The leadership approach behind Amber Homes — in practice, not in slogans.',
    items: [
      { title: 'Operational discipline', text: 'Clear processes, defined responsibilities and consistent follow-through across the brokerage.' },
      { title: 'Client care', text: 'Ensuring buyers and sellers remain informed from the first enquiry through documentation, completion and handover.' },
      { title: 'Team standards', text: 'Building a culture where service quality is not dependent on which team member happens to answer the phone.' },
      { title: 'Long-term reputation', text: 'Prioritising trust, consistency and sustainable company relationships rather than short-term visibility.' }
    ]
  },
  timeline: {
    heading: 'From a 2017 foundation to Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years.',
    note: '',
    items: [
      { year: '2011', text: 'Ambreen enters Dubai real estate, building command of property investment, market cycles and master-planned communities — the foundations on which Amber Homes is later built.', href: '/about' },
      { year: '2017', text: 'Amber Homes Real Estate founded in Dubai — RERA ORN 18690. The company is named after her: “Amber”, from Ambreen.', href: '/amber-homes' },
      { year: '2019', text: 'Amber Homes Interiors launched, extending the group beyond brokerage.', href: '/amber-homes' },
      { year: '2020', text: 'Nshama Town Square appreciation recognition for performance and partnership.', href: '/awards#recognition-2020' },
      { year: '2021', text: 'Amber Holiday Homes founded — particularly Ambreen’s brainchild.', href: '/amber-homes' },
      { year: '2022', text: 'Platinum Agency 2022 — Meraas - Nakheel & Dubai Holding. The record begins.', href: '/awards#recognition-2022' },
      { year: '2023', text: 'Platinum Agency 2023 — Meraas - Nakheel & Dubai Holding.', href: '/awards#recognition-2023' },
      { year: '2024', text: 'Platinum Agency 2024 — Meraas - Nakheel & Dubai Holding.', href: '/awards#recognition-2024' },
      { year: '2025', text: 'Platinum Agency 2025 — Meraas - Nakheel & Dubai Holding. Amber Homes Real Estate is the only company recognised as Platinum Agency for 4 Consecutive Years.', href: '/awards#recognition-2025' },
      { year: '2026', text: 'Binghatti Broker Recognition Award for outstanding service to clients.', href: '/awards#recognition-2026' }
    ]
  },
  rakbank: {
    eyebrow: 'Women in Business',
    heading: 'A business journey recognised by RAKBANK.',
    paras: [
      'Ambreen Qureshi’s entrepreneurial journey was featured by RAKBANK through its “She Means Business” campaign, highlighting the ambition, resilience and operational leadership involved in building Amber Homes Real Estate.',
      'In the official feature on RAKBANK’s Instagram, the bank introduces her simply: “Meet Ambreen, Founder of Amber Homes Real Estate” — her story of ambition and resilience, told as part of the #SheMeansBusiness campaign spotlighting women entrepreneurs across the UAE.'
    ],
    cta: { href: 'https://www.instagram.com/reel/Da5C9TzsWJJ/', label: 'Watch the RAKBANK Feature' }
  },
  amber: {
    heading: 'The company she built and continues to lead.',
    paras: [
      'Founded in Dubai in 2017, Amber Homes Real Estate operates across off-plan, ready and luxury property. As Founder and Managing Director, Ambreen oversees the operational structure supporting the company’s advisors, clients and transactions.',
      'Amber Homes operates under RERA ORN 18690, with more than USD 1.5 billion in cumulative company sales. Its record — Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years — reflects the consistency of the wider team and its operating standards.'
    ]
  },
  cta: {
    heading: 'Start a private conversation.',
    text: 'For enquiries relating to Amber Homes, client care, partnerships, media, leadership or business collaboration, contact Ambreen’s team in confidence.'
  }
};

/* ---------------- awards ---------------- */

export const AWARDS = [
  {
    id: 'recognition-2026', year: '2026',
    title: 'Broker Recognition Award',
    presenter: 'Binghatti',
    exact: 'Broker Recognition Award — presented to Amber Homes Real Estate “for outstanding service to clients”, signed by Chairman Muhammad BinGhatti.',
    img: '/assets/img/awards/amber-homes-binghatti-broker-award-2026.webp', w: 1086, h: 1448,
    alt: 'Binghatti Broker Recognition Award 2026 presented to Amber Homes Real Estate for outstanding service to clients',
    caption: 'Binghatti Broker Recognition Award, 2026 — company recognition, Amber Homes Real Estate.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'additional'
  },
  {
    id: 'recognition-2025', year: '2025',
    title: 'Platinum Agency 2025',
    presenter: 'Meraas - Nakheel & Dubai Holding',
    img2: '/assets/img/awards/amber-homes-platinum-2025-ceremony.webp', w2: 1366, h2: 768,
    alt2: 'Ambreen Qureshi and the Amber Homes Real Estate team on stage — Platinum Agency 2025',
    caption2: '2025 — receiving the recognition in person at the ceremony.',
    exact: '',
    img: '/assets/img/awards/amber-homes-platinum-award-2025.webp', w: 1080, h: 1080,
    imgA: '/assets/img/awards/amber-homes-platinum-trophy-2025-wide.webp', wA: 1678, hA: 937,
    alt: 'Platinum Agency 2025 award to Amber Homes Real Estate, led by Founder and Managing Director Ambreen Qureshi — Meraas - Nakheel & Dubai Holding',
    caption: 'Platinum Agency 2025 — Meraas - Nakheel & Dubai Holding.',
    source: { label: 'Khaleej Times coverage, 14 Nov 2025', href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row' },
    group: 'platinum'
  },
  {
    id: 'recognition-2024', year: '2024',
    title: 'Platinum Agency 2024',
    presenter: 'Meraas - Nakheel & Dubai Holding',
    img2: '/assets/img/awards/amber-homes-platinum-2024-ceremony.webp', w2: 1366, h2: 768,
    alt2: 'Ambreen Qureshi and the Amber Homes Real Estate team on stage — Platinum Agency 2024',
    caption2: '2024 — receiving the recognition in person at the ceremony.',
    exact: '',
    img: '/assets/img/awards/amber-homes-platinum-award-2024.webp', w: 1080, h: 1080,
    imgA: '/assets/img/awards/amber-homes-platinum-trophy-2024-wide.webp', wA: 1678, hA: 937,
    alt: 'Platinum Agency 2024 award to Amber Homes Real Estate, led by Founder and Managing Director Ambreen Qureshi — Meraas - Nakheel & Dubai Holding',
    caption: 'Platinum Agency 2024 — Meraas - Nakheel & Dubai Holding.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'platinum'
  },
  {
    id: 'recognition-2023', year: '2023',
    title: 'Platinum Agency 2023',
    presenter: 'Meraas - Nakheel & Dubai Holding',
    img2: '/assets/img/awards/amber-homes-platinum-2023-ceremony.webp', w2: 1366, h2: 768,
    alt2: 'Ambreen Qureshi and the Amber Homes Real Estate team on stage — Platinum Agency 2023',
    caption2: '2023 — receiving the recognition in person at the ceremony.',
    exact: '',
    img: '/assets/img/awards/amber-homes-platinum-award-2023.webp', w: 1080, h: 1080,
    imgA: '/assets/img/awards/amber-homes-platinum-trophy-2023-wide.webp', wA: 1678, hA: 937,
    alt: 'Platinum Agency 2023 award to Amber Homes Real Estate, led by Founder and Managing Director Ambreen Qureshi — Meraas - Nakheel & Dubai Holding',
    caption: 'Platinum Agency 2023 — Meraas - Nakheel & Dubai Holding.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'platinum'
  },
  {
    id: 'recognition-2022', year: '2022',
    title: 'Platinum Agency 2022',
    presenter: 'Meraas - Nakheel & Dubai Holding',
    img2: '/assets/img/awards/amber-homes-platinum-2022-ceremony.webp', w2: 1366, h2: 768,
    alt2: 'Ambreen Qureshi and the Amber Homes Real Estate team on stage — Platinum Agency 2022',
    caption2: '2022 — receiving the recognition in person at the ceremony.',
    exact: '',
    img: '/assets/img/awards/amber-homes-platinum-award-2022.webp', w: 1080, h: 1080,
    imgA: '/assets/img/awards/amber-homes-platinum-trophy-2022-wide.webp', wA: 1678, hA: 937,
    alt: 'Platinum Agency 2022 award to Amber Homes Real Estate, led by Founder and Managing Director Ambreen Qureshi — Meraas - Nakheel & Dubai Holding',
    caption: 'Platinum Agency 2022 — Meraas - Nakheel & Dubai Holding.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'platinum'
  },
  {
    id: 'recognition-2020', year: '2020',
    title: 'Town Square Dubai Appreciation Award',
    presenter: 'Nshama',
    exact: 'Appreciation Award “in appreciation of its performance and partnership at Town Square Dubai in 2020”.',
    img: '/assets/img/awards/amber-homes-nshama-town-square-2020.webp', w: 1122, h: 1402,
    alt: 'Nshama Town Square Dubai Appreciation Award 2020 presented to Amber Homes Real Estate for performance and partnership',
    caption: 'Nshama — Town Square Dubai Appreciation Award, 2020.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'additional'
  }
];

/* ---------------- media ---------------- */

export const MEDIA = [
  {
    id: 'rakbank',
    outlet: 'RAKBANK',
    type: 'Official feature — video',
    title: '\u201cShe Means Business\u201d — Ambreen, Founder of Amber Homes Real Estate',
    date: 'July 2026',
    desc: 'RAKBANK\u2019s official feature: \u201cMeet Ambreen, Founder of Amber Homes Real Estate\u201d — her journey of ambition and resilience in building a growing business, published on RAKBANK\u2019s Instagram as part of the #SheMeansBusiness campaign (English and Arabic).',
    href: 'https://www.instagram.com/reel/Da5C9TzsWJJ/',
    note: 'Official RAKBANK Instagram (@rakbank)'
  },
  {
    outlet: 'Khaleej Times',
    type: 'News',
    title: 'Amber Homes Real Estate awarded Top Platinum Sales Agency by Meraas, Nakheel and Dubai Holding for the fourth year in a row',
    date: '14 Nov 2025',
    desc: 'Coverage of the 2025 ceremony, held in front of the Burj Al Arab — including Ambreen Qureshi\u2019s comment: \u201cOur philosophy has always centred on excellence, integrity, and performance.\u201d',
    href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row',
    note: ''
  },
  {
    outlet: 'Business Wire',
    type: 'News',
    title: 'Dubai\u2019s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: '4 Dec 2025',
    desc: 'News citing over USD 1.5 billion in transactions and the record — Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years — with commentary from Managing Director Ambreen Qureshi on how clients rely on insight, early access and developer relationships.',
    href: 'https://www.businesswire.com/news/home/20251204865132/en/Dubais-Luxury-Real-Estate-Boom-Places-Amber-Homes-Real-Estate-at-the-Center-of-Global-High-Net-Worth-Investment-Momentum',
    note: ''
  },
  {
    outlet: 'Khaleej Times',
    type: 'News',
    title: 'Amber Homes Real Estate awarded \u201cTop Platinum Sales Agency\u201d by Dubai Holding, Meraas and Nakheel',
    date: '28 Sep 2024',
    desc: 'Coverage of Amber Homes\u2019 Platinum recognition from Dubai Holding, Meraas and Nakheel — an earlier year in the four-year record.',
    href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-dubai-holding-meraas-and-nakheel',
    note: ''
  },
  {
    outlet: 'Nakheel',
    type: 'Official recognition',
    title: 'Platinum Awards — The Black Onyx Awards, on Nakheel\u2019s official LinkedIn',
    date: 'Nov 2025',
    desc: 'Nakheel\u2019s own post marking the Black Onyx Platinum Awards — the developer\u2019s official channel, the stage on which Amber Homes\u2019 record stands.',
    href: 'https://www.linkedin.com/posts/nakheelofficial_platinum-awards-the-black-onyx-awards-activity-7395027979166363649-1D31',
    note: 'Official Nakheel LinkedIn'
  },
  {
    outlet: 'AP News',
    type: 'Global coverage',
    title: 'Dubai\u2019s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: 'Dec 2025',
    desc: 'The December 2025 Amber Homes story carried on the Associated Press newswire — global reach for the company\u2019s record.',
    href: 'https://apnews.com/press-release/business-wire/dubais-luxury-real-estate-boom-places-amber-homes-real-estate-at-the-center-of-global-high-net-worth-investment-momentum-9b589a75f3cd4af1baf630edc1fd708e',
    note: ''
  },
  {
    outlet: 'Yahoo Finance',
    type: 'Global coverage',
    title: 'Dubai\u2019s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: 'Dec 2025',
    desc: 'The same December 2025 Amber Homes story carried on Yahoo Finance.',
    href: 'https://finance.yahoo.com/news/dubai-luxury-real-estate-boom-123000799.html',
    note: ''
  },
  {
    outlet: 'Benzinga',
    type: 'Global coverage',
    title: 'Dubai\u2019s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: 'Dec 2025',
    desc: 'The December 2025 Amber Homes story carried on Benzinga.',
    href: 'https://www.benzinga.com/pressreleases/25/12/b49205198/dubais-luxury-real-estate-boom-places-amber-homes-real-estate-at-the-center-of-global-high-net-wor',
    note: ''
  },
  {
    outlet: 'AETOSWire',
    type: 'Global coverage',
    title: 'Dubai\u2019s Luxury Real Estate Boom — the original newswire story',
    date: 'Dec 2025',
    desc: 'The newswire carrying the December 2025 Amber Homes story across MENA and international outlets.',
    href: 'https://www.aetoswire.com/en/news/ah4122025e',
    note: ''
  },
  {
    outlet: 'Elite Bricks',
    type: 'International coverage',
    title: 'Amber Homes Real Estate awarded Top Platinum Sales Agency — French-market coverage',
    date: '15 Nov 2025',
    desc: 'French-language coverage of the fourth consecutive Platinum year.',
    href: 'https://elite-bricks.com/fr/2025/11/15/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row/',
    note: ''
  },
  {
    outlet: 'The Real Estate Reports',
    type: 'Market coverage',
    title: 'Dubai Real Estate Market Review — 14 October 2025',
    date: '14 Oct 2025',
    desc: 'Independent market review citing Amber Homes Real Estate.',
    href: 'https://www.therealestatereports.com/p/dubai-real-estate-market-review-14-oct-2025',
    note: ''
  },
  {
    outlet: 'Daily Parliament Times',
    type: 'Market coverage',
    title: 'Dubai Real Estate 2025: Why Pakistani Investors Are Doubling Down on Villas and Grade-A Offices',
    date: '12 Oct 2025',
    desc: 'Market commentary featuring Amber Homes\u2019 perspective on investor demand in Dubai.',
    href: 'https://www.dailyparliamenttimes.com/2025/10/12/dubai-real-estate-2025-why-pakistani-investors-are-doubling-down-on-villas-and-grade-a-offices/',
    note: ''
  },
  {
    outlet: 'Khaleej Times',
    type: 'News',
    title: 'Amber Homes Real Estate seals landmark plot deal worth Dh125 million; developer sets sights on luxury residential highrise',
    date: '15 Jun 2023',
    desc: 'Coverage of the company\u2019s AED 125 million Sheikh Zayed Road plot transaction.',
    href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-seals-landmark-plot-deal-worth-dh125-million-developer-sets-sights-on-luxur',
    note: ''
  },
  {
    outlet: 'Zawya (LSEG)',
    type: 'Coverage',
    title: 'UAE: Amber Homes Real Estate seals landmark plot deal worth over $34mln',
    date: '15 Jun 2023',
    desc: 'Zawya (LSEG) coverage of the landmark plot transaction.',
    href: 'https://www.zawya.com/en/business/real-estate/uae-amber-homes-real-estate-seals-landmark-plot-deal-worth-over-34mln-mse7wmp7',
    note: ''
  },
  {
    outlet: 'Nautilus Properties',
    type: 'Coverage',
    title: 'Amber Homes Sets New Heights with a $34 Million Landmark Plot Deal',
    date: '2023',
    desc: 'Industry coverage of the landmark Sheikh Zayed Road plot deal.',
    href: 'https://nautilusproperties.ae/unveiling-dubais-luxurious-real-estate-landscape-amber-homes-real-estate-sets-new-heights-with-a-34-million-landmark-plot-deal/',
    note: ''
  },
  {
    outlet: 'YouTube — Amber Homes',
    type: 'Video',
    title: 'The Black Onyx Awards | Amber Homes Real Estate',
    date: 'Video record',
    desc: 'Ceremony footage from the Black Onyx Awards on the official Amber Homes channel.',
    href: 'https://www.youtube.com/watch?v=cEeE27OjNxg',
    note: 'Official Amber Homes channel'
  }
];

/* ---------------- FAQs (visible + schema) ---------------- */

export const FAQS = [
  { q: 'Who is Ambreen Qureshi?', a: 'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage founded in 2017 (ORN 18690). She has worked in Dubai real estate since 2011.' },
  { q: 'What is Ambreen Qureshi’s role at Amber Homes?', a: 'She leads the company’s operations, team, processes and client-care standards — the structure behind how enquiries, documentation and transactions are managed as the brokerage grows.' },
  { q: 'Is Ambreen Qureshi the founder of Amber Homes?', a: 'Yes. She is publicly identified as Founder and Managing Director of Amber Homes Real Estate, which she leads together with Founder and Managing Partner Saad Waqas. The company is named after her — “Amber”, from Ambreen.' },
  { q: 'What recognition has Amber Homes received?', a: 'Platinum Agency 2022, 2023, 2024 and 2025 — Meraas - Nakheel & Dubai Holding. Amber Homes Real Estate is the only company recognised as Platinum Agency for 4 Consecutive Years. Further recognition: Nshama (2020) and Binghatti (2026).' },
  { q: 'Was Ambreen Qureshi featured by RAKBANK?', a: 'Yes. Her entrepreneurial journey was featured through RAKBANK’s “She Means Business” campaign, which highlights female entrepreneurship in the UAE.' },
  { q: 'What is Amber Homes’ RERA registration?', a: 'Amber Homes Real Estate operates under RERA ORN 18690, with its office at Burj Al Salam Tower, Sheikh Zayed Road, Dubai.' },
  { q: 'How can someone contact Ambreen Qureshi?', a: 'Enquiries can be submitted through the contact form on this website, by telephone on +971 4 368 4497, or through the Amber Homes team on WhatsApp. Client engagements are handled through Amber Homes Real Estate.' }
];

/* ---------------- insights ---------------- */

export const ARTICLES = [
  {
    slug: 'behind-a-successful-property-transaction',
    tag: 'Client Experience',
    title: 'What Clients Do Not See Behind a Successful Property Transaction',
    desc: 'A Dubai property transaction that feels effortless is usually carried by invisible operational work — verification, documentation, sequencing and follow-through. Here is what actually happens behind the scenes.',
    date: '2026-07-28', dateLabel: '28 July 2026', read: 8,
    intro: 'A property transaction that feels effortless to the client is almost never effortless inside the brokerage. Behind a smooth Dubai purchase sits a sequence of verifications, documents, deadlines and handoffs — and the quality of that invisible work is what separates a professional firm from a lucky one. This article sets out what that work looks like inside Amber Homes Real Estate, the Dubai brokerage founded in 2017 and led operationally by Ambreen Qureshi.',
    sections: [
      { h2: 'The transaction the client sees', paras: [
        'From the outside, a successful purchase looks like four moments: a viewing or presentation, a decision, a signature and a handover. When those four moments feel calm, clients reasonably assume the process was simple.',
        'In reality, each of those moments is the visible tip of a checklist. Between “we would like to proceed” and “here are your keys” sit dozens of steps that nobody celebrates — because when they are done properly, nobody notices them at all.'
      ]},
      { h2: 'The transaction the brokerage runs', paras: [
        'Before anything is signed, the file has to be clean: the seller’s title or the developer’s sales agreement verified, the unit’s status confirmed, any service-charge or mortgage encumbrances identified, and the buyer’s identity and source-of-funds documentation collected in line with UAE anti-money-laundering requirements. None of this is optional, and none of it is glamorous.',
        'Then comes sequencing. In an off-plan purchase, the reservation form, the sales and purchase agreement, the payment plan and the Oqood registration each have their own timing, and an error in one cascades into the others. In a secondary transaction, the Form F, the no-objection certificate from the developer, the mortgage clearance where applicable and the transfer appointment at the trustee office must line up — often across two banks, two brokers and two busy calendars.',
        'A brokerage that treats this as an administrative afterthought produces the classic failure pattern: a thrilled client at signature, a frustrated client at week six. A brokerage that treats process as the product produces the opposite — a client who is mildly bored by how uneventful their transaction was. Boredom, in transaction management, is a compliment.'
      ]},
      { h2: 'Why follow-through is a leadership issue', paras: [
        'It is tempting to file documentation under “back office” and leadership under “vision”. Operationally, the two are the same thing. Whether a coordinator chases a developer NOC on Tuesday or the following Tuesday is decided by the standards the company’s leadership actually enforces — not the ones printed in a brochure.',
        'At Amber Homes, that is the part of the business Ambreen Qureshi owns. The company’s record — Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years — is usually discussed as a sales achievement, and it is. But sustained sales performance across Meraas, Nakheel and Dubai Holding communities is only possible when files close cleanly enough that developers keep allocating inventory and clients keep coming back.'
      ]},
      { h2: 'What clients should ask any brokerage', paras: [
        'A practical test for any buyer choosing representation in Dubai: ask who inside the firm owns your file after signature. Ask how documentation deadlines are tracked, what happens if a payment date falls in a holiday week, and when you will hear from the firm without having to call first.',
        'A firm with real answers to those questions has an operating system. A firm without them has a sales team and hope. The difference rarely shows on launch day — it shows at week six, at handover, and in whether the firm is still standing behind the file years later.'
      ]}
    ]
  },
  {
    slug: 'building-service-standards-dubai-brokerage',
    tag: 'Operations',
    title: 'Building Service Standards Inside a Growing Dubai Real Estate Brokerage',
    desc: 'Service quality that depends on individual heroics does not scale. How a Dubai brokerage builds standards — training, communication rules and accountability — that survive growth.',
    date: '2026-07-28', dateLabel: '28 July 2026', read: 8,
    intro: 'Every brokerage begins with service quality that depends on its founders. The test of the business is whether quality survives the founders’ absence from any single transaction. This is the operational question Ambreen Qureshi has spent years answering at Amber Homes Real Estate: how to make good service a property of the company, not a property of whoever happens to answer the phone.',
    sections: [
      { h2: 'The founding-team trap', paras: [
        'In a young brokerage, the founders touch every deal, and clients feel it. Response times are fast because the owners are answering. Documentation is precise because the people signing the trade licence are checking it. Service is excellent — and completely unscalable.',
        'Growth breaks this quietly. The tenth hire does not carry the founders’ urgency by osmosis. The client who calls at 6pm reaches whoever is rostered, not whoever is invested. Most brokerages never notice the decline from the inside, because the founders still experience the company through the deals they personally handle.'
      ]},
      { h2: 'Standards are decisions, written down', paras: [
        'A service standard is nothing more mysterious than a decision made once, recorded, and enforced: every enquiry acknowledged within a defined window; every viewing followed by a documented next step; every transaction file structured the same way, so any colleague can pick it up cold; every client updated at defined milestones — not when they chase.',
        'Writing these down feels bureaucratic to salespeople and obvious to operators. It is both. The point of a written standard is not elegance; it is that it converts service quality from a personality trait into a company asset — something that can be trained, measured and defended in a difficult week.'
      ]},
      { h2: 'Training is the multiplier', paras: [
        'Recruitment brings in talent; training decides what that talent does on a Tuesday afternoon. A growing Dubai brokerage recruits from everywhere — different markets, different norms, different definitions of “done”. Without structured onboarding, each hire imports their previous firm’s habits, and the company’s standard becomes an average of other companies’ standards.',
        'The alternative is deliberate: new advisors learn the file structure, the communication rules, the documentation sequence and the escalation paths before they learn the sales pitch. In a market as fast as Dubai, this feels like a tax on the first month. It is the reason the thirty-sixth month looks like the first.'
      ]},
      { h2: 'Accountability without fear', paras: [
        'Standards fail in two directions: when nobody checks, and when checking becomes punishment. The working balance is boring and effective — regular file reviews, clear ownership of every open item, and a culture where surfacing a problem early is treated as competence, not confession.',
        'This is also where a female-led operations culture has, in practice, been an advantage at Amber Homes: meticulousness and follow-through are treated as senior skills, not support functions. The people who keep files clean sit at the centre of the company’s reputation, because they are the reason the reputation exists.'
      ]},
      { h2: 'The compounding return', paras: [
        'None of this produces a single dramatic win. What it produces is repetition: developers who keep allocating inventory because files close cleanly, clients who return because the second transaction felt like the first, and recognition — Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years — that reflects sustained performance rather than one good season.',
        'Service standards are the least visible investment a brokerage can make, and the only one that compounds.'
      ]}
    ]
  },
  {
    slug: 'from-entrepreneurship-to-institution-amber-homes',
    tag: 'Leadership',
    title: 'From Entrepreneurship to Institution: The Operational Journey of Amber Homes',
    desc: 'The distance between a founder-led venture and an institution is operational, not rhetorical. Milestones from Amber Homes’ journey since 2017 — and what each one required behind the scenes.',
    date: '2026-07-28', dateLabel: '28 July 2026', read: 9,
    intro: 'Companies do not become institutions by announcing it. They become institutions when their performance stops depending on any single person’s daily heroics — when systems, standards and culture carry the weight. This is the journey Amber Homes Real Estate has been on since 2017, and the part of the story that belongs to Founder and Managing Director Ambreen Qureshi.',
    sections: [
      { h2: 'Starting from the market floor', paras: [
        'Ambreen Qureshi entered Dubai real estate in 2011 — six years of first-hand market immersion, client mandates and complete transaction cycles before founding anything. A gold medalist in Economics, she brought an analyst’s discipline to an industry that often runs on momentum.',
        'That grounding matters to how Amber Homes was built. Founders who have personally carried transaction files tend to respect the unglamorous parts of the business; the company they build inherits that respect. When Amber Homes was founded in Dubai in 2017 — named “Amber”, from Ambreen — it started with a working theory of what goes wrong inside brokerages, learned first-hand.'
      ]},
      { h2: 'The first institution test: surviving 2020', paras: [
        'Every company founded in a boom meets its first real test in a downturn. For Dubai real estate, 2020 was that test. Amber Homes’ recognition from Nshama that year — an appreciation award for performance and partnership at Town Square Dubai — is a small marker with a large meaning: the company kept performing, and kept its developer relationships intact, in the hardest year the market had seen.',
        'Institutions are built in exactly these moments, because standards that survive a crisis become culture, and culture is what new hires absorb without being told.'
      ]},
      { h2: 'Recognition as a lagging indicator', paras: [
        'From 2022 the external record is uniform and unmatched: Platinum Agency 2022, 2023, 2024 and 2025 — Meraas - Nakheel & Dubai Holding. Amber Homes Real Estate is the only company recognised as Platinum Agency for 4 Consecutive Years. A Binghatti Broker Recognition Award followed in 2026.',
        'It is worth being precise about what these recognitions are: they are company awards, earned by the whole Amber Homes team, within developer ecosystems that measure delivered performance. Awards are a lagging indicator. The leading indicators — clean files, trained teams, retained clients — were built in the years the certificates now summarise.'
      ]},
      { h2: 'Growing sideways, carefully', paras: [
        'The group has expanded twice: Amber Homes Interiors in 2019 and Amber Holiday Homes in 2021 — the short-stay business that is particularly Ambreen’s brainchild. Adjacent businesses test an operator’s discipline, because each new line multiplies the processes that can fail.',
        'Her operating rule has been to expand only where the group’s existing standards — documentation, client communication, accountability — transfer directly. Interiors and holiday homes both sit on the same foundation the brokerage runs on: defined processes, measured service and named ownership of every open item.'
      ]},
      { h2: 'What “institution” actually means here', paras: [
        'Amber Homes today operates under RERA ORN 18690 with more than USD 1.5 billion in cumulative company sales. But the more meaningful measure of institutionalisation is quieter: whether the company’s service is identical whichever advisor answers, whether its files would pass inspection on any given Tuesday, and whether its leadership can step out of any single transaction without the client feeling it.',
        'That is the operational journey — from a founder who personally guaranteed quality, to a company whose systems do. It is slower than marketing, harder than expansion, and it is the only version of growth that lasts.'
      ]}
    ]
  }
];

/* ---------------- evidence register ---------------- */

export const EVIDENCE = [
  {
    claim: 'Ambreen Qureshi is Founder and Managing Director of Amber Homes Real Estate',
    detail: 'Named as Founder and Managing Director across the official Amber Homes website, its leadership profiles, and December 2025 news coverage.',
    tag: 'Primary source',
    links: [
      { label: 'AmberHomes.ae — About / leadership', href: 'https://www.amberhomes.ae/about-us' },
      { label: 'RAKBANK official reel — “Meet Ambreen, Founder of Amber Homes Real Estate”', href: 'https://www.instagram.com/reel/Da5C9TzsWJJ/' },
      { label: 'Business Wire, Dec 2025', href: 'https://www.businesswire.com/news/home/20251204865132/en/Dubais-Luxury-Real-Estate-Boom-Places-Amber-Homes-Real-Estate-at-the-Center-of-Global-High-Net-Worth-Investment-Momentum' }
    ]
  },
  {
    claim: 'Amber Homes Real Estate — founded in Dubai in 2017, RERA ORN 18690',
    detail: 'Company founding year and RERA Office Registration Number as published by the company and used across its regulatory footprint.',
    tag: 'Registry / corporate',
    links: [{ label: 'AmberHomes.ae', href: 'https://www.amberhomes.ae/' }]
  },
  {
    claim: 'Leading in Dubai real estate since 2011; DLD-licensed (BRN 39777)',
    detail: 'Leadership career start supplied by Amber Homes (official profile, 2026): she entered the market in 2011, developing command of property investments, market cycles and master-planned communities. Her DLD licence (BRN 39777) is independently visible on the public register.',
    tag: 'Company profile + public register',
    links: [{ label: 'Property Finder — public register listing', href: 'https://www.propertyfinder.ae/en/agent/ambreen-qureshi-145563' }]
  },
  {
    claim: 'Platinum Agency for Meraas, Nakheel & Dubai Holding for 4 Consecutive Years (2022–2025)',
    detail: 'The company’s canonical record: Platinum Agency 2022 · Platinum Agency 2023 · Platinum Agency 2024 · Platinum Agency 2025 — each from Meraas - Nakheel & Dubai Holding. Amber Homes Real Estate is the only company recognised as Platinum Agency for 4 Consecutive Years. Ceremony and award photographs for every year are published on the awards page.',
    tag: 'Award record + news',
    links: [
      { label: 'Khaleej Times, 14 Nov 2025 (KT Network)', href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row' },
      { label: 'Amber Homes — awards page', href: 'https://www.amberhomes.ae/awards' },
      { label: 'Award photographs on this site', href: '/awards' }
    ]
  },
  {
    claim: 'Additional company recognition — Binghatti 2026, Nshama 2020',
    detail: 'Binghatti Broker Recognition Award (2026, “for outstanding service to clients”); Nshama Town Square Appreciation Award (2020). Verified against award photographs held by the company.',
    tag: 'Award record',
    links: [{ label: 'Photographs and wording — /awards', href: '/awards' }]
  },
  {
    claim: 'USD 1.5 billion+ cumulative company sales',
    detail: 'Cumulative business figure from company records. Company-level performance of “over USD 1.5 billion in transactions in recent years” also appears in the company’s December 2025 Business Wire release.',
    tag: 'Company records',
    links: [{ label: 'Business Wire, Dec 2025', href: 'https://www.businesswire.com/news/home/20251204865132/en/Dubais-Luxury-Real-Estate-Boom-Places-Amber-Homes-Real-Estate-at-the-Center-of-Global-High-Net-Worth-Investment-Momentum' }]
  },
  {
    claim: 'Featured by RAKBANK in “She Means Business”',
    detail: 'Verified: RAKBANK’s official Instagram published the feature in July 2026, introducing her as “Meet Ambreen, Founder of Amber Homes Real Estate” under the #SheMeansBusiness campaign. Presented as a campaign feature (not an award or nomination).',
    tag: 'Verified — official RAKBANK channel',
    links: [{ label: 'RAKBANK — official reel (Instagram)', href: 'https://www.instagram.com/reel/Da5C9TzsWJJ/' }, { label: 'Media page — RAKBANK entry', href: '/media#rakbank' }]
  },
  {
    claim: 'Education — Gold medalist, Master’s in Economics (Government College, Lahore)',
    detail: 'Supplied by Amber Homes leadership (official company profile, 2026).',
    tag: 'Company profile',
    links: []
  },
  {
    claim: 'Amber Homes Interiors (2019) and Amber Holiday Homes (2021)',
    detail: 'Group expansion dates per the official Amber Homes leadership profile. Amber Holiday Homes operates as a sister company for short-stay rental.',
    tag: 'Company profile',
    links: [{ label: 'AmberHomes.ae', href: 'https://www.amberhomes.ae/' }]
  }
];

export const ENQUIRY_TYPES = [
  'Amber Homes property enquiry',
  'Existing client support',
  'Business partnership',
  'Media or interview',
  'Leadership or speaking enquiry',
  'General enquiry'
];
