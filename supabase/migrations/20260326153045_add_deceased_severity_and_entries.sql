/*
  # Add DECEASED Severity Level and Update Enemies of Truth Entries

  1. Changes
    - Update 7 existing subjects to DECEASED severity with surviving family info appended to summary:
      Bernie Madoff, George H.W. Bush, Henry Kissinger, Lyndon B. Johnson,
      Richard Nixon, Ronald Reagan, Silvio Berlusconi, Jacques Chirac
    - Split "Kenneth Lay & Jeffrey Skilling" into two separate entries:
      Kenneth Lay (DECEASED) and Jeffrey Skilling (CRITICAL)
    - Insert 3 new entries: Richard Nixon, Ronald Reagan, Silvio Berlusconi

  2. Security
    - No schema changes; all inserts/updates on existing RLS-enabled table
*/

-- Update BERNIE MADOFF to DECEASED and append surviving family info
UPDATE enemies_of_truth
SET
  severity = 'DECEASED',
  summary = summary || ' ▸ SURVIVING FAMILY: Spouse Ruth Madoff (b. 1941) lives privately in Old Greenwich, Connecticut. Both sons predeceased him — Mark Madoff (d. 2010, suicide) and Andrew Madoff (d. 2014, cancer). Six grandchildren survive, all of whom have changed their surnames and maintain low public profiles.',
  last_updated = NOW()
WHERE name = 'BERNIE MADOFF';

-- Update GEORGE H.W. BUSH to DECEASED and append surviving family info
UPDATE enemies_of_truth
SET
  severity = 'DECEASED',
  summary = summary || ' ▸ SURVIVING FAMILY: Spouse Barbara Bush predeceased him (d. April 2018). Surviving children: George W. Bush (43rd President, founder of the George W. Bush Institute); Jeb Bush (former Florida Governor, founder/chair of ExcelinEd); Neil Bush (businessman, chair of George H.W. Bush Foundation for U.S.-China Relations); Marvin Bush (venture capitalist, managing partner at Winston Partners Group); Dorothy Bush Koch (author, philanthropist, honorary chair of Barbara Bush Foundation for Family Literacy).',
  last_updated = NOW()
WHERE name = 'GEORGE H.W. BUSH';

-- Update HENRY KISSINGER to DECEASED and append surviving family info
UPDATE enemies_of_truth
SET
  severity = 'DECEASED',
  summary = summary || ' ▸ SURVIVING FAMILY: Spouse Nancy Maginnes Kissinger (b. 1934) resides in Connecticut/New York, maintaining a low public profile. Children: Elizabeth Kissinger (b. 1959, private life); David Kissinger (b. 1961, President of Conaco LLC — Conan O''Brien''s production company, executive producer on recent projects).',
  last_updated = NOW()
WHERE name = 'HENRY KISSINGER';

-- Update LYNDON B. JOHNSON to DECEASED and append surviving family info
UPDATE enemies_of_truth
SET
  severity = 'DECEASED',
  summary = summary || ' ▸ SURVIVING FAMILY: Spouse Lady Bird Johnson predeceased the modern era (d. 2007). Surviving daughters: Lynda Bird Johnson Robb (b. 1944, Chair Emerita of Reading is Fundamental, President of National Home Library Foundation, board member of LBJ Foundation); Luci Baines Johnson (b. 1947, businesswoman, Chairman of LBJ Asset Management Partners and BusinessSuites, board member of LBJ Foundation).',
  last_updated = NOW()
WHERE name = 'LYNDON B. JOHNSON';

-- Update JACQUES CHIRAC to DECEASED and append surviving family info
UPDATE enemies_of_truth
SET
  severity = 'DECEASED',
  summary = summary || ' ▸ SURVIVING FAMILY: Spouse Bernadette Chirac (b. 1933) is alive but frail, living privately in Paris; received Officer of the Legion of Honor in January 2026. Surviving daughter: Claude Chirac (b. 1962, communications director at Kering SA luxury group, elected Corrèze departmental councilor in 2021). Daughter Laurence Chirac predeceased him (d. 2016).',
  last_updated = NOW()
WHERE name = 'JACQUES CHIRAC';

-- Split "KENNETH LAY & JEFFREY SKILLING" into two entries
-- First delete the combined entry
DELETE FROM enemies_of_truth WHERE name = 'KENNETH LAY & JEFFREY SKILLING';

-- Insert Kenneth Lay as DECEASED
INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'KENNETH LAY',
  'Former Chairman & CEO of Enron Corporation',
  'Enron Accounting Fraud — Convicted 2006, Died Before Sentencing',
  'DECEASED',
  'Kenneth Lay was Chairman and CEO of Enron Corporation and presided over one of the largest corporate fraud schemes in U.S. history. Lay, along with other Enron executives, systematically deceived investors, the SEC, and the public about Enron''s financial performance through the use of special purpose entities to conceal debt, fraudulent mark-to-market accounting that booked projected future profits as current revenues, and false representations at analyst calls and press conferences. Enron filed for bankruptcy on December 2, 2001 — then the largest corporate bankruptcy in U.S. history — destroying approximately $74 billion in shareholder value and wiping out the retirement savings of thousands of employees. Lay was convicted by a federal jury on May 25, 2006 on all six counts (conspiracy, 2 wire fraud, 3 securities fraud) plus 4 additional bank fraud/false statements counts in a separate bench trial. He died of a heart attack on July 5, 2006, before sentencing; under U.S. law, his conviction was vacated upon death. ▸ SURVIVING FAMILY: Spouse Linda Lay lives privately in Houston. Children: Mark Lay (Managing Director at Freepoint Commodities, energy sector); Elizabeth Lay Vittor (attorney in Castle Rock, Colorado, specializing in business law).',
  '["1999–2001: special purpose entities hid billions in debt; mark-to-market accounting booked projected future profits as current revenue", "Enron Chapter 11 bankruptcy Dec 2, 2001 — then largest in U.S. history; ~$74 billion shareholder value destroyed; thousands of employees lost retirement savings", "Federal jury verdict May 25, 2006: Lay convicted all 6 counts (conspiracy, 2 wire fraud, 3 securities fraud) plus 4 bank fraud/false statements in separate bench trial", "Lay died of heart attack July 5, 2006 before sentencing; conviction vacated by law (abatement ab initio)", "30 additional Enron executives charged; 16 pleaded guilty"]'::jsonb,
  '["CONVICTED — VACATED UPON DEATH", "$74B SHAREHOLDER VALUE DESTROYED", "30 EXECUTIVES CHARGED"]'::jsonb,
  'From approximately 1999–2001, Lay and other executives used special purpose entities to hide billions in debt from Enron''s public financial statements; fraudulent mark-to-market accounting booked projected future profits as current revenue. Enron filed for Chapter 11 bankruptcy December 2, 2001 — then the largest in U.S. history; approximately $74 billion in shareholder value destroyed; thousands of employees lost retirement savings held in company stock. Federal jury verdict May 25, 2006 (S.D. Tex., Judge Sim Lake): Lay convicted on all 6 counts (conspiracy, 2 wire fraud, 3 securities fraud) plus 4 additional bank fraud/false statements counts in separate bench trial. Lay died July 5, 2006 before sentencing; conviction vacated under abatement doctrine.',
  '[{"url": "https://www.justice.gov/archive/opa/pr/2006/May/06_crm_328.html", "date": "2006-05-25", "name": "DOJ — Lay and Skilling Convicted"}, {"url": "https://www.justice.gov/archive/index-enron.html", "date": "2006", "name": "DOJ — Enron Case Archive"}]'::jsonb
);

-- Insert Jeffrey Skilling as CRITICAL
INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JEFFREY SKILLING',
  'Former President & CEO of Enron Corporation',
  'Enron Accounting Fraud — Convicted 2006, Released 2019, Active in Energy Sector',
  'CRITICAL',
  'Jeffrey Skilling served as President and CEO of Enron Corporation and was a central architect of the accounting fraud scheme that destroyed approximately $74 billion in shareholder value when Enron filed for bankruptcy on December 2, 2001 — then the largest corporate bankruptcy in U.S. history. Skilling designed and championed the fraudulent mark-to-market accounting practices that booked projected future profits as current revenues, and used special purpose entities to conceal billions in debt from public financial statements. He was convicted by a federal jury on May 25, 2006 on 19 of 28 counts. Sentenced to 24 years and 4 months with $45 million forfeiture, later resentenced to 14 years after the Supreme Court narrowed the honest services fraud statute. Released from federal prison in February 2019 after serving 12 years. Currently operating in the energy sector.',
  '["1999–2001: championed fraudulent mark-to-market accounting booking projected future profits as current revenue; used special purpose entities to conceal billions in debt", "Enron Chapter 11 bankruptcy Dec 2, 2001 — then largest in U.S. history; ~$74 billion shareholder value destroyed; thousands of employees lost retirement savings", "Federal jury verdict May 25, 2006: Skilling convicted 19 of 28 counts including conspiracy, securities fraud, and insider trading", "Sentence Oct 23, 2006: 24 years 4 months and $45M forfeiture; resentenced 2013 to 14 years after Supreme Court narrowed honest services fraud statute", "Released from federal prison February 2019 after serving 12 years; currently operating in the energy sector", "30 additional Enron executives charged; 16 pleaded guilty"]'::jsonb,
  '["CONVICTED — CONSPIRACY & SECURITIES FRAUD", "RELEASED 2019", "$74B SHAREHOLDER VALUE DESTROYED"]'::jsonb,
  'From approximately 1999–2001, Skilling and other executives used special purpose entities to hide billions in debt from Enron''s public financial statements; fraudulent mark-to-market accounting booked projected future profits as current revenue. Enron filed for Chapter 11 bankruptcy December 2, 2001 — then the largest in U.S. history; approximately $74 billion in shareholder value destroyed; thousands of employees lost retirement savings held in company stock. Federal jury verdict May 25, 2006 (S.D. Tex., Judge Sim Lake): Skilling convicted on 19 of 28 counts. Sentenced October 23, 2006 to 24 years 4 months and $45 million forfeiture; resentenced 2013 to 168 months after Supreme Court narrowed honest services fraud statute in Skilling v. United States (2010). Released February 2019.',
  '[{"url": "https://www.justice.gov/archive/opa/pr/2006/May/06_crm_328.html", "date": "2006-05-25", "name": "DOJ — Lay and Skilling Convicted"}, {"url": "https://www.justice.gov/archive/opa/pr/2006/October/06_crm_723.html", "date": "2006-10-23", "name": "DOJ — Skilling Sentenced to More Than 24 Years"}, {"url": "https://www.justice.gov/criminal/criminal-vns/case/united-states-v-jeffrey-k-skilling", "date": "2013", "name": "DOJ — U.S. v. Skilling Resentencing"}, {"url": "https://www.justice.gov/archive/index-enron.html", "date": "2006", "name": "DOJ — Enron Case Archive"}]'::jsonb
);

-- Insert RICHARD NIXON as DECEASED
INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RICHARD NIXON',
  'Former President of the United States (1969–1974)',
  'Watergate Cover-Up — Only President to Resign from Office',
  'DECEASED',
  'Richard Nixon became the only U.S. President to resign from office on August 9, 1974, following the revelation — through White House tape recordings — that he had directed the cover-up of the June 17, 1972 break-in at the Democratic National Committee headquarters at the Watergate complex. The Nixon administration''s obstruction of justice included directing the CIA to impede the FBI''s investigation, paying hush money to the Watergate burglars, and orchestrating the firing of Watergate Special Prosecutor Archibald Cox in the "Saturday Night Massacre" of October 20, 1973. The House Judiciary Committee approved three articles of impeachment — obstruction of justice, abuse of power, and contempt of Congress — before Nixon''s resignation rendered further proceedings moot. President Ford granted Nixon a full pardon on September 8, 1974. The Watergate grand jury named Nixon an unindicted co-conspirator. Separately, Nixon''s 1972 campaign committee engaged in illegal wiretapping, sabotage, and dirty tricks against political opponents, financed by illegal corporate contributions and unreported cash. ▸ SURVIVING FAMILY: Spouse Pat Nixon predeceased him (d. June 1993). Surviving daughters: Tricia Nixon Cox (board member, Richard Nixon Foundation); Julie Nixon Eisenhower (author, board member, Richard Nixon Foundation). Both active in preserving the Nixon legacy.',
  '["House Judiciary Committee June–July 1974: approved 3 articles of impeachment — obstruction of justice (27–11), abuse of power (28–10), contempt of Congress (21–17)", "White House tape of June 23, 1972 (''Smoking Gun'' tape) recorded Nixon directing CIA to obstruct FBI Watergate investigation — released Aug 5, 1974", "Saturday Night Massacre (Oct 20, 1973): Nixon fired Special Prosecutor Cox after Cox subpoenaed tapes; AG Richardson and Deputy AG Ruckelshaus resigned rather than comply", "Watergate grand jury named Nixon an unindicted co-conspirator (March 1, 1974) — name withheld at Special Prosecutor''s request", "Nixon accepted full pardon from President Ford (Sept 8, 1974) — covered all federal crimes committed while president", "Campaign Finance: CREEP raised illegal corporate contributions totaling $60M+; hush money payments to Watergate burglars totaling approximately $1 million"]'::jsonb,
  '["RESIGNED — ONLY PRESIDENT TO DO SO", "UNINDICTED CO-CONSPIRATOR", "PARDONED BY FORD"]'::jsonb,
  'House Judiciary Committee Articles of Impeachment (July 1974): Article I obstruction of justice (27–11), Article II abuse of power (28–10), Article III contempt of Congress (21–17). White House tape of June 23, 1972 — the "Smoking Gun" tape — recording Nixon directing CIA Director Walters to tell FBI Deputy Director Gray to halt the Watergate investigation; released August 5, 1974, triggering Nixon''s resignation announcement August 8, 1974. The "Saturday Night Massacre" (October 20, 1973) in which Nixon fired Special Prosecutor Archibald Cox after Cox subpoenaed the White House tapes; Attorney General Richardson and Deputy AG Ruckelshaus resigned rather than comply with the order. Watergate grand jury naming Nixon an unindicted co-conspirator (March 1, 1974) — name withheld at request of Special Prosecutor Leon Jaworski. Presidential Proclamation 4311 (September 8, 1974) by which President Ford granted Nixon a full, free, and absolute pardon covering all offenses against the United States committed during his presidency.',
  '[{"url": "https://www.govinfo.gov/content/pkg/GPO-WATERGATE/pdf/GPO-WATERGATE.pdf", "date": "1974", "name": "Senate Watergate Committee Final Report"}, {"url": "https://www.archives.gov/research/investigations/watergate/nixon-tape-transcripts", "date": "1974", "name": "National Archives — Nixon Tape Transcripts"}, {"url": "https://www.govinfo.gov/content/pkg/STATUTE-88/pdf/STATUTE-88-Pg1695-2.pdf", "date": "1974-09-08", "name": "Presidential Proclamation 4311 — Ford Pardon of Nixon"}, {"url": "https://watergate.info/impeachment/articles-of-impeachment", "date": "1974-07", "name": "House Judiciary Committee — Articles of Impeachment"}, {"url": "https://www.nixonlibrary.gov/", "date": "1974", "name": "Richard Nixon Presidential Library — Watergate Documents"}]'::jsonb
);

-- Insert RONALD REAGAN as DECEASED
INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'RONALD REAGAN',
  'Former President of the United States (1981–1989)',
  'Iran-Contra Affair — Arms for Hostages, Contra Funding, Tower Commission Findings',
  'DECEASED',
  'The Reagan administration secretly sold weapons to Iran — subject to a U.S. arms embargo — in exchange for assistance in securing the release of American hostages held in Lebanon, then illegally diverted the proceeds to fund Contra rebels in Nicaragua in violation of the Boland Amendment, which explicitly prohibited U.S. government agencies from providing such assistance. The Tower Commission (February 26, 1987), appointed by Reagan himself, found that Reagan''s management style created an environment in which his subordinates felt free to proceed without authorization and that Reagan "did not seem to be aware of the way in which the operation was implemented." The independent counsel''s investigation resulted in 14 individuals being charged; 11 were convicted. Reagan testified he had no recollection of authorizing the diversion. The sale of arms to Iran was confirmed in Reagan''s own diary; Congressional Iran-Contra committees found the administration''s actions violated the National Security Act, the Arms Export Control Act, and the Boland Amendment. ▸ SURVIVING FAMILY: Spouse Nancy Reagan predeceased the modern era (d. March 2016). Surviving children: Patti Davis (author and Alzheimer''s advocate, founder of Beyond Alzheimer''s at UCLA); Ron Reagan (political commentator and broadcaster).',
  '["Tower Commission (Feb 26, 1987): found Reagan ''did not seem to be aware of the way in which the operation was implemented'' — created permissive management environment", "Arms-for-hostages: U.S. sold 2,000+ TOW missiles and HAWK spare parts to Iran; Reagan''s own diary confirmed the sales", "Diversion: Lt. Col. Oliver North diverted approximately $12 million in Iran arms sale proceeds to Contra rebels via Swiss bank accounts — in violation of Boland Amendment", "Reagan''s January 17, 1986 Finding authorized arms transfers to Iran; kept from Congressional intelligence committees in violation of National Security Act reporting requirements", "Congressional Iran-Contra committees (Nov 1987): administration violated Boland Amendment, Arms Export Control Act, and National Security Act; found ''disdain for law''", "14 individuals charged; 11 convictions including Poindexter, North, McFarlane, Weinberger (pardoned); North''s conviction later overturned on appeal"]'::jsonb,
  '["ARMS-FOR-HOSTAGES CONFIRMED BY OWN DIARY", "BOLAND AMENDMENT VIOLATED", "14 CHARGED / 11 CONVICTED"]'::jsonb,
  'Tower Commission Report (February 26, 1987): independent review board appointed by Reagan found his management style allowed subordinates to act without authorization; Reagan "did not seem to be aware" of implementation details. Reagan''s personal diary entries confirming arms sales to Iran. January 17, 1986 Presidential Finding authorizing arms transfers to Iran, withheld from Congressional intelligence committees in violation of National Security Act reporting requirements. Oliver North''s memoranda documenting the diversion of approximately $12 million in Iran arms sale proceeds to Contra rebels via Swiss bank accounts. Congressional Iran-Contra committees joint report (November 1987) finding the administration violated the Boland Amendment, Arms Export Control Act, and National Security Act, and exhibited "disdain for law." Independent Counsel Lawrence Walsh''s investigation resulting in 14 individuals charged; 11 convictions.',
  '[{"url": "https://nsarchive2.gwu.edu/NSAEBB/NSAEBB210/index.htm", "date": "1987-02-26", "name": "National Security Archive — Tower Commission Report"}, {"url": "https://www.govinfo.gov/content/pkg/GPO-IRANCONTRA/pdf/GPO-IRANCONTRA.pdf", "date": "1987-11", "name": "Congressional Iran-Contra Report (Joint Committees)"}, {"url": "https://irp.fas.org/offdocs/walsh/", "date": "1993", "name": "Walsh Independent Counsel Final Report"}, {"url": "https://www.reaganlibrary.gov/reagans/ronald-reagan/iran-contra-affair", "date": "1987", "name": "Reagan Presidential Library — Iran-Contra Affair Documents"}]'::jsonb
);

-- Insert SILVIO BERLUSCONI as DECEASED
INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'SILVIO BERLUSCONI',
  'Former Prime Minister of Italy (1994–1995, 2001–2006, 2008–2011)',
  'Tax Fraud Conviction, Bunga Bunga Trials, Media Monopoly & Political Conflicts of Interest',
  'DECEASED',
  'Silvio Berlusconi served as Prime Minister of Italy three times while simultaneously controlling Italy''s three largest private television networks (Mediaset/Fininvest), creating an unprecedented conflict of interest between political power and media dominance. In 2013, the Italian Supreme Court (Corte di Cassazione) upheld a final conviction for tax fraud related to inflated film rights purchases through Mediaset, resulting in a four-year sentence (reduced to one year under statute of limitations) and a five-year ban from public office. Italian courts also convicted him in 2015 of paying for sex with an underage girl (the "Ruby Rubacuori" prostitution case) — a conviction later overturned on appeal. He faced trial in a third "Ruby" case (Ruby Ter) for alleged witness tampering and corruption of judicial witnesses, proceedings that were ongoing at the time of his death. The Council of Europe and EU institutions repeatedly flagged his media ownership as incompatible with democratic governance norms. Berlusconi died on June 12, 2023. ▸ SURVIVING FAMILY: Both ex-wives Carla Elvira Dall''Oglio and Veronica Lario are alive. All five children survive and control the family empire: Marina Berlusconi (Chairwoman of Fininvest and Arnoldo Mondadori Editore); Pier Silvio Berlusconi (Chairman/CEO of MFE-MediaForEurope); Barbara Berlusconi (Fininvest board advisor); Eleonora Berlusconi (entrepreneur); Luigi Berlusconi (Fininvest heir and executive).',
  '["Corte di Cassazione (Aug 1, 2013): upheld final conviction for tax fraud via Mediaset inflated film rights purchases; 4-year sentence reduced to 1 year; 5-year public office ban upheld", "Senate vote Oct 27, 2013: Berlusconi expelled from Italian Senate under Severino Law (the first such expulsion in Republican history) based on the 2013 tax fraud conviction", "Ruby Rubacuori: convicted 2015 of paying for sex with then-17-year-old Karima El Mahroug; conviction overturned on appeal 2015; Supreme Court acquittal 2022", "Ruby Ter: third Berlusconi trial for alleged witness corruption and bribery of judicial witnesses — ongoing at time of death (June 12, 2023)", "Fininvest/Mediaset conflict: simultaneously controlled Italy''s 3 largest private TV networks while serving as PM — European Court of Human Rights ruled Italy violated media pluralism obligations", "Passed multiple laws while PM that critics documented directly benefited his personal legal defense or business interests (''tailor-made'' or ''Berlusconi-leggi'' legislation)"]'::jsonb,
  '["CONVICTED — TAX FRAUD (FINAL, 2013)", "EXPELLED FROM SENATE 2013", "RUBY TER TRIAL PENDING AT DEATH"]'::jsonb,
  'Corte di Cassazione (August 1, 2013) upholding final conviction for tax fraud via inflated Mediaset film rights purchases; four-year sentence reduced to one year under statute of limitations; five-year public office ban upheld. Italian Senate vote October 27, 2013 expelling Berlusconi from the Senate under the Severino Law — the first such expulsion in Italian Republican history — based on the 2013 conviction. Ruby Rubacuori trial: conviction in February 2015 for paying for sex with a minor; acquitted on appeal in July 2015; Italian Supreme Court issued final acquittal in 2022. Ruby Ter proceedings: third set of prosecutions for alleged corruption of judicial witnesses and witness tampering in the Ruby cases, still pending at time of death. Council of Europe and Venice Commission reports documenting structural conflicts between Berlusconi''s media ownership and his political role as incompatible with democratic governance standards.',
  '[{"url": "https://www.reuters.com/article/italy-berlusconi-conviction/italys-top-court-confirms-berlusconi-guilty-of-tax-fraud-idUSL6N0FH4R020130801", "date": "2013-08-01", "name": "Reuters — Italy''s Top Court Confirms Berlusconi Guilty of Tax Fraud"}, {"url": "https://www.bbc.com/news/world-europe-24701219", "date": "2013-10-27", "name": "BBC — Italy Senate Votes to Expel Berlusconi"}, {"url": "https://www.coe.int/en/web/portal/-/council-of-europe-concerned-about-media-ownership-in-italy", "date": "2005", "name": "Council of Europe — Media Ownership in Italy Concerns"}, {"url": "https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD(2005)017-e", "date": "2005", "name": "Venice Commission — Report on Italy''s Conflicts of Interest Legislation"}]'::jsonb
);
