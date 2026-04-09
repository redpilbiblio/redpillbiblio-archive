/*
  # Add Executive Branch Entries: Flynn, Gonzales, Holder (Fixed JSON escaping)
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'MICHAEL T. FLYNN',
  'National Security Advisor',
  'Guilty Plea for Lying to FBI; 24-Day Tenure; Pardoned; $1.2M Settlement',
  'HIGH',
  'Michael Flynn served as National Security Advisor to President Trump for 24 days (January 20 to February 13, 2017) — the shortest tenure in the position''s history. As part of Special Counsel Robert Mueller''s investigation, Flynn pleaded guilty on December 1, 2017 to one felony count of making false statements to the FBI regarding his December 2016 conversations with then-Russian Ambassador Sergey Kislyak. Specifically, Flynn falsely told agents he had not asked Kislyak to refrain from escalating in response to U.S. sanctions, and had not asked for Russia''s support of a U.N. Security Council resolution regarding Israeli settlements. The plea agreement described Flynn as a cooperating witness who provided substantial assistance. On November 25, 2020, President Trump issued a full and unconditional pardon. In March 2026, Flynn received a $1.2 million settlement from the DOJ over claims of prosecutorial misconduct.',
  '[
    "Served as National Security Advisor for only 24 days — shortest tenure in position''s history",
    "Pleaded guilty December 1, 2017, to one felony count of making false statements to the FBI (18 U.S.C. § 1001)",
    "Falsely stated to FBI agents that he had not asked Russian Ambassador Kislyak to refrain from escalating in response to U.S. sanctions",
    "Falsely stated he had not asked Russia to support or delay a U.N. Security Council vote on Israeli settlements",
    "Mueller''s office described Flynn''s cooperation as providing substantial assistance to ongoing investigations",
    "Full and unconditional presidential pardon issued November 25, 2020",
    "DOJ paid Flynn $1.2 million settlement in March 2026 over claims of prosecutorial misconduct"
  ]'::jsonb,
  '[
    "NATIONAL SECURITY ADVISOR",
    "GUILTY PLEA — FALSE STATEMENTS",
    "PARDONED BY TRUMP",
    "$1.2M SETTLEMENT"
  ]'::jsonb,
  E'Michael Flynn served as National Security Advisor to President Trump from January 20 to February 13, 2017.\n\nTENURE:\nHis tenure lasted only 24 days — the shortest in the position''s history.\n\nCRIMINAL INVESTIGATION:\nAs part of Special Counsel Robert Mueller''s investigation into Russian interference in the 2016 election, Flynn was interviewed by FBI agents.\n\nLYING TO FEDERAL INVESTIGATORS:\nFlynn made false statements to FBI agents regarding his December 2016 communications with then-Russian Ambassador Sergey Kislyak.\n\nFALSE STATEMENTS:\n1. Flynn falsely stated he had not asked Ambassador Kislyak to refrain from escalating tensions in response to U.S. sanctions imposed December 29, 2016.\n\n2. Flynn falsely stated he had not asked Russia to support or delay a U.N. Security Council vote regarding Israeli settlements.\n\nGUILTY PLEA:\nPleaded guilty December 1, 2017 to one felony count of making false statements to the FBI (18 U.S.C. § 1001).\n\nCOOPERATION:\nThe Mueller plea agreement described Flynn as a cooperating witness who provided substantial assistance to the ongoing investigation.\n\nPARDON:\nFull and unconditional presidential pardon issued by President Trump on November 25, 2020.\n\nSETTLEMENT:\nIn March 2026, Flynn received a $1.2 million settlement from the DOJ over claims of prosecutorial misconduct regarding how the FBI conducted his initial interview.\n\nCurrent Profession: Chairman of America''s Future, a conservative nonprofit; speaking engagements at MAGA and conservative events; media appearances on right-wing platforms. Active in election denialism and allied causes.\nApproximate Net Worth: ~$600,000 (Celebrity Net Worth estimate; sold Virginia home ~2018 to cover legal fees).\nCurrent Residence: Venice, FL area.',
  '[
    {"name": "DOJ — Flynn Pleads Guilty to Making False Statements to FBI", "url": "https://www.justice.gov/sco/pr/former-national-security-advisor-michael-t-flynn-pleads-guilty", "date": "2017-12-01"},
    {"name": "DOJ — Statement of the Offense, United States v. Flynn", "url": "https://www.justice.gov/sco/page/file/1015126/download", "date": "2017-12-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'ALBERTO GONZALES',
  'U.S. Attorney General',
  'DOJ Inspector General Finding of Misleading Conduct; Classified Document Mishandling; Resigned Under Investigation',
  'HIGH',
  'Alberto Gonzales served as U.S. Attorney General from 2005 to 2007 under President George W. Bush. The Department of Justice Office of Inspector General (OIG) and the Office of Professional Responsibility (OPR) conducted a joint investigation into the mass firing of eight U.S. Attorneys in December 2006. Their September 2008 report concluded that Gonzales provided "misleading" and "inaccurate" testimony to Congress about his role, finding that he failed to adequately supervise the process and made statements that were contradicted by evidence. The OIG also found Gonzales mishandled classified materials — keeping Top Secret/SCI documents in an unsecured safe at his residence and in an unlocked briefcase in his office at the DOJ, in violation of department rules. The combined findings precipitated his resignation on September 17, 2007. While the OIG referred the classified-information matter to a special prosecutor, no criminal charges were filed.',
  '[
    "DOJ Inspector General/Office of Professional Responsibility joint report (September 2008) found Gonzales provided misleading and inaccurate testimony to Congress",
    "Failed to adequately supervise the U.S. Attorney removal process",
    "Made statements contradicted by the evidence",
    "OIG found Gonzales kept Top Secret/SCI classified documents in an unsecured safe at his private residence",
    "OIG found classified materials were stored in an unlocked briefcase in his DOJ office",
    "OIG referred the classified-material violations to a special prosecutor (Nora Dannehy)",
    "Special prosecutor closed the investigation in 2008 without filing criminal charges",
    "Resigned as Attorney General September 17, 2007 under bipartisan congressional criticism"
  ]'::jsonb,
  '[
    "ATTORNEY GENERAL",
    "DOJ OIG INVESTIGATION",
    "MISLEADING TESTIMONY",
    "CLASSIFIED DOCUMENTS"
  ]'::jsonb,
  E'Alberto Gonzales served as U.S. Attorney General from 2005 to 2007 under President George W. Bush.\n\nU.S. ATTORNEY FIRINGS INVESTIGATION:\nIn December 2006, the Bush administration fired eight U.S. Attorneys without the typical explanation or advance notice.\n\nDOJ INSPECTOR GENERAL INVESTIGATION:\nThe Department of Justice Office of Inspector General (OIG) and the Office of Professional Responsibility (OPR) conducted a joint investigation.\n\nFINDINGS — MISLEADING TESTIMONY:\nTheir September 2008 report concluded that Gonzales provided misleading and inaccurate testimony to Congress about his role in the firings.\n\nSpecific findings:\n- He failed to adequately supervise the removal process\n- He made statements that were contradicted by evidence\n- Senate Judiciary Committee cited his testimony as inconsistent at least 45 times during hearings\n\nFINDINGS — CLASSIFIED DOCUMENT MISHANDLING:\nThe OIG also found Gonzales mishandled classified materials:\n\n1. Kept Top Secret/SCI documents in an unsecured safe at his private residence\n2. Stored classified materials in an unlocked briefcase in his DOJ office\n\nThese violations were in breach of department rules and federal law.\n\nCRIMINAL REFERRAL:\nThe OIG referred the classified-material violations to a special prosecutor (Nora Dannehy).\nHowever, no criminal charges were filed.\n\nRESIGNATION:\nThe combined findings precipitated his resignation on September 17, 2007 under bipartisan congressional criticism.\n\nCurrent Profession: Stepping down as Dean and Doyle Rogers Distinguished Professor of Law, Belmont University College of Law (Nashville, TN), effective May 31, 2026 — after 12 years (joined 2012, became dean 2014). Plans to remain in Middle Tennessee. Board member, National Policing Institute. Testified before House Oversight Committee on Epstein non-prosecution agreement (August 2025).\nApproximate Net Worth: Not publicly documented at current levels (~$300K per 2005 disclosure; substantially higher after years in academia and consulting).\nCurrent Residence: Nashville, TN.',
  '[
    {"name": "DOJ — An Investigation into the Removal of Nine U.S. Attorneys in 2006", "url": "https://oig.justice.gov/reports/investigation-removal-nine-us-attorneys-2006", "date": "2008-09-01"},
    {"name": "PBS NewsHour — Alberto Gonzales Resigns", "url": "https://www.pbs.org/newshour/nation/politics-july-dec07-gonzales_08-27", "date": "2007-08-27"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'ERIC HOLDER',
  'U.S. Attorney General',
  'Held in Contempt of Congress — First Sitting Attorney General in U.S. History; Operation Fast and Furious',
  'CRITICAL',
  'Eric Holder served as U.S. Attorney General from 2009 to 2015 under President Obama. On June 28, 2012, the U.S. House of Representatives voted 255–67 to hold Holder in criminal contempt of Congress — making him the first sitting cabinet member and first sitting Attorney General in American history to be held in contempt. The contempt citation arose from the House Committee on Oversight and Government Reform''s investigation into Operation Fast and Furious, an ATF gunwalking program in which federal agents allowed approximately 2,000 firearms to be illegally purchased and transferred to Mexican drug cartel operatives. Two of those weapons were recovered at the scene of U.S. Border Patrol Agent Brian Terry''s murder on December 14, 2010. The House cited Holder for refusing to produce documents subpoenaed by the committee. President Obama asserted executive privilege over the documents, and the DOJ did not prosecute the contempt referral. A subsequent DOJ Inspector General report (September 2012) found misguided strategies, tactics, errors in judgment, and management failures but did not find that Holder personally authorized or knew about the gunwalking tactics.',
  '[
    "House voted 255–67 on June 28, 2012, to hold Holder in criminal contempt of Congress (H. Res. 711)",
    "First sitting Attorney General and first sitting cabinet member held in contempt in U.S. history",
    "Also held in civil contempt in a separate vote the same day (258–95)",
    "Operation Fast and Furious allowed approximately 2,000 firearms to be transferred to Mexican drug cartel operatives",
    "Two firearms from the operation were recovered at the murder scene of U.S. Border Patrol Agent Brian Terry (December 14, 2010)",
    "DOJ Inspector General report (September 2012) found misguided strategies, tactics, errors in judgment, and management failures",
    "IG report found 14 specific DOJ and ATF employees responsible for failures",
    "President Obama asserted executive privilege over subpoenaed documents; DOJ did not prosecute contempt referral"
  ]'::jsonb,
  '[
    "ATTORNEY GENERAL",
    "HELD IN CONTEMPT OF CONGRESS",
    "FIRST SITTING AG IN HISTORY",
    "FAST AND FURIOUS"
  ]'::jsonb,
  E'Eric Holder served as U.S. Attorney General from 2009 to 2015 under President Barack Obama.\n\nHELD IN CONTEMPT OF CONGRESS:\nOn June 28, 2012, the U.S. House of Representatives voted:\n- 255–67 to hold Holder in criminal contempt of Congress (H. Res. 711)\n- 258–95 to hold him in civil contempt in a separate vote\n\nHistoric significance:\nHolding made Holder the FIRST SITTING ATTORNEY GENERAL in American history to be held in contempt of Congress.\nAlso the first sitting cabinet member ever held in contempt.\n\nOPERATION FAST AND FURIOUS:\nThe contempt citation arose from the House Committee on Oversight and Government Reform''s investigation into Operation Fast and Furious — an ATF (Bureau of Alcohol, Tobacco, Firearms and Explosives) gunwalking program.\n\nPROGRAM DETAILS:\n- Federal agents allowed approximately 2,000 firearms to be illegally purchased and transferred to Mexican drug cartel operatives\n- The stated purpose was to track the weapons to cartel leaders\n- In practice, the weapons disappeared into cartel hands with no effective tracking\n\nDEAD BORDER PATROL AGENT:\nTwo of those weapons were recovered at the scene of U.S. Border Patrol Agent Brian Terry''s murder on December 14, 2010.\n\nDOCUMENT PRODUCTION:\nThe House cited Holder for refusing to produce documents subpoenaed by the committee.\n\nEXECUTIVE PRIVILEGE:\nPresident Obama asserted executive privilege over the subpoenaed documents.\n\nNO PROSECUTION:\nThe DOJ did not prosecute the contempt referral against Holder.\n\nIG REPORT:\nA subsequent DOJ Inspector General report (September 2012) found:\n- Misguided strategies, tactics, errors in judgment, and management failures\n- 14 specific DOJ and ATF employees responsible for the failures\n- Did NOT find that Holder personally authorized or knew about the gunwalking tactics\n\nCurrent Profession: Senior Counsel at Covington & Burling LLP (Washington, DC law firm), advising on complex investigations, corporate litigation, and international regulatory matters. Chairman, National Democratic Redistricting Committee (NDRC). Former U.S. Attorney General (2009–2015); first African American to hold the office.\nApproximate Net Worth: ~$8 million (Celebrity Net Worth estimate, 2024; primarily from legal career earnings).\nCurrent Residence: Washington, DC area.',
  '[
    {"name": "House of Representatives — Contempt Resolution (H. Res. 711)", "url": "https://www.congress.gov/bill/112th-congress/house-resolution/711", "date": "2012-06-28"},
    {"name": "DOJ — Review of ATF''s Operation Fast and Furious", "url": "https://oig.justice.gov/reports/review-atfs-operation-fast-and-furious-and-related-matters", "date": "2012-09-01"},
    {"name": "C-SPAN — House Vote on Attorney General Contempt", "url": "https://www.c-span.org/video/?306756-1/house-debates-contempt-resolution-attorney-general-holder", "date": "2012-06-28"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;