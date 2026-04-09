/*
  # Add Judicial Branch: Alito and Nixon
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUSTICE SAMUEL ALITO',
  'Associate Justice, U.S. Supreme Court',
  'Accepted Undisclosed $100,000+ Private Jet Flight from Billionaire Litigant; Voted in That Litigant''s Favor',
  'HIGH',
  'Samuel Alito has served as an Associate Justice of the U.S. Supreme Court since 2006. ProPublica reported in June 2023 that in early July 2008, Paul Singer — a billionaire hedge fund manager who has repeatedly had cases before the Supreme Court — flew Justice Alito to Alaska on his private jet for a luxury fishing vacation at King Salmon Lodge. Had Alito chartered the plane himself, the cost would have exceeded $100,000 one way. Alito''s three-night lodge stay was also provided free of charge by lodge owner Robin Arkley II, another major conservative donor. Alito did not disclose either the private jet flight or the lodge stay on his mandatory annual financial disclosure forms. After the 2008 trip, Singer''s hedge fund came before the Supreme Court at least 10 times. In 2014, in Republic of Argentina v. NML Capital, Alito did not recuse himself and voted 7-1 in Singer''s favor; Singer''s fund ultimately collected a $2.4 billion payout. No criminal charges have been filed.',
  '[
    "In July 2008, billionaire Paul Singer flew Alito to Alaska on his private jet for a luxury fishing vacation",
    "Chartering the plane would have cost $100,000+ one way",
    "Three-night stay at King Salmon Lodge ($1,000+/day) provided free by another major conservative donor",
    "Neither the private jet flight nor the lodge stay was disclosed on Alito''s mandatory annual financial disclosure forms",
    "At least six other federal judges disclosed similar private jet travel in the same period",
    "Seven ethics law experts concluded Alito appeared to have violated federal disclosure law",
    "After the trip, Singer''s hedge fund came before the Supreme Court at least 10 times",
    "In Republic of Argentina v. NML Capital (2014), Alito voted 7-1 in Singer''s favor",
    "Singer''s fund collected a $2.4 billion payout from Argentina as a result; no criminal charges filed"
  ]'::jsonb,
  '[
    "SUPREME COURT JUSTICE",
    "UNDISCLOSED LUXURY TRAVEL",
    "CONFLICT OF INTEREST",
    "FAVORABLE RULING"
  ]'::jsonb,
  E'Samuel Alito has served as an Associate Justice of the U.S. Supreme Court since 2006. He is the second-wealthiest justice on the Court.\n\nUNDISCLOSED LUXURY TRIP:\nProPublica reported in June 2023 that in early July 2008, Paul Singer — a billionaire hedge fund manager — flew Justice Alito to Alaska on his private jet for a luxury fishing vacation.\n\nPRIVATE JET FLIGHT:\nHad Alito chartered the plane himself, the cost would have exceeded $100,000 one way.\n\nLODGE STAY:\nThree-night stay at King Salmon Lodge:\n- $1,000+ per night charge\n- Provided free of charge by lodge owner Robin Arkley II (another major conservative donor)\n\nNON-DISCLOSURE:\nAlito did NOT disclose either the private jet flight or the lodge stay on his mandatory annual financial disclosure forms.\n\nBREACH CONTEXT:\n- At least six other federal judges disclosed similar private jet travel in the same period\n- Seven ethics law experts concluded Alito appeared to have violated federal disclosure law\n\nSINGER''S LITIGATION HISTORY:\nAfter the 2008 trip, Singer''s hedge fund came before the Supreme Court at least 10 times.\n\nARGENTINA v. NML CAPITAL (2014):\nIn Republic of Argentina v. NML Capital (Case No. 12-842), Alito did NOT recuse himself despite:\n- The undisclosed luxury trip from Singer just 6 years earlier\n- The ongoing business relationship and donations\n\nAlito voted 7-1 in Singer''s favor.\n\nFINANCIAL OUTCOME:\nSinger''s hedge fund ultimately collected a $2.4 billion payout from Argentina as a result of the Supreme Court''s ruling.\n\nCRIMINAL STATUS:\nNo criminal charges have been filed.\nAlito declined all Senate Judiciary Committee requests to testify.\n\nCurrent Profession: Associate Justice, U.S. Supreme Court (since 2006); salary $298,500/yr. Second-wealthiest justice on the court. Has drawn ethics scrutiny for individual stock holdings (recused himself 53+ times in past three terms due to stock conflicts); flag controversies at his Virginia and New Jersey homes. Has stated no plans to retire. Trump (December 2025) publicly stated he hopes Alito remains on the Court.\nApproximate Net Worth: ~$10 million (Forbes, February 2024; includes ~$5M investment portfolio of 29 individual company stocks plus real estate equity and pension).\nCurrent Residence: Alexandria, VA (primary); Cape May County, NJ (vacation/secondary home).',
  '[
    {"name": "ProPublica — Alito Took Unreported Luxury Trip with GOP Donor Paul Singer", "url": "https://www.propublica.org/article/samuel-alito-luxury-fishing-trip-paul-singer-scotus-supreme-court", "date": "2023-06-20"},
    {"name": "NPR — Justice Alito ProPublica Singer", "url": "https://www.npr.org/2023/06/21/1183456911/justice-alito-propublica-singer", "date": "2023-06-21"},
    {"name": "New York Times — Justice Alito Luxury Travel Fishing Trip", "url": "https://www.nytimes.com/2023/06/21/us/politics/justice-alito-luxury-travel-fishing-trip.html", "date": "2023-06-21"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUDGE WALTER L. NIXON JR.',
  'U.S. District Judge, Southern District of Mississippi',
  'Convicted of Perjury; Impeached and Removed from Federal Bench; Later Practiced Law in Louisiana',
  'HIGH',
  'Walter L. Nixon Jr. served as a U.S. District Judge for the Southern District of Mississippi from 1968 to 1989. In 1986, he was convicted by a federal jury on two counts of making false statements to a grand jury (perjury) in connection with his efforts to intervene in a state drug-smuggling prosecution of the son of a business associate. Nixon had asked a local district attorney to be lenient, then lied to a federal grand jury investigating his conduct, denying he had ever discussed the case with the DA. He was sentenced to five years in federal prison. Despite his conviction, Nixon refused to resign and continued collecting his $89,500 annual salary while incarcerated. The House of Representatives impeached him on three articles on May 10, 1989 — the first judicial impeachment in 50 years. The Senate convicted him on two articles on November 3, 1989 and removed him from office. Nixon later challenged the Senate''s use of a committee (rather than the full body) to hear evidence, but the Supreme Court ruled unanimously in Nixon v. United States (1993) that the question was a nonjusticiable political question.',
  '[
    "Convicted by federal jury on two counts of making false statements to a grand jury (perjury) — 1986",
    "Sentenced to five years in federal prison",
    "Intervened in a state drug-smuggling prosecution of the son of a business associate (Wiley Fairchild)",
    "Lied to federal grand jury, denying he had discussed the case with the local district attorney",
    "Refused to resign after conviction; continued collecting $89,500 annual salary while imprisoned",
    "House impeached on three articles on May 10, 1989",
    "Senate convicted on two of three articles on November 3, 1989; removed from office",
    "Supreme Court ruled unanimously in Nixon v. United States, 506 U.S. 224 (1993) that Senate impeachment procedures are a nonjusticiable political question"
  ]'::jsonb,
  '[
    "FEDERAL JUDGE",
    "CONVICTED OF PERJURY",
    "IMPEACHED AND REMOVED",
    "LANDMARK SUPREME COURT CASE"
  ]'::jsonb,
  E'Walter L. Nixon Jr. served as a U.S. District Judge for the Southern District of Mississippi from 1968 to 1989.\n\nCRIMINAL CONVICTION:\nIn 1986, a federal jury convicted Nixon on two counts of making false statements to a grand jury (perjury).\n\nTHE UNDERLYING CASE:\nNixon intervened in a state drug-smuggling prosecution of the son of a business associate named Wiley Fairchild.\nHe asked the local district attorney to be lenient in prosecuting Fairchild''s son.\n\nLYING TO FEDERAL INVESTIGATORS:\nWhen a federal grand jury investigated Nixon''s conduct, he lied under oath.\nHe falsely stated that he had never discussed the Fairchild case with the local district attorney.\n\nSENTENCE:\nSentenced to five years in federal prison.\n\nREFUSAL TO RESIGN:\nDespite his conviction, Nixon refused to resign from the federal bench.\nHe continued collecting his $89,500 annual salary while serving his prison sentence.\n\nIMPEACHMENT:\nThe House of Representatives impeached Nixon on three articles on May 10, 1989.\nThis was the first judicial impeachment in 50 years.\n\nSENATE CONVICTION:\nThe Senate convicted Nixon on two of the three articles on November 3, 1989.\nHe was removed from office.\n\nSUPREME COURT CHALLENGE:\nNixon later challenged the Senate''s use of a committee (rather than the full body) to hear evidence during the impeachment trial.\n\nSupreme Court Ruling (Nixon v. United States, 506 U.S. 224, 1993):\nThe Supreme Court ruled unanimously that:\n- Senate impeachment procedures are a nonjusticiable political question\n- Federal courts cannot review the Senate''s impeachment procedures\n- The political question doctrine applies to impeachment trials\n\nCurrent Profession: Attorney in private practice — has practiced law in Lake Charles, Louisiana since 1998. Former U.S. District Judge, S.D. Mississippi. Convicted of perjury 1986 (5-year sentence); impeached by House and convicted by Senate November 3, 1989; removed from the bench. Disbarred in Mississippi; relocated legal practice to Louisiana after prison release (~1993). Age 97 as of December 2026.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Lake Charles, LA.',
  '[
    {"name": "U.S. Senate — Proceedings of United States Senate in Impeachment Trial of Walter L. Nixon Jr.", "url": "https://www.congress.gov/congressional-record/101st-congress/senate-documents", "date": "1989-11-03"},
    {"name": "Supreme Court — Nixon v. United States, 506 U.S. 224 (1993)", "url": "https://supreme.justia.com/cases/federal/us/506/224/", "date": "1993-06-24"},
    {"name": "PBS — Walter Nixon Impeachment", "url": "https://www.pbs.org/newshour/politics", "date": "1989-11-03"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;