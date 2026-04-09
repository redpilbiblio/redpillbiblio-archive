/*
  # Add Republican Congressional Entries: Santos, Hastert, Cunningham, Gaetz, Stockman

  1. New Entries
    - `George Santos` — Wire fraud, identity theft, campaign fraud; expelled from House; 87 months prison. Severity: CRITICAL.
    - `Dennis Hastert` — Former House Speaker; sexually abused teenage boys; illegal structuring; 15 months prison. Severity: CRITICAL.
    - `Randy "Duke" Cunningham` — $2.4M defense contractor bribes; 100 months prison. Severity: CRITICAL.
    - `Matt Gaetz` — House Ethics Committee found substantial evidence of statutory rape of minor, prostitution, drug use; resigned. Severity: CRITICAL.
    - `Steve Stockman` — $1.25M donor fraud, election crimes, tax fraud; 10 years prison; sentence commuted. Severity: CRITICAL.

  2. Notes
    - Santos was expelled 311-114; 6th member ever expelled
    - Hastert was the longest-serving Republican Speaker
    - Cunningham's bribery was one of the largest congressional corruption schemes
    - Gaetz resigned before House could sanction him; Trump nominated him AG
    - Stockman commuted by Trump after serving ~2 years
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'GEORGE SANTOS',
  'Former U.S. Representative, New York',
  'Wire Fraud, Identity Theft, Campaign Fraud; Expelled from House; 87 Months Federal Prison',
  'CRITICAL',
  'George Santos represented New York''s 3rd Congressional District for less than one year before being expelled. He was the 6th member ever expelled from the House, voted out 311–114 on December 1, 2023. Santos fabricated FEC campaign finance reports, inflating fundraising numbers to qualify for the NRCC''s "Young Guns" program; stole the personal identity and financial information of campaign donors and repeatedly charged their credit cards without authorization, specifically targeting elderly donors with cognitive impairments; fraudulently diverted two $25,000 donor checks into his personal bank accounts for designer clothing and personal debts; reported a $500,000 loan to his campaign when he had less than $8,000 in his bank accounts; and fraudulently collected more than $24,000 in unemployment benefits while employed. He pleaded guilty August 19, 2024 and was sentenced April 25, 2025 to 87 months in federal prison plus $373,749.97 in restitution.',
  '[
    "Fabricated FEC campaign finance reports to qualify for NRCC \"Young Guns\" program",
    "Stole identity and financial information from campaign donors; repeatedly charged their credit cards without authorization; specifically targeted elderly donors with cognitive impairments",
    "Fraudulently diverted two $25,000 donor checks into personal accounts for designer clothing and personal debts",
    "Reported a $500,000 campaign loan when he had less than $8,000 in his bank accounts",
    "Fraudulently collected $24,000+ in unemployment benefits while employed",
    "House Ethics Committee found he \"blatantly stole from his campaign\" and exploited \"every aspect of his House candidacy for his own personal financial profit\"",
    "Expelled from the House 311–114 on December 1, 2023; sentenced April 25, 2025 to 87 months prison + $373,749.97 restitution",
    "Trump commuted his sentence October 17, 2025; released same day. Conviction stands; restitution obligations reportedly waived."
  ]'::jsonb,
  '[
    "EXPELLED FROM CONGRESS 311-114",
    "GUILTY PLEA — IDENTITY THEFT",
    "87 MONTHS FEDERAL PRISON",
    "SENTENCE COMMUTED BY TRUMP"
  ]'::jsonb,
  E'George Santos represented New York''s 3rd Congressional District for less than one year.\n\nFabricated FEC campaign finance reports, inflating fundraising numbers to qualify for the NRCC''s "Young Guns" program.\n\nStole personal identity and financial information of campaign donors. Repeatedly charged their credit cards without authorization, specifically targeting elderly donors with cognitive impairments.\n\nFraudulently diverted two $25,000 donor checks into his personal bank accounts for designer clothing and personal debts.\n\nReported a $500,000 loan to his campaign when he had less than $8,000 in his bank accounts.\n\nFraudulently collected more than $24,000 in unemployment benefits while employed.\n\nHouse Ethics Committee report (November 2023) found he "blatantly stole from his campaign" and "sought to fraudulently exploit every aspect of his House candidacy for his own personal financial profit."\n\nExpelled from the House 311–114 on December 1, 2023 — the 6th member ever expelled.\n\nPleaded guilty August 19, 2024. Sentenced April 25, 2025 to 87 months (7 years, 3 months) in federal prison plus $373,749.97 in restitution (Case No. 23-CR-197, E.D.N.Y.).\n\nBegan serving at FCI Fairton (NJ) July 25, 2025. Trump commuted his sentence October 17, 2025; released same day.\n\nCurrent Profession: Social media personality/online content creator. Convicted former congressman (NY-3). Conviction stands; restitution obligations reportedly waived.\nApproximate Net Worth: Not publicly documented (campaign fraud conviction involved personal enrichment schemes).\nCurrent Residence: Queens, NY.',
  '[
    {"name": "DOJ — Santos Sentenced to 87 Months for Wire Fraud and Aggravated Identity Theft", "url": "https://www.justice.gov/usao-edny/pr/ex-congressman-george-santos-sentenced-87-months-prison-wire-fraud-and-aggravated", "date": "2025-04-25"},
    {"name": "DOJ — Santos Pleads Guilty to Wire Fraud and Aggravated Identity Theft", "url": "https://www.justice.gov/usao-edny/pr/former-congressman-george-santos-pleads-guilty-wire-fraud-and-aggravated-identity", "date": "2024-08-19"},
    {"name": "House Committee on Ethics — Investigative Subcommittee Report", "url": "https://ethics.house.gov", "date": "2023-11-01"},
    {"name": "Campaign Legal Center — The Simplest Lesson from the Expulsion of George Santos", "url": "https://campaignlegal.org/update/simplest-lesson-expulsion-george-santos-ethics-enforcement-works", "date": "2023-12-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'DENNIS HASTERT',
  'Former Speaker of the House',
  'Sexually Abused Teenage Boys as Wrestling Coach; Paid $3.5M Hush Money; Illegal Bank Structuring; 15 Months Federal Prison',
  'CRITICAL',
  'Dennis Hastert was Speaker of the House from 1999 to 2007 — the longest-serving Republican Speaker in U.S. history. Between the 1960s and 1970s, while employed as a high school wrestling coach in Illinois, he sexually abused multiple teenage boys in his care. In 2010, he agreed to pay one of his victims $3.5 million in hush money to conceal the abuse. To fund these payments, between 2010 and 2014 he illegally structured cash withdrawals totaling approximately $1.7 million to evade federal bank reporting requirements. He also lied to the FBI about the purpose of the withdrawals. He pleaded guilty in October 2015 to one count of illegal structuring and was sentenced April 27, 2016 to 15 months in federal prison and $250,000 to a victims'' fund. At sentencing, the federal judge called him "a serial child molester."',
  '[
    "Sexually abused multiple teenage boys while a high school wrestling coach (1960s–1970s)",
    "In 2010, agreed to pay a victim $3.5 million in hush money to conceal past sexual abuse",
    "Illegally structured approximately $1.7 million in cash withdrawals (2010–2014) to evade federal bank reporting requirements",
    "Lied to the FBI about the purpose of the withdrawals",
    "Pleaded guilty October 2015 to illegal structuring; sentenced April 27, 2016 to 15 months in federal prison + $250,000 to victims'' fund (N.D. Ill.)",
    "Federal judge at sentencing called him \"a serial child molester\"; admitted the abuse in open court",
    "Civil lawsuit over unpaid hush money settled in 2021"
  ]'::jsonb,
  '[
    "FORMER HOUSE SPEAKER",
    "GUILTY PLEA — ILLEGAL STRUCTURING",
    "CHILD SEXUAL ABUSE ADMITTED",
    "15 MONTHS FEDERAL PRISON"
  ]'::jsonb,
  E'Dennis Hastert served as Speaker of the House from 1999 to 2007 — the longest-serving Republican Speaker in U.S. history.\n\nBetween the 1960s and 1970s, while employed as a high school wrestling coach in Illinois, he sexually abused multiple teenage boys in his care.\n\nIn 2010, he agreed to pay one of his victims $3.5 million in hush money to conceal the abuse.\n\nTo fund these payments, between 2010 and 2014 he illegally structured cash withdrawals totaling approximately $1.7 million to evade federal bank reporting requirements (federal law requires banks to report cash transactions over $10,000).\n\nHe also lied to the FBI about the purpose of the withdrawals.\n\nPleaded guilty October 2015 to one count of illegal structuring. Sentenced April 27, 2016 to 15 months in federal prison and $250,000 to a victims'' compensation fund (N.D. Ill.).\n\nAt sentencing, the federal judge called him "a serial child molester." Hastert admitted to sexually abusing teenage boys in open court.\n\nReleased from federal prison July 18, 2017 (served 13 months of 15-month sentence). Placed under lifetime sex offender supervision.\n\nCivil lawsuit regarding unpaid hush money settled in 2021.\n\nCurrent Profession: No public occupation. Former Speaker of the U.S. House. Age 83 as of 2026.\nApproximate Net Worth: Not publicly documented (substantially depleted by $3.5 million in hush-money payments to abuse victims, legal fees, and fines).\nCurrent Residence: Plano, IL.',
  '[
    {"name": "NPR — Hastert Sentenced to 15 Months in Prison", "url": "https://www.npr.org/2016/04/27/475923625/former-house-speaker-dennis-hastert-sentenced-to-15-months-in-prison", "date": "2016-04-27"},
    {"name": "PBS NewsHour — Prosecutors Detail Sex Abuse Allegations Against Hastert", "url": "https://www.pbs.org/newshour/nation/prosecutors-detail-sex-abuse-allegations-against-dennis-hastert", "date": "2016-04-27"},
    {"name": "Politico — Hastert Settles Child Sexual Abuse Suit", "url": "https://www.politico.com/news/2021/09/15/hastert-settles-child-sexual-abuse-suit-511972", "date": "2021-09-15"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RANDY "DUKE" CUNNINGHAM',
  'Former U.S. Representative, California',
  '$2.4 Million in Defense Contractor Bribes; 100 Months Federal Prison; DECEASED',
  'CRITICAL',
  'Randy Cunningham represented California''s 50th Congressional District from 1991 to 2005, sitting on the House Intelligence Committee and Appropriations Committee. Between approximately 2000 and 2005, he admitted to receiving at least $2.4 million in bribes from defense contractors in exchange for using his Appropriations Committee position to steer defense contracts to bribe-payers. Bribes included the purchase of his Del Mar home at an inflated price, a mortgage paid on a $2.5 million mansion, a $200,000 condo down payment, a yacht ("Duke-Stir") and Rolls-Royce purchased and maintained for him, a graduation party for his daughter, Persian rugs, antiques, and travel. He pleaded guilty November 28, 2005 and was sentenced March 3, 2006 to 100 months in federal prison, plus $1,804,031.50 in tax restitution and $1,851,508 in forfeiture. DECEASED — August 27, 2025; age 83.',
  '[
    "Admitted to receiving at least $2.4 million in bribes from defense contractors",
    "Bribes included inflated home purchase, Rolls-Royce, yacht (\"Duke-Stir\"), $2.5M mansion mortgage, $200K condo down payment, Persian rugs, antiques, and travel",
    "Used Appropriations Committee position to steer ~$90 million in contracts to Brent Wilkes; ~$150 million to Mitchell Wade",
    "Failed to disclose bribes on Financial Disclosure Statements and federal tax returns",
    "Pleaded guilty November 28, 2005; sentenced March 3, 2006: 100 months prison + $1,804,031.50 tax restitution + $1,851,508 forfeiture (S.D. Cal.)",
    "Pardoned by Trump January 2021 after serving 7.5 years in prison for bribery",
    "Deceased August 27, 2025; at hospital in Little Rock, AR; age 83"
  ]'::jsonb,
  '[
    "RECEIVED $2.4M IN BRIBES",
    "100 MONTHS FEDERAL PRISON",
    "DEFENSE CONTRACTOR SCHEMES",
    "DECEASED — 2025"
  ]'::jsonb,
  E'Randy Cunningham represented California''s 50th Congressional District from 1991 to 2005, serving on the House Intelligence Committee and Appropriations Committee.\n\nBetween approximately 2000 and 2005, he admitted to receiving at least $2.4 million in bribes from defense contractors in exchange for using his Appropriations Committee position to steer defense contracts to bribe-payers.\n\nBribes included:\n- Purchase of his Del Mar, California home at an inflated price\n- A mortgage paid on a $2.5 million mansion\n- $200,000 condo down payment\n- A yacht ("Duke-Stir") and Rolls-Royce purchased and maintained for him\n- A graduation party for his daughter\n- Persian rugs, antiques, and travel\n\nDefense contractor Brent Wilkes received approximately $90 million in defense work. Mitchell Wade received approximately $150 million in contracts.\n\nCunningham failed to disclose bribes on Financial Disclosure Statements and federal tax returns.\n\nPleaded guilty November 28, 2005. Sentenced March 3, 2006: 100 months (8+ years) in federal prison, plus $1,804,031.50 in tax restitution and $1,851,508 in forfeiture (S.D. Cal.).\n\nPardoned by Trump January 2021 after serving 7.5 years in prison.\n\n▸ SURVIVING FAMILY:\nDeceased — August 27, 2025; at a hospital in Little Rock, AR; age 83.',
  '[
    {"name": "DOJ — Sentencing Press Release", "url": "https://www.justice.gov/archive/tax/usaopress/2006/txdv06cas60303.1.pdf", "date": "2006-03-03"},
    {"name": "DOD Inspector General — Defense Contractor Mitchell Wade Pleads Guilty", "url": "https://www.dodig.mil/Criminal-Investigations/Article/1113600/defense-contractor-mitchell-wade-pleads-guilty-to-bribing-former-congressman-du/", "date": "2006-07-12"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;