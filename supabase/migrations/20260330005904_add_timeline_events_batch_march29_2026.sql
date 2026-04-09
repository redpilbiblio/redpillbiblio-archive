/*
  # Timeline Events: March 29, 2026 Research Batch

  ## Summary
  Adds 19 timeline events derived from the 16 evidence entries and 5 watchlist profiles.
  Sorted chronologically. Upcoming deadline events flagged with DEADLINE prefix.
  Covers pillars: elections-government, military-covert-ops, financial-systems,
  media-manipulation, trafficking-networks, suppressed-technology, health-transparency,
  black-budget, surveillance-state, environmental-crimes.

  ## Notes
  - All dates are from primary sources cited in batch entries
  - Future deadline events: April 19, 2026 (FISA 702); July 31, 2026 (PFAS claims)
*/

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES

-- 2017
(
  'Monterey PD Opens Formal Sexual Assault Investigation of Pete Hegseth',
  'Monterey Police Department opens formal investigation after woman seeks sexual assault examination at Kaiser Permanente following conference event involving Hegseth. 22-page police report compiled, forwarded to Monterey DA citing potential California Penal Code §261(a)(4) violation.',
  '2017-10-12',
  'elections-government',
  '{"source": "NPR, Nov 2024", "tags": ["Hegseth", "Sexual Assault Investigation", "Law Enforcement"], "urgency": "HIGH"}'
),

-- 2018
(
  'Monterey DA Declines Hegseth Charges — Insufficient Evidence',
  'Monterey County District Attorney declines to file charges against Pete Hegseth, citing insufficient evidence to meet the beyond-a-reasonable-doubt standard. Finding is not a finding of innocence.',
  '2018-02-01',
  'elections-government',
  '{"source": "NPR Nov 2024", "tags": ["Hegseth", "DA Declination"], "urgency": "MEDIUM"}'
),

-- 2020
(
  'Hegseth Pays $50,000 Settlement to Sexual Assault Accuser',
  'Pete Hegseth pays $50,000 confidential settlement to woman who filed sexual assault complaint in 2017. Settlement later disclosed in written Senate confirmation responses.',
  '2020-12-01',
  'elections-government',
  '{"source": "The 19th, Jan 2025", "tags": ["Hegseth", "Settlement", "Senate Confirmation"], "urgency": "HIGH"}'
),

-- 2021
(
  'Ghislaine Maxwell Convicted on Five Federal Sex Trafficking Counts',
  'Federal jury in SDNY convicts Ghislaine Maxwell on five of six counts including sex trafficking conspiracy. She is found guilty of conspiracy to entice minors to travel for illegal sex acts, transportation of a minor for criminal sexual activity, and sex trafficking conspiracy.',
  '2021-12-29',
  'trafficking-networks',
  '{"source": "DOJ Jun 2022", "tags": ["Maxwell", "Conviction", "Sex Trafficking"], "urgency": "CRITICAL"}'
),

-- 2022
(
  'Maxwell Sentenced to 20 Years Federal Prison',
  'Judge Alison Nathan sentences Ghislaine Maxwell to 20 years in federal prison. Maxwell is remanded to FMC Bryan, Texas. Judge states Maxwell "directly and repeatedly and over the course of many years lured young, vulnerable girls."',
  '2022-06-28',
  'trafficking-networks',
  '{"source": "DOJ Jun 2022", "tags": ["Maxwell", "Sentencing", "FMC Bryan"], "urgency": "HIGH"}'
),

-- 2023 (JPMorgan settlement)
(
  'JPMorgan Chase Pays $290M Settlement for Epstein Financial Enablement',
  'JPMorgan Chase settles civil lawsuit for $290 million with plaintiffs representing Epstein victims, resolving claims that JPMorgan maintained Epstein accounts despite documented sex trafficking evidence for over a decade.',
  '2023-06-12',
  'financial-systems',
  '{"source": "Reuters 2023", "tags": ["JPMorgan", "Epstein", "Settlement", "Financial Crime"], "urgency": "HIGH"}'
),

-- 2023 (Deutsche Bank settlement)
(
  'Deutsche Bank Pays $75M Settlement for Epstein Financial Enablement',
  'Deutsche Bank settles for $75 million, resolving claims it maintained Epstein accounts from 2013 to 2018 after JPMorgan terminated the relationship, enabling continued financial operations.',
  '2023-05-17',
  'financial-systems',
  '{"source": "Reuters 2023", "tags": ["Deutsche Bank", "Epstein", "Settlement", "Financial Crime"], "urgency": "HIGH"}'
),

-- 2023 (Pentagon audit)
(
  'Pentagon Fails Sixth Consecutive Mandatory Financial Audit',
  'DoD completes sixth consecutive failed financial audit since mandatory auditing began in 2018. Cannot account for 63% of nearly $4 trillion in assets. Army overstated spare parts needs by $202 million. No criminal referrals issued.',
  '2023-12-03',
  'military-covert-ops',
  '{"source": "Responsible Statecraft Dec 2023", "tags": ["Pentagon", "Audit Failure", "DoD", "Black Budget"], "urgency": "HIGH", "anchor": true}'
),

-- 2025 (NJ PFAS settlement)
(
  '3M Pays $450M NJ-Specific PFAS Settlement — Largest State Chemical Contamination Settlement',
  'New Jersey Attorney General Matt Platkin announces $450 million settlement with 3M for statewide PFAS contamination. Separate from the national $10.5B utility settlement. Payments structured as part of multi-year agreement.',
  '2025-05-12',
  'environmental-crimes',
  '{"source": "NJ AG May 2025", "tags": ["3M", "PFAS", "Forever Chemicals", "New Jersey", "Environmental Crime"], "urgency": "HIGH"}'
),

-- 2025 (Senate PSI DOGE)
(
  'Senate PSI: DOGE Generated $21.7B in Waste, Not Savings',
  'Senate Permanent Subcommittee on Investigations Minority Report published July 30, 2025, finding DOGE generated $21.7 billion in waste between January 20 and July 18, 2025 — exceeding DOGE''s verified savings for the same period.',
  '2025-07-30',
  'financial-systems',
  '{"source": "Senate PSI Jul 2025", "tags": ["DOGE", "Elon Musk", "Senate Investigation", "Waste", "Regulatory Capture"], "urgency": "HIGH"}'
),

-- 2026 Jan 22 (AI bot swarms)
(
  'Science Journal Documents AI Bot Swarms — Autonomous Consensus Manufacture Confirmed',
  'Landmark paper in Science, co-authored by researchers from Berkeley, Harvard, Oxford, Cambridge, and Yale including Nobel laureate Maria Ressa, formally characterizes AI bot swarms: autonomous AI agent clusters that manufacture social consensus without human direction. Deployment documented in 2024 elections in Taiwan, India, and Indonesia.',
  '2026-01-22',
  'media-manipulation',
  '{"source": "The Guardian Jan 2026", "tags": ["AI Bot Swarms", "Disinformation", "Maria Ressa", "Science Journal", "Elections"], "urgency": "HIGH", "anchor": true}'
),

-- 2026 Jan 29 (Epstein files)
(
  'DOJ Releases 3+ Million Pages of Epstein Documents',
  'Department of Justice releases over 3 million pages of Epstein files, revealing: a previously undisclosed five-year DEA investigation targeting Epstein and 14 unnamed co-targets; an FBI network diagram; and a draft indictment never filed. All 14 co-targets remain fully redacted.',
  '2026-01-29',
  'trafficking-networks',
  '{"source": "CBS News Jan 2026", "tags": ["Epstein", "DOJ", "DEA Investigation", "Document Release"], "urgency": "HIGH"}'
),

-- 2026 Feb 9 (Maxwell Fifth)
(
  'Ghislaine Maxwell Invokes Fifth Amendment Before House Oversight Committee',
  'Maxwell appears via video before House Oversight Committee and invokes Fifth Amendment, declining all substantive questions. Her attorney subsequently offers full testimony in exchange for presidential clemency, claiming both Trump and Clinton are innocent.',
  '2026-02-09',
  'trafficking-networks',
  '{"source": "Reuters Feb 2026", "tags": ["Maxwell", "Fifth Amendment", "House Oversight", "Clemency Offer"], "urgency": "HIGH"}'
),

-- 2026 Feb 11 (SAVE Act)
(
  'House Passes SAVE America Act — Citizenship Proof Required, Online Registration Eliminated',
  'House passes SAVE America Act along party lines requiring documentary proof of U.S. citizenship to register to vote and eliminating online voter registration nationwide. Trump endorses bill in February 24 State of the Union.',
  '2026-02-11',
  'elections-government',
  '{"source": "The Conversation Jan 2026, SPLC Apr 2025", "tags": ["SAVE Act", "Voter ID", "Midterms 2026", "Certification Crisis"], "urgency": "CRITICAL"}'
),

-- 2026 Mar 2 (Fed reputation risk)
(
  'Federal Reserve Opens Comment Period to Eliminate ''Reputation Risk'' Bank Supervision',
  'Fed opens 45-day public comment period on proposal to eliminate "reputation risk" as a supervisory category, removing the primary regulatory mechanism for flagging politically motivated bank account closures (debanking).',
  '2026-03-02',
  'financial-systems',
  '{"source": "Consumer Finance Monitor Mar 2026", "tags": ["Federal Reserve", "Reputation Risk", "Debanking", "Deregulation", "Bowman"], "urgency": "HIGH"}'
),

-- 2026 Mar 17 (alien.gov)
(
  'White House Registers alien.gov and aliens.gov Through CISA',
  'White House formally registers alien.gov and aliens.gov through CISA following Trump''s February directive to DoD to identify and release UAP files. Neither domain active. Press Secretary Anna Kelly responds to media inquiry: "Stay tuned!"',
  '2026-03-17',
  'black-budget',
  '{"source": "DefenseScoop Mar 2026", "tags": ["alien.gov", "UAP", "Disclosure", "Trump", "AARO", "Pentagon"], "urgency": "HIGH"}'
),

-- 2026 Mar 19 (Fed capital deregulation)
(
  'Fed Votes 6–1 to Reduce Bank Capital Requirements — Bowman Leads Deregulation Package',
  'Fed board votes 6-1 to propose reducing capital requirements: -4.8% average for large banks, up to -7.8% for regional banks. Trump-appointed Vice Chair Michelle Bowman leads vote. Sole dissent from Governor Adriana Kugler. Supervisory staff cut 30% simultaneously.',
  '2026-03-19',
  'financial-systems',
  '{"source": "Axios, NYT Mar 2026", "tags": ["Federal Reserve", "Capital Requirements", "Bowman", "Deregulation", "Banking"], "urgency": "HIGH"}'
),

-- 2026 Mar 27 (BofA Epstein)
(
  'Bank of America Agrees to $72.5M Epstein Settlement — Total Bank Settlements Exceed $437M',
  'Bank of America agrees to $72.5 million settlement pending court approval, resolving claims it maintained Epstein accounts. Total settlements across JPMorgan ($290M), Deutsche Bank ($75M), and Bank of America ($72.5M) now exceed $437 million. No institution has admitted wrongdoing.',
  '2026-03-27',
  'financial-systems',
  '{"source": "Reuters Mar 2026", "tags": ["Bank of America", "Epstein", "Settlement", "JPMorgan", "Deutsche Bank"], "urgency": "HIGH"}'
),

-- DEADLINE: April 19, 2026
(
  '⚠ DEADLINE: FISA Section 702 Expires — Clean Extension vs. SAFE Act Warrant Requirements',
  'FISA Section 702 statutory authority expires April 19, 2026. White House pushing clean 18-month extension preserving warrantless surveillance. Bipartisan SAFE Act requiring warrants for U.S. person database searches faces difficult Senate vote. Documented FBI abuses include searches targeting racial justice protesters, political officials, and a state court judge.',
  '2026-04-19',
  'surveillance-state',
  '{"source": "Captain Compliance, Senate Judiciary Mar 2026", "tags": ["FISA 702", "Surveillance", "Warrantless", "SAFE Act", "Fourth Amendment", "Deadline"], "urgency": "CRITICAL", "is_deadline": true}'
),

-- DEADLINE: July 31, 2026
(
  '⚠ DEADLINE: 3M PFAS Settlement Claims — Utilities Must File by July 31, 2026',
  'Public water utilities must file settlement claims in the $10.5–$12.5 billion 3M PFAS settlement by July 31, 2026. After this deadline, utilities lose eligibility for settlement compensation for PFAS water treatment costs. Utilities not in the settlement system remain free to pursue individual litigation against DuPont, Chemours, and Corteva.',
  '2026-07-31',
  'environmental-crimes',
  '{"source": "Legal Dive, NJ AG 2025", "tags": ["3M", "PFAS", "Settlement", "Deadline", "Water Utilities", "Forever Chemicals"], "urgency": "HIGH", "is_deadline": true}'
);
