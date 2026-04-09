/*
  # Add Executive Branch Entries: Manafort, Bannon, Pruitt, Zinke, Price

  1. New Entries
    - `Paul Manafort` — $75M laundered, tax/bank fraud; ~7 years sentenced; pardoned. Severity: CRITICAL.
    - `Stephen K. Bannon` — Contempt of Congress; We Build the Wall donor fraud; pardoned + state conviction. Severity: CRITICAL.
    - `Scott Pruitt` — EPA Administrator; 14 simultaneous IG investigations; $43K phone booth, luxury travel; resigned. Severity: HIGH.
    - `Ryan Zinke` — Interior Secretary; IG criminal referral; misleading statements; "duty of candor" violations. Severity: HIGH.
    - `Tom Price` — HHS Secretary; $1.2M private/military jets; 20 trips violated federal law; resigned. Severity: HIGH.

  2. Notes
    - Manafort was Trump's campaign chairman; major role in Mueller investigation
    - Bannon served as White House Chief Strategist; contempt conviction, We Build the Wall fraud
    - Pruitt had most simultaneous IG investigations of any EPA administrator
    - Zinke had DOJ criminal referral but no criminal charges filed
    - Price resigned after Trump expressed displeasure; IG audit completed 10 months later
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'PAUL MANAFORT',
  'Trump Presidential Campaign Chairman',
  '$75 Million Laundered, Tax Fraud, Bank Fraud, Witness Tampering; ~7 Years Sentenced; Pardoned',
  'CRITICAL',
  'Paul Manafort served as Donald Trump''s Presidential Campaign Chairman from June to August 2016. For years prior, he worked as a political consultant for pro-Russian Ukrainian political interests, earning tens of millions of dollars which he laundered through offshore accounts in Cyprus, the Seychelles, St. Vincent and the Grenadines, and other jurisdictions. He hid the income from U.S. tax authorities through false tax returns and used offshore money to fund luxury real estate, designer clothing, and antiques. He engaged in bank fraud by lying to banks to secure $25+ million in loans. More than $75 million flowed through offshore accounts; he laundered more than $30 million. In August 2018, a Virginia jury found him guilty on 8 of 18 federal felony counts. In September 2018, he pleaded guilty to conspiracy to defraud the United States and witness tampering, but later breached his cooperation agreement by lying to Mueller''s team. He was pardoned by President Trump in December 2020.',
  '[
    "Earned tens of millions as political consultant for pro-Russian Ukrainian political interests",
    "Laundered proceeds through offshore accounts in Cyprus, Seychelles, and St. Vincent and the Grenadines",
    "More than $75 million flowed through offshore accounts; laundered more than $30 million",
    "Filed false U.S. tax returns; hid income from federal authorities; funded luxury real estate, designer clothing, and antiques with laundered funds",
    "Engaged in bank fraud, lying to multiple banks to secure $25+ million in loans",
    "August 2018 Virginia jury verdict: guilty on 8 of 18 federal felony counts (tax fraud, bank fraud)",
    "September 2018 DC plea: guilty to conspiracy to defraud the United States and witness tampering; later breached cooperation agreement by lying to Mueller''s team",
    "Combined sentenced: ~90 months + $22 million forfeiture; pardoned by Trump December 2020"
  ]'::jsonb,
  '[
    "TRUMP CAMPAIGN CHAIRMAN",
    "GUILTY PLEA — CONSPIRACY",
    "90 MONTHS FEDERAL PRISON",
    "PARDONED BY TRUMP"
  ]'::jsonb,
  E'Paul Manafort served as Donald Trump''s Presidential Campaign Chairman from June to August 2016.\n\nFor years prior, he worked as a political consultant for pro-Russian Ukrainian political interests, earning tens of millions of dollars.\n\nMONEY LAUNDERING:\nHe laundered the proceeds through offshore accounts in:\n- Cyprus\n- Seychelles\n- St. Vincent and the Grenadines\n- Other jurisdictions\n\nTAX FRAUD:\nHe hid the income from U.S. tax authorities through:\n- False tax returns\n- Unreported offshore income\n- Luxury real estate purchases\n- Designer clothing and antiques\n\nBANK FRAUD:\nEngaged in bank fraud by lying to banks to secure $25+ million in loans.\n\nSCOPE OF FRAUD:\n- More than $75 million flowed through offshore accounts\n- Laundered more than $30 million\n\nCRIMINAL CONVICTIONS:\nAugust 2018: Virginia jury found him guilty on 8 of 18 federal felony counts (tax fraud, bank fraud).\n\nSeptember 2018: Pleaded guilty to:\n- Conspiracy to defraud the United States\n- Witness tampering\n\nLater breached his cooperation agreement by lying to Special Counsel Mueller''s team.\n\nSENTENCING:\nCombined sentences: ~90 months (47 months Virginia + 43 months DC) + $22 million in property and account forfeitures.\n\nPardon: President Trump issued a full and unconditional pardon in December 2020.\n\nCurrent Profession: International political consultant — working with far-right and nationalist political parties in Europe and the Balkans; reported (Politico, October 2025) to have consulted for the party of Milorad Dodik (Republika Srpska) in Bosnia.\nApproximate Net Worth: ~$10 million (Celebrity Net Worth, 2025; reduced from peak of ~$70M after forfeiting $22M+ and paying legal fees).\nCurrent Residence: Brooklyn, NY (brownstone retained after pardon); Water Mill, NY (Hamptons estate).',
  '[
    {"name": "DOJ — Special Counsel — Manafort Superseding Indictment", "url": "https://www.justice.gov/archives/sco/page/file/1070326/dl?inline=", "date": "2018-06-08"},
    {"name": "PBS NewsHour — Mueller''s Case Against Paul Manafort, Explained", "url": "https://www.pbs.org/newshour/politics/muellers-case-against-paul-manafort-explained", "date": "2019-03-07"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'STEPHEN K. BANNON',
  'White House Chief Strategist',
  'Convicted of Contempt of Congress; We Build the Wall Donor Fraud Guilty Plea; Pardoned + State Conviction',
  'CRITICAL',
  'Stephen Bannon served as White House Chief Strategist from January 20 to August 18, 2017. He was convicted of two counts of contempt of Congress by a federal jury on July 22, 2022 (sentenced October 21, 2022 to 4 months in federal prison and $6,500 fine) for defying a House Select Committee subpoena related to January 6, 2021. Separately, Bannon and co-conspirators orchestrated a scheme to defraud hundreds of thousands of donors who gave money to "We Build the Wall," a crowdfunding campaign that raised more than $25 million. Donors were promised 100% would go to building a border wall; in reality, co-conspirator Brian Kolfage covertly took $350,000+ for personal use, while Bannon received $1 million+ through a non-profit for personal expenses. After receiving a Trump federal pardon in January 2021, Bannon was charged by the Manhattan DA and pleaded guilty on February 11, 2025 to scheme to defraud in the first degree (a state felony).',
  '[
    "Defied House Select Committee subpoena related to January 6, 2021 investigation",
    "Convicted by federal jury July 22, 2022 on 2 counts of contempt of Congress",
    "Sentenced October 21, 2022 to 4 months in federal prison + $6,500 fine; served sentence in 2024",
    "Co-orchestrated \"We Build the Wall\" donor fraud — $25 million+ raised from donors promised 100% would go to border wall",
    "Received $1 million+ through a non-profit he controlled, used at least partly for personal expenses",
    "Sham invoices and shell accounts used to launder the proceeds",
    "Received federal pardon from Trump in January 2021 on federal fraud charges",
    "Pleaded guilty February 11, 2025 (Manhattan DA) to scheme to defraud in the first degree (felony); 3-year conditional discharge"
  ]'::jsonb,
  '[
    "CONTEMPT OF CONGRESS CONVICTION",
    "WE BUILD THE WALL FRAUD",
    "FEDERAL PARDON",
    "STATE FELONY CONVICTION"
  ]'::jsonb,
  E'Stephen Bannon served as White House Chief Strategist from January 20 to August 18, 2017.\n\n▸ CONTEMPT OF CONGRESS:\nBannon defied a House Select Committee subpoena related to the January 6, 2021 investigation. He refused both document production and deposition.\n\nConvicted by federal jury July 22, 2022 on 2 counts of contempt of Congress.\nSentenced October 21, 2022 to 4 months in federal prison + $6,500 fine.\nServed his sentence in 2024 at FCI Danbury (Connecticut).\n\n▸ WE BUILD THE WALL DONOR FRAUD:\nBannon and co-conspirators orchestrated a scheme to defraud hundreds of thousands of donors.\n\nFRAUD DETAILS:\n- "We Build the Wall" crowdfunding campaign raised more than $25 million\n- Donors were repeatedly promised that 100% of donations would go to building a border wall\n- In reality, co-conspirator Brian Kolfage covertly took $350,000+ for personal use\n- Bannon received $1 million+ through a non-profit he controlled\n- Funds were used for personal expenses, not wall construction\n- Sham invoices and shell accounts used to launder and conceal the theft\n\n▸ FEDERAL PARDON:\nReceived a Trump federal pardon in January 2021 on the federal fraud charges.\n\n▸ MANHATTAN DA CHARGES:\nFollowing the federal pardon, the Manhattan District Attorney charged Bannon with:\n- Scheme to defraud in the first degree (New York state felony)\n\nPleaded guilty February 11, 2025:\n- 3-year conditional discharge\n- Banned from fundraising for nonprofits with New York assets for 3 years\n- No additional jail time\n\nCurrent Profession: Host of "War Room" podcast (conservative media; one of the most-listened-to political podcasts in the U.S.); key outside advisor to Trump. Released from FCI Danbury October 29, 2024 after serving 4-month contempt sentence. In February 2026, DOJ moved to dismiss his federal contempt conviction. Supreme Court petition pending.\nApproximate Net Worth: Not publicly documented (estimated in low millions; significant legal expenses).\nCurrent Residence: Washington, DC (Capitol Hill townhouse used as War Room studio); also travels extensively.',
  '[
    {"name": "DOJ — Bannon Sentenced to Four Months for Contempt of Congress", "url": "https://www.justice.gov/usao-dc/pr/stephen-k-bannon-sentenced-four-months-prison-two-counts-contempt-congress", "date": "2022-10-21"},
    {"name": "DOJ — Leaders of We Build the Wall Charged with Defrauding Donors", "url": "https://www.justice.gov/usao-sdny/pr/leaders-we-build-wall-online-fundraising-campaign-charged-defrauding-hundreds-thousands", "date": "2020-08-20"},
    {"name": "NPR — Steve Bannon Pleads Guilty to Border Fraud", "url": "https://www.npr.org/2025/02/12/g-s1-48347/steve-bannon-pleads-guilty-border-fraud", "date": "2025-02-12"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'SCOTT PRUITT',
  'EPA Administrator',
  '14 Simultaneous IG Investigations; $43,000 Soundproof Phone Booth; Luxury Travel; Resigned Under Investigation',
  'HIGH',
  'Scott Pruitt served as EPA Administrator from February 2017 to July 2018. The EPA Inspector General opened more than a dozen separate probes into his conduct simultaneously. Violations included: a $43,000 soundproof phone booth installed in his office without required congressional notification; first-class and charter flights at taxpayer expense including a first-class flight to Italy; a sweetheart condo rental at $50/night from a lobbyist''s wife while the lobbying firm had business pending before the EPA — later found to violate federal ethics rules; direction of an EPA aide to contact Chick-fil-A to explore a franchise opportunity for his wife; using agency staff to research rental cars, hotel deals, and a Trump hotel mattress; having an EPA staffer pick up his dry cleaning; a $40,000+ Morocco trip arranged after lobbying by a former client of his personal attorney; and attempting to have his wife designated as an EPA "volunteer" to allow taxpayer-funded travel. The Office of Government Ethics issued a corrective action letter in June 2018. Pruitt resigned July 9, 2018.',
  '[
    "$43,000 soundproof phone booth installed in his EPA office without required congressional notification",
    "First-class and charter flights at taxpayer expense, including a first-class flight to Italy justified on security grounds",
    "Condo rental at $50/night from a lobbyist''s wife while the lobbying firm had business pending before EPA — found to violate federal ethics rules",
    "Directed EPA aide to contact Chick-fil-A to explore a franchise opportunity for his wife",
    "Directed EPA staff to research rental cars, hotel deals, and a Trump hotel mattress",
    "Had EPA staffer pick up his dry cleaning",
    "$40,000+ trip to Morocco arranged following lobbying by a former client of his personal attorney",
    "Office of Government Ethics issued formal corrective action letter (June 2018); resigned July 9, 2018"
  ]'::jsonb,
  '[
    "EPA ADMINISTRATOR",
    "14 IG INVESTIGATIONS",
    "ETHICS VIOLATIONS",
    "RESIGNED UNDER INVESTIGATION"
  ]'::jsonb,
  E'Scott Pruitt served as EPA Administrator from February 2017 to July 2018.\n\nTHE EPA INSPECTOR GENERAL opened more than a dozen separate probes into his conduct simultaneously — an unprecedented number for a single administrator.\n\n▸ SOUNDPROOF PHONE BOOTH:\n$43,000 soundproof phone booth installed in his EPA office without required congressional notification.\n\n▸ LUXURY TRAVEL:\nFirst-class and charter flights at taxpayer expense, including a first-class flight to Italy that was justified on security grounds.\n\n▸ SWEETHEART CONDO RENTAL:\nCondo rental at $50/night from a lobbyist''s wife while the lobbying firm had business pending before the EPA.\nLater found to violate federal ethics rules.\n\n▸ PERSONAL FAVORS:\nDirected EPA aide to contact Chick-fil-A to explore a franchise opportunity for his wife.\n\n▸ MISUSE OF AGENCY STAFF:\nDirected EPA staff to research rental cars, hotel deals, and a Trump hotel mattress.\nHad EPA staffer pick up his dry cleaning.\n\n▸ MOROCCO TRIP:\n$40,000+ trip to Morocco arranged following lobbying by a former client of his personal attorney.\n\n▸ SPOUSE TRAVEL SCHEME:\nAttempted to have his wife designated as an EPA "volunteer" to allow taxpayer-funded travel with him.\n\n▸ ETHICS OFFICE ACTION:\nThe Office of Government Ethics issued a corrective action letter in June 2018.\n\nResigned July 9, 2018. The subsequent IG investigations were concluded as "inconclusive" because he was no longer subject to EPA jurisdiction.\n\nCurrent Profession: Private consultant/attorney in energy and regulatory sectors (launched consulting firm after resignation). Ran for U.S. Senate in Oklahoma special election (June 2022), lost with 5% of vote. Currently low public profile; no confirmed current position (March 2026).\nApproximate Net Worth: ~$736,000 (2018 Center for Responsive Politics estimate); likely reduced by legal expenses.\nCurrent Residence: Tulsa, OK.',
  '[
    {"name": "New York Times — A Guide to the Many Investigations into Scott Pruitt", "url": "https://www.nytimes.com/2018/04/18/climate/scott-pruitt-epa-investigations-guide.html", "date": "2018-04-18"},
    {"name": "Politico — Ethics Office Investigating Scott Pruitt Scandals", "url": "https://www.politico.com/story/2018/06/15/ethics-office-investigation-scott-pruitt-scandals-1425413", "date": "2018-06-15"},
    {"name": "CNN — Pruitt Resignation and IG Investigations", "url": "https://www.cnn.com/2018/11/29/politics/pruitt-epa-investigations", "date": "2018-11-29"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;