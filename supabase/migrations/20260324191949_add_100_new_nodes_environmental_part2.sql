/*
  # Add Environmental & Corporate Nodes - Part 2 (Nodes 14-25)

  Adds 12 more evidence nodes to the "Food, Environment & Public Health" pillar:
  14. Three Mile Island
  15. Chernobyl
  16. Fukushima
  17. Lead Paint Industry Cover-Up
  18. DDT / Silent Spring
  19. Microplastics
  20. Cancer Alley / Environmental Racism
  21. Corporate Greenwashing / Fossil Fuel Disinformation
  22. Nestle Infant Formula Marketing Scandal
  23. Coca-Cola Plachimada Water Depletion
  24. E-Waste / Agbogbloshie
  25. Shrinkflation
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Three Mile Island Nuclear Accident (1979)',
  'three-mile-island-nuclear-accident',
  'On March 28, 1979, a partial core meltdown at Three Mile Island in Pennsylvania — the worst nuclear accident in U.S. history — prompted contradictory and incomplete information from regulators and plant operators for days. Studies documented elevated cancer rates in downwind communities; the Kemeny Commission found the NRC was deeply troubled organizationally and inadequately prepared to inform the public.',
  'On March 28, 1979, a partial core meltdown occurred at Unit 2 of the Three Mile Island nuclear power plant near Middletown, Pennsylvania. A combination of equipment failure, design problems, and operator error led to a loss of coolant and partial fuel melt. For days, the Nuclear Regulatory Commission (NRC), Metropolitan Edison (plant operator), and the White House provided contradictory, incomplete, and later-discredited information to the public and Pennsylvania Governor Dick Thornburgh. The NRC initially recommended evacuation of pregnant women and children within 5 miles; between 140,000 and 200,000 people left the area voluntarily. Official government reports concluded health effects were minimal. However, a 2017 reanalysis published in Environmental Health Perspectives found elevated rates of lung cancer and leukemia in downwind communities. The President''s Commission on the Accident (Kemeny Commission) found the NRC was organizationally troubled and inadequately prepared to inform the public during nuclear emergencies.',
  'https://en.wikipedia.org/wiki/Three_Mile_Island_accident',
  'verified',
  'Food, Environment & Public Health',
  '1979-03-28',
  '{"category": "Nuclear accident / government information suppression", "importance": "GOLD", "tags": ["Three Mile Island", "nuclear", "meltdown", "Pennsylvania", "NRC", "radiation", "cancer rates"]}'
),

(
  'Chernobyl Nuclear Disaster (1986)',
  'chernobyl-nuclear-disaster-cover-up',
  'The April 26, 1986 explosion at the Chernobyl nuclear plant released radiation equivalent to 400 Hiroshima bombs. Soviet authorities delayed the evacuation of Pripyat by 36 hours and held a May Day parade in Kyiv while concealing the disaster''s scale from citizens, neighboring countries, and the IAEA. Approximately 350,000 people were permanently displaced.',
  'On April 26, 1986, at 1:23 AM, a steam explosion and fire destroyed Reactor No. 4 at the Chernobyl Nuclear Power Plant near Pripyat, Ukraine (then part of the Soviet Union). The disaster released approximately 400 times more radiation than the atomic bomb dropped on Hiroshima, contaminating large parts of Europe. Soviet authorities delayed the evacuation of Pripyat''s 49,000 residents for 36 hours — during which they continued to hold a May Day parade in Kyiv, 130 km away. The Soviet government attempted to conceal the disaster''s scale from Soviet citizens, neighboring countries, and the International Atomic Energy Agency. The UN Chernobyl Forum (2005) estimated between 4,000 and 60,000 deaths attributable to the disaster, with independent researchers estimating much higher figures. Approximately 350,000 people were permanently evacuated. The 30-km exclusion zone around the plant remains in effect.',
  'https://en.wikipedia.org/wiki/Chernobyl_disaster',
  'verified',
  'Food, Environment & Public Health',
  '1986-04-26',
  '{"category": "Nuclear disaster / Soviet cover-up", "importance": "PURE_GOLD", "tags": ["Chernobyl", "nuclear disaster", "Soviet cover-up", "radiation", "Ukraine", "Pripyat", "evacuation delay"]}'
),

(
  'Fukushima Daiichi Nuclear Disaster (2011)',
  'fukushima-daiichi-nuclear-disaster',
  'On March 11, 2011, a magnitude 9.0 earthquake and tsunami triggered triple meltdowns at Fukushima Daiichi. TEPCO admitted it had falsified safety inspection records for years before the disaster. Japanese authorities withheld accurate radiation data from the public for days. A parliamentary investigation called the disaster fundamentally man-made — the result of regulatory capture between government, TEPCO, and regulators.',
  'On March 11, 2011, a magnitude 9.0 earthquake and subsequent 14-meter tsunami struck the Fukushima Daiichi Nuclear Power Plant, triggering meltdowns in three reactors — the worst nuclear accident since Chernobyl. TEPCO subsequently admitted it had falsified reactor safety inspection records for years before the disaster and had known the plant was not adequately protected against the tsunami that caused the meltdowns. Japanese government agencies withheld accurate radiation dispersion data (SPEEDI system outputs) from the public for days, affecting evacuation decisions. Approximately 154,000 people were evacuated. A 2012 independent investigation by the National Diet of Japan concluded the disaster was fundamentally man-made — the result of collusion between government, TEPCO, and regulators, characterizing this as regulatory capture. TEPCO has been releasing treated radioactive water into the Pacific Ocean since 2023, generating ongoing international controversy.',
  'https://en.wikipedia.org/wiki/Fukushima_nuclear_disaster',
  'verified',
  'Food, Environment & Public Health',
  '2011-03-11',
  '{"category": "Nuclear disaster / corporate and regulatory cover-up", "importance": "PURE_GOLD", "tags": ["Fukushima", "TEPCO", "nuclear disaster", "Japan", "meltdown", "regulatory capture", "Pacific Ocean contamination"]}'
),

(
  'Lead Paint Industry Cover-Up (1904-1978)',
  'lead-paint-industry-cover-up',
  'The lead paint industry knew since at least 1904 that lead paint caused severe neurological harm to children, yet spent decades funding research to dispute the science, lobbying against regulation, and marketing lead paint to consumers. The industry''s suppression of lead hazard data extended the permissible use of lead paint in U.S. homes until 1978. An estimated 38 million U.S. homes still contain lead-based paint.',
  'As early as 1904, medical literature documented that children were being poisoned by lead paint in their homes. Despite this knowledge, the National Lead Company and Dutch Boy brand actively marketed lead paint to consumers and funded industry-sponsored research designed to minimize the documented harm. The industry established the Lead Industries Association (LIA) in 1928, which conducted decades of lobbying against lead paint restrictions and funded studies attacking independent researchers. Internal LIA documents showed the organization tracked scientific literature on lead toxicity while publicly disputing it. The United States banned lead paint for consumer use in 1978 — 74 years after initial medical documentation of its danger to children. By 1978, an estimated 38 million homes in the U.S. contained lead-based paint. In 2019, a California court ordered three lead paint manufacturers — NL Industries (formerly National Lead), Sherwin-Williams, and ConAgra (formerly Dutch Boy) — to pay $409 million into a remediation fund. The California Supreme Court upheld this ruling in 2022.',
  'https://en.wikipedia.org/wiki/Lead_paint_in_the_United_States',
  'verified',
  'Food, Environment & Public Health',
  '1978-01-01',
  '{"category": "Industry scientific fraud / regulatory suppression", "importance": "GOLD", "tags": ["lead paint", "National Lead Company", "Dutch Boy", "Sherwin-Williams", "children health", "industry cover-up"]}'
),

(
  'DDT and Silent Spring (1939-1972)',
  'ddt-silent-spring-pesticide-suppression',
  'DDT was introduced as a safe insecticide in 1939 and used massively throughout the U.S. When marine biologist Rachel Carson published Silent Spring in 1962, documenting DDT''s destruction of bird populations and broader ecological harm, the chemical industry launched a coordinated campaign to discredit her. The EPA banned DDT in the U.S. in 1972; the American bald eagle subsequently recovered from near-extinction.',
  'DDT (dichlorodiphenyltrichloroethane) was introduced as a synthetic insecticide in 1939 and was widely promoted as safe for humans by manufacturers and the U.S. government. It was used extensively in agriculture, malaria control programs, and civilian pest control throughout the 1940s and 1950s. Marine biologist Rachel Carson spent four years documenting DDT''s impacts on bird populations and ecosystems, publishing Silent Spring in 1962. Carson documented that DDT was causing widespread bird deaths, thinning the eggshells of eagles and other raptors to the point where they could not reproduce, and accumulating up the food chain. The chemical industry — led by Velsicol Chemical Company, the primary DDT manufacturer — launched an aggressive campaign to discredit Carson, including threats to sue her publisher and distributing books attacking her science. The EPA banned DDT in the United States in 1972. The American bald eagle, driven to near-extinction by DDT, has since recovered substantially.',
  'https://en.wikipedia.org/wiki/DDT',
  'verified',
  'Food, Environment & Public Health',
  '1962-09-27',
  '{"category": "Pesticide industry / scientific fraud / ecology", "importance": "GOLD", "tags": ["DDT", "Silent Spring", "Rachel Carson", "pesticides", "Velsicol", "industry attacks", "EPA ban", "ecosystem damage"]}'
),

(
  'Microplastics: Global Contamination Crisis (1950s-Present)',
  'microplastics-global-contamination',
  'Microplastic particles have been detected in human blood, breast milk, placentas, lungs, and testicles, as well as in rainwater, deep ocean trenches, Arctic ice, and the summit of Mount Everest. The plastics industry suppressed early research on plastic pollution while production continues at record levels. A 2024 NEJM study found patients with microplastics in arterial plaque had 4.5x higher risk of heart attack or stroke.',
  'Microplastics — plastic particles smaller than 5 millimeters — have been detected in virtually every environment and biological system on Earth. Since large-scale plastic production began in the 1950s, approximately 8.3 billion metric tons of plastic have been produced; roughly 6.3 billion metric tons have become waste. By the 2020s, microplastics had been found in human blood (2022, Vrije Universiteit Amsterdam), human breast milk (2022), human placentas (2020), lung tissue, and testicular tissue. A 2024 study found microplastics in human testicles at concentrations higher than in ocean sediment. Internal industry documents from plastics trade associations show the industry was aware of plastic pollution research and funded studies emphasizing recycling over production reduction, despite knowing recycling was largely economically unviable for most plastics. A 2024 study published in the New England Journal of Medicine found that patients with microplastics in their arterial plaque had a 4.5 times higher risk of heart attack or stroke.',
  'https://en.wikipedia.org/wiki/Microplastics',
  'verified',
  'Food, Environment & Public Health',
  '2022-03-24',
  '{"category": "Corporate pollution / public health / industry cover-up", "importance": "PURE_GOLD", "tags": ["microplastics", "plastic pollution", "American Chemistry Council", "human health", "NEJM", "cardiovascular risk"]}'
),

(
  'Cancer Alley and Environmental Racism (1970s-Present)',
  'cancer-alley-environmental-racism',
  'A 90-mile stretch of the Mississippi River between Baton Rouge and New Orleans — known as Cancer Alley — is home to 150 petrochemical plants disproportionately sited in Black communities. Cancer rates up to 95 times the national average have been documented in some areas. A 2021 UN report characterized the situation as environmental racism. The EPA''s own OIG found the agency consistently failed to enforce environmental law in minority communities.',
  'The 90-mile industrial corridor along the Mississippi River in Louisiana between Baton Rouge and New Orleans — known as Cancer Alley — is home to approximately 150 petrochemical facilities that emit carcinogens including benzene, chloroprene, ethylene oxide, and butadiene. The communities located in the corridor are predominantly Black, with roots in enslaved labor on the same plantations that the industrial sites replaced. St. John the Baptist Parish, Louisiana, has a cancer rate from air pollution that EPA modeling estimated at 95 times the national average — driven primarily by chloroprene emissions from the Denka Performance Elastomer (formerly DuPont) plant. A 2021 UN report from Special Rapporteurs on toxics and racism characterized the situation as environmental racism. The EPA''s own Office of Inspector General published a report in 2024 finding the agency had consistently failed to adequately enforce environmental regulations in communities with majority minority populations.',
  'https://en.wikipedia.org/wiki/Cancer_Alley',
  'verified',
  'Food, Environment & Public Health',
  '2021-03-01',
  '{"category": "Environmental racism / petrochemical industry", "importance": "PURE_GOLD", "tags": ["Cancer Alley", "environmental racism", "Louisiana", "petrochemical industry", "Black communities", "cancer rates", "EPA failures"]}'
),

(
  'Corporate Greenwashing: Fossil Fuel Climate Disinformation (1988-Present)',
  'corporate-greenwashing-fossil-fuel-disinformation',
  'Beginning in the late 1980s, ExxonMobil, Shell, and other fossil fuel companies ran coordinated campaigns to manufacture doubt about climate science — despite their own internal research confirming global warming. The Global Climate Coalition, funded by fossil fuel interests, spent $13 million on a 1997 campaign to stop U.S. ratification of the Kyoto Protocol while internal documents acknowledged the climate science was sound.',
  'In 1988, Exxon scientists presented their own board with a briefing confirming that burning fossil fuels would warm the planet. Internal Exxon research from 1982 projected temperature increases consistent with mainstream climate science — yet the company simultaneously funded external organizations designed to manufacture public doubt about climate change. The Global Climate Coalition (GCC), founded in 1989 and funded by ExxonMobil, Shell, BP, Ford, GM, and others, spent an estimated $13 million on a 1997 advertising campaign to prevent U.S. ratification of the Kyoto Protocol. Documents obtained in litigation showed GCC scientists had internally acknowledged the scientific basis for the greenhouse effect was well established and could not be denied — while the company publicly funded denial. A 2015 investigation by InsideClimate News and the Los Angeles Times found that ExxonMobil''s internal research from the 1970s and 1980s accurately projected current climate trends while the company publicly funded denial. Multiple state attorneys general have investigated ExxonMobil for potential fraud.',
  'https://en.wikipedia.org/wiki/ExxonMobil_climate_change_controversy',
  'verified',
  'Food, Environment & Public Health',
  '1997-01-01',
  '{"category": "Corporate disinformation / climate fraud", "importance": "PURE_GOLD", "tags": ["ExxonMobil", "greenwashing", "climate denial", "Global Climate Coalition", "Kyoto Protocol", "fossil fuel disinformation"]}'
),

(
  'Nestle Infant Formula Marketing Scandal (1970s-Present)',
  'nestle-infant-formula-marketing-scandal',
  'Nestle aggressively marketed infant formula in developing countries by dressing sales representatives as nurses and giving free samples until mothers'' breast milk dried up — knowing contaminated water used to prepare the formula was killing infants. A 1981 WHO code failed to stop the practices. The global Nestle boycott — one of the longest-running consumer boycotts in history — continues to the present.',
  'Beginning in the 1970s, Nestle and other infant formula manufacturers aggressively marketed formula in developing countries using tactics that included dressing sales representatives in nurse uniforms, providing free formula samples in hospitals (causing mothers'' breast milk to dry up), and advertising claims that formula was superior to breastfeeding. In countries where clean water was unavailable or unaffordable, mothers mixed formula with contaminated water, causing a dramatic increase in infant diarrheal disease and deaths. A 1974 War on Want report titled The Baby Killer documented the practices. Nestle sued the report''s publisher; the Swiss trial resulted in a nominal fine but extensive evidence of the practices entered the public record. A 1981 International Code of Marketing of Breast-milk Substitutes was adopted by 118 WHO member states. A global boycott of Nestle products continues to the present. A 2023 investigation found Nestle continues to market formula in developing countries in violation of the WHO code.',
  'https://en.wikipedia.org/wiki/1977_Nestl%C3%A9_boycott',
  'verified',
  'Food, Environment & Public Health',
  '1977-07-04',
  '{"category": "Corporate marketing fraud / infant mortality", "importance": "GOLD", "tags": ["Nestle", "infant formula", "developing countries", "WHO code", "infant mortality", "marketing fraud", "boycott"]}'
),

(
  'Coca-Cola Plachimada Water Depletion (2000-2004)',
  'coca-cola-plachimada-water-depletion',
  'In Plachimada, Kerala, India, Coca-Cola''s bottling plant extracted groundwater at rates that depleted wells serving local farmers and communities, then dumped toxic solid waste containing cadmium and lead on surrounding land as fertilizer. After years of protest by Indigenous women, the plant was shut down in 2004. Kerala''s parliament passed a compensation bill in 2011 that the Governor has refused to sign.',
  'In 2000, the Hindustan Coca-Cola Beverages Private Ltd. bottling plant opened in Plachimada, Kerala, India, extracting approximately 500,000 liters of groundwater per day. Local farmers and communities — primarily Adivasi (Indigenous) peoples — reported that their wells ran dry within two years. The plant also distributed sludge as fertilizer to local farmers; independent testing found the sludge contained cadmium and lead. The BBC conducted testing in 2003 confirming heavy metal contamination in the sludge distributed to farmers'' fields. Following years of protest led primarily by Indigenous women, the Kerala High Court issued an order in 2003 directing the plant to stop drawing groundwater. The plant was shut down in 2004. In 2011, the Kerala state legislature passed the Plachimada Coca-Cola Victims Relief and Compensation Claims Special Tribunal Bill to compensate approximately 8,000 affected residents. The Governor of Kerala has repeatedly declined to give assent to the bill, preventing it from becoming law.',
  'https://en.wikipedia.org/wiki/Plachimada_groundwater_controversy',
  'corroborated',
  'Food, Environment & Public Health',
  '2004-03-01',
  '{"category": "Corporate water extraction / Indigenous rights", "importance": "SILVER", "tags": ["Coca-Cola", "Plachimada", "Kerala", "India", "water depletion", "Indigenous communities", "groundwater extraction"]}'
),

(
  'E-Waste and Agbogbloshie: The Global Tech Sacrifice Zone (1990s-Present)',
  'e-waste-agbogbloshie-global-sacrifice-zone',
  'Agbogbloshie in Accra, Ghana — one of the world''s largest e-waste processing sites — receives millions of tons of discarded electronics from the U.S., Europe, and Asia annually. Workers, many of them children, burn cables and circuit boards to extract metals while inhaling toxic fumes. Soil contamination at the site is among the highest ever measured anywhere on Earth. The Basel Action Network documented that 40% of U.S.-donated electronics is exported illegally.',
  'Agbogbloshie, located in Accra, Ghana, has been one of the world''s largest informal e-waste processing sites. Millions of tons of discarded electronics from the United States, Europe, and Asia arrive each year, frequently mislabeled as second-hand goods to circumvent the Basel Convention, which prohibits the export of hazardous waste from developed to developing countries. Workers — including children — burn insulation off copper cables and heat circuit boards to recover metals, inhaling fumes containing lead, mercury, arsenic, cadmium, PCBs, and dioxins. Soil at Agbogbloshie has been found to contain some of the highest concentrations of hazardous chemicals ever measured in soil samples globally. The Basel Action Network (BAN) used GPS trackers embedded in donated electronics to document that equipment donated to U.S. charities and recyclers was shipped to Agbogbloshie. A 2016 BAN study found that 40% of electronics delivered to certified U.S. recyclers was exported in violation of the Basel Convention.',
  'https://en.wikipedia.org/wiki/Agbogbloshie',
  'corroborated',
  'Food, Environment & Public Health',
  '2016-05-01',
  '{"category": "E-waste / Global South exploitation / environmental racism", "importance": "GOLD", "tags": ["e-waste", "Agbogbloshie", "Ghana", "Basel Convention", "toxic waste", "Global South", "child labor", "electronic waste"]}'
),

(
  'Shrinkflation: Corporate Profit-Hiding Through Product Reduction (2010s-Present)',
  'shrinkflation-corporate-profit-hiding',
  'Shrinkflation — reducing product size while maintaining price — has accelerated dramatically since 2020. Consumer goods companies including Procter & Gamble, General Mills, Kellogg''s, and Unilever have reduced package sizes by 10-25% while reporting record profit margins. Congressional hearings in 2024 documented that major food companies achieved record profits during the same period they cited supply chain costs to justify the practice.',
  'Shrinkflation refers to the practice of reducing the size, weight, or quantity of a consumer product while maintaining the same price — effectively implementing a hidden price increase. The practice has existed for decades but accelerated sharply beginning in 2020-2021. Documented examples include: Doritos bags reduced from 9.75 oz to 9.25 oz; Bounty paper towel sheets reduced by 8%; Cottonelle toilet paper rolls reduced from 340 to 312 sheets; Gatorade bottles reduced from 32 oz to 28 oz; Charmin toilet paper rolls reduced by up to 15%. Consumer advocates note that shrinkflation disproportionately affects lower-income consumers who rely on packaged goods and lack resources to comparison-shop by unit price. Congressional hearings in 2024 addressed the practice after Senator Bob Casey''s report documented that major food companies achieved record profit margins during the same period they cited supply chain costs to justify shrinkflation. The FTC has not formally regulated shrinkflation; European regulators have required clearer labeling.',
  'https://en.wikipedia.org/wiki/Shrinkflation',
  'verified',
  'Food, Environment & Public Health',
  '2022-01-01',
  '{"category": "Corporate consumer fraud / hidden price manipulation", "importance": "SILVER", "tags": ["shrinkflation", "PepsiCo", "Procter & Gamble", "consumer fraud", "price manipulation", "food companies"]}'
)

ON CONFLICT (slug) DO NOTHING;
