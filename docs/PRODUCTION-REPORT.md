# AmbreenQureshi.com — Production Report
**Date:** 28 July 2026 · **Prepared for:** Saad Waqas

---

## 1. Live production domain
**https://ambreenqureshi.com** — live on HTTPS with valid SSL. Verified from four global DNS resolvers (Google, Cloudflare, Quad9, OpenDNS) and from GoDaddy's own authoritative nameserver (ns53.domaincontrol.com). Permanent Vercel mirror: https://ambreenqureshi-com.vercel.app. *(Any machine that looked the domain up before ~23:55 Dubai time may show GoDaddy's old "Coming Soon" page for up to 1 hour — local DNS cache only.)*

## 2. Deployment project
Vercel project **`ambreenqureshi-com`** on the **saad-waqas personal (Hobby) scope** — a brand-new project. The AmberCRM team (`team_4E44Z5LhaJyWvTJRWkdAj9Nn`) was never touched.

## 3. Repository
**github.com/swaqas01/ambreenqureshi.com** (new, public, master branch) — Git-connected to Vercel, so every push to master auto-deploys production. Git author: swaqas01.

## 4. Canonical hostname
`https://ambreenqureshi.com` (apex). `www.ambreenqureshi.com` 308-redirects to apex (configured both at the Vercel domain level and in vercel.json). HTTP→HTTPS enforced by Vercel + HSTS preload header.

## 5. Pages created (14 + system)
`/` · `/about` · `/leadership` · `/awards` · `/media` · `/insights` · 3 articles under `/insights/…` · `/amber-homes` · `/evidence` · `/contact` · `/privacy` · `/terms` · custom `404` · `robots.txt` · `sitemap.xml` · `llms.txt` · `llms-full.txt` · `feed.xml` (RSS) · IndexNow key file.

## 6. Major components
Sticky blurred header with Ambreen|Qureshi wordmark · full-screen overlay menu · editorial hero with bleeding portrait (her actual award-night photo) · 4-stat metric row · numbered section rails (01–10) · leadership pillar grid · 2011→2026 timeline · award-year cards with real photography · quote panels (verified quotes only) · Amber Homes band with the gold A mark · press rows with content-type labels · insight cards + article layout with author box · evidence register rows · contact form (client + serverless) · FAQ accordions · scroll reveals, grain, ambient glows, cursor glow · skip-link and reduced-motion support.

## 7. Content published
All copy is original and Ambreen-specific (nothing copied from saadwaqas.com). Homepage (10 sections incl. visible FAQ), deep-bio About with verified-facts table, Leadership authority page with answer-first summaries, evidence-led Awards record (exact certificate wording transcribed, incl. the 2025 plaque), Media page with labelled coverage (KT Network partner content, Business Wire release, official YouTube video embedded via youtube-nocookie), 3 substantive launch articles (~8–9 min reads) under the editorial byline "Leadership notes from Ambreen Qureshi and the Amber Homes operating team", Amber Homes company page, full Evidence & Sources register with correction route, Contact, Privacy, Terms.

**Facts used (all sourced):** Founder & Managing Director · in real estate since 2011 · gold medalist, Master's in Economics (GC Lahore) · Amber Homes founded 2017, named "Amber" from Ambreen · ORN 18690 · BRN 39777 (public Property Finder register) · USD 1.5B+ cumulative company sales (always labelled internally reported) · Platinum 2022–2025 (Black Onyx) · Dubai Holding 2021 · Nshama 2020 · Binghatti 2026 · Amber Homes Interiors 2019 · Amber Holiday Homes 2021 (her brainchild) · RAKBANK "She Means Business" feature · two verified quotes (Khaleej Times 14 Nov 2025; Business Wire 4 Dec 2025).

## 8. Structured data (JSON-LD, validated in QA on every page)
`Person` (@id ambreenqureshi.com/#person, BRN identifier, conservative knowsAbout, sameAs to Property Finder + amberhomes.ae) · `RealEstateAgent` Organization (@id www.amberhomes.ae/#organization, both founders) · `WebSite` · `ProfilePage` (home + about, mainEntity=Person) · `WebPage`+`BreadcrumbList` on all subpages · `FAQPage` (homepage, matching visible FAQs) · `Article` ×3 (author = Amber Homes editorial Organization, contributor = Ambreen — no false personal authorship) · `VideoObject` (media page, real embed) · `ImageObject` for award photos. No review/star/award-schema manipulation.

## 9. SEO configuration
Unique titles + descriptions on all 15 pages (QA-enforced) · canonicals on every page · OG/Twitter cards with generated 1200×630 brand image + awards OG variant · clean URLs, lowercase, no trailing slash · sitemap.xml with lastmod · robots.txt welcoming Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended (api routes disallowed) · custom 404 · immutable caching for assets · security headers incl. CSP, HSTS preload, nosniff, frame-ancestors none.

## 10. GEO / LLM visibility
Answer-first opening on every major page and every Leadership section · visible FAQ blocks written for extraction · facts tables (About, Amber Homes) · exact-wording award transcriptions with sources · `/evidence` source-of-truth register with methodology and correction route · `/llms.txt` + `/llms-full.txt` (identity, role definition, recognition timeline, verified quotes, usage rules for AI assistants) · consistent entity description across every page · semantic HTML with ARIA labels and named landmarks.

## 11. Analytics
GA4 loader is wired but **off by default** (no tracking cookies ship today; privacy policy reflects this). To activate: create a GA4 property, paste the Measurement ID into `SITE.gaId` in `scripts/site-data.mjs`, push — auto-deploys. Event tracking is pre-wired for WhatsApp clicks, email clicks, phone clicks, amberhomes.ae referrals, saadwaqas.com referrals and contact-form submissions; GA4 auto-captures chatgpt.com / perplexity referrers and UTM parameters once enabled.

## 12. Google Search Console — DONE
Domain property `ambreenqureshi.com` **verified** (via GoDaddy Domain Connect, DNS method). Sitemap submitted — status **Success, 14 pages discovered** (29 Jul 2026, Dubai time).

## 13. Bing Webmaster — DONE
Site imported from GSC into your existing Bing Webmaster account (alongside saadwaqas.com and www.amberhomes.ae). Sitemap submitted — status **Processing**.

## 14. IndexNow
Key generated and hosted at `/a91f4c7e2b8d5a30c6f1e9b4d7a2c8e5.txt`; homepage pinged to api.indexnow.org. Bing's IndexNow panel will reflect submissions; future URL pings are one GET request.

## 15. DNS status
GoDaddy zone (verified in the account — domain spelled **ambreenqureshi.com**, correct Q-U-R-E-S-H-I; no alternate spelling owned, so no extra redirect needed): `A @ → 216.198.79.1` · `CNAME www → 946e008b7e08d308.vercel-dns-017.com` · Google-site-verification TXT added by Domain Connect. NS/SOA untouched. Propagation confirmed global.

## 16. SSL
Apex certificate issued and serving (verified over HTTPS). www certificate auto-issued by Vercel (was mid-issuance at last check; redirect delivers to apex regardless).

## 17. Contact form delivery
`/api/contact` serverless endpoint is live: server-side validation, enquiry-type whitelist, consent required, honeypot, per-IP rate limiting (5/10 min), X-Robots-Tag noindex, no message content in logs. **Email relay pending one input:** add `RESEND_API_KEY` (plus optional CONTACT_TO/CC/FROM) in Vercel → the form emails ambreen@amberhomes.ae (cc info@). Until then the form gracefully hands the composed message to official Amber Homes WhatsApp (+971 54 455 6731) — no dead ends. Direct channels listed: office +971 4 368 4497, WhatsApp, ambreen@amberhomes.ae (published on amberhomes.ae), info@amberhomes.ae.

## 18. Mobile & desktop testing
Playwright (Chromium) full-page screenshots at **320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1728 px** for the homepage and 1440+390 for all 12 page types; horizontal-overflow scan across all pages at 320–430 px (one contact-page overflow found and fixed); **zero browser console errors**; reduced-motion, keyboard focus, skip-link, 44px tap targets, alt text on every image (QA-enforced).

## 19. Build, lint, type-check
`node scripts/gen-pages.mjs` (build) — clean. `node scripts/qa.mjs` — **QA PASSED, 15 pages**: exactly one H1 per page, title/description present and unique, canonicals, JSON-LD parses, all internal links + assets resolve, every img has alt. (Static-HTML architecture — no TS compile; generator and API are plain ESM validated by Node. Six title-length advisories only, kept for entity richness.)

## 20. Claims deliberately excluded (no evidence available)
- Any **personal sales figure** for Ambreen (spec prohibition) — company figure only, labelled internally reported.
- **"RAKBANK award/nomination"** phrasing — presented strictly as a campaign *feature*; the direct RAKBANK link/asset slot on /media is ready and marked "link being added" until you supply it.
- **"No. 1 brokerage in Dubai"** and all superlatives.
- The **AED 20B+ team transactions** figure from the internal profile PDF (scope unverifiable).
- **"5 consecutive Platinum years through 2026"** (internal note) — public record supports **four consecutive years 2022–2025**, which is what the site states; 2026 shown as the separate Binghatti recognition.
- 2022 award photograph — not in the supplied assets; 2022 entry honestly labelled "company records", slot ready.

## 21–23. Sister properties untouched — CONFIRMED
- **saadwaqas.com** — used as design reference only (read-only copy from your Downloads). Re-fetched after deployment: unchanged, serving normally. Its repo, Vercel project and DNS (Tasjeel) untouched.
- **AmberHomes.ae** — read-only research only; no changes, no DNS edits.
- **AmberCRM (crm.amberhomes.ai)** and Vercel team `team_4E44Z5LhaJyWvTJRWkdAj9Nn` — never accessed. salescenter.ae — never accessed.
- Isolation: separate repo, separate Vercel project, separate domain/DNS records, zero shared environment variables, separate GSC + Bing properties.

---

## Owner to-do (each ≤ 5 minutes)
1. **RESEND_API_KEY** in Vercel → activates direct email delivery from the contact form.
2. **GA4 Measurement ID** → `SITE.gaId` in `scripts/site-data.mjs`, push.
3. **RAKBANK feature link or video** → drops into the ready slot on /media (MEDIA[0].href in site-data).
4. **2022 Platinum photo** (if located) → /awards 2022 entry.
5. Optional: portrait swap — if the photo you re-attach differs from the award-night portrait now in the hero, send it and I'll swap in one commit.
