/*
  # Add Tier 2, 3, and Pattern Evidence Items

  Adds the remaining high-value evidence across all tiers
*/

-- TIER 2 ITEMS

INSERT INTO documents (title, slug, description, content, document_type, date_published, verification_tier, metadata) VALUES

-- NODE 6: Patriot Act
(
  'The Patriot Act — How 9/11 Built the Surveillance State',
  'patriot-act-surveillance-state',
  '45 days to pass the most sweeping surveillance legislation in history. 342 pages. Senate: 98–1. One no vote: Russ Feingold. Most hadn''t read it. Its architect was hired 4 months before 9/11.',
  E'# The Patriot Act (2001–Present)\n\n## Summary\n45 days. 342-page bill. Senate 98–1. One senator voted no: Russ Feingold. Most hadn''t read it. The architect was hired 4 months before 9/11.\n\n## The Evidence\n• Passed 98–1 (Senate), 357–66 (House) — 45 days post-9/11\n• Architect Viet Dinh hired May 2001 — 4 months pre-9/11\n• Section 215: NSA bulk phone metadata (Snowden); ruled illegal\n• NSLs: 200,000 issued 2003–2006, all gagged\n• Sneak-and-peek: 76% used for drugs, not terrorism\n\n## The Red Pill\nThey didn''t write 342 pages in 45 days. The wishlist was ready. One senator voted no. Twenty-five years later, surveillance is permanent.\n\n## Sources\nACLU. "Surveillance Under the Patriot Act." 2023.\nDOJ OIG. "FBI Use of NSLs." 2007.',
  'Legislative Analysis / Policy',
  '2001-10-26',
  'verified',
  jsonb_build_object('category', 'War & Intelligence', 'pillar', 'War & Intelligence', 'years', '2001–Present', 'importance', 'PURE_GOLD', 'tags', ARRAY['Patriot Act', 'surveillance', '9/11', 'NSA'], 'connection_web', ARRAY['FISA 702', 'Snowden NSA Leaks', 'NSA Stellar Wind', 'PRISM'])
),

-- NODE 7: Dulles Brothers
(
  'The Dulles Brothers — CIA and State Department Simultaneously',
  'dulles-brothers-cia-state-department',
  'For 8 years, two brothers ran American foreign policy and covert operations. Allen: CIA Director. John Foster: Secretary of State. Both: corporate lawyers for United Fruit Company. They decided which democracies to overthrow.',
  E'# The Dulles Brothers (1953–1961)\n\n## Summary\nFor eight years, two brothers ran American foreign policy and covert operations. Allen Dulles: CIA Director. John Foster Dulles: Secretary of State. Both spent decades as Sullivan & Cromwell partners representing United Fruit Company.\n\n## The Evidence\n• Allen: CIA Director Feb 1953–Nov 1961; Foster: Sec State Jan 1953–Apr 1959\n• Both Sullivan & Cromwell partners 38+ years\n• Iran 1953: Overthrew Mosaddegh; brothers coordinated directly\n• Guatemala 1954: Overthrew Árbenz; Allen lied to Eisenhower\n• Operation Mockingbird: CIA influence over 25+ newspapers, $265M/year\n• MK-Ultra: Allen authorized 1953; $69K funded Cameron torture\n• After JFK fired Allen, LBJ put him on Warren Commission\n\n## The Red Pill\nTwo brothers ran foreign policy and covert ops for 8 years. One decided which democracies to overthrow. The other gave diplomatic cover. Both were corporate lawyers for companies that profited from every coup. When JFK fired one, he investigated JFK''s assassination.\n\n## Sources\nKinzer, Stephen. The Brothers. Times Books, 2013.\nNational Security Archive. "CIA Iran Coup." 2013.',
  'Military & Intelligence Records',
  '1953-02-26',
  'verified',
  jsonb_build_object('category', 'War & Intelligence', 'pillar', 'War & Intelligence', 'years', '1953–1961', 'importance', 'PURE_GOLD', 'tags', ARRAY['CIA', 'Dulles', 'Iran coup', 'Guatemala', 'MK-Ultra'], 'connection_web', ARRAY['CIA Iran 1953 Coup', 'MK-Ultra', 'Operation Mockingbird', 'Church Committee'])
),

-- NODE 8: Panama Papers
(
  'The Panama Papers — 11.5 Million Documents Exposing Tax Evasion',
  'panama-papers-global-tax-evasion',
  '11.5 million documents. 214,000 shell companies. 140+ world leaders. The firm charged $8.75/month to backdate documents. The journalist who followed the trail: murdered by car bomb. The masterminds: acquitted.',
  E'# Panama Papers (2016)\n\n## Summary\nApril 3, 2016: largest document leak in history. 11.5 million files from Mossack Fonseca exposed 140+ heads of state hiding wealth through 214,000 shell companies across 200+ countries.\n\n## The Evidence\n• 11.5 million documents; 400+ journalists from 80+ countries\n• 214,000+ shell companies; 14,000+ intermediary banks\n• Putin associates: $2B traced; Iceland PM resigned; Cameron profited £30K\n• $8.75/month to backdate documents — fraud as line item\n• Daphne Caruana Galizia killed by car bomb Oct 2017; mastermind sentenced 40 years (June 2025)\n• $7.6–32 trillion hidden offshore; $1.36B recovered (0.004%)\n• Mossack and Fonseca acquitted in Panama (2024)\n\n## The Red Pill\n11.5 million documents proved two sets of rules. The firm helped 140 leaders hide money for $8.75/month. The journalist was murdered. The masterminds acquitted. $7.6–32 trillion hidden. $1.36B recovered — 0.004%.\n\n## Sources\nICIJ. "The Panama Papers." 2016.\nZucman, Gabriel. Hidden Wealth of Nations. UC Press, 2015.',
  'Financial Records / Whistleblower Disclosures',
  '2016-04-03',
  'verified',
  jsonb_build_object('category', 'Financial Systems', 'pillar', 'Financial Systems', 'years', '2016', 'importance', 'PURE_GOLD', 'tags', ARRAY['Panama Papers', 'tax evasion', 'offshore banking', 'shell companies'], 'connection_web', ARRAY['BCCI', 'FTX', 'Dark Money'])
),

-- NODE 9: Tuskegee-to-COVID Pipeline
(
  'Tuskegee-to-COVID Pipeline — Medical Trust Erosion',
  'tuskegee-covid-pipeline-medical-trust-erosion',
  '399 Black men told they were getting treatment. For 40 years (1932–1972), the U.S. government withheld syphilis treatment to watch them die. Penicillin became the cure in 1947. They didn''t give it to them. This isn''t history — it''s the foundation of modern medical distrust.',
  E'# Tuskegee-to-COVID Pipeline (1932–Present)\n\n## Summary\n399 Black men told they were receiving treatment for "bad blood." For 40 years the U.S. Public Health Service deliberately withheld syphilis treatment. When penicillin became the cure in 1947, they didn''t administer it. They watched men go blind, insane, and die.\n\n## The Evidence\n• Tuskegee (1932–1972): 399 Black men untreated 40 years; penicillin withheld from 1947\n• Agent Orange: VA denied claims for decades despite internal evidence\n• Gulf War Syndrome: 95% initial claims denied; 80–90% denial rate 30 years later\n• DES: 2M+ women prescribed despite 1953 trial showing ineffectiveness\n• Thalidomide: 8,000+ children with birth defects; apology 50 years later\n• Gain-of-function: NIH admitted in 2024 it funded Wuhan research, contradicting years of denial\n• Trust erosion: Black adults 2x likely to cite Tuskegee for COVID vaccine hesitancy\n\n## The Red Pill\nThey experimented on Black men for 40 years. Sprayed Agent Orange on soldiers and denied effects for decades. Told Gulf War vets their symptoms weren''t real while denying 95% of claims. When COVID arrived and communities were hesitant, they called it "misinformation." The distrust isn''t irrational — it''s generational memory of documented betrayal.\n\n## Sources\nCDC. "Tuskegee Timeline." 2022.\nVA. "Gulf War Veterans'' Illnesses." 2008.',
  'Environmental & Health Studies',
  '1932-01-01',
  'verified',
  jsonb_build_object('category', 'Health Transparency', 'pillar', 'Health Transparency', 'years', '1932–Present', 'importance', 'GOLD', 'tags', ARRAY['Tuskegee', 'medical experimentation', 'Agent Orange', 'trust erosion'], 'connection_web', ARRAY['Tuskegee Syphilis Study', 'Agent Orange', 'MK-Ultra', 'Gulf War Syndrome'])
),

-- NODE 10: Operation Condor
(
  'Operation Condor — CIA''s Southern Hemisphere Death Squad Network',
  'operation-condor-cia-south-america',
  'Nov 25, 1975 — Pinochet''s birthday — six South American dictatorships formalized Operation Condor: coordinated assassination, torture, disappearance campaign backed by the CIA. 60,000–90,000 murdered. 500 children stolen. Grandchild #140 identified July 2025.',
  E'# Operation Condor (1968–1989)\n\n## Summary\nNov 25, 1975 — Pinochet''s birthday — intelligence chiefs from six dictatorships formalized Operation Condor: coordinated cross-border assassination, torture, disappearance backed by the CIA. Estimated 60,000–90,000 murdered.\n\n## The Evidence\n• Formally established Nov 25, 1975: Argentina, Chile, Uruguay, Paraguay, Brazil, Bolivia\n• 60,000–90,000 killed or disappeared\n• Declassified CIA cables confirm U.S. knowledge and facilitation\n• Kissinger''s Sept 16, 1976 cable rescinded warning — 2 days before Letelier car bombing in D.C.\n• Riggs Bank facilitated Pinochet finances; Senate found $1.6M moved through bank\n• 500 children stolen from disappeared parents; Abuelas found 140 grandchildren (July 2025)\n• School of the Americas trained officers using leaked torture manuals\n\n## The Red Pill\nSix dictatorships coordinated assassination campaign. CIA provided infrastructure, banks moved money, Kissinger rescinded warning 2 days before D.C. car bombing. 500 children stolen from murdered parents. Abuelas still working — grandchild #140 found 2025. School that trained them still operating. They renamed it. Curriculum classified.\n\n## Sources\nKornbluh, Peter. The Pinochet File. New Press, 2013.\nNational Security Archive. "Operation Condor." GWU.\nSenate. "Riggs Bank Investigation." 2005.',
  'Military & Intelligence Records',
  '1968-01-01',
  'verified',
  jsonb_build_object('category', 'War & Intelligence', 'pillar', 'War & Intelligence', 'years', '1968–1989', 'importance', 'PURE_GOLD', 'tags', ARRAY['Operation Condor', 'CIA', 'Pinochet', 'South America', 'death squads'], 'connection_web', ARRAY['CIA Assassination Programs', 'Iran-Contra', 'Plan Colombia', 'Church Committee'])
);

-- TIER 3 ITEMS (Key Gap Fillers)

INSERT INTO documents (title, slug, description, content, document_type, date_published, verification_tier, metadata) VALUES

-- NODE 11: Water Wars
(
  'The Water Wars — Nestlé, Bechtel, and Privatization of Human Rights',
  'water-wars-nestle-bechtel-privatization',
  'World Bank told Bolivia: privatize water or no aid. Bechtel raised rates 35–200%. A 17-year-old was shot dead. Bechtel left, then sued Bolivia for $50M in "lost profits." In Michigan, Nestlé pays $200/year for 576,000 gallons/day while Flint drinks lead.',
  E'# Water Wars (1999–Present)\n\n## Summary\n1999: World Bank made aid conditional on privatizing Bolivia''s water. Bechtel raised rates 35–200%. Families earning $60/month got $20 water bills. Victor Hugo Daza, 17, was shot dead. Bechtel was expelled — then sued Bolivia for $50M.\n\n## The Evidence\n• World Bank conditioned aid on water privatization in Bolivia, Ghana, Indonesia, Philippines\n• Cochabamba (2000): Bechtel raised rates 35–200%; $5 bills became $20 on $60 income\n• Victor Hugo Daza, 17, killed by Bolivian Army captain\n• Bechtel sued Bolivia $50M via World Bank tribunal using Dutch shell company\n• Nestlé: 576,000 gal/day from Michigan for $200/year permit while Flint had lead\n• UN declared water a human right July 28, 2010 (122–0) — U.S. abstained\n• Nestlé CEO (2005): water as human right is "extreme"\n\n## The Red Pill\nWorld Bank told a country it couldn''t have clean water unless it gave it to a California corporation. Corporation tripled prices, teen was shot dead. Corporation left, sued for lost profits. In Michigan, Nestlé pays $200/year for 576,000 gallons while Flint''s children drink lead. UN declared water a human right. U.S. abstained.\n\n## Sources\nDemocracy Center. "Bechtel vs Bolivia." 2005.\nUN Resolution 64/292. "Human Right to Water." July 2010.',
  'International & Human Rights Reports',
  '1999-01-01',
  'verified',
  jsonb_build_object('category', 'Environmental & Corporate', 'pillar', 'Environmental & Corporate', 'years', '2000–Present', 'importance', 'GOLD', 'tags', ARRAY['water privatization', 'Nestlé', 'Bechtel', 'Cochabamba'], 'connection_web', ARRAY['Seed Monopoly', 'PFAS Forever Chemicals', 'Corporate Consolidation'])
),

-- NODE 12: Cambridge Analytica
(
  'Cambridge Analytica — Data Harvesting for Electoral Manipulation',
  'cambridge-analytica-data-harvesting',
  '270,000 Facebook users installed a quiz app. It harvested data on 87 million people. Cambridge Analytica — a military psyops firm — turned it on American and British voters. The firm worked on Trump 2016 and Brexit. Whistleblower exposed it. Facebook knew for 3 years.',
  E'# Cambridge Analytica (2014–2018)\n\n## Summary\n2014: 270,000 people installed a personality quiz. It harvested 87 million profiles. Cambridge Analytica''s parent SCL Group had run military psychological operations since 2005. Same psychographic modeling used on conflict targets turned on American/British voters.\n\n## The Evidence\n• 87 million Facebook profiles harvested via API loophole\n• SCL Group: military psyops for NATO, UK MoD, U.S. DoD since 2005\n• Backed by Robert Mercer ($15M+); chaired by Steve Bannon\n• Worked on: Cruz primary, Bolton Super PAC, Trump 2016, Brexit Leave\n• Christopher Wylie blew whistle March 2018\n• Facebook knew Dec 2015; never verified deletion\n• FTC fined Meta $5B — largest privacy fine ever; $725M class action (2022)\n• CA dissolved May 2018; reconstituted as Emerdata by Mercer daughters\n\n## The Red Pill\nA military psyops firm harvested 87M people''s data through a quiz, used targeting from conflict zones on American/British voters, helped swing an election and referendum. Facebook knew 3 years, did nothing. $5B fine = one month Facebook revenue. Firm dissolved, reformed under new name. Billionaire still funding operations. Military psyops firm still operational.\n\n## Sources\nThe Guardian. "50 Million Facebook Profiles Harvested." Mar 2018.\nFTC. "$5B Penalty on Facebook." July 2019.\nWylie, Christopher. Mindf*ck. Random House, 2019.',
  'Court Records / Whistleblower Disclosures',
  '2014-01-01',
  'verified',
  jsonb_build_object('category', 'AI & Surveillance', 'pillar', 'AI & Surveillance', 'years', '2014–2018', 'importance', 'GOLD', 'tags', ARRAY['Cambridge Analytica', 'Facebook', 'election manipulation', 'data harvesting'], 'connection_web', ARRAY['Facebook Papers', 'Citizens United', 'Dark Money'])
),

-- NODE 13: School-to-Prison Pipeline
(
  'The School-to-Prison Pipeline',
  'school-to-prison-pipeline',
  'Two Pennsylvania judges accepted $2.8M in bribes from private juvenile detention owners. They sentenced 6,000 children — some for creating a MySpace page. 4,000 convictions overturned. $206M damages. This wasn''t an aberration — it was the business model made visible.',
  E'# School-to-Prison Pipeline (1994–Present)\n\n## Summary\n2008: Judges Mark Ciavarella and Michael Conahan accepted $2.8M in bribes from private detention center owners. They sentenced children for offenses like creating a satirical MySpace page. 6,000 children funneled through a system where a judge''s income depended on convictions.\n\n## The Evidence\n• Kids for Cash (2008): $2.8M bribes; 4,000 convictions overturned; 6,000 children affected; $206M damages\n• 1994 Gun-Free Schools Act: mandated zero-tolerance, introduced School Resource Officers\n• Black students 3.8x more likely suspended; Black girls 6x more likely\n• 4M Americans disenfranchised by felony convictions; 1 in 22 Black adults can''t vote\n• CoreCivic and GEO Group: $10.4M lobbying 2016–17; $1B+ ICE contracts (2025)\n• SROs documented handcuffing children as young as 6\n\n## The Red Pill\nTwo judges made $2.8M selling children to for-profit prisons. 6,000 kids sentenced by a man whose paycheck depended on convictions. That''s the version that got caught. The legal version sends Black children to suspension at 3.8x white children, funnels them into a system funded by private prison lobbying, strips voting rights. 4M can''t vote. Companies that profit spend millions keeping laws harsh. Pipeline starts in kindergarten.\n\n## Sources\nDOJ. "Kids for Cash: Two Judges Exposed." 2011.\nDOE. "Civil Rights Data Collection: School Discipline." 2020.\nSentencing Project. "Locked Out 2024." 2024.',
  'Court Records / Legislative Analysis',
  '1994-01-01',
  'verified',
  jsonb_build_object('category', 'Child Safety & Trafficking', 'pillar', 'Child Safety & Trafficking', 'years', '1990s–Present', 'importance', 'GOLD', 'tags', ARRAY['school-to-prison', 'private prisons', 'Kids for Cash', 'racial disparity'], 'connection_web', ARRAY['Prison Industrial Complex', 'Child Welfare System', 'Voter Suppression'])
);

-- PATTERN SERIES (Meta-Items)

INSERT INTO documents (title, slug, description, content, document_type, date_published, verification_tier, metadata) VALUES

-- NODE 16: The Whistleblower Arc Pattern
(
  'The Pattern — The Whistleblower Arc',
  'pattern-whistleblower-arc',
  'Every major whistleblower follows the same arc: Testify → Discredit → Classify → Repeat. Ellsberg faced 115 years. Webb got two bullets. Snowden got Russia. Manning got 35 years. Kiriakou went to prison — not for torturing people, but for telling the public torture was happening.',
  E'# The Whistleblower Arc Pattern (1971–Present)\n\n## Summary\nEvery major whistleblower follows the same arc. The disclosure is specific, documented, verifiable. The institutional response is immediate, personal, devastating. The timeline is predictable: first the charges, then character assassination, then classification of evidence, then — years or decades later — quiet vindication.\n\n## The Pattern\n• Ellsberg (1971): Pentagon Papers → 12-count indictment (115 years) → charges dismissed; Supreme Court 6-3\n• Gary Webb (1996): CIA-Contra cocaine → career destroyed → CIA IG confirmed findings (1998) → found dead 2004, two gunshots, ruled suicide\n• Thomas Drake (2010): NSA waste/fraud → Espionage Act charges (35 years) → all felonies dropped\n• Chelsea Manning (2010): War logs → 35 years (heaviest leak sentence ever) → Obama commuted 2017; Petraeus got probation\n• Snowden (2013): NSA mass surveillance → passport revoked mid-flight → 9th Circuit ruled NSA illegal (2020)\n• Reality Winner (2017): Russian interference doc → 63 months (longest media leak sentence) → Mueller confirmed intelligence\n• John Kiriakou (2014): CIA waterboarding → 30 months — only person jailed in connection to torture program, despite torturing no one\n• Boeing whistleblowers (2024): John Barnett found dead mid-deposition (Mar 9); Joshua Dean died at 45 (May 1)\n\n## The Red Pill\nThe pattern is the same every time. Tell the truth. Get charged. Get discredited. Get exiled, imprisoned, or killed. Wait 5, 10, 20 years. Get vindicated — quietly, after damage done. Manning got 35 years for the offense that earned Petraeus probation. Message isn''t subtle: punishment for telling truth is always worse than punishment for the crime exposed. The pattern isn''t a bug. It''s the system working as designed.\n\n## Sources\nGovernment Accountability Project. "Whistleblower Protections." 2024.\nGreenwald, Glenn. "NSA Collecting Phone Records." The Guardian, June 2013.\nWebb, Gary. Dark Alliance. Seven Stories Press, 1998.',
  'Pattern Analysis / Meta-Item',
  '1971-01-01',
  'verified',
  jsonb_build_object('category', 'Cross-Pillar Pattern', 'pillar', 'Cross-Pillar Pattern', 'years', '1971–Present', 'importance', 'PURE_GOLD', 'tags', ARRAY['whistleblower', 'pattern analysis', 'Snowden', 'Manning', 'Gary Webb'], 'connection_web', ARRAY['Snowden NSA Leaks', 'Pentagon Papers', 'Church Committee', 'Boeing Whistleblowers'])
);
