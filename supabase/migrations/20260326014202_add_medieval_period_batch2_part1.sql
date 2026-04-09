/*
  # Add Medieval Period events batch 2 part 1

  Inserts events 1-25 from the Medieval Period (500-1500 CE)
  into the events table with duplicate prevention.

  1. New Data
    - 25 timeline events covering Medieval Period history
  2. Safety
    - Uses NOT EXISTS to prevent duplicate insertions
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'Justinian''s Code — Rome''s Laws Rewritten to Control an Empire',
    'Between 529 and 534 CE, Byzantine Emperor Justinian I commissioned the Corpus Juris Civilis — a systematic compilation of all Roman law directed by jurist Tribonian — replacing centuries of contradictory legal texts with a single authoritative framework. The Code contained the Codex, Digest, Institutes, and Novels, and formally became law throughout the Eastern Roman Empire on April 7, 529. Medieval Europe''s legal systems — including canon law, civil law traditions in France, Spain, and Italy, and the foundations of Western jurisprudence — derive directly from Justinian''s Code. It remains the single most influential legal document in history, governing concepts of property, contract, and criminal law that persist today.',
    '0529-04-07'::date,
    'Elections & Democratic Process',
    '{"tags": ["Justinian", "Roman law", "Corpus Juris Civilis", "Byzantine", "legal system"], "category": "Law & Governance", "significance": "critical", "sources": ["Wikipedia - Corpus Juris Civilis", "Britannica - Roman Law"]}'::jsonb
  ),
  (
    'Hagia Sophia Completed — The Cathedral That Defined an Empire',
    'On December 27, 537 CE, Emperor Justinian I inaugurated the Hagia Sophia in Constantinople — a domed basilica measuring 100 meters long and 69 meters wide that became the largest cathedral in the world for nearly 1,000 years. Designed by Greek geometers Isidore of Miletus and Anthemius of Tralles, it required over 10,000 workers and was built in just five years — an engineering feat unprecedented in the ancient world. The Hagia Sophia served as the epicenter of Eastern Orthodox Christianity, the coronation site of Byzantine emperors, and a political statement about the power of church and state. When Mehmed II conquered Constantinople in 1453, he immediately converted it to a mosque — symbolizing the transfer of civilizational authority.',
    '0537-12-27'::date,
    'Media Manipulation',
    '{"tags": ["Hagia Sophia", "Byzantine", "Justinian", "Constantinople", "architecture"], "category": "Architecture & Power", "significance": "critical", "sources": ["Wikipedia - Hagia Sophia", "TheCollector - What Is Hagia Sophia"]}'::jsonb
  ),
  (
    'Muhammad Receives First Revelation — The Birth of Islam',
    'In 610 CE, a 40-year-old merchant named Muhammad reported receiving his first divine revelation from the archangel Gabriel in the Cave of Hira near Mecca, launching the world''s second-largest religion. Over the next 23 years until his death in 632 CE, these revelations were compiled into the Quran, a text that would bind over a billion people across centuries. Within a century of Muhammad''s death, Islamic armies had conquered territory from Spain to Central Asia — a geopolitical transformation unmatched in speed and scale in human history. The religion he founded would reshape trade routes, preserve ancient Greek knowledge, and generate one of history''s most fertile intellectual civilizations.',
    '0610-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Islam", "Muhammad", "revelation", "religion", "Arabia"], "category": "Religion & Ideology", "significance": "critical", "sources": ["Wikipedia - Muhammad in Islam", "Britannica - Muhammad"]}'::jsonb
  ),
  (
    'Tang Dynasty China — The World''s Most Cosmopolitan Medieval Empire',
    'The Tang Dynasty (618–907 CE) presided over China''s most cosmopolitan golden age: the capital Chang''an — with over one million inhabitants — hosted merchants, monks, diplomats, and artists from Central Asia, Persia, India, Korea, Japan, and the Byzantine Empire, functioning as the eastern terminus of the Silk Road and the world''s most diverse city. Tang China pioneered woodblock printing, porcelain manufacture, advanced agricultural techniques, and poetry as a high art form, while its military expansion brought Central Asian territories under Chinese suzerainty. The dynasty''s open cultural policy absorbed Buddhist art and philosophy from India and Nestorian Christianity from the Middle East. The Tang collapse in 907, following the devastating An Lushan Rebellion (755–763) that killed an estimated 36 million people and the chaos of warlord fragmentation, demonstrated the vulnerability of even the most sophisticated polities to military revolt and elite overreach.',
    '0618-01-01'::date,
    'Financial Systems',
    '{"tags": ["Tang Dynasty", "China", "Silk Road", "Chang''an", "golden age"], "category": "Empire & Civilization", "significance": "critical", "sources": ["Britannica - Tang dynasty", "Wikipedia - Tang dynasty"]}'::jsonb
  ),
  (
    'The Hijra — Muhammad''s Flight to Medina Founds an Islamic State',
    'In 622 CE, facing persecution in Mecca, Muhammad and his followers fled north to Medina — an event so pivotal it marks Year 1 of the Islamic calendar. In Medina, Muhammad transformed from prophet to statesman, drafting the Constitution of Medina, which established the first city-state governed by Islamic law and unified disparate Arab tribes under one political-religious framework. Within eight years, Muhammad had retaken Mecca without significant bloodshed, unifying the Arabian Peninsula under Islam for the first time. The Hijra established the template of religious community as political state — a model that would define Islamic governance for over a millennium.',
    '0622-01-01'::date,
    'Elections & Democratic Process',
    '{"tags": ["Hijra", "Islam", "Medina", "Muhammad", "Islamic state"], "category": "Religion & Politics", "significance": "critical", "sources": ["Britannica - Hijra", "Wikipedia - Constitution of Medina"]}'::jsonb
  ),
  (
    'The Battle of the Masts — Islam Enters the Mediterranean',
    'In 655 CE, the Arab Muslim fleet — under the command of Abdullah ibn Sa''ad — defeated the Byzantine navy under Emperor Constans II in the Battle of the Masts (Phoenix) off the coast of Lycia in Asia Minor, in the first major Islamic naval victory and the event that opened the Mediterranean Sea to Muslim power. The Byzantine fleet, though larger, was grappled and boarded by Arab sailors who used the superior seamanship techniques of Egyptian and Syrian shipwrights the Muslims had inherited after conquering those provinces. The battle''s name came from the Arab tactic of lashing ships together with chains. The victory ended Byzantine naval supremacy in the eastern Mediterranean, enabling subsequent Muslim raids on Cyprus, Rhodes, Sicily, and Sardinia and establishing the naval balance of power that would shape Mediterranean politics for centuries.',
    '0655-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of the Masts", "Arab navy", "Byzantine", "Mediterranean", "Islamic expansion"], "category": "Naval Battle", "significance": "high", "sources": ["Britannica - Battle of the Masts", "Wikipedia - Battle of the Masts"]}'::jsonb
  ),
  (
    'The Umayyad Caliphate — The First Islamic Empire Spans Three Continents',
    'From 661 to 750 CE, the Umayyad Caliphate — headquartered in Damascus and founded by Muawiyah I following the assassination of Ali ibn Abi Talib — governed the largest empire the world had yet seen at its peak: stretching from the Iberian Peninsula across North Africa, through Arabia and Persia to the borders of India and Central Asia. The Umayyad expansion moved at breathtaking speed: Spain was conquered in 711, Sindh (Pakistan) in 712, and Central Asia was being absorbed simultaneously. The caliphate imposed Arabic as an administrative language across this vast territory, creating a linguistic unity that persists in the Arab world today. The Umayyad regime was characterized by Arab ethnic supremacy over non-Arab Muslims — a discrimination that fueled the Abbasid Revolution of 750 and the permanent transformation of Islam from an Arab tribal religion to a universal civilization.',
    '0661-01-01'::date,
    'Elections & Democratic Process',
    '{"tags": ["Umayyad Caliphate", "Islamic Empire", "Arab expansion", "Damascus", "caliphate"], "category": "Empire Building", "significance": "critical", "sources": ["Britannica - Umayyad Caliphate", "Wikipedia - Umayyad Caliphate"]}'::jsonb
  ),
  (
    'Battle of Karbala — The Massacre That Created the Shia-Sunni Divide',
    'On October 10, 680 CE (Muharram 10, 61 AH) — Ashura — Hussein ibn Ali, grandson of the Prophet Muhammad and third Imam of Shia Islam, was killed along with 72 of his companions at Karbala in modern Iraq by the forces of Yazid I, the Umayyad Caliph, after refusing to pledge allegiance to what he regarded as an illegitimate usurper of the caliphate. Hussein''s head was severed and taken to Damascus; the women of his family were enslaved. The massacre at Karbala transformed a political dispute over succession into the founding theological trauma of Shia Islam — the concept of martyrdom for righteous opposition to tyranny. Karbala is commemorated annually by over 200 million Shia Muslims as Ashura; its political resonance has fueled revolutions, martyrdom movements, and anti-Sunni violence across 1,400 years.',
    '0680-10-10'::date,
    'War & Intelligence Operations',
    '{"tags": ["Karbala", "Hussein", "Shia Islam", "Umayyad", "martyrdom"], "category": "Religious Massacre", "significance": "critical", "sources": ["Britannica - Battle of Karbala", "Wikipedia - Battle of Karbala"]}'::jsonb
  ),
  (
    'Battle of Tours — Europe''s Last Line Against Islamic Conquest',
    'On October 11, 732 CE, Frankish military leader Charles Martel defeated a massive Umayyad Muslim army led by Governor Abd al-Rahman al-Ghafiqi between Tours and Poitiers in what is now France. The Umayyad force had spent two decades pushing through the Iberian Peninsula and into Gaul, sacking cities and accumulating enormous plunder. Martel''s heavy infantry held firm, killing Abd al-Rahman and forcing the Muslim army to retreat — ending the northward expansion of Islamic forces into Western Europe. Historians including Edward Gibbon have argued this battle preserved Western Christendom; without Martel''s victory, the Islamization of Western Europe would have been a plausible outcome.',
    '0732-10-11'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Tours", "Charles Martel", "Umayyad", "Islam", "Europe"], "category": "Military Conflict", "significance": "critical", "sources": ["Britannica - Battle of Tours", "Wikipedia - Battle of Tours"]}'::jsonb
  ),
  (
    'Abbasid Revolution — The Islamic World Reordered from Within',
    'In 750 CE, the Abbasid dynasty overthrew the Umayyad Caliphate following an uprising that began in the eastern province of Khurasan in 747 under the revolutionary leader Abu Muslim, culminating in the decisive Battle of the Great Zab River. The last Umayyad caliph Marwan II fled to Egypt, where he was killed, and the Abbasids systematically exterminated his family. The new Abbasid Caliphate moved the Islamic capital from Damascus to Baghdad — a shift that fundamentally realigned the empire toward Persian culture, cosmopolitan scholarship, and commercial prosperity. This revolution ended Arab ethnic dominance of the caliphate and opened the Islamic Golden Age, a period of unprecedented intellectual achievement that lasted 500 years.',
    '0750-01-01'::date,
    'Elections & Democratic Process',
    '{"tags": ["Abbasid", "Umayyad", "Islamic caliphate", "revolution", "Baghdad"], "category": "Political Revolution", "significance": "critical", "sources": ["Wikipedia - Abbasid Caliphate", "Britannica - Abbasid Caliphate"]}'::jsonb
  ),
  (
    'Viking Raid on Lindisfarne — The Terror of the North Begins',
    'On June 8, 793 CE, Norse seafarers descended without warning on the monastery of Lindisfarne — the most sacred center of Christianity in Northumbria — killing monks, throwing others into the sea to drown, and seizing gold, silver, and slaves before disappearing back into the North Sea. The scholar Alcuin of York wrote in horror: ''Never before has such terror appeared in Britain as we have now suffered from a pagan race.'' The raid on Lindisfarne marks the conventional beginning of the Viking Age — a period of nearly 300 years during which Norse raiders, traders, and settlers reshaped Europe from Ireland to Russia. The monasteries and churches that held society''s accumulated wealth were defenceless against seaborne attack, a vulnerability that would be ruthlessly exploited for generations.',
    '0793-06-08'::date,
    'War & Intelligence Operations',
    '{"tags": ["Vikings", "Lindisfarne", "Norse", "monastery", "raid"], "category": "Military Conflict", "significance": "critical", "sources": ["Wikipedia - Sack of Lindisfarne", "English Heritage - Viking Raid on Lindisfarne"]}'::jsonb
  ),
  (
    'The Slave Trade in the Medieval Islamic World — Millions Traded Across Three Continents',
    'The medieval Islamic world operated the largest and most sophisticated long-distance slave trade in history prior to the Atlantic slave trade — transporting an estimated 3.5 to 14 million enslaved Africans across the Sahara, the Red Sea, and the Indian Ocean to the Islamic heartlands between 650 and 1900 CE. The trade supplied enslaved people for domestic service, agricultural labor, military use (Mamluks, Janissaries), and sexual exploitation (concubinage) across a network stretching from sub-Saharan Africa to Central Asia. Unlike the later Atlantic trade, Islamic slavery permitted manumission and the children of free fathers by enslaved mothers were legally free — creating patterns of social mobility that partially disguised the system''s structural violence. Arab traders'' demand for East African slaves financed the Swahili Coast city-states and shaped the interior African political economy for centuries, with African rulers becoming complicit suppliers of captives to the coastal markets.',
    '0800-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags": ["Islamic slave trade", "trans-Saharan slavery", "African slaves", "medieval", "human trafficking"], "category": "Slavery & Trafficking", "significance": "critical", "sources": ["Britannica - Slavery in the Islamic world", "Wikipedia - Slavery in the Arab world"]}'::jsonb
  ),
  (
    'Charlemagne Crowned Emperor — The Holy Roman Empire Is Born',
    'On Christmas Day, December 25, 800 CE, Pope Leo III placed an imperial crown on the head of Charlemagne, King of the Franks, in St. Peter''s Basilica in Rome — declaring him ''Emperor of the Romans'' to the acclamation of the assembled crowd. Charlemagne was the first western emperor since the deposition of Romulus Augustulus in 476, and the coronation — which some sources suggest surprised Charlemagne himself — fused papal religious authority with Frankish military power in a volatile combination. The act established the precedent that popes could crown emperors, granting the church implicit superiority over secular rulers. The resulting Holy Roman Empire would persist in various forms for over a millennium, until Napoleon dissolved it in 1806.',
    '0800-12-25'::date,
    'Elections & Democratic Process',
    '{"tags": ["Charlemagne", "Holy Roman Empire", "Pope Leo III", "coronation", "medieval Europe"], "category": "Political Power", "significance": "critical", "sources": ["Wikipedia - Charlemagne", "Britannica - Holy Roman Empire"]}'::jsonb
  ),
  (
    'The Khmer Empire at Angkor — Southeast Asia''s Greatest Medieval Civilization',
    'From the 9th through the 15th centuries, the Khmer Empire centered on Angkor in what is now Cambodia built the most extensive network of hydraulic infrastructure and urban settlement in the premodern world — a complex of reservoirs, canals, and rice paddies supporting a city of one million people that made it the largest urban center on earth before the industrial age. The empire''s greatest monument, Angkor Wat — built under Suryavarman II in the 12th century and covering 162 hectares — remains the largest religious monument ever constructed. The Khmer kings commanded the labor of an entire civilization to express theological claims about the ruler as a divine being. Modern LiDAR surveys have revealed that Angkor''s urban footprint was even larger than previously believed. The empire''s collapse in the 15th century, partly due to the strain of maintaining its vast hydraulic infrastructure amid climate change, offers a sobering template for the collapse of complex societies.',
    '0802-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags": ["Khmer Empire", "Angkor Wat", "Southeast Asia", "hydraulic civilization", "medieval"], "category": "Civilization", "significance": "critical", "sources": ["Britannica - Angkor", "Wikipedia - Khmer Empire"]}'::jsonb
  ),
  (
    'House of Wisdom Founded — Baghdad Becomes the World''s Knowledge Capital',
    'Around 786–830 CE, the Abbasid caliphs Harun al-Rashid and his son al-Ma''mun established and expanded the Bayt al-Hikmah — the House of Wisdom — in Baghdad, creating the largest repository of books in the world and a global center for mathematics, astronomy, medicine, alchemy, and philosophy. Scholars from across the Islamic world, as well as Christian and Jewish translators, rendered works of Greek, Persian, Indian, and Byzantine origin into Arabic, preserving and transmitting knowledge that would otherwise have been lost. The House of Wisdom birthed algebra, advanced trigonometry, and systematic medicine — foundations of the modern scientific method. When the Mongols destroyed it in 1258, they threw so many books into the Tigris that contemporaries reported the river ran black with ink.',
    '0830-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["House of Wisdom", "Baghdad", "Islamic Golden Age", "Abbasid", "knowledge"], "category": "Science & Scholarship", "significance": "critical", "sources": ["Wikipedia - House of Wisdom", "1001 Inventions - House of Wisdom"]}'::jsonb
  ),
  (
    'Al-Kindi — The First True Philosopher of the Islamic World',
    'In 9th-century Baghdad, Arab polymath Abu Yusuf al-Kindi — known as ''the Philosopher of the Arabs'' — became the first systematic Islamic philosopher, writing approximately 260 works on mathematics, astronomy, medicine, music theory, optics, cryptography, and philosophy, introducing and systematizing Greek Aristotelian philosophy for Islamic audiences. His work On the Use of the Indian Numerals helped transmit Hindu-Arabic numerals to the Islamic world, and from there to Europe — the numerical system that every computer, bank transaction, and scientific calculation still uses today. Al-Kindi also wrote the first systematic treatise on cryptology — frequency analysis of Arabic letters — which remained the most advanced cryptographic technique in the world for centuries. His career at the House of Wisdom in Baghdad exemplified the Islamic Golden Age''s fusion of Greek, Persian, Indian, and original scholarship.',
    '0830-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["Al-Kindi", "Islamic Golden Age", "philosophy", "cryptography", "mathematics"], "category": "Science & Philosophy", "significance": "critical", "sources": ["Britannica - Al-Kindi", "Wikipedia - Al-Kindi"]}'::jsonb
  ),
  (
    'Chinese Gunpowder Weaponized — The Technology That Would Change Warfare Forever',
    'During the Tang Dynasty (618–907 CE), Chinese alchemists searching for an immortality elixir accidentally discovered that mixing 75% saltpeter, 15% charcoal, and 10% sulfur created a violently combustible compound — gunpowder. By the Song Dynasty (960–1279), the first formal military recipe for gunpowder appeared in the 1044 military treatise Wujing Zongyao, and the Chinese were deploying it in weapons including flame-throwers, early cannons, fire arrows, and land mines — centuries before any other civilization. Gunpowder reached the Islamic world via the Silk Road and arrived in Europe by the 13th century, transforming siege warfare, making castle walls obsolete, and eventually ending the military dominance of armored knights. Every modern firearm, artillery piece, and explosive traces its lineage to this discovery.',
    '0850-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["gunpowder", "China", "Song dynasty", "military technology", "Tang dynasty"], "category": "Military Technology", "significance": "critical", "sources": ["Wikipedia - Four Great Inventions", "China Highlights - Four Great Inventions"]}'::jsonb
  ),
  (
    'The Classic Maya Collapse — Climate, War, and the Fall of a Civilization',
    'Between approximately 800 and 900 CE, the Maya Classic Period civilization of the Central American lowlands underwent catastrophic collapse: over 50 major cities were abandoned, populations plummeted by millions, and the tradition of carving stone monuments recording royal deeds ended abruptly. Modern paleoclimatological research has identified a series of prolonged megadroughts affecting the Yucatán and Petén regions during this period, with rainfall reductions of 20–65% destroying agricultural surplus and leading to crop failures and famine. The drought interacted with endemic warfare between city-states, soil depletion, deforestation, and the breakdown of long-distance trade networks — creating a cascading systemic failure. The Maya did not ''disappear'' — millions of Maya people exist today — but the collapse of their Classic civilization stands as history''s most studied example of civilizational overreach and environmental fragility.',
    '0900-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags": ["Maya collapse", "Mesoamerica", "climate change", "drought", "civilization collapse"], "category": "Civilization Collapse", "significance": "critical", "sources": ["Wikipedia - Classic Maya collapse", "PNAS - Classic Period collapse of Central Maya Lowlands"]}'::jsonb
  ),
  (
    'Medieval Serfdom — Europe''s System of Legal Human Bondage',
    'From approximately the 9th through the 14th centuries, feudal serfdom bound approximately 80% of Europe''s population to the land in a condition of hereditary near-slavery: serfs could not leave their lord''s manor without permission, owed compulsory labor services (often 3 days per week on the lord''s fields), paid multiple taxes including the humiliating heriot (the lord received the serf''s best animal upon his death) and merchet (a fee for a daughter to marry), and had no legal standing to sue their lord in court. This system was not an organic development but was deliberately constructed by landowning elites — accelerated by the Carolingian era — to secure control over agricultural labor as the Roman slave trade collapsed. The Black Death of 1347–1351 fatally undermined serfdom by killing the surplus labor that made it sustainable. Serfdom reveals feudalism''s core function: organizing society to extract maximum surplus from those who worked the land.',
    '0900-01-01'::date,
    'Corporate Accountability',
    '{"tags": ["serfdom", "feudalism", "medieval Europe", "labor exploitation", "peasants"], "category": "Labor Exploitation", "significance": "critical", "sources": ["Britannica - Serfdom", "Wikipedia - Serfdom"]}'::jsonb
  ),
  (
    'The Sack of Thessalonica — Byzantine City Sold Into Slavery',
    'On July 29, 904 CE, Arab pirates under the Byzantine renegade Leo of Tripoli captured and sacked Thessalonica — the second-largest city of the Byzantine Empire — in a raid of extraordinary ferocity, killing approximately 5,000 inhabitants and enslaving roughly 22,000 others who were carried off to be sold in the slave markets of the Arab world. The city''s garrison was overwhelmed through a combination of naval surprise and a traitor who revealed a weakness in the seawall. Contemporary Byzantine chronicler John Cameniates, who survived as a slave and later wrote an eyewitness account, described families separated, violence against clergy, and the systematic loading of an entire city''s population onto ships. The sack demonstrated the persistent vulnerability of even well-defended Byzantine coastal cities to seaborne slave raids and the existence of a flourishing Mediterranean slave market that treated entire urban populations as commodities.',
    '0904-07-29'::date,
    'Child Safety & Trafficking',
    '{"tags": ["Thessalonica sack", "Byzantine Empire", "Arab pirates", "slavery", "medieval"], "category": "Slavery & Raid", "significance": "high", "sources": ["Wikipedia - Sack of Thessalonika (904)", "Britannica - Byzantine Empire"]}'::jsonb
  ),
  (
    'The Viking Settlement of Normandy — How Raiders Became Rulers',
    'In 911 CE, the Frankish King Charles the Simple signed the Treaty of Saint-Clair-sur-Epte with the Norse chieftain Rollo — granting him the northern French territory of Normandy (''Land of the Northmen'') in exchange for Rollo''s conversion to Christianity and his agreement to defend the territory against further Viking raids. Within two generations, the Norse settlers had adopted the French language and Frankish culture while retaining their martial traditions and administrative efficiency. From this grant of land emerged the Norman dynasty that would conquer England (1066), southern Italy and Sicily (1061–1091), and participate in the Crusades — one of the most consequential transformations of raiders into a ruling class in all of history. The Treaty of Saint-Clair-sur-Epte demonstrates the mechanism by which states have repeatedly co-opted violent outsiders by granting them land and legitimacy.',
    '0911-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Normans", "Vikings", "Normandy", "Rollo", "Treaty of Saint-Clair-sur-Epte"], "category": "Political Transformation", "significance": "critical", "sources": ["Britannica - Normandy", "Wikipedia - Rollo"]}'::jsonb
  ),
  (
    'The Norse Colonization of Greenland — Europe''s First Atlantic Colony Abandoned',
    'In 985–986 CE, Erik the Red led an expedition of approximately 25 ships (14 arrived) from Iceland to Greenland — establishing two settlements on the island''s southwestern coast that grew to a population of approximately 3,000–5,000 Norse colonists over the following century. The Greenland Norse maintained cattle farming, exported walrus ivory and polar bear skins, and maintained contact with Iceland and Norway for nearly 500 years. By the early 15th century, both settlements were abandoned — the causes including the Little Ice Age cooling that made farming impossible, the collapse of walrus ivory prices due to African elephant ivory imports, and possible attacks by expanding Inuit populations. The last written record of the Greenland Norse dates from 1408. The colony''s disappearance represents history''s most dramatic case study in civilizational collapse through climate change combined with economic disruption — a combination eerily relevant to the 21st century.',
    '0985-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags": ["Norse Greenland", "Viking colony", "climate change", "Little Ice Age", "Erik the Red"], "category": "Colonial Collapse", "significance": "high", "sources": ["Britannica - Greenland", "Wikipedia - Norse colonization of the Americas"]}'::jsonb
  ),
  (
    'Leif Erikson Reaches North America — Europe''s Secret Discovery 500 Years Early',
    'Around 1000 CE, Norse explorer Leif Erikson — son of Erik the Red — sailed west from Greenland and became the first European to set foot on the North American mainland, establishing a settlement called Leifsbudir in a region he named Vinland, now identified through archaeological evidence at L''Anse aux Meadows in Newfoundland, Canada. Erikson''s expedition preceded Christopher Columbus''s 1492 voyage by approximately five centuries, yet remained essentially unknown to Europe because Norse settlement proved unsustainable in the face of hostility from indigenous peoples called ''Skrælings.'' The L''Anse aux Meadows site, discovered in 1960 by Norwegian explorer Helge Ingstad, provides physical confirmation of the sagas'' accounts. The episode reveals how historical narratives are shaped by those who control the written record — Columbus''s voyage was celebrated because it led to permanent colonization and exploitation.',
    '1000-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Leif Erikson", "Vikings", "North America", "Vinland", "Norse exploration"], "category": "Exploration", "significance": "critical", "sources": ["Wikipedia - Leif Erikson", "Wikipedia - Vinland"]}'::jsonb
  ),
  (
    'The Venetian Trade Empire — How One City-State Monopolized Global Commerce',
    'From the 9th through the 15th centuries, the Republic of Venice constructed the most sophisticated commercial empire in the medieval world — controlling trade routes linking Western Europe to Byzantium, the Islamic world, and through them to China and India. Venetian merchants pioneered financial instruments including letters of credit, maritime insurance, double-entry bookkeeping, and shareholding partnerships that form the foundation of modern capitalism. At its height, Venice operated 3,000 merchant ships staffed by 36,000 sailors, generating revenues that dwarfed those of most European kingdoms. The Fourth Crusade of 1204 — which Venice effectively orchestrated and financed to destroy the competing Genoese trade advantage — demonstrates how the Republic subordinated religious and political movements entirely to commercial interest. Venice''s model of a state organized around capital accumulation rather than territory established the template for modern financial power.',
    '1000-01-01'::date,
    'Financial Systems',
    '{"tags": ["Venice", "trade empire", "medieval commerce", "capitalism origins", "financial instruments"], "category": "Trade & Finance", "significance": "critical", "sources": ["Britannica - Republic of Venice", "Wikipedia - Republic of Venice"]}'::jsonb
  ),
  (
    'The Silk Road at Its Medieval Peak — The World''s First Globalization',
    'During the 9th through 14th centuries, the Silk Road — a network of overland and maritime trade routes connecting China, Central Asia, Persia, the Arabian Peninsula, East Africa, and Europe — reached its medieval peak, carrying silk, spices, porcelain, paper, glassware, precious metals, and horses across 6,400 kilometers of the Eurasian landmass. The routes were controlled by successive Central Asian empires — Sogdians, Samanids, Seljuks, and Mongols — who taxed passage and provided security for caravans. The Silk Road transmitted Buddhism from India to China, Islam from Arabia to Indonesia, and carried technologies including papermaking, gunpowder, and the printing press from China to the West. It also transmitted the Black Death from the Mongol steppe to the entire Eurasian world. The Silk Road represents history''s most consequential commercial network — and the model for every subsequent attempt to control the chokepoints of global trade.',
    '1000-01-01'::date,
    'Financial Systems',
    '{"tags": ["Silk Road", "medieval trade", "China", "Central Asia", "globalization"], "category": "Trade & Commerce", "significance": "critical", "sources": ["Britannica - Silk Road", "Wikipedia - Silk Road"]}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);