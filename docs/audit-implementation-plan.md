# AmbreenQureshi.com — Audit Implementation Plan

**Source:** Ambreen Qureshi SEO, GEO & LLM Audit, 3 August 2026
**Prepared for:** Saad Waqas
**Plan date:** 3 August 2026

---

## 1. Corrections to the audit before we start

The audit was written from a public-web vantage point and states plainly that it could not
verify several things. I can verify them, because I have the source code and I measured the
site directly. Three of its findings are already resolved, which removes a meaningful amount
of work from the plan.

**Performance is already measured and already good.** The audit says "a live PageSpeed
run could not be completed reliably" and lists Core Web Vitals as unvalidated risk. I ran a
headless Chromium harness against the real build and captured actual metrics:

| Page | LCP | CLS | Weight | Target (audit) |
|---|---|---|---|---|
| Home | 360 ms | 0.001 | 278 KB | LCP ≤ 2.5 s, CLS ≤ 0.10 |
| About | 220 ms | 0 | 313 KB | pass |
| Awards | 288 ms | 0 | 312 KB | pass |
| Media | 196 ms | 0 | 232 KB | pass |
| Contact | 192 ms | 0 | 229 KB | pass |
| Evidence | 208 ms | 0 | 257 KB | pass |

Every page is roughly seven times inside the LCP target and a hundred times inside the CLS
target. Note this was not luck: earlier in this session the homepage measured **1,540 ms**
because the hero was hidden at `opacity:0` until JavaScript finished loading. That defect is
fixed. The audit's "highest-impact engineering actions" list (items 6 to 11 — convert imagery
to WebP, set dimensions and lazy loading, click-to-load embeds, minimise JavaScript,
subset and preload fonts, protect form responsiveness) is **already fully implemented**.

**Root files exist and are correct.** The audit could not retrieve robots.txt, the XML sitemap
or llms.txt. All three are live. robots.txt already allows Googlebot, Bingbot, OAI-SearchBot,
ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User and
Google-Extended, which matches the audit's recommended policy. llms.txt and llms-full.txt
are both published.

**Structured data is in place.** Person, Organization, WebSite, ProfilePage, CollectionPage,
ContactPage, BreadcrumbList, FAQPage, VideoObject and ImageObject are all implemented,
with sameAs pointing to Wikidata, Crunchbase, About.me, Property Finder and amberhomes.ae.
Image licensing metadata was added on 3 August in response to a Search Console notice.

**What this means.** The audit's two lowest scores — off-site authority at 49/100 and generic
organic visibility at 40/100 — are the real gaps, and neither is a technical problem. They are
a links-and-content problem. The plan below is weighted accordingly.

---

## 2. Confirmed scope decisions

| Decision | Choice |
|---|---|
| Content scope | Focused build — entity and off-site first, then 5–6 high-value pages. Not the full 13-page cluster. |
| Career start year | **2011 is correct.** The website stays as-is; external profiles get corrected. |
| AI crawler policy | Keep all crawlers allowed, including GPTBot and ClaudeBot. Maximum discoverability. |
| Content sourcing | Saad supplies raw material; I build the pages from it. |

The focused-build decision matters and is worth stating explicitly. The audit recommends a
five-page `/leadership/*` cluster plus monthly `/insights` articles. You deliberately removed
both of those earlier in this project. Rebuilding them only pays off with genuine first-hand
operator content behind each URL — the audit says so itself: *"Generic motivational content
will not build search authority or AI citation value."* Six strong pages beat thirteen thin
ones, and thin pages actively dilute a small entity site. We can extend the cluster later once
the first pillar pages prove they earn impressions.

---

## 3. Phase 0 — No input needed, I start immediately

| # | Action | Definition of done |
|---|---|---|
| 0.1 | Reframe the Awards page around Ambreen's leadership role. Summarise rather than reproduce Amber's corporate award copy; link to `amberhomes.ae/awards` as the canonical company proof. | No duplicated corporate copy; clear canonical ownership; her role explained. |
| 0.2 | Upgrade the Evidence page into a full source table: claim, source URL, evidence type, date verified, plus a change log. | Every claim on the site traces to one row with a source and a verification date. |
| 0.3 | Add original context and summaries to each Media item — themes, date, publication, why it matters — in our own words with source links. | No thin cards. Nothing reproduced from publishers. |
| 0.4 | Add visible "last updated" dates and `dateModified` / `lastReviewed` plus author and reviewer signals in schema. | Freshness and authorship legible to Google and to LLMs. |
| 0.5 | Add a concise "known for" topical block to the homepage that links into the leadership topics. | Homepage routes authority into the topic pages. |

A note on 0.3: the audit suggests adding transcripts. I will not reproduce publisher article
text or full interview transcripts we do not own — that is a copyright exposure with no SEO
upside, since duplicated text does not rank. Original summary, context and a clean source
link achieve the same GEO benefit safely.

---

## 4. Phase 1 — Entity facts (small inputs from you)

| # | Action | What I need |
|---|---|---|
| 1.1 | Correct Property Finder: "Experience since" currently reads **2012**, must read **2011**. Its bio also says "more than 11 years" and should be updated. | You (or the agency admin) make the edit — I will not handle logins. I supply exact wording. |
| 1.2 | One exact role sentence used identically everywhere. | Your approval of the sentence I draft. |
| 1.3 | RAKBANK "She Means Business" — state precisely whether it was a feature, campaign profile, nomination or award, and link the official source. | Official RAKBANK URL + confirmation of which it was. |
| 1.4 | Gold medal in Economics — name institution, year and source. | Year and any certificate or announcement. |
| 1.5 | LinkedIn profile: complete role chronology consistent with 2011. | Profile URL, or confirmation to create one. |

---

## 5. Phase 2 — Focused page build (blocked on your material)

| Page | Purpose | Raw material required |
|---|---|---|
| `/timeline` | Dated, sourced career and company chronology. Very high GEO value — LLMs cite dated facts. | Verified dates for key milestones. |
| `/press-kit` | Approved bio (short/medium/long), high-res images, logos, key facts, quote topics, contact. Makes every external mention consistent. | Approved photos, logo files, bio approval. |
| `/speaking` | Topics, past appearances, audiences, enquiry route. Owns "Ambreen Qureshi speaker". | Event names, dates, topics, photos. |
| `/interviews/{appearance}` | Summary, themes, publication, source link per appearance. | List of interviews with URLs. |
| Pillar 1: developer relationships | How broker–developer partnerships are actually built and kept. Strongest differentiation — the four-year Platinum record is direct evidence. | First-hand material (see section 7). |
| Pillar 2: client experience | Enquiry to handover and aftercare standards. | First-hand material (see section 7). |

---

## 6. Phase 3 — Off-site authority (the real gap: 49/100)

This is the highest-return work in the entire audit and needs no new content.

| # | Action | Blocker |
|---|---|---|
| 3.1 | Link from `saadwaqas.com` to ambreenqureshi.com (footer/Connect). Snippet already prepared. | I cannot push to that repo — need access or you paste it. |
| 3.2 | Link from `amberhomes.ae` — "Founder and Managing Director Ambreen Qureshi" and "leadership at Amber Homes". | Same — access or your web team. |
| 3.3 | Reciprocal links from ambreenqureshi.com to Amber's corporate profile, live listings, careers and canonical awards page. | None — I do this. |
| 3.4 | Pursue an editorial link from RAKBANK / women-in-business programme pages. | Contact route. |
| 3.5 | Outreach target list: UAE business and women-leadership publications, podcasts, conference speaker bios, developer partner profiles, HR/sales-leadership outlets. | I draft the list and the pitch. |

---

## 7. What I need from you — consolidated

**Blocking Phase 2 (content):**

1. **Raw material for the two pillar pages.** Anything unstructured is fine — old interview recordings, WhatsApp voice notes, internal training docs, talk notes, emails to developers. What makes these pages work is specifics: real numbers, actual decisions, a negotiation that went badly, the rule she hires by. I turn raw into publishable.
2. **Speaking history** — events, dates, topics, any photos or programmes.
3. **Interview list** — publications and URLs, including anything not already on the Media page.
4. **Press-kit assets** — high-resolution approved photographs, logo files, and sign-off on bio versions I draft.
5. **Verified milestone dates** for the timeline.

**Blocking Phase 1 (facts):**

6. **Property Finder correction** — change "Experience since" from 2012 to 2011. Please make this edit yourself; I do not handle account logins.
7. **RAKBANK official URL** and confirmation of what the feature formally was.
8. **Gold medal year** and institution confirmation.
9. **LinkedIn URL** or a decision to create the profile.

**Blocking Phase 3 (links):**

10. **saadwaqas.com and amberhomes.ae** — either repository access, or you pass the prepared snippets to whoever maintains them.

**Optional:**

11. **Rank tracker budget** — a paid tool gives exact positions for a fixed UAE keyword set. Search Console alone shows impressions and average position, which is adequate to start.

---

## 8. Still open from earlier work

- **Contact form email.** FormSubmit's activation mail is being filtered by the amberhomes.ae
  Google Workspace. Two clean fixes: route through a Gmail address as primary recipient, or
  move to Resend with an API key. Awaiting your choice. The WhatsApp fallback works today.
- **Crunchbase photo** upload.

---

## 9. Sequencing

Phase 0 runs now and needs nothing from you. Phase 3 is the highest-value work and is
mostly unblocked the moment you tell me how to reach the two other sites — I would run it in
parallel with Phase 0 rather than after it, because links take weeks to be recrawled and
counted, so the sooner they exist the sooner they compound. Phase 1 needs short factual
answers. Phase 2 waits on your material and is the largest single block of work.

Measurement (Phase 4) should be switched on before the content lands, not after, so we have
a clean before-and-after: Bing Webmaster Tools, a Search Console baseline export, and a
monthly check of what ChatGPT, Claude, Perplexity and Google actually say when asked
"who is Ambreen Qureshi" and "who founded Amber Homes Real Estate".
