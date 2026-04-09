/*
  # Update Thunberg Current Status & Add Menendez and Jefferson

  1. Updated Entries
    - `Greta Thunberg` — Updated current status section with profession, net worth, and residence details

  2. New Entries
    - `Robert "Bob" Menendez` — Convicted on 16 counts (bribery, foreign agent, obstruction); 11 years federal prison. Severity: CRITICAL.
    - `William J. Jefferson` — "Cold Cash" bribery conviction ($90K in freezer); 13-year sentence. Severity: CRITICAL.

  3. Notes
    - Menendez is the first U.S. Senator ever convicted of acting as agent for a foreign government
    - Jefferson's $90,000 in freezer became one of the most infamous political corruption images in U.S. history
*/

UPDATE enemies_of_truth
SET evidence_documented = E'Greta Thunberg has three documented criminal convictions from Swedish courts — all for disobeying police orders at climate protests.\n\nJuly 24, 2023 — Malmö City Court convicted her for blocking oil truck access at Malmö harbor during a June 19, 2023 protest. Fine: ~2,500 SEK (~$240).\n\nOctober 11, 2023 — Swedish court convicted her for a second harbor blockade at Malmö. Fine: ~4,500 SEK (~$414).\n\nMay 8, 2024 — Stockholm District Court convicted her on two counts of civil disobedience for blocking the Swedish parliament entrance in March 2024. Fine: 6,000 SEK (~£440) plus 1,000 SEK in damages.\n\nOctober 17, 2023 — Arrested in London; acquitted February 2024 after UK judge found the police conditions were themselves "unlawful."\n\nDecember 2025 — Arrested in London under the UK Terrorism Act for displaying a placard supporting Palestine Action, a designated terrorist organization. Case outcome pending.\n\nSeverity caveat: All Swedish convictions are for minor criminal offenses (misdemeanor equivalent) carrying small fines — not imprisonment. Thunberg openly and intentionally committed civil disobedience as a form of political protest. The nature of these offenses is categorically different from financial corruption, fraud, or abuse of power. They are, however, unambiguous documented criminal convictions from official court records.\n\nCurrent Profession: Full-time climate and political activist; author; co-founder Fridays for Future. Does not charge speaking fees; donates book royalties to the Greta Thunberg Foundation.\nApproximate Net Worth: ~$100,000–$2 million (most earnings donated; Economic Times, 2025).\nCurrent Residence: Stockholm, Sweden.',
    last_updated = now()
WHERE name = 'GRETA THUNBERG';

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'ROBERT MENENDEZ',
  'Former U.S. Senator, New Jersey',
  'Convicted 16 Counts — Bribery, Foreign Agent, Obstruction; 11 Years Federal Prison',
  'CRITICAL',
  'Robert Menendez served as a U.S. Senator from New Jersey for nearly two decades, including as Chairman of the Senate Foreign Relations Committee. In September 2023, a federal grand jury in the SDNY indicted Menendez, his wife Nadine, and three New Jersey businessmen on charges of conspiracy to commit bribery, honest services wire fraud, extortion under color of official right, obstruction of justice, and acting as a foreign agent for Egypt (Case No. 23-cr-490). The FBI''s June 2022 search of his home uncovered over $480,000 in cash stuffed in envelopes hidden in clothing and a safe, gold bars worth over $100,000, a Mercedes-Benz convertible paid for by a co-conspirator, and home furnishings provided by bribers — some cash envelopes bearing Menendez''s fingerprints. He was convicted July 16, 2024 on all 16 counts — becoming the first U.S. Senator ever convicted of acting as an agent for a foreign government — and sentenced January 29, 2025 to 11 years in federal prison plus $922,188.10 in forfeiture.',
  '[
    "Federal grand jury indictment, Case No. 23-cr-490 (SDNY), unsealed September 22, 2023",
    "FBI search found $480,000+ in cash in envelopes (some bearing Menendez fingerprints), gold bars worth $100,000+, and a Mercedes-Benz convertible paid by co-conspirator",
    "Evidence he ghostwrote a letter for the Egyptian government urging release of $300M in military aid to other U.S. Senators",
    "Convicted July 16, 2024 on all 16 counts — first U.S. Senator ever convicted of acting as agent for a foreign government",
    "Sentenced January 29, 2025: 11 years in federal prison + $922,188.10 forfeiture",
    "Reported to federal prison June 17, 2025"
  ]'::jsonb,
  '[
    "CONVICTED — 16 COUNTS",
    "11 YEARS FEDERAL PRISON",
    "FIRST SENATOR CONVICTED AS FOREIGN AGENT",
    "CURRENTLY INCARCERATED"
  ]'::jsonb,
  E'Federal grand jury indictment, Case No. 23-cr-490 (SDNY), unsealed September 22, 2023.\n\nFBI search of his home (June 2022) uncovered over $480,000 in cash stuffed in envelopes hidden in clothing and a safe, gold bars worth over $100,000, a Mercedes-Benz convertible paid for by a co-conspirator, and home furnishings provided by bribers. Some cash envelopes bore Menendez''s fingerprints.\n\nEvidence at trial showed he ghostwrote a letter on behalf of the Egyptian government, provided Egyptian officials with non-public U.S. government information, sought to pressure the New Jersey Attorney General to resolve a criminal prosecution favorably for a co-conspirator, and attempted to influence a federal prosecution.\n\nConvicted July 16, 2024 on all 16 counts — becoming the first U.S. Senator ever convicted of acting as an agent for a foreign government.\n\nSentenced January 29, 2025 to 11 years in federal prison plus $922,188.10 in forfeiture. Reported to federal prison June 17, 2025.\n\nCurrent Profession: Incarcerated — serving 11-year federal prison sentence. Former U.S. Senator (NJ). Still appealing conviction.\nApproximate Net Worth: Not publicly documented; assets seized/forfeited.\nCurrent Residence: FCI Allenwood Low, White Deer, PA (transferred from FCI Schuylkill, July 1, 2025).',
  '[
    {"name": "DOJ — Menendez Indictment Announcement", "url": "https://www.justice.gov/usao-sdny/pr/us-senator-robert-menendez-his-wife-and-three-new-jersey-businessmen-charged-bribery", "date": "2023-09-22"},
    {"name": "DOJ — Menendez Sentenced to 11 Years", "url": "https://www.justice.gov/usao-sdny/pr/former-us-senator-robert-menendez-sentenced-11-years-prison-bribery-foreign-agent-and", "date": "2025-01-29"},
    {"name": "SDNY Court — Opinion and Order, Case 23-cr-490", "url": "https://www.nysd.uscourts.gov/sites/default/files/2024-12/23cr490%20opin%20and%20order%20dec%2013%202024%20TS.pdf", "date": "2024-12-13"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'WILLIAM J. JEFFERSON',
  'Former U.S. Representative, Louisiana',
  '"Cold Cash" Bribery Conviction — $90,000 Found in Freezer; 13-Year Sentence',
  'CRITICAL',
  'William Jefferson represented Louisiana''s 2nd Congressional District from 1991 to 2009. Beginning in 2000, he used his congressional office to solicit bribes from companies seeking his help brokering business deals in Africa. FBI surveillance video captured Jefferson accepting a briefcase containing $100,000 in cash at a Northern Virginia hotel in August 2005. A subsequent search of his D.C. home found $90,000 in cash wrapped in foil and hidden in boxes of frozen pie crust in his freezer. Jefferson received $478,153 in actual bribe proceeds and financed his daughters'' elite college tuitions partly with bribe money. He was convicted August 5, 2009 on 11 of 16 counts including bribery, racketeering, FCPA violations, and money laundering, and sentenced to 13 years in federal prison — the longest sentence for congressional bribery at that time. The sentence was later reduced to time served (approximately 5 years, 5 months) following a Supreme Court ruling affecting honest services fraud charges.',
  '[
    "FBI surveillance video (August 2005) captured Jefferson accepting a briefcase with $100,000 in cash at a Northern Virginia hotel",
    "FBI search of his D.C. home found $90,000 in cash wrapped in foil hidden in frozen food boxes",
    "Received $478,153 in documented bribe proceeds; sought hundreds of millions more",
    "Bribe proceeds used to fund daughters college tuitions",
    "Convicted August 5, 2009 on 11 of 16 counts including bribery, RICO, FCPA violations, and money laundering (E.D. Va., Case No. 1:07-cr-00209)",
    "Sentenced November 13, 2009: 13 years in federal prison (longest congressional bribery sentence at the time) + $470,000+ forfeiture"
  ]'::jsonb,
  '[
    "CONVICTED — 11 COUNTS",
    "13 YEARS FEDERAL PRISON",
    "$90K CASH IN FREEZER",
    "SENTENCE REDUCED TO TIME SERVED"
  ]'::jsonb,
  E'FBI surveillance video (August 2005) captured Jefferson accepting a briefcase containing $100,000 in cash at a Northern Virginia hotel.\n\nA subsequent search of his Washington, D.C. home found $90,000 in cash wrapped in foil and hidden in boxes of frozen pie crust in his freezer.\n\nJefferson received $478,153 in actual bribe proceeds and financed his daughters'' elite college tuitions partly with bribe money. He sought hundreds of millions of dollars on behalf of himself and family members through African business deals.\n\nConvicted August 5, 2009 (E.D. Va., Case No. 1:07-cr-00209) on 11 of 16 counts including bribery, racketeering, FCPA violations, and money laundering.\n\nSentenced November 13, 2009 to 13 years in federal prison — the longest sentence for congressional bribery at that time — plus $470,000+ forfeiture.\n\nSentence later reduced to time served (~5 years, 5 months) following a Supreme Court ruling affecting honest services fraud charges.\n\nCurrent Profession: No known public occupation. Former U.S. Representative (LA-2). Released from federal prison December 1, 2017. Permanently disbarred by Louisiana Supreme Court (May 2015).\nApproximate Net Worth: Not publicly documented (wife filed for bankruptcy during his incarceration).\nCurrent Residence: New Orleans, LA area (presumed; last known).',
  '[
    {"name": "DOJ — Jefferson Convicted of Bribery, Racketeering, Money Laundering", "url": "https://www.justice.gov/archives/opa/pr/former-congressman-william-j-jefferson-convicted-bribery-racketeering-money-laundering-and", "date": "2009-08-05"},
    {"name": "DOJ — Jefferson Sentenced to 13 Years", "url": "https://www.justice.gov/archives/opa/pr/former-congressman-william-j-jefferson-sentenced-13-years-prison-bribery-and-other-charges", "date": "2009-11-13"},
    {"name": "DOJ — Jefferson Sentencing Memorandum", "url": "https://www.justice.gov/sites/default/files/criminal-fraud/legacy/2012/06/01/11-06-09jefferson-sent-memo.pdf", "date": "2009-11-06"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;