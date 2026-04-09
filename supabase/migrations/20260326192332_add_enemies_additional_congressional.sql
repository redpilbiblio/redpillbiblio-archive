/*
  # Add Additional Congressional Entries: Reynolds, Grimm, Renzi

  1. New Entries
    - `Mel Reynolds` — Sexual assault of minor, statutory rape, bank fraud; state + federal convictions; Clinton commuted federal sentence. Severity: CRITICAL.
    - `Michael Grimm` — Tax fraud, perjury, illegal workers; 8 months prison; pardoned. Severity: HIGH.
    - `Rick Renzi` — 17 felonies including extortion, bribery, racketeering; 36 months prison; pardoned. Severity: CRITICAL.

  2. Notes
    - Reynolds involved sexual abuse of minor; had multiple convictions
    - Grimm had restaurant tax fraud scheme
    - Renzi used federal position for personal profit; largest congressional extortion case
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'MEL REYNOLDS',
  'Former U.S. Representative, Illinois',
  'Criminal Conviction for Sexual Assault of a Minor, Statutory Rape, and Bank Fraud; Clinton Commuted Sentence',
  'CRITICAL',
  'Mel Reynolds served as U.S. Representative for Illinois'' 2nd Congressional District from 1993 to 1995. In 1995, a Cook County jury convicted him on 12 counts including criminal sexual abuse of a 16-year-old campaign volunteer, statutory rape, solicitation of child pornography, and obstruction of justice. He was sentenced to five years in state prison. While serving his state sentence, he was convicted by a separate federal jury in 1997 on 12 additional counts of bank fraud and campaign finance violations, receiving a 78-month federal sentence. President Clinton commuted the federal sentence in January 2001. Reynolds was arrested again in 2015 for failure to file tax returns, pleading guilty and receiving a six-month sentence.',
  '[
    "Convicted by Cook County jury on 12 counts including criminal sexual abuse of a 16-year-old campaign volunteer, statutory rape, solicitation of child pornography, and obstruction of justice (1995)",
    "Sentenced to five years in Illinois state prison",
    "Convicted by federal jury on 12 counts of bank fraud and campaign finance violations while serving state sentence (1997)",
    "Received 78-month additional federal sentence",
    "President Clinton commuted the federal sentence in January 2001",
    "Resigned from Congress October 1, 1995, following state conviction",
    "Arrested again in 2015 for failure to file federal tax returns; pleaded guilty; sentenced to six months"
  ]'::jsonb,
  '[
    "SEXUAL ASSAULT OF MINOR",
    "STATUTORY RAPE CONVICTION",
    "BANK FRAUD CONVICTION",
    "MULTIPLE INCARCERATIONS"
  ]'::jsonb,
  E'Mel Reynolds served as U.S. Representative for Illinois'' 2nd Congressional District from 1993 to 1995.\n\n1995 STATE CONVICTION:\nA Cook County jury convicted Reynolds on 12 counts:\n- Criminal sexual abuse of a 16-year-old campaign volunteer\n- Statutory rape\n- Solicitation of child pornography\n- Obstruction of justice\n\nState Sentence: Five years in Illinois state prison.\n\n1997 FEDERAL CONVICTION:\nWhile serving his state sentence, Reynolds was convicted by a separate federal jury on 12 additional counts:\n- Bank fraud\n- Campaign finance violations\n\nFederal Sentence: 78 months (6.5 years) in federal prison.\n\nCLINTON COMMUTATION:\nPresident Bill Clinton commuted the federal sentence in January 2001.\n\nRESIGNATION:\nReynolds resigned from Congress on October 1, 1995, following his state conviction.\n\n2015 TAX EVASION:\nReynolds was arrested again in 2015 for failure to file federal income tax returns.\nHe pleaded guilty and was sentenced to six months in prison.\n\nCurrent Profession: No stable known occupation; as of early 2026 reportedly facing new federal arraignment on charges of failure to file income tax returns. Released to halfway house November 2018 after prior incarceration; planned to relocate to South Africa but as of 2019 remained in Chicago area.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Chicago, IL area.',
  '[
    {"name": "CNN — Reynolds Indictment Report", "url": "https://www.cnn.com/US/9611/07/reynolds.indict/", "date": "1996-11-07"},
    {"name": "U.S. Department of Justice — Reynolds Federal Conviction Press Release", "url": "https://www.justice.gov", "date": "1997-01-01"},
    {"name": "Ballotpedia — Mel Reynolds", "url": "https://ballotpedia.org/Mel_Reynolds", "date": "2024-01-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'MICHAEL GRIMM',
  'Former U.S. Representative, New York',
  'Tax Fraud, Perjury, and Employment of Undocumented Workers; 8 Months Federal Prison; Pardoned',
  'HIGH',
  'Michael Grimm served as U.S. Representative for New York''s 11th Congressional District (Staten Island) from 2011 to 2015. On April 28, 2014, a federal grand jury indicted him on 20 counts related to a Manhattan restaurant he owned called Healthalicious. He had underreported more than $1 million in wages and receipts from the restaurant, paid workers in cash under the table to evade payroll taxes, filed false documents with federal and state tax authorities, and caused federal and New York State tax losses of $80,000 to $200,000. He also admitted to committing perjury in a civil lawsuit and knowingly employing workers ineligible to work in the United States. On December 23, 2014, Grimm pleaded guilty to one count of felony tax fraud and resigned from Congress on January 5, 2015. He was sentenced to eight months in federal prison. Trump granted Grimm a full pardon on May 28, 2025.',
  '[
    "Indicted on 20 counts in Eastern District of New York (Case No. 14-CR-248) including mail fraud, wire fraud, health care fraud, filing false tax returns, perjury, and hiring illegal workers",
    "Underreported more than $1 million in wages and receipts from Healthalicious restaurant",
    "Paid restaurant workers in cash to evade payroll taxes",
    "Filed false documents with federal and state tax authorities",
    "Admitted to perjury in a civil lawsuit",
    "Knowingly employed workers ineligible to work in the United States",
    "Pleaded guilty December 23, 2014 to felony tax fraud",
    "Sentenced to 8 months in federal prison plus 200 hours community service",
    "Full presidential pardon granted May 28, 2025"
  ]'::jsonb,
  '[
    "RESTAURANT TAX FRAUD",
    "PERJURY ADMISSION",
    "ILLEGAL WORKERS",
    "PARDONED BY TRUMP"
  ]'::jsonb,
  E'Michael Grimm served as U.S. Representative for New York''s 11th Congressional District (Staten Island) from 2011 to 2015.\n\nRESTAURANT FRAUD SCHEME:\nGrimm owned a Manhattan restaurant called Healthalicious.\n\nTAX EVASION:\nHe underreported more than $1 million in wages and receipts from the restaurant.\nPaid restaurant workers in cash under the table to evade payroll taxes.\nFiled false documents with:\n- Federal tax authorities\n- New York State tax authorities\n\nTax Impact:\nHe caused federal and New York State tax losses of $80,000 to $200,000.\n\nPERJURY:\nAdmitted to committing perjury in a civil lawsuit.\n\nILLEGAL WORKERS:\nKnowingly employed workers ineligible to work in the United States.\n\nFEDERAL INDICTMENT:\nApril 28, 2014: Federal grand jury indicted Grimm on 20 counts\n- Mail fraud\n- Wire fraud\n- Health care fraud\n- Filing false tax returns\n- Perjury\n- Hiring illegal workers\n- Case No. 14-CR-248, Eastern District of New York\n\nGUILTY PLEA:\nDecember 23, 2014: Pleaded guilty to one count of felony tax fraud.\n\nCONGRESSIONAL RESIGNATION:\nJanuary 5, 2015: Resigned from Congress.\n\nSENTENCE:\nEight months in federal prison plus 200 hours of community service.\n\nPARDON:\nFull presidential pardon granted by President Trump on May 28, 2025.\n\nCurrent Profession: Political commentator for Newsmax (right-leaning TV network); active social media presence supporting Trump. Pardoned by Trump May 28, 2025. In September 2024, suffered a horseback-riding accident leaving him paralyzed from chest down; a GoFundMe raised ~$729,000 by December 2024.\nApproximate Net Worth: Not publicly documented at current levels (~$330,000 per 2013 congressional disclosure; substantially reduced by legal fees).\nCurrent Residence: Staten Island, NY.',
  '[
    {"name": "DOJ — Former Congressman Michael Grimm Sentenced to Eight Months for Tax Fraud", "url": "https://www.justice.gov/usao-edny/pr/former-united-states-congressman-michael-grimm-sentenced-eight-months-tax-fraud", "date": "2015-07-17"},
    {"name": "DOJ — Congressman Michael Grimm Indicted", "url": "https://www.justice.gov/usao-edny/pr/congressman-michael-grimm-indicted-mail-wire-and-health-care-fraud-filing-false-tax", "date": "2014-04-28"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RICK RENZI',
  'Former U.S. Representative, Arizona',
  'Convicted of 17 Felonies Including Extortion, Bribery, Racketeering, and Money Laundering; 36 Months Prison; Pardoned',
  'CRITICAL',
  'Rick Renzi served as U.S. Representative for Arizona''s 1st Congressional District from 2003 to 2009. While in Congress, he used his legislative influence to personally profit from a federal land exchange by threatening proponents of a copper mine land deal that he would not support the exchange unless they purchased property owned by his business partner James Sandlin — to whom Renzi was owed $700,000. Renzi received $733,000 from Sandlin after the deal closed. Separately, from 2001 to 2003, Renzi diverted clients'' insurance premiums to fund his first congressional campaign, then lied to state insurance regulators. On June 11, 2013, a federal jury convicted him on 17 of 32 felony counts including conspiracy, honest services wire fraud, extortion under color of official right, racketeering, money laundering, and making false statements. The conviction was affirmed by the 9th Circuit Court of Appeals on October 9, 2014. He was sentenced to 36 months in federal prison. President Trump pardoned Renzi in January 2021.',
  '[
    "Convicted by federal jury on 17 of 32 felony counts (June 11, 2013)",
    "Used congressional position to extort parties in a federal land exchange for personal profit",
    "Threatened to block copper mine land deal unless buyers purchased his business partner''s property",
    "Received $733,000 from business partner James Sandlin after the coerced land purchase",
    "Diverted insurance clients'' premiums to fund his first congressional campaign (2001–2003)",
    "Made false statements to Arizona state insurance regulators",
    "Convicted of conspiracy, honest services wire fraud, extortion under color of official right, racketeering, money laundering",
    "9th Circuit affirmed conviction October 9, 2014 (Case No. 13-10588)",
    "Sentenced to 36 months in federal prison",
    "Pardoned by President Trump in January 2021"
  ]'::jsonb,
  '[
    "CONGRESSIONAL EXTORTION",
    "17 FELONY CONVICTIONS",
    "RACKETEERING",
    "PARDONED BY TRUMP"
  ]'::jsonb,
  E'Rick Renzi served as U.S. Representative for Arizona''s 1st Congressional District from 2003 to 2009.\n\nCOPPER MINE LAND DEAL EXTORTION:\nRenzi used his legislative influence to personally profit from a federal land exchange.\n\nEXTORTION SCHEME:\nHe threatened proponents of a copper mine land deal with opposition unless they purchased property owned by his business partner James Sandlin.\nRenzi was owed $700,000 by Sandlin.\n\nFRESH MONEY:\nAfter the coerced land purchase:\n- Renzi received $733,000 from Sandlin\n- This allowed Renzi to resolve his $700,000 debt\n\nINSURANCE FRAUD:\nFrom 2001 to 2003, Renzi:\n- Diverted insurance clients'' premiums to fund his first congressional campaign\n- Later lied to Arizona state insurance regulators about these diversions\n\nFEDERAL TRIAL:\nJune 11, 2013: Federal jury convicted Renzi on 17 of 32 felony counts:\n- Conspiracy\n- Honest services wire fraud\n- Extortion under color of official right\n- Racketeering\n- Money laundering\n- Making false statements\n\nAPPEAL:\n9th Circuit Court of Appeals affirmed the conviction on October 9, 2014 (Case No. 13-10588).\n\nSENTENCE:\n36 months (3 years) in federal prison.\n\nReleased from federal prison: January 6, 2017 (served full 3-year sentence).\n\nPARDON:\nFull presidential pardon granted by President Trump on January 20, 2021.\n\nCurrent Profession: No publicly known occupation. Former U.S. Representative (AZ-1). Released from federal prison January 6, 2017 (served 3 years of 3-year sentence). Granted full presidential pardon by Trump on January 20, 2021.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Arizona (presumed; last known).',
  '[
    {"name": "DOJ — Former Congressman Richard G. Renzi Sentenced for Extortion and Bribery", "url": "https://www.justice.gov/archives/opa/pr/former-congressman-richard-g-renzi-sentenced-extortion-and-bribery-illegal-federal-land-swap", "date": "2013-10-28"},
    {"name": "U.S. Court of Appeals, Ninth Circuit — Opinion, Case No. 13-10588", "url": "https://cdn.ca9.uscourts.gov/datastore/opinions/2014/10/09/13-10588.pdf", "date": "2014-10-09"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;