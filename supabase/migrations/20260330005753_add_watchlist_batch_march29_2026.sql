/*
  # Watchlist Batch: March 29, 2026

  ## Summary
  - UPDATE: Pete Hegseth — add UAP disclosure confirmation and updated status tags
  - ADD: Ghislaine Maxwell — Fifth Amendment invocation, clemency offer, Epstein network
  - ADD: Jes Staley — former Barclays CEO, UK prosecution, Epstein files revelations
  - ADD: Michelle Bowman — Fed Vice Chair, capital deregulation, reputation risk removal
  - ADD: Elon Musk — DOGE, $21.7B waste created, $2.37B regulatory liability avoided

  ## Tables Modified
  - enemies_of_truth: 1 UPDATE, 4 INSERT

  ## Notes
  - All entries sourced from verified journalism and government records
  - Severity ratings follow established schema: CRITICAL/HIGH/MEDIUM/LOW/DECEASED
*/

-- UPDATE: Pete Hegseth — add UAP disclosure and update status tags
UPDATE enemies_of_truth
SET
  summary = 'A formal law enforcement investigation was opened by the Monterey Police Department on October 12, 2017, after a woman sought a sexual assault examination at Kaiser Permanente following a conference event at which Hegseth was present. A 22-page police report was compiled and forwarded to the Monterey District Attorney with a potential criminal charge cited under California Penal Code §261(a)(4) — rape by intoxicant. The police report documented the accuser''s account that Hegseth took her cellphone, blocked her from leaving his hotel room, and that she said "no" multiple times. The Monterey DA declined to file charges in early 2018, citing insufficient evidence. In December 2020, Hegseth paid a $50,000 confidential settlement, disclosed in Senate confirmation responses. As Secretary of Defense (confirmed January 2025), Hegseth confirmed February 24, 2026 that the Pentagon is actively working to identify and release UAP/UFO files per President Trump''s directive.',
  key_facts = '[
    "Official 22-page Monterey Police Department report (October 12, 2017) recommending DA review for potential California Penal Code §261(a)(4) violation",
    "Monterey DA declined to file charges in early 2018 — insufficient evidence, not a finding of innocence",
    "$50,000 confidential settlement paid to accuser in December 2020, disclosed in written Senate confirmation responses",
    "Whistleblower complaint documented toxic work environment for women at Concerned Veterans for America (2013–2016)",
    "Sworn affidavit by former sister-in-law: second wife feared for her personal safety during marriage",
    "Confirmed as U.S. Secretary of Defense January 25, 2025 by Senate vote",
    "February 24, 2026: Confirmed Pentagon working on UAP/UFO file identification and release per Trump directive — ''We''ve got our people working on it right now''"
  ]'::jsonb,
  status_tags = '["NO CRIMINAL CHARGES FILED", "DA DECLINED PROSECUTION", "$50K SETTLEMENT CONFIRMED", "SENATE CONFIRMED AS SECDEF", "ACTIVE — SECDEF", "UAP DISCLOSURE CONFIRMED"]'::jsonb,
  last_updated = now()
WHERE name = 'PETE HEGSETH';

-- ADD: Ghislaine Maxwell
INSERT INTO enemies_of_truth (
  name, title, subtitle, severity, summary, key_facts, status_tags,
  evidence_documented, sources, sort_order
) VALUES (
  'GHISLAINE MAXWELL',
  'Sex Trafficking Co-Conspirator · Federal Prisoner · Jeffrey Epstein Network',
  'INCARCERATED — FMC Bryan, Texas · 20-year sentence (2022)',
  'CRITICAL',
  'Ghislaine Maxwell was convicted in December 2021 on five federal counts including sex trafficking conspiracy, and sentenced in June 2022 to 20 years in federal prison. She is currently incarcerated at FMC Bryan, Texas. On February 9, 2026, Maxwell was subpoenaed to testify before the House Oversight Committee and invoked the Fifth Amendment, declining to answer all substantive questions. Her attorney subsequently offered full congressional testimony contingent on a grant of presidential clemency from President Trump, stating that Maxwell''s testimony would establish that both Trump and Clinton are "innocent of any wrongdoing." This offer cannot be evaluated independently. The DOJ''s January 2026 3-million-page Epstein document release includes a previously undisclosed five-year DEA investigation identifying 14 unnamed co-targets — all redacted — in narcotics-linked money transfer investigation.',
  '[
    "Convicted December 2021 on five federal counts including sex trafficking conspiracy, perjury, and enticing minors to travel for illegal sex acts",
    "Sentenced June 2022 to 20 years federal prison; currently incarcerated FMC Bryan, Texas",
    "February 9, 2026: Invoked Fifth Amendment before House Oversight Committee, declining all substantive testimony",
    "Maxwell attorney offered full testimony in exchange for presidential clemency from Trump — offer as of March 2026 has not been accepted",
    "Attorney claimed Maxwell testimony would exonerate both Trump and Clinton — claim cannot be evaluated absent testimony",
    "DOJ January 2026 document release reveals 14 unnamed Epstein co-targets in DEA narcotics-linked investigation — all redacted",
    "UK prosecutors investigated former Barclays CEO Jes Staley for 2019 assault allegations connected to Epstein network per Epstein file revelations"
  ]'::jsonb,
  '["CONVICTED — 5 FEDERAL COUNTS", "INCARCERATED", "FIFTH AMENDMENT INVOKED FEB 2026", "CLEMENCY OFFER PENDING", "ONGOING CONGRESSIONAL PROBE"]'::jsonb,
  'Ghislaine Maxwell Conviction and Sentence:
Maxwell was convicted by a federal jury in the Southern District of New York on December 29, 2021, on five of six counts: conspiracy to entice minors to travel to engage in illegal sex acts; enticement of a minor to travel to engage in illegal sex acts; conspiracy to transport minors with intent to engage in criminal sexual activity; transportation of a minor with intent to engage in criminal sexual activity; and sex trafficking conspiracy. She was acquitted on count two (enticement of a minor).

She was sentenced to 20 years in federal prison on June 28, 2022. Judge Alison Nathan stated: "Maxwell directly and repeatedly and over the course of many years lured young, vulnerable girls, got their trust, got the trust of their families, and then enabled their abuse."

Maxwell is currently serving her sentence at FMC Bryan, Texas — a federal medical center.

February 9, 2026 — Fifth Amendment:
Maxwell was subpoenaed by the House Oversight Committee as part of its ongoing investigation into the Epstein network. She appeared via video but invoked her Fifth Amendment right against self-incrimination for all substantive questions.

Clemency Offer:
Maxwell''s attorney Bobbi Sternheim subsequently made a public offer: Maxwell would provide full congressional testimony in exchange for a grant of presidential clemency from President Trump. The attorney stated that Maxwell''s testimony would establish that both Trump and Clinton are "innocent of any wrongdoing." As of March 2026, no clemency has been granted and no full testimony has occurred.

DOJ Document Release Connection:
The January–February 2026 DOJ release of 3+ million Epstein pages includes documentation of a five-year DEA investigation targeting Epstein and 14 unnamed co-targets for suspicious financial transfers possibly linked to narcotics. All co-targets remain redacted in the 69-page classified memo.',
  '[
    {"url": "https://www.justice.gov/usao-sdny/pr/ghislaine-maxwell-sentenced-20-years-prison-sex-trafficking-minor", "date": "2022-06-28", "name": "DOJ — Maxwell Sentenced 20 Years June 2022"},
    {"url": "https://reuters.com/legal/government/ghislaine-maxwell-wont-answer-questions-during-congressional-deposition", "date": "2026-02-08", "name": "Reuters — Maxwell Fifth Amendment Congressional Deposition Feb 2026"},
    {"url": "https://bbc.com/news/articles/cr7jlylp5keo", "date": "2026-01-21", "name": "BBC — Maxwell to Testify Before Congress Jan 2026"},
    {"url": "https://npr.org/2026/02/11/nx-s1-5711226/what-are-the-latest-developments-in-the-jeffrey-epstein-case", "date": "2026-02-11", "name": "NPR — Epstein Case Developments Feb 2026"},
    {"url": "https://cbsnews.com/live-updates/epstein-files-released-doj-2026", "date": "2026-01-29", "name": "CBS News — DOJ Epstein Files Released Jan 2026"}
  ]'::jsonb,
  5
),
(
  'JES STALEY',
  'Former CEO, Barclays plc · Jeffrey Epstein Associate · Under Investigation',
  'UNDER UK INVESTIGATION — resigned Barclays November 2021',
  'HIGH',
  'Jes Staley served as CEO of Barclays plc from December 2015 until November 2021, when he resigned following a UK Financial Conduct Authority investigation into his characterization of his relationship with Jeffrey Epstein to Barclays'' board. Staley acknowledged in 2025 UK court proceedings a sexual encounter with an Epstein associate. The Epstein DOJ document releases (January–February 2026) revealed that UK prosecutors had investigated 2019 sexual assault allegations involving Staley connected to the Epstein network. Staley visited Epstein at least once after Epstein''s 2008 Florida sex offender conviction — documented in US Virgin Islands civil litigation.',
  '[
    "Resigned as Barclays CEO November 2021 following UK FCA investigation into his characterization of his Epstein relationship to the Barclays board",
    "Acknowledged in 2025 UK court proceedings a sexual encounter with an Epstein associate",
    "UK prosecutors investigated 2019 sexual assault allegations involving Staley connected to Epstein network — revealed in January 2026 DOJ document release",
    "Documented visit to Epstein''s Virgin Islands compound after Epstein''s 2008 Florida conviction — established in USVI civil litigation",
    "JPMorgan had previously employed Staley; his communications with Epstein while at JPMorgan are part of the $290M settlement record",
    "Barclays shareholder litigation over board misrepresentation regarding Epstein relationship ongoing"
  ]'::jsonb,
  '["UK INVESTIGATION ONGOING", "RESIGNED CEO NOV 2021", "FCA INQUIRY ACTIVE", "CIVIL LITIGATION PENDING"]'::jsonb,
  'Jes Staley Background:
Staley served as CEO of Barclays plc from December 2015 to November 2021. Prior to Barclays, he was head of JPMorgan''s investment bank and maintained a documented personal and professional relationship with Jeffrey Epstein during that period. JPMorgan''s $290 million settlement with Epstein victims covers the period when Staley''s relationship with Epstein was active and his communications with Epstein were part of JPMorgan''s internal compliance record.

UK FCA Investigation:
Staley resigned from Barclays in November 2021 after the UK Financial Conduct Authority and Prudential Regulation Authority began investigating how he had characterized his relationship with Epstein to the Barclays board — specifically whether he had minimized or misrepresented the nature and extent of the relationship. The investigation remained active as of early 2026.

Epstein DOJ Document Revelations (2026):
The Guardian reported in February 2026 that Epstein files revealed UK prosecutors had investigated 2019 sexual assault allegations involving Staley connected to the Epstein network. The Guardian noted Barclays'' CEO was "shocked" by the Epstein file revelations — a characterization that conflicts with the documented extent of the Staley-Epstein relationship established in civil litigation.

2025 UK Court Proceedings:
Staley acknowledged in 2025 UK court proceedings a sexual encounter with an Epstein associate. This acknowledgment forms part of the ongoing FCA characterization inquiry.',
  '[
    {"url": "https://theguardian.com/business/2026/feb/10/barclays-epstein-files-bank-jes-staley-profits", "date": "2026-02-10", "name": "The Guardian — Barclays Jes Staley Epstein Files Feb 2026"},
    {"url": "https://www.bbc.com/news/business-58989966", "date": "2021-11-01", "name": "BBC — Jes Staley Resigns Barclays Nov 2021"},
    {"url": "https://cbsnews.com/live-updates/epstein-files-released-doj-2026", "date": "2026-01-29", "name": "CBS News — DOJ Epstein Files Jan 2026"}
  ]'::jsonb,
  40
),
(
  'MICHELLE BOWMAN',
  'Vice Chair for Supervision, Federal Reserve (Trump Appointee)',
  'ACTIVE — Led 6-1 vote to cut bank capital requirements March 2026',
  'HIGH',
  'Michelle Bowman was confirmed as the Federal Reserve''s Vice Chair for Supervision in April 2025 following Trump''s appointment. On March 19, 2026, Bowman led the Fed''s 6-1 vote to propose reducing capital requirements for large banks by an average of 4.8% and regional banks up to 7.8%. Simultaneously, she advanced a proposal to eliminate "reputation risk" as a supervisory category — removing a key accountability mechanism for politically motivated bank account closures (debanking). The Fed also proposed reducing its supervisory workforce by 30%. Critics note the simultaneous rollback of capital requirements, removal of reputation risk oversight, and reduction of supervisory staff represents a coordinated deregulatory package that recreates pre-2008 crisis conditions.',
  '[
    "Confirmed as Federal Reserve Vice Chair for Supervision April 2025 following Trump appointment",
    "Led 6-1 Fed board vote March 19, 2026 to propose reducing large bank capital requirements by average 4.8%",
    "Proposed reducing regional bank capital requirements by up to 7.8%",
    "Advanced proposal to eliminate ''reputation risk'' as supervisory category — removes accountability for politically motivated debanking",
    "Fed supervisory staff reduction of 30% proposed alongside capital deregulation",
    "Sole dissent in 6-1 vote came from Fed Governor Adriana Kugler",
    "Changes partially reverse Basel III international capital framework designed after 2008 financial crisis"
  ]'::jsonb,
  '["ACTIVE — REGULATORY AUTHORITY", "PROPOSED DEREGULATION PACKAGE", "COMMENT PERIOD OPEN", "NO CHARGES"]'::jsonb,
  'Michelle Bowman Capital Deregulation Package (March 19, 2026):

The joint Federal Reserve, OCC, and FDIC proposal led by Bowman included three simultaneous components:

1. Capital Requirement Reductions: Large banks (assets over $100 billion) would see capital requirements reduced by an average of 4.8%. Regional banks could see reductions up to 7.8%. Capital requirements are the financial buffers banks must maintain against potential losses — reducing them allows banks to increase leverage and risk exposure.

2. Reputation Risk Removal: The Fed opened a 45-day comment period on March 2, 2026 to eliminate "reputation risk" as a supervisory category. Reputation risk oversight was one of the primary mechanisms by which bank examiners could flag and escalate patterns of discriminatory or politically motivated account closures. Its removal would leave regulators without a formal supervisory tool to address debanking of legal businesses based on political or social criteria.

3. Supervisory Staffing: The Fed proposed reducing its bank supervision workforce by approximately 30% — a reduction that would lower examination frequency and depth across all supervised institutions simultaneously with the removal of reputation risk oversight.

The 6-1 vote on March 19, 2026 represented the most significant single-day deregulatory action at the Fed since the rollback of Dodd-Frank provisions in 2018. The sole dissent from Governor Kugler noted the changes "reduce the resilience of the financial system at a moment of significant uncertainty."',
  '[
    {"url": "https://axios.com/2026/03/19/fed-bank-wall-street-regulation", "date": "2026-03-19", "name": "Axios — Fed Proposes Easier Big Bank Rules Mar 2026"},
    {"url": "https://nytimes.com/2026/03/19/business/banking-regulation-capital-rules.html", "date": "2026-03-19", "name": "NYT — Banking Regulators Loosen Capital Rules Mar 2026"},
    {"url": "https://consumerfinancemonitor.com/2026/03/02/fed-requests-comment-on-plan-to-remove-reputation-risk-from-supervision-of-banks", "date": "2026-03-02", "name": "Consumer Finance Monitor — Fed Reputation Risk Comment Plan"}
  ]'::jsonb,
  35
),
(
  'ELON MUSK',
  'CEO Tesla / SpaceX / xAI · DOGE Head · World''s Richest Person',
  'ACTIVE — $2.37B regulatory liability avoided during DOGE tenure',
  'HIGH',
  'Elon Musk served as the head of the Department of Government Efficiency (DOGE) while simultaneously operating Tesla, SpaceX, xAI, and other commercial entities with billions in federal contracts, regulatory exposure, and government-dependent revenue streams. The Senate Permanent Subcommittee on Investigations Minority Report (July 2025) found DOGE generated $21.7 billion in waste — exceeding its verified savings. CREW found Musk''s companies avoided at least $2.37 billion in regulatory liability while he served as DOGE head. BBC Verify found fewer than 40% of claimed DOGE savings had specific line-item documentation, and only half of those were linked to actual evidence. DOGE errors include claiming $8 billion in savings from an $8 million contract.',
  '[
    "Served as DOGE head January–August 2025 while operating Tesla, SpaceX, xAI with billions in federal contracts and regulatory exposure",
    "CREW analysis: Musk companies avoided at least $2.37B in regulatory liability while Musk served as DOGE head",
    "Senate PSI Minority Report (July 2025): DOGE generated $21.7B in waste January–July 2025, exceeding verified savings",
    "BBC Verify: fewer than 40% of claimed $160B+ in DOGE savings categorized into specific line items; only half linked to documentation",
    "Documented DOGE error: claimed $8B savings from an $8M contract — a 1,000x inflation",
    "CREW: DOGE eliminated programs returning $26B annually to taxpayers including CFPB enforcement",
    "SpaceX receives billions in government contracts from NASA and DoD — both agencies subject to DOGE deregulatory pressure",
    "xAI''s Grok platform benefits from removal of AI regulation; AI regulation rollback was a DOGE priority area"
  ]'::jsonb,
  '["ACTIVE", "CONFLICT OF INTEREST DOCUMENTED", "SENATE PSI INVESTIGATION", "NO CRIMINAL CHARGES", "DOGE WASTE: $21.7B"]'::jsonb,
  'Elon Musk DOGE Conflict of Interest:

DOGE Savings Claims vs. Verified Reality:
DOGE claimed total savings exceeding $160 billion by April 2025. BBC Verify analysis found fewer than 40% were categorized into specific line items, and of those, fewer than half were linked to actual documentation. Specific documented error: claiming $8 billion in savings from an $8 million contract — a 1,000x inflation error.

Senate PSI Minority Report (July 30, 2025):
The Senate Permanent Subcommittee on Investigations Minority Report, published July 30, 2025, found DOGE generated $21.7 billion in waste between January 20 and July 18, 2025. Waste categories included: unlawful termination of active service contracts, severance and litigation costs from mass illegal firings, and productivity losses from unplanned workforce disruptions.

CREW Conflict of Interest Analysis (June 2025):
Citizens for Responsibility and Ethics in Washington documented that Musk''s companies — Tesla, SpaceX, xAI, and affiliates — avoided at least $2.37 billion in regulatory liability during his DOGE tenure. The regulatory rollbacks that generated this benefit were in areas directly overseen by DOGE: EPA emissions enforcement (Tesla), FAA launch licensing (SpaceX), AI regulation (xAI/Grok), and CFPB enforcement.

CFPB Elimination:
DOGE effectively dismantled the Consumer Financial Protection Bureau, which CREW calculated returned $26 billion in annual consumer savings through enforcement actions. Its elimination provided a direct benefit to financial services competitors of Musk''s payment processing interests.

Net Worth: Estimated $300–340 billion (2026), primarily through Tesla, SpaceX, and xAI equity.',
  '[
    {"url": "https://bbc.com/news/articles/cn4j33klz33o", "date": "2025-04-25", "name": "BBC Verify — DOGE Savings Claims Analysis Apr 2025"},
    {"url": "https://blumenthal.senate.gov/newsroom/press/release/07/31/2025/the-217-billion-blunder", "date": "2025-07-30", "name": "Senate PSI — The $21.7 Billion Blunder Jul 2025"},
    {"url": "https://citizensforethics.org/reports-investigations/crew-reports/doges-big-illusion", "date": "2025-06-22", "name": "CREW — DOGE Big Illusion Jun 2025"}
  ]'::jsonb,
  10
);
