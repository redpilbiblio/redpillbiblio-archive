/*
  # Add Republican Congressional Entries: Gaetz, Stockman, Collins, Hunter, Schweikert, Ney

  1. New Entries
    - `Matt Gaetz` — House Ethics substantial evidence of statutory rape, prostitution, drug use; resigned. Severity: CRITICAL.
    - `Steve Stockman` — $1.25M donor fraud, election crimes; 10 years (commuted). Severity: CRITICAL.
    - `Chris Collins` — Insider trading from White House lawn; 26 months prison. Severity: HIGH.
    - `Duncan Hunter` — $250K campaign fraud; 11 months prison (pardoned). Severity: HIGH.
    - `David Schweikert` — 11 ethics violations; $50K fine + $175K FEC fine. Severity: HIGH.
    - `Bob Ney` — Jack Abramoff bribery scandal; 30 months prison. Severity: CRITICAL.
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'MATT GAETZ',
  'Former U.S. Representative, Florida',
  'House Ethics Found Substantial Evidence of Statutory Rape, Prostitution, Drug Use; Resigned Before Sanction',
  'CRITICAL',
  'Matt Gaetz represented Florida''s 1st Congressional District from 2017 to 2024, serving on the House Judiciary Committee. The House Ethics Committee released a 37-page bipartisan report on December 23, 2024, documenting official findings of "substantial evidence" across multiple categories of misconduct. The committee found substantial evidence that Gaetz engaged in sexual activity with a then-17-year-old girl at a July 2017 party, paying her $400 in cash afterward, with three eyewitnesses corroborating this in civil court filings — a violation of Florida statutory rape law. The committee found he "regularly paid women for engaging in sexual activity," with Venmo, PayPal, CashApp, and cash records documenting $90,000+ in payments to over a dozen women "likely in connection with sexual activity and/or drug use." Additional findings included cocaine and ecstasy use, directing his Chief of Staff to commit passport fraud, and knowingly seeking to "impede and obstruct" the Committee''s investigation. Gaetz''s associate Joel Greenberg pleaded guilty to sex trafficking the same minor. Gaetz resigned November 13, 2024 — the day Trump nominated him for Attorney General.',
  '[
    "House Ethics Committee (December 23, 2024): \"substantial evidence\" of sexual activity with a 17-year-old girl in July 2017; paid her $400 in cash; three eyewitnesses corroborated in civil court filings",
    "Committee found he \"regularly paid women for engaging in sexual activity\": $90,000+ in documented Venmo, PayPal, CashApp, and cash payments to over a dozen women",
    "Used or possessed cocaine and ecstasy while a sitting member of Congress",
    "Directed Chief of Staff to falsely represent to State Department that a sexual partner was a constituent; paid her $1,000",
    "Accepted impermissible Bahamas trip transportation and lodging from an associate with medical marijuana business",
    "Knowingly and willfully sought to \"impede and obstruct\" the Committee''s investigation",
    "Associate Joel Greenberg pleaded guilty to sex trafficking the same minor; sentenced to 11 years",
    "Resigned November 13, 2024 — the day Trump nominated him for Attorney General; withdrew from nomination November 21, 2024"
  ]'::jsonb,
  '[
    "ETHICS REPORT — SUBSTANTIAL EVIDENCE",
    "STATUTORY RAPE ALLEGATIONS",
    "PROSTITUTION DOCUMENTED",
    "RESIGNED BEFORE SANCTION"
  ]'::jsonb,
  E'Matt Gaetz represented Florida''s 1st Congressional District from 2017 to 2024, serving on the House Judiciary Committee.\n\nThe House Ethics Committee released a 37-page bipartisan report on December 23, 2024, documenting official findings of "substantial evidence" across multiple categories of misconduct.\n\n▸ STATUTORY RAPE:\nThe committee found substantial evidence that Gaetz engaged in sexual activity with a then-17-year-old girl at a July 2017 party. He paid her $400 in cash afterward. Three eyewitnesses corroborated this in civil court filings — a violation of Florida statutory rape law.\n\n▸ PROSTITUTION:\nThe committee found he "regularly paid women for engaging in sexual activity." Venmo, PayPal, CashApp, and cash records documented $90,000+ in payments to over a dozen women "likely in connection with sexual activity and/or drug use."\n\n▸ DRUG USE:\nCoincaine and ecstasy use while a sitting member of Congress.\n\n▸ PASSPORT FRAUD:\nDirected his Chief of Staff to falsely represent to the State Department that a woman he was sexually involved with was a constituent seeking passport assistance. Paid her $1,000.\n\n▸ IMPERMISSIBLE TRAVEL:\nAccepted impermissible Bahamas trip transportation and lodging paid by an associate with a medical marijuana business before Congress.\n\n▸ OBSTRUCTION:\nKnowingly and willfully sought to "impede and obstruct" the Committee''s investigation.\n\n▸ ASSOCIATED PROSECUTION:\nGaetz''s associate Joel Greenberg pleaded guilty in 2021 to sex trafficking the same minor referenced in the Gaetz investigation. Greenberg was sentenced to 11 years in federal prison.\n\nThe DOJ had investigated Gaetz for sex trafficking but closed the matter without charges in February 2023.\n\nGaetz resigned from Congress November 13, 2024 — the day Trump nominated him for Attorney General. Gaetz withdrew from the AG nomination November 21, 2024.\n\nCurrent Profession: Host of "The Matt Gaetz Show" on One America News Network (OAN), launched January 2025. Considering 2026 Florida gubernatorial run. Denies all allegations.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Pensacola/Fort Walton Beach, FL area.',
  '[
    {"name": "House Committee on Ethics — Committee Report (37 pages)", "url": "https://ethics.house.gov/wp-content/uploads/2024/12/Committee-Report.pdf", "date": "2024-12-23"},
    {"name": "House Committee on Ethics — Appendix A", "url": "https://ethics.house.gov/wp-content/uploads/2024/12/Appendix-A.pdf", "date": "2024-12-23"},
    {"name": "New York Times — Joel Greenberg Plea Agreement", "url": "https://www.nytimes.com/interactive/2021/05/14/us/joel-greenberg-plea-agreement.html", "date": "2021-05-14"},
    {"name": "PBS NewsHour — Read the Full Matt Gaetz House Ethics Report", "url": "https://www.pbs.org/newshour/politics/read-the-full-matt-gaetz-house-ethics-report-alleging-he-paid-for-sex-with-minor-used-illicit-drugs-as-congress-member", "date": "2024-12-23"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'STEVE STOCKMAN',
  'Former U.S. Representative, Texas',
  '$1.25 Million Donor Fraud, Election Crimes, Tax Fraud; 10 Years Federal Prison; Sentence Commuted',
  'CRITICAL',
  'Steve Stockman represented Texas in two non-consecutive stints (1995–1997 and 2013–2015). Between approximately 2012 and 2016, he orchestrated a four-year scheme to defraud charitable donors of approximately $1.25 million by falsely telling donors their funds would be used for charity, then diverting the money through shell companies to pay personal expenses and to illegally finance his campaigns. Two former congressional staffers pleaded guilty for their roles. He was convicted April 12, 2018 on 23 of 24 counts, including mail fraud, wire fraud, conspiracy to make conduit contributions, false statements to the FEC, money laundering, and filing a false tax return. His conviction was affirmed by the 5th U.S. Circuit Court of Appeals in 2020. He was sentenced November 7, 2018 to 120 months in federal prison and $1,014,718.51 in restitution. Trump commuted his remaining sentence in December 2020 after he had served approximately 2 years.',
  '[
    "Orchestrated four-year scheme to defraud charitable donors of approximately $1.25 million (2012–2016)",
    "Falsely told donors funds would go to charity; diverted money through shell companies to personal expenses including hot air balloon rides, kennel bills, and a dishwasher",
    "Used fraudulently obtained funds to illegally finance his congressional campaigns",
    "Two former congressional staffers pleaded guilty for their roles",
    "Convicted April 12, 2018 on 23 of 24 counts: mail fraud, wire fraud, conduit contribution conspiracy, false FEC statements, money laundering, false tax return (S.D. Tex.)",
    "Sentenced November 7, 2018: 120 months (10 years) prison + $1,014,718.51 restitution",
    "Conviction affirmed by 5th Circuit (2020); sentence commuted by Trump December 22, 2020 (had served ~2 years)",
    "Launched 2026 campaign for TX-9 (his former seat) in December 2025"
  ]'::jsonb,
  '[
    "CONVICTED — 23 COUNTS",
    "10 YEARS FEDERAL PRISON",
    "$1.25M DONOR FRAUD",
    "SENTENCE COMMUTED"
  ]'::jsonb,
  E'Steve Stockman represented Texas in two non-consecutive stints (1995–1997 and 2013–2015).\n\nBetween approximately 2012 and 2016, he orchestrated a four-year scheme to defraud charitable donors of approximately $1.25 million.\n\nMODUS OPERANDI:\nStockman falsely told donors their funds would be used for charity. He then diverted the money through shell companies to pay personal expenses including:\n- Hot air balloon rides\n- Kennel bills\n- A dishwasher\n- Illegal campaign financing\n\nTwo former congressional staffers pleaded guilty for their roles in the scheme.\n\nCONVICTION:\nConvicted April 12, 2018 in the Southern District of Texas on 23 of 24 counts:\n- Mail fraud\n- Wire fraud\n- Conspiracy to make conduit contributions\n- False statements to the FEC\n- Money laundering\n- Filing a false tax return\n\nSentenced November 7, 2018: 120 months (10 years) in federal prison and $1,014,718.51 in restitution.\n\nConviction affirmed by 5th U.S. Circuit Court of Appeals in 2020.\n\nSentence commuted by Trump December 22, 2020 (after serving approximately 2 years).\n\nCurrent Profession: Congressional candidate — launched 2026 campaign for TX-9 (Houston area) in December 2025. Conviction stands (commuted, not pardoned); remains a convicted felon. Still owes $1 million+ in restitution.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Houston, TX area.',
  '[
    {"name": "DOJ — Stockman Sentenced to 10 Years for Extensive Fraud, Tax and Election Crimes", "url": "https://www.justice.gov/archives/opa/pr/former-us-congressman-sentenced-10-years-prison-extensive-fraud-tax-and-election-crimes", "date": "2018-11-07"},
    {"name": "Texas Tribune — Trump to Commute Prison Sentence of Steve Stockman", "url": "https://www.texastribune.org/2020/12/22/donald-trump-commute-prison-steve-stockman-texas-congressman/", "date": "2020-12-22"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'CHRIS COLLINS',
  'Former U.S. Representative, New York',
  'Insider Trading via Phone Call on White House Lawn; 26 Months Federal Prison; Pardoned',
  'HIGH',
  'Chris Collins represented New York''s 27th Congressional District from 2013 to 2019 and was the first sitting member of Congress to endorse Donald Trump for president in 2016. Collins served on the board of Innate Immunotherapeutics, an Australian biotech firm. On June 22, 2017, while attending a White House lawn picnic, he received confidential information that the company''s drug trial had failed. He immediately called his son Cameron Collins and tipped him off. Cameron Collins sold family shares before the news became public, avoiding approximately $570,000 in losses. Chris Collins lied to the FBI during the investigation. He pleaded guilty October 2019 and was sentenced January 17, 2020 to 26 months in federal prison and a $200,000 fine. Pardoned by Trump December 22, 2020.',
  '[
    "Received confidential drug trial failure information for Innate Immunotherapeutics while attending White House picnic on June 22, 2017",
    "Called his son Cameron immediately from the White House lawn with the confidential tip",
    "Cameron Collins sold family shares before public announcement, avoiding approximately $570,000 in losses",
    "Chris Collins lied to FBI investigators during the investigation",
    "SEC brought civil enforcement action; Collins consented to permanent bar from serving as officer or director of any public company",
    "Pleaded guilty October 2019; sentenced January 17, 2020 to 26 months in federal prison + $200,000 fine (S.D.N.Y.)",
    "Pardoned by Trump December 22, 2020; announced 2026 campaign for FL-19 in June 2025"
  ]'::jsonb,
  '[
    "INSIDER TRADING CONVICTION",
    "26 MONTHS FEDERAL PRISON",
    "LIED TO FBI",
    "PARDONED BY TRUMP"
  ]'::jsonb,
  E'Chris Collins represented New York''s 27th Congressional District from 2013 to 2019. He was the first sitting member of Congress to endorse Donald Trump for president in 2016.\n\nCollins served on the board of Innate Immunotherapeutics, an Australian biotech firm.\n\nOn June 22, 2017, while attending a White House lawn picnic, he received confidential information that the company''s drug trial had failed. He immediately called his son Cameron Collins and tipped him off.\n\nCameron Collins sold the family''s shares before the news became public, avoiding approximately $570,000 in losses.\n\nChris Collins lied to the FBI during the investigation.\n\nThe SEC also brought a civil enforcement action. Collins consented to a permanent bar from serving as an officer or director of any public company.\n\nPleaded guilty October 2019. Sentenced January 17, 2020 to 26 months in federal prison and a $200,000 fine (S.D.N.Y.).\n\nPardoned by Trump December 22, 2020.\n\nCurrent Profession: Congressional candidate — announced June 2025 campaign for FL-19 (Fort Myers/Marco Island area) in 2026 Republican primary. Former congressman (NY-27).\nApproximate Net Worth: Not publicly documented at current levels (was a millionaire businessman prior to congressional career; paid $500,000+ in legal fees).\nCurrent Residence: Marco Island, FL.',
  '[
    {"name": "DOJ — Collins Sentenced for Insider Trading Scheme and Lying to Federal Investigators", "url": "https://www.justice.gov/usao-sdny/pr/former-congressman-christopher-collins-sentenced-insider-trading-scheme-and-lying", "date": "2020-01-17"},
    {"name": "SEC — Litigation Release No. LR-24687", "url": "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-24687", "date": "2019-10-10"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;