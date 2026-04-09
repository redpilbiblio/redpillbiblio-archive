/*
  # Add Ancient History Events - Batch 1, Part 3 (Events 51-75)

  1. New Data
    - 25 timeline events covering ancient history from 323 BCE to 73 BCE
    - Topics include: Spread of Greek Culture, Death of Alexander, Maurya Empire,
      Roman aqueduct, Roman roads, Arthashastra, Stoic philosophy, Punic Wars,
      Kalinga War, Parthian Empire, Eratosthenes, Qin unification, Great Wall,
      Battle of Cannae, Archimedes, Qin book burning, Han Dynasty, Teotihuacan,
      Maccabean Revolt, Destruction of Carthage, Tiberius Gracchus, Silk Road,
      Roman slave economy, Spartacus revolt

  2. Notes
    - BCE events use '0001-01-01' as event_date with actual year stored in metadata
    - Uses NOT EXISTS checks to prevent duplicate inserts
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Spread of Greek Culture — Hellenism Rewires the Ancient World',
    'Following Alexander''s conquests, Greek (Koine) language, philosophy, art, and governance spread across an area from Egypt to Bactria (modern Afghanistan) between 323 and 30 BCE. The Hellenistic world created by Alexander''s successors fused Greek rationalism with Persian, Egyptian, Babylonian, and Indian traditions. Greek became the lingua franca of commerce, diplomacy, and scholarship across the Middle East — meaning the New Testament was written in Greek, not Aramaic. Euclid wrote geometry in Alexandria, Eratosthenes calculated the Earth''s circumference within 2% accuracy, and Hipparchus mapped the stars — all in Greek. The intellectual infrastructure of medieval Europe, the Islamic Golden Age, and ultimately the Scientific Revolution was built on Hellenistic foundations.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["Hellenism","Greece","culture","Alexander","science"],"category":"Ancient Civilizations","significance":"critical","sources":["Wikipedia - Hellenistic period","Britannica - Hellenistic Age","World History Encyclopedia"],"year":-323,"display_date":"323 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Death of Alexander the Great — Power Vacuum Fractures the World',
    'On June 10, 323 BCE, Alexander the Great died in Babylon at age 32 after a sudden illness — possibly typhoid fever, poisoning, or alcoholic complications — without naming a successor. His deathbed words, according to some sources, were that his empire should go ''to the strongest.'' What followed — the Wars of the Diadochi — saw his generals tear the empire apart in 40 years of brutal civil conflict, creating four major successor kingdoms: the Ptolemaic, Seleucid, Macedonian, and Pergamene. The vacuum Alexander left demonstrates how one-man rule, however brilliant, creates systemic fragility that collapses at a single death.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Alexander the Great","death","succession","Babylon","Diadochi"],"category":"Assassinations & Coups","significance":"critical","sources":["Wikipedia - Death of Alexander the Great","Britannica - Alexander the Great","World History Encyclopedia"],"year":-323,"display_date":"323 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Maurya Empire — India''s First Continental Superstate',
    'Founded by Chandragupta Maurya around 322 BCE after Alexander''s withdrawal from India, the Maurya Empire became the largest empire in Indian history, eventually covering approximately 5 million km² under Emperor Ashoka (268–232 BCE). After the brutal Kalinga War (261 BCE), in which an estimated 100,000 soldiers died and 150,000 were deported, Ashoka converted to Buddhism and renounced military conquest. He carved edicts promoting non-violence, religious tolerance, and welfare across his empire''s pillars and rocks — the first large-scale state propaganda campaign in history explicitly devoted to ethics rather than glorifying the ruler.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Maurya Empire","Ashoka","India","Buddhism","empire"],"category":"Ancient Empires","significance":"high","sources":["Wikipedia - Maurya Empire","Britannica - Mauryan Empire","World History Encyclopedia"],"year":-322,"display_date":"322 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The First Roman Aqueduct — Engineering Clean Water as Political Power',
    'In 312 BCE, censor Appius Claudius Caecus commissioned the Aqua Appia — Rome''s first aqueduct, running 16 kilometers to deliver fresh water to the city''s cattle market. By the 3rd century CE, Rome operated eleven aqueducts with a combined conduit length of approximately 780–800 km, delivering an estimated one million cubic meters of water daily to over a million residents. The Roman state''s control of water infrastructure was simultaneously a public health achievement and an instrument of political power — cities that submitted to Rome received this life-sustaining technology; those that resisted did not.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["aqueduct","Rome","engineering","water","infrastructure"],"category":"Engineering Marvels","significance":"high","sources":["Wikipedia - Roman Aqueduct","PMC - Aqueducts and Water Supply of Ancient Rome","Water Shapes"],"year":-312,"display_date":"312 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Roman Road Network — Infrastructure as an Instrument of Control',
    'Beginning with the Via Appia (312 BCE), Rome constructed over 400,000 km of roads across its empire — 80,500 km of which were paved stone roads. Built by legionary soldiers using slave labor, Roman roads were engineered to move armies, not commerce: straight, drained, and militarily hardened. Every road led to Rome because Roman strategic doctrine required rapid military response to rebellion anywhere in the empire. The road network created the world''s first mass postal system (cursus publicus), enabled the spread of Christianity, and left infrastructure still in use two millennia later. ''All roads lead to Rome'' encoded a political reality: the roads were Rome''s nervous system of power.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["Roman roads","Via Appia","infrastructure","empire","military"],"category":"Engineering Marvels","significance":"high","sources":["Wikipedia - Roman roads","Britannica - Roman Roads","World History Encyclopedia"],"year":-312,"display_date":"312 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Mauryan Arthashastra — The Ancient World''s Manual for State Surveillance',
    'Composed around 300 BCE and attributed to Chandragupta Maurya''s chief minister Chanakya (Kautilya), the Arthashastra is a comprehensive treatise on statecraft, economic policy, military strategy, and governance that rivals Machiavelli''s Prince in its cold-eyed realism. It details an elaborate spy network (the ''secret service'') using agents disguised as merchants, ascetics, and students; recommends assassination of political threats; outlines how to manipulate foreign kings and internal rivals; and describes economic policies including price controls and state monopolies. The Arthashastra reveals that systematic state intelligence operations, propaganda, and psychological manipulation are as old as organized government itself.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["Arthashastra","Chanakya","Maurya","surveillance","statecraft"],"category":"Surveillance & Espionage","significance":"high","sources":["Wikipedia - Arthashastra","Britannica - Chanakya","World History Encyclopedia"],"year":-300,"display_date":"300 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Stoic Philosophy — Enduring Empire by Accepting Injustice',
    'Founded in Athens by Zeno of Citium around 300 BCE, Stoicism taught that virtue — not wealth, power, or pleasure — was the only true good, and that suffering was to be accepted with equanimity because external circumstances were beyond one''s control. Adopted enthusiastically by the Roman ruling class, Stoicism became the philosophy of emperors: Marcus Aurelius''s Meditations is the most intimate surviving record of a Roman emperor''s inner life. Critics note that Stoicism''s emphasis on inner acceptance rather than structural change made it perfectly compatible with empire and slavery — a slave could be ''free'' in spirit while bound in chains. Its individualism served power by directing discontent inward rather than outward.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Stoicism","Zeno","philosophy","Rome","Marcus Aurelius"],"category":"Religion & Philosophy","significance":"high","sources":["Wikipedia - Stoicism","Britannica - Stoicism","World History Encyclopedia"],"year":-300,"display_date":"300 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Punic Wars — Rome vs. Carthage and the Birth of Mediterranean Hegemony',
    'Between 264 and 146 BCE, Rome and Carthage fought three wars totaling 43 years that determined who would rule the Mediterranean world. The Second Punic War (218–201 BCE) saw Hannibal Barca cross the Alps with 37 war elephants and 40,000 troops and crush Roman armies at Trebia, Trasimene, and Cannae (216 BCE) — where 50,000–70,000 Romans died in a single afternoon. Yet Rome refused to surrender. By 146 BCE, the Third Punic War ended with the complete destruction of Carthage and the enslavement of its estimated 50,000 survivors — demonstrating that Rome''s ultimate advantage was institutional resilience over individual genius.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Punic Wars","Rome","Carthage","Hannibal","Mediterranean"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Punic Wars","Britannica - Punic Wars","History Hit"],"year":-264,"display_date":"264 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Kalinga War — When a Conqueror Chose Conscience Over Conquest',
    'In 261 BCE, Mauryan Emperor Ashoka fought the Kalinga War against the Kalinga kingdom (modern Odisha, India), killing an estimated 100,000 soldiers, deporting 150,000 civilians, and causing death by famine and disease to hundreds of thousands more. So horrified by the carnage he witnessed personally, Ashoka converted to Buddhism and issued the Rock Edicts — inscribed across his empire — renouncing military expansion, promoting religious tolerance, animal welfare, and public works. He is the only major conqueror in recorded history to formally repudiate his own conquests. His edicts represent the ancient world''s most explicit statement that state power carries moral obligations.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Ashoka","Kalinga","Buddhism","India","war crimes"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Ashoka","Britannica - Ashoka","World History Encyclopedia"],"year":-261,"display_date":"261 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Parthian Empire — The Superpower Rome Could Never Conquer',
    'The Parthian Empire (247 BCE – 224 CE) controlled the territories between Rome and China for 500 years, making it the indispensable middleman of the Silk Road and the one major power Rome repeatedly failed to subdue. At Carrhae (53 BCE), Parthian horse archers annihilated Marcus Crassus''s army of seven legions, killing 20,000 Romans and capturing 10,000 — the most complete Roman military defeat in the Republic''s history. Mark Antony''s 36 BCE campaign also failed catastrophically. The Parthians maintained commercial hegemony over the Central Asian trade routes, extracting tolls from goods moving between Rome and Han China while neither empire acknowledged the other''s existence in their official records.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Parthia","Rome","Silk Road","Carrhae","empire"],"category":"Ancient Empires","significance":"high","sources":["Wikipedia - Parthian Empire","Britannica - Parthian Empire","World History Encyclopedia"],"year":-247,"display_date":"247 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Eratosthenes Calculation — A Man Measures the Earth With a Stick',
    'Around 240 BCE, Eratosthenes of Cyrene, chief librarian of the Library of Alexandria, calculated the circumference of the Earth using only the angle of shadows at noon in two Egyptian cities (Alexandria and Syene) on the summer solstice and the distance between them. His result — approximately 39,375 km — was within 2% of the modern measurement of 40,075 km. He also correctly deduced that the Nile''s flooding came from African rainfall, made the first map of the world incorporating curved coordinates, and coined the word ''geography.'' His calculation proved the Earth was round at a time when only a handful of Greek thinkers had entertained the idea — 1,700 years before Columbus.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["Eratosthenes","Earth","science","Alexandria","geography"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Eratosthenes","Britannica - Eratosthenes","World History Encyclopedia"],"year":-240,"display_date":"240 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Qin Unification of China — The First Emperor Forges a Nation',
    'In 221 BCE, Qin Shi Huang conquered the last of the seven Warring States and declared himself China''s first emperor, unifying a fragmented continent under a single standardized system of weights, measurements, coinage, writing, and law. He built a network of imperial roads, began construction of the Great Wall, and commissioned his famous Terracotta Army of over 8,000 life-size warriors to guard him in death. He also burned books and buried scholars alive to suppress dissent. The Qin Dynasty lasted only 15 years, but its administrative framework — the centralized Chinese state — endured for 2,200 years.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Qin Shi Huang","China","unification","censorship","empire"],"category":"Ancient Empires","significance":"critical","sources":["China Highlights - History","Smithsonian - Chinese History Timeline","Wikipedia - Qin Dynasty"],"year":-221,"display_date":"221 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Great Wall of China — Fortifying Power Against the People Beyond',
    'Qin Shi Huang ordered the consolidation and extension of existing border walls into a continuous fortification system beginning around 221 BCE, utilizing hundreds of thousands of conscripted laborers — many of whom died and were buried within the walls themselves. The Qin-era walls stretched some 5,000 kilometers. Rather than being impregnable (Mongols breached it repeatedly in later centuries), the Wall''s primary purpose was to regulate movement, tax trade, and project state power into frontier zones. The Ming Dynasty (1368–1644 CE) rebuilt most of what tourists see today, making the Wall a composite monument to 1,800 years of imperial labor extraction.',
    '0001-01-01'::date,
    'Corporate Accountability',
    '{"tags":["Great Wall","China","Qin","labor","engineering"],"category":"Engineering Marvels","significance":"high","sources":["Smithsonian - Chinese History","Wikipedia - Great Wall of China","World History Encyclopedia"],"year":-221,"display_date":"221 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Battle of Cannae — Hannibal''s Masterpiece and Rome''s Greatest Disaster',
    'On August 2, 216 BCE, Carthaginian general Hannibal Barca encircled and annihilated a Roman army of approximately 86,000 at Cannae in southern Italy, killing an estimated 47,000–70,000 Romans in a single day — the bloodiest day in Roman history. Hannibal''s double envelopment maneuver became history''s most studied tactical template, influencing military planners from Napoleon to the Wehrmacht. The Senate lost 29 of its 300 members on that field. Yet Rome still refused to negotiate, recruiting new legions and ultimately outlasting Hannibal — a lesson in how institutional will can overcome tactical genius.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Cannae","Hannibal","Rome","battle","Carthage"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Battle of Cannae","Britannica - Battle of Cannae","World History Encyclopedia"],"year":-216,"display_date":"216 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Archimedes and the Siege of Syracuse — Science Weaponized Against Empire',
    'During the Roman siege of Syracuse (214–212 BCE), the mathematician Archimedes designed war machines that held off the Roman fleet for two years: cranes that could lift Roman ships from the water and drop them, catapults calibrated for different ranges, and possibly (though disputed) mirrors to focus sunlight and ignite enemy vessels. Roman soldiers reportedly became so terrified that if they saw any timber or rope projecting above the walls they would flee, crying ''Archimedes is training some engine upon us.'' After the city fell, Archimedes was killed by a Roman soldier despite orders to capture him alive — perhaps the most costly individual death in Roman military history.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["Archimedes","Syracuse","Rome","engineering","siege"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Siege of Syracuse (214–212 BC)","Britannica - Archimedes","World History Encyclopedia"],"year":-214,"display_date":"214 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Emperor Qin''s Book Burning — State Censorship as Imperial Survival Strategy',
    'In 213 BCE, Qin Shi Huang, advised by prime minister Li Si, ordered the burning of all books except those on agriculture, medicine, and divination — particularly targeting Confucian classics and historical records of rival states that might provide ideological ammunition for opposition. In 212 BCE, he reportedly had 460 Confucian scholars buried alive. The Qin Book Burning represents the ancient world''s most explicit act of state censorship: the deliberate destruction of intellectual heritage to consolidate political power. Ironically, the brief Qin Dynasty collapsed within 15 years of Qin Shi Huang''s death, while the Confucian texts it burned survived through hidden copies and later became the foundation of China''s governing ideology.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Qin Shi Huang","book burning","censorship","China","Confucius"],"category":"Knowledge & Censorship","significance":"high","sources":["Wikipedia - Burning of books and burying of scholars","Britannica - Qin Shi Huang","World History Encyclopedia"],"year":-213,"display_date":"213 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Han Dynasty — China''s First Golden Age',
    'The Han Dynasty (206 BCE – 220 CE) created the template for Chinese civilization: Confucianism was established as state ideology and the basis for civil service examinations under Emperor Wu (r. 141–87 BCE); the Silk Road opened China to global trade; paper was invented; the population reached approximately 60 million; and Sima Qian completed the Shiji (Records of the Grand Historian) — China''s first comprehensive historical record, the model for all subsequent official histories. The Han so defined Chinese identity that the ethnic Chinese majority still call themselves ''Han people'' today. Its simultaneous existence with the Roman Empire, with neither knowing much about the other, represents a period of parallel civilizational development at opposite ends of Eurasia.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Han Dynasty","China","Confucianism","Silk Road","history"],"category":"Ancient Civilizations","significance":"critical","sources":["Columbia University - China Timeline","China Highlights - History","Wikipedia - Han Dynasty"],"year":-206,"display_date":"206 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Teotihuacan Empire — Mesoamerica''s First Metropolis',
    'Between 200 BCE and 550 CE, Teotihuacan in modern Mexico grew into the sixth-largest city in the world, with a population estimated at 100,000–200,000 people — larger than any contemporary European city. Its Avenue of the Dead, Pyramid of the Sun (third-largest pyramid on Earth by volume), and Pyramid of the Moon demonstrate sophisticated urban planning and massive organized labor. Teotihuacan traded obsidian, ceramics, and cultural influence across Mesoamerica, including into the Maya heartland, where its military presence is documented at Tikal in 378 CE. The city was violently sacked and burned — apparently by internal revolt — around 550–650 CE, its rulers killed and their palaces torched, leaving a mystery city with no deciphered writing system.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Teotihuacan","Mesoamerica","Mexico","pyramid","civilization"],"category":"Ancient Civilizations","significance":"high","sources":["Wikipedia - Teotihuacan","Britannica - Teotihuacan","World History Encyclopedia - Maya Timeline"],"year":-200,"display_date":"200 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Seleucid Empire and the Maccabean Revolt — How Forced Hellenization Created Judaism''s Miracle Story',
    'In 167 BCE, Seleucid King Antiochus IV Epiphanes desecrated the Second Temple in Jerusalem — installing an altar to Zeus and sacrificing pigs — and outlawed Jewish religious practice on pain of death. The Maccabees, a priestly family led by Judas Maccabeus, launched a guerrilla revolt that succeeded in recapturing Jerusalem and rededicating the Temple in 164 BCE (celebrated as Hanukkah). The Maccabean Revolt was not merely religious: the family then established the Hasmonean dynasty and allied with Rome against the Seleucids. Religious persecution by an occupying power, the story demonstrates, can create exactly the resistant identities it seeks to destroy.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Maccabees","Seleucid","Judaism","Hanukkah","revolt"],"category":"Ancient Wars","significance":"high","sources":["Wikipedia - Maccabean Revolt","Britannica - Maccabees","World History Encyclopedia"],"year":-167,"display_date":"167 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Destruction of Carthage — Genocide as Imperial Policy',
    'In 146 BCE, after a three-year siege, Rome''s legions under Scipio Aemilianus breached the walls of Carthage and fought house-to-house for six days before reducing the city to rubble. The entire surviving population — estimated at 50,000 — was sold into slavery. The city was burned for 17 days. Roman senators had voted the city''s total destruction (delenda est Carthago — ''Carthage must be destroyed'') not from military necessity, but to eliminate a commercial rival. The erasure of Carthaginian civilization — its libraries, records, and culture — left a blank in history. The Roman claim that Carthaginians sacrificed children has never been conclusively verified and may itself be propaganda.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Carthage","Rome","destruction","slavery","genocide"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Punic Wars","Britannica - Punic Wars","History Hit - Punic Wars"],"year":-146,"display_date":"146 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Assassination of Tiberius Gracchus — Land Reform Silenced by Violence',
    'In 133 BCE, Roman tribune Tiberius Gracchus proposed redistributing state-occupied public land from wealthy senators to landless plebeians — a reform that threatened the economic foundations of Rome''s ruling class. When he sought an unprecedented second term to protect his law, the Senate declared an ''emergency'' and a mob of senators beat him to death with wooden chair legs along with 300 of his supporters — the first major political murder in the Republic''s history. His brother Gaius Gracchus attempted similar reforms and was likewise killed in 121 BCE. The Gracchan murders opened a century of political violence that would end the Republic.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Gracchus","Rome","land reform","assassination","Republic"],"category":"Assassinations & Coups","significance":"high","sources":["Wikipedia - Tiberius Gracchus","Britannica - Tiberius and Gaius Gracchus","World History Encyclopedia"],"year":-133,"display_date":"133 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Han Dynasty and the Silk Road — Commerce Rewires the Ancient World',
    'Around 130–114 BCE, Han Emperor Wu dispatched diplomat Zhang Qian westward into Central Asia, establishing the Silk Road trade network that connected China to Rome via the Parthian Empire. The Silk Road moved not only silk and spices but also technologies, religions, diseases, and ideas across 6,000 kilometers of steppe, desert, and mountain. Buddhism, Islam, and the Black Death all traveled its routes. Rome paid for Chinese silk in gold, draining its treasury; Han China received grapes, glassware, and Roman coinage. No single trade route has done more to shape world civilization.',
    '0001-01-01'::date,
    'Financial Systems',
    '{"tags":["Silk Road","China","Han Dynasty","trade","Zhang Qian"],"category":"Ancient Trade","significance":"critical","sources":["Wikipedia - Silk Road","ArcGIS StoryMaps - Silk Road Timeline","Pitt Library Guide"],"year":-130,"display_date":"130 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Roman Slave Economy — Slavery as the Engine of Imperial Wealth',
    'At its peak in the late Republic (1st century BCE), the Roman Empire held an estimated 1–2 million slaves in Italy alone — roughly 35–40% of the Italian population. The entire economy was slave-dependent: agriculture, mining, domestic service, construction, and even some skilled professions were performed by enslaved people. Roman slavery was color-blind and arbitrary — captured soldiers, debt-slaves, foundlings, and kidnapping victims of any ethnicity could be enslaved. The slave trade generated enormous profits for Roman elites while suppressing wages for free workers. Without acknowledging this foundation, no honest account of Roman civilization is possible.',
    '0001-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags":["Rome","slavery","slave trade","economy","Republic"],"category":"Slavery & Human Rights","significance":"critical","sources":["Wikipedia - Slavery in ancient Rome","Britannica - Roman Slavery","World History Encyclopedia"],"year":-100,"display_date":"100 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Spartacus Revolt — 120,000 Slaves Against the Roman Republic',
    'In 73 BCE, Spartacus — a Thracian gladiator enslaved by Rome — led approximately 70 fellow gladiators in a breakout from a training school in Capua. Within two years, his force had swelled to an estimated 120,000 men, women, and children, defeating multiple Roman consular armies in succession. The Third Servile War lasted until 71 BCE when Marcus Crassus crushed the rebellion; Spartacus died in battle and 6,000 survivors were crucified along the 200-kilometer Appian Way as a warning. At the time of the revolt, approximately one-third of Italy''s population were slaves — a foundation of Roman prosperity never seriously examined until it nearly collapsed the state.',
    '0001-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags":["Spartacus","slavery","Rome","revolt","gladiator"],"category":"Slavery & Human Rights","significance":"critical","sources":["Wikipedia - Third Servile War","Wikipedia - Spartacus","BBC History - Spartacus","EBSCO - Spartacus"],"year":-73,"display_date":"73 BCE","era":"BCE"}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);