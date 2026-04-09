/*
  # Add Judicial Branch Entries: Porteous, Kent, Hastings, Thomas, Alito, Nixon

  1. New Entries
    - `Judge G. Thomas Porteous Jr.` — Impeached, convicted 96-0, permanently disqualified; bribery, perjury. Severity: CRITICAL. DECEASED.
    - `Judge Samuel B. Kent` — Sexual assault of court employees, impeached, 33 months prison. Severity: CRITICAL.
    - `Judge Alcee L. Hastings` — Impeached for bribery; then served 29 years in Congress after removal. Severity: CRITICAL. DECEASED.
    - `Justice Clarence Thomas` — $4.2M undisclosed gifts from billionaire donor; no criminal charges. Severity: CRITICAL.
    - `Justice Samuel Alito` — $100K+ undisclosed private jet; voted favorably for same billionaire litigant. Severity: HIGH.
    - `Judge Walter L. Nixon Jr.` — Convicted of perjury; impeached and removed. Severity: HIGH.

  2. Notes
    - Porteous and Hastings both removed by impeachment; Hastings later elected to Congress
    - Thomas and Alito represent recent Supreme Court ethics concerns
    - Nixon v. United States established political question doctrine for impeachment
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUDGE G. THOMAS PORTEOUS JR.',
  'U.S. District Judge, Eastern District of Louisiana',
  'Impeached and Convicted by Senate 96-0; Permanently Disqualified from Federal Office; Bribery and Perjury; DECEASED',
  'CRITICAL',
  'G. Thomas Porteous Jr. served as a Judge on the U.S. District Court for the Eastern District of Louisiana, appointed in 1994. He was impeached by the House in March 2010 by unanimous vote and convicted by the Senate on December 8, 2010 on four articles of impeachment. The Senate vote was 96-0 on the first article, with large majorities on the remaining three. He was removed from office and permanently disqualified from holding any future federal office (94-2 vote) — making him only the 8th federal judge ever removed by impeachment in U.S. history. Article I found he engaged in a longstanding pattern of accepting cash and things of value from a law firm involved in cases on his docket while a Louisiana state court judge. Article II found he accepted cash, meals, and benefits from bail bonding companies in exchange for favorable treatment in bail reduction proceedings. Article III found he knowingly made false statements in his personal bankruptcy filing. Article IV found he made false material statements to the Senate Judiciary Committee and the FBI during his 1994 confirmation process. DECEASED — November 14, 2021.',
  '[
    "Accepted cash and things of value from a law firm involved in cases on his docket; failed to disclose; improperly denied motions to recuse",
    "Accepted cash, meals, and benefits from bail bonding companies in exchange for favorable bail reduction rulings",
    "Filed personal bankruptcy under a pseudonym using false statements to avoid creditors",
    "Made false material statements to both the Senate Judiciary Committee and the FBI during 1994 federal confirmation process",
    "Impeached by House (unanimous), March 2010; convicted by Senate 96-0 on Article I, December 8, 2010",
    "Removed from office; permanently disqualified from holding future federal office (94-2 vote)",
    "Only the 8th federal judge ever removed by impeachment in U.S. history",
    "Surrendered law license January 2011; DECEASED November 14, 2021"
  ]'::jsonb,
  '[
    "FEDERAL JUDGE",
    "IMPEACHED UNANIMOUSLY",
    "CONVICTED 96-0",
    "PERMANENTLY DISQUALIFIED"
  ]'::jsonb,
  E'G. Thomas Porteous Jr. served as a Judge on the U.S. District Court for the Eastern District of Louisiana. He was appointed to the federal bench in 1994.\n\nIMPEACHMENT AND CONVICTION:\nHouse of Representatives: Impeached unanimously in March 2010.\nSenate: Convicted on December 8, 2010 on four articles of impeachment.\n\nSenate vote breakdown:\n- Article I (bribery): 96-0 GUILTY\n- Articles II-IV: Large majorities\n\nREMOVAL AND DISQUALIFICATION:\n- Removed from office\n- Permanently disqualified from holding any future federal office (94-2 vote)\n- Only the 8th federal judge ever removed by impeachment in U.S. history\n\nARTICLE I: BRIBERY\nAccepted cash and things of value from a law firm involved in cases on his docket.\nFailed to disclose this relationship.\nImproperly denied motions to recuse himself.\n\nARTICLE II: BAIL BONDING COMPANY BENEFITS\nAccepted cash, meals, and other benefits from bail bonding companies.\nIn exchange, provided favorable treatment in bail reduction proceedings.\n\nARTICLE III: PERJURY IN BANKRUPTCY\nKnowingly made false statements in his personal bankruptcy filing.\nUsed a pseudonym ("G. T. Porteous") to avoid creditors.\n\nARTICLE IV: FALSE STATEMENTS TO CONFIRMATION BODY\nMade false material statements to:\n- The U.S. Senate Judiciary Committee\n- The FBI\nBoth statements were made during his 1994 federal judgeship confirmation process.\n\nADMINISTRATIVE CONSEQUENCES:\nSurrendered his law license in January 2011.\n\nCurrent Profession: DECEASED — November 14, 2021; Metairie, LA area; age 74.\nApproximate Net Worth: N/A\nCurrent Residence: Deceased.',
  '[
    {"name": "U.S. Senate — Senate Roll Call Vote, Article I Conviction, December 8, 2010", "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1112/vote_111_2_00263.htm", "date": "2010-12-08"},
    {"name": "Library of Congress — Federal Impeachment: Thomas Porteous", "url": "https://guides.loc.gov/federal-impeachment/thomas-porteous", "date": "2010-12-08"},
    {"name": "New York Times — Senate Convicts Judge Thomas Porteous", "url": "https://www.nytimes.com/2010/12/09/us/politics/09judge.html", "date": "2010-12-09"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JUDGE SAMUEL B. KENT',
  'U.S. District Judge, Southern District of Texas',
  'Federal Judge Convicted of Obstruction; Impeached for Sexual Assault of Court Employees; 33 Months in Prison',
  'CRITICAL',
  'Samuel Kent served as a Judge on the U.S. District Court for the Southern District of Texas, Galveston Division, appointed in 1990. Between 2003 and 2007, he engaged in repeated non-consensual sexual contact with two female court employees who worked under his supervision — a court case manager and a secretary. When a judicial conduct investigation was opened, he lied to investigators, claiming the contact was consensual. He pleaded guilty in February 2009 to obstruction of justice and acknowledged in open court that he had engaged in non-consensual sexual contact with both employees. He was sentenced May 11, 2009 to 33 months in federal prison. Rather than resign after his conviction, Kent filed for disability retirement — a maneuver that would have paid him $169,300 annually for life even while imprisoned. The House of Representatives voted June 19, 2009 to impeach Kent on four articles. He submitted a resignation letter on June 25, 2009, effective June 30, 2009, and President Obama accepted. He was the first federal judge impeached since Walter Nixon in 1989.',
  '[
    "Engaged in repeated non-consensual sexual contact with two female court employees under his supervision between 2003 and 2007",
    "Lied to judicial conduct investigators, claiming the contact was consensual",
    "Pleaded guilty February 2009 to obstruction of justice",
    "Acknowledged in open court the non-consensual nature of the conduct",
    "Sentenced May 11, 2009: 33 months in federal prison",
    "After conviction, attempted to file for disability retirement (which would have paid $169,300/year for life even while imprisoned)",
    "House voted June 19, 2009 to impeach on four articles; resigned June 25, 2009 effective June 30, 2009",
    "First federal judge impeached since Walter Nixon in 1989"
  ]'::jsonb,
  '[
    "FEDERAL JUDGE",
    "SEXUAL ASSAULT",
    "OBSTRUCTION OF JUSTICE",
    "IMPEACHED"
  ]'::jsonb,
  E'Samuel Kent served as a Judge on the U.S. District Court for the Southern District of Texas, Galveston Division. He was appointed to the federal bench in 1990.\n\nSEXUAL ASSAULT:\nBetween 2003 and 2007, Kent engaged in repeated non-consensual sexual contact with two female court employees under his supervision:\n1. A court case manager\n2. A secretary\n\nOBSTRUCTION OF JUSTICE:\nWhen a judicial conduct investigation was opened, Kent lied to investigators.\nHe falsely claimed that the sexual contact had been consensual.\n\nCRIMINAL CONVICTION:\nPleaded guilty in February 2009 to obstruction of justice.\nAcknowledged in open court that he had engaged in non-consensual sexual contact with both employees.\nSentenced May 11, 2009: 33 months in federal prison.\n\nRETIREMENT SCHEME:\nAfter his conviction, rather than resign from the bench, Kent filed for disability retirement.\nThis would have paid him $169,300 annually for life — even while imprisoned.\n\nIMPEACHMENT:\nThe House of Representatives voted June 19, 2009 to impeach Kent on four articles:\n- Two articles related to sexual assault\n- One article for false statements\n- One article for obstruction of justice\n\nRESIGNATION:\nKent submitted a resignation letter on June 25, 2009, effective June 30, 2009.\nPresident Barack Obama accepted the resignation.\nThe Senate ended the impeachment trial.\n\nHISTORIC SIGNIFICANCE:\nKent was the first federal judge impeached since Walter Nixon in 1989.\n\nCurrent Profession: No known public occupation. Former U.S. District Judge (S.D. Texas). Sentenced May 2009 to 33 months for obstruction of justice. Served 25 months (released November 2011 with final 8 months under house arrest). Resigned June 30, 2009. Lost law license. Age 76 as of 2026.\nApproximate Net Worth: Not publicly documented (lost pension after prison conviction; paid $6,550 restitution to victims).\nCurrent Residence: West Texas area.',
  '[
    {"name": "Library of Congress — Federal Impeachment: Samuel Kent", "url": "https://guides.loc.gov/federal-impeachment/samuel-kent", "date": "2009-06-19"},
    {"name": "CNN — House Impeaches Judge Samuel Kent", "url": "http://www.cnn.com/2009/POLITICS/06/19/U.S.impeachment.judge/index.html", "date": "2009-06-19"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;