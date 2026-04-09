/*
  # Add Ancient History Events - Batch 1, Part 2 (Events 26-50)

  1. New Data
    - 25 timeline events covering ancient history from 753 BCE to 322 BCE
    - Topics include: Founding of Rome, Draco's law code, Solon's reforms, Confucianism,
      Cyrus the Great, Cyrus Cylinder, Buddhism, Roman Republic, Cleisthenes/democracy,
      iron smelting in Africa, Battle of Marathon, Thermopylae, Salamis, Delian League,
      Warring States, Twelve Tables, Peloponnesian War, Plague of Athens, Hippocratic Corpus,
      trial of Socrates, Plato's Academy, Philip II assassination, Alexander's conquests,
      founding of Alexandria, Battle of Gaugamela

  2. Notes
    - BCE events use '0001-01-01' as event_date with actual year stored in metadata
    - Uses NOT EXISTS checks to prevent duplicate inserts
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Founding of Rome — From Wolf''s Den to World Capital',
    'Roman tradition held that Romulus founded Rome on April 21, 753 BCE on the Palatine Hill — a date the Romans used as their calendrical starting point (Ab Urbe Condita). Archaeological excavations have confirmed settlement on the Palatine dating to approximately 900–800 BCE. The founding myth — twin brothers suckled by a wolf, Romulus killing Remus in a boundary dispute — encoded Rome''s foundational values: violence, ambition, and the primacy of the city over blood. From this village of perhaps a few hundred people would grow a civilization that governed 70 million people across three continents and whose legal, linguistic, and architectural legacy still shapes the modern world.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Rome","founding","Romulus","Palatine Hill","legend"],"category":"Ancient Civilizations","significance":"high","sources":["Wikipedia - Timeline of Roman History","History Hit - Key Dates Roman History","Britannica - Rome"],"year":-753,"display_date":"753 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Draco''s Law Code — When the Law Was Written in Blood',
    'In 621 BCE, Athenian lawgiver Draco produced the city''s first written legal code — replacing oral law controlled by aristocrats with publicly inscribed statutes. The code was notorious for its severity: almost every offense, including petty theft, was punishable by death. Demades, a later Athenian orator, reportedly joked that Draco wrote his laws not in ink but in blood. Yet the act of writing law down was revolutionary — it stripped aristocrats of the power to interpret oral tradition arbitrarily and gave ordinary citizens grounds to demand uniform treatment. The word ''draconian'' persists as testament to the danger of power unchecked by mercy.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Draco","Athens","law code","democracy","Greece"],"category":"Legal History","significance":"high","sources":["Wikipedia - Draco (lawmaker)","World History Encyclopedia","Britannica - Draco"],"year":-621,"display_date":"621 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Solon''s Reforms in Athens — The Blueprint for Democratic Governance',
    'In 594 BCE, Athenian statesman Solon was appointed archon with emergency powers and implemented radical reforms that would seed Western democracy: he cancelled debts that had enslaved thousands of Athenians, abolished debt-slavery, reformed the constitution to allow any citizen to bring legal charges, and redistributed political power across four income classes. Solon''s reforms did not create full democracy — that would wait for Cleisthenes — but they broke the stranglehold of hereditary aristocracy over Athenian politics and established the principle that governance derived legitimacy from the governed, not divine bloodline.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Solon","Athens","democracy","debt","reform"],"category":"Political History","significance":"critical","sources":["Britannica - Solon","World History Encyclopedia - Greek Government","Wikipedia - Solon"],"year":-594,"display_date":"594 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Birth of Confucianism — China''s Moral Operating System',
    'Confucius (Kong Qiu, 551–479 BCE) lived during China''s chaotic Spring and Autumn Period and developed a philosophy centered on social harmony through hierarchical relationships, ritual propriety, filial piety, and the cultivation of virtue in rulers. He taught approximately 3,000 students and compiled or edited China''s classical texts. Despite initial rejection by the rulers he sought to counsel, his ideas were adopted as official state ideology during the Han Dynasty (136 BCE) and shaped Chinese governance, family structure, and ethics for 2,500 years — arguably the most enduring philosophy of political organization in human history.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Confucius","China","philosophy","governance","ethics"],"category":"Religion & Philosophy","significance":"critical","sources":["Wikipedia - Confucius","Britannica - Confucius","Internet Encyclopedia of Philosophy"],"year":-551,"display_date":"551 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Cyrus the Great Founds the Persian Empire — The World''s First Superpower',
    'In 550 BCE, Cyrus II of Persia defeated the Median Empire and within a decade conquered Lydia and Babylon, creating the Achaemenid Empire — the largest empire the world had ever seen, stretching from the Aegean to the Indus River and governing an estimated 44% of the world''s population. Unlike his predecessors, Cyrus issued the Cyrus Cylinder (539 BCE), widely regarded as history''s first human rights document, declaring freedom of religion and the liberation of captive peoples including the Jews from Babylonian exile. His model of tolerant, multi-ethnic imperial governance would be studied and imitated for millennia.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Cyrus","Persia","Achaemenid","empire","human rights"],"category":"Ancient Empires","significance":"critical","sources":["Wikipedia - Achaemenid Empire","Britannica - Cyrus the Great","History Guild"],"year":-550,"display_date":"550 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Cyrus Cylinder — History''s First Human Rights Declaration',
    'In 539 BCE, after conquering Babylon, Cyrus the Great issued a proclamation inscribed on a clay cylinder that freed the peoples deported by the Babylonians — including the Jews — to return to their homelands, worship their own gods, and restore their temples. The cylinder explicitly declares that Cyrus freed slaves and banned forced labor. The United Nations declared the Cyrus Cylinder an early forerunner of human rights charters, and Iran regards it as the world''s first bill of rights. Critics note it was also skilled propaganda designed to present Cyrus as a liberator rather than conqueror, illustrating how power has always needed legitimizing narratives.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Cyrus Cylinder","Persia","human rights","Babylon","freedom"],"category":"Legal History","significance":"critical","sources":["Wikipedia - Cyrus Cylinder","Britannica - Cyrus the Great","Achaemenid Empire - Wikipedia"],"year":-539,"display_date":"539 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Birth of Buddhism — Siddhartha Gautama''s Revolt Against Suffering',
    'Around 528 BCE (traditional date; scholars debate 480–400 BCE), Siddhartha Gautama — a prince of the Shakya clan in what is now Nepal — attained enlightenment under the Bodhi tree at Bodh Gaya after abandoning his royal life to confront human suffering. His core teaching, the Four Noble Truths and the Eightfold Path, offered liberation from suffering through disciplined practice rather than priestly intermediaries or ritual sacrifice — a direct challenge to Brahmin authority. Buddhism spread across Asia and eventually to the entire world, becoming one of the four largest religions, today practiced by over 500 million people.',
    '0001-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Buddhism","Siddhartha Gautama","India","religion","philosophy"],"category":"Religion & Philosophy","significance":"critical","sources":["Wikipedia - The Buddha","Asia Society - Origins of Buddhism","Britannica - Buddha"],"year":-528,"display_date":"528 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Founding of the Roman Republic — Power Sharing as Political Innovation',
    'In 509 BCE, the Romans expelled their last king, Tarquinius Superbus, following the rape of the noblewoman Lucretia, and established the Roman Republic — a system in which two elected consuls held executive power for one year, each with veto power over the other. The Republic''s constitution, with its Senate, popular assemblies, and annually rotating magistracies, was the ancient world''s most sophisticated system of distributed power. It would last nearly five centuries and inspire the founders of the United States more than 2,000 years later when designing checks and balances against tyranny.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Rome","Republic","constitution","consuls","governance"],"category":"Political History","significance":"critical","sources":["Wikipedia - Timeline of Roman History","History Hit - Key Dates Roman History","Britannica - Roman Empire Timeline"],"year":-509,"display_date":"509 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Cleisthenes and Athenian Democracy — The World''s First Popular Government',
    'In 508–507 BCE, Athenian statesman Cleisthenes implemented a radical constitutional reform that created the world''s first democracy: all adult male citizens could vote in the Assembly, hold public office by lot, and serve on juries. He reorganized Athens''s population into 10 tribes based on geography rather than clan — deliberately breaking the power of aristocratic family networks. The institution of ostracism allowed citizens to exile any individual deemed a threat to democracy for ten years. Though excluding women, slaves, and foreigners, Athenian democracy established that political power could derive from the people — a revolutionary idea that persisted through the ages.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["democracy","Athens","Cleisthenes","Greece","voting"],"category":"Political History","significance":"critical","sources":["Britannica - Ancient Greece","World History Encyclopedia - Greek Government","Wikipedia - Cleisthenes"],"year":-508,"display_date":"508 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Spread of Iron Smelting to Sub-Saharan Africa — Technology Transfer Changes a Continent',
    'Archaeological evidence indicates that iron smelting developed in sub-Saharan Africa — particularly in modern Tanzania and Rwanda — around 500–1000 BCE, possibly independently of Near Eastern iron technology (though the question of independent invention versus diffusion remains debated). The Nok culture of modern Nigeria demonstrates sophisticated iron smelting by 500 BCE. Unlike in Europe, where bronze preceded iron, some African societies went directly from stone to iron technology. The spread of iron tools and weapons facilitated the Bantu expansion — the gradual migration of agricultural Bantu-speaking peoples across sub-Saharan Africa over 2,000 years — reshaping the continent''s demographic and cultural landscape permanently.',
    '0001-01-01'::date,
    'Surveillance & Technology',
    '{"tags":["iron","Africa","Nok","technology","Bantu"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - History of metallurgy in sub-Saharan Africa","Britannica - Nok culture","World History Encyclopedia"],"year":-500,"display_date":"500 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Battle of Marathon — How 10,000 Greeks Stopped an Empire',
    'In September 490 BCE, approximately 10,000 Athenian and Plataean soldiers under general Miltiades crushed a Persian force of estimated 25,000 on the plain of Marathon, halting the first Persian invasion of Greece. The Greeks lost 192 men; Persian dead numbered approximately 6,400. The victory proved for the first time that Persian forces were not invincible, preserving Athenian democracy at its most vulnerable moment and inspiring a century of Greek cultural confidence. The mythologized run of the messenger Pheidippides to Athens to announce victory gave the world the marathon race — and the metaphor of the underdog who defeats empire.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Battle of Marathon","Athens","Persia","Greece","democracy"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Battle of Marathon","Britannica - Battle of Marathon","History Hit"],"year":-490,"display_date":"490 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Battle of Thermopylae — 300 Spartans and the Myth of Noble Sacrifice',
    'In August 480 BCE, King Leonidas of Sparta led approximately 7,000 Greeks — including his famous 300 Spartans — in a three-day defense of the Thermopylae pass against an invading Persian army estimated at 100,000–300,000 under Xerxes I. After a Greek traitor revealed a mountain path, Leonidas sent most forces away and held with his 300 Spartans and 700 Thespians, fighting to the last man. The delaying action allowed Greece to regroup; the subsequent Persian naval defeat at Salamis forced Xerxes to withdraw. Thermopylae transformed into the West''s foundational myth of sacrifice against tyranny.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Thermopylae","Sparta","Leonidas","Persia","Greece"],"category":"Ancient Wars","significance":"high","sources":["Wikipedia - Battle of Thermopylae","Britannica - Thermopylae","World History Encyclopedia"],"year":-480,"display_date":"480 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Persian Wars and the Battle of Salamis — Sea Power Saves Western Civilization',
    'On September 25 (or late September), 480 BCE, the Greek fleet of approximately 370 triremes under Athenian general Themistocles lured Xerxes'' Persian fleet of approximately 800 ships into the narrow straits of Salamis and destroyed or captured around 200 Persian vessels. The victory forced Xerxes to withdraw the Persian fleet and reduced his invasion to a manageable land force. Salamis saved Athenian democracy, the Greek city-state system, and the cultural florescence that produced Socrates, Plato, Aristotle, and the Parthenon. As Herodotus framed it — though the framing itself was propaganda — it was the moment freedom defeated tyranny.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Salamis","Athens","Persia","Themistocles","naval battle"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Battle of Salamis","Britannica - Battle of Salamis","World History Encyclopedia"],"year":-480,"display_date":"480 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Athenian Empire and the Delian League — Turning Allies into Subjects',
    'After the Persian Wars, Athens led 150+ Greek city-states in the Delian League (478 BCE) — ostensibly a mutual defense alliance against Persia. By 454 BCE, Athens had moved the League''s treasury from Delos to Athens and was spending allied tribute money on its own monuments, including the Parthenon. League members who tried to leave were forcibly prevented; their populations were sometimes enslaved when they resisted. Thucydides records that Athens justified its empire with the frank admission: ''The strong do what they can; the weak suffer what they must'' (Melian Dialogue, 416 BCE). The Athenian empire demonstrated that democracy at home can coexist with imperialism abroad — a lesson with enduring relevance.',
    '0001-01-01'::date,
    'Financial Systems',
    '{"tags":["Athenian Empire","Delian League","imperialism","Athens","tribute"],"category":"Political History","significance":"high","sources":["Wikipedia - Delian League","Britannica - Delian League","Thucydides - Melian Dialogue"],"year":-478,"display_date":"478 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Warring States Period — China''s Century of Chaos That Built Imperial Order',
    'From 475 to 221 BCE, seven major Chinese states fought a century-long war of annihilation that killed millions and ended with Qin''s total victory over all rivals. The period was also China''s most intellectually fertile: Confucius (though slightly earlier), Mencius, Laozi, Sun Tzu, Han Fei Zi, and the other Hundred Schools of Thought all emerged as thinkers competed to advise rulers on how to survive and win. Sun Tzu''s Art of War — written c. 500 BCE — remains the world''s most studied strategic manual. The brutal Darwinian competition of the Warring States created the administrative, legal, and military innovations that enabled Qin Shi Huang to unify China and found the imperial system.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Warring States","China","Sun Tzu","Confucius","strategy"],"category":"Ancient Wars","significance":"high","sources":["China Highlights - History","Smithsonian - Chinese History","Wikipedia - Warring States Period"],"year":-475,"display_date":"475 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Twelve Tables — Rome Writes Its Laws for the First Time',
    'In 451–450 BCE, under popular pressure from the plebeian class, Rome''s ruling patricians were forced to inscribe the city''s laws onto twelve bronze tablets displayed in the Forum. The Twelve Tables became the foundation of Roman law — establishing property rights, inheritance, debt, and criminal procedure. Critically, by making law public and fixed, the Tables restricted patrician judges from arbitrarily interpreting unwritten custom to favor the wealthy. The principle that law must be written, public, and accessible to all citizens rather than held as monopoly by elites became the bedrock of Western legal tradition.',
    '0001-01-01'::date,
    'Elections & Democratic Process',
    '{"tags":["Twelve Tables","Rome","law","plebeians","Republic"],"category":"Legal History","significance":"high","sources":["Wikipedia - Twelve Tables","Britannica - Twelve Tables","World History Encyclopedia"],"year":-451,"display_date":"451 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Peloponnesian War — Greece Destroys Itself',
    'From 431 to 404 BCE, Athens and Sparta — the two dominant city-states of Greece — fought a 27-year war that consumed the Greek world. Thucydides'' account remains history''s first analytical study of power, fear, and the self-destructive logic of rival empires. Athens''s disastrous Sicilian Expedition of 415–413 BCE, in which it lost over 40,000 men and its entire fleet, proved the turning point. Sparta ultimately won with Persian financial backing, installing oligarchic puppet governments across Greece. The war so exhausted Greek civilization that it fell vulnerable to Macedonian conquest within a generation, ending the era of independent city-states.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Peloponnesian War","Athens","Sparta","Greece","Thucydides"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Peloponnesian War","Britannica - Peloponnesian War","EBSCO Research Starters"],"year":-431,"display_date":"431 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Plague of Athens — How Disease Destroyed a Democracy',
    'In 430 BCE, during the second year of the Peloponnesian War, a catastrophic epidemic swept through overcrowded Athens, killing an estimated 75,000–100,000 people — roughly 25% of the population. Historian Thucydides, a survivor, recorded symptoms consistent with typhoid fever or smallpox in the oldest clinical disease description in Western literature. The plague killed the Athenian general Pericles in 429 BCE, shattered Athenian social order, and permanently weakened the city''s power. The Spartan besieging army, fearing contagion, withdrew — demonstrating how biology can decide what armies cannot. The epidemic contributed directly to Athens''s eventual defeat in 404 BCE.',
    '0001-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Plague of Athens","epidemic","Athens","Thucydides","pandemic"],"category":"Ancient Pandemics","significance":"critical","sources":["Wikipedia - Plague of Athens","World History Encyclopedia - Thucydides","Livius.org"],"year":-430,"display_date":"430 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Hippocratic Corpus — Medicine Separates From Religion',
    'Around 400 BCE, the Greek physician Hippocrates of Cos and his school developed the foundational texts of Western medicine — the Hippocratic Corpus — establishing that disease had natural, not supernatural, causes and should be treated through observation, diet, and environment. The Hippocratic Oath (still recited in modified form by doctors today) established the ethical principle that physicians must first do no harm. By removing gods from medicine, Hippocrates enabled systematic observation and early clinical science. He described the Plague of Athens from clinical observation. His work represented the same intellectual revolution as the Pre-Socratic philosophers: the world operates according to discoverable natural laws, not divine whim.',
    '0001-01-01'::date,
    'Government Health Transparency',
    '{"tags":["Hippocrates","medicine","Greece","natural law","Hippocratic Oath"],"category":"Ancient Inventions","significance":"high","sources":["Wikipedia - Hippocrates","Britannica - Hippocrates","World History Encyclopedia"],"year":-400,"display_date":"400 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Trial and Execution of Socrates — The State Silences Its Greatest Critic',
    'In 399 BCE, the Athenian democracy tried philosopher Socrates on charges of impiety and corrupting youth — and 501 jurors voted to condemn him to death by hemlock. Socrates had spent decades publicly exposing the ignorance of Athens''s leaders through the Socratic method of questioning, earning powerful enemies. His death became the Western world''s foundational case study in state suppression of intellectual dissent and the persecution of truth-tellers. His student Plato immortalized the trial in the Apology and built his entire philosophy around the injustice — and Western philosophy was born from a political execution.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Socrates","Athens","trial","censorship","philosophy"],"category":"Political Persecution","significance":"critical","sources":["Wikipedia - Trial of Socrates","Britannica - Socrates","World History Encyclopedia"],"year":-399,"display_date":"399 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Plato''s Academy — The World''s First University and Its Political Purpose',
    'Around 387 BCE, philosopher Plato founded the Academy in Athens — the ancient world''s first institution of higher learning, operating continuously for approximately 900 years until Emperor Justinian closed it in 529 CE. The Academy taught mathematics, astronomy, rhetoric, and philosophy, training many of Athens''s future politicians and thinkers, including Aristotle. Plato''s Republic articulated a vision of the ideal state governed by philosopher-kings — essentially philosopher-dictators — who had transcended democratic opinion to grasp eternal truth. The Academy demonstrates that education institutions have always been sites of political formation: Plato explicitly designed the curriculum to produce a specific kind of ruler with a specific ideology of governance.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Plato","Academy","Athens","philosophy","education"],"category":"Knowledge & Censorship","significance":"high","sources":["Wikipedia - Platonic Academy","Britannica - Plato","World History Encyclopedia"],"year":-387,"display_date":"387 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Assassination of Philip II of Macedon — A Son Inherits the World',
    'In 336 BCE, Philip II of Macedon — the military genius who had unified Greece and built the world''s most advanced army — was assassinated at his daughter''s wedding by his own bodyguard, Pausanias of Orestis. Ancient sources suggest the killing may have been orchestrated by Philip''s estranged wife Olympias, and possibly his 20-year-old son Alexander with Persian backing — making it one of history''s most consequential palace conspiracies. Philip''s death handed absolute power to Alexander, who used his father''s army and diplomatic network to build a global empire within 13 years.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Philip II","assassination","Macedon","Alexander","conspiracy"],"category":"Assassinations & Coups","significance":"high","sources":["Wikipedia - Assassination of Philip II of Macedon","Britannica - Philip II","World History Encyclopedia"],"year":-336,"display_date":"336 BCE","era":"BCE"}'::jsonb
  ),
  (
    'Alexander the Great''s Conquest of Persia — The World Rewritten in a Decade',
    'Between 334 and 323 BCE, Alexander III of Macedon conquered an empire stretching from Greece to northwestern India, defeating the Achaemenid Persian Empire across four decisive battles: Granicus (334 BCE), Issus (333 BCE), Gaugamela (331 BCE), and the Persian Gate (330 BCE). Alexander died in Babylon at age 32 in 323 BCE, having never lost a battle. His campaigns spread Greek language, culture, and governance across the Near East and Central Asia, creating the Hellenistic world — fusing Greek philosophy and science with Persian, Egyptian, and Indian traditions in the world''s first large-scale cultural globalization.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Alexander the Great","Persia","conquest","Hellenism","empire"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Wars of Alexander the Great","Britannica - Alexander the Great Timeline","History Hit"],"year":-334,"display_date":"334 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Founding of Alexandria — Knowledge Concentrated and Controlled',
    'In 331 BCE, Alexander the Great founded Alexandria on the Egyptian coast, which under the Ptolemaic dynasty became home to the Library of Alexandria — the ancient world''s greatest repository of knowledge, holding an estimated 400,000–700,000 scrolls at its peak. Ptolemaic policy required all ships entering Alexandria''s harbor to surrender their books for copying; the originals were kept and copies returned. This systematic acquisition of intellectual property made Alexandria the ancient world''s center of scholarship in mathematics, medicine, astronomy, and philosophy. The Library''s gradual destruction — by Julius Caesar''s accidental fire (48 BCE), Roman decree, and Arab conquest — represents history''s greatest recorded loss of human knowledge.',
    '0001-01-01'::date,
    'Media Manipulation',
    '{"tags":["Alexandria","Library","Egypt","knowledge","Alexander"],"category":"Knowledge & Censorship","significance":"critical","sources":["Wikipedia - Library of Alexandria","Britannica - Library of Alexandria","World History Encyclopedia"],"year":-331,"display_date":"331 BCE","era":"BCE"}'::jsonb
  ),
  (
    'The Battle of Gaugamela — Alexander Breaks the Persian Empire',
    'On October 1, 331 BCE, Alexander the Great''s 47,000-man army defeated Persian King Darius III''s force of approximately 200,000–250,000 on a specially prepared flat plain at Gaugamela in modern Iraq. Darius had chosen terrain to maximize his 200 scythed chariots and 15 war elephants; Alexander''s oblique attack created a gap in the Persian line that Alexander exploited personally, leading a cavalry charge directly at Darius. The Persian king fled again, and Alexander claimed the title King of Asia. Gaugamela ended Achaemenid Persia as a political entity — 220 years and the world''s largest empire until that point, dissolved in an afternoon.',
    '0001-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Gaugamela","Alexander","Persia","Darius","battle"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Battle of Gaugamela","Britannica - Battle of Gaugamela","History Hit - Alexander''s Victories"],"year":-331,"display_date":"331 BCE","era":"BCE"}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);