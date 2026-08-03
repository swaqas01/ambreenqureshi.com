# Your Action Pack — everything that needs you, with the exact wording

Companion to `audit-implementation-plan.md`. Phase 0 is done and live; `/timeline` and
`/press-kit` are built. What follows is the work only you can execute, written so it can be
copied and pasted rather than interpreted.

---

## 1. Property Finder — correct the start year (5 minutes, highest priority)

The agent profile at `propertyfinder.ae/en/agent/ambreen-qureshi-145563` currently carries
**"Experience since: 2012"**. You have confirmed 2011 is correct. Until this is fixed, Google
and every AI model can see two different start years for the same person, which is exactly the
kind of contradiction that weakens an entity.

Log in to the Property Finder agent/agency portal yourself — I do not handle account logins —
and change two things:

**Field: "Experience since"**
Change `2012` → `2011`

**Field: agent biography.** It currently says "over more than 11 very challenging years",
which was written years ago and now understates her. Replace with:

> Ambreen Qureshi is the Founder and Managing Director of Amber Homes Real Estate, the Dubai
> brokerage she founded in 2017. She entered Dubai real estate in 2011 and has since built a
> group spanning brokerage, interiors and holiday homes. Under her leadership Amber Homes has
> been recognised as Platinum Agency by Meraas, Nakheel and Dubai Holding for four consecutive
> years. She holds a gold medal for her Master's in Economics from Government College, Lahore,
> and was featured by RAKBANK in its "She Means Business" campaign.

Tell me when it is done and I will note it in the site's change log, which currently records
the correction as pending.

---

## 2. Backlinks — the single highest-return item in the audit

Off-site authority scored 49/100, the lowest score in the report. These two links cost nothing
and are entirely within your control.

### 2a. On saadwaqas.com — footer, Connect column

```html
<a href="https://ambreenqureshi.com/" rel="noopener">Ambreen Qureshi — Founder &amp; Managing Director</a>
```

### 2b. On amberhomes.ae — the About Us / leadership section

The audit is specific that Amber should link to Ambreen with the words "Founder and Managing
Director Ambreen Qureshi" and "leadership at Amber Homes". Wherever her name appears on the
About Us page, make it a link:

```html
<a href="https://ambreenqureshi.com/" rel="noopener">Ambreen Qureshi</a>, Founder and Managing Director
```

And in the footer or leadership block:

```html
<a href="https://ambreenqureshi.com/" rel="noopener">Leadership at Amber Homes — Ambreen Qureshi</a>
```

Send these to whoever maintains the two sites, or give me repository access and I will raise
the changes myself. **Do this before the content work** — links take weeks to be recrawled and
counted, so they should be earning while everything else is being written.

---

## 3. Facts I need short answers to

| # | Question | Why it matters |
|---|---|---|
| 3.1 | The official RAKBANK URL for the "She Means Business" feature — is there a page on rakbank.ae, or only the Instagram reel? | An editorial link from a bank's own domain is worth more than any number of directory links. |
| 3.2 | Was it a feature, a campaign profile, a nomination or an award? | The site currently states "campaign feature". If that is wrong we should correct it now rather than be corrected later. |
| 3.3 | Gold medal — which year, and is there a certificate or announcement? | Turns a company-supplied claim into an independently datable one. |
| 3.4 | LinkedIn — does Ambreen have a profile? URL, or should one be created? | The audit rates this High. LinkedIn profiles rank for name searches and feed knowledge panels. |
| 3.5 | Does Amber Homes have a careers page contact for the "team culture" angle? | Only needed if we build that pillar page later. |

---

## 4. Raw material I need for the two pillar pages

This is the block that everything else waits on. Send it however is easiest — WhatsApp voice
notes are genuinely fine, I will transcribe and structure them.

**For the developer-relationships page**, the useful material is specifics:

- How the first developer relationship was actually won. Who said yes first, and why?
- What a developer looks for in a brokerage before granting allocations or early access.
- A negotiation that went badly, and what changed afterwards.
- What "Platinum" is actually measured on — volume, service, compliance, something else?
- Roughly how many units or what share of sales come through developer allocations.

**For the client-experience page**:

- The rule she will not break with a client, and the story behind it.
- What happens between signing and handover that clients do not see.
- A time the company absorbed a cost or a loss to protect a client relationship.
- How a repeat investor differs from a first-time buyer in what they need.
- The complaint she hears most, and how it is handled.

**Also useful for the remaining pages** (`/speaking`, `/interviews`):

- Any events, panels or podcasts she has appeared on — name, date, topic, photos.
- Interviews not already on the Media page — publication and URL.
- Higher-resolution photographs if you want the press kit images upgraded.

What makes these pages rank and get cited by AI is detail no one else could write. Anything
generic I could produce myself is, by the audit's own reasoning, not worth publishing.

---

## 5. Measurement — needs your accounts

I have not touched these because they require sign-in or account creation, which I do not do.

**Bing Webmaster Tools.** Sign in at `bing.com/webmasters` and use "Import from Google Search
Console" — it carries the verification across in one click. This matters more than it used to:
Bing's index feeds Copilot and parts of ChatGPT's search.

**Search Console baseline.** Export Performance data (queries, pages, countries, devices) before
the new pages accumulate impressions, so we can measure the effect rather than guess at it. The
site is young, so export whatever history exists rather than the 16 months the audit assumes.

**Monthly AI-citation check.** Worth doing by hand: ask ChatGPT, Claude, Perplexity and Google
"who is Ambreen Qureshi" and "who founded Amber Homes Real Estate", and keep the answers. That
is the real GEO scoreboard, and it is not in any analytics tool.

---

## 6. Still open from earlier

- **Contact form email.** FormSubmit's mail is being filtered by the amberhomes.ae Google
  Workspace. Pick one: route to a Gmail address as primary recipient, or move to Resend and send
  me an API key. The WhatsApp fallback works in the meantime.
- **Crunchbase photo** upload.

---

## Priority order, if you only do three things

1. The two backlinks (section 2) — highest return, entirely in your control, and they need
   lead time to count.
2. The Property Finder date fix (section 1) — five minutes, removes a factual contradiction.
3. Voice notes for the two pillar pages (section 4) — unblocks the largest remaining block
   of work.
