/*
  # Add Ancient History Events - Batch 1 (pre-500 CE)

  1. New Data
    - 10 new events covering ancient history from ~1650 BCE to ~1200 BCE
    - Events span multiple pillars: War & Intelligence, Environmental, Media Manipulation,
      Elections & Democratic Process, Child Safety & Trafficking, Government Health Transparency,
      and Surveillance & Technology
    - All BCE events use event_date '0001-01-01' with year/display_date/era stored in metadata

  2. Events Added
    - The Hyksos Invasion of Egypt (1650 BCE)
    - The Eruption of Thera/Santorini (1620 BCE)
    - The Shang Dynasty Oracle Bones (1600 BCE)
    - The Olmec Civilization (1500 BCE)
    - The Vedic Age and the Caste System (1500 BCE)
    - The Reign of Ramesses II (1279 BCE)
    - The Exodus and Jewish Monotheism (1250 BCE)
    - The Collapse of the Bronze Age (1200 BCE)
    - The Invention of Iron Smelting (1200 BCE)

  3. Important Notes
    - Uses ON CONFLICT DO NOTHING to prevent duplicate inserts
    - BCE dates stored as metadata since PostgreSQL date type doesn't support negative years
*/

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'The Hyksos Invasion of Egypt — The First Military-Technology Gap',
  'Around 1650 BCE, the Hyksos people from Canaan conquered Lower Egypt using horse-drawn chariots, composite bows, and bronze weapons — technologies Egypt lacked entirely. The Hyksos ruled Egypt for roughly a century as the 15th Dynasty, marking the only successful foreign conquest of Egypt in the Middle Kingdom era. The shock forced Egypt to adopt these military technologies wholesale; when the Theban princes eventually expelled the Hyksos around 1550 BCE, they used Hyksos-style warfare to build the Egyptian New Kingdom and its empire. Military advantage over civilian populations has driven conquest since the beginning of recorded history.',
  '0001-01-01',
  'War & Intelligence Operations',
  '{"era":"BCE","year":-1650,"display_date":"1650 BCE","tags":["Hyksos","Egypt","invasion","chariots","Bronze Age"],"category":"Ancient Wars","significance":"high","sources":["Wikipedia - Hyksos","Britannica - Hyksos","World History Encyclopedia"]}'::jsonb
),
(
  'The Eruption of Thera (Santorini) — A Volcano That May Have Ended Minoan Civilization',
  'Around 1620 BCE (estimates range from 1642–1540 BCE), the volcanic island of Thera (modern Santorini) erupted in one of the largest volcanic events in the last 10,000 years — 100 times more powerful than the 1980 Mount St. Helens eruption. The eruption buried the Minoan settlement of Akrotiri under meters of ash, triggered tsunamis across the Eastern Mediterranean, and likely disrupted agricultural systems across a wide region. Many historians link the Theran eruption to the subsequent decline of Minoan Crete, which collapsed around 1450 BCE. The event may also underlie ancient stories of cataclysm including Plato''s myth of Atlantis.',
  '0001-01-01',
  'Environmental & Corporate Accountability',
  '{"era":"BCE","year":-1620,"display_date":"1620 BCE","tags":["Thera","volcano","Minoan","eruption","Santorini"],"category":"Natural Disasters","significance":"high","sources":["Wikipedia - Minoan eruption","Britannica - Thera","World History Encyclopedia"]}'::jsonb
),
(
  'The Shang Dynasty Oracle Bones — Divination, Power, and the Origins of Chinese Writing',
  'From approximately 1600 to 1046 BCE, Shang Dynasty kings in China used oracle bones — ox scapulae and turtle shells — to divine the future by applying heat until the bone cracked, then interpreting the patterns. Royal diviners inscribed questions and answers onto the bones in a script that is the direct ancestor of modern Chinese characters. These 200,000+ surviving oracle bones reveal a state in which political decisions were inseparable from supernatural consultation — the king''s authority derived partly from his claimed ability to communicate with ancestors and deities. The oracle bone inscriptions are the earliest verified example of Chinese writing, predating cuneiform''s decline by a millennium.',
  '0001-01-01',
  'Media Manipulation',
  '{"era":"BCE","year":-1600,"display_date":"1600 BCE","tags":["Shang Dynasty","oracle bones","China","writing","divination"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Oracle bone","Britannica - Shang Dynasty","Smithsonian Asian Art Timeline"]}'::jsonb
),
(
  'The Olmec Civilization — Mesoamerica''s ''Mother Culture''',
  'Between 1500 and 400 BCE, the Olmec civilization flourished in the tropical lowlands of modern Veracruz and Tabasco, Mexico — creating Mesoamerica''s first complex urban society. The Olmec produced monumental colossal heads up to 3.4 meters tall carved from basalt, established the first long-distance trade networks in Mesoamerica, and developed early writing and calendar systems that would be refined by the Maya and Aztec. The Olmec laid the cultural foundations — ball games, jaguar deity worship, human sacrifice — that would define Mesoamerican civilization for the next 2,000 years, yet their civilization collapsed around 400 BCE for unknown reasons.',
  '0001-01-01',
  'Elections & Democratic Process',
  '{"era":"BCE","year":-1500,"display_date":"1500 BCE","tags":["Olmec","Mesoamerica","civilization","Mexico","ancient"],"category":"Ancient Civilizations","significance":"high","sources":["Wikipedia - Olmec","Britannica - Olmec","World History Encyclopedia - Maya Timeline"]}'::jsonb
),
(
  'The Vedic Age and the Origins of the Caste System — Inequality Sanctified by Religion',
  'Between 1500 and 500 BCE, the Aryan peoples who had entered the Indian subcontinent developed the Vedic religious system, codified in four Vedas — the oldest of which, the Rigveda, dates to approximately 1500–1200 BCE. The Purusha Sukta hymn of the Rigveda described the four varnas (castes) as emerging from the body of the primordial being: Brahmins (priests) from the mouth, Kshatriyas (warriors) from the arms, Vaishyas (merchants) from the thighs, Shudras (servants) from the feet. This divine origin myth transformed social hierarchy from a political arrangement into a cosmic law — making inequality literally sacred. The caste system would govern Indian society for over 3,000 years.',
  '0001-01-01',
  'Child Safety & Trafficking',
  '{"era":"BCE","year":-1500,"display_date":"1500 BCE","tags":["caste","India","Vedic","Hinduism","inequality"],"category":"Slavery & Human Rights","significance":"critical","sources":["Wikipedia - Vedic period","Britannica - Vedas","World History Encyclopedia"]}'::jsonb
),
(
  'The Reign of Ramesses II — Propaganda as Imperial Instrument',
  'Ramesses II (reigned c. 1279–1213 BCE), Egypt''s longest-reigning pharaoh, fought the Hittites to a bloody stalemate at the Battle of Kadesh (1274 BCE) and then commissioned the most elaborate propaganda campaign in ancient history — depicting himself as a lone hero crushing armies and winning total victory. He covered the walls of Abu Simbel, Karnak, and the Ramesseum with these manufactured triumphs. The actual result, the Treaty of Kadesh (c. 1259 BCE) — the world''s oldest surviving peace treaty — acknowledged neither side had won. Kadesh established the template for state propaganda: the ruler transforms ambiguous outcomes into mythologized victories.',
  '0001-01-01',
  'Media Manipulation',
  '{"era":"BCE","year":-1279,"display_date":"1279 BCE","tags":["Ramesses II","Egypt","propaganda","Kadesh","pharaoh"],"category":"Media & Propaganda","significance":"high","sources":["Britannica - Ramesses II","Wikipedia - Battle of Kadesh","World History Encyclopedia"]}'::jsonb
),
(
  'The Exodus and the Origins of Jewish Monotheism',
  'The biblical Exodus — the departure of Israelite slaves from Egypt under Moses — is traditionally dated to approximately 1250–1200 BCE during the reign of Ramesses II, though historians debate its historicity. Whether literal event or foundational myth, it encoded a radical idea: a single God who sided with the enslaved against their oppressors. The Torah''s monotheism, ethical laws, and concept of a covenant between God and a people created Judaism — the root religion from which Christianity and Islam would later emerge, shaping the moral frameworks of over half of humanity.',
  '0001-01-01',
  'Government Health Transparency',
  '{"era":"BCE","year":-1250,"display_date":"1250 BCE","tags":["Exodus","Judaism","Moses","monotheism","slavery"],"category":"Religion & Philosophy","significance":"critical","sources":["Britannica - Exodus","World History Encyclopedia","Wikipedia - The Exodus"]}'::jsonb
),
(
  'The Collapse of the Bronze Age — Civilization''s First System Failure',
  'Between 1200 and 1150 BCE, virtually every major civilization around the Eastern Mediterranean — the Mycenaeans, Hittites, Ugarit, and the Egyptian New Kingdom — collapsed simultaneously in what historians call the Late Bronze Age Collapse. Palace economies were obliterated, trade networks severed, literacy disappeared in many regions, and populations fell dramatically. The cause remains debated: climate-driven drought, the migration of Sea Peoples, internal rebellions, and severed trade routes likely formed a cascade failure. It remains the most catastrophic civilizational collapse in recorded history before the fall of Rome.',
  '0001-01-01',
  'Environmental & Corporate Accountability',
  '{"era":"BCE","year":-1200,"display_date":"1200 BCE","tags":["Bronze Age Collapse","Sea Peoples","civilization","collapse","climate"],"category":"Civilizational Collapse","significance":"critical","sources":["Wikipedia - Late Bronze Age Collapse","Britannica","World History Encyclopedia"]}'::jsonb
),
(
  'The Invention of Iron Smelting — The Metal That Democratized Warfare',
  'Around 1200 BCE, ironworking technology spread from the Hittite Empire into the broader ancient world following the Bronze Age Collapse — replacing bronze as the primary metal for tools and weapons. Iron ore was vastly more abundant and cheaper than the copper and tin needed for bronze, meaning iron weapons were available to common soldiers and farmers rather than just elite warriors. The democratization of military technology disrupted existing power hierarchies: armies of iron-armed infantry could now challenge charioteers and aristocratic cavalry. The Iron Age thus began a slow leveling of military power that eventually contributed to the collapse of palace economies.',
  '0001-01-01',
  'AI & Surveillance',
  '{"era":"BCE","year":-1200,"display_date":"1200 BCE","tags":["iron","smelting","Bronze Age","technology","warfare"],"category":"Ancient Inventions","significance":"critical","sources":["Wikipedia - Iron Age","Britannica - Iron Age","World History Encyclopedia"]}'::jsonb
)
ON CONFLICT DO NOTHING;