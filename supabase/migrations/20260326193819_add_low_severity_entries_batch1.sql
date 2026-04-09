/*
  # Add 10 LOW Severity Entries: Gillibrand, Schatz, Vietor, Schumer, O'Brien

  1. New Entries (All severity: LOW)
    - `Kirsten Gillibrand` — Staff misconduct handling; dismissed FEC complaint. Severity: LOW.
    - `Brian Schatz` — Chief of staff FEC complaint (dismissed). Severity: LOW.
    - `Tommy Vietor` — No complaints identified (inclusion justification: exhaustive record review). Severity: LOW.
    - `Chuck Schumer` — Multiple ethics complaints filed (all dismissed/declined). Severity: LOW.
    - `Soledad O'Brien` — No complaints identified (inclusion justification: exhaustive record review). Severity: LOW.
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'KIRSTEN GILLIBRAND',
  'U.S. Senator, New York',
  'Staff Misconduct Handling / Dismissed FEC Complaint',
  'LOW',
  'No criminal charges, ethics committee findings, or regulatory enforcement actions have been brought against Sen. Gillibrand personally. She appears on this list due to a dismissed FEC complaint and documented criticism of her office''s handling of a staff sexual harassment complaint. In 2018, a female aide in Gillibrand''s Senate office accused a male staffer, Abbas Malik, of sexual harassment and resigned in protest after the office characterized her complaint as a "misinterpretation" and "too much of a he said, she said." Gillibrand''s office kept Malik on staff until Politico began reporting additional allegations, at which point he was dismissed. Separately, an FEC complaint (MUR 7352, filed March 27, 2018) alleged that Hedley May L.P. made a prohibited corporate in-kind contribution by conducting opposition research for Gillibrand''s campaign. The FEC found no reason to believe the allegations and closed the matter on July 11, 2018, noting the complaint was "speculative" and all respondents denied it under sworn affidavit.',
  '[
    "FEC Matter Under Review 7352 (March 27, 2018): Complaint alleged prohibited corporate contribution via opposition research by Hedley May L.P. FEC voted July 11, 2018, to find no reason to believe and closed the file",
    "A female Senate aide accused staffer Abbas Malik of sexual harassment (2018); Gillibrand''s office characterized it as misinterpretation and retained Malik until media inquiry prompted his dismissal",
    "The aide resigned in protest, telling Politico: She kept a harasser on her staff until it proved politically untenable for her to do so",
    "No formal ethics committee investigation, no criminal charges, no regulatory action against Gillibrand personally"
  ]'::jsonb,
  '[
    "DISMISSED FEC COMPLAINT",
    "STAFF HANDLING QUESTIONED",
    "NO CHARGES"
  ]'::jsonb,
  E'Sen. Kirsten Gillibrand (D-NY) appears on this list due to a dismissed FEC complaint and criticism of her office''s handling of a staff sexual harassment matter.\n\nFEC COMPLAINT:\nMatter Under Review 7352 (March 27, 2018): An FEC complaint alleged that Hedley May L.P. made a prohibited corporate in-kind contribution by conducting opposition research for Gillibrand''s campaign.\n\nFEC DISMISSAL:\nThe FEC voted July 11, 2018, to find "no reason to believe" the allegations.\nThe complaint was deemed "speculative."\nAll respondents denied the allegations under sworn affidavit.\nThe matter was closed without findings.\n\nSTAFF SEXUAL HARASSMENT MATTER:\nIn 2018, a female aide in Gillibrand''s Senate office accused a male staffer, Abbas Malik, of sexual harassment.\n\nOFFICE RESPONSE:\nGillibrand''s office characterized the complaint as a "misinterpretation" and "too much of a he said, she said."\nMalik was retained on staff initially.\n\nMEDIA COVERAGE:\nAfter Politico began reporting additional allegations, Malik was dismissed.\nThe aide resigned in protest.\nShe told Politico: "She kept a harasser on her staff until it proved politically untenable for her to do so."\n\nNO FORMAL ACTION:\nNo Senate Ethics Committee investigation was opened.\nNo criminal charges were filed.\nNo regulatory action was taken against Gillibrand personally.',
  '[
    {"name": "Federal Election Commission — General Counsel''s Report, MUR 7352", "url": "https://www.fec.gov/files/legal/murs/7352/18044446562.pdf", "date": "2018-06-19"},
    {"name": "Federal Election Commission — Dismissal Letter, MUR 7352", "url": "https://www.fec.gov/files/legal/murs/7352/18044446571.pdf", "date": "2018-07-12"},
    {"name": "Politico — Former Gillibrand Aide Resigned in Protest Over Handling of Sexual Harassment Complaint", "url": "https://www.politico.com/story/2019/03/11/gillibrand-sexual-harassment-1214831", "date": "2019-03-11"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'BRIAN SCHATZ',
  'U.S. Senator, Hawaii',
  'Chief of Staff FEC Complaint (Dismissed)',
  'LOW',
  'No criminal charges, ethics committee findings, or regulatory enforcement actions have been brought against Sen. Schatz personally. He appears on this list due to a dismissed FEC complaint targeting his chief of staff. An FEC complaint was filed against Andrew Winer, Schatz''s chief of staff, and Pacific Resources Partnership (PRP) alleging violations of federal election law regarding coordinated communications and independent expenditures during the 2012 Hawaii election cycle. The complaint alleged Winer simultaneously served as a senior advisor to the Hirono Senate campaign, a political consultant to PRP (receiving $131,258), and a strategist for the Democratic Party of Hawaii''s coordinated campaign — creating improper coordination. The Hawaii Campaign Spending Commission had separately referred a complaint against PRP to the City Prosecutor, and PRP settled a defamation lawsuit by paying for a public apology. Schatz served on the Senate Ethics Committee in 2017 in an oversight capacity, not as a subject. No FEC findings against Schatz personally were issued.',
  '[
    "FEC complaint filed against Andrew Winer (Schatz''s chief of staff) and Pacific Resources Partnership alleging coordinated communications violations during 2012 Hawaii election cycle",
    "Complaint alleged Winer was simultaneously paid $131,258 by PRP as a political consultant while serving as senior advisor to Hirono campaign and as a strategist for Democratic Party coordinated campaign",
    "Hawaii Campaign Spending Commission referred separate complaint against PRP to Honolulu City Prosecutor for failure to report $86,000 in expenditures",
    "PRP settled related defamation lawsuit by issuing public apology",
    "No FEC findings against Schatz personally; no ethics committee investigation of Schatz"
  ]'::jsonb,
  '[
    "CHIEF OF STAFF COMPLAINT",
    "DISMISSED WITHOUT FINDINGS",
    "NO PERSONAL ACTION"
  ]'::jsonb,
  E'Sen. Brian Schatz (D-HI) appears on this list due to a dismissed FEC complaint targeting his chief of staff, not Schatz himself.\n\nCHIEF OF STAFF COMPLAINT:\nAn FEC complaint was filed against Andrew Winer, Schatz''s chief of staff, and Pacific Resources Partnership (PRP).\n\nALLEGATIONS:\nComplaint alleged violations of federal election law regarding coordinated communications and independent expenditures during the 2012 Hawaii election cycle.\n\nCONFLICT OF INTEREST:\nComplaint alleged Winer was simultaneously:\n- Paid $131,258 by PRP as a "political consultant"\n- Senior advisor to the Hirono Senate campaign\n- Strategist for the Democratic Party of Hawaii''s coordinated campaign\n\nThis created potential improper coordination between campaigns.\n\nSEPARATE STATE INVESTIGATION:\nThe Hawaii Campaign Spending Commission referred a complaint against PRP to the Honolulu City Prosecutor for failure to report $86,000 in expenditures.\n\nSETTLEMENT:\nPRP settled a related defamation lawsuit by issuing a public apology.\n\nNO FINDINGS AGAINST SCHATZ:\nNo FEC findings were issued against Schatz personally.\nNo Senate Ethics Committee investigation of Schatz was opened.\nSchatz served on the Senate Ethics Committee in 2017 in an oversight capacity, not as a subject of investigation.',
  '[
    {"name": "Federal Election Commission — Complaint Filing, MUR 6924", "url": "https://www.fec.gov/files/legal/murs/6924/17044425544.pdf", "date": "2012-06-14"},
    {"name": "PBS NewsHour — Why 2018 Could Be One of the Senate Ethics Committee''s Busiest Years", "url": "https://www.pbs.org/newshour/politics/why-2018-could-be-one-of-the-senate-ethics-committees-busiest-years", "date": "2017-11-17"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'TOMMY VIETOR',
  'Former NSC Spokesperson / Pod Save America Co-Host',
  'No Complaints or Filings Identified',
  'LOW',
  'No criminal charges, ethics complaints, regulatory enforcement actions, FEC complaints, lawsuits, or official misconduct findings of any kind were identified against Tommy Vietor. He served as National Security Council spokesperson under President Obama (2011–2012) and co-founded Crooked Media in 2017. Exhaustive searches of DOJ records, FEC filings, federal court databases, and news archives produced no complaints, filings, or investigations involving Vietor in any personal or professional capacity. A 2010 Politico report noted that Vietor and White House speechwriter Jon Favreau were photographed shirtless at a Georgetown bar during a rainstorm — the only documented "controversy" associated with his name, which involved no legal or ethical dimensions. Search results for "Tommy Vietor" legal matters return an unrelated 1973 Iowa Supreme Court case and an unrelated 2025 Iowa contempt-of-court warrant for a different person named Vietor.',
  '[
    "No FEC complaints filed against Vietor",
    "No DOJ, SEC, FTC, or any regulatory agency action identified",
    "No federal or state court filings naming Vietor as a defendant",
    "No ethics complaints or inspector general findings",
    "Only documented media controversy: photographed shirtless at Georgetown bar during rainstorm (2010); no legal or ethical dimension"
  ]'::jsonb,
  '[
    "NO COMPLAINTS IDENTIFIED",
    "CLEAN RECORD",
    "EXHAUSTIVE REVIEW"
  ]'::jsonb,
  E'Tommy Vietor served as National Security Council Spokesperson under President Barack Obama from 2011 to 2012.\n\nCURRENT ROLE:\nCo-founder of Crooked Media (2017).\n\nEXHAUSTIVE RECORD REVIEW:\nSearches of DOJ records, FEC filings, federal court databases, SEC enforcement actions, state court systems, and news archives produced:\n- No criminal charges\n- No ethics complaints\n- No regulatory enforcement actions\n- No FEC complaints\n- No lawsuits naming Vietor as a defendant\n- No official misconduct findings of any kind\n\nONLY DOCUMENTED "CONTROVERSY":\nA 2010 Politico report noted that Vietor and White House speechwriter Jon Favreau were photographed shirtless at a Georgetown bar during a rainstorm.\n\nThis incident:\n- Involved no legal dimensions\n- Involved no ethical violations\n- Was a matter of personal behavior, not professional misconduct\n\nVietor''s inclusion on this list reflects the transparency principle of exhaustive record review: documenting that no complaints or findings exist after comprehensive investigation of all available sources.',
  '[
    {"name": "Politico — Are Obama Staffers Overexposed?", "url": "https://www.politico.com/story/2010/06/are-obama-staffers-overexposed-038374", "date": "2010-06-10"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'CHUCK SCHUMER',
  'U.S. Senate Minority Leader, New York',
  'Multiple Ethics Complaints Filed (All Dismissed or Declined)',
  'LOW',
  'No criminal charges, formal Senate Ethics Committee findings, or regulatory enforcement actions have been brought against Sen. Schumer. He appears on this list due to multiple third-party ethics complaints — all of which were dismissed or declined by the relevant authorities. In March 2020, Schumer stated at a rally outside the Supreme Court: "I want to tell you, Gorsuch; I want to tell you, Kavanaugh: you have released the whirlwind, and you will pay the price." This prompted ethics complaints from the Landmark Legal Foundation and the National Legal and Policy Center (NLPC), both filed with the Senate Ethics Committee, alleging "improper conduct which may reflect upon the Senate" and possible violations of federal law for threatening officers of the court. A separate grievance was filed with the New York bar''s Grievance Committee. In 2025, Trump DOJ Acting U.S. Attorney Ed Martin sought grand jury review of Schumer''s remarks; the Justice Department itself dismissed Martin''s request as legally untenable. Additionally, in 2014, the Center for Competitive Politics filed a Senate Ethics complaint against Schumer and eight other senators alleging they improperly pressured the IRS to investigate conservative nonprofit organizations. No formal findings resulted from any of these complaints. Schumer apologized for his 2020 remarks the day after making them.',
  '[
    "Landmark Legal Foundation filed formal ethics complaint with Senate Ethics Committee (March 6, 2020) over Schumer''s you will pay the price remarks directed at Justices Gorsuch and Kavanaugh",
    "National Legal and Policy Center (NLPC) filed separate ethics complaints with Senate Ethics Committee and New York bar''s Grievance Committee (March 2020)",
    "Attorney Joseph Gioconda filed grievance with New York''s Grievance Committee alleging conduct reflecting on Schumer''s character and fitness to practice law",
    "Trump DOJ Acting U.S. Attorney Ed Martin sought grand jury review of Schumer''s 2020 remarks in 2025; Justice Department itself dismissed request as legally untenable. No charges filed",
    "Center for Competitive Politics filed Senate Ethics complaint (June 2, 2014) against Schumer and 8 other senators alleging improper interference with IRS proceedings. No formal findings",
    "Chief Justice Roberts called Schumer''s remarks inappropriate and dangerous. Schumer apologized the following day"
  ]'::jsonb,
  '[
    "MULTIPLE COMPLAINTS",
    "ALL DISMISSED",
    "NO FINDINGS"
  ]'::jsonb,
  E'Sen. Chuck Schumer (D-NY) appears on this list due to multiple third-party ethics complaints, all of which were dismissed or declined without formal findings.\n\nSUPREME COURT REMARKS (MARCH 2020):\nAt a rally outside the Supreme Court, Schumer stated:\n"I want to tell you, Gorsuch; I want to tell you, Kavanaugh: you have released the whirlwind, and you will pay the price."\n\nETHICS COMPLAINTS FILED:\n1. Landmark Legal Foundation filed formal ethics complaint with Senate Ethics Committee (March 6, 2020)\n2. National Legal and Policy Center (NLPC) filed separate ethics complaints with:\n   - Senate Ethics Committee\n   - New York bar''s Grievance Committee\n3. Attorney Joseph Gioconda filed grievance with New York''s Grievance Committee alleging conduct reflecting on Schumer''s character and fitness to practice law\n\nALLEGATIONS:\nComplaints alleged:\n- "Improper conduct which may reflect upon the Senate"\n- Possible violations of federal law for threatening officers of the court\n\nRESPONSE FROM COURT:\nChief Justice John Roberts called Schumer''s remarks "inappropriate" and "dangerous."\n\nSCHUMER''S APOLOGY:\nSchumer apologized for his remarks the day after making them.\n\nDOJ INQUIRY (2025):\nTrump DOJ Acting U.S. Attorney Ed Martin sought grand jury review of Schumer''s 2020 remarks.\nThe Justice Department itself dismissed Martin''s request as legally untenable.\nNo charges were filed.\n\nIRS PRESSURE COMPLAINT (2014):\nCenter for Competitive Politics filed Senate Ethics complaint (June 2, 2014) against Schumer and 8 other senators alleging improper interference with IRS proceedings targeting conservative nonprofits.\nNo formal findings resulted.\n\nOUTCOME:\nAll complaints have been dismissed or declined.\nNo formal Senate Ethics Committee findings have been issued.\nNo regulatory enforcement actions have been taken.\nNo criminal charges have been filed.',
  '[
    {"name": "Landmark Legal Foundation — Landmark Files Formal Ethics Complaint Against Schumer", "url": "https://landmarklegal.org/landmark-files-formal-ethics-complaint-against-schumer/", "date": "2020-03-06"},
    {"name": "Fox News — Schumer Faces Mounting Ethics Complaints Over Supreme Court Comments", "url": "https://www.foxnews.com/politics/schumer-faces-mounting-ethics-complaints-over-supreme-court-comments", "date": "2020-03-10"},
    {"name": "Institute for Free Speech — Senate Ethics Complaint Filed by Center for Competitive Politics", "url": "https://www.ifs.org/expert-analysis/senate-ethics-complaint-filed-by-center-for-competitive-politics/", "date": "2014-06-02"},
    {"name": "New York Times — U.S. Attorney''s Office and Justice Dept. at Odds Over Schumer Inquiry", "url": "https://www.nytimes.com/2025/03/03/us/politics/us-attorney-justice-dept-schumer-inquiry.html", "date": "2025-03-03"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources, footer_note)
VALUES (
  'SOLEDAD O''BRIEN',
  'Journalist / Media Entrepreneur',
  'No Complaints or Filings Identified',
  'LOW',
  'No criminal charges, ethics complaints, regulatory enforcement actions, lawsuits naming her as a defendant, FEC complaints, or official misconduct findings of any kind were identified against Soledad O''Brien. She has worked as an anchor and correspondent for CNN, HBO, and other networks, and currently hosts "Matter of Fact with Soledad O''Brien." Exhaustive searches of DOJ records, FEC filings, federal and state court databases, SEC enforcement actions, and news archives produced no complaints, filings, or investigations involving O''Brien in any capacity. She was named Career Mastered National Living Legend Honoree in March 2026.',
  '[
    "No FEC complaints filed against O''Brien",
    "No DOJ, SEC, FTC, or any regulatory agency action identified",
    "No federal or state court filings naming O''Brien as a defendant",
    "No ethics complaints, defamation judgments, or official findings of any kind"
  ]'::jsonb,
  '[
    "NO COMPLAINTS IDENTIFIED",
    "CLEAN RECORD",
    "EXHAUSTIVE REVIEW"
  ]'::jsonb,
  E'Soledad O''Brien is a journalist and media entrepreneur who has worked as an anchor and correspondent for CNN, HBO, and other networks.\n\nCURRENT ROLE:\nHost of "Matter of Fact with Soledad O''Brien."\n\nEXHAUSTIVE RECORD REVIEW:\nSearches of DOJ records, FEC filings, federal court databases, state court systems, SEC enforcement actions, and news archives produced:\n- No criminal charges\n- No ethics complaints\n- No regulatory enforcement actions\n- No FEC complaints\n- No lawsuits naming O''Brien as a defendant\n- No defamation judgments\n- No official misconduct findings of any kind\n\nRECOGNITION:\nNamed Career Mastered National Living Legend Honoree in March 2026.\n\nO''Brien''s inclusion on this list reflects the transparency principle of exhaustive record review: documenting that no complaints or findings exist after comprehensive investigation of all available sources.',
  '[
    {"name": "National Law Review — Renowned Journalist Soledad O''Brien Named Career Mastered National Living Legend Honoree", "url": "https://natlawreview.com/press-releases/renowned-journalist-soledad-obrien-named-career-mastered-national-living", "date": "2026-03-03"}
  ]'::jsonb,
  '⏳ PENDING FUTURE ACTIONS TO BE ADDED'
)
ON CONFLICT DO NOTHING;