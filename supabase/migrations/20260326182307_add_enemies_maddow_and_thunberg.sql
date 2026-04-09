/*
  # Add Rachel Maddow and Greta Thunberg to Enemies of Truth

  1. New Entries
    - `Rachel Maddow` — Federal court found 10 "verifiably false" statements on her show; NBCUniversal settled. Severity: HIGH.
    - `Greta Thunberg` — Three criminal convictions in Swedish courts for disobeying police orders. Severity: MEDIUM.

  2. Notes
    - Maddow was not personally named as defendant (NBCUniversal was), but the court findings are specific to her show
    - Thunberg's convictions are for minor criminal offenses (misdemeanor equivalent) carrying small fines — intentional civil disobedience
    - MEDIUM severity is a new tier — added for proportionality on minor documented offenses
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RACHEL MADDOW',
  'MSNBC Host, Political Commentator',
  'Federal Court Found 10 "Verifiably False" Statements; NBCUniversal Settled',
  'HIGH',
  'Dr. Mahendra Amin, a Georgia gynecologist, filed a $30 million defamation lawsuit against NBCUniversal for coverage on The Rachel Maddow Show and other MSNBC programs that called him a "uterus collector" and accused him of performing "mass hysterectomies" on ICE detainees without consent. In a 108-page ruling issued June 26, 2024, U.S. District Judge Lisa Godbey Wood found as established fact that "there were no mass hysterectomies or high numbers of hysterectomies at the facility" and that Dr. Amin "performed only two hysterectomies on female detainees." The court found that "NBC investigated the whistleblower letter''s accusations; that investigation did not corroborate the accusations and even undermined some; NBC republished the letter''s accusations anyway." The judge found 10 "verifiably false" statements made specifically on The Rachel Maddow Show and ruled a jury could reasonably find actual malice. A Senate subcommittee investigation separately found "no evidence of mass hysterectomies." NBCUniversal settled the lawsuit in February 2025 before trial; settlement terms were not disclosed.',
  '[
    "Amin v. NBCUniversal, S.D. Ga., No. 5:2021cv00056 — 108-page ruling (June 26, 2024) by Judge Lisa Godbey Wood",
    "Court found as established fact: there were no mass hysterectomies or high numbers of hysterectomies at the facility",
    "Court found 10 verifiably false statements made specifically on The Rachel Maddow Show",
    "NBC investigated the whistleblower accusations; investigation did not corroborate and undermined some; NBC republished anyway",
    "Court ruled a jury could reasonably find actual malice — knowledge of falsity or reckless disregard for truth",
    "Senate subcommittee confirmed no evidence of mass hysterectomies; both surgeries were medically necessary per ICE records",
    "NBCUniversal settled in February 2025; case officially dismissed April 2025"
  ]'::jsonb,
  '[
    "CIVIL DEFAMATION CASE",
    "10 VERIFIABLY FALSE STATEMENTS",
    "ACTUAL MALICE QUESTION JURY-WORTHY",
    "SETTLED BEFORE TRIAL"
  ]'::jsonb,
  E'Amin v. NBCUniversal, S.D. Ga., No. 5:2021cv00056 — 108-page ruling (June 26, 2024) by U.S. District Judge Lisa Godbey Wood.\n\nThe court found as established fact: "there were no mass hysterectomies or high numbers of hysterectomies at the facility" and Dr. Amin "performed only two hysterectomies on female detainees."\n\nThe court found 10 "verifiably false" statements were made specifically on The Rachel Maddow Show.\n\nThe court found "NBC investigated the whistleblower letter''s accusations; that investigation did not corroborate the accusations and even undermined some; NBC republished the letter''s accusations anyway."\n\nThe judge ruled a jury could reasonably find actual malice — meaning NBCUniversal may have published with knowledge of falsity or reckless disregard for truth.\n\nA Senate subcommittee investigation separately confirmed "no evidence of mass hysterectomies." Both surgeries performed were medically necessary per ICE records.\n\nNBCUniversal settled in February 2025 before the April 22, 2025 trial date. Settlement terms were not disclosed.\n\nSeverity caveat: This is a civil defamation matter, not criminal. Maddow was not personally a named defendant — NBCUniversal was. The case settled before a jury rendered a final verdict on actual malice.\n\nCurrent Profession: MSNBC host (Monday-only show, 5-year contract signed November 2024). Salary ~$25 million/year.\nApproximate Net Worth: ~$50 million (Celebrity Net Worth, 2025).\nCurrent Residence: New York City, NY (Upper East Side penthouse, ~$10M value); West Cummington, MA (farmhouse).',
  '[
    {"name": "Amin v. NBCUniversal — Court Ruling (Justia)", "url": "https://law.justia.com/cases/federal/district-courts/georgia/gasdce/5:2021cv00056/85242/209/", "date": "2024-06-26"},
    {"name": "NPR — NBC Settles Lawsuit with ICE Doctor", "url": "https://www.npr.org/2025/02/21/nx-s1-5305268/nbc-settles-lawsuit-ice-doctor-msnbc-maddow-georgia-detainee", "date": "2025-02-21"},
    {"name": "9th Circuit — Herring Networks v. Maddow Opinion", "url": "https://cdn.ca9.uscourts.gov/datastore/opinions/2021/08/17/20-55579.pdf", "date": "2021-08-17"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'GRETA THUNBERG',
  'Climate Activist, Author',
  'Three Criminal Convictions in Swedish Courts for Disobeying Police Orders',
  'MEDIUM',
  'Greta Thunberg has been convicted by Swedish courts on three separate occasions for disobeying police orders during climate protest actions. In July 2023, Malmö City Court convicted her for blocking oil truck access at Malmö harbor and fined her approximately 2,500 SEK (~$240). In October 2023, a Swedish court convicted her again for a second harbor blockade and fined her approximately 4,500 SEK (~$414). In May 2024, Stockholm District Court convicted her on two counts of civil disobedience for blocking the entrance to the Swedish parliament on two occasions in March 2024, fining her 6,000 SEK (~£440) plus 1,000 SEK in damages. A separate October 2023 London arrest led to acquittal in February 2024 after a UK judge found the police conditions themselves were unlawful. In December 2025, she was arrested in London under the UK Terrorism Act for displaying a placard supporting Palestine Action; the outcome of that case was not available at the time of this research.',
  '[
    "July 24, 2023 — Malmö City Court: Convicted for blocking oil truck access at Malmö harbor; fined ~2,500 SEK (~$240)",
    "October 11, 2023 — Swedish court: Second conviction for disobeying police at Malmö harbor; fined ~4,500 SEK (~$414)",
    "May 8, 2024 — Stockholm District Court: Two counts of civil disobedience for blocking Swedish parliament entrance; fined 6,000 SEK plus 1,000 SEK damages",
    "October 17, 2023 — London arrest: Acquitted February 2024; UK judge found police conditions were unlawful",
    "December 2025 — London arrest under UK Terrorism Act for displaying placard supporting Palestine Action (designated terrorist organization); case outcome pending"
  ]'::jsonb,
  '[
    "THREE CRIMINAL CONVICTIONS",
    "MINOR OFFENSES (FINES ONLY)",
    "INTENTIONAL CIVIL DISOBEDIENCE",
    "TERRORISM ACT ARREST PENDING"
  ]'::jsonb,
  E'Greta Thunberg has three documented criminal convictions from Swedish courts — all for disobeying police orders at climate protests.\n\nJuly 24, 2023 — Malmö City Court convicted her for blocking oil truck access at Malmö harbor during a June 19, 2023 protest. Fine: ~2,500 SEK (~$240).\n\nOctober 11, 2023 — Swedish court convicted her for a second harbor blockade at Malmö. Fine: ~4,500 SEK (~$414).\n\nMay 8, 2024 — Stockholm District Court convicted her on two counts of civil disobedience for blocking the Swedish parliament entrance in March 2024. Fine: 6,000 SEK (~£440) plus 1,000 SEK in damages.\n\nOctober 17, 2023 — Arrested in London; acquitted February 2024 after UK judge found the police conditions were themselves "unlawful."\n\nDecember 2025 — Arrested in London under the UK Terrorism Act for displaying a placard supporting Palestine Action, a designated terrorist organization. Case outcome pending.\n\nSeverity caveat: All Swedish convictions are for minor criminal offenses (misdemeanor equivalent) carrying small fines — not imprisonment. Thunberg openly and intentionally committed civil disobedience as a form of political protest. The nature of these offenses is categorically different from financial corruption, fraud, or abuse of power. They are, however, unambiguous documented criminal convictions from official court records.\n\nCurrent Status: Full-time climate and political activist. No formal salary or employer.\nCurrent Residence: Stockholm, Sweden.',
  '[
    {"name": "CNN — Thunberg Fined in Sweden for Climate Protest", "url": "https://www.cnn.com/2023/07/24/europe/greta-thunberg-fine-sweden-climate-intl", "date": "2023-07-24"},
    {"name": "New York Times — Thunberg Fined for Climate Protest", "url": "https://www.nytimes.com/2023/07/24/world/europe/greta-thunberg-fined-climate-sweden.html", "date": "2023-07-24"},
    {"name": "Reuters — Swedish Court Fines Thunberg Again", "url": "https://www.reuters.com/world/europe/swedish-court-fines-greta-thunberg-again-disobeying-police-orders-2023-10-11/", "date": "2023-10-11"},
    {"name": "BBC — Thunberg Convicted of Two Counts Civil Disobedience", "url": "https://www.bbc.com/news/articles/c3geym0v6elo", "date": "2024-05-08"},
    {"name": "BBC — Thunberg Acquitted in London Protest Case", "url": "https://www.bbc.com/news/uk-england-london-68180317", "date": "2024-02-01"},
    {"name": "Deutsche Welle — UK Police Arrest Thunberg Under Terrorism Act", "url": "https://www.dw.com/en/uk-police-arrest-greta-thunberg-under-terrorism-act/a-75286097", "date": "2025-12-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;