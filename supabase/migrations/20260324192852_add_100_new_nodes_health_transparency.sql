/*
  # Add Health Transparency Nodes (12 new documents)

  Adds 12 new evidence nodes to the "Health & Pharma Transparency" pillar:
  65. Tobacco Master Settlement
  66. Aspartame FDA Approval Controversy
  67. Fluoride Debate
  68. Infant Formula Lobbying / WHO Code
  69. Sugar Industry / Harvard Bribery
  70. Glyphosate / Roundup Cancer
  71. Johnson & Johnson Talc / Asbestos
  72. Purdue Pharma / OxyContin Opioid Crisis
  73. U.S. Healthcare System Failures
  74. Gain-of-Function Research
  75. Big Pharma Patent Evergreening
  76. Mental Health Pharma Capture
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Tobacco Industry Master Settlement / Decades of Deception (1950s-1998)',
  'tobacco-industry-master-settlement-deception',
  'For decades, the tobacco industry conducted a coordinated campaign to suppress evidence that cigarettes caused cancer — despite their own internal research confirming the link. The 1998 Master Settlement Agreement required tobacco companies to pay $246 billion over 25 years, release internal documents, and curtail marketing. Released documents showed executives had publicly denied knowing cigarettes were addictive while internal research proved the opposite.',
  'By the 1950s, internal tobacco industry research confirmed that cigarette smoking caused lung cancer. Rather than disclosing this, the major tobacco companies — Philip Morris, R.J. Reynolds, Brown & Williamson, and others — formed the Tobacco Industry Research Committee in 1954, explicitly to fund scientific doubt and public relations campaigns disputing the cancer link. Internal documents released in litigation show that tobacco executives discussed nicotine''s addictive properties and manipulation of nicotine delivery systems internally while publicly testifying before Congress in 1994 that they did not believe nicotine was addictive. A landmark 1998 Master Settlement Agreement between 46 state attorneys general and the four largest tobacco companies required payment of $246 billion over 25 years, the release of 40 million internal industry documents, dissolution of the Tobacco Institute and Center for Indoor Air Research, and restrictions on marketing, particularly targeting minors. A 2006 federal court ruling found tobacco companies had committed fraud under RICO. The tobacco industry''s playbook — fund research to dispute settled science, create front organizations, target research critics — was subsequently adapted by the oil industry, pharmaceutical industry, and others.',
  'https://en.wikipedia.org/wiki/Tobacco_Master_Settlement_Agreement',
  'verified',
  'Health & Pharma Transparency',
  '1998-11-23',
  '{"category": "Industry scientific fraud / public health cover-up", "importance": "PURE_GOLD", "tags": ["tobacco industry", "Master Settlement", "cancer cover-up", "nicotine addiction", "RICO fraud", "Philip Morris", "R.J. Reynolds"]}'
),

(
  'Aspartame FDA Approval Controversy (1974-Present)',
  'aspartame-fda-approval-controversy',
  'Aspartame''s FDA approval process was marked by scientific controversy and documented conflicts of interest. A 1980 FDA Public Board of Inquiry recommended aspartame not be approved. The approval was subsequently overridden after Donald Rumsfeld, then CEO of G.D. Searle, leveraged political connections following Reagan''s inauguration. In 2023, the WHO''s IARC classified aspartame as a possible carcinogen.',
  'Aspartame (brand name NutraSweet, Equal) is an artificial sweetener discovered by G.D. Searle & Company in 1965. The original FDA approval process was fraught with controversy. G.D. Searle''s own safety studies had methodological problems; a 1975 FDA task force found Searle had submitted false and fraudulent data and had engaged in manipulations of test data. A 1980 FDA Public Board of Inquiry reviewed the evidence and unanimously recommended that aspartame not be approved pending further tests on brain tumors in animals. In 1981, incoming FDA commissioner Arthur Hayes overrode the Board of Inquiry and approved aspartame for dry goods. Donald Rumsfeld, who had become CEO of G.D. Searle in 1977, was a member of Ronald Reagan''s transition team and had publicly pledged to get aspartame approved. Hayes left the FDA in 1983 under cloud of ethics investigations and joined Searle''s public relations firm. In 2023, the WHO''s International Agency for Research on Cancer (IARC) classified aspartame as a Group 2B possible human carcinogen — based on limited evidence from human studies showing associations with hepatocellular carcinoma.',
  'https://en.wikipedia.org/wiki/Aspartame_controversy',
  'corroborated',
  'Health & Pharma Transparency',
  '1981-07-15',
  '{"category": "FDA regulatory capture / artificial sweetener controversy", "importance": "GOLD", "tags": ["aspartame", "FDA", "Donald Rumsfeld", "G.D. Searle", "IARC carcinogen", "regulatory capture", "NutraSweet"]}'
),

(
  'Fluoride Debate / Water Fluoridation Controversy (1945-Present)',
  'fluoride-debate-water-fluoridation',
  'Water fluoridation — adding fluoride to public water supplies to prevent tooth decay — began in the U.S. in 1945 and is now practiced in 26 countries. While health authorities endorse it, a 2024 U.S. federal court ruling found the EPA had failed to properly assess neurodevelopmental risks from fluoride exposure, citing studies showing associations between fluoride and lower IQ scores in children at levels found in some U.S. water systems.',
  'Water fluoridation began in Grand Rapids, Michigan in 1945, following research suggesting that communities with naturally occurring fluoride in their water had lower rates of tooth decay. By the 1960s, the practice was endorsed by the U.S. Public Health Service, the American Dental Association, and the WHO and has since been implemented in 26 countries. The practice has been controversial since its introduction, with critics arguing that mass medication without individual consent represents a public health ethics issue. Scientific controversy has focused on neurological effects. A 2012 Harvard Public Health meta-analysis of 27 studies — mostly from China, where naturally occurring fluoride levels are often higher — found a correlation between high fluoride exposure and lower IQ scores in children. A 2020 Cochrane Review of fluoride found limited high-quality evidence supporting its effectiveness. In September 2024, a U.S. District Court ruled that the EPA had violated the Toxic Substances Control Act (TSCA) by failing to properly assess neurodevelopmental risks from fluoride in drinking water, citing the National Toxicology Program''s 2024 systematic review finding moderate confidence that fluoride is associated with lower IQ in children.',
  'https://en.wikipedia.org/wiki/Water_fluoridation_controversy',
  'corroborated',
  'Health & Pharma Transparency',
  '2024-09-24',
  '{"category": "Public health / mass medication controversy", "importance": "GOLD", "tags": ["fluoride", "water fluoridation", "IQ", "NTP review", "EPA ruling", "neurodevelopmental risk", "public health ethics"]}'
),

(
  'Sugar Industry Bribery of Harvard Scientists (1965-1967)',
  'sugar-industry-bribery-harvard-scientists',
  'In 2016, researchers published documents showing that the Sugar Research Foundation (the sugar industry trade group) paid three Harvard scientists in the 1960s to publish a review minimizing sugar''s role in heart disease and shifting the focus to dietary fat. The review, published in the New England Journal of Medicine in 1967, influenced dietary guidelines for decades. The industry''s campaign to suppress sugar research was directly modeled on the tobacco industry''s playbook.',
  'In September 2016, researchers at the University of California San Francisco published a paper in JAMA Internal Medicine based on internal Sugar Research Foundation (SRF) documents obtained from universities. The documents showed that in 1964, the SRF — the trade organization for the sugar industry — initiated a research project to counter evidence linking sugar to heart disease. The SRF paid three Harvard scientists — D. Mark Hegsted, Robert McGandy, and Fredrick Stare — the equivalent of approximately $50,000 in today''s dollars to conduct a literature review. The resulting 1967 paper, published in the New England Journal of Medicine, systematically downplayed evidence linking sugar to heart disease while highlighting evidence against dietary fat. The paper was influential in shifting U.S. dietary guidelines toward low-fat recommendations, which resulted in Americans substituting sugar for fat in their diets. The authors did not disclose the industry funding — disclosure of financial conflicts was not required by the NEJM at the time. D. Mark Hegsted later helped draft the 1977 Dietary Guidelines for Americans, which emphasized low fat over low sugar. The SRF''s strategy was explicitly compared in the research to the tobacco industry''s funding of scientific doubt.',
  'https://en.wikipedia.org/wiki/Sugar_Research_Foundation',
  'verified',
  'Health & Pharma Transparency',
  '2016-09-12',
  '{"category": "Industry bribery of scientists / dietary misinformation", "importance": "PURE_GOLD", "tags": ["sugar industry", "Harvard", "heart disease", "dietary guidelines", "scientific bribery", "NEJM", "low-fat misinformation"]}'
),

(
  'Glyphosate / Roundup Cancer Controversy (1974-Present)',
  'glyphosate-roundup-cancer-controversy',
  'Glyphosate, the active ingredient in Monsanto''s Roundup herbicide, was classified as a probable human carcinogen by the WHO''s IARC in 2015. Internal Monsanto documents released in litigation showed the company had worked to suppress negative studies and ghostwrite scientific papers. Bayer (which acquired Monsanto in 2018) has paid over $10 billion in cancer settlements while insisting Roundup is safe.',
  'Glyphosate is the world''s most widely used herbicide, sold primarily as Roundup by Monsanto (now owned by Bayer). It was first introduced commercially in 1974. In March 2015, the International Agency for Research on Cancer (IARC) classified glyphosate as a Group 2A probable human carcinogen, based on limited evidence in humans and sufficient evidence in animals. Monsanto aggressively disputed this classification. Internal company documents released in subsequent litigation — totaling over 40,000 pages — revealed that Monsanto had for decades cultivated academic relationships, funded studies designed to produce favorable results, ghostwritten scientific papers attributed to independent researchers, worked to get IARC''s glyphosate classification changed, and attempted to discredit scientists who raised concerns. EPA scientists internally expressed concerns about glyphosate''s cancer risk; a 2016 EPA internal email showed a senior EPA official offering to help Monsanto by killing a separate Department of Health and Human Services review of glyphosate. Since 2019, Bayer has paid over $10 billion to settle more than 100,000 cancer lawsuits while maintaining that glyphosate does not cause cancer. In June 2020, Bayer agreed to pay $10.9 billion — the largest pesticide settlement in U.S. history.',
  'https://en.wikipedia.org/wiki/Glyphosate',
  'verified',
  'Health & Pharma Transparency',
  '2015-03-20',
  '{"category": "Pesticide carcinogen / corporate science suppression", "importance": "PURE_GOLD", "tags": ["glyphosate", "Roundup", "Monsanto", "Bayer", "IARC", "cancer", "ghostwriting", "EPA corruption"]}'
),

(
  'Johnson & Johnson Talc / Asbestos Cancer Cover-Up (1970s-Present)',
  'johnson-johnson-talc-asbestos-cancer',
  'Johnson & Johnson knew for decades that its baby powder contained asbestos contamination yet did not disclose this to consumers. Internal documents released in litigation showed J&J had tested its talc mines and products as far back as 1971 and found asbestos, then suppressed the findings. In 2023, J&J attempted to use the Texas Two-Step bankruptcy maneuver to limit asbestos liability; courts blocked this. Total settlements have exceeded $8.9 billion.',
  'Johnson & Johnson marketed its baby powder and talc products as pure and safe for over a century. Internal company documents released in litigation beginning in 2017 revealed that J&J had tested its talc mines and products for asbestos contamination as far back as 1971, found asbestos contamination in multiple samples, and did not disclose these findings to consumers or regulators. A December 2018 Reuters investigation found that J&J''s talc contained small amounts of asbestos in tests going back decades and that the company had concealed this information from regulators. J&J disputed the findings. In 2020, J&J discontinued its talc-based baby powder in the United States and Canada, citing declining sales amid safety concerns, while continuing to sell it internationally. J&J has faced approximately 38,000 lawsuits from women with ovarian cancer and mesothelioma alleging injury from talc products. In 2023, J&J attempted to use the Texas Two-Step bankruptcy strategy — placing its talc liability in a subsidiary that then filed for bankruptcy to limit payouts — but federal courts blocked this maneuver twice. In 2024, J&J proposed an $8.9 billion global settlement.',
  'https://en.wikipedia.org/wiki/Talc_contamination_controversy',
  'verified',
  'Health & Pharma Transparency',
  '2018-12-14',
  '{"category": "Product liability cover-up / asbestos concealment", "importance": "PURE_GOLD", "tags": ["Johnson & Johnson", "talc", "asbestos", "baby powder", "cancer", "cover-up", "Texas Two-Step bankruptcy"]}'
),

(
  'Purdue Pharma / OxyContin Opioid Crisis (1996-Present)',
  'purdue-pharma-oxycontin-opioid-crisis',
  'Purdue Pharma aggressively marketed OxyContin as a low-addiction opioid beginning in 1996, while internal documents showed the company knew patients were developing addictions and that pills were being crushed and injected. The Sackler family, Purdue''s owners, withdrew over $10 billion from the company as the opioid crisis killed over 500,000 Americans. Purdue pleaded guilty to federal criminal charges in 2020.',
  'Purdue Pharma introduced OxyContin — an extended-release oxycodone formulation — in 1996, with an aggressive marketing campaign claiming it had a lower addiction potential than immediate-release opioids because of its extended-release mechanism. Internal company documents released in litigation show Purdue knew from an early date that patients were crushing and injecting OxyContin to defeat the extended-release mechanism, that addiction was occurring at significant rates, and that the company continued to market the drug aggressively regardless. Purdue''s sales force was trained to downplay addiction risk. Doctors were taken on junkets, paid to speak at conferences, and given financial incentives to prescribe OxyContin. The Sackler family — Purdue''s owners — withdrew approximately $10-12 billion from the company between 2008 and 2016, before Purdue''s financial collapse. Over 500,000 Americans died of opioid overdoses between 1999 and 2020. In 2020, Purdue Pharma pleaded guilty to federal criminal charges including conspiracy to defraud the United States. The Sackler family reached an approximately $6 billion civil settlement in 2024. No member of the Sackler family faced criminal prosecution.',
  'https://en.wikipedia.org/wiki/OxyContin',
  'verified',
  'Health & Pharma Transparency',
  '2020-10-21',
  '{"category": "Pharmaceutical fraud / opioid crisis / Sackler family", "importance": "PURE_GOLD", "tags": ["Purdue Pharma", "OxyContin", "opioid crisis", "Sackler family", "500000 deaths", "criminal plea", "addiction"]}'
),

(
  'U.S. Healthcare System Failures / Insurance Bureaucracy (1970s-Present)',
  'us-healthcare-system-failures-insurance',
  'The United States spends more on healthcare per capita than any other developed nation yet achieves worse outcomes across most measures. The U.S. is the only OECD country without universal healthcare coverage. A 2024 ProPublica investigation documented that UnitedHealth Group used an AI algorithm with a 90% error rate to deny claims for post-acute care, with internal targets requiring a certain percentage of denials to boost profits.',
  'The United States spends approximately $12,000 per person annually on healthcare — more than twice the OECD average and more than any other country in the world. Despite this, U.S. life expectancy is lower than most peer nations, infant mortality is higher, and scores on comprehensive health outcome measures are among the lowest in the developed world. The U.S. is the only OECD country that does not provide universal health insurance coverage. Insurance company administrative costs — including claims adjudication, denial management, and prior authorization bureaucracy — account for approximately $800 billion annually, or approximately 35% of U.S. healthcare spending, compared to 3-5% in single-payer systems. A 2024 Senate Finance Committee investigation and ProPublica reporting documented that UnitedHealth Group used an AI algorithm (nH Predict) with an internally documented 90% error rate to deny Medicare Advantage post-acute care claims, with division leaders setting targets for denial percentages to boost profit. UnitedHealth''s CEO Brian Thompson was killed in December 2024; the subsequent national discussion revealed widespread public awareness of insurance claim denial practices.',
  'https://en.wikipedia.org/wiki/Health_care_in_the_United_States',
  'verified',
  'Health & Pharma Transparency',
  '2024-01-01',
  '{"category": "Healthcare system failure / insurance industry profit over care", "importance": "PURE_GOLD", "tags": ["healthcare", "UnitedHealth", "AI denial algorithm", "insurance industry", "universal healthcare", "claim denials", "administrative costs"]}'
),

(
  'Gain-of-Function Research / COVID-19 Origins (2000s-Present)',
  'gain-of-function-research-covid-origins',
  'Gain-of-function (GoF) research — experiments that enhance pathogens to become more transmissible or lethal — was conducted at the Wuhan Institute of Virology (WIV) with partial U.S. funding channeled through EcoHealth Alliance. NIH and NIAID director Anthony Fauci testified before Congress that this research did not meet the definition of gain-of-function. Internal NIH documents later confirmed that EcoHealth Alliance''s experiments did in fact meet the NIH''s own definition.',
  'Gain-of-function (GoF) research refers to experiments that alter pathogens — typically viruses — to make them more transmissible, virulent, or capable of infecting new hosts. Such research is conducted to study pandemic potential and develop vaccines, but critics argue it creates the very threats it is designed to anticipate. The Wuhan Institute of Virology (WIV) conducted bat coronavirus research that was partially funded through grants from the National Institutes of Health (NIH) via the EcoHealth Alliance, a U.S.-based nonprofit led by Peter Daszak. In May 2021, Senator Rand Paul publicly confronted NIAID Director Anthony Fauci, asking whether NIH had funded gain-of-function research at WIV. Fauci testified it had not. In October 2021, NIH principal deputy director Lawrence Tabak sent a letter to Congress acknowledging that EcoHealth Alliance had conducted limited experiments on bat coronaviruses at WIV that had produced viruses that grew more rapidly in some models — and that this met the definition of potential pandemic pathogen enhancement in NIH''s own guidelines. The U.S. intelligence community has been divided on whether the COVID-19 pandemic originated from a natural spillover event or a laboratory incident at WIV; the FBI and Department of Energy have assessed a lab leak as most likely, while other agencies assess natural origin as more likely.',
  'https://en.wikipedia.org/wiki/Gain-of-function_research',
  'corroborated',
  'Health & Pharma Transparency',
  '2021-10-20',
  '{"category": "Pandemic research / NIH / COVID origins", "importance": "PURE_GOLD", "tags": ["gain-of-function", "Wuhan Institute of Virology", "EcoHealth Alliance", "Anthony Fauci", "COVID-19 origins", "NIH", "lab leak"]}'
),

(
  'Big Pharma Patent Evergreening (1980s-Present)',
  'big-pharma-patent-evergreening',
  'Pharmaceutical companies routinely extend their monopoly profits on successful drugs far beyond the original 20-year patent by making minor changes — reformulating pills into capsules, changing dosing schedules, combining drugs — and obtaining new patents. This practice, called patent evergreening, delays the entry of generic competition and costs U.S. patients and payers hundreds of billions of dollars annually. AbbVie''s Humira held off biosimilar competition for 10 years through over 130 patents.',
  'The U.S. patent system grants pharmaceutical companies 20-year monopoly rights on new drugs, allowing them to recoup research investments through exclusive pricing. Patent evergreening refers to the practice of making minor modifications to an existing drug — changing its formulation, dosing schedule, delivery mechanism, or combining it with another drug — to obtain new patents that extend effective market exclusivity far beyond the original 20-year term. AbbVie''s Humira (adalimumab), the world''s best-selling drug, is a documented example: AbbVie built a patent thicket of over 130 patents around the biologic drug, successfully blocking biosimilar competitors in the U.S. market for approximately 10 years beyond Humira''s original patent expiration, while charging U.S. patients prices approximately five times higher than in European markets. A 2018 I-MAK analysis found that the 12 best-selling drugs in the U.S. had an average of 38 patents each, with effective market exclusivity averaging 38 years. The Congressional Budget Office estimated in 2021 that implementing Medicare drug price negotiation would reduce spending by $456 billion over 10 years — money currently paid above competitive market prices due to patent protection and legal strategies.',
  'https://en.wikipedia.org/wiki/Evergreening',
  'verified',
  'Health & Pharma Transparency',
  '2018-03-14',
  '{"category": "Pharmaceutical monopoly extension / patent manipulation", "importance": "GOLD", "tags": ["patent evergreening", "Humira", "AbbVie", "pharmaceutical patents", "drug prices", "generic competition", "biosimilars"]}'
),

(
  'Mental Health Pharma Capture / SSRI Controversy (1980s-Present)',
  'mental-health-pharma-capture-ssri-controversy',
  'Psychiatry''s shift toward pharmaceutical treatment of mental illness was accelerated by systematic industry funding of research, journal publications, and professional education. A 2008 NEJM study found that 94% of positive SSRI studies were published while only 14% of negative studies were — creating a false impression of efficacy. Internal Eli Lilly documents showed the company had concealed evidence that Prozac increased suicidal ideation in some patients.',
  'The dominance of pharmaceutical treatment in modern psychiatry has been shaped substantially by the industry''s systematic influence over research, education, and prescribing practices. A landmark 2008 study by Turner et al. in the New England Journal of Medicine found that of 74 FDA-registered studies of antidepressants, 37 of 38 studies with positive results were published, while only 3 of 36 negative or questionable studies were published. This selective publication created a significant inflation in the apparent efficacy of SSRIs. Internal Eli Lilly documents made public in litigation showed that the company had possessed data suggesting Prozac (fluoxetine) could increase suicidal ideation in some patients and had concealed this from regulators and the public in the late 1980s and 1990s. The FDA eventually required black box suicide warning labels on antidepressants in 2004 — a requirement the pharmaceutical industry lobbied against. A 2022 meta-analysis by Moncrieff et al. in Molecular Psychiatry challenged the serotonin deficiency theory underlying SSRI prescribing, finding no convincing evidence that depression is caused by low serotonin levels — the marketed rationale for SSRIs for decades.',
  'https://en.wikipedia.org/wiki/Antidepressant',
  'corroborated',
  'Health & Pharma Transparency',
  '2008-01-17',
  '{"category": "Pharmaceutical science manipulation / psychiatry capture", "importance": "GOLD", "tags": ["SSRIs", "antidepressants", "Prozac", "Eli Lilly", "publication bias", "serotonin theory", "pharma influence"]}'
)

ON CONFLICT (slug) DO NOTHING;
