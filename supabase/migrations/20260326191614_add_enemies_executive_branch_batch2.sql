/*
  # Add Executive Branch Entries: Zinke, Price, Berger, Flynn, Gonzales, Holder

  1. New Entries
    - `Ryan Zinke` — Interior Secretary; IG criminal referral; misleading statements; duty of candor violations. Severity: HIGH.
    - `Tom Price` — HHS Secretary; $1.2M private/military jets; resigned. Severity: HIGH.
    - `Samuel "Sandy" Berger` — NSA; stole/destroyed classified documents; misdemeanor plea. Severity: HIGH.
    - `Michael Flynn` — National Security Advisor; lied to FBI; pardoned. Severity: HIGH.
    - `Alberto Gonzales` — Attorney General; misleading testimony; classified document mishandling. Severity: HIGH.
    - `Eric Holder` — Attorney General; held in contempt of Congress (first sitting AG in history). Severity: CRITICAL.
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RYAN ZINKE',
  'Secretary of the Interior',
  'IG Criminal Referral; Misleading Statements to Investigators; Duty of Candor Violations',
  'HIGH',
  'Ryan Zinke served as Secretary of the Interior from March 2017 to January 2019. The Department of the Interior Inspector General conducted multiple investigations into Zinke''s conduct and in October 2018 made a criminal referral to the DOJ. Investigations focused on a Montana real estate deal involving the chairman of Halliburton — a company with significant business before Interior — and his decision to block Native American tribes'' casino applications in Connecticut. In the casino investigation, the IG found evidence the decision was influenced by competing casino interests and Nevada politicians. Zinke and his Chief of Staff made statements that the IG found had "the overall intent to mislead" investigators, presenting "an inaccurate version of the circumstances." The final IG report, issued August 24, 2022 (Report No. 18-0480), formally concluded that Secretary Zinke and his Chief of Staff "did not comply with their duty of candor." The DOJ did not ultimately file criminal charges. Zinke resigned January 2, 2019.',
  '[
    "DOI IG criminal referral made to the Department of Justice, October 2018",
    "Montana real estate deal with chairman of Halliburton, a company with significant business before Interior — potential conflict of interest",
    "Decision to block Native American tribes'' casino applications in Connecticut — IG found evidence it was influenced by competing casino interests and Nevada politicians",
    "IG found Zinke and his Chief of Staff made statements \"with the overall intent to mislead\" investigators, presenting \"an inaccurate version of the circumstances\"",
    "Final IG Report No. 18-0480 (August 24, 2022): concluded Zinke and Chief of Staff \"did not comply with their duty of candor\"",
    "Zinke resigned January 2, 2019; DOJ did not file criminal charges"
  ]'::jsonb,
  '[
    "INTERIOR SECRETARY",
    "IG CRIMINAL REFERRAL",
    "MISLEADING STATEMENTS",
    "RESIGNED"
  ]'::jsonb,
  E'Ryan Zinke served as Secretary of the Interior from March 2017 to January 2019.\n\nTHE DEPARTMENT OF THE INTERIOR INSPECTOR GENERAL conducted multiple investigations into Zinke''s conduct.\n\n▸ CRIMINAL REFERRAL:\nIn October 2018, the IG made a criminal referral to the Department of Justice.\n\n▸ MONTANA REAL ESTATE DEAL:\nInvestigations focused on a Montana real estate deal in Zinke''s hometown involving the chairman of Halliburton — a company with significant business before Interior.\nThis represented a clear potential conflict of interest.\n\n▸ CASINO APPLICATION BLOCKING:\nZinke decided to block Native American tribes'' casino applications in Connecticut.\nThe IG found evidence that the decision was influenced by:\n- Competing casino interests\n- Nevada politicians\n\n▸ MISLEADING STATEMENTS:\nZinke and his Chief of Staff made statements that the IG found had "the overall intent to mislead" investigators.\nThey presented "an inaccurate version of the circumstances" to investigators.\n\n▸ DUTY OF CANDOR VIOLATIONS:\nThe final IG report, issued August 24, 2022 (Report No. 18-0480), formally concluded that:\n- Secretary Zinke "did not comply with their duty of candor"\n- Chief of Staff "did not comply with their duty of candor"\n\n▸ DOJ DECISION:\nDespite the IG criminal referral, the DOJ did not ultimately file criminal charges.\n\nZinke resigned January 2, 2019.\n\nCurrent Profession: Current U.S. Representative, MT-1 (Western Montana); announced March 2, 2026 he will NOT seek re-election (citing injuries from Navy SEAL career requiring multiple surgeries and recovery time). Will serve out remainder of fourth term through January 2027. Former Secretary of the Interior (2017–2019) under Trump; resigned amid ethics investigations.\nApproximate Net Worth: Not publicly documented at current levels (primarily real estate assets in Montana).\nCurrent Residence: Whitefish, MT.',
  '[
    {"name": "DOI Office of Inspector General — Report No. 18-0480", "url": "https://www.doioig.gov/sites/default/files/2021-migration/WebRedacted_FormerSecretaryandCOSDidntComplyWithDutyofCandor.pdf", "date": "2022-08-24"},
    {"name": "Reuters — Probe of Interior Secretary Zinke Referred to DOJ", "url": "https://www.reuters.com/article/world/us-politics/probe-of-us-interior-secretary-zinkes-conduct-referred-to-doj-reports-idUSKCN1N42IU/", "date": "2018-10-23"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'TOM PRICE',
  'HHS Secretary',
  '$1.2 Million in Private and Military Jets; 20 Trips Violated Federal Law; Resigned',
  'HIGH',
  'Tom Price served as Secretary of Health and Human Services from February to September 2017. The HHS Office of Inspector General audit, completed July 13, 2018, found that Price used private charter jets for at least 24 trips at a cost of approximately $400,000, and military aircraft on overseas trips, bringing total non-commercial travel costs to approximately $1.2 million. The IG audit found Price took 20 trips that violated federal travel requirements. The audit recommended the department seek repayment of at least $341,000 in wasteful spending. Several trips involved short distances that would have cost a fraction by commercial means, including Washington to Philadelphia. Price voluntarily repaid approximately $60,000 (the cost of his personal seat on charter flights) but not the full cost of chartering. He resigned September 29, 2017 after President Trump publicly expressed displeasure.',
  '[
    "Used private charter jets for at least 24 trips since May 2017, costing approximately $400,000",
    "Used U.S. military aircraft on overseas trips; total non-commercial travel costs reached $1.2 million",
    "HHS IG audit (July 13, 2018) found Price took 20 trips that violated federal travel requirements",
    "Audit recommended repayment of at least $341,000 in wasteful spending",
    "Voluntarily repaid only ~$60,000 (his personal seat cost) — not the full charter costs",
    "Resigned September 29, 2017; IG audit results published 10 months later"
  ]'::jsonb,
  '[
    "HHS SECRETARY",
    "$1.2M LUXURY TRAVEL",
    "20 TRIPS VIOLATED LAW",
    "RESIGNED"
  ]'::jsonb,
  E'Tom Price served as Secretary of Health and Human Services from February to September 2017.\n\nTHE HHS OFFICE OF INSPECTOR GENERAL audit, completed July 13, 2018, found extensive violations of federal travel requirements.\n\n▸ PRIVATE CHARTER FLIGHTS:\nPrice used private charter jets for at least 24 trips since May 2017, costing approximately $400,000.\n\nWhen commercial alternatives would have been available:\n- Washington to Philadelphia trip cost significantly more by private jet\n- Multiple short-distance flights that could have been commercial\n\n▸ MILITARY AIRCRAFT:\nUsed U.S. military aircraft on overseas trips.\n\n▸ TOTAL COSTS:\nTotal non-commercial travel costs: approximately $1.2 million.\n\n▸ FEDERAL LAW VIOLATIONS:\nHHS IG audit found Price took 20 trips that violated federal travel requirements.\n\nThese trips were inconsistent with federal government travel policy and regulations.\n\n▸ AUDIT FINDINGS:\nThe audit recommended the department seek repayment of at least $341,000 in wasteful spending.\n\n▸ PRICE''S RESPONSE:\nPrice voluntarily repaid approximately $60,000.\n\nThis represented only the cost of his personal seat on charter flights — NOT the full cost of chartering aircraft.\n\nHe did not repay the full $341,000+ recommended by the audit.\n\n▸ RESIGNATION:\nResigned September 29, 2017 after President Trump publicly expressed displeasure.\nThe IG audit documenting the full scope of violations was completed 10 months later.\n\nCurrent Profession: Advisor and speaker in healthcare policy sector; formerly Senior Advisor at Shore Capital Partners (healthcare private equity, Chicago). Former U.S. HHS Secretary (resigned September 2017). Former congressman (GA-6, 2005–2017). Now largely out of the public eye.\nApproximate Net Worth: ~$13.6–$14 million (OpenSecrets 2016 estimate).\nCurrent Residence: Roswell, GA.',
  '[
    {"name": "NPR — Price Resigns from Trump Cabinet Amid Private Jet Investigations", "url": "https://www.npr.org/sections/health-shots/2017/09/29/554475788/price-resigns-from-trump-cabinet-amidst-private-jet-investigations", "date": "2017-09-29"},
    {"name": "Politico — Tom Price: Auditor Calls for $341K Repayment of Travel Costs", "url": "https://www.politico.com/story/2018/07/13/tom-price-auditor-travel-685778", "date": "2018-07-13"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'SAMUEL R. "SANDY" BERGER',
  'National Security Advisor',
  'Stole and Destroyed Classified Documents from National Archives; Misdemeanor Guilty Plea; DECEASED',
  'HIGH',
  'Samuel Berger served as National Security Advisor under President Clinton from 1997 to 2001. In July, September, and October 2003, he visited the National Archives to review classified documents being prepared for the 9/11 Commission. On two occasions — September 2 and October 2, 2003 — he concealed and removed five copies of a classified millennium terrorism report from the Archives, stuffing the documents in his clothing. He subsequently destroyed three of those copies at his Washington office by cutting them up with scissors. When initially contacted by Archives staff who noticed documents were missing, Berger claimed he had "accidentally misfiled" two of them. He also removed handwritten notes from the Archives in violation of their rules. He pleaded guilty April 1, 2005 to one misdemeanor count of knowingly removing classified national defense information and was sentenced to $50,000 fine, 2 years'' probation, 100 hours of community service, and 3-year security clearance suspension. DECEASED — December 2, 2015.',
  '[
    "Visited National Archives three times (July, September, October 2003) to review classified 9/11 Commission documents",
    "On two visits (September 2 and October 2, 2003), concealed and removed five copies of a classified millennium terrorism report by stuffing them in his clothing",
    "Destroyed three of the five copies at his Washington office by cutting them up with scissors",
    "When contacted by Archives staff, claimed he had \"accidentally misfiled\" the documents — a false statement",
    "Also removed handwritten notes from the Archives in violation of their rules",
    "Pleaded guilty April 1, 2005 to misdemeanor unauthorized removal of classified national defense information (18 U.S.C. § 1924)",
    "Sentenced to $50,000 fine, 2 years'' probation, 100 community service hours, 3-year security clearance suspension",
    "DECEASED — December 2, 2015; cancer; Washington, DC; age 70"
  ]'::jsonb,
  '[
    "NATIONAL SECURITY ADVISOR",
    "GUILTY PLEA — CLASSIFIED DOCUMENTS",
    "DESTROYED EVIDENCE",
    "DECEASED"
  ]'::jsonb,
  E'Samuel R. "Sandy" Berger served as National Security Advisor under President Clinton from 1997 to 2001.\n\nCLASSIFIED DOCUMENT THEFT:\nIn July, September, and October 2003, Berger visited the National Archives to review classified documents being prepared for the 9/11 Commission.\n\nOn two occasions — September 2 and October 2, 2003 — he concealed and removed classified documents:\n- Stuffed five copies of a classified millennium terrorism report inside his clothing\n- Removed the documents from the Archives\n\nDOCUMENT DESTRUCTION:\nBerger subsequently destroyed three of those five copies at his Washington office by cutting them up with scissors.\n\nFALSE STATEMENTS:\nWhen initially contacted by Archives staff who noticed documents were missing, Berger claimed he had "accidentally misfiled" two of them.\n\nThis claim was false — the documents had been deliberately removed and destroyed.\n\nADDITIONAL VIOLATIONS:\nAlso removed handwritten notes from the Archives in violation of their rules.\n\nCRIMINAL CHARGES AND PLEA:\nPleaded guilty April 1, 2005 to one misdemeanor count of knowingly removing classified national defense information from the National Archives without authority (18 U.S.C. § 1924).\n\nSENTENCING (April 1, 2005):\n- $50,000 fine\n- 2 years'' probation\n- 100 hours of community service\n- Surrender of security clearance for 3 years\n\n▸ DECEASED:\nDecember 2, 2015; cancer; Washington, DC; age 70.\n\nCo-founded Albright Stonebridge Group consulting firm after government service.',
  '[
    {"name": "DOJ — Berger Pleads Guilty to Unauthorized Removal of Classified Material", "url": "https://www.justice.gov/archive/opa/pr/2005/April/05_crm_155.htm", "date": "2005-04-01"},
    {"name": "NPR — Sandy Berger Pleads Guilty to Taking Documents", "url": "https://www.npr.org/2005/04/01/4571979/sandy-berger-pleads-guilty-to-taking-documents", "date": "2005-04-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;