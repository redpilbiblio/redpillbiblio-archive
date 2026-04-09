/*
  # Add Environmental & Corporate Nodes - Part 1 (Nodes 1-13)

  Adds 13 new evidence nodes to the "Food, Environment & Public Health" pillar:
  1. Flint Michigan Water Crisis
  2. Bhopal Gas Disaster
  3. Deepwater Horizon
  4. Exxon Valdez
  5. Love Canal
  6. PG&E Hinkley / Erin Brockovich
  7. Chevron Ecuador
  8. Dakota Access Pipeline
  9. Camp Lejeune
  10. DuPont PFOA / C8
  11. Monsanto PCB / Anniston
  12. W.R. Grace / Libby Montana
  13. Nuclear Downwinders
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Flint Michigan Water Crisis (2014-Present)',
  'flint-michigan-water-crisis',
  'Michigan officials switched Flint''s water source to the corrosive Flint River in 2014 without applying required corrosion inhibitors, causing lead to leach into tap water consumed by 100,000 residents. Officials denied the crisis for 18 months while children suffered permanent neurological damage. A $626 million settlement was approved in 2021; not a single official served prison time.',
  'On April 25, 2014, an emergency manager appointed by Governor Rick Snyder switched Flint''s water source from treated Detroit water to the Flint River to save approximately $5 million per year. State officials at the Michigan Department of Environmental Quality (MDEQ) failed to apply corrosion inhibitors required by federal law. Untreated water attacked 19th-century lead service lines, and lead began leaching into tap water consumed by roughly 100,000 residents — over half African American, 40% in poverty. Officials denied the problem for 18 months. Virginia Tech researcher Marc Edwards found 40% of Flint homes had elevated lead levels; one sample registered 13,200 ppb — 880 times the EPA action level. Two concurrent Legionnaires disease outbreaks killed 12 people. Internal MDEQ documents showed the agency falsified lead testing data. In January 2021, Michigan AG charged former Governor Snyder and 8 other officials with 34 felony counts. The $626 million settlement approved in November 2021 was structured primarily for minors — compensation for permanent neurological damage with no known cure. Not a single official served prison time.',
  'https://www.reuters.com/legal/litigation/federal-judge-approves-626-million-flint-michigan-water-settlement-2021-11-10/',
  'verified',
  'Food, Environment & Public Health',
  '2014-04-25',
  '{"category": "Government regulatory failure", "importance": "PURE_GOLD", "tags": ["lead contamination", "water crisis", "environmental racism", "Michigan", "Flint", "government cover-up", "public health"]}'
),

(
  'Bhopal Gas Disaster / Union Carbide (1984)',
  'bhopal-gas-disaster-union-carbide',
  'On December 2-3, 1984, Union Carbide''s Indian subsidiary in Bhopal released 40 tonnes of methyl isocyanate gas, killing 15,000-22,000 people in the worst industrial accident in history. The company settled deaths for approximately $500 per victim. CEO Warren Anderson was never tried. Dow Chemical acquired Union Carbide in 2001 and denied all liability.',
  'On December 2-3, 1984, Union Carbide India Limited''s pesticide plant in Bhopal ruptured, releasing approximately 40 tonnes of methyl isocyanate (MIC) gas into densely populated neighborhoods. Long-term casualties: 15,000-22,000 deaths, 500,000-570,000 injuries. A 1984 internal audit confirmed safety measures at Bhopal operated below U.S. standards. CEO Warren Anderson was released on $2,100 bail and flown home; the U.S. refused extradition; he died in Florida in 2014 without facing trial. The 1989 settlement of $470 million averaged approximately $500 per victim. Dow Chemical acquired Union Carbide in 2001 and maintains it inherited no liability. Soil and groundwater contamination continues 40 years later. In March 2023, the Indian Supreme Court dismissed the last petition for additional compensation.',
  'https://www.amnesty.org/en/latest/news/2024/03/global-dows-failure-to-offer-remedy-for-the-bhopal-disaster-has-created-a-sacrifice-zone/',
  'verified',
  'Food, Environment & Public Health',
  '1984-12-02',
  '{"category": "Industrial disaster / corporate criminal negligence", "importance": "PURE_GOLD", "tags": ["Bhopal", "Union Carbide", "Dow Chemical", "industrial disaster", "corporate impunity", "environmental racism", "India"]}'
),

(
  'Deepwater Horizon BP Oil Spill (2010)',
  'deepwater-horizon-bp-oil-spill',
  'On April 20, 2010, BP''s Deepwater Horizon rig exploded, killing 11 workers and unleashing 4.9 million barrels of oil into the Gulf of Mexico over 87 days — the largest marine oil spill in history. BP pleaded guilty to 11 counts of felony manslaughter and paid over $65 billion total. BP''s internal data showed flow rates 29x higher than what it reported to regulators.',
  'On April 20, 2010, high-pressure methane gas from the Macondo well ignited aboard the Deepwater Horizon, killing 11 workers. For 87 days, oil gushed into the Gulf of Mexico — 4.9 million barrels, the largest marine oil spill in history. BP internal data showed potential flow rates up to 146,000 barrels per day while the company publicly reported 5,000 bpd to Congress and the SEC — securities fraud. BP had ignored warnings from its own engineers about well integrity. In November 2012, BP pleaded guilty to 14 criminal counts including 11 counts of felony manslaughter, paying $4.525 billion — the largest criminal resolution in U.S. history at the time. The 2016 civil settlement added $20.8 billion. Both rig supervisors facing manslaughter charges had their cases dismissed without conviction. Long-term ecological damage to the Gulf was documented for over a decade.',
  'https://www.justice.gov/archives/opa/pr/bp-exploration-and-production-inc-agrees-plead-guilty-felony-manslaughter-environmental',
  'verified',
  'Food, Environment & Public Health',
  '2010-04-20',
  '{"category": "Industrial disaster / corporate criminal plea", "importance": "PURE_GOLD", "tags": ["BP", "Deepwater Horizon", "oil spill", "Gulf of Mexico", "corporate crime", "regulatory capture", "manslaughter"]}'
),

(
  'Exxon Valdez Oil Spill (1989)',
  'exxon-valdez-oil-spill',
  'On March 24, 1989, the Exxon Valdez ran aground in Alaska, spilling 11 million gallons of crude oil and fouling 1,300 miles of coastline. Exxon appealed a $5 billion punitive damages verdict for 14 years; the Supreme Court reduced it to $507.5 million in 2008, establishing a legal ceiling on corporate punishment for oil spills that would benefit BP two decades later.',
  'On March 24, 1989, the Exxon Valdez ran aground on Bligh Reef in Prince William Sound, Alaska, spilling approximately 11 million gallons of crude oil and fouling more than 1,300 miles of coastline. The captain had a documented history of alcohol problems Exxon knew of but had not addressed. More than 36,000 migratory birds, sea otters, and orcas were killed. The spill devastated the Alaskan fishing industry and Native subsistence communities. A 1994 jury imposed $5 billion in punitive damages. Exxon spent 14 years appealing; the U.S. Supreme Court ruled in Exxon Shipping Co. v. Baker (2008) that maritime punitive damages cannot exceed compensatory damages, reducing the award to $507.5 million — a ruling that directly benefited BP in its subsequent liability calculations. Federal scientists estimated 16,000-21,000 gallons of oil remain in beach sediments with no sign of biodegrading. A $92 million Reopener claim for long-term damage was never collected.',
  'https://www.epa.gov/archive/epa/aboutepa/exxon-pay-record-one-billion-dollars-criminal-fines-and-civil-damages-connection-alaskan.html',
  'verified',
  'Food, Environment & Public Health',
  '1989-03-24',
  '{"category": "Environmental disaster / civil litigation", "importance": "GOLD", "tags": ["Exxon Valdez", "oil spill", "Alaska", "Supreme Court", "corporate impunity", "punitive damages cap"]}'
),

(
  'Love Canal Toxic Waste (1942-1980)',
  'love-canal-toxic-waste',
  'Hooker Chemical buried 21,800 tons of toxic waste including dioxin and PCBs beneath a neighborhood in Niagara Falls, NY, then sold the land for $1 to the school board that built an elementary school on it. The resulting public health catastrophe — chromosomal damage, miscarriages, and birth defects — directly triggered the creation of Superfund in 1980.',
  'From 1942 to 1953, Hooker Chemical Company buried approximately 21,800 tons of toxic waste including dioxin, benzene, and PCBs in a 16-acre canal in Niagara Falls, NY. In 1953, Hooker sold the land to the school board for $1 with a liability disclaimer in the deed. A school and residential neighborhood were subsequently built on top. By 1976, heavy rains caused chemicals to seep into basements and yards; children returned from play with chemical burns. EPA blood tests in 1980 showed chromosomal damage in residents. Women in the neighborhood were 1.5 times more likely to miscarry; children were born with birth defects. The crisis directly triggered the Comprehensive Environmental Response, Compensation, and Liability Act (Superfund) in December 1980 — the first federal law addressing abandoned toxic waste sites. Occidental Chemical (Hooker successor) ultimately paid $102 million to Superfund and $27 million to FEMA for relocating 1,000+ families.',
  'https://en.wikipedia.org/wiki/Love_Canal',
  'verified',
  'Food, Environment & Public Health',
  '1978-08-02',
  '{"category": "Chemical contamination / landmark legislation", "importance": "GOLD", "tags": ["Love Canal", "toxic waste", "Superfund", "Hooker Chemical", "Niagara Falls", "dioxin", "PCB"]}'
),

(
  'PG&E Hinkley Chromium-6 Contamination (1952-1996)',
  'pge-hinkley-chromium-6-erin-brockovich',
  'Pacific Gas and Electric contaminated groundwater in Hinkley, California with hexavalent chromium from 1952 onward, concealed the contamination from residents, and provided false information to real estate buyers. The $333 million settlement in 1996 — secured by paralegal Erin Brockovich — was the largest ever paid in a direct-action lawsuit in U.S. history at that time.',
  'From 1952 onward, Pacific Gas and Electric Company used chromium-6 (hexavalent chromium) as a rust inhibitor at its Hinkley, California compressor station. The chemical leaked into the groundwater. PG&E concealed the contamination from residents and provided false information to real estate buyers about groundwater safety. Paralegal Erin Brockovich, working with attorney Ed Masry, documented the contamination through direct resident canvassing. Evidence showed PG&E had conducted groundwater testing showing elevated chromium-6 levels but had not disclosed results to residents or regulators. The 1996 settlement of $333 million was the largest ever paid in a direct-action lawsuit in U.S. history at that time. Chromium-6 is associated with various cancers. California established a public health goal of 0.02 ppb in 2011 based on cancer risk. Research after settlement indicated continued contamination and ongoing public health concerns in the region.',
  'https://en.wikipedia.org/wiki/Hinkley_groundwater_contamination',
  'verified',
  'Food, Environment & Public Health',
  '1996-07-01',
  '{"category": "Utility contamination / corporate cover-up", "importance": "GOLD", "tags": ["PG&E", "chromium-6", "hexavalent chromium", "Erin Brockovich", "groundwater contamination", "California", "Hinkley"]}'
),

(
  'Chevron Ecuador Amazon Contamination (1964-Present)',
  'chevron-ecuador-texaco-contamination',
  'Texaco (acquired by Chevron in 2001) deliberately dumped 16 billion gallons of toxic oil waste into the Ecuadorian Amazon from 1964 to 1992, poisoning Indigenous communities. After a 2011 Ecuadorian court awarded $9.5 billion in damages, Chevron obtained a U.S. court ruling blocking collection. Lead attorney Steven Donziger was subsequently disbarred following a Chevron-funded private prosecution.',
  'From 1964 to 1992, Texaco (now Chevron) operated oil extraction in Ecuador''s Amazon rainforest, deliberately using open-pit waste pits rather than the reinjection technology it used in U.S. operations. This resulted in approximately 16 billion gallons of toxic oil waste discharged into rivers and ecosystems, contaminating water sources for Indigenous communities including the Cofan, Siona, Secoya, Kichwa, and Huaorani peoples. A 2011 Ecuadorian court judgment awarded $9.5 billion in damages. Chevron obtained a 2014 U.S. federal court ruling under RICO blocking collection of the judgment, alleging fraud. Lead attorney Steven Donziger was subsequently disbarred following a Chevron-funded private prosecution that human rights organizations described as unprecedented corporate weaponization of the legal system. As of 2024, affected communities have received no compensation, and the area — sometimes called the Amazon Chernobyl — remains heavily contaminated.',
  'https://en.wikipedia.org/wiki/Chevron_Corporation_in_Ecuador',
  'corroborated',
  'Food, Environment & Public Health',
  '1992-01-01',
  '{"category": "Oil industry contamination / Global South exploitation", "importance": "PURE_GOLD", "tags": ["Chevron", "Texaco", "Ecuador", "Amazon contamination", "Indigenous communities", "corporate impunity", "Steven Donziger"]}'
),

(
  'Dakota Access Pipeline / Standing Rock (2016-Present)',
  'dakota-access-pipeline-standing-rock',
  'In 2016, the DAPL was rerouted away from Bismarck over water contamination risks — then routed through Standing Rock Sioux ancestral lands and beneath Lake Oahe, their primary drinking water source, without tribal consent. Federal courts later found the Army Corps violated environmental law. Peaceful protesters were met with water cannons, rubber bullets, and concussion grenades in freezing temperatures.',
  'The Dakota Access Pipeline was originally planned to cross the Missouri River near Bismarck, ND. The Army Corps of Engineers rerouted it after finding a spill could contaminate Bismarck''s drinking water — then routed it 0.5 miles upstream from the Standing Rock Sioux Reservation, beneath Lake Oahe, the tribe''s primary drinking water source, without completing required government-to-government tribal consultation. The Standing Rock encampment resistance lasted months; law enforcement deployed water cannons in freezing temperatures, rubber bullets, and concussion grenades against peaceful protesters. In December 2016, the Army Corps denied the easement under Obama; the Trump administration reversed this in February 2017. In March 2020, a federal judge ruled the Army Corps violated NEPA. In July 2020, a court ordered the pipeline shut pending review; an appeals court stayed the order. The pipeline continues operating under temporary permits as of 2024.',
  'https://en.wikipedia.org/wiki/Dakota_Access_Pipeline',
  'verified',
  'Food, Environment & Public Health',
  '2016-04-01',
  '{"category": "Pipeline / Indigenous rights / environmental justice", "importance": "GOLD", "tags": ["Dakota Access Pipeline", "Standing Rock", "Sioux", "Indigenous rights", "water rights", "environmental justice", "DAPL"]}'
),

(
  'Camp Lejeune Water Contamination (1953-1987)',
  'camp-lejeune-water-contamination',
  'From 1953 to 1987, roughly one million military personnel and families at Camp Lejeune, NC drank water contaminated with benzene, trichloroethylene, and other carcinogens. The Marine Corps knew of contamination by the early 1980s but delayed disclosure. The Camp Lejeune Justice Act of 2022 was the first legislation allowing veterans to sue the federal government for this type of military contamination.',
  'From 1953 to 1987, the drinking water at Marine Corps Base Camp Lejeune in Jacksonville, NC was contaminated with trichloroethylene (TCE), tetrachloroethylene (PCE), benzene, and vinyl chloride — all known or probable human carcinogens. Sources included an on-base dry cleaning facility, improper waste disposal, and leaking underground storage tanks. Approximately one million military personnel and family members were exposed over 34 years. Studies link Camp Lejeune water to leukemia, non-Hodgkin lymphoma, bladder cancer, kidney cancer, birth defects, and Parkinson''s disease. The Marine Corps identified contamination by the early 1980s but wells were not all closed until 1985; full disclosure was delayed for years. Veterans formed advocacy organizations and pressured Congress for decades. In 2022, Congress passed the Camp Lejeune Justice Act, allowing veterans to sue the federal government — the first such legislation overcoming sovereign immunity for military contamination. Tens of thousands of claims have been filed as of 2024.',
  'https://en.wikipedia.org/wiki/Camp_Lejeune_water_contamination',
  'verified',
  'Food, Environment & Public Health',
  '1987-01-01',
  '{"category": "Military contamination / government cover-up / veteran health", "importance": "GOLD", "tags": ["Camp Lejeune", "water contamination", "Marine Corps", "veterans", "benzene", "carcinogens", "military cover-up"]}'
),

(
  'DuPont PFOA / C8 Chemical Contamination (1951-Present)',
  'dupont-pfoa-c8-contamination',
  'DuPont used PFOA (C8) to manufacture Teflon for decades while concealing internal research showing it caused cancer and contaminated drinking water near its Parkersburg, WV plant. A 2017 settlement totaled $671 million. PFOA and related forever chemicals have since been detected in the blood of virtually every human on Earth and in rainwater including remote Antarctica.',
  'DuPont used perfluorooctanoic acid (PFOA/C8) to manufacture Teflon at its Washington Works plant in Parkersburg, West Virginia beginning in 1951. DuPont''s internal research by the 1960s-1970s showed PFOA accumulated in workers'' blood and caused health effects including cancers — none of which was disclosed to regulators. Attorney Robert Bilott spent 20 years litigating against DuPont. A class action settlement funded an independent C8 Science Panel studying 69,000 people over 7 years; in 2012, the panel found probable links between PFOA and six diseases including kidney cancer, testicular cancer, and ulcerative colitis. In 2017, DuPont and spinoff Chemours settled approximately 3,500 personal injury cases for $671 million. PFAS (the broader family of forever chemicals) have now been detected in virtually every American''s blood, in global rainwater, and in Antarctica. A 2024 study found microplastics and PFAS in human arterial plaque correlating with higher heart attack risk.',
  'https://en.wikipedia.org/wiki/DuPont_and_the_C8_contamination',
  'verified',
  'Food, Environment & Public Health',
  '2017-02-13',
  '{"category": "Corporate chemical cover-up / PFAS contamination", "importance": "PURE_GOLD", "tags": ["DuPont", "PFOA", "C8", "PFAS", "forever chemicals", "Teflon", "Parkersburg", "corporate cover-up"]}'
),

(
  'Monsanto PCB Contamination / Anniston Alabama (1935-2003)',
  'monsanto-pcb-anniston-contamination',
  'Monsanto produced PCBs at its Anniston, Alabama plant from 1935 to 1971, knowingly dumping toxic waste in streams and on land adjacent to a Black neighborhood. Internal documents showed Monsanto knew PCBs caused liver damage in animals as early as 1937 but concealed this for decades. Blood tests of Anniston residents showed PCB levels among the highest ever recorded in a U.S. residential population.',
  'Monsanto produced polychlorinated biphenyls (PCBs) at its Anniston, Alabama plant from 1935 to 1971, dumping toxic waste in streams, burying it in an open landfill adjacent to a predominantly Black neighborhood, and emitting it into the air. Internal Monsanto documents released in litigation showed the company knew as early as 1937 that PCBs caused liver damage in animals. Despite this, the company chose not to disclose the harm. PCB levels in Anniston residents were among the highest ever recorded in a U.S. residential population. In 2003, Solutia (Monsanto spinoff) and Pharmacia (its successor) agreed to a $700 million settlement covering approximately 20,000 residents. The predominantly Black neighborhood directly adjacent to the plant bore the greatest contamination burden — a documented case of environmental racism.',
  'https://en.wikipedia.org/wiki/Anniston,_Alabama',
  'verified',
  'Food, Environment & Public Health',
  '2003-08-20',
  '{"category": "Industrial chemical cover-up / environmental racism", "importance": "GOLD", "tags": ["Monsanto", "PCB", "Anniston", "Alabama", "environmental racism", "corporate cover-up", "polychlorinated biphenyls"]}'
),

(
  'W.R. Grace Asbestos Contamination / Libby Montana (1919-Present)',
  'wr-grace-asbestos-libby-montana',
  'W.R. Grace mined vermiculite contaminated with tremolite asbestos in Libby, Montana for decades, knowingly exposing workers and the entire town. Over 400 residents died from asbestos-related diseases. The EPA declared Libby the first public health emergency under Superfund in 2009. W.R. Grace filed for bankruptcy; executives were acquitted at trial despite documentary evidence of their knowledge.',
  'From 1919 to 1990, W.R. Grace mined vermiculite near Libby, Montana. The vermiculite was contaminated with tremolite asbestos — a particularly lethal form. Mine dust blew throughout the town, contaminated the high school athletic field (where students exercised on tailings), and traveled home on workers'' clothing. W.R. Grace had known for decades that its Libby workers were developing asbestosis and mesothelioma at catastrophic rates. Internal documents showed the company suppressed medical findings and failed to warn workers or community members. The EPA declared Libby a public health emergency in 2009 — the first such declaration under Superfund. Over 400 residents died from asbestos-related diseases; thousands more are sick. W.R. Grace filed for bankruptcy in 2001; in the criminal trial, executives were acquitted of all charges in 2009 despite documentary evidence of their knowledge of harm.',
  'https://en.wikipedia.org/wiki/Libby,_Montana',
  'verified',
  'Food, Environment & Public Health',
  '2009-06-17',
  '{"category": "Asbestos contamination / corporate criminal negligence", "importance": "GOLD", "tags": ["W.R. Grace", "asbestos", "Libby Montana", "mesothelioma", "Superfund", "corporate cover-up", "bankruptcy shield"]}'
),

(
  'Nuclear Downwinders / Above-Ground Testing (1951-1963)',
  'nuclear-downwinders-above-ground-testing',
  'The U.S. government conducted 100 above-ground nuclear weapons tests at the Nevada Test Site between 1951 and 1963 while classified evidence showed communities downwind received significant radiation. The AEC deliberately withheld this from the public for decades. Congress passed the Radiation Exposure Compensation Act in 1990 acknowledging the government caused cancer in downwinder communities.',
  'The United States conducted 100 above-ground atmospheric nuclear tests at the Nevada Test Site between 1951 and 1963. Radioactive fallout drifted over communities in Utah, Nevada, and Arizona — known as downwinders. The Atomic Energy Commission (AEC) publicly assured residents there was no health risk. Classified studies from the 1950s — withheld for decades — showed the AEC knew communities were receiving significant radiation doses. A 1965 internal USPHS study showed elevated leukemia rates in Utah; researchers were instructed not to publish findings showing radiation harm. Congress passed the Radiation Exposure Compensation Act (RECA) in 1990, acknowledging the government caused cancer in downwinder communities, uranium mine workers, and onsite participants. The National Cancer Institute estimated nuclear testing at Nevada resulted in approximately 11,000 excess cancer deaths from thyroid cancer alone — with total cancer mortality estimates ranging much higher.',
  'https://en.wikipedia.org/wiki/Downwinders',
  'verified',
  'Food, Environment & Public Health',
  '1951-01-27',
  '{"category": "Government nuclear testing / radiation cover-up", "importance": "GOLD", "tags": ["nuclear downwinders", "nuclear testing", "Nevada Test Site", "radiation", "AEC cover-up", "RECA", "cancer"]}'
)

ON CONFLICT (slug) DO NOTHING;
