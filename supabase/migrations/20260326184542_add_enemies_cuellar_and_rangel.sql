/*
  # Add Henry Cuellar and Charles Rangel to Enemies of Truth

  1. New Entries
    - `Henry Cuellar` — Indicted for $598,000 in bribes from Azerbaijan and Mexican bank; pardoned on FARA charges. Severity: HIGH.
    - `Charles Rangel` — Censured by Full House (333-79) — 11 ethics violations including tax evasion. Severity: DECEASED.

  2. Notes
    - Cuellar is still serving in Congress; pardoned by Trump on foreign agent charges; bribery charges were pending
    - Rangel died May 26, 2025; his censure was the first House censure since 1983
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'HENRY CUELLAR',
  'U.S. Representative, Texas',
  'Indicted for $598,000 in Bribes from Azerbaijan and a Mexican Bank; Pardoned on FARA Charges',
  'HIGH',
  'Henry Cuellar represented Texas''s 28th Congressional District from 2005, serving as Ranking Member on the Homeland Security Appropriations Subcommittee. His indictment, unsealed May 3, 2024 (Case No. 4:24-cr-00224, S.D. Texas), alleged he and his wife Imelda accepted approximately $598,000 in bribes from two foreign entities between 2014 and 2021. The first scheme involved Azerbaijan''s state-owned oil company SOCAR, which allegedly laundered payments through sham consulting contracts. In exchange, Cuellar allegedly inserted language into the FY2015 NDAA favorable to Azerbaijan and worked to kill Armenia-friendly legislation. The second scheme involved a Mexican commercial bank. Two FARA-related charges were dismissed at DOJ''s request in August 2025; Trump pardoned him in December 2025 on the foreign agent charges; bribery charges remained pending as of late 2025.',
  '[
    "Indicted May 3, 2024 on 14 counts: bribery, foreign agent conspiracy, honest services wire fraud, money laundering conspiracy, and money laundering (Case No. 4:24-cr-00224)",
    "Alleged $598,000 in bribes accepted from Azerbaijan state oil company (SOCAR) and a Mexican commercial bank (2014–2021)",
    "Allegedly inserted Azerbaijan-favorable language into the FY2015 National Defense Authorization Act",
    "Bribe proceeds used for credit card payments, taxes, car payments, dining, shopping, and a $12,000 custom gown",
    "Two political advisors pleaded guilty to conspiring to launder $200,000 from the Mexican bank",
    "Two FARA charges dismissed August 2025; Trump pardoned him December 2025 on foreign agent charges; bribery charges remained pending"
  ]'::jsonb,
  '[
    "INDICTED — 14 COUNTS",
    "PARDONED ON FARA CHARGES",
    "BRIBERY CHARGES PENDING",
    "STILL SERVING IN CONGRESS"
  ]'::jsonb,
  E'Indictment unsealed May 3, 2024 (Case No. 4:24-cr-00224, S.D. Texas) — 14 counts: bribery (2 counts), foreign agent conspiracy (2 counts), honest services wire fraud conspiracy (2 counts), money laundering conspiracy (1 count), and money laundering (5 counts).\n\nAlleged approximately $598,000 in bribes accepted from Azerbaijan''s state-owned oil company (SOCAR) and a Mexican commercial bank between 2014 and 2021.\n\nFirst scheme: SOCAR allegedly laundered payments through sham consulting contracts to shell companies owned by wife Imelda Cuellar. In exchange, Cuellar allegedly inserted language into the FY2015 NDAA favorable to Azerbaijan, worked to kill Armenia-friendly legislation, and coordinated with Azerbaijani diplomats.\n\nSecond scheme: Mexican commercial bank, with Cuellar allegedly influencing Treasury Department officials on anti-money-laundering policies.\n\nBribery proceeds spent on credit card payments, taxes, car payments, dining, and a $12,000 custom gown.\n\nTwo political advisors pleaded guilty to conspiring to launder $200,000 from the Mexican bank.\n\nTwo FARA charges dismissed August 2025 at DOJ''s request. Trump pardoned him December 2025 on foreign agent charges. Bribery charges remained pending. House Ethics Committee investigation remains open.\n\nCurrent Profession: U.S. Representative, TX-28 (Laredo area). Announced seeking his 12th term in 2026.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Laredo, TX; Washington, DC (during sessions).',
  '[
    {"name": "DOJ — Cuellar and Wife Charged with Bribery, Foreign Influence, Money Laundering", "url": "https://www.justice.gov/archives/opa/pr/us-congressman-henry-cuellar-and-his-wife-charged-bribery-unlawful-foreign-influence-and", "date": "2024-05-03"},
    {"name": "Texas Tribune — Full Indictment PDF", "url": "https://static.texastribune.org/media/files/1785edc5514548f418e6fb62e9659fb7/Cuellar%20Indictment.pdf", "date": "2024-05-03"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'CHARLES RANGEL',
  'Former U.S. Representative, New York',
  'Censured by Full House — 11 Ethics Violations Including Tax Evasion and Improper Corporate Solicitation',
  'DECEASED',
  'Charles Rangel represented New York''s 15th Congressional District from 1971 to 2017 and chaired the powerful House Ways and Means Committee from 2007 to 2010. The House Ethics Committee found him guilty on 11 counts of violating House ethics rules, and on December 2, 2010, the full House voted 333–79 to censure him — the first House censure since 1983. Violations included using House letterhead and staff to solicit millions in donations from corporate officials and lobbyists to fund the Charles B. Rangel Center for Public Service at City College of New York; failing to disclose hundreds of thousands of dollars in income and assets on required financial disclosure forms; failing to pay income taxes on rental income from a villa in the Dominican Republic; and improperly using rent-stabilized New York City apartments. DECEASED — May 26, 2025 (Memorial Day); at Harlem Hospital Center, New York City; age 94.',
  '[
    "Found guilty on 11 counts of violating House ethics rules by the bipartisan House Ethics Committee",
    "Solicited millions from corporate officials and lobbyists using House letterhead and staff — a prohibited use of official resources",
    "Failed to disclose hundreds of thousands of dollars in income and assets on required financial disclosure forms",
    "Failed to pay income taxes on rental income from a Dominican Republic villa",
    "Improperly maintained four rent-stabilized New York City apartments, including one used as a campaign office",
    "Full House voted 333–79 to censure him on December 2, 2010 — first House censure since 1983; required to pay tax restitution"
  ]'::jsonb,
  '[
    "CENSURED BY FULL HOUSE",
    "11 ETHICS VIOLATIONS",
    "TAX EVASION DOCUMENTED",
    "DECEASED — 2025"
  ]'::jsonb,
  E'Charles Rangel represented New York''s 15th Congressional District from 1971 to 2017 and chaired the powerful House Ways and Means Committee from 2007 to 2010.\n\nThe House Ethics Committee found him guilty on 11 counts of violating House ethics rules.\n\nOn December 2, 2010, the full House voted 333–79 to censure him — the first House censure since 1983.\n\nViolations included:\n- Using House letterhead and staff to solicit millions in donations from corporate officials and lobbyists to fund the Charles B. Rangel Center for Public Service at CCNY\n- Failing to disclose hundreds of thousands of dollars in income and assets on required financial disclosure forms\n- Failing to pay income taxes on rental income from a villa in the Dominican Republic\n- Improperly using rent-stabilized New York City apartments in violation of city rules\n\nRequired to pay restitution for unpaid taxes.\n\n▸ SURVIVING FAMILY:\nDeceased — May 26, 2025 (Memorial Day); at Harlem Hospital Center, New York City, NY; age 94.',
  '[
    {"name": "Politico — House Censures Defiant Rangel", "url": "https://www.politico.com/story/2010/12/house-censures-defiant-rangel-045883", "date": "2010-12-03"},
    {"name": "PBS NewsHour — Rare House Censure Ends 2-Year Ordeal for Rangel", "url": "https://www.pbs.org/newshour/show/rare-house-censure-ends-2-year-ordeal-for-rangel", "date": "2010-12-02"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;