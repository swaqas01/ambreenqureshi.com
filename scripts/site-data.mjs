/* ============================================================
   ambreenqureshi.com — site data (single source of truth)
   Facts discipline: every claim traceable to /evidence sources.
   ============================================================ */

export const SITE = {
  origin: 'https://ambreenqureshi.com',
  name: 'Ambreen Qureshi',
  title: 'Founder & Managing Director, Amber Homes Real Estate',
  themeColor: '#0D111A',
  buildDate: '2026-07-28',
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
  gaId: '',                           // set GA4 Measurement ID here, then rebuild — analytics stays off while empty
  sameAs: [
    'https://www.propertyfinder.ae/en/agent/ambreen-qureshi-145563',
    'https://www.amberhomes.ae/about-us'
  ]
};

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/awards', label: 'Awards' },
  { href: '/media', label: 'Media' },
  { href: '/insights', label: 'Insights' },
  { href: '/amber-homes', label: 'Amber Homes' }
];
export const NAV_CTA = { href: '/contact', label: 'Private Conversation' };

export const OVERLAY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/awards', label: 'Awards & Recognition' },
  { href: '/media', label: 'Media' },
  { href: '/insights', label: 'Insights' },
  { href: '/amber-homes', label: 'Amber Homes' },
  { href: '/evidence', label: 'Evidence & Sources' },
  { href: '/contact', label: 'Private Conversation' }
];

/* ---------------- verified facts ---------------- */

export const FACTS = {
  role: 'Founder and Managing Director of Amber Homes Real Estate',
  founded: '2017',
  enteredRealEstate: '2011',
  platinumYears: '2022–2025',
  companySales: 'USD 1.5B+',
  companySalesQualifier: 'Internally reported cumulative company sales; company-level performance of over USD 1.5 billion in recent transactions is also cited in Business Wire coverage (December 2025).',
  rakbank: 'Featured by RAKBANK in its “She Means Business” campaign, highlighting female entrepreneurship in the UAE.',
  education: 'Gold medalist, Master’s in Economics — Government College (GC), Lahore.',
  interiorsYear: '2019',
  holidayHomesYear: '2021'
};

/* ---------------- home ---------------- */

export const HOME = {
  metaTitle: 'Ambreen Qureshi | Founder & Managing Director, Amber Homes Real Estate',
  metaDesc: 'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage (est. 2017) Platinum Agency for Meraas, Nakheel & Dubai Holding for four consecutive years (2022–2025). Featured by RAKBANK in “She Means Business”.',
  hero: {
    eyebrow: 'Founder & Managing Director · Amber Homes Real Estate',
    tagline: 'Building an award-recognised Dubai real estate company through disciplined operations, client care and long-term leadership.',
    recognition: 'Featured by RAKBANK in “She Means Business” · Platinum Agency for Meraas, Nakheel & Dubai Holding — four consecutive years, 2022–2025',
    ctaPrimary: { href: '/leadership', label: 'Explore Her Leadership' },
    ctaSecondary: { href: '/contact', label: 'Contact Amber Homes' },
    imgAlt: 'Ambreen Qureshi, Founder and Managing Director of Amber Homes Real Estate, holding the Black Onyx Award at the ceremony in Dubai'
  },
  stats: [
    { num: '2017', cap: 'Amber Homes founded in Dubai' },
    { num: '4 Years', cap: 'Platinum Agency — Meraas, Nakheel & Dubai Holding (2022–2025)' },
    { num: 'USD 1.5B+', cap: 'Cumulative Amber Homes sales — internally reported' },
    { num: 'RAKBANK', cap: 'Featured — “She Means Business” female entrepreneur' }
  ],
  meet: {
    heading: 'The operational leadership behind Amber Homes.',
    paras: [
      'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage established in 2017. She leads the company’s operations, team, processes and client-care standards, helping ensure that every enquiry, document and transaction is managed with consistency and accountability.',
      'Her role extends beyond day-to-day administration. It is the discipline behind the brokerage: how people are trained, how clients are supported, how documentation is followed through and how a company maintains its standards as it grows.',
      'A gold medalist in Economics, Ambreen has been leading in Dubai real estate since 2011 — building deep command of property investment, market cycles and master-planned communities before founding the company that carries her name: “Amber”, from Ambreen. Her journey as a female entrepreneur in Dubai has also been featured by RAKBANK through its “She Means Business” campaign.'
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
    heading: 'From a 2017 foundation to four consecutive years of recognition.',
    note: 'Company recognitions belong to Amber Homes Real Estate — the team Ambreen leads with Founder & Managing Partner Saad Waqas. Each entry links to its evidence.',
    items: [
      { year: '2011', text: 'Ambreen enters Dubai real estate, building command of property investment, market cycles and master-planned communities — the foundations on which Amber Homes is later built.', href: '/about' },
      { year: '2017', text: 'Amber Homes Real Estate founded in Dubai — RERA ORN 18690. The company is named after her: “Amber”, from Ambreen.', href: '/amber-homes' },
      { year: '2019', text: 'Amber Homes Interiors launched, extending the group beyond brokerage.', href: '/amber-homes' },
      { year: '2020', text: 'Nshama Town Square appreciation recognition for performance and partnership.', href: '/awards#recognition-2020' },
      { year: '2021', text: 'Amber Holiday Homes founded — particularly Ambreen’s brainchild. The company’s performance across Dubai Holding communities this year is honoured with the Platinum — Agents Award.', href: '/awards#recognition-2022' },
      { year: '2022', text: 'The Platinum Agency record begins: Dubai Holding Real Estate’s Platinum — Agents Award opens four consecutive Platinum years for Meraas, Nakheel & Dubai Holding.', href: '/awards#recognition-2022' },
      { year: '2023', text: 'Platinum recognition at the Black Onyx Awards, presented by Dubai Properties and Meraas.', href: '/awards#recognition-2023' },
      { year: '2024', text: 'Platinum Certificate of Appreciation — recognised as Platinum Top Performing Partner for 2023–2024.', href: '/awards#recognition-2024' },
      { year: '2025', text: 'Platinum Award from Meraas and Nakheel; Amber Homes named among the Top 10 Platinum Awardees.', href: '/awards#recognition-2025' },
      { year: '2026', text: 'Binghatti Broker Recognition Award for outstanding service to clients.', href: '/awards#recognition-2026' }
    ]
  },
  rakbank: {
    eyebrow: 'Women in Business',
    heading: 'A business journey recognised by RAKBANK.',
    paras: [
      'Ambreen Qureshi’s entrepreneurial journey was featured by RAKBANK through its “She Means Business” campaign, highlighting the ambition, resilience and operational leadership involved in building Amber Homes Real Estate.',
      '“She Means Business” is RAKBANK’s initiative spotlighting women entrepreneurs across the UAE — the founders building companies, teams and standards in one of the world’s most competitive business environments.'
    ],
    cta: { href: '/media#rakbank', label: 'View the RAKBANK Feature' }
  },
  amber: {
    heading: 'The company she built and continues to lead.',
    paras: [
      'Founded in Dubai in 2017, Amber Homes Real Estate operates across off-plan, ready and luxury property. As Founder and Managing Director, Ambreen oversees the operational structure supporting the company’s advisors, clients and transactions.',
      'Amber Homes operates under RERA ORN 18690 and has reported more than USD 1.5 billion in cumulative company sales — an internally reported figure. Its standing as a Platinum Agency for Meraas, Nakheel & Dubai Holding for four consecutive years reflects the consistency of the wider team and its operating standards.'
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
    title: 'Platinum Award — Top 10 Platinum Awardees',
    presenter: 'Meraas & Nakheel (Black Onyx Awards 2025)',
    exact: 'Platinum Award presented to Amber Homes Real Estate L.L.C “in recognition of exceptional performance, dedication, and outstanding accomplishment in achieving excellence within Dubai’s real estate community.” Named among the Top 10 Platinum Awardees.',
    img: '/assets/img/awards/amber-homes-black-onyx-platinum-2025.webp', w: 1122, h: 1402,
    alt: 'The Black Onyx Awards 2025 Platinum Award plaque and trophy presented to Amber Homes Real Estate LLC by Meraas and Nakheel',
    caption: 'Platinum Award, The Black Onyx Awards 2025, presented by Meraas and Nakheel — plaque wording transcribed on this page.',
    source: { label: 'Khaleej Times, 14 Nov 2025 (KT Network)', href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row' },
    group: 'platinum'
  },
  {
    id: 'recognition-2024', year: '2024',
    title: 'Platinum Certificate of Appreciation',
    presenter: 'Meraas & Nakheel (Black Onyx Awards)',
    exact: 'Platinum Certificate of Appreciation — recognised as “Platinum Top Performing Partner in 2023–2024”.',
    img: '/assets/img/awards/amber-homes-black-onyx-platinum-2024.webp', w: 1122, h: 1402,
    alt: 'Black Onyx Awards 2024 Platinum Certificate of Appreciation recognising Amber Homes Real Estate as Platinum Top Performing Partner 2023–2024',
    caption: 'Platinum Certificate of Appreciation, 2024 — Platinum Top Performing Partner, 2023–2024.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'platinum'
  },
  {
    id: 'recognition-2023', year: '2023',
    title: 'Platinum — Black Onyx Awards',
    presenter: 'Dubai Properties & Meraas',
    exact: 'Platinum recognition at the Black Onyx Awards 2023, presented by Dubai Properties and Meraas.',
    img: '/assets/img/awards/amber-homes-black-onyx-platinum-2023.webp', w: 1086, h: 1448,
    alt: 'Black Onyx Awards 2023 Platinum recognition presented to Amber Homes Real Estate by Dubai Properties and Meraas',
    caption: 'Platinum recognition, The Black Onyx Awards 2023 — presented by Dubai Properties and Meraas.',
    source: { label: 'Amber Homes awards record', href: 'https://www.amberhomes.ae/awards' },
    group: 'platinum'
  },
  {
    id: 'recognition-2022', year: '2022',
    title: 'Platinum — Agents Award',
    presenter: 'Dubai Holding Real Estate',
    exact: 'Platinum — Agents Award, presented by Dubai Holding Real Estate “in honour of outstanding sales performance in 2021” — the opening year of the four consecutive Platinum years for Meraas, Nakheel & Dubai Holding.',
    img: '/assets/img/awards/amber-homes-dubai-holding-platinum-agents-2021.webp', w: 1122, h: 1402,
    alt: 'Dubai Holding Real Estate Platinum Agents Award presented to Amber Homes Real Estate in honour of outstanding sales performance in 2021',
    caption: 'Dubai Holding Real Estate — Platinum Agents Award; the certificate honours outstanding sales performance in 2021.',
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
    type: 'Campaign feature',
    title: '“She Means Business” — female entrepreneurship in the UAE',
    date: 'Campaign feature',
    desc: 'Ambreen Qureshi’s entrepreneurial journey featured through RAKBANK’s “She Means Business” campaign for women entrepreneurs in the UAE. The original campaign asset is held by RAKBANK; a direct link is being added to this page.',
    href: null,
    note: 'Source: RAKBANK campaign — evidence link being added'
  },
  {
    outlet: 'Khaleej Times',
    type: 'KT Network — partner content',
    title: 'Amber Homes Real Estate awarded Top Platinum Sales Agency by Meraas, Nakheel and Dubai Holding for the fourth year in a row',
    date: '14 Nov 2025',
    desc: 'Coverage of the Black Onyx Awards 2025, held in front of the Burj Al Arab — including Ambreen Qureshi’s comment: “Our philosophy has always centred on excellence, integrity, and performance.”',
    href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-meraas-nakheel-and-dubai-holding-for-the-fourth-year-in-a-row',
    note: 'Labelled KT Network partner content'
  },
  {
    outlet: 'Business Wire',
    type: 'Press release — AETOSWire',
    title: 'Dubai’s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: '4 Dec 2025',
    desc: 'Company release citing over USD 1.5 billion in transactions and four consecutive years of Top Platinum recognition, with commentary from Managing Director Ambreen Qureshi on how clients rely on insight, early access and developer relationships.',
    href: 'https://www.businesswire.com/news/home/20251204865132/en/Dubais-Luxury-Real-Estate-Boom-Places-Amber-Homes-Real-Estate-at-the-Center-of-Global-High-Net-Worth-Investment-Momentum',
    note: 'Press release issued by Amber Homes Real Estate LLC — labelled accordingly'
  },
  {
    outlet: 'Khaleej Times',
    type: 'KT Network — partner content',
    title: 'Amber Homes Real Estate awarded “Top Platinum Sales Agency” by Dubai Holding, Meraas and Nakheel',
    date: 'Earlier coverage',
    desc: 'Earlier KT Network coverage of Amber Homes’ Platinum recognition within the Dubai Holding real-estate ecosystem.',
    href: 'https://www.khaleejtimes.com/kt-network/amber-homes-real-estate-awarded-top-platinum-sales-agency-by-dubai-holding-meraas-and-nakheel',
    note: 'Labelled KT Network partner content'
  },
  {
    outlet: 'YouTube — Amber Homes',
    type: 'Video',
    title: 'The Black Onyx Awards | Amber Homes Real Estate',
    date: 'Video record',
    desc: 'Ceremony footage from the Black Onyx Awards on the official Amber Homes channel.',
    href: 'https://www.youtube.com/watch?v=cEeE27OjNxg',
    note: 'Official Amber Homes channel'
  },
  {
    outlet: 'Yahoo Finance',
    type: 'Syndicated — Business Wire',
    title: 'Dubai’s Luxury Real Estate Boom Places Amber Homes Real Estate at the Center of Global High-Net-Worth Investment Momentum',
    date: '4 Dec 2025',
    desc: 'Syndication of the December 2025 company release. Listed here for the public record; it duplicates the Business Wire item above.',
    href: 'https://finance.yahoo.com/news/dubai-luxury-real-estate-boom-123000799.html',
    note: 'Syndicated copy — same underlying release'
  }
];

/* ---------------- FAQs (visible + schema) ---------------- */

export const FAQS = [
  { q: 'Who is Ambreen Qureshi?', a: 'Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, a RERA-licensed Dubai brokerage founded in 2017 (ORN 18690). She has worked in Dubai real estate since 2011.' },
  { q: 'What is Ambreen Qureshi’s role at Amber Homes?', a: 'She leads the company’s operations, team, processes and client-care standards — the structure behind how enquiries, documentation and transactions are managed as the brokerage grows.' },
  { q: 'Is Ambreen Qureshi the founder of Amber Homes?', a: 'Yes. She is publicly identified as Founder and Managing Director of Amber Homes Real Estate, which she leads together with Founder and Managing Partner Saad Waqas. The company is named after her — “Amber”, from Ambreen.' },
  { q: 'What recognition has Amber Homes received?', a: 'Amber Homes has been a Platinum Agency for Meraas, Nakheel & Dubai Holding for four consecutive years (2022–2025) — from the Dubai Holding Real Estate Platinum Agents Award through the Black Onyx Awards of 2023, 2024 and 2025 — with further recognition from Nshama (2020) and Binghatti (2026). Dubai Holding is Dubai’s largest government-owned developer group, whose ecosystem includes Meraas, Nakheel, Dubai Properties and Jumeirah Group.' },
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
        'At Amber Homes, that is the part of the business Ambreen Qureshi owns. The company’s four consecutive years of Platinum recognition, from 2022 through 2025, are usually discussed as a sales achievement, and they are. But sustained sales performance across Meraas, Nakheel and Dubai Holding communities is only possible when files close cleanly enough that developers keep allocating inventory and clients keep coming back.'
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
        'None of this produces a single dramatic win. What it produces is repetition: developers who keep allocating inventory because files close cleanly, clients who return because the second transaction felt like the first, and recognition — such as four consecutive years at Platinum level, 2022 through 2025 — that reflects sustained performance rather than one good season.',
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
        'From 2021, the external record thickens: a Platinum Agents Award from Dubai Holding Real Estate in 2021, then Platinum recognition at the Black Onyx Awards for four consecutive years, 2022 through 2025 — including the Platinum Certificate of Appreciation as a Top Performing Partner in 2023–2024 and a place among the Top 10 Platinum Awardees in 2025, with a Binghatti Broker Recognition Award following in 2026.',
        'It is worth being precise about what these recognitions are: they are company awards, earned by the whole Amber Homes team, within developer ecosystems that measure delivered performance. Awards are a lagging indicator. The leading indicators — clean files, trained teams, retained clients — were built in the years the certificates now summarise.'
      ]},
      { h2: 'Growing sideways, carefully', paras: [
        'The group has expanded twice: Amber Homes Interiors in 2019 and Amber Holiday Homes in 2021 — the short-stay business that is particularly Ambreen’s brainchild. Adjacent businesses test an operator’s discipline, because each new line multiplies the processes that can fail.',
        'Her operating rule has been to expand only where the group’s existing standards — documentation, client communication, accountability — transfer directly. Interiors and holiday homes both sit on the same foundation the brokerage runs on: defined processes, measured service and named ownership of every open item.'
      ]},
      { h2: 'What “institution” actually means here', paras: [
        'Amber Homes today operates under RERA ORN 18690 with more than USD 1.5 billion in internally reported cumulative company sales. But the more meaningful measure of institutionalisation is quieter: whether the company’s service is identical whichever advisor answers, whether its files would pass inspection on any given Tuesday, and whether its leadership can step out of any single transaction without the client feeling it.',
        'That is the operational journey — from a founder who personally guaranteed quality, to a company whose systems do. It is slower than marketing, harder than expansion, and it is the only version of growth that lasts.'
      ]}
    ]
  }
];

/* ---------------- evidence register ---------------- */

export const EVIDENCE = [
  {
    claim: 'Ambreen Qureshi is Founder and Managing Director of Amber Homes Real Estate',
    detail: 'Named as Founder and Managing Director across the official Amber Homes website, its leadership profiles, and December 2025 press coverage.',
    tag: 'Primary source',
    links: [
      { label: 'AmberHomes.ae — About / leadership', href: 'https://www.amberhomes.ae/about-us' },
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
    claim: 'Platinum Agency for Meraas, Nakheel & Dubai Holding — four consecutive years (2022–2025)',
    detail: 'Dubai Holding is Dubai’s largest government-owned developer group (Meraas, Nakheel, Dubai Properties, Jumeirah Group). The record: 2022 Platinum — Agents Award from Dubai Holding Real Estate (certificate honours 2021 performance), 2023 Platinum (Dubai Properties & Meraas), 2024 Platinum Certificate of Appreciation (Top Performing Partner 2023–2024), 2025 Platinum Award (Top 10 Platinum Awardees). Company recognitions earned by the Amber Homes team.',
    tag: 'Award record + press',
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
    detail: 'Internally reported cumulative business figure for Amber Homes Real Estate; not an independently audited financial statement. Company-level performance of “over USD 1.5 billion in transactions in recent years” also appears in the company’s December 2025 Business Wire release.',
    tag: 'Internally reported',
    links: [{ label: 'Business Wire, Dec 2025', href: 'https://www.businesswire.com/news/home/20251204865132/en/Dubais-Luxury-Real-Estate-Boom-Places-Amber-Homes-Real-Estate-at-the-Center-of-Global-High-Net-Worth-Investment-Momentum' }]
  },
  {
    claim: 'Featured by RAKBANK in “She Means Business”',
    detail: 'Campaign feature highlighting female entrepreneurship in the UAE, confirmed by Amber Homes leadership. The direct link to RAKBANK’s published asset is being added; until then this claim is presented with that qualification and no stronger designation (it is not described as an award or nomination).',
    tag: 'Campaign feature — link pending',
    links: [{ label: 'Media page — RAKBANK entry', href: '/media#rakbank' }]
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
