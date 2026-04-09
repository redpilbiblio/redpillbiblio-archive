/*
  # Add Judicial Branch Entries: Hastings, Thomas, Alito, Nixon

  1. New Entries
    - `Judge Alcee L. Hastings` — Impeached for bribery; then served 29 years in Congress after removal. Severity: CRITICAL. DECEASED.
    - `Justice Clarence Thomas` — $4.2M undisclosed gifts from GOP donor; no criminal charges. Severity: CRITICAL.
    - `Justice Samuel Alito` — $100K+ undisclosed private jet; voted favorably for same litigant. Severity: HIGH.
    - `Judge Walter L. Nixon Jr.` — Convicted of perjury; impeached and removed. Severity: HIGH.
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUDGE ALCEE L. HASTINGS',
  'U.S. District Judge, Southern District of Florida',
  'Federal Judge Impeached and Removed for Bribery and Perjury; Later Served 29 Years in Congress; DECEASED',
  'CRITICAL',
  'Alcee Hastings served as a U.S. District Judge in the Southern District of Florida, appointed in 1979. In 1981, he solicited a $150,000 bribe from two mob-connected defendants in a case before his court, in exchange for reducing their sentences and returning forfeited property. His associate William Borders actually collected the money in an FBI sting. Hastings was acquitted in a separate 1983 criminal trial — but a special 11th Circuit judicial committee, after a 3-year investigation, concluded that Hastings had committed perjury, tampered with evidence, and fabricated his defense to win acquittal. The House voted 413–3 on August 3, 1988 to approve 17 articles of impeachment. The Senate convicted Hastings on October 20, 1989 on 8 of 17 articles and removed him from office. However, the Senate did not vote to disqualify him from future office, which allowed him to be subsequently elected to Congress, where he served as a U.S. Representative from 1993 until his death in 2021 — 29 years in Congress after having been removed from the federal bench for bribery and perjury. DECEASED — April 6, 2021.',
  '[
    "Solicited a $150,000 bribe in 1981 from defendants in a case before his court in exchange for reducing sentences and returning forfeited property",
    "Associate William Borders convicted for collecting the bribe money in an FBI sting",
    "Although acquitted in a 1983 criminal trial, a special 11th Circuit judicial committee concluded he committed perjury, tampered with evidence, and fabricated his defense",
    "Also leaked confidential wiretap information from a case under his supervision",
    "House voted 413–3 to approve 17 articles of impeachment (August 3, 1988)",
    "Senate convicted October 20, 1989 on 8 of 17 articles; removed from office",
    "Senate did not vote to disqualify him from future office",
    "Subsequently elected to Congress and served as U.S. Representative from 1993 to 2021 — 29 years after his removal from the federal bench",
    "DECEASED April 6, 2021; pancreatic cancer (Stage IV)"
  ]'::jsonb,
  '[
    "FEDERAL JUDGE",
    "IMPEACHED BY HOUSE",
    "CONVICTED BY SENATE",
    "LATER SERVED IN CONGRESS"
  ]'::jsonb,
  E'Alcee Hastings served as a U.S. District Judge in the Southern District of Florida, appointed in 1979.\n\nBRIBERY SCHEME:\nIn 1981, Hastings solicited a $150,000 bribe from two mob-connected defendants in a case before his court.\nThe bribe was offered in exchange for:\n- Reducing their sentences\n- Returning forfeited property\n\nAssociate William Borders actually collected the money in an FBI sting operation.\nBorders was convicted for his role.\n\nCRIMINAL TRIAL:\nHastings was acquitted in a separate 1983 criminal trial.\n\nHOWEVER:\nA special 11th Circuit judicial committee, after a 3-year investigation, concluded that Hastings had:\n- Committed perjury\n- Tampered with evidence\n- Fabricated his defense to win acquittal\n\nADDITIONAL CONDUCT:\nHastings also leaked confidential wiretap information from a case he supervised.\n\nIMPEACHMENT BY HOUSE:\nHouse voted 413–3 on August 3, 1988 to approve 17 articles of impeachment.\n\nCONVICTION BY SENATE:\nSenate convicted Hastings on October 20, 1989 on 8 of 17 articles:\n- Conspiracy\n- Bribery\n- Perjury\n- Fabricating documents\n- Undermining judicial integrity\n\nREMOVAL FROM OFFICE:\nRemoved from the federal bench.\n\nCRUCIAL OVERSIGHT:\nThe Senate did NOT vote to permanently disqualify Hastings from holding future federal office.\nThis oversight allowed him to be subsequently elected to Congress.\n\nCONGRESSIONAL CAREER:\nElected to Congress and served as a U.S. Representative, Florida-20, from 1993 until his death in 2021.\n\nThis represents 29 years in Congress after being removed from the federal bench for bribery and perjury.\n\nCurrent Profession: DECEASED — April 6, 2021; pancreatic cancer (diagnosed January 2019, Stage IV); Plantation, FL area; age 84. Was serving as U.S. Representative, FL-20 at the time of death (his 15th term).\nApproximate Net Worth: N/A\nCurrent Residence: Deceased.',
  '[
    {"name": "U.S. Senate Historical Office — Impeachment of Alcee Hastings", "url": "https://www.senate.gov/about/powers-procedures/impeachment/impeachment-hastings.htm", "date": "1989-10-20"},
    {"name": "Library of Congress — Federal Impeachment: Alcee Hastings", "url": "https://guides.loc.gov/federal-impeachment/alcee-hastings", "date": "1989-10-20"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUSTICE CLARENCE THOMAS',
  'Associate Justice, U.S. Supreme Court',
  '$4.2 Million+ in Undisclosed Gifts from Republican Megadonor Over Two Decades; No Criminal Charges',
  'CRITICAL',
  'Clarence Thomas has served as an Associate Justice of the U.S. Supreme Court since 1991. ProPublica reported in April 2023 that for more than two decades, Justice Thomas secretly accepted luxury travel from Harlan Crow, a Dallas billionaire and major Republican donor, without disclosing it on mandatory financial disclosure forms. Documented gifts included virtually annual vacations on Crow''s 162-foot superyacht Michaela Rose (including a 2019 Indonesia cruise estimated at $500,000+ if chartered); multiple cruises to the Greek Islands, New Zealand, and other destinations; more than two decades of summer stays at Crow''s private Adirondacks resort, Camp Topridge; and multiple private jet flights on Crow''s Bombardier Global 5000. Crow also donated $105,000 to a Yale Law School portrait fund for Thomas and gave $500,000 to a Tea Party group co-founded by Ginni Thomas. The Senate Judiciary Committee authorized a subpoena for Harlan Crow''s records in November 2023; the committee majority reported Thomas had accepted nearly $4.2 million in gifts over two decades. No criminal charges have been filed.',
  '[
    "Accepted virtually annual vacations on Crow''s 162-foot superyacht Michaela Rose over more than two decades",
    "2019 Indonesia cruise alone estimated at $500,000+ if chartered",
    "Multiple private jet flights on Crow''s Bombardier Global 5000, including one July 2022 flight valued at $70,000+",
    "More than two decades of summer stays at Crow''s private Adirondacks resort, Camp Topridge",
    "Crow donated $105,000 to Yale Law School for a Thomas portrait fund",
    "Crow gave $500,000 to a Tea Party group co-founded by Ginni Thomas (which also paid her $120,000 salary)",
    "Senate Judiciary Committee subpoena of Crow''s records (November 2023) revealed additional undisclosed trips",
    "Committee majority total: approximately $4.2 million in gifts — nearly ten times all gifts received by other justices combined",
    "Seven ethics law experts concluded Thomas appears to have violated federal disclosure law; no criminal charges filed"
  ]'::jsonb,
  '[
    "SUPREME COURT JUSTICE",
    "$4.2M UNDISCLOSED GIFTS",
    "ETHICS VIOLATIONS",
    "NO CRIMINAL CHARGES"
  ]'::jsonb,
  E'Clarence Thomas has served as an Associate Justice of the U.S. Supreme Court since 1991. He is currently the longest-serving justice on the Court.\n\nUNDISCLOSED LUXURY TRAVEL:\nProPublica reported in April 2023 that for more than two decades, Justice Thomas secretly accepted luxury travel and accommodations from Harlan Crow, a Dallas billionaire and major Republican donor.\n\nThese gifts were NOT disclosed on mandatory annual financial disclosure forms.\n\nSUPERYACHT VACATIONS:\nThomas accepted virtually annual vacations on Crow''s 162-foot superyacht Michaela Rose.\nDocumented trips included:\n- Multiple cruises to the Greek Islands\n- A 2019 Indonesia cruise estimated at $500,000+ if chartered commercially\n- Cruises to New Zealand and other destinations\n\nPRIVATE JET FLIGHTS:\nMultiple private jet flights on Crow''s Bombardier Global 5000.\nOne July 7, 2022 flight alone was valued at $70,000+.\nOther federal judges disclosed similar private jet travel during the same period.\n\nPRIVATE RESORT STAYS:\nMore than two decades of summer stays at Crow''s private Adirondacks resort, Camp Topridge.\n\nMONETARY DONATIONS:\nCrow also:\n- Donated $105,000 to Yale Law School for a portrait fund for Thomas\n- Gave $500,000 to a Tea Party group co-founded by Ginni Thomas\n- This Tea Party group paid Ginni Thomas a $120,000 annual salary\n\nSENATE INVESTIGATION:\nThe Senate Judiciary Committee authorized a subpoena for Harlan Crow''s records in November 2023.\nCrow''s documents revealed additional undisclosed trips beyond those initially reported.\n\nTOTAL VALUE:\nThe committee majority reported Thomas had accepted nearly $4.2 million in gifts over two decades.\nThis was nearly ten times the value of all gifts received by his fellow justices combined during the same period.\n\nETHICS ASSESSMENT:\nSeven ethics law experts told ProPublica that Thomas appears to have violated federal disclosure law.\nThomas declined all Senate Judiciary Committee requests to testify.\n\nCRIMINAL STATUS:\nNo criminal charges have been filed.\nNo formal ethics body with binding jurisdiction over the Supreme Court exists.\n\nCurrent Profession: Associate Justice, U.S. Supreme Court (since 1991; longest-serving current justice); salary $298,500/yr. Under scrutiny for undisclosed gifts from Republican megadonor Harlan Crow. Has said he has no plans to retire. Trump (December 2025) publicly stated he hopes Thomas remains on the Court.\nApproximate Net Worth: ~$4 million (Forbes, January 2024; primarily tied up in federal pension ~$2M and home equity).\nCurrent Residence: Fairfax County, VA.',
  '[
    {"name": "ProPublica — Clarence Thomas Secretly Accepted Luxury Trips From GOP Donor", "url": "https://www.propublica.org/article/clarence-thomas-scotus-undisclosed-luxury-travel-gifts-crow", "date": "2023-04-06"},
    {"name": "Senate Judiciary Committee — Durbin Reveals Omissions of Gifted Private Travel to Thomas", "url": "https://www.judiciary.senate.gov/press/releases/durbin-reveals-omissions-of-gifted-private-travel-to-justice-clarence-thomas-from-harlan-crow", "date": "2024-06-13"},
    {"name": "U.S. Senate — Whitehouse and Johnson Request Update on Judicial Conference Investigation", "url": "https://www.whitehouse.senate.gov/news/release/whitehouse-and-johnson-request-update-on-judicial-conferences-investigation-into-billionaire-funded-undisclosed-gifts-to-justice-thomas/", "date": "2024-06-18"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;