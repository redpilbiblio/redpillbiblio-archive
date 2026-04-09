/*
  # Add Ancient History Events - Batch 1, Part 1 (Events 1-25)

  1. New Data
    - 25 timeline events covering ancient history from 9999 BCE to 814 BCE
    - Topics include: Neolithic Revolution, Sahara desertification, invention of the wheel,
      writing, Egyptian unification, Sumerian money, Indus Valley, Great Pyramid, Sargon of Akkad,
      Code of Hammurabi, Hyksos invasion, Thera eruption, Shang oracle bones, Olmec civilization,
      Vedic caste system, Ramesses II, Exodus, Bronze Age Collapse, iron smelting, Phoenician alphabet,
      Zhou Dynasty, Zoroastrianism, Assyrian Empire, founding of Carthage, and the first Olympics

  2. Notes
    - BCE events use '0001-01-01' as event_date with actual year stored in metadata
    - Each event includes tags, category, significance, sources, year, display_date, and era in metadata
    - Uses NOT EXISTS checks to prevent duplicate inserts
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Neolithic Agricultural Revolution — How Farming Enslaved Humanity',
    'Beginning around 10,000 BCE in the Fertile Crescent and independently in China, Mesoamerica, and other regions, the shift from hunter-gatherer lifestyles to settled agriculture transformed human existence in ways its adopters could not have anticipated. Archaeological evidence shows that early farmers were shorter, less healthy, and more disease-prone than their hunter-gatherer predecessors — subject to crop failures, famine, and the infectious diseases that flourish in dense settled communities. Yet farming could sustain 50–100 times more people per acre than foraging, enabling population growth that made a return impossible. Anthropologist Jared Diamond called agriculture ''the worst mistake in human history''; it was also the precondition for every civilization, empire, and injustice that followed.',
    '0001-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["agriculture","Neolithic","revolution","farming","Fertile Crescent"],"category":"Ancient Civilizations","significance":"critical","sources":["Wikipedia - Neolithic Revolution","Britannica - Neolithic Period","Jared Diamond - Worst Mistake in Human History"],"year":-9999,"display_date":"9999 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Sahara''s Desertification — Climate Shapes Civilization''s Geography',
    'Between approximately 5500 and 2500 BCE, the Sahara underwent a dramatic climate shift from a ''Green Sahara'' (African Humid Period) — with lakes, rivers, and savanna grasslands supporting pastoral communities — to the hyperarid desert that exists today. The trigger was a gradual shift in Earth''s orbital parameters (Milankovitch cycles) reducing monsoon rainfall in North Africa. The human populations who had lived in the Sahara were forced eastward into the Nile Valley, contributing to the population density that made Egyptian civilization possible and westward into sub-Saharan Africa. Climate change has always reshaped where civilization could exist — the Sahara''s desertification is the ancient world''s most consequential environmental transformation.',
    '0001-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["Sahara","climate","desertification","Africa","migration"],"category":"Environmental History","significance":"high","sources":["Wikipedia - African Humid Period","Britannica - Sahara","World History Encyclopedia"],"year":-5500,"display_date":"5500 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Wheel — Mesopotamia''s Revolution in Motion and Power',
    'Around 3500 BCE, Sumerian craftsmen in Lower Mesopotamia created the first wheel — initially a potter''s wheel, then adapted for wheeled carts by approximately 3200 BCE. The oldest archaeological evidence comes from Ur and Uruk. By enabling the rapid movement of goods, armies, and people, the wheel compressed distances, turbo-charged commerce, and gave military forces a decisive battlefield advantage. No single invention did more to consolidate the power of early states over vast territories.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["wheel","Sumer","invention","Mesopotamia","transport"],"category":"Ancient Inventions","significance":"critical","sources":["Britannica - Wheel","Ancient Origins","Banque de France - 10000 Years of Economy"],"year":-3500,"display_date":"3500 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Invention of Writing — Cuneiform Unlocks Human Civilization',
    'Around 3300 BCE in Uruk, Sumer, the world''s first writing system emerged from clay tablets used by temple administrators to track grain and livestock. What began as pictographic accounting tokens evolved into cuneiform — a system of wedge-shaped marks that would record laws, myths, and commerce for over 3,000 years across 15 languages. Writing fundamentally transferred power from memory and oral tradition to permanent record, enabling bureaucratic states, legal systems, and historical documentation for the first time in human history.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["writing","cuneiform","Sumer","Mesopotamia","invention"],"category":"Ancient Inventions","significance":"critical","sources":["Wikipedia - Cuneiform","Khan Academy - Ancient Near East","Metropolitan Museum of Art"],"year":-3300,"display_date":"3300 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Unification of Egypt — The First Nation-State Is Born',
    'Around 3100 BCE, the pharaoh Narmer (or Menes) unified Upper and Lower Egypt under a single crown, creating one of the world''s earliest and most durable centralized states. The merging of two distinct kingdoms — symbolized by the double crown — established a template for divine kingship, bureaucratic governance, and monumental architecture that would persist for over 3,000 years. Egypt''s unification concentrated unprecedented wealth and labor in the hands of a singular ruler, setting the pattern for every empire that followed.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Egypt","Narmer","unification","pharaoh","kingship"],"category":"Ancient Civilizations","significance":"critical","sources":["Wikipedia - History of ancient Egypt","British Museum Timeline of Ancient Egypt","University of Memphis Egypt Timeline"],"year":-3100,"display_date":"3100 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Sumerians Invent Money — Debt Before Coinage',
    'Around 3000–2500 BCE, Sumerian temple administrators in Ur and Uruk developed the world''s first monetary system — not coins, but standardized units of silver by weight (the shekel) recorded on clay tablets as credits and debts. The Mesopotamian temple economy functioned as a creditor to farmers, advancing grain seed with interest due at harvest. The Code of Hammurabi (1754 BCE) regulated interest rates and debt slavery. The archaeological record reveals that debt preceded money, and money preceded coinage: human beings were being enslaved for unpaid debts approximately 5,000 years ago. Every subsequent financial system — from Roman banking to modern derivatives — rests on this Sumerian innovation.',
    '0001-01-01'::date,
    'Financial Systems',
    '{"tags":["money","Sumer","debt","shekel","financial history"],"category":"Financial History","significance":"critical","sources":["Wikipedia - History of money","Britannica - Money","World History Encyclopedia"],"year":-3000,"display_date":"3000 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Indus Valley Civilization — The Forgotten Urban Empire',
    'From approximately 2600 to 1900 BCE, the Indus Valley Civilization flourished across modern Pakistan and northwest India, with cities like Mohenjo-daro and Harappa each housing 30,000–60,000 people — making them among the largest urban centers on Earth. Their grid-planned streets, standardized weights and measures, sophisticated sewage systems, and absence of monumental palaces or temples suggest a remarkably egalitarian power structure unlike Egypt or Mesopotamia. The civilization''s sudden collapse around 1900 BCE, likely from climate-driven drought and disrupted trade, erased it from memory until rediscovered in 1921.',
    '0001-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["Indus Valley","Harappa","Mohenjo-daro","Bronze Age","collapse"],"category":"Ancient Civilizations","significance":"critical","sources":["Wikipedia - Indus Valley Civilisation","Britannica - Indus Civilization","Libretexts - Harappan"],"year":-2600,"display_date":"2600 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Great Pyramid of Giza — State Power Carved in Stone',
    'Between approximately 2560 and 2540 BCE, Pharaoh Khufu mobilized an estimated 20,000–100,000 workers to construct the Great Pyramid at Giza — 2.3 million limestone blocks averaging 2.5 tons each, rising to 146 meters. The pyramid was not built by slaves, as later myth held, but by a highly organized paid workforce housed in purpose-built settlements. The project represents the most concentrated exercise of state power and resource mobilization in the ancient world, requiring sophisticated logistics, mathematics, and engineering knowledge the ruling class jealously guarded.',
    '0001-01-01'::date,
    'Corporate Accountability',
    '{"tags":["pyramid","Giza","Khufu","Egypt","engineering"],"category":"Engineering Marvels","significance":"critical","sources":["Wikipedia - History of ancient Egypt","British Museum","Smithsonian Institution"],"year":-2560,"display_date":"2560 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Sargon of Akkad — The World''s First Empire Builder',
    'Around 2334 BCE, Sargon of Akkad conquered the Sumerian city-states and founded the Akkadian Empire — widely considered the world''s first true empire, stretching from the Persian Gulf to the Mediterranean. Sargon ruled for 56 years, commanding an army of 5,400 men who he claimed ate bread before him daily — the first professional standing army on record. His empire created the blueprint for all subsequent imperial systems: centralized taxation, standardized language and coinage, appointed governors, and a propaganda apparatus claiming divine mandate.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Sargon","Akkad","empire","Mesopotamia","military"],"category":"Ancient Empires","significance":"critical","sources":["World History Encyclopedia","Britannica - Sargon of Akkad","Wikipedia - Akkadian Empire"],"year":-2334,"display_date":"2334 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Code of Hammurabi — Law as an Instrument of Class Control',
    'Around 1754 BCE, Babylonian King Hammurabi inscribed 282 laws onto a 2.25-meter black diorite stele — the most complete legal code surviving from antiquity. The code explicitly encoded a three-tier class system: free men, commoners, and slaves received different punishments for identical crimes. A nobleman who blinded a commoner paid one mina of silver; if he blinded a fellow noble, his eye was taken. The code governed commerce, wages, property, marriage, and slavery, revealing how the ancient state weaponized law to protect wealth and enforce hierarchy.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Hammurabi","law","Babylon","slavery","class system"],"category":"Legal History","significance":"critical","sources":["Wikipedia - Code of Hammurabi","Britannica - Code of Hammurabi","USHistory.org"],"year":-1754,"display_date":"1754 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Hyksos Invasion of Egypt — The First Military-Technology Gap',
    'Around 1650 BCE, the Hyksos people from Canaan conquered Lower Egypt using horse-drawn chariots, composite bows, and bronze weapons — technologies Egypt lacked entirely. The Hyksos ruled Egypt for roughly a century as the 15th Dynasty, marking the only successful foreign conquest of Egypt in the Middle Kingdom era. The shock forced Egypt to adopt these military technologies wholesale; when the Theban princes eventually expelled the Hyksos around 1550 BCE, they used Hyksos-style warfare to build the Egyptian New Kingdom and its empire. Military advantage over civilian populations has driven conquest since the beginning of recorded history.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Hyksos","Egypt","invasion","chariots","Bronze Age"],"category":"Ancient Wars","significance":"high","sources":["Wikipedia - Hyksos","Britannica - Hyksos","World History Encyclopedia"],"year":-1650,"display_date":"1650 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Eruption of Thera (Santorini) — A Volcano That May Have Ended Minoan Civilization',
    'Around 1620 BCE (estimates range from 1642–1540 BCE), the volcanic island of Thera (modern Santorini) erupted in one of the largest volcanic events in the last 10,000 years — 100 times more powerful than the 1980 Mount St. Helens eruption. The eruption buried the Minoan settlement of Akrotiri under meters of ash, triggered tsunamis across the Eastern Mediterranean, and likely disrupted agricultural systems across a wide region. Many historians link the Theran eruption to the subsequent decline of Minoan Crete, which collapsed around 1450 BCE. The event may also underlie ancient stories of cataclysm including Plato''s myth of Atlantis.',
    '0001-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["Thera","volcano","Minoan","eruption","Santorini"],"category":"Natural Disasters","significance":"high","sources":["Wikipedia - Minoan eruption","Britannica - Thera","World History Encyclopedia"],"year":-1620,"display_date":"1620 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Shang Dynasty Oracle Bones — Divination, Power, and the Origins of Chinese Writing',
    'From approximately 1600 to 1046 BCE, Shang Dynasty kings in China used oracle bones — ox scapulae and turtle shells — to divine the future by applying heat until the bone cracked, then interpreting the patterns. Royal diviners inscribed questions and answers onto the bones in a script that is the direct ancestor of modern Chinese characters. These 200,000+ surviving oracle bones reveal a state in which political decisions were inseparable from supernatural consultation — the king''s authority derived partly from his claimed ability to communicate with ancestors and deities. The oracle bone inscriptions are the earliest verified example of Chinese writing, predating cuneiform''s decline by a millennium.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Shang Dynasty","oracle bones","China","writing","divination"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Oracle bone","Britannica - Shang Dynasty","Smithsonian Asian Art Timeline"],"year":-1600,"display_date":"1600 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Olmec Civilization — Mesoamerica''s ''Mother Culture''',
    'Between 1500 and 400 BCE, the Olmec civilization flourished in the tropical lowlands of modern Veracruz and Tabasco, Mexico — creating Mesoamerica''s first complex urban society. The Olmec produced monumental colossal heads up to 3.4 meters tall carved from basalt, established the first long-distance trade networks in Mesoamerica, and developed early writing and calendar systems that would be refined by the Maya and Aztec. The Olmec laid the cultural foundations — ball games, jaguar deity worship, human sacrifice — that would define Mesoamerican civilization for the next 2,000 years, yet their civilization collapsed around 400 BCE for unknown reasons.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Olmec","Mesoamerica","civilization","Mexico","ancient"],"category":"Ancient Civilizations","significance":"high","sources":["Wikipedia - Olmec","Britannica - Olmec","World History Encyclopedia - Maya Timeline"],"year":-1500,"display_date":"1500 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Vedic Age and the Origins of the Caste System — Inequality Sanctified by Religion',
    'Between 1500 and 500 BCE, the Aryan peoples who had entered the Indian subcontinent developed the Vedic religious system, codified in four Vedas — the oldest of which, the Rigveda, dates to approximately 1500–1200 BCE. The Purusha Sukta hymn of the Rigveda described the four varnas (castes) as emerging from the body of the primordial being: Brahmins (priests) from the mouth, Kshatriyas (warriors) from the arms, Vaishyas (merchants) from the thighs, Shudras (servants) from the feet. This divine origin myth transformed social hierarchy from a political arrangement into a cosmic law — making inequality literally sacred. The caste system would govern Indian society for over 3,000 years.',
    '0001-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags":["caste","India","Vedic","Hinduism","inequality"],"category":"Slavery & Human Rights","significance":"critical","sources":["Wikipedia - Vedic period","Britannica - Vedas","World History Encyclopedia"],"year":-1500,"display_date":"1500 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Reign of Ramesses II — Propaganda as Imperial Instrument',
    'Ramesses II (reigned c. 1279–1213 BCE), Egypt''s longest-reigning pharaoh, fought the Hittites to a bloody stalemate at the Battle of Kadesh (1274 BCE) and then commissioned the most elaborate propaganda campaign in ancient history — depicting himself as a lone hero crushing armies and winning total victory. He covered the walls of Abu Simbel, Karnak, and the Ramesseum with these manufactured triumphs. The actual result, the Treaty of Kadesh (c. 1259 BCE) — the world''s oldest surviving peace treaty — acknowledged neither side had won. Kadesh established the template for state propaganda: the ruler transforms ambiguous outcomes into mythologized victories.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Ramesses II","Egypt","propaganda","Kadesh","pharaoh"],"category":"Media & Propaganda","significance":"high","sources":["Britannica - Ramesses II","Wikipedia - Battle of Kadesh","World History Encyclopedia"],"year":-1279,"display_date":"1279 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Exodus and the Origins of Jewish Monotheism',
    'The biblical Exodus — the departure of Israelite slaves from Egypt under Moses — is traditionally dated to approximately 1250–1200 BCE during the reign of Ramesses II, though historians debate its historicity. Whether literal event or foundational myth, it encoded a radical idea: a single God who sided with the enslaved against their oppressors. The Torah''s monotheism, ethical laws, and concept of a covenant between God and a people created Judaism — the root religion from which Christianity and Islam would later emerge, shaping the moral frameworks of over half of humanity.',
    '0001-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Exodus","Judaism","Moses","monotheism","slavery"],"category":"Religion & Philosophy","significance":"critical","sources":["Britannica - Exodus","World History Encyclopedia","Wikipedia - The Exodus"],"year":-1250,"display_date":"1250 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Collapse of the Bronze Age — Civilization''s First System Failure',
    'Between 1200 and 1150 BCE, virtually every major civilization around the Eastern Mediterranean — the Mycenaeans, Hittites, Ugarit, and the Egyptian New Kingdom — collapsed simultaneously in what historians call the Late Bronze Age Collapse. Palace economies were obliterated, trade networks severed, literacy disappeared in many regions, and populations fell dramatically. The cause remains debated: climate-driven drought, the migration of Sea Peoples, internal rebellions, and severed trade routes likely formed a cascade failure. It remains the most catastrophic civilizational collapse in recorded history before the fall of Rome.',
    '0001-01-01'::date,
    'Environmental & Corporate Accountability',
    '{"tags":["Bronze Age Collapse","Sea Peoples","civilization","collapse","climate"],"category":"Civilizational Collapse","significance":"critical","sources":["Wikipedia - Late Bronze Age Collapse","Britannica","World History Encyclopedia"],"year":-1200,"display_date":"1200 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Invention of Iron Smelting — The Metal That Democratized Warfare',
    'Around 1200 BCE, ironworking technology spread from the Hittite Empire into the broader ancient world following the Bronze Age Collapse — replacing bronze as the primary metal for tools and weapons. Iron ore was vastly more abundant and cheaper than the copper and tin needed for bronze, meaning iron weapons were available to common soldiers and farmers rather than just elite warriors. The democratization of military technology disrupted existing power hierarchies: armies of iron-armed infantry could now challenge charioteers and aristocratic cavalry. The Iron Age thus began a slow leveling of military power that eventually contributed to the collapse of palace economies.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["iron","smelting","Bronze Age","technology","warfare"],"category":"Ancient Inventions","significance":"critical","sources":["Wikipedia - Iron Age","Britannica - Iron Age","World History Encyclopedia"],"year":-1200,"display_date":"1200 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Phoenician Alphabet — The Information Revolution That Democratized Literacy',
    'Around 1050 BCE, Phoenician merchants along the coast of modern Lebanon perfected a 22-letter consonantal alphabet — the first phonetic writing system simple enough for ordinary traders to learn. Unlike the thousands of symbols required for cuneiform or hieroglyphs, mastery required only months. Spread via Phoenician trade networks across the Mediterranean, the alphabet was adopted by the Greeks, who added vowels, who passed it to the Romans, who gave the world the Latin script still used by billions today. The Phoenician merchants'' commercial need to record transactions democratized literacy and undermined scribal monopolies on written knowledge.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["alphabet","Phoenician","writing","literacy","trade"],"category":"Ancient Inventions","significance":"critical","sources":["Wikipedia - Phoenician Alphabet","History Hit","Britannica - Phoenicians"],"year":-1050,"display_date":"1050 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Zhou Dynasty and the Mandate of Heaven — Power Claims Divine Sanction',
    'The Zhou Dynasty (1046–256 BCE) overthrew the Shang Dynasty and introduced the Mandate of Heaven (Tianming) — the doctrine that the ruler''s right to govern derived from divine approval, which could be withdrawn if the ruler became corrupt or incompetent, as evidenced by natural disasters, popular revolt, and military defeat. This concept simultaneously legitimized conquest (the conqueror clearly had Heaven''s approval) and set limits on power (tyranny invited Heaven''s withdrawal of mandate). The Zhou Dynasty lasted 800 years — the longest in Chinese history — during which Confucius, Laozi, and Mencius all lived, making the Zhou the intellectual matrix of Chinese civilization.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Zhou Dynasty","China","Mandate of Heaven","governance","philosophy"],"category":"Political History","significance":"high","sources":["China Highlights - History","Britannica - Zhou Dynasty","World History Encyclopedia"],"year":-1046,"display_date":"1046 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Zoroastrianism — The Religion That Invented Heaven, Hell, and the Devil',
    'Founded by the prophet Zarathustra (Zoroaster) in ancient Persia, likely between 1500 and 600 BCE (scholars disagree substantially), Zoroastrianism introduced revolutionary theological concepts: a cosmic dualism between a good supreme deity (Ahura Mazda) and an evil adversary (Angra Mainyu/Ahriman), individual judgment after death, heaven and hell, a final cosmic battle, and bodily resurrection. These concepts, absorbed into Judaism during the Babylonian exile (6th century BCE), became foundational to Christianity and Islam. The world''s three largest monotheistic religions — shaping 4 billion people''s understanding of good, evil, and the afterlife — borrowed their theological architecture from a Persian prophet whose original followers number fewer than 200,000 today.',
    '0001-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Zoroastrianism","Persia","religion","dualism","Zarathustra"],"category":"Religion & Philosophy","significance":"critical","sources":["Wikipedia - Zoroastrianism","Britannica - Zoroastrianism","World History Encyclopedia"],"year":-1000,"display_date":"1000 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Assyrian Empire — History''s First Total War State',
    'From approximately 911 to 609 BCE, the Neo-Assyrian Empire built the ancient world''s most feared military machine: professional iron-armed soldiers, siege engines, cavalry, and a deliberate policy of mass terror — deportation, impalement, and wholesale destruction of rebellious cities. At its peak under Ashurbanipal (669–631 BCE), the empire stretched from Egypt to Persia, containing some 20 million people. Assyrian royal inscriptions boast of pyramids of skulls and cities reduced to rubble as deliberate instruments of psychological warfare — the first documented use of systematic state terror as imperial policy.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Assyria","empire","military","terror","Iron Age"],"category":"Ancient Empires","significance":"high","sources":["Britannica - Assyria","Wikipedia - Neo-Assyrian Empire","World History Encyclopedia"],"year":-911,"display_date":"911 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Founding of Carthage — The Mediterranean''s Commercial Superpower',
    'According to tradition, Queen Dido of Tyre founded Carthage (in modern Tunisia) around 814 BCE as a Phoenician trading colony. Over the following centuries it grew into the Mediterranean''s most powerful commercial empire, controlling trade routes from Spain to Sicily and fielding a mercenary army that threatened Rome''s existence. Carthage''s commercial empire — built on silver mines in Spain, slave labor, and naval supremacy — represented an alternative model of imperial power rooted in trade rather than conquest. Its eventual destruction by Rome in 146 BCE erased the historical record of its civilization almost entirely.',
    '0001-01-01'::date,
    'Financial Systems',
    '{"tags":["Carthage","Phoenician","trade","Mediterranean","commerce"],"category":"Ancient Trade","significance":"high","sources":["Britannica - Carthage","World History Encyclopedia","Wikipedia - Carthage"],"year":-814,"display_date":"814 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The First Olympic Games — Religion, Politics, and Athletic Competition',
    'In 776 BCE (traditional date), the Olympic Games were first held at Olympia in honor of Zeus — bringing representatives of the fragmented Greek world together every four years under a sacred truce (ekecheiria) that suspended wars. The Games were emphatically political: winners received olive wreaths but returned home as heroes whose cities gained prestige; the king of Elis, who hosted the Games, was effectively guaranteed regional power. Women were excluded from competing and married women even from watching on pain of death. The Games were abolished by Emperor Theodosius I in 393 CE as pagan religious festivals. Their 1896 revival by Baron de Coubertin explicitly used the ancient Games'' political neutrality myth to serve modern nationalist competition.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Olympics","Greece","Olympia","athletics","Zeus"],"category":"Political History","significance":"high","sources":["Wikipedia - Ancient Olympic Games","Britannica - Olympic Games","World History Encyclopedia"],"year":-776,"display_date":"776 BCE","era":"BCE"}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);