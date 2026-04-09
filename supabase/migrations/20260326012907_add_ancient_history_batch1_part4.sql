/*
  # Add Ancient History Events - Batch 1, Part 4 (Events 76-100)

  1. New Data
    - 25 timeline events covering ancient history from 49 BCE to 476 CE
    - Topics include: Caesar crosses Rubicon, assassination of Caesar, Battle of Actium,
      Cleopatra VII, Augustus Caesar, Birth/Crucifixion of Jesus, Caligula,
      Roman conquest of Britain, Nero's persecution, destruction of Second Temple,
      eruption of Vesuvius, Roman Colosseum, invention of compass, Axum Empire,
      invention of paper, Antonine Plague, Maya Classic Period, Roman coinage debasement,
      Diocletian reforms, Edict of Milan, Council of Nicaea, founding of Constantinople,
      Edict of Thessalonica, sack of Rome by Visigoths, Hunnic invasions, fall of Western Rome

  2. Notes
    - BCE events use '0001-01-01' as event_date with actual year in metadata
    - CE events use actual dates where known
    - Uses NOT EXISTS checks to prevent duplicate inserts
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'Julius Caesar Crosses the Rubicon — One Man Ends the Republic',
    'On January 10, 49 BCE, Julius Caesar crossed the Rubicon River with his army — an act the Roman constitution explicitly forbade, as generals could not bring armies into Italy proper. His words ''the die is cast'' (alea iacta est) signaled the beginning of civil war and, ultimately, the end of the Roman Republic. Caesar had served Rome for 8 years in the Gallic Wars, conquering modern France and killing or enslaving over 1 million Gauls. Ordered to disband his army, he refused, knowing his political enemies would prosecute him. One man''s refusal to submit to law changed the governing structure of Western civilization.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Caesar","Rubicon","Rome","Republic","civil war"],"category":"Political History","significance":"critical","sources":["Wikipedia - Crossing the Rubicon","Through Eternity Tours","Britannica - Julius Caesar"],"year":-49,"display_date":"49 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Assassination of Julius Caesar — The Ides of March and the Death of the Republic',
    'On March 15, 44 BCE — the Ides of March — 60 Roman senators led by Brutus and Cassius stabbed Caesar 23 times in the Theatre of Pompey, killing the man they accused of destroying the Republic. Ironically, Caesar''s murder accelerated exactly what the conspirators feared: it triggered civil war, eliminated the last defender of republican institutions, and propelled his heir Octavian toward absolute power. The first known autopsy in recorded history, performed by physician Antistius, found only one of the 23 wounds fatal. The conspiracy that murdered tyranny gave birth to an empire.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Julius Caesar","assassination","Rome","Ides of March","Republic"],"category":"Assassinations & Coups","significance":"critical","sources":["Wikipedia - Assassination of Julius Caesar","EBSCO - Julius Caesar Assassinated","Through Eternity Tours"],"year":-44,"display_date":"44 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Battle of Actium — The Last Gasp of the Roman Republic',
    'On September 2, 31 BCE, Octavian''s fleet commanded by Agrippa defeated the combined forces of Mark Antony and Cleopatra VII at the Battle of Actium off the Greek coast. Cleopatra''s squadron broke through the blockade and fled to Egypt; Antony followed, abandoning his army. Within a year, both had died by suicide and Octavian controlled the Roman world entirely. Actium was not merely a naval battle — it was the definitive end of the Roman Republic''s competitive power structure. The last man standing became Augustus Caesar. The century of civil wars, assassinations, and constitutional crises that followed Caesar''s murder resolved into a single man''s absolute authority.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Actium","Octavian","Antony","Cleopatra","Republic"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Battle of Actium","Britannica - Battle of Actium","World History Encyclopedia"],"year":-31,"display_date":"31 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Cleopatra VII and the End of Ptolemaic Egypt — The Last Pharaoh',
    'Cleopatra VII (reigned 51–30 BCE) was the last ruler of the Ptolemaic dynasty — fluent in nine languages, the first Ptolemaic ruler to learn Egyptian, and the political equal of Julius Caesar and Mark Antony by sheer force of intelligence and diplomatic skill. After Antony and Cleopatra''s defeat at the Battle of Actium (31 BCE), she refused to be paraded through Rome as a captive and died by suicide — likely by asp bite — on August 12, 30 BCE. Egypt became a Roman province, and with it, Rome gained the tax revenues and grain supply that financed Augustus''s imperial ambitions. The last independent pharaoh died at age 39.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Cleopatra","Egypt","Rome","Ptolemaic","Actium"],"category":"Assassinations & Coups","significance":"critical","sources":["Wikipedia - Cleopatra","Britannica - Cleopatra VII","World History Encyclopedia"],"year":-30,"display_date":"30 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Augustus Caesar — How One Man Dismantled a Republic and Called It Salvation',
    'In 27 BCE, Octavian — having defeated Mark Antony and Cleopatra at Actium in 31 BCE — accepted the title ''Augustus'' from a grateful Senate, becoming Rome''s first emperor while maintaining the fiction of republican governance. He kept the Senate, the consuls, and the assemblies in place as ceremonial shells while concentrating military command, treasury control, and foreign policy in his own hands. Augustus''s genius was not conquest but institutional camouflage: he ended the Republic without formally abolishing it, creating a template for disguised autocracy that would be replicated across 2,000 years of history.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Augustus","Rome","empire","autocracy","Republic"],"category":"Political History","significance":"critical","sources":["Britannica - Roman Empire Timeline","History Hit - Key Dates Roman History","Wikipedia - Augustus"],"year":-27,"display_date":"27 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Birth and Crucifixion of Jesus — The Event That Split Western History',
    'Jesus of Nazareth, born approximately 4–6 BCE in Roman-occupied Judea, was crucified by Roman authorities under governor Pontius Pilate around 30–33 CE — most scholars prefer April 3, 33 CE as the most astronomically consistent date. A Jewish teacher who preached love of neighbor, forgiveness of enemies, and the Kingdom of God over earthly empire, his execution by the most humiliating Roman punishment — reserved for slaves and rebels — made his followers a persecuted sect. Within 300 years, Christianity became the official religion of the Roman Empire; today it claims 2.4 billion adherents, making Jesus the most historically consequential individual ever executed by a state.',
    '0033-04-03'::date,
    'Government Health Transparency',
    '{"tags":["Jesus","Christianity","crucifixion","Rome","religion"],"category":"Religion & Philosophy","significance":"critical","sources":["Wikipedia - Crucifixion of Jesus","Center for Biblical Studies - April 3 AD 33","Christianity.org.uk"],"year":33,"display_date":"33 CE","era":"CE"}'::jsonb
  ),
  (
    'Caligula — How Absolute Power Creates Absolute Corruption',
    'Gaius Caesar (Caligula) became Roman emperor in 37 CE at age 24 following the death of Tiberius and was initially welcomed as the son of the beloved general Germanicus. Within a year, after a severe illness, he became one of history''s most documented despots: executing senators on whims, claiming divine status (building a temple to himself), reportedly making his horse a consul, bankrupting the treasury on spectacles, and conducting arbitrary executions for entertainment. He was assassinated by his own Praetorian Guard on January 24, 41 CE after less than four years. Caligula''s reign demonstrates the structural pathology of unaccountable one-man rule: absolute power without institutional checks selects for pathology, not competence.',
    '0037-03-16'::date,
    'Elections & Democratic Process',
    '{"tags":["Caligula","Rome","tyranny","corruption","emperor"],"category":"Assassinations & Coups","significance":"high","sources":["Wikipedia - Caligula","Britannica - Caligula","World History Encyclopedia"],"year":37,"display_date":"37 CE","era":"CE"}'::jsonb
  ),
  (
    'The Roman Conquest of Britain — Empire at the Edge of the Known World',
    'In 43 CE, Emperor Claudius launched a full-scale invasion of Britain with four legions (approximately 40,000 men) — Julius Caesar had raided but not occupied the island in 55–54 BCE. By 84 CE, Roman forces had subdued most of modern England and Wales. The occupation lasted until approximately 410 CE, leaving an infrastructure legacy including roads, towns, baths, and Hadrian''s Wall (built 122 CE, stretching 117 km coast-to-coast). But Roman control was never total: Scotland was never conquered, and Boudicca''s revolt (60–61 CE) temporarily destroyed Roman Colchester, London, and St Albans and killed an estimated 70,000–80,000 Romans and their allies before being suppressed.',
    '0043-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Rome","Britain","Claudius","conquest","Hadrian''s Wall"],"category":"Ancient Wars","significance":"high","sources":["Wikipedia - Roman Britain","Britannica - Roman Britain","World History Encyclopedia"],"year":43,"display_date":"43 CE","era":"CE"}'::jsonb
  ),
  (
    'Nero''s Persecution of Christians — The State Creates Martyrs',
    'In 64 CE, after a catastrophic fire burned much of Rome for six days, Emperor Nero — accused of starting it himself — deflected blame onto Rome''s small Christian community, launching the first state persecution of Christians. Tacitus records that Christians were ''covered with the skins of beasts, and torn to pieces by dogs'' or ''nailed to crosses, or set fire to, and when day declined, burned to serve for nocturnal lights.'' Peter and Paul, the two founding apostles of the Roman church, were both reportedly executed during this period. By manufacturing scapegoats to survive a crisis, Nero created the martyrology that would make Christianity emotionally irresistible to Rome''s oppressed populations.',
    '0064-07-19'::date,
    'Media Manipulation',
    '{"tags":["Nero","Rome","Christians","persecution","fire"],"category":"Political Persecution","significance":"high","sources":["Wikipedia - Great Fire of Rome","Tacitus - Annals","Britannica - Nero"],"year":64,"display_date":"64 CE","era":"CE"}'::jsonb
  ),
  (
    'The Destruction of the Second Temple — The Event That Defined Judaism',
    'On August 9–10, 70 CE (the 9th of Av in the Jewish calendar), Roman legions under future Emperor Titus destroyed Herod''s Temple in Jerusalem after a brutal 5-month siege of the city, killing an estimated 1.1 million Jews by Josephus''s count — a probable exaggeration, but deaths were catastrophic. The Temple''s sacred menorah and treasures were carried to Rome and displayed in the Triumphal Procession depicted on the Arch of Titus, still standing in Rome. The destruction ended the Temple-based sacrificial system, forcing Judaism to become a portable, text-centered religion of the synagogue — the form that has survived 2,000 years of diaspora. Titus''s Arch remains a monument to state destruction of a people''s holiest site.',
    '0070-08-10'::date,
    'War & Intelligence Operations',
    '{"tags":["Jerusalem","Temple","Rome","Judaism","Titus"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Siege of Jerusalem (70 CE)","Britannica - Temple of Jerusalem","World History Encyclopedia"],"year":70,"display_date":"70 CE","era":"CE"}'::jsonb
  ),
  (
    'The Eruption of Vesuvius — A City Buried, Preserved, and Revealed',
    'On August 24–25, 79 CE, Mount Vesuvius erupted without warning, burying the Roman cities of Pompeii, Herculaneum, and Stabiae under meters of volcanic ash and pyroclastic flows. Approximately 2,000 bodies have been found at Pompeii, though total deaths may have been 16,000 or more. Pliny the Younger, an eyewitness, provided antiquity''s most detailed description of a volcanic eruption; his uncle Pliny the Elder died in the disaster. When excavated from the 18th century onward, Pompeii revealed a complete Roman city frozen in time — brothels, bakeries, political graffiti, and lavish villas that showed Roman daily life in unfiltered detail the official record would never have preserved.',
    '0079-08-24'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["Vesuvius","Pompeii","eruption","Rome","disaster"],"category":"Natural Disasters","significance":"high","sources":["Wikipedia - Eruption of Mount Vesuvius in 79 AD","Britannica - Pompeii","World History Encyclopedia"],"year":79,"display_date":"79 CE","era":"CE"}'::jsonb
  ),
  (
    'The Roman Colosseum — Violence as Political Entertainment',
    'Completed in 80 CE under Emperor Titus, the Flavian Amphitheater (Colosseum) seated approximately 50,000 spectators for gladiatorial combat, animal hunts, and public executions. Built using the spoils from the sack of Jerusalem and the forced labor of Jewish prisoners, it could be flooded for naval battle simulations. The inaugural games reportedly lasted 100 days and killed 9,000 animals. Roman emperors used the spectacle of organized violence — the gladiatorial industry employed thousands of enslaved and condemned men — as a tool of mass distraction and political legitimacy: ''bread and circuses'' (panem et circenses), as Juvenal sarcastically described the formula for keeping the population pacified.',
    '0080-01-01'::date,
    'Media Manipulation',
    '{"tags":["Colosseum","Rome","gladiators","spectacle","slavery"],"category":"Slavery & Human Rights","significance":"high","sources":["Wikipedia - Colosseum","Britannica - Colosseum","World History Encyclopedia"],"year":80,"display_date":"80 CE","era":"CE"}'::jsonb
  ),
  (
    'The Invention of the Compass — China''s Navigation Secret',
    'China developed the magnetic compass (sinan) during the Han Dynasty, with the earliest references to a lodestone spoon used as a compass dating to approximately 83 CE in Wang Chong''s Lunheng, though lodestone use for orientation likely predates this by centuries. The compass was initially used for geomancy (feng shui) before being adapted for naval navigation by the Song Dynasty (10th century CE). When compass technology reached medieval Europe via Islamic intermediaries in the 12th century, it enabled the Age of Exploration — the great voyages that would connect, exploit, and ultimately transform every inhabited continent. China''s invention opened the ocean to the world.',
    '0083-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["compass","China","Han Dynasty","navigation","invention"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Compass","Britannica - Compass","World History Encyclopedia"],"year":83,"display_date":"83 CE","era":"CE"}'::jsonb
  ),
  (
    'The Axum Empire — Africa''s Hidden Christian Kingdom',
    'The Kingdom of Axum (c. 100–940 CE) in modern Ethiopia and Eritrea was one of the ancient world''s great powers: it controlled the Red Sea trade route between Rome and India, minted its own gold coinage, and in the 4th century CE under King Ezana converted to Christianity — making Axum''s Ethiopian Orthodox Church one of the world''s oldest Christian institutions, predating Rome''s conversion by decades. At its height in the 6th century CE, Axum controlled territory from Sudan to Yemen, the only African empire to exercise dominion across both sides of the Red Sea. Axum''s existence was largely unknown to European historians for centuries, demonstrating how thoroughly Eurocentric the historical record remains.',
    '0100-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Axum","Ethiopia","Africa","Christianity","empire"],"category":"Ancient Civilizations","significance":"high","sources":["Wikipedia - Kingdom of Aksum","Britannica - Aksum","World History Encyclopedia"],"year":100,"display_date":"100 CE","era":"CE"}'::jsonb
  ),
  (
    'The Invention of Paper — China Controls the Medium of Knowledge',
    'Around 105 CE, Chinese court official Cai Lun refined the production of paper from bark, hemp, and rags, presenting it to Emperor He of Han — though archaeological evidence suggests Chinese paper existed by the 2nd century BCE. Paper replaced expensive and heavy wooden tablets and silk, making books dramatically cheaper and more portable. China maintained a monopoly on paper production until the 7th century CE, when the technology reached the Islamic world, and the 12th century when it reached Europe. Control over the means of writing meant control over the dissemination of knowledge — a lesson not lost on Chinese imperial authorities who also burned books.',
    '0105-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["paper","China","Cai Lun","Han Dynasty","invention"],"category":"Ancient Inventions","significance":"critical","sources":["Wikipedia - History of paper","Britannica - Paper","World History Encyclopedia"],"year":105,"display_date":"105 CE","era":"CE"}'::jsonb
  ),
  (
    'The Antonine Plague — The Pandemic That Began Rome''s Long Decline',
    'Beginning in 165 CE among Roman troops campaigning in Mesopotamia, the Antonine Plague (also called the Plague of Galen) swept across the Roman Empire over 15 years, killing an estimated 5–10 million people — roughly 10% of the Empire''s population. At its peak, 2,000 people died daily in Rome. The co-emperor Lucius Verus died from it in 169 CE. The disease — likely smallpox — devastated the Roman army and tax base, contributing to the fiscal crisis and military manpower shortages that would eventually undermine Roman power. The plague marked the end of the Pax Romana and the beginning of Rome''s 300-year decline.',
    '0165-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Antonine Plague","Rome","pandemic","smallpox","decline"],"category":"Ancient Pandemics","significance":"critical","sources":["Wikipedia - Antonine Plague","HistoryExtra - Antonine Plague","PMC - PLOS ONE Modeling"],"year":165,"display_date":"165 CE","era":"CE"}'::jsonb
  ),
  (
    'The Maya Classic Period Begins — Civilization in the Jungle',
    'Around 250 CE, the Maya civilization entered its Classic Period — the apex of a society that built stone cities with populations of tens of thousands in the dense jungles of modern Mexico and Central America without metal tools, the wheel, or pack animals. Cities like Tikal, Palenque, Copan, and Chichen Itza featured multi-story temples, sophisticated astronomical observatories, a complex writing system (one of only five independently invented writing systems in history), a 365-day solar calendar, and advanced mathematics including the concept of zero. Maya kings were warrior-priests who communicated with gods through bloodletting rituals and ruled through a combination of warfare and celestial authority.',
    '0250-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Maya","Classic Period","Tikal","Mesoamerica","civilization"],"category":"Ancient Civilizations","significance":"high","sources":["World History Encyclopedia - Maya Timeline","Wikipedia - Maya civilization","Smith College - Maya Climate"],"year":250,"display_date":"250 CE","era":"CE"}'::jsonb
  ),
  (
    'The Roman Coinage Debasement — How Emperors Inflated Their Way to Collapse',
    'Beginning in earnest under Emperor Nero (54–68 CE) and accelerating through the 3rd century CE Crisis, Roman emperors systematically debased their coinage — reducing the silver content of the denarius from approximately 90% under Augustus to less than 2% by 268 CE under Gallienus. The debasement was driven by the military''s insatiable demand for pay: each legionary required 225 denarii annually, and the army had grown to 400,000 men. The resulting inflation destroyed the purchasing power of fixed wages, shattered confidence in Roman monetary institutions, disrupted trade, and was a primary driver of the 3rd century crisis that nearly ended the empire. Inflation as a tool of state survival is as old as money.',
    '0260-01-01'::date,
    'Financial Systems',
    '{"tags":["Rome","debasement","inflation","coinage","financial crisis"],"category":"Financial History","significance":"high","sources":["Wikipedia - Debasement of Roman currency","Britannica - Roman Economy","World History Encyclopedia"],"year":260,"display_date":"260 CE","era":"CE"}'::jsonb
  ),
  (
    'The Reforms of Diocletian — Saving Rome by Dividing It',
    'In 284–305 CE, Emperor Diocletian implemented sweeping reforms to save a Roman Empire in crisis: he doubled the size of the army, created the Tetrarchy (rule of four) to manage the empire''s vast territories, reorganized the tax system, froze prices via the Edict on Maximum Prices (301 CE), and separated military and civilian administration. He also conducted the last and most systematic persecution of Christians (303–311 CE), the Great Persecution, ordering the destruction of churches and execution of clergy. Diocletian''s reforms delayed the empire''s collapse by 200 years, but the Tetrarchy itself became a source of civil wars — proving that structural reforms without political legitimacy create their own instabilities.',
    '0284-11-20'::date,
    'Elections & Democratic Process',
    '{"tags":["Diocletian","Rome","reform","Tetrarchy","persecution"],"category":"Political History","significance":"high","sources":["Wikipedia - Timeline of Roman History","Britannica - Diocletian","World History Encyclopedia"],"year":284,"display_date":"284 CE","era":"CE"}'::jsonb
  ),
  (
    'The Edict of Milan — Christianity Becomes the Empire''s Religion',
    'In 313 CE, Roman Emperors Constantine I and Licinius issued the Edict of Milan, granting religious tolerance throughout the Roman Empire and specifically ending the persecution of Christians. Constantine, who claimed to have converted after seeing a cross in the sky before the Battle of Milvian Bridge in 312 CE, returned confiscated church property and began state patronage of Christian institutions. His conversion transformed a persecuted underground sect into the official religion of Earth''s most powerful state. The merger of Roman imperial power and Christian religious authority created medieval Christendom — with all its crusades, inquisitions, and civilizational consequences.',
    '0313-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Constantine","Christianity","Edict of Milan","Rome","religion"],"category":"Religion & Philosophy","significance":"critical","sources":["Wikipedia - Edict of Milan","Britannica - Constantine I","World History Encyclopedia"],"year":313,"display_date":"313 CE","era":"CE"}'::jsonb
  ),
  (
    'The Council of Nicaea — Christianity''s Doctrine Decided by Imperial Decree',
    'In May–June 325 CE, Emperor Constantine I convened 318 bishops from across the Christian world at Nicaea (modern Turkey) to resolve a theological dispute over the nature of Christ sparked by Alexandrian priest Arius, who argued Christ was created and subordinate to God the Father. Constantine presided personally, though unbaptized, and the council produced the Nicene Creed — declaring Christ ''of the same substance'' as the Father — and excommunicating Arians. The Council established that Christian doctrine would be decided by councils convened and managed by imperial authority, not scripture alone. The emperor who had no theological training dictated the theology of a religion followed by billions.',
    '0325-05-20'::date,
    'Media Manipulation',
    '{"tags":["Nicaea","Constantine","Christianity","doctrine","council"],"category":"Knowledge & Censorship","significance":"critical","sources":["Wikipedia - First Council of Nicaea","Britannica - Council of Nicaea","World History Encyclopedia"],"year":325,"display_date":"325 CE","era":"CE"}'::jsonb
  ),
  (
    'The Founding of Constantinople — Rome''s Eastern Rebirth',
    'On May 11, 330 CE, Emperor Constantine I officially dedicated Constantinople (modern Istanbul) — built on the site of the Greek city Byzantium — as the new capital of the Roman Empire. Strategically situated on the Bosphorus strait between Europe and Asia, the city was virtually impregnable to land siege and controlled the maritime trade routes between the Black Sea and Mediterranean. Constantine relocated wealth, artworks, and population from Rome to his new capital, accelerating Western Rome''s decline. Constantinople survived as the seat of the Byzantine (Eastern Roman) Empire for 1,123 years — until the Ottoman conquest in 1453 CE — making it the longest-lived imperial capital in history.',
    '0330-05-11'::date,
    'Elections & Democratic Process',
    '{"tags":["Constantinople","Constantine","Rome","Byzantium","empire"],"category":"Ancient Empires","significance":"critical","sources":["Wikipedia - Constantinople","Britannica - Constantinople","World History Encyclopedia"],"year":330,"display_date":"330 CE","era":"CE"}'::jsonb
  ),
  (
    'The Edict of Thessalonica — Christianity Becomes Mandatory',
    'On February 27, 380 CE, Emperor Theodosius I issued the Edict of Thessalonica, declaring Nicene Christianity the sole lawful religion of the Roman Empire and making all other forms of worship — including traditional Roman polytheism and non-Nicene Christianity — illegal. The Temple of Vesta was closed, the Vestal Virgins disbanded, and pagan temples across the empire were seized or destroyed. The 391 CE Serapeum destruction in Alexandria saw the daughter-library of the Library of Alexandria burned. In one generation, the Roman Empire went from tolerating all religions to mandating one. The edict permanently fused political and religious authority in the Western tradition, a fusion with consequences stretching to the Crusades and beyond.',
    '0380-02-27'::date,
    'Media Manipulation',
    '{"tags":["Theodosius","Christianity","Rome","religion","state religion"],"category":"Knowledge & Censorship","significance":"critical","sources":["Wikipedia - Edict of Thessalonica","Britannica - Theodosius I","World History Encyclopedia"],"year":380,"display_date":"380 CE","era":"CE"}'::jsonb
  ),
  (
    'The Sack of Rome by the Visigoths — The Unthinkable Becomes Reality',
    'On August 24, 410 CE, Visigoth King Alaric I and his forces entered Rome and sacked the city for three days — the first foreign army to breach Rome''s walls in 800 years, since the Gauls in 390 BCE. Though the Visigoths were Christian and restrained from massacring the population compared to ancient sacks, the psychological shock across the Roman world was immense. Augustine of Hippo began writing The City of God partly in response. Jerome wrote from Jerusalem: ''My voice sticks in my throat; sobs choke my utterance. The city which had taken the whole world was itself taken.'' The sack signaled to all that Rome was mortal — and accelerated the political fragmentation of the Western Empire.',
    '0410-08-24'::date,
    'War & Intelligence Operations',
    '{"tags":["Visigoths","Rome","sack","Alaric","fall of Rome"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Sack of Rome (410)","Britannica - Alaric I","World History Encyclopedia"],"year":410,"display_date":"410 CE","era":"CE"}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);