/*
  # Add DOD/Military Entries: Petraeus, Ward

  1. New Entries
    - `General David Petraeus` — CIA Director; shared Top Secret/SCI classified info with mistress; misdemeanor plea; $100K fine. Severity: HIGH.
    - `General William "Kip" Ward` — AFRICOM Commander; lavish travel abuse; demoted 4-star to 3-star; $82K repayment. Severity: HIGH.

  2. Notes
    - Petraeus was CIA Director at time of investigation
    - Petraeus was penalized lightly compared to severity of offense
    - Ward represents administrative misconduct at highest military levels
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'GENERAL DAVID PETRAEUS',
  'Former CIA Director, CENTCOM Commander',
  'Shared Top Secret/SCI Classified Information with Mistress; Lied to FBI; Misdemeanor Guilty Plea, $100,000 Fine',
  'HIGH',
  'David Petraeus served as Director of the Central Intelligence Agency and before that as Commander of U.S. forces in Afghanistan. While commanding forces in Afghanistan, he maintained eight black notebooks (known as the "Black Books") containing his handwritten daily schedules, notes from classified briefings, and national security information at the classification level of Top Secret/SCI with code-word access. The notebooks contained the identities of covert officers, war strategy, intelligence capabilities, diplomatic discussions, and verbatim quotes from National Security Council meetings and his conversations with the President of the United States. Petraeus shared these Black Books with Paula Broadwell, his biographer and mistress, who was not authorized to access any of the classified information. He also initially lied to FBI agents when questioned. He pleaded guilty April 2015 to one misdemeanor count of unauthorized removal and retention of classified material. The sentencing judge doubled the DOJ''s recommended $40,000 fine, noting the "seriousness of the offense," and imposed 2 years'' probation and a $100,000 fine.',
  '[
    "Maintained eight \"Black Books\" at Top Secret/SCI classification containing covert officer identities, war strategy, NSC meeting verbatim quotes, and discussions with the President",
    "Shared all eight Black Books with his mistress Paula Broadwell, who had no authorization to access the information",
    "August 4, 2011 recorded conversation in which Petraeus told Broadwell the notebooks were \"highly classified\" and contained \"code word\" information",
    "Lied to FBI agents when initially questioned",
    "Pleaded guilty to one misdemeanor count of unauthorized removal and retention of classified material (18 U.S.C. § 1924), Case No. 3:15-cr-00047 (W.D.N.C.)",
    "Sentenced April 23, 2015: 2 years'' probation; $100,000 fine (judge doubled the DOJ''s recommended $40,000 amount); agreed to surrender security clearance"
  ]'::jsonb,
  '[
    "TOP SECRET/SCI CLASSIFIED LEAK",
    "SHARED WITH MISTRESS",
    "MISDEMEANOR PLEA",
    "$100K FINE"
  ]'::jsonb,
  E'David Petraeus served as Director of the Central Intelligence Agency and as Commander of U.S. forces in Afghanistan.\n\nCLASSIFIED INFORMATION MISHANDLING:\nWhile commanding forces in Afghanistan, Petraeus maintained eight black notebooks (known as the "Black Books"). These notebooks contained:\n- Handwritten daily schedules\n- Notes from classified briefings\n- National security information at Top Secret/SCI (Sensitive Compartmented Information) classification with code-word access\n- Identities of covert officers\n- War strategy\n- Intelligence capabilities\n- Diplomatic discussions\n- Verbatim quotes from National Security Council meetings\n- Conversations with the President of the United States\n\nUNAUTHORIZED DISCLOSURE:\nPetraeus shared all eight Black Books with Paula Broadwell, his biographer and mistress, who was not authorized to access any of the classified information.\n\nIn an August 4, 2011 recorded conversation, Petraeus told Broadwell the notebooks were "highly classified" and contained "code word" information.\n\nLYING TO FEDERAL INVESTIGATORS:\nPetraeus initially lied to FBI agents when questioned about the classified materials.\n\nCRIMINAL CHARGES AND PLEA:\nPleaded guilty April 2015 to one misdemeanor count of unauthorized removal and retention of classified material (18 U.S.C. § 1924), Case No. 3:15-cr-00047 (W.D.N.C.).\n\nSENTENCING:\nSentenced April 23, 2015:\n- 2 years'' probation\n- $100,000 fine (the sentencing judge doubled the DOJ''s recommended $40,000 fine, noting the "seriousness of the offense" and that the DOJ recommendation "lacked a scientific basis")\n- Agreed to surrender security clearance\n\nCurrent Profession: Partner and Chairman, KKR Global Institute (private equity); appointed Chairman of KKR Middle East, April 2025. Kissinger Fellow at Yale University''s Jackson School of Global Affairs. Board member/advisor to multiple companies including Optiv, OneStream, Sempra, and Advanced Navigation. Co-authored *Conflict: The Evolution of Warfare from 1945 to Ukraine* (2023, with Andrew Roberts, NYT bestseller). Pleaded guilty 2015 to mishandling classified information; sentenced to probation and $100,000 fine.\nApproximate Net Worth: ~$5 million (Celebrity Net Worth estimate, 2025).\nCurrent Residence: New York City, NY (primary); Springfield, NH (inherited property).',
  '[
    {"name": "DOJ — Factual Basis for Guilty Plea", "url": "https://www.justice.gov/sites/default/files/opa/press-releases/attachments/2015/03/03/petraeus-factual-basis.pdf", "date": "2015-03-03"},
    {"name": "New York Times — David Petraeus to Be Sentenced in Leak Investigation", "url": "https://www.nytimes.com/2015/04/24/us/david-petraeus-to-be-sentenced-in-leak-investigation.html", "date": "2015-04-24"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'GENERAL WILLIAM "KIP" WARD',
  'Former Commander, U.S. Africa Command',
  'Pentagon IG Found Military Resources for Personal Luxury; Demoted from Four-Star to Three-Star; $82,000 Repayment Ordered',
  'HIGH',
  'General William "Kip" Ward served as Commander of U.S. Africa Command from 2007 to 2011 with four-star rank. Following a 17-month Pentagon Inspector General investigation, Defense Secretary Leon Panetta demoted Ward from four-star to three-star rank on November 13, 2012, and ordered him to repay $82,000 to the government. The IG found Ward engaged in multiple forms of financial misconduct: using military vehicles to transport his wife on shopping trips and to a spa; billing the government for a Bermuda refueling stop where the couple stayed in a $750/night suite (records showed it was planned four days in advance, contradicting his claim of short notice); a $129,000 trip to Washington where substantive engagements ended after the first three days; accepting dinner and Broadway show tickets from a government contractor; staying in expensive hotel suites such as the Waldorf Astoria rather than standard rooms; and bringing his wife on 52 of his 79 official trips. The demotion cost Ward approximately $30,000 per year in retirement pay.',
  '[
    "Used military vehicles to transport his wife on personal shopping trips and spa visits",
    "Billed the government for a $750/night Bermuda hotel suite during a \"refueling stop\" — records showed it was planned 4 days in advance",
    "A $129,000 Washington trip where official engagements concluded after the first 3 days, generating \"exponential\" unnecessary costs",
    "Accepted dinner and Broadway show tickets from a government contractor",
    "Wife accompanied him on 52 of 79 official trips with no official capacity",
    "Pentagon IG 17-month investigation concluded 2012; Defense Secretary Panetta demoted him from 4-star to 3-star General on November 13, 2012",
    "Ordered to repay $82,000 to the government",
    "Demotion cost Ward approximately $30,000 per year in retirement pay"
  ]'::jsonb,
  '[
    "FOUR-STAR GENERAL DEMOTED",
    "MILITARY MISCONDUCT",
    "LAVISH TRAVEL ABUSE",
    "$82K REPAYMENT ORDERED"
  ]'::jsonb,
  E'General William "Kip" Ward served as Commander of U.S. Africa Command from 2007 to 2011 with four-star rank.\n\nMISCONDUCT FINDINGS:\nFollowing a 17-month Pentagon Inspector General investigation, Defense Secretary Leon Panetta found Ward engaged in multiple forms of financial misconduct:\n\n▸ PERSONAL VEHICLE USE:\nUsed military vehicles to transport his wife on personal shopping trips and to a spa.\n\n▸ BERMUDA REFUELING STOP:\nBilled the government for a Bermuda "refueling stop" where the couple stayed in a $750/night suite. Records showed the stop was planned 4 days in advance, contradicting his claim that it was a short notice refueling requirement.\n\n▸ EXCESSIVE WASHINGTON TRIP:\nA $129,000 Washington trip where substantive official engagements ended after the first 3 days, generating "exponential" unnecessary costs.\n\n▸ CONTRACTOR GIFTS:\nAccepted dinner and Broadway show tickets from a government contractor.\n\n▸ LUXURY HOTEL STAYS:\nStayed in expensive hotel suites such as the Waldorf Astoria rather than standard government-approved rooms.\n\n▸ SPOUSE ON OFFICIAL TRIPS:\nBrought his wife on 52 of his 79 official trips with no official capacity.\n\nADMINISTRATIVE ACTION:\nDefense Secretary Leon Panetta announced his findings on November 13, 2012, and:\n- Demoted Ward from four-star to three-star General (effectively reducing his rank and responsibilities)\n- Ordered him to repay $82,000 to the government\n- This demotion cost Ward approximately $30,000 per year in retirement pay\n\nCurrent Profession: Retired from active military service following demotion.\nApproximate Net Worth: Not publicly documented (reduced by demotion and $82K repayment requirement).\nCurrent Residence: Not publicly disclosed.',
  '[
    {"name": "Politico — General William Ward Demoted for Lavish Travel, Spending", "url": "https://www.politico.com/story/2012/11/general-william-ward-demoted-for-lavish-travel-spending-083770", "date": "2012-11-13"},
    {"name": "Military.com — Panetta: DOD Not Afraid to Punish Senior Officers", "url": "https://www.military.com/daily-news/2012/11/14/panetta-dod-not-afraid-to-punish-senior-officers.html", "date": "2012-11-14"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;