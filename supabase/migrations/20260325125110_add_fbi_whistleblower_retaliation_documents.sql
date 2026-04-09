/*
  # Add FBI Whistleblower Retaliation Documentation

  1. New Documents
    - Garret O'Boyle Congressional Testimony (May 2023)
    - Bank of America Warrantless Surveillance Disclosure
    - FBI Retaliation Against Agent O'Boyle
    - MSPB Jurisdiction Ruling
    - Grassley Settlement for 10 FBI Whistleblowers
    - Marcus Allen 27-Month Suspension Case
    - FBI Surveillance of School Board Parents

  2. Pillars
    - Surveillance & Intelligence (warrantless data collection)
    - Elections & Democracy (political weaponization)

  3. Notes
    - All items sourced from official congressional records, court filings
    - Documents FBI retaliation against employees who reported internal abuses
    - Part of House Judiciary Committee Weaponization Subcommittee hearings
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata)
VALUES
  (
    'FBI Agent Garret O''Boyle Congressional Testimony on FBI Weaponization',
    'FBI Special Agent testified before House Judiciary Committee on systematic political weaponization of the FBI, including classifying all January 6 cases as domestic terrorism despite most being resolved as misdemeanors.',
    'Garret O''Boyle, FBI Special Agent who served in the US Army before joining law enforcement and the FBI, testified before the House Judiciary Committee''s Select Subcommittee on the Weaponization of the Federal Government on May 18, 2023. He was one of three FBI employees (alongside Marcus Allen and Steve Friend) who testified under oath about systematic political weaponization of the FBI against American citizens, conservative employees, gun owners, parents at school board meetings, and January 6 defendants. O''Boyle testified that the FBI classified "every single January 6th case as a domestic terrorism case" despite hundreds being resolved as misdemeanors like trespassing. He held a "reasonable belief" the FBI was "padding statistics" in favor of one political party. His closing declaration: "I never swore an oath to the FBI. I swore my oath to the Constitution."',
    'https://judiciary.house.gov',
    'primary',
    'Congressional Testimony',
    '2023-05-18',
    'fbi-oboyle-testimony-weaponization-2023',
    '{"pillar": "Surveillance & Intelligence", "witnesses": ["Garret O''Boyle", "Marcus Allen", "Steve Friend"], "committee": "House Judiciary Committee Select Subcommittee on Weaponization of Federal Government"}'::jsonb
  ),
  (
    'Bank of America Warrantless Customer Data Transfer to FBI',
    'Revelation that Bank of America voluntarily handed over customer financial records to FBI without warrant or subpoena, flagging firearms purchasers.',
    'Retired FBI Supervisory Intelligence Analyst George Hill submitted written testimony confirming that Bank of America voluntarily handed over customer financial records to the FBI''s Washington Field Office with no legal process - no warrant, no subpoena. The records identified customers who made debit or credit card transactions between January 5-7, 2021. Those who had previously purchased firearms were elevated to the top of the list. Rep. Thomas Massie (R-KY) later produced an email confirming the FBI provided search queries to Bank of America and received data in return without any court order. No criminal referrals have been made against Bank of America executives for this warrantless surveillance.',
    'https://judiciary.house.gov',
    'primary',
    'Congressional Testimony',
    '2023-05-18',
    'bank-of-america-warrantless-fbi-data-transfer',
    '{"pillar": "Surveillance & Intelligence", "institutions": ["Bank of America", "FBI"], "type": "Warrantless Surveillance"}'::jsonb
  ),
  (
    'FBI Retaliation Against Agent O''Boyle: Family Left Homeless',
    'Documentation of FBI retaliatory actions that left whistleblower O''Boyle''s family homeless after he was suspended on his first day at a new assignment.',
    'After O''Boyle was selected for a new specialty unit in the Quantico region, his family sold their home and moved across the country. On his first day reporting for duty, he was promptly suspended. The FBI then refused to release his family''s household goods, including their children''s clothes, for weeks. His security clearance was suspended based on a letter that did not identify the source or basis for the allegations. He was placed on indefinite unpaid administrative leave beginning January 1, 2023. He and his family were effectively rendered homeless and financially destroyed. The timing suggests the suspension was planned in advance of his arrival.',
    'https://judiciary.house.gov',
    'primary',
    'Whistleblower Retaliation',
    '2023-05-18',
    'fbi-retaliation-oboyle-family-homeless',
    '{"pillar": "Elections & Democracy", "retaliation_type": "Employment termination, financial destruction", "due_process_violation": true}'::jsonb
  ),
  (
    'MSPB Rules No Jurisdiction Over FBI Security Clearance Retaliation',
    'Merit Systems Protection Board ruled it lacks jurisdiction to examine whether FBI security clearance suspensions were retaliatory whistleblower punishment.',
    'The Merit Systems Protection Board (MSPB) ruled it lacked jurisdiction to examine whether O''Boyle''s security clearance suspension was retaliatory. O''Boyle, represented by the American Center for Law and Justice (ACLJ), appealed - arguing the MSPB''s refusal to examine whistleblower retaliation in the context of security clearance revocations violates the First, Fifth, and Fourteenth Amendments. The case (No. 25-1404) was filed at the Federal Circuit Court of Appeals in July 2025. This ruling means the FBI can weaponize the clearance process against any employee with no judicial check unless Congress or a higher court intervenes.',
    'https://aclj.org',
    'primary',
    'Legal Ruling',
    '2025-07-01',
    'mspb-no-jurisdiction-fbi-clearance-retaliation',
    '{"pillar": "Elections & Democracy", "case_number": "25-1404", "court": "Federal Circuit Court of Appeals", "constitutional_issues": ["First Amendment", "Fifth Amendment", "Fourteenth Amendment"]}'::jsonb
  ),
  (
    'Senator Grassley Mediates Settlement for 10 FBI Whistleblowers',
    'Senate Judiciary Committee Chairman Chuck Grassley mediated settlements for 10 FBI whistleblowers after 12+ combined years of unwarranted suspension.',
    'In August 2025, after years of legal battles and over 12 combined years of unwarranted suspension time across all cases, 10 FBI whistleblowers - including O''Boyle, Steve Friend, and Marcus Allen - reached settlement agreements with the FBI, mediated by Senate Judiciary Committee Chairman Chuck Grassley (R-Iowa). Key terms: All agreements included lump sum payments for damages. Four required full back pay restoration under the Back Pay Act, including interest, restored leave, and replaced retirement contributions. Three agents were reinstated to active FBI duty - including O''Boyle, Steve Friend, and Zachery Schoffstall. None required resignations as a condition. Steve Friend was subsequently fired again in December 2025 for "unauthorized media interactions." Not a single senior FBI official responsible for the retaliation campaign was publicly disciplined, charged, or removed.',
    'https://grassley.senate.gov',
    'primary',
    'Settlement',
    '2025-08-25',
    'grassley-fbi-whistleblower-settlement-2025',
    '{"pillar": "Elections & Democracy", "whistleblowers_count": 10, "combined_suspension_years": 12, "accountability": "None for senior officials"}'::jsonb
  ),
  (
    'Marcus Allen: 27-Month Suspension for Forwarding News Articles',
    'FBI Staff Operations Specialist suspended for 27 months for forwarding news articles questioning January 6 narrative, characterized as promoting conspiratorial views.',
    'Marcus Allen, FBI Staff Operations Specialist in Charlotte, was suspended for 27 months, had his security clearance revoked, received no pay, and was forced to raid retirement accounts. His offense: forwarding news articles that questioned the January 6 official narrative, which the FBI characterized as "promoting conspiratorial views." He testified before the House Judiciary Committee on May 18, 2023, while still suspended. His case was resolved in the August 2025 Grassley-mediated settlement.',
    'https://judiciary.house.gov',
    'primary',
    'Whistleblower Retaliation',
    '2023-05-18',
    'marcus-allen-27-month-suspension-news-articles',
    '{"pillar": "Elections & Democracy", "suspension_months": 27, "offense": "Forwarding news articles", "FBI_characterization": "Promoting conspiratorial views"}'::jsonb
  ),
  (
    'FBI Surveillance of Parents at School Board Meetings',
    'FBI whistleblowers revealed Bureau surveillance operations targeting parents who voiced concerns at local school board meetings.',
    'FBI whistleblowers testified the FBI conducted surveillance operations targeting parents who voiced concerns at local school board meetings, following a controversial October 2021 memo from Attorney General Merrick Garland directing law enforcement agencies to address "threats" at school board meetings. Parents exercising their First Amendment rights were subjected to federal monitoring for expressing opinions about curriculum, masks, and other school policies. This domestic surveillance program was disclosed during the May 18, 2023 House Judiciary Committee hearing on FBI weaponization.',
    'https://judiciary.house.gov',
    'primary',
    'Surveillance Program',
    '2023-05-18',
    'fbi-surveillance-school-board-parents',
    '{"pillar": "Surveillance & Intelligence", "target": "Parents at school board meetings", "authorization": "AG Merrick Garland memo October 2021"}'::jsonb
  )
ON CONFLICT (slug) DO NOTHING;
