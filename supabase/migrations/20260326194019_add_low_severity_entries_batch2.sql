/*
  # Add 10 LOW Severity Entries (Batch 2): Warren, Harris, Altman, Thunberg, Maddow
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'ELIZABETH WARREN',
  'U.S. Senator, Massachusetts',
  'Native American Heritage Misrepresentation / RNC Bar Grievance (No Findings)',
  'LOW',
  'No criminal charges, Senate Ethics Committee findings, or regulatory enforcement actions have been brought against Sen. Warren. She appears on this list due to documented misrepresentation of her racial identity on official documents and resulting complaints. Warren listed her race as "American Indian" on a 1986 State Bar of Texas registration card — confirmed by the Washington Post through a public records request in February 2019 — and was listed as a minority faculty member at the University of Pennsylvania and Harvard Law School. A Boston Globe investigation found "no evidence" that her ancestry claims were "ever a factor considered by the Harvard Law faculty, who overwhelmingly voted to hire her." In February 2019, RNC Chairwoman Ronna McDaniel filed a grievance with the State Bar of Texas''s chief disciplinary counsel seeking disciplinary action against Warren for the 1986 registration card. No disciplinary action was taken. Warren apologized to Cherokee Principal Chief Bill John Baker in January 2019 for "confusion" caused by her DNA test and heritage claims. A separate 2014 Senate Ethics complaint by the Center for Competitive Politics named Warren among nine senators accused of improperly pressuring the IRS — no formal findings resulted.',
  '[
    "Warren listed her race as American Indian on 1986 State Bar of Texas registration card, confirmed by Washington Post via public records request (February 5, 2019)",
    "Listed as minority faculty member at University of Pennsylvania and Harvard Law School",
    "Boston Globe investigation found no evidence her ancestry claims were a factor in any hiring decision",
    "RNC Chairwoman Ronna McDaniel filed grievance with State Bar of Texas chief disciplinary counsel (February 2019) seeking disciplinary action. No action was taken",
    "Warren apologized to Cherokee Principal Chief Bill John Baker (January 2019) for confusion caused by DNA test and heritage claims",
    "Center for Competitive Politics Senate Ethics complaint (June 2, 2014) named Warren among nine senators accused of improperly pressuring the IRS; no findings resulted"
  ]'::jsonb,
  '[
    "HERITAGE MISREPRESENTATION",
    "NO DISCIPLINARY ACTION",
    "COMPLAINT DISMISSED"
  ]'::jsonb,
  E'Sen. Elizabeth Warren (D-MA) appears on this list due to documented misrepresentation of her racial identity on official documents and resulting complaints.\n\nTEXAS BAR REGISTRATION:\nWarren listed her race as "American Indian" on a 1986 State Bar of Texas registration card.\nThis was confirmed by the Washington Post through a public records request on February 5, 2019.\n\nUNIVERSITY EMPLOYMENT:\nWarren was listed as a minority faculty member at:\n- University of Pennsylvania\n- Harvard Law School\n\nHIRING IMPACT:\nA Boston Globe investigation found "no evidence" that her ancestry claims were "ever a factor considered by the Harvard Law faculty, who overwhelmingly voted to hire her."\n\nRNC GRIEVANCE:\nRNC Chairwoman Ronna McDaniel filed a grievance with the State Bar of Texas''s chief disciplinary counsel in February 2019.\nThe grievance sought disciplinary action against Warren for the 1986 registration card claim.\nNo disciplinary action was taken by the bar.\n\nDNA TEST APOLOGY:\nWarren apologized to Cherokee Principal Chief Bill John Baker in January 2019 for "confusion" caused by her DNA test results and heritage claims.\n\nIRS PRESSURE COMPLAINT:\nCenter for Competitive Politics filed a Senate Ethics complaint on June 2, 2014.\nThe complaint named Warren among nine senators accused of improperly pressuring the IRS to investigate conservative nonprofit organizations.\nNo formal findings resulted from this complaint.\n\nOUTCOME:\nNo criminal charges were filed.\nNo Senate Ethics Committee findings were issued.\nNo state disciplinary action was taken against Warren''s bar license.\nNo regulatory enforcement actions resulted.',
  '[
    {"name": "NPR — Elizabeth Warren Apologizes Again For Native American Claim", "url": "https://www.npr.org/2019/02/06/692103008/elizabeth-warren-apologizes-for-latest-revelation-of-native-american-claims", "date": "2019-02-06"},
    {"name": "CNN — Washington Post: Warren Listed Race as American Indian on Texas Bar Card", "url": "https://www.cnn.com/2019/02/05/politics/warren-american-indian-texas-bar", "date": "2019-02-05"},
    {"name": "The Hill — RNC Requests Disciplinary Action Against Warren Over Native American Claims", "url": "https://thehill.com/homenews/campaign/428784-rnc-chairwoman-requests-disciplinary-action-against-warren-over-decades-old/", "date": "2019-02-06"},
    {"name": "Institute for Free Speech — Senate Ethics Complaint Filed by Center for Competitive Politics", "url": "https://www.ifs.org/expert-analysis/senate-ethics-complaint-filed-by-center-for-competitive-politics/", "date": "2014-06-02"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'KAMALA HARRIS',
  'Former Vice President / Former Senator / Former CA Attorney General',
  'Prosecutorial Misconduct Rulings (Office-Level) / Aide Harassment Settlement / Dismissed Ethics Complaints',
  'LOW',
  'No criminal charges, Senate Ethics Committee findings, or regulatory enforcement actions have been brought against Harris personally. She appears on this list due to documented judicial rebukes of her offices'' conduct, a $400,000 harassment settlement involving her senior aide, and dismissed complaints. As San Francisco DA, a judge found her office "violated defendants'' rights" by concealing evidence in a crime lab scandal (2010). As California AG, her office defended a prosecutor who fabricated a confession transcript; the California Court of Appeals rejected her office''s argument. Separately, Harris''s senior aide Larry Wallace resigned in December 2018 after the Sacramento Bee surfaced a 2016 sexual harassment lawsuit filed by his executive assistant, Danielle Hartley, which the California Department of Justice settled for $400,000 in May 2017. Harris stated she was unaware of the lawsuit or settlement. An FEC complaint by Citizens United (July 2024) regarding her campaign''s transition was dismissed without findings. America First Legal launched seven separate inquiries into Harris''s California record in June 2025; none have produced formal findings. The California FPPC cleared Harris in November 2015 after investigating a gift-related complaint, finding "no violation of the Political Reform Act."',
  '[
    "San Francisco Superior Court found Harris''s DA office violated defendants'' rights by concealing Brady material in crime lab scandal (2010) — finding directed at office, not Harris personally",
    "California Court of Appeals rejected Harris''s AG office''s argument that fabricated confession transcript wasn''t outrageous enough to warrant case dismissal (Velasco-Palacios case, 2013–2015)",
    "Harris''s senior aide Larry Wallace resigned December 2018 after $400,000 sexual harassment settlement surfaced; California DOJ settled lawsuit filed by Hartley in May 2017. Harris stated she was unaware",
    "Citizens United filed FEC complaint (July 2024) regarding Harris''s campaign transition; dismissed without findings",
    "America First Legal launched seven inquiries into Harris''s California record (June 2025); no formal findings produced",
    "California FPPC investigated anonymous gift complaint and cleared Harris in November 2015, finding no violation of the Political Reform Act"
  ]'::jsonb,
  '[
    "OFFICE-LEVEL MISCONDUCT",
    "AIDE SETTLEMENT",
    "NO PERSONAL CHARGES"
  ]'::jsonb,
  E'Vice President Kamala Harris appears on this list due to documented judicial rebukes of her offices'' conduct, a harassment settlement involving her senior aide, and dismissed complaints. No criminal charges or personal regulatory actions have been brought against Harris.\n\nSAN FRANCISCO DA OFFICE:\nWhile Harris served as San Francisco District Attorney, a judge found her office "violated defendants'' rights" by concealing Brady material (exculpatory evidence) in a crime lab scandal (2010).\nThis finding was directed at the office''s conduct, not Harris personally.\n\nCALIFORNIA AG OFFICE:\nWhile Harris served as California Attorney General, her office defended a prosecutor who fabricated a confession transcript.\nThe California Court of Appeals rejected her office''s argument that the fabrication wasn''t "outrageous" enough to warrant case dismissal.\n(Velasco-Palacios case, 2013–2015)\n\nSENIOR AIDE HARASSMENT SETTLEMENT:\nHarris''s senior aide Larry Wallace resigned in December 2018 after the Sacramento Bee surfaced a 2016 sexual harassment lawsuit.\nThe lawsuit was filed by Danielle Hartley, Wallace''s executive assistant.\nThe California Department of Justice settled the lawsuit for $400,000 in May 2017.\nHarris stated she was unaware of the lawsuit and the settlement.\n\nDISMISSED FEC COMPLAINT:\nCitizens United filed an FEC complaint in July 2024 regarding Harris''s campaign''s transition.\nThe complaint was dismissed without findings.\n\nAMERICA FIRST LEGAL INQUIRIES:\nAmerica First Legal launched seven separate inquiries into Harris''s California record in June 2025.\nNone of these inquiries have produced formal findings or enforcement actions.\n\nCALIFORNIA FPPC CLEARANCE:\nThe California Fair Political Practices Commission investigated an anonymous gift-related complaint.\nHarris was cleared in November 2015.\nThe FPPC found "no violation of the Political Reform Act."\n\nOUTCOME:\nNo criminal charges against Harris.\nNo Senate Ethics Committee findings.\nNo regulatory enforcement actions against Harris personally.\nAll complaints dismissed or cleared without findings.',
  '[
    {"name": "The Atlantic — Kamala Harris''s Cop Record", "url": "https://www.theatlantic.com/ideas/archive/2019/08/kamala-cop-record/596758/", "date": "2019-08-01"},
    {"name": "CalMatters — Kamala Harris Prosecutor Record", "url": "https://calmatters.org/politics/elections/2024/08/kamala-harris-prosecutor-california-san-francisco/", "date": "2024-08-15"},
    {"name": "ABC7 News — I-Team Exclusive: Why Sen. Kamala Harris'' Senior Aide Resigned", "url": "https://abc7news.com/post/i-team-exclusive-why-sen-kamala-harris-senior-aide-resigned/4854428/", "date": "2018-12-06"},
    {"name": "USA Today — Kamala Harris Aide Resigns Over $400,000 Harassment Settlement", "url": "https://www.usatoday.com/story/news/politics/2018/12/06/kamala-harris-aide-resigns-sexual-harassment-settlement/2223882002/", "date": "2018-12-06"},
    {"name": "Los Angeles Times — Kamala Harris Cleared in State Ethics Inquiry", "url": "https://www.latimes.com/local/political/la-me-pc-kamala-harris-cleared-in-state-ethics-inquiry-20151120-story.html", "date": "2015-11-20"},
    {"name": "America First Legal — AFL Launches 7 Investigations into Kamala Harris Record", "url": "https://aflegal.org/press-release/america-first-legal-launches-7-investigations-into-kamala-harris-record-as-california-attorney-general/", "date": "2025-06-30"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'SAM ALTMAN',
  'CEO, OpenAI',
  'SEC Investigation (No Charges) / Sister''s Abuse Lawsuit (Dismissed, Refiling Possible) / Defamation Countersuit',
  'LOW',
  'No criminal charges, SEC enforcement actions, or official misconduct findings have been brought against Sam Altman. He appears on this list due to an ongoing SEC investigation, a dismissed civil lawsuit alleging childhood sexual abuse, and his own defamation countersuit. The SEC opened an investigation into OpenAI in late 2023/early 2024 following Altman''s brief ouster by the board, examining whether investors were misled. No charges, civil complaint, or enforcement action against Altman personally has been publicly announced. After his reinstatement, OpenAI commissioned WilmerHale to investigate; their review of 30,000+ documents cleared Altman of wrongdoing and he was reinstated to the board in March 2024. In January 2025, Altman''s sister Ann (Annie) filed a federal lawsuit in Missouri alleging childhood sexual abuse spanning 1997–2006. On March 20, 2026, U.S. District Judge Zachary Bluestone dismissed the lawsuit as "untimely" but granted leave to refile under Missouri''s Childhood Sexual Abuse statute by April 3, 2026. In the same ruling, the judge greenlit Altman''s defamation countersuit against his sister. Altman and his family have denied all abuse allegations.',
  '[
    "SEC investigation opened late 2023/early 2024 into whether OpenAI investors were misled following Altman''s brief ouster. No charges or findings issued as of March 2026",
    "Manhattan U.S. Attorney''s Office reportedly conducting parallel criminal investigation into same matter",
    "WilmerHale independent investigation (2024) reviewed 30,000+ documents and cleared Altman of wrongdoing; he was reinstated to OpenAI board in March 2024",
    "Ann Altman filed federal lawsuit (January 2025, W.D. Missouri) alleging childhood sexual abuse from 1997–2006 beginning at age 3",
    "U.S. District Judge Zachary Bluestone dismissed lawsuit as untimely on March 20, 2026; granted leave to refile under Missouri''s Childhood Sexual Abuse statute",
    "Judge greenlit Altman''s defamation countersuit against his sister in same March 20, 2026 ruling",
    "Altman, his mother, and brothers issued joint statement calling abuse claims utterly untrue"
  ]'::jsonb,
  '[
    "SEC INVESTIGATION ONGOING",
    "ABUSE LAWSUIT DISMISSED",
    "NO CHARGES FILED"
  ]'::jsonb,
  E'Sam Altman, CEO of OpenAI, appears on this list due to an ongoing SEC investigation, a dismissed abuse lawsuit, and his defamation countersuit against his sister.\n\nSEC INVESTIGATION:\nThe SEC opened an investigation into OpenAI in late 2023/early 2024 following Altman''s brief ouster by the board.\nThe investigation examined whether investors were misled during this period.\nNo charges or enforcement findings against Altman personally have been publicly announced as of March 2026.\n\nPARALLEL CRIMINAL INVESTIGATION:\nThe Manhattan U.S. Attorney''s Office reportedly conducted a parallel criminal investigation into the same matter.\nNo charges have been filed.\n\nWILMERHALE INVESTIGATION:\nOpenAI commissioned WilmerHale to conduct an independent investigation.\nThe review examined 30,000+ documents.\nWilmerHale cleared Altman of wrongdoing.\nAltman was reinstated to the OpenAI board in March 2024.\n\nABUSE LAWSUIT:\nIn January 2025, Altman''s sister Ann (Annie) filed a federal lawsuit in the U.S. District Court for the Western District of Missouri.\nThe lawsuit alleged childhood sexual abuse spanning 1997–2006, beginning when she was age 3.\n\nCOURT DISMISSAL:\nOn March 20, 2026, U.S. District Judge Zachary Bluestone issued a ruling:\n- Dismissed the abuse lawsuit as "untimely" under current Missouri law\n- Granted leave to refile under Missouri''s Childhood Sexual Abuse statute by April 3, 2026\n\nDEFAMATION COUNTERSUIT:\nIn the same March 20, 2026 ruling, Judge Bluestone:\n- Greenlit Sam Altman''s defamation countersuit against his sister Ann\n\nDENIALS:\nSam Altman, his mother, and his brothers issued a joint statement calling the abuse allegations "utterly untrue."',
  '[
    {"name": "Reuters — Judge for Now Dismisses Lawsuit by Sam Altman''s Sister Accusing OpenAI CEO of Sexual Abuse", "url": "https://www.reuters.com/legal/government/judge-now-dismisses-lawsuit-by-sam-altmans-sister-accusing-openai-ceo-sexual-2026-03-20/", "date": "2026-03-20"},
    {"name": "Business Insider — Sam Altman''s Countersuit Against His Sister Gets Green Light", "url": "https://www.businessinsider.com/sam-altman-sexual-abuse-lawsuit-sister-annie-defamation-countersuit-2026-3", "date": "2026-03-20"},
    {"name": "Ifrah Law — OpenAI''s Legal Troubles Mount as New York Times Lawsuit Escalates", "url": "https://www.ifrahlaw.com/ftc-beat/openais-legal-troubles-mount-as-new-york-times-lawsuit-escalates-alongside-sec-investigation/", "date": "2024-03-04"},
    {"name": "VentureBeat — Sam Altman Reinstated to OpenAI Board After Investigation Clears Him", "url": "https://venturebeat.com/ai/sam-altman-reinstated-to-openai-board-after-investigation-clears-him-of-wrongdoing/", "date": "2024-03-01"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'GRETA THUNBERG',
  'Climate Activist / Author',
  'Three Criminal Convictions (Protest-Related Misdemeanors) / UK Terrorism Act Arrest',
  'LOW',
  'Greta Thunberg has three documented criminal convictions from Swedish courts for disobeying police orders at climate protests — all minor offenses carrying small fines with no imprisonment. On July 24, 2023, Malmö City Court convicted her of disobeying police orders after blocking oil truck access at Malmö harbor, fining her approximately 2,500 SEK (~$240). On October 11, 2023, a Swedish court convicted her again for the same offense at a second Malmö harbor protest, fining her approximately 4,500 SEK (~$414). On May 8, 2024, Stockholm District Court convicted her of two counts of civil disobedience for blocking the entrance to Swedish parliament on two occasions in March 2024, fining her 6,000 SEK (~$440) plus 1,000 SEK in damages. Separately, she was arrested in London in October 2023 outside the Energy Intelligence Forum but acquitted in February 2024 after a UK judge ruled the police conditions were "unlawful." In December 2025, she was arrested in London under the UK Terrorism Act for displaying a placard supporting Palestine Action; the outcome of that case is pending. All Swedish convictions are for minor criminal offenses equivalent to misdemeanors. Thunberg has openly committed civil disobedience as a form of political protest and does not deny the underlying facts.',
  '[
    "Convicted July 24, 2023, Malmö City Court: disobeying police orders at Malmö harbor. Fined ~2,500 SEK (~$240)",
    "Convicted October 11, 2023, Swedish court: disobeying police orders at second Malmö harbor protest. Fined ~4,500 SEK (~$414)",
    "Convicted May 8, 2024, Stockholm District Court: two counts of civil disobedience for blocking Swedish parliament. Fined 6,000 SEK + 1,000 SEK damages",
    "Acquitted February 2024 in London: UK judge ruled police conditions were unlawful and arrest itself improper",
    "Arrested December 2025 in London under UK Terrorism Act for displaying placard supporting Palestine Action. Outcome pending"
  ]'::jsonb,
  '[
    "MINOR CRIMINAL CONVICTIONS",
    "CIVIL DISOBEDIENCE",
    "PROTEST-RELATED ARRESTS"
  ]'::jsonb,
  E'Greta Thunberg, a climate activist and author, appears on this list due to three documented criminal convictions for protest-related civil disobedience and recent arrest under the UK Terrorism Act.\n\nFIRST CONVICTION — July 24, 2023:\nMalmö City Court (Sweden)\nOffense: Disobeying police orders at Malmö harbor\nCircumstances: Blocking oil truck access to the harbor\nPenalty: Fine of approximately 2,500 SEK (~$240)\nNo imprisonment.\n\nSECOND CONVICTION — October 11, 2023:\nSwedish court\nOffense: Disobeying police orders at a second Malmö harbor protest\nPenalty: Fine of approximately 4,500 SEK (~$414)\nNo imprisonment.\n\nTHIRD CONVICTION — May 8, 2024:\nStockholm District Court (Sweden)\nOffenses: Two counts of civil disobedience\nCircumstances: Blocking the entrance to Swedish parliament on two separate occasions in March 2024\nPenalty: Fine of 6,000 SEK (~$440) plus 1,000 SEK in damages\nNo imprisonment.\n\nLONDON ARREST (ACQUITTED):\nOctober 2023: Arrested outside the Energy Intelligence Forum in London\nFebruary 2024: Acquitted\nReason for acquittal: UK judge ruled the police conditions imposed on her were "unlawful" and the arrest itself was improper.\n\nLONDON ARREST (PENDING):\nDecember 2025: Arrested in London under the UK Terrorism Act\nCircumstances: Displaying a placard supporting Palestine Action\nOutcome: Pending as of March 2026.\n\nNATURE OF OFFENSES:\nAll Swedish convictions are for minor criminal offenses equivalent to misdemeanors in the U.S. system.\nNo felony convictions.\nAll fines were small ($240–$414).\nNo imprisonment ordered.\n\nTHUNBERG''S POSITION:\nThunberg has openly committed civil disobedience as a form of political protest.\nShe does not deny the underlying facts of her arrests and convictions.\nShe views these actions as justified forms of protest against climate inaction.',
  '[
    {"name": "CNN — Greta Thunberg Fined by Swedish Court", "url": "https://www.cnn.com/2023/07/24/europe/greta-thunberg-fine-sweden-climate-intl", "date": "2023-07-24"},
    {"name": "Reuters — Swedish Court Fines Greta Thunberg Again for Disobeying Police Orders", "url": "https://www.reuters.com/world/europe/swedish-court-fines-greta-thunberg-again-disobeying-police-orders-2023-10-11/", "date": "2023-10-11"},
    {"name": "BBC — Greta Thunberg Convicted of Civil Disobedience", "url": "https://www.bbc.com/news/articles/c3geym0v6elo", "date": "2024-05-08"},
    {"name": "BBC — Greta Thunberg Acquitted in London", "url": "https://www.bbc.com/news/uk-england-london-68180317", "date": "2024-02-14"},
    {"name": "DW — UK Police Arrest Greta Thunberg Under Terrorism Act", "url": "https://www.dw.com/en/uk-police-arrest-greta-thunberg-under-terrorism-act/a-75286097", "date": "2025-12-15"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'RACHEL MADDOW',
  'MSNBC Host',
  'Federal Judge Found "Verifiably False" Statements / Civil Defamation Case Settled',
  'LOW',
  'Rachel Maddow has not been criminally charged or personally named as a defendant in any lawsuit. She appears on this list due to a federal judge''s documented findings that her MSNBC show broadcast "verifiably false" statements in a civil defamation case brought against her employer. In Amin v. NBCUniversal (S.D. Ga., Case No. 5:2021cv00056), Dr. Mahendra Amin, a Georgia gynecologist, filed a $30 million defamation lawsuit against NBCUniversal for coverage on The Rachel Maddow Show and other MSNBC programs that called him a "uterus collector" performing "mass hysterectomies" on ICE detainees. U.S. District Judge Lisa Godbey Wood issued a 108-page ruling (June 26, 2024) finding multiple statements were "verifiably false," that "there were no mass hysterectomies," Dr. Amin had performed only two hysterectomies (both medically necessary per ICE records), and that NBC "investigated the whistleblower letter''s accusations; that investigation did not corroborate the accusations and even undermined some; NBC republished the letter''s accusations anyway." The judge ruled a jury could reasonably find "actual malice." Ten "verifiably false" statements were identified specifically on The Rachel Maddow Show. NBCUniversal settled in February 2025 before the April 2025 trial date. A separate OAN defamation suit against Maddow was dismissed by the 9th Circuit (2021), and a Nunes defamation suit was dismissed in August 2025.',
  '[
    "U.S. District Judge Lisa Godbey Wood issued 108-page ruling (June 26, 2024) finding multiple MSNBC statements were verifiably false",
    "Court found there were no mass hysterectomies or high numbers of hysterectomies at facility and Dr. Amin performed only two hysterectomies on detainees",
    "Court found NBC investigated the whistleblower letter''s accusations; that investigation did not corroborate the accusations and even undermined some; NBC republished the letter''s accusations anyway",
    "Court ruled a jury could reasonably find actual malice — knowledge of falsity or reckless disregard for truth",
    "10 verifiably false statements were identified specifically on The Rachel Maddow Show",
    "NBCUniversal settled in February 2025 before April 2025 trial date; terms undisclosed",
    "OAN defamation suit dismissed by 9th Circuit (2021); Nunes suit dismissed August 2025"
  ]'::jsonb,
  '[
    "DEFAMATION CASE SETTLED",
    "VERIFIABLY FALSE STATEMENTS",
    "EMPLOYER LIABILITY"
  ]'::jsonb,
  E'Rachel Maddow, MSNBC host, appears on this list due to a federal judge''s documented findings of "verifiably false" statements made on her show in a settled defamation case.\n\nDEFAMATION LAWSUIT:\nCase: Amin v. NBCUniversal\nCourt: U.S. District Court, Southern District of Georgia\nCase No.: 5:2021cv00056\nPlaintiff: Dr. Mahendra Amin, a Georgia gynecologist\nDefendant: NBCUniversal\nClaim Amount: $30 million\n\nALLEGED STATEMENTS:\nThe Rachel Maddow Show and other MSNBC programs:\n- Called Dr. Amin a "uterus collector"\n- Alleged he performed "mass hysterectomies" on ICE detainees\n\nFEDERAL JUDGE RULING:\nIssued by: U.S. District Judge Lisa Godbey Wood\nDate: June 26, 2024\nLength: 108-page ruling\n\nKEY FINDINGS:\n1. Multiple statements were "verifiably false"\n2. "There were no mass hysterectomies" at the facility\n3. Dr. Amin performed only two hysterectomies on ICE detainees (both medically necessary per ICE records)\n4. NBC "investigated the whistleblower letter''s accusations; that investigation did not corroborate the accusations and even undermined some; NBC republished the letter''s accusations anyway"\n5. A jury could reasonably find "actual malice" (knowledge of falsity or reckless disregard for truth)\n\nRACHEL MADDOW SHOW STATEMENTS:\nSpecifically, 10 "verifiably false" statements were identified as having been broadcast on The Rachel Maddow Show.\n\nSETTLEMENT:\nNBCUniversal settled the lawsuit in February 2025 before the scheduled April 2025 trial date.\nSettlement terms were not disclosed.\n\nOTHER DEFAMATION SUITS:\nOAN defamation lawsuit against Maddow: Dismissed by the 9th Circuit Court of Appeals (August 2021) — the court found Maddow''s statement was protected opinion.\nDevin Nunes defamation lawsuit against Maddow: Dismissed in August 2025.\n\nSTATUS:\nRachel Maddow has not been criminally charged.\nShe has not been personally named as a defendant in any lawsuit.\nThe defamation suit was brought against her employer, NBCUniversal.',
  '[
    {"name": "Justia — Amin v. NBCUniversal, S.D. Ga., Case No. 5:2021cv00056, Ruling of June 26, 2024", "url": "https://law.justia.com/cases/federal/district-courts/georgia/gasdce/5:2021cv00056/85242/209/", "date": "2024-06-26"},
    {"name": "NPR — NBC Settles Lawsuit by ICE Doctor Over MSNBC Coverage", "url": "https://www.npr.org/2025/02/21/nx-s1-5305268/nbc-settles-lawsuit-ice-doctor-msnbc-maddow-georgia-detainee", "date": "2025-02-21"},
    {"name": "9th Circuit Court of Appeals — Herring Networks v. Maddow, Opinion", "url": "https://cdn.ca9.uscourts.gov/datastore/opinions/2021/08/17/20-55579.pdf", "date": "2021-08-17"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;