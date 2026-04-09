/*
  # Batch: March 29, 2026 — Financial Systems Entries (004, 005, 006)

  ## Summary
  Adds three documents to the financial-systems pillar:
  - Fed capital deregulation: 4.8% average cut, 30% supervisor reduction, reputation risk removal
  - Epstein bank settlements: $437M+ across JPMorgan, Deutsche Bank, Bank of America
  - DOGE savings vs. reality: Senate PSI $21.7B waste, BBC Verify <40% documented

  ## New Documents
  1. fed-capital-deregulation-bowman-supervisory-cuts-2026
  2. epstein-bank-settlements-437m-jpmorgan-deutsche-bofa-2026
  3. doge-savings-vs-reality-senate-psi-bbc-verify-2026
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, slug, dispute_status, subcategory, metadata, labeled_claims
) VALUES
(
  'Big Bank Capital Deregulation — Fed Slashes Requirements, Cuts Oversight Staff 30%',
  'The Federal Reserve, OCC, and FDIC jointly proposed reducing capital requirements for large banks by an average of 4.8% and regional banks up to 7.8%. The Fed board voted 6–1 under Trump-appointed Vice Chair Michelle Bowman. Simultaneously, the Fed proposed eliminating "reputation risk" as a supervisory category and reducing supervisory staff by 30%.',
  'On March 19, 2026, the Federal Reserve, Office of the Comptroller of the Currency, and FDIC jointly proposed a package of capital requirement reductions for large financial institutions. The proposal, which passed the Fed''s board 6–1, was led by Trump-appointed Vice Chair for Supervision Michelle Bowman.

Key provisions of the proposed changes:
- Capital requirements for large banks (assets over $100 billion) reduced by an average of 4.8%
- Capital requirements for regional banks reduced by up to 7.8%
- The Fed separately proposed eliminating "reputation risk" as a supervisory category — removing the mechanism by which regulators could flag and penalize banks for politically motivated account closures or "debanking"
- Federal Reserve supervisory staff to be reduced by approximately 30%

The simultaneous removal of the reputation risk supervisory standard and the staffing reduction are notable because reputation risk was one of the few regulatory mechanisms that allowed supervisors to flag bank behavior that, while technically legal, represented a pattern of discriminatory or politically targeted account closures. The Consumer Finance Monitor reported the Fed opened a 45-day comment period on the reputation risk removal on March 2, 2026.

The capital requirement reductions come less than 18 years after the 2008 financial crisis, the resolution of which required $700 billion in TARP funds and an estimated $7.7 trillion in emergency Federal Reserve lending. The Basel III international capital framework — which the proposed changes partially walk back — was designed specifically to prevent a recurrence.

The 6-1 vote reflects the transformation of the Fed''s supervision board following Trump appointments. The lone dissenting vote came from Fed Governor Adriana Kugler.',
  'https://axios.com/2026/03/19/fed-bank-wall-street-regulation',
  'confirmed',
  'government_record',
  '2026-03-19',
  'fed-capital-deregulation-bowman-supervisory-cuts-2026',
  'disputed',
  'regulatory-capture',
  '{"urgency": "HIGH", "viral": "HIGH", "pillar": "financial-systems", "tags": ["Banking", "Deregulation", "Federal Reserve", "Capital Requirements", "Regulatory Capture", "Michelle Bowman", "Debanking"], "social_handles": ["@federalreserve", "@axios"], "additional_sources": [{"name": "NYT — Banking Regulators Loosen Capital Rules Mar 2026", "url": "https://nytimes.com/2026/03/19/business/banking-regulation-capital-rules.html"}, {"name": "Consumer Finance Monitor — Fed Reputation Risk Comment Plan", "url": "https://consumerfinancemonitor.com/2026/03/02/fed-requests-comment-on-plan-to-remove-reputation-risk-from-supervision-of-banks"}]}',
  '[{"type": "DOCUMENTED", "text": "Fed, OCC, and FDIC jointly proposed reducing capital requirements: -4.8% large banks, up to -7.8% regional banks, voted 6-1 on March 19, 2026"}, {"type": "DOCUMENTED", "text": "Fed proposed eliminating reputation risk as a supervisory category, opening 45-day comment period March 2, 2026"}, {"type": "DOCUMENTED", "text": "Federal Reserve supervisory staff to be reduced by approximately 30%"}, {"type": "DOCUMENTED", "text": "6-1 vote led by Trump-appointed Vice Chair Michelle Bowman; sole dissent from Governor Adriana Kugler"}, {"type": "INFERRED", "text": "Reputation risk removal eliminates primary regulatory mechanism for flagging politically motivated debanking patterns"}]'
),
(
  'Epstein Bank Settlements — $437M+ Across JPMorgan, Deutsche Bank, Bank of America',
  'Financial institutions that held Jeffrey Epstein accounts have collectively settled for over $437 million. Bank of America: $72.5 million (March 2026, pending approval). JPMorgan Chase: $290 million (2023). Deutsche Bank: $75 million (2023). None admitted wrongdoing. The DOJ January 2026 document dump revealed a previously undisclosed five-year DEA investigation targeting Epstein and 14 unnamed co-targets for suspicious money transfers possibly linked to narcotics.',
  'Three major financial institutions that maintained accounts for Jeffrey Epstein have collectively reached civil settlements totaling over $437 million with plaintiffs representing his victims. No institution has admitted wrongdoing in any settlement.

Settlement breakdown:
- JPMorgan Chase: $290 million settlement (June 2023) — resolving claims that JPMorgan maintained Epstein''s accounts despite documented evidence of sex trafficking, enabling his operations through wire transfers and cash withdrawals over more than a decade
- Deutsche Bank: $75 million settlement (May 2023) — Deutsche Bank maintained Epstein accounts after JPMorgan terminated his relationship in 2013, enabling continued financial operations through 2018
- Bank of America: $72.5 million settlement (March 27, 2026, pending court approval) — BofA settlement covers the period after Deutsche Bank terminated Epstein''s accounts

DOJ January 2026 document release: A previously undisclosed five-year DEA investigation targeting Epstein and 14 unnamed co-targets for suspicious money transfers possibly linked to narcotics trafficking was revealed in the January 29, 2026 DOJ document dump. The investigation is documented in a classified 69-page memo; co-targets remain fully redacted. The DEA investigation ran parallel to FBI investigations and was apparently not coordinated with federal prosecutors who declined to charge Epstein federally before his 2019 non-prosecution agreement in Florida.

This entry covers the financial enablement angle. For trafficking network details, cross-reference the Epstein Files — 3 Million Pages entry in the trafficking-networks pillar.',
  'https://reuters.com/world/bank-america-agrees-pay-725-million-settle-epstein-accusers-lawsuit-2026-03-27',
  'confirmed',
  'court_filing',
  '2026-03-27',
  'epstein-bank-settlements-437m-jpmorgan-deutsche-bofa-2026',
  'unchallenged',
  'financial-crime',
  '{"urgency": "HIGH", "viral": "HIGH", "pillar": "financial-systems", "tags": ["Jeffrey Epstein", "JPMorgan", "Deutsche Bank", "Bank of America", "Financial Enablement", "Money Laundering", "DEA Investigation"], "social_handles": ["@jpmorgan", "@DeutscheBank", "@BankofAmerica"], "cross_links": ["epstein-files-3-million-pages-dea-probe-maxwell-fifth-2026"], "additional_sources": [{"name": "CNBC — Epstein Victims BofA Settlement Mar 2026", "url": "https://cnbc.com/2026/03/27/jeffrey-epstein-bank-of-america-lawsuit-settle.html"}, {"name": "CBS News — Epstein DOJ Files Released Jan 2026", "url": "https://cbsnews.com/live-updates/epstein-files-released-doj-2026"}, {"name": "The Guardian — Barclays CEO Epstein Revelations", "url": "https://theguardian.com/business/2026/feb/10/barclays-epstein-files-bank-jes-staley-profits"}]}',
  '[{"type": "DOCUMENTED", "text": "JPMorgan Chase paid $290M settlement June 2023 for maintaining Epstein accounts despite documented sex trafficking evidence"}, {"type": "DOCUMENTED", "text": "Deutsche Bank paid $75M settlement May 2023 for maintaining Epstein accounts 2013–2018"}, {"type": "DOCUMENTED", "text": "Bank of America agreed to $72.5M settlement March 27, 2026, pending court approval"}, {"type": "DOCUMENTED", "text": "DOJ January 2026 document release revealed previously undisclosed five-year DEA investigation targeting Epstein and 14 unnamed co-targets for narcotics-linked money transfers"}, {"type": "INFERRED", "text": "Three banks collectively processed Epstein financial operations across three sequential institutional relationships spanning approximately 25 years"}]'
),
(
  'DOGE Savings vs. Reality — Senate PSI: $21.7B in Waste Created, Not Cut',
  'DOGE claimed over $160 billion in savings. BBC Verify found less than 40% categorized into specific line items, with only half linked to documentation. Errors include claiming $8 billion from an $8 million contract. Senate PSI Minority Report found DOGE generated $21.7 billion in waste. CREW found DOGE eliminated programs returning $26 billion to taxpayers.',
  'The Department of Government Efficiency (DOGE), led by Elon Musk under a presidential advisory role, claimed total savings exceeding $160 billion by April 2025. Independent verification efforts found the claims to be largely unsubstantiated.

BBC Verify analysis (April 2025):
- Less than 40% of claimed savings were categorized into specific budget line items
- Of the categorized items, fewer than half were linked to actual documentation
- Specific documented errors include: claiming $8 billion in savings from an $8 million contract (a 1,000x inflation error)
- Multiple "savings" entries cited canceled or duplicated programs that had already ended before DOGE''s involvement

Senate Permanent Subcommittee on Investigations (PSI) Minority Report (July 2025):
- DOGE generated $21.7 billion in waste between January 20 and July 18, 2025
- Waste categories include: unlawful termination of contracts for programs still actively delivering services, severance and litigation costs from illegal mass firings, and productivity losses from unplanned workforce disruptions
- The $21.7 billion in DOGE-generated waste exceeds DOGE''s verified, documented savings for the same period

CREW analysis (June 2025):
- DOGE eliminated programs that returned $26 billion to taxpayers annually, including CFPB enforcement
- Elon Musk''s companies — Tesla, SpaceX, xAI, and affiliates — avoided at least $2.37 billion in regulatory liability while Musk served as DOGE head, representing a direct personal financial benefit from deregulatory DOGE actions

The Pentagon specifically: DOGE claimed $11.1 billion in DoD "efficiencies" — but these claims are drawn from the same accounting systems that have failed six consecutive mandatory audits.',
  'https://bbc.com/news/articles/cn4j33klz33o',
  'confirmed',
  'investigation',
  '2025-04-25',
  'doge-savings-vs-reality-senate-psi-bbc-verify-2026',
  'disputed',
  'regulatory-capture',
  '{"urgency": "HIGH", "viral": "HIGH", "pillar": "financial-systems", "tags": ["DOGE", "Elon Musk", "PSI Report", "CFPB", "Financial Fraud", "Regulatory Capture", "Senate Investigation"], "social_handles": ["@elonmusk", "@DOGE", "@CREWcrew"], "cross_links": ["fy2026-pentagon-34-billion-anonymous-earmarks-unrequested", "pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted"], "additional_sources": [{"name": "Senate PSI — The $21.7 Billion Blunder Jul 2025", "url": "https://blumenthal.senate.gov/newsroom/press/release/07/31/2025/the-217-billion-blunder"}, {"name": "CREW — DOGE Big Illusion Jun 2025", "url": "https://citizensforethics.org/reports-investigations/crew-reports/doges-big-illusion"}]}',
  '[{"type": "DOCUMENTED", "text": "DOGE claimed over $160B in savings; BBC Verify found less than 40% categorized into specific line items, fewer than half linked to documentation"}, {"type": "DOCUMENTED", "text": "BBC Verify found DOGE error claiming $8B savings from an $8M contract — a 1,000x inflation"}, {"type": "DOCUMENTED", "text": "Senate PSI Minority Report found DOGE generated $21.7B in waste January–July 2025"}, {"type": "DOCUMENTED", "text": "CREW found DOGE eliminated programs returning $26B annually to taxpayers including CFPB enforcement"}, {"type": "DOCUMENTED", "text": "Elon Musk companies avoided at least $2.37B in regulatory liability during his DOGE tenure per CREW analysis"}]'
);
