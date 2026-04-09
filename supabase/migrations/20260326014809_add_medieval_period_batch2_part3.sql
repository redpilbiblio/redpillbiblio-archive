/*
  # Add Medieval Period events batch 2 part 3

  Inserts events 51-75 from the Medieval Period (500-1500 CE)
  into the events table with duplicate prevention.

  1. New Data
    - 25 timeline events covering Medieval Period history
  2. Safety
    - Uses NOT EXISTS to prevent duplicate insertions
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Mongol Destruction of Khwarezm — 5 Million Killed in Three Years',
    'Between 1219 and 1221, Genghis Khan launched a campaign against the Khwarezm Empire in Central Asia after its sultan executed a Mongol trade delegation — an act of profound miscalculation. The resulting Mongol campaign was one of the most destructive military operations in history: the great cities of Samarkand, Bukhara, Urgench, Merv, Nishapur, and Herat — among the most sophisticated urban centers in the world — were systematically destroyed, their populations massacred or enslaved. Merv, reportedly a city of one million people, was leveled and its inhabitants killed over the course of several days; contemporary sources place the dead at over a million in this city alone. Modern demographic estimates suggest the campaign killed 5–10 million people across Central Asia in three years, depopulating entire regions for generations and destroying an irrigation infrastructure that has never been fully rebuilt.',
    '1219-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongols", "Khwarezm", "Genghis Khan", "Central Asia", "genocide"], "category": "Military Atrocity", "significance": "critical", "sources": ["Wikipedia - Mongol conquest of the Khwarezm Empire", "Britannica - Genghis Khan"]}'::jsonb
  ),
  (
    'The Mongol Conquest of Persia — A Civilization''s Infrastructure Systematically Destroyed',
    'Between 1219 and 1258, Mongol forces completed the conquest of the Iranian plateau, destroying the sophisticated qanats (underground irrigation channels) that had sustained Persian civilization for millennia, massacring or enslaving urban populations in cities including Nishapur, Merv, Herat, and Ray, and reducing the population of greater Iran from an estimated 2.5 million to 250,000 in some regions. The Mongols killed Persian administrators, scholars, and craftsmen systematically — targeting the human capital that maintained complex systems of governance and agriculture. The Persian irrigation infrastructure required generations to rebuild; some regions never recovered. The deliberate targeting of agricultural and administrative infrastructure — rather than just military forces — represents the Mongol innovation of comprehensive civilizational destruction as a form of strategic deterrence. Persia''s relative decline in the medieval world traces directly to this catastrophe.',
    '1221-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongols", "Persia", "conquest", "infrastructure destruction", "genocide"], "category": "Military Atrocity", "significance": "critical", "sources": ["Wikipedia - Mongol conquest of Persia", "Britannica - Mongol conquests"]}'::jsonb
  ),
  (
    'The Teutonic Knights — Crusading Order Becomes a Colonial State',
    'Founded in 1190 during the Third Crusade, the Teutonic Knights — a German military-religious order — pivoted in 1226 from the Holy Land to the forced conversion and colonization of pagan Prussia and Lithuania, establishing by the 14th century one of Europe''s most powerful territorial states along the Baltic coast. The Order conducted annual ''Reisen'' — raiding expeditions — into pagan Lithuania that European knights attended as recreational military tourism, systematically burning villages, enslaving populations, and seizing land in a process that amounted to the first systematic European colonization of neighboring peoples. By the 14th century the Teutonic Knights controlled Prussia, Livonia, and much of the eastern Baltic — a state built on forced conversion, ethnic cleansing, and the extraction of agricultural surplus from an enslaved peasantry. Their defeat at Grunwald in 1410 by Poland-Lithuania marked the beginning of their decline.',
    '1226-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Teutonic Knights", "Baltic Crusades", "Prussia", "religious colonialism", "forced conversion"], "category": "Colonial Conquest", "significance": "high", "sources": ["Britannica - Teutonic Order", "Wikipedia - Teutonic Order"]}'::jsonb
  ),
  (
    'Sundiata Keita Founds the Mali Empire — West Africa''s Greatest Dynasty',
    'Around 1235 CE, Sundiata Keita — a warrior-king of the Mandingo people — defeated the Sosso ruler Sumanguru Kante at the Battle of Kirina and founded the Mali Empire, which would become the largest and wealthiest empire in West Africa. Uniting diverse Mandingo clans under a single political structure centered on Niani on the upper Niger River, Sundiata established a trading empire that controlled the lucrative trans-Saharan gold and salt routes. At its peak under later rulers, the Mali Empire stretched from the Atlantic coast to the Niger River bend, encompassing cities like Timbuktu and Djenne. The empire''s oral epic — the Epic of Sundiata — remains one of the foundational texts of African literature, still performed by griots across West Africa today.',
    '1235-01-01'::date,
    'Financial Systems',
    '{"tags": ["Mali Empire", "Sundiata Keita", "West Africa", "gold trade", "trans-Saharan"], "category": "Empire Building", "significance": "critical", "sources": ["Britannica - Sundiata Keita", "Wikipedia - Mali Empire"]}'::jsonb
  ),
  (
    'The Mongol Invasion of Kievan Rus — Russia''s Traumatic Founding Wound',
    'Between 1237 and 1242, Mongol forces under Batu Khan and general Subutai systematically destroyed the Kievan Rus principalities — the first organized Slavic states — burning over a dozen cities including Kiev, Vladimir, and Ryazan, massacring their populations, and imposing the Golden Horde''s rule over what is now Russia and Ukraine for the next 240 years. Kiev, one of Europe''s largest cities at the time, was reduced to a handful of survivors; Polish monks who passed through two years later reported human skulls and bones covering the ground for miles. The Mongol occupation — the ''Tatar Yoke'' — shaped Russian political culture profoundly: the destruction of the existing princely order created a power vacuum that Moscow eventually filled by demonstrating loyalty to the Khan before turning against him. Russia''s authoritarian political traditions and suspicion of the West have been attributed by many historians to the legacy of Mongol rule.',
    '1237-12-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongol invasion", "Kievan Rus", "Russia", "Batu Khan", "Tatar Yoke"], "category": "Military Invasion", "significance": "critical", "sources": ["Wikipedia - Mongol invasion of Kievan Rus", "Britannica - Mongol Empire"]}'::jsonb
  ),
  (
    'The Mongol Invasion of Europe — Terror Reaches the Gates of Vienna',
    'In 1241–1242, a Mongol army under Batu Khan and general Subutai — veterans of campaigns that had already annihilated the Kievan Rus principalities — invaded Poland and Hungary, annihilating a combined Polish-German army at the Battle of Legnica on April 9, 1241, and devastating a Hungarian royal force at the Battle of Mohi two days later. The Mongols reached the Adriatic coast, laid waste to large portions of Poland, Hungary, and Croatia, and stood at the edge of the Holy Roman Empire. Estimates suggest they killed 500,000 people in Hungary alone — half the population. Europe was saved not by military resistance but by the death of Great Khan Ogedei in December 1241, which forced the Mongol commanders to return east for a succession kurultai. The Mongol invasion permanently scarred Eastern European political consciousness and shaped its long-standing relationship with existential military threat from the east.',
    '1241-04-09'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongol invasion", "Europe", "Batu Khan", "Battle of Legnica", "Battle of Mohi"], "category": "Military Invasion", "significance": "critical", "sources": ["Wikipedia - Mongol invasions and conquests", "Britannica - Mongol Empire"]}'::jsonb
  ),
  (
    'The Inquisition''s Torture Protocols — Systematic Coercion as Official Church Policy',
    'In 1252, Pope Innocent IV issued the papal bull Ad extirpanda, officially authorizing the use of torture by Inquisitors against accused heretics to extract confessions — bringing the medieval Roman legal practice of torture into the formal apparatus of the Catholic Church for the first time. The permitted torture methods included the strappado (suspension by roped arms tied behind the back), the rack, and various forms of stress positions; the rules specified that torture could not cause death or permanent injury, could only be applied once, and required the presence of a notary to record proceedings. In practice, these restrictions were frequently circumvented. The Ad extirpanda remained in force until 1816, meaning the Church officially authorized torture of accused heretics for 564 years. The document demonstrates how institutions rationalize and bureaucratize cruelty when their authority is perceived to be threatened.',
    '1252-05-15'::date,
    'Government Health Transparency',
    '{"tags": ["Inquisition", "torture", "Ad extirpanda", "Catholic Church", "heresy"], "category": "Institutional Violence", "significance": "critical", "sources": ["Britannica - Inquisition", "Wikipedia - Ad extirpanda"]}'::jsonb
  ),
  (
    'Mongol Sack of Baghdad — The Destruction of the Islamic Golden Age',
    'On February 13, 1258, Mongol forces under Hulegu Khan — grandson of Genghis Khan — entered Baghdad after a two-week siege, killing Caliph al-Musta''sim (reportedly wrapped in a carpet and trampled to death), and slaughtering an estimated 200,000 to 800,000 inhabitants in one of history''s most devastating urban massacres. The House of Wisdom and all of Baghdad''s libraries were destroyed; books were thrown into the Tigris in such quantities that the river was said to run black with ink. The sack ended the Abbasid Caliphate — which had governed the Islamic world for 500 years — and effectively terminated the Islamic Golden Age by annihilating its institutional infrastructure. The event remains one of the most consequential acts of cultural destruction in human history.',
    '1258-02-13'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongols", "Baghdad", "Abbasid Caliphate", "House of Wisdom", "massacre"], "category": "Military Massacre", "significance": "critical", "sources": ["Wikipedia - Siege of Baghdad", "Wikipedia - House of Wisdom"]}'::jsonb
  ),
  (
    'The Pax Mongolica — How Mongol Terror Created the World''s First Global Trade Network',
    'Between approximately 1260 and 1360, the Mongol Empire''s control of the Eurasian landmass created the Pax Mongolica — a period of enforced peace and administrative efficiency across the world''s most important trade arteries, enabling unprecedented movement of goods, people, and ideas between China, Central Asia, Persia, and Europe. Mongol Yam relay stations provided fast diplomatic communication; merchants were guaranteed protection under the Mongol law code (yasa); paper passports (paizi) allowed free travel across thousands of miles of Mongol territory. The volume of trade along the Silk Road during this period was never matched until the 19th century. The Pax Mongolica also facilitated the transmission of the Black Death from China to Europe — a lethal byproduct of the first truly global trade network. The lesson: systems that accelerate the flow of goods also accelerate the flow of pathogens.',
    '1260-01-01'::date,
    'Financial Systems',
    '{"tags": ["Pax Mongolica", "Silk Road", "trade", "Mongol Empire", "global commerce"], "category": "Trade & Commerce", "significance": "critical", "sources": ["Wikipedia - Pax Mongolica", "Britannica - Silk Road"]}'::jsonb
  ),
  (
    'The Mongol Empire Divides — Four Khanates and the Fragmentation of World Power',
    'Following the death of Great Khan Mongke in 1259 and the subsequent civil war between his brothers Kublai and Ariq Boke (1260–1264), the Mongol Empire permanently fragmented into four effectively independent successor states: the Yuan Dynasty (China, Korea, Manchuria), the Ilkhanate (Persia, Iraq, Anatolia), the Chagatai Khanate (Central Asia), and the Golden Horde (Russia, Ukraine, Kazakhstan). These khanates shared a common dynastic origin but increasingly diverged in culture, religion, and interests — the Ilkhanate converting to Islam, the Golden Horde adopting Tatar culture, and the Yuan absorbing Chinese administrative traditions. The fragmentation ended the Pax Mongolica''s unified protection of trade routes and created competing power centers that traded, allied, and warred with each other. The division also eliminated the possibility of a unified Mongol attack on Europe — the continent''s salvation owed less to its own military strength than to Mongol succession politics.',
    '1260-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Mongol Empire", "fragmentation", "Kublai Khan", "Golden Horde", "Ilkhanate"], "category": "Empire Decline", "significance": "critical", "sources": ["Wikipedia - Division of the Mongol Empire", "Britannica - Mongol Empire"]}'::jsonb
  ),
  (
    'Battle of Ain Jalut — The First Mongol Defeat Saves the Islamic World',
    'On September 3, 1260, the Mamluk Sultanate of Egypt — led by Sultan Qutuz and commander Baybars — decisively defeated a Mongol army at Ain Jalut (Spring of Goliath) near Nazareth in Palestine, marking the first significant defeat of Mongol forces in their westward expansion. The battle shattered the myth of Mongol invincibility, preventing the conquest of Egypt, North Africa, and potentially all of Western Europe. The Mamluks employed tactical deception — feigning a retreat to draw the Mongols into a prepared ambush — and their cavalry proved superior in the narrow terrain. Ain Jalut preserved Cairo, the new center of Islamic learning after Baghdad''s destruction, and the victory enabled the Mamluks to drive the Mongols out of Syria entirely.',
    '1260-09-03'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Ain Jalut", "Mamluks", "Mongols", "Egypt", "Islamic world"], "category": "Military Victory", "significance": "critical", "sources": ["Britannica - Battle of Ayn Jalut", "Wikipedia - Battle of Ain Jalut"]}'::jsonb
  ),
  (
    'The Mongol Siege of Xiangyang — Six Years to Break China''s Greatest Fortress',
    'From 1267 to 1273, Mongol forces under Kublai Khan besieged the twin fortress cities of Xiangyang and Fandeng on the Han River in central China — the gateway to the Song Dynasty''s heartland — in the longest and most technically sophisticated siege operation of the medieval period. The cities held out for six years while the Mongols constructed a naval blockade, cut off all supply routes, and deployed Chinese, Muslim, and Mongol engineering expertise. The siege was only broken when Kublai Khan imported Persian engineers to construct counterweight trebuchets — ''Huihui pao'' or Muslim catapults — capable of hurling 150-kilogram stones with devastating force, which demolished the defenses within days of their first use. The fall of Xiangyang opened southern China to Mongol conquest and ended the Song Dynasty. The siege exemplifies the Mongol Empire''s sophisticated use of technological transfer across conquered peoples as a military strategy.',
    '1267-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Xiangyang siege", "Mongols", "Song Dynasty", "siege warfare", "Kublai Khan"], "category": "Military History", "significance": "high", "sources": ["Wikipedia - Siege of Xiangyang", "Britannica - Kublai Khan"]}'::jsonb
  ),
  (
    'Roger Bacon — Medieval Europe''s Prophet of Science Imprisoned by the Church',
    'English Franciscan friar Roger Bacon (c. 1214–1292) — writing from his cell in Oxford and later Paris where he was imprisoned — produced some of the most remarkable proto-scientific work in medieval European history, describing the fundamentals of the scientific method, predicting the invention of automobiles, aircraft, submarines, and eyeglasses, providing the first clear Western formula for gunpowder, and arguing that empirical observation and mathematical reasoning should be the foundations of natural philosophy. His major works including the Opus Majus were written in secret or in code to avoid Franciscan censors. Bacon was placed under house arrest around 1277 for ''suspected novelties'' — ideas too dangerous for Church orthodoxy. The pattern of his career — genius generating knowledge that threatens institutional power and being suppressed as a result — would repeat with Galileo, Bruno, and countless others across the centuries.',
    '1267-01-01'::date,
    'Energy & Suppressed Technology',
    '{"tags": ["Roger Bacon", "medieval science", "suppression", "Church", "scientific method"], "category": "Suppressed Science", "significance": "critical", "sources": ["Britannica - Roger Bacon", "Wikipedia - Roger Bacon"]}'::jsonb
  ),
  (
    'Kublai Khan Founds the Yuan Dynasty — The Mongols Rule China',
    'In 1271 CE, Kublai Khan — grandson of Genghis Khan and Great Khan of the Mongol Empire — formally proclaimed the Yuan Dynasty in China, completing the Mongol conquest of the Song Dynasty and creating the largest contiguous land empire in history, stretching from the Pacific Ocean to Eastern Europe. Kublai Khan moved the capital to Khanbaliq (modern Beijing) and established a sophisticated administration that incorporated Chinese bureaucratic traditions while maintaining Mongol supremacy. Under the Yuan, China was integrated into a pan-Eurasian trade network — the Pax Mongolica — that enabled Marco Polo''s famous journey and dramatically accelerated the flow of goods, technologies, and disease along the Silk Road. The Yuan Dynasty ruled China for less than a century before being overthrown by the Han Chinese Ming Dynasty in 1368.',
    '1271-01-01'::date,
    'Financial Systems',
    '{"tags": ["Kublai Khan", "Yuan Dynasty", "Mongol", "China", "Silk Road"], "category": "Empire Building", "significance": "critical", "sources": ["Britannica - Kublai Khan", "Wikipedia - Yuan dynasty"]}'::jsonb
  ),
  (
    'Marco Polo in China — The Journey That Connected Europe to the East',
    'Between 1271 and 1295, Venetian merchant Marco Polo traveled from Venice through Persia and Central Asia to the court of Kublai Khan in China, spending 17 years in service to the Mongol emperor and traversing regions no European had systematically documented. His account — Il Milione (The Travels of Marco Polo), dictated to a romance writer while Polo was imprisoned in Genoa around 1298 — described a China of staggering wealth and sophistication: paper money, coal, vast cities, advanced postal systems, and the abundance of Hangzhou, which he called ''the greatest city in the world.'' Though widely doubted in his lifetime as exaggeration, Polo''s accounts were the primary European source of information about East Asia for two centuries and directly influenced Christopher Columbus, who annotated his own copy and used it to plan his 1492 voyage.',
    '1271-01-01'::date,
    'Financial Systems',
    '{"tags": ["Marco Polo", "China", "Silk Road", "Mongol Empire", "exploration"], "category": "Exploration & Trade", "significance": "critical", "sources": ["Britannica - Marco Polo", "Wikipedia - Marco Polo"]}'::jsonb
  ),
  (
    'Great Zimbabwe — Africa''s Medieval Stone City and Its Forgotten Empire',
    'Between approximately 1220 and 1450 CE, the Kingdom of Great Zimbabwe flourished in what is now southern Zimbabwe — its capital a massive stone city of 10,000–20,000 inhabitants, built without mortar from precisely fitted granite blocks in a construction tradition unique in all of sub-Saharan Africa. Great Zimbabwe controlled the interior gold trade connecting the continent''s goldfields to the Indian Ocean via Swahili coastal city-states such as Sofala, exporting gold, ivory, and iron to Arabia, Persia, India, and China in exchange for silk, porcelain, and glass beads. At its peak, the state encompassed over 150 subsidiary zimbabwes covering 50,000 square kilometers. When European colonizers discovered the ruins in the 19th century, they refused to believe Africans had built them, fabricating myths of Phoenician or Semitic origins that served to deny African civilizational achievement.',
    '1300-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Great Zimbabwe", "Africa", "stone architecture", "gold trade", "colonial denial"], "category": "Civilization", "significance": "critical", "sources": ["Wikipedia - Kingdom of Great Zimbabwe", "Britannica - Great Zimbabwe"]}'::jsonb
  ),
  (
    'The Avignon Papacy — When France Captured the Pope',
    'From 1309 to 1377, the seat of the papacy was moved from Rome to Avignon in southern France, where it remained under heavy French political influence for nearly 70 years during the reigns of seven successive popes — all of them French. The Avignon papacy began when French King Philip IV pressured the newly elected Clement V to relocate, following Philip''s successful campaign to destroy the Knights Templar (from whose assets Philip benefited enormously). The papal court at Avignon became notorious for its opulence, nepotism, and sale of church offices and indulgences — exactly the corruption that would eventually trigger Luther''s Reformation. The Italian writer Petrarch called Avignon ''the Babylon of the West.'' The papacy''s return to Rome in 1377 under Gregory XI immediately triggered the Western Schism, demonstrating that the Church''s political crisis was structural, not geographic.',
    '1309-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Avignon Papacy", "Catholic Church", "France", "corruption", "Philip IV"], "category": "Church Corruption", "significance": "critical", "sources": ["Britannica - Avignon Papacy", "Wikipedia - Avignon Papacy"]}'::jsonb
  ),
  (
    'The Great Famine of 1315–1322 — Climate Collapse Kills Millions in Europe Before the Plague',
    'Beginning in 1315, a series of extraordinarily wet summers caused by a shift in North Atlantic weather patterns destroyed harvests across Northern Europe for seven consecutive years — triggering the Great Famine that killed an estimated 5–12% of the population in England, France, the Low Countries, Scandinavia, Germany, and Poland. At the height of the famine in 1316–1317, prices of grain increased by 320% in England; urban poor were reduced to eating cats, dogs, and allegedly human flesh; infanticide and abandonment of children became documented phenomena. The famine killed an estimated 7.5 million people in Northern Europe alone and severely weakened the health of the survivors — the weakened population that would face the Black Death just 30 years later. The Great Famine demonstrated medieval civilization''s catastrophic vulnerability to climate variation and the speed with which agricultural surplus could be converted to mass starvation.',
    '1315-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags": ["Great Famine", "1315-1322", "medieval Europe", "climate", "starvation"], "category": "Famine & Climate", "significance": "critical", "sources": ["Britannica - Great Famine (1315-22)", "Wikipedia - Great Famine of 1315-1322"]}'::jsonb
  ),
  (
    'Mansa Musa''s Pilgrimage — The Wealthiest Man in History Floods the World With Gold',
    'In 1324–1325, Mansa Musa I of the Mali Empire — widely considered the wealthiest individual in all of recorded history — undertook a hajj to Mecca with a caravan of 60,000 people, including 12,000 enslaved servants each carrying 1.8 kilograms of gold bars, and 80 camels each laden with 136 kilograms of gold dust. When the procession passed through Cairo in July 1324, Musa''s extravagant gift-giving and spending so flooded the Egyptian market with gold that he single-handedly caused a currency crisis — depressing gold''s value for at least 12 years. His pilgrimage put the Mali Empire on European maps for the first time and established Timbuktu as a global center of Islamic scholarship. The journey revealed the staggering wealth flowing from West Africa''s gold trade — a fact that would drive European colonial ambitions toward the continent for centuries.',
    '1324-07-19'::date,
    'Financial Systems',
    '{"tags": ["Mansa Musa", "Mali Empire", "gold", "Timbuktu", "trans-Saharan trade"], "category": "Economic Power", "significance": "critical", "sources": ["Wikipedia - Mansa Musa", "Britannica - Musa I of Mali"]}'::jsonb
  ),
  (
    'The Mali Empire''s Timbuktu — Africa''s Greatest Center of Learning',
    'By the 14th century, Timbuktu — a trading city on the southern edge of the Sahara in what is now Mali — had become the greatest center of Islamic scholarship in sub-Saharan Africa, housing the Sankore mosque complex that functioned as a university enrolling up to 25,000 students and maintaining archives of 700,000 to 1 million manuscripts on theology, law, mathematics, astronomy, history, and medicine. The city''s prosperity rested on its strategic position at the intersection of trans-Saharan trade routes, where gold and salt were exchanged under Malian imperial protection. Under Mansa Musa''s patronage, Timbuktu attracted the Spanish-Arab architect Abu Ishaq al-Sahili to design its great mosques. The deliberate colonial narrative that dismissed Timbuktu as a myth or a symbol of remoteness served to erase the historical reality of sophisticated African intellectual civilization that predated European contact.',
    '1325-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Timbuktu", "Mali Empire", "African scholarship", "manuscripts", "Islamic education"], "category": "African Civilization", "significance": "critical", "sources": ["Britannica - Timbuktu", "Northwestern Magazine - Mansa Musa''s Reign"]}'::jsonb
  ),
  (
    'Ibn Battuta''s Journeys — The Greatest Traveler in Human History Documents the Medieval World',
    'Between 1325 and 1368, Moroccan scholar Ibn Battuta traveled approximately 75,000 miles — more than any individual before the age of steam — visiting the entire Islamic world from Morocco to Mali, from Turkey to China, from the Malabar Coast to the Mali Empire, documenting courts, customs, scholars, and trade routes in his extraordinary account the Rihla. Ibn Battuta''s observations provide the most detailed firsthand documentation of the medieval Islamic world at its peak: the courts of the Golden Horde in Russia, the wealth of Mali under Mansa Musa''s successors, the merchant city-states of the Swahili coast, and the opulence of Delhi under the Tughlaq Sultanate. His account reveals a medieval world of far greater connectivity, sophistication, and commercial exchange than European-centric histories acknowledge — an Islamic civilizational network that stretched from the Atlantic to the Pacific.',
    '1325-06-14'::date,
    'Financial Systems',
    '{"tags": ["Ibn Battuta", "Islamic world", "medieval travel", "Rihla", "global connectivity"], "category": "Exploration & Documentation", "significance": "critical", "sources": ["Britannica - Ibn Battuta", "Wikipedia - Ibn Battuta"]}'::jsonb
  ),
  (
    'The Battle of Crecy — Longbow Ends the Age of Armored Knights',
    'On August 26, 1346, an English army of approximately 12,000 under Edward III defeated a French force of 35,000–80,000 at Crecy in northern France, killing an estimated 1,500 French knights and 10,000–15,000 total casualties in a devastating demonstration of the longbow''s supremacy over armored cavalry. The Welsh and English longbowmen — each capable of firing 10–12 aimed arrows per minute with a range of 300 yards — unleashed coordinated volleys that darkened the sky and systematically destroyed wave after wave of charging French horsemen. The crossbowmen hired by France were outranged and outpaced; their Genoese equipment was reportedly soaked by rain and their strings were slack. Crecy marked the effective end of mounted chivalric warfare as the decisive factor in battle and announced the age of infantry firepower — a transition that would continue through gunpowder weapons.',
    '1346-08-26'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Crecy", "longbow", "Hundred Years War", "Edward III", "chivalry"], "category": "Military Technology", "significance": "critical", "sources": ["Britannica - Battle of Crecy", "Wikipedia - Battle of Crecy"]}'::jsonb
  ),
  (
    'The Black Death Arrives in Europe — One-Third of a Continent Dies',
    'In October 1347, Genoese trading ships returning from the Black Sea docked at Messina, Sicily, carrying sailors who were already dying of a horrific illness — bubonic plague caused by the bacterium Yersinia pestis. Within three years, the Black Death swept through Europe, killing an estimated 25–50 million people, between one-third and one-half of the continent''s population, in the most lethal pandemic in recorded human history. Cities like Florence saw their populations cut in half; entire villages were wiped out; the Church lost so many clergy that it imported replacements who were unqualified, undermining its authority permanently. The demographic catastrophe created labor shortages that weakened feudalism, accelerated peasant uprisings, and fundamentally altered European social structures — the survivors inherited land, commanded higher wages, and began to question the divine order that had failed to protect them.',
    '1347-10-01'::date,
    'Government Health Transparency',
    '{"tags": ["Black Death", "bubonic plague", "pandemic", "medieval Europe", "Yersinia pestis"], "category": "Pandemic", "significance": "critical", "sources": ["Wikipedia - Black Death", "Britannica - Black Death"]}'::jsonb
  ),
  (
    'The Black Death in the Islamic World — The Plague That Devastated the Middle East',
    'The Black Death of 1347–1349 struck the Islamic world — Egypt, Syria, Palestine, Iraq, and Persia — with catastrophic force, killing an estimated one-third to one-half of the populations of Cairo, Damascus, and Baghdad within three years. Egypt''s chronicler al-Maqrizi recorded 900 deaths per day in Cairo at the plague''s peak; entire administrative structures collapsed as officials died faster than they could be replaced. The Islamic world''s response combined prayer, medical quarantine attempts, and theological debate about whether flight from plague was permissible — with jurist Ibn al-Wardi, who wrote a vivid eyewitness account of the plague''s devastation in Syria, himself dying of the disease in 1349. The plague accelerated the decline of Mamluk Egypt and weakened the Islamic states that had previously checked Mongol expansion, reshaping the balance of power in the Mediterranean for the following century.',
    '1347-10-01'::date,
    'Government Health Transparency',
    '{"tags": ["Black Death", "Islamic world", "Egypt", "plague", "Cairo"], "category": "Pandemic", "significance": "critical", "sources": ["Wikipedia - Black Death in the Islamic world", "Britannica - Black Death"]}'::jsonb
  ),
  (
    'The Black Death''s Social Aftermath — How Plague Dismantled Feudalism',
    'In the decade following the Black Death (1347–1351), the catastrophic labor shortage created by the death of 30–50% of Europe''s population fundamentally altered the power relationship between lords and peasants for the first time in centuries. Surviving serfs could demand wages and freedom of movement; lords competed for laborers by offering better conditions; land values collapsed while labor prices tripled. The English Statute of Laborers (1351) — which attempted to cap wages at pre-plague levels and reimpose feudal obligations — was widely defied and contributed directly to the Peasants'' Revolt of 1381. The Church, whose clergy died at the same rate as the general population, lost moral authority when its prayers failed; universities that trained priests in Latin had to accept students in vernacular languages, accelerating literacy. The plague, in killing a third of Europe, inadvertently created the conditions for the Renaissance and Reformation.',
    '1351-01-01'::date,
    'Corporate Accountability',
    '{"tags": ["Black Death aftermath", "feudalism decline", "labor shortage", "Statute of Laborers", "social change"], "category": "Social Transformation", "significance": "critical", "sources": ["Wikipedia - Black Death", "Britannica - Feudalism"]}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);