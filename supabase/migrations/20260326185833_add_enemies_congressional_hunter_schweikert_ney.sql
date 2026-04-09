/*
  # Add Duncan Hunter, David Schweikert, Bob Ney

  1. New Entries
    - `Duncan Hunter` — $250K campaign fund misappropriation; 11 months prison; pardoned. Severity: HIGH.
    - `David Schweikert` — 11 ethics violations; $50K house fine + $175K FEC fine; still serving. Severity: HIGH.
    - `Bob Ney` — Jack Abramoff bribery scandal; 30 months prison; released and now radio commentator. Severity: CRITICAL.

  2. Notes
    - Hunter never served prison time; pardoned before sentence began
    - Schweikert admitted to all 11 violations; still serving in Congress; running for governor
    - Ney was part of major Abramoff corruption scandal; first congressional member imprisoned for it
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'DUNCAN HUNTER',
  'Former U.S. Representative, California',
  '$250,000 in Campaign Funds Misappropriated for Personal Luxuries; 11 Months Federal Prison; Pardoned',
  'HIGH',
  'Duncan Hunter represented California''s 50th Congressional District from 2009 to 2020, serving on the Armed Services Committee. Together with his wife Margaret Hunter, he misappropriated over $250,000 in campaign funds for personal use over a six-year period (approximately 2010–2016). Expenditures included a $14,000 trip to Italy, trips to Las Vegas and Disneyland, $500 in airline travel for their pet rabbit "Eggburt," birthday parties, family groceries and household items, restaurant meals, tequila shots, chewing tobacco, and personal reading materials. He filed false federal campaign finance reports to conceal the spending. Hunter initially pleaded not guilty and blamed his wife; he later reversed course after she pleaded guilty separately and agreed to testify against him. He pleaded guilty December 2019 to one count of conspiracy to misuse campaign funds and was sentenced March 17, 2020 to 11 months in federal prison. Pardoned by Trump December 22, 2020 before beginning his sentence. He never served any prison time.',
  '[
    "Misappropriated over $250,000 in campaign funds for personal use over six years (2010–2016)",
    "Spent campaign funds on $14,000 Italy trip, Las Vegas and Disneyland trips, $500 airline travel for pet rabbit \"Eggburt,\" birthday parties, family groceries, and restaurant meals",
    "Filed false federal campaign finance reports to conceal personal spending",
    "Initially blamed his wife; reversed course after she pleaded guilty separately and agreed to testify against him",
    "Pleaded guilty December 2019; sentenced March 17, 2020 to 11 months prison + 3 years supervised release + mandatory drug and alcohol rehab (S.D. Cal.)",
    "Pardoned by Trump December 22, 2020 before beginning sentence",
    "Now registered as federal lobbyist; publicly advocating on behalf of clients and allies seeking pardons"
  ]'::jsonb,
  '[
    "PLEADED GUILTY — CAMPAIGN FRAUD",
    "11 MONTHS FEDERAL PRISON",
    "$250K CAMPAIGN MISAPPROPRIATION",
    "PARDONED BY TRUMP"
  ]'::jsonb,
  E'Duncan Hunter represented California''s 50th Congressional District from 2009 to 2020, serving on the Armed Services Committee.\n\nTogether with his wife Margaret Hunter, he misappropriated over $250,000 in campaign funds for personal use over a six-year period (approximately 2010–2016).\n\nEXPENDITURES:\n- $14,000 trip to Italy\n- Trips to Las Vegas and Disneyland\n- $500 in airline travel for their pet rabbit "Eggburt"\n- Birthday parties\n- Family groceries and household items\n- Restaurant meals\n- Tequila shots ($462 alone)\n- Chewing tobacco\n- Personal reading materials\n\nFiled false federal campaign finance reports to conceal the personal spending.\n\nInitially pleaded not guilty and blamed his wife. Later reversed course after she pleaded guilty separately and agreed to testify against him.\n\nPleaded guilty December 2019 to one count of conspiracy to misuse campaign funds. Sentenced March 17, 2020 to 11 months in federal prison and 3 years of supervised release with required drug and alcohol rehabilitation program (S.D. Cal.).\n\nPardoned by Trump December 22, 2020 before beginning his sentence. Never served any prison time.\n\nCurrent Profession: Federal lobbyist — registered October 2023; publicly advocating on behalf of various clients and allies seeking pardons (January 2026 reports).\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Alpine, CA (San Diego area).',
  '[
    {"name": "NPR — Former Rep. Duncan Hunter Gets 11 Months for Misusing Campaign Funds", "url": "https://www.npr.org/2020/03/17/817327952/former-rep-duncan-hunter-gets-11-months-in-prison-for-misusing-campaign-funds", "date": "2020-03-17"},
    {"name": "CNN — Duncan Hunter Sentencing", "url": "https://www.cnn.com/2020/03/17/politics/duncan-hunter-sentencing", "date": "2020-03-17"},
    {"name": "PBS NewsHour — Wife of Ex-California Congressman Sentenced for Corruption", "url": "https://www.pbs.org/newshour/politics/wife-of-ex-california-congressman-sentenced-for-corruption", "date": "2020-06-11"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'DAVID SCHWEIKERT',
  'U.S. Representative, Arizona',
  '11 Ethics Violations — Misuse of Official Funds, False Financial Disclosures, Campaign Finance Crimes; Reprimanded and Fined',
  'HIGH',
  'David Schweikert has represented Arizona''s 6th Congressional District since 2011. The House voted unanimously to reprimand him and impose a $50,000 fine on July 31, 2020, following his admission to 11 separate ethics violations. Violations included misuse of official House funds for political and personal purposes, filing false and incomplete financial disclosures, making impermissible campaign finance expenditures, and improperly using congressional resources. Investigation revealed his congressional office had funneled money through "Chartwell Associates, LLC" — a one-person shop run by a staffer — and that Schweikert received income from this company without proper disclosure. He was also found to have spent taxpayer funds on personal matters, including travel to a Super Bowl event in Arizona. The FEC additionally fined his campaign $175,000 in 2022 for finance violations. Schweikert remains in Congress and is running for Arizona governor in 2026.',
  '[
    "Admitted to 11 separate ethics violations before House Ethics Committee",
    "Misused official House funds for political and personal purposes, including Super Bowl and Phoenix Open trips billed to taxpayers",
    "Filed false and incomplete financial disclosures over multiple years",
    "Funneled campaign funds through shell company \"Chartwell Associates, LLC\" run by a staffer; received undisclosed income from the same company",
    "House voted unanimously to formally reprimand him and imposed $50,000 fine on July 31, 2020",
    "FEC additionally fined his campaign $175,000 in 2022 for campaign finance violations",
    "Currently serving as U.S. Representative, AZ-1; running for Arizona governor in 2026 (Republican primary July 21, 2026 vs. Rep. Andy Biggs)"
  ]'::jsonb,
  '[
    "11 ETHICS VIOLATIONS",
    "HOUSE REPRIMAND",
    "$50K ETHICS FINE",
    "$175K FEC FINE"
  ]'::jsonb,
  E'David Schweikert has represented Arizona''s 6th Congressional District since 2011.\n\nThe House voted unanimously to reprimand him and impose a $50,000 fine on July 31, 2020, following his admission to 11 separate ethics violations:\n\n▸ MISUSE OF OFFICIAL FUNDS:\nMisuse of official House funds for political and personal purposes, including a Super Bowl event and Phoenix Open trip billed to taxpayers.\n\n▸ FALSE DISCLOSURES:\nFiled false and incomplete financial disclosures over multiple years.\n\n▸ CAMPAIGN FINANCE CRIMES:\nMaking impermissible campaign finance expenditures.\n\n▸ SHELL COMPANY SCHEME:\nHis congressional office funneled money through "Chartwell Associates, LLC" — a one-person shop run by a staffer. Schweikert received income from this company without proper disclosure.\n\n▸ IMPROPER USE OF RESOURCES:\nImproperly using congressional resources.\n\nFEC FINE:\nThe Federal Election Commission additionally fined his campaign $175,000 in 2022 for campaign finance violations.\n\nCurrent Profession: U.S. Representative, AZ-1. Running for Arizona governor in 2026. Faces Rep. Andy Biggs in July 21, 2026 Republican primary.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Fountain Hills, AZ (Phoenix area).',
  '[
    {"name": "Office of Congressional Ethics — OCE Report Regarding Rep. David Schweikert", "url": "https://conduct.house.gov/reports/investigations/oce-report-regarding-rep-david-schweikert", "date": "2020-07-01"},
    {"name": "NPR — House Unites to Reprimand GOP Lawmaker Tied to 11 Ethics Violations", "url": "https://www.npr.org/2020/07/31/897657022/house-unites-to-reprimand-gop-lawmaker-tied-to-11-ethics-violations", "date": "2020-07-31"},
    {"name": "Politico — Ethics Rebukes Schweikert for Slew of Violations", "url": "https://www.politico.com/news/2020/07/30/ethics-rebukes-schweikert-slew-of-violations-388447", "date": "2020-07-30"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'BOB NEY',
  'Former U.S. Representative, Ohio',
  'Jack Abramoff Bribery Scandal — Trips, Meals, Campaign Cash for Official Acts; 30 Months Federal Prison',
  'CRITICAL',
  'Bob Ney represented Ohio''s 18th Congressional District from 1995 to 2006, serving as Chairman of the House Administration Committee. As part of the broader Jack Abramoff lobbying scandal, Ney corruptly solicited and accepted a stream of things of value from lobbyist Jack Abramoff, Abramoff''s associates, and a foreign businessman. Benefits received included international trips (including a $160,000+ golf trip to Scotland), meals at Abramoff''s restaurant, sports tickets, tens of thousands in campaign contributions, and free fundraisers. In exchange, Ney supported or opposed legislation at Abramoff''s request, inserted statements into the Congressional Record, and supported a wireless infrastructure license for an Abramoff client. He intentionally concealed gifts by filing false U.S. Customs forms, false Travel Disclosure Forms, and false Annual Financial Disclosure Statements, and admitted to helping smuggle gambling winnings through customs. He pleaded guilty October 13, 2006 and was sentenced January 19, 2007 to 30 months in federal prison. Released February 2008 after serving 17 months.',
  '[
    "Accepted a $160,000+ golf trip to Scotland from Jack Abramoff and associates",
    "Accepted meals at Abramoff''s restaurant Signatures, sports tickets, and tens of thousands in campaign contributions",
    "In exchange, supported/opposed legislation at Abramoff''s direction; inserted statements into the Congressional Record; supported wireless infrastructure license for Abramoff client",
    "Filed false U.S. Customs forms, false Travel Disclosure Forms, and false Annual Financial Disclosure Statements to conceal gifts",
    "Admitted to helping smuggle gambling winnings through U.S. Customs",
    "Pleaded guilty October 13, 2006; sentenced January 19, 2007 to 30 months in federal prison (D.D.C.)",
    "Released from federal prison February 2008 (served 17 months of 30-month sentence)",
    "Now political analyst and radio commentator; active on air as of March 23, 2026"
  ]'::jsonb,
  '[
    "JACK ABRAMOFF SCANDAL",
    "GUILTY PLEA — BRIBERY",
    "30 MONTHS FEDERAL PRISON",
    "NOW RADIO COMMENTATOR"
  ]'::jsonb,
  E'Bob Ney represented Ohio''s 18th Congressional District from 1995 to 2006, serving as Chairman of the House Administration Committee.\n\nAs part of the broader Jack Abramoff lobbying scandal, Ney corruptly solicited and accepted a stream of things of value from lobbyist Jack Abramoff, Abramoff''s associates, and a foreign businessman.\n\nBENEFITS RECEIVED:\n- International trips (including a $160,000+ golf trip to Scotland)\n- Meals at Abramoff''s restaurant Signatures\n- Sports tickets\n- Tens of thousands in campaign contributions\n- Free fundraisers\n\nCORRUPT ACTS IN EXCHANGE:\n- Supported or opposed legislation at Abramoff''s request\n- Inserted statements into the Congressional Record\n- Supported a wireless infrastructure license for an Abramoff client\n\nCONCEALMENT:\n- Filed false U.S. Customs forms\n- Filed false Travel Disclosure Forms\n- Filed false Annual Financial Disclosure Statements\n- Admitted to helping smuggle gambling winnings through U.S. Customs\n\nPleaded guilty October 13, 2006. Sentenced January 19, 2007 to 30 months in federal prison (D.D.C.).\n\nReleased from federal prison February 2008 (served 17 months of 30-month sentence).\n\nCurrent Profession: Political analyst and radio commentator — "Bob Ney News & Notes" show; contributes as national correspondent to Talk Radio News Service (WCLO, WVLY, and other radio stations); as of March 23, 2026 still active on air.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Bellaire, OH (returned to his hometown after prison).',
  '[
    {"name": "DOJ — Former Congressman Bob Ney Pleads Guilty", "url": "https://www.justice.gov/archive/opa/pr/2006/September/06_crm_622.html", "date": "2006-09-13"},
    {"name": "DOJ — Sentencing Press Release", "url": "https://www.justice.gov/archive/opa/pr/2007/January/07_crm_027.html", "date": "2007-01-19"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;