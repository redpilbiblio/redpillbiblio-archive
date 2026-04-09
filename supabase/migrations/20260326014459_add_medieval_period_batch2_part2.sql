/*
  # Add Medieval Period events batch 2 part 2

  Inserts events 26-50 from the Medieval Period (500-1500 CE)
  into the events table with duplicate prevention.

  1. New Data
    - 25 timeline events covering Medieval Period history
  2. Safety
    - Uses NOT EXISTS to prevent duplicate insertions
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Song Dynasty''s Naval Power — China''s Medieval Superpower on the Seas',
    'The Song Dynasty (960–1279) built history''s first permanent professional navy and pioneered naval technologies including watertight compartments, paddle-wheel ships, the magnetic compass for navigation, and the military use of gunpowder at sea — making it the dominant maritime power in the East and South China Seas for three centuries. At its peak, the Song navy comprised approximately 600 warships crewed by 50,000 men, protecting the coastal trade that had become the empire''s economic lifeline after the Jurchen Jin Dynasty seized the north. Song naval supremacy enabled the dynasty to survive for 45 years after the Mongol conquest of all surrounding territories — sustained entirely by maritime supply lines — until the final naval Battle of Yamen in 1279, where the last child emperor was drowned by a court official who leapt into the sea rather than surrender. China''s Song-era naval power demonstrates what becomes possible when a state invests systematically in maritime technology.',
    '1000-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Song Dynasty", "China", "naval power", "maritime technology", "gunpowder"], "category": "Naval History", "significance": "high", "sources": ["Wikipedia - Song dynasty military", "Britannica - Song dynasty"]}'::jsonb
  ),
  (
    'Al-Zahrawi — The Father of Modern Surgery Writes Medicine''s First Illustrated Surgical Manual',
    'Around 1000 CE, Andalusian Arab physician Abu al-Qasim al-Zahrawi (known to the West as Albucasis or Abulcasis) completed his 30-volume medical encyclopedia al-Tasrif, whose final volume on surgery constituted the first illustrated surgical manual in history — describing over 200 surgical instruments, many of which he invented, and pioneering techniques including catgut sutures, forceps delivery of fetuses, lithotripsy (crushing kidney stones), and the use of cauterization to control bleeding. Translated into Latin by Gerard of Cremona in the 12th century, al-Tasrif became the primary surgical textbook in European medical schools for 500 years. Al-Zahrawi''s work demonstrates the Islamic Golden Age''s concrete, practical contributions to human welfare — not merely philosophical abstraction but surgical techniques that saved lives for half a millennium. The European Renaissance''s medical advances were built directly on this foundation.',
    '1000-01-01'::date,
    'Government Health Transparency',
    '{"tags": ["Al-Zahrawi", "surgery", "Islamic Golden Age", "medicine", "Al-Tasrif"], "category": "Medical History", "significance": "critical", "sources": ["Britannica - Albucasis", "Wikipedia - al-Zahrawi"]}'::jsonb
  ),
  (
    'The Song Dynasty''s Paper Money — The World''s First Fiat Currency',
    'During the 10th and 11th centuries, the Song Dynasty of China introduced jiaozi — the world''s first government-issued paper money — to ease the burden of transporting heavy copper coins across its vast territory. By 1023, the government had taken over production and created standardized, government-backed banknotes with fixed denominations and expiry dates. This financial innovation enabled the Song to fund unprecedented public expenditure including a professional army of over one million soldiers, the world''s largest naval fleet, and extensive canal infrastructure. However, the government''s repeated expansion of the money supply without adequate commodity backing led to inflation — the world''s first documented fiat currency crisis. The Ming Dynasty''s similar experiment with paper money in the 15th century also ended in inflationary collapse, demonstrating that the temptation to print money beyond backing has no historical exceptions.',
    '1023-01-01'::date,
    'Financial Systems',
    '{"tags": ["paper money", "Song dynasty", "China", "fiat currency", "financial history"], "category": "Financial Innovation", "significance": "critical", "sources": ["Wikipedia - Jiaozi (currency)", "Britannica - Song dynasty"]}'::jsonb
  ),
  (
    'Movable Type Printing Invented in China — The First Information Revolution',
    'Around 1040 CE, during the Song Dynasty, artisan Bi Sheng invented movable type printing — creating individual clay blocks for each character that could be arranged, printed, and then rearranged for the next job — a system that preceded Johannes Gutenberg''s European printing press by over 400 years. Before this innovation, all manuscripts were copied by hand, a process that made books enormously expensive and restricted literacy to elites and clergy. The technology was later refined using wooden and then metal type, enabling the rapid duplication of texts including Buddhist scriptures and government documents. While China''s vast number of characters limited the immediate impact of movable type compared to alphabetic scripts, the underlying principle — democratizing the production and distribution of information — represents one of the most consequential technological breakthroughs in human history.',
    '1040-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["printing", "Bi Sheng", "Song dynasty", "movable type", "China"], "category": "Technology", "significance": "critical", "sources": ["History Hit - Song Dynasty Inventions", "Wikipedia - Four Great Inventions"]}'::jsonb
  ),
  (
    'Song Dynasty''s Commercial Revolution — China''s Near-Industrial Economy',
    'The Song Dynasty (960–1279) oversaw what historians call China''s ''commercial revolution'' — the most advanced preindustrial economy in human history, featuring large-scale iron and steel production, sophisticated textile manufacturing, an extensive network of private credit markets, paper currency, joint-stock companies, and urban centers that dwarfed any contemporary European city. Song China produced approximately 125,000 tonnes of iron per year by 1080 — surpassing England''s entire 18th-century iron production during the early Industrial Revolution. The capital Hangzhou had a population of over one million; merchants organized into guilds operated sophisticated long-distance trade networks across East Asia and into the Indian Ocean. The Mongol conquest destroyed this proto-industrial economy; China would not regain comparable levels of sophistication until the 19th century — a 600-year developmental interruption caused by a single military catastrophe.',
    '1050-01-01'::date,
    'Financial Systems',
    '{"tags": ["Song Dynasty", "China", "commercial revolution", "iron production", "medieval economy"], "category": "Economic Development", "significance": "critical", "sources": ["Britannica - Song dynasty", "Wikipedia - Song dynasty"]}'::jsonb
  ),
  (
    'The Great Schism of 1054 — Christianity Splits in Two',
    'On July 16, 1054, Cardinal Humbert — legate of Pope Leo IX — strode into the Hagia Sophia in Constantinople and placed a bull of excommunication on the altar, targeting Patriarch Michael Cerularius of Constantinople; the Patriarch reciprocated a week later. This dramatic exchange formalized the East-West Schism, dividing Christianity into the Roman Catholic Church in the West and the Eastern Orthodox Church in the East — a split that has never been healed in nearly 1,000 years. The underlying disputes involved papal supremacy, the filioque controversy over the nature of the Trinity, liturgical practices, and clerical celibacy. The schism permanently reshaped geopolitical alliances in Europe and the Middle East, contributing directly to the Crusades and to centuries of conflict between Christian factions.',
    '1054-07-16'::date,
    'Media Manipulation',
    '{"tags": ["Great Schism", "Catholic Church", "Orthodox Church", "Constantinople", "religion"], "category": "Religious Division", "significance": "critical", "sources": ["Wikipedia - East-West Schism", "Christian History Institute - 1054 East-West Schism"]}'::jsonb
  ),
  (
    'Battle of Hastings — Norman Conquest Rewrites English History',
    'On October 14, 1066, William, Duke of Normandy, led a Franco-Norman army to a decisive victory over the Anglo-Saxon forces of King Harold II at Senlac Hill near Hastings — killing Harold (reportedly by an arrow through the eye) and establishing Norman control over England. The battle lasted all day; William employed cavalry and archers, while Harold''s shield-wall infantry initially held firm before collapsing when Harold fell. William was crowned King of England on Christmas Day 1066, bringing with him a new nobility, a new language — Norman French — and a feudal land system that dispossessed most Anglo-Saxon landowners. The Norman Conquest fundamentally altered the English language, legal system, and social structure, shaping Britain for centuries.',
    '1066-10-14'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Hastings", "Norman Conquest", "William the Conqueror", "Harold II", "England"], "category": "Military Conquest", "significance": "critical", "sources": ["Wikipedia - William the Conqueror", "Britannica - William I, King of England"]}'::jsonb
  ),
  (
    'Battle of Manzikert — The Byzantine Empire''s Fatal Wound',
    'On August 26, 1071, the Byzantine army under Emperor Romanus IV Diogenes was catastrophically defeated by the Seljuk Turks under Sultan Alp Arslan at Manzikert in eastern Anatolia — and the Emperor himself was captured, an unprecedented humiliation. The defeat opened the floodgates of Anatolia to Turkish settlement, permanently altering the ethnic and religious composition of what is now Turkey. The weakened Byzantine Empire''s desperate appeal to Western Christians for military assistance directly triggered Pope Urban II''s call for the First Crusade in 1095. Manzikert began the 400-year process of Byzantine territorial attrition that would end with the fall of Constantinople in 1453.',
    '1071-08-26'::date,
    'War & Intelligence Operations',
    '{"tags": ["Byzantine Empire", "Battle of Manzikert", "Seljuk Turks", "Crusades", "Anatolia"], "category": "Military Defeat", "significance": "critical", "sources": ["Britannica - Battle of Manzikert", "EBSCO - Battle of Manzikert"]}'::jsonb
  ),
  (
    'Ghana Empire Falls to the Almoravids — Africa''s First Great Trading State Collapses',
    'In 1076 CE, the Almoravid Berber army under Abu Bakr ibn Umar seized Kumbi Saleh, the capital of the ancient Ghana Empire — an act that permanently disrupted the trans-Saharan trade network that had made Ghana the richest state in West Africa for centuries. Ghana''s power had been built on controlling the flow of gold northward and salt southward through the Sahara; Almoravid control of key trading posts like Awdaghust and Sijilmasa effectively strangled the empire''s economic lifeblood. Though Ghana briefly reasserted independence, the disruption of trade routes proved fatal, and the empire fragmented completely by the 13th century, eventually absorbed by the rising Mali Empire. The Almoravid conquest also accelerated the Islamization of West Africa''s merchant class.',
    '1076-01-01'::date,
    'Financial Systems',
    '{"tags": ["Ghana Empire", "Almoravids", "trans-Saharan trade", "West Africa", "Kumbi Saleh"], "category": "Empire Collapse", "significance": "high", "sources": ["Wikipedia - Almoravid dynasty", "EBSCO - Almoravids Sack Kumbi"]}'::jsonb
  ),
  (
    'The Domesday Book — England''s First Surveillance State',
    'In 1086, William the Conqueror commissioned an exhaustive survey of England — the Domesday Book — documenting over 13,000 settlements, listing every landowner, every resource, every taxable asset in the country in meticulous detail. The survey, directed by royal commissioners who traveled to every county, asked the same set of questions three times to detect discrepancies, creating the most comprehensive inventory of a nation''s wealth ever compiled in medieval history. William controlled approximately 20% of England directly; Norman lords held 50%; the Church controlled 25%. The Domesday Book established the total assessed value of the country''s land at £73,000 — and positioned the king as the ultimate owner of all English territory. The precedent of the state cataloguing private wealth for taxation has never left us.',
    '1086-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["Domesday Book", "William the Conqueror", "Norman Conquest", "taxation", "surveillance"], "category": "State Power & Surveillance", "significance": "critical", "sources": ["Wikipedia - Domesday Book", "The National Archives - Domesday Book"]}'::jsonb
  ),
  (
    'The Magnetic Compass for Navigation — China Hands Sailors the Sea',
    'By the early Song Dynasty (960–1127 CE), Chinese navigators had developed the magnetic compass for maritime use — transforming open-ocean navigation from a matter of celestial observation and dead reckoning into a reliable, all-weather tool. The scholar Shen Kuo described the floating needle compass in detail in 1088, and the device was in naval use by 1111. The compass spread to the Arab world through maritime trade and reached Europe by the 12th century, where it enabled the voyages of discovery that would connect the hemispheres. Without the compass, the systematic exploration of the globe — and the colonial extraction that followed — would have been impossible. A device born in Song China for harmonizing buildings with feng shui became the instrument of European empire.',
    '1088-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["compass", "navigation", "Song dynasty", "China", "maritime"], "category": "Technology", "significance": "critical", "sources": ["Wikipedia - Four Great Inventions", "History Hit - Song Dynasty Inventions"]}'::jsonb
  ),
  (
    'Council of Clermont — The Pope Launches the Crusades',
    'On November 27, 1095, Pope Urban II delivered a thundering sermon at the Council of Clermont in France — responding to Byzantine Emperor Alexios I''s appeal for help against the Seljuk Turks — calling on Christian knights to liberate Jerusalem with the cry ''God wills it!'' The council, attended largely by bishops of southern France, became the launching pad for the First Crusade: Urban promised plenary indulgences to all who participated, effectively guaranteeing forgiveness of all sins for those who fought. The speech ignited a mass military and popular movement involving tens of thousands of fighters and pilgrims that departed the following year. The Crusades would reshape the Mediterranean world for 200 years, channeling European aggression outward while entrenching Christian-Muslim antagonism that persists today.',
    '1095-11-27'::date,
    'War & Intelligence Operations',
    '{"tags": ["Crusades", "Council of Clermont", "Pope Urban II", "Jerusalem", "medieval warfare"], "category": "Religious War", "significance": "critical", "sources": ["Britannica - Council of Clermont", "Wikipedia - Council of Clermont"]}'::jsonb
  ),
  (
    'The Crusader States — How Holy War Created Colonial Outposts in the Levant',
    'Following the First Crusade''s capture of Jerusalem in 1099, European Crusaders established four permanent Crusader States in the Middle East: the Kingdom of Jerusalem, the Principality of Antioch, the County of Edessa, and the County of Tripoli — colonial entities governed by European feudal lords ruling over Muslim, Jewish, and Eastern Christian populations. These states introduced Western European feudal land tenure, commercial law, and religious institutions into the Levant, creating hybrid societies where Muslim and Christian merchants traded goods from East and West. The Crusader States survived for nearly two centuries through a combination of military fortification (castle-building on a massive scale), tribute collection, and the exploitation of local agricultural labor in arrangements that amounted to a colonial serfdom. Their eventual fall to Saladin and then the Mamluks extinguished the last Crusader presence at Acre in 1291.',
    '1099-01-01'::date,
    'Corporate Accountability',
    '{"tags": ["Crusader States", "Kingdom of Jerusalem", "colonialism", "Middle East", "feudalism"], "category": "Colonial Governance", "significance": "high", "sources": ["Britannica - Crusader States", "Wikipedia - Crusader States"]}'::jsonb
  ),
  (
    'The First Crusade Captures Jerusalem — Holy War''s Founding Atrocity',
    'On July 15, 1099, Crusader forces breached the walls of Jerusalem after a five-week siege, massacring thousands of Muslim and Jewish inhabitants — men, women, and children — in a frenzy of killing that shocked even some contemporary Christian observers. The city''s streets were reported to flow with blood. The Crusaders established the Kingdom of Jerusalem, creating a Latin Christian foothold in the Holy Land that would last nearly a century. The conquest permanently inflamed Muslim-Christian relations in the Middle East, providing a narrative of Western invasion that has been weaponized in political discourse ever since. The First Crusade demonstrated how religious fervor could be mobilized by elites to achieve geopolitical and economic objectives under the guise of divine mandate.',
    '1099-07-15'::date,
    'War & Intelligence Operations',
    '{"tags": ["First Crusade", "Jerusalem", "massacre", "Crusader states", "Holy Land"], "category": "Military Conquest", "significance": "critical", "sources": ["Britannica - First Crusade", "Wikipedia - Siege of Jerusalem (1099)"]}'::jsonb
  ),
  (
    'The Investiture Controversy Resolved — Concordat of Worms',
    'On September 23, 1122, Holy Roman Emperor Henry V and Pope Calixtus II signed the Concordat of Worms, ending nearly 50 years of warfare between popes and emperors over who had the right to invest bishops and abbots with their spiritual and temporal authority — one of the defining power struggles of the medieval West. The compromise distinguished between spiritual investiture (conferred by the pope through the ring and staff, symbolizing spiritual authority) and temporal investiture (conferred by the emperor through the scepter, symbolizing secular lands and duties). The Concordat resolved the immediate crisis but did not resolve the underlying question of whether church or state was the supreme authority in Christendom — a question that would recur in the Avignon Papacy, the Great Schism, the Reformation, and ultimately the secular Enlightenment.',
    '1122-09-23'::date,
    'Elections & Democratic Process',
    '{"tags": ["Concordat of Worms", "investiture controversy", "Holy Roman Empire", "papacy", "church vs state"], "category": "Church-State Conflict", "significance": "high", "sources": ["Britannica - Concordat of Worms", "Wikipedia - Concordat of Worms"]}'::jsonb
  ),
  (
    'Prester John — How a Medieval Myth Drove Exploration and Colonial Ambition',
    'Beginning in the 12th century, a persistent and widely believed European myth described a wealthy Christian king called Prester John ruling a vast, prosperous realm somewhere in the East (later relocated to Africa, specifically Ethiopia) — supposedly a potential ally who could attack the Islamic world from the rear and deliver crusaders from Muslim encirclement. A forged letter purportedly from Prester John circulated from approximately 1165, describing his kingdom''s miraculous wealth and the Fountain of Youth within its borders. The myth drove Portuguese exploration down the African coast in the 15th century — the expeditions of Henry the Navigator and later Vasco da Gama were explicitly searching for Prester John''s kingdom. No such king existed; the myth''s power lay not in its truth but in its utility — it provided a divine justification for risky and expensive exploration that promised geopolitical advantage. The Prester John myth is history''s clearest example of manufactured intelligence driving strategic decision-making.',
    '1165-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Prester John", "medieval myth", "crusades", "Portuguese exploration", "propaganda"], "category": "Historical Disinformation", "significance": "high", "sources": ["Britannica - Prester John", "Wikipedia - Prester John"]}'::jsonb
  ),
  (
    'The Waldensians — Poverty as Heresy, Dissent as Crime',
    'In the 1170s, a wealthy Lyon merchant named Peter Waldo sold his possessions, embraced voluntary poverty, and began preaching an unauthorized itinerant ministry based on vernacular scripture — founding the Waldensian movement, one of the earliest organized Christian dissent movements in medieval Europe. The Waldensians translated the Bible into vernacular French, argued that any pious person could preach regardless of clerical status, and rejected the authority of corrupt priests — positions that led Pope Lucius III to excommunicate them in 1184. The Church''s response escalated to violent suppression: Waldensians were subjected to crusade, Inquisition, and massacre over centuries. Surviving communities took refuge in the Alpine valleys of Piedmont, where they still exist today. The Waldensian persecution established the template for how institutional power criminalizes poverty, literacy, and theological independence.',
    '1184-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Waldensians", "heresy", "medieval dissent", "poverty", "Catholic Church"], "category": "Religious Persecution", "significance": "high", "sources": ["Britannica - Waldensian", "Wikipedia - Waldensians"]}'::jsonb
  ),
  (
    'Saladin Retakes Jerusalem — Islam''s Greatest Counterattack',
    'On October 2, 1187, Sultan Saladin (Salah ad-Din Yusuf ibn Ayyub) of the Ayyubid Sultanate captured Jerusalem from the Crusader Kingdom, ending 88 years of Christian rule — without the mass slaughter that had characterized the city''s capture by Crusaders in 1099. Saladin''s victory followed the devastating Battle of Hattin on July 4, 1187, where he annihilated the Crusader field army by cutting off their water supply in the scorching Galilean summer. His decision to allow ransomed Christians safe passage contrasted sharply with the Crusader massacre of 1099 and was noted by contemporaries as a mark of genuine magnanimity. The fall of Jerusalem shocked Europe and triggered the Third Crusade — led by Richard I of England — which failed to retake the city despite the legendary personal combat between Richard and Saladin.',
    '1187-10-02'::date,
    'War & Intelligence Operations',
    '{"tags": ["Saladin", "Jerusalem", "Crusades", "Ayyubid", "Battle of Hattin"], "category": "Military Conquest", "significance": "critical", "sources": ["Britannica - Saladin", "Wikipedia - Battle of Hattin"]}'::jsonb
  ),
  (
    'The Beguines — Medieval Women Who Built Communities Outside Church Control',
    'Beginning in the late 12th century in the Low Countries and spreading across northern Europe, the Beguine movement saw tens of thousands of women establish semi-religious communities — beguinages — in which they lived communally, supported themselves through textile work and caring for the sick, without taking formal vows or submitting to male clerical authority. Unlike nuns, Beguines could own property, leave their communities, and marry; they studied and interpreted scripture, some (like Mechthild of Magdeburg and Marguerite Porete) writing mystical theological texts that challenged orthodox doctrine. The Church repeatedly attempted to suppress the Beguines: the Council of Vienne in 1312 condemned them; Marguerite Porete was burned at the stake in Paris in 1310 for refusing to recant her mystical treatise The Mirror of Simple Souls. The Beguine movement demonstrates that medieval women actively constructed spaces of autonomy within the interstices of patriarchal institutional control.',
    '1200-01-01'::date,
    'Corporate Accountability',
    '{"tags": ["Beguines", "medieval women", "religious autonomy", "heresy", "beguinage"], "category": "Social History", "significance": "high", "sources": ["Britannica - Beguines and Beghards", "Wikipedia - Beguines and Beghards"]}'::jsonb
  ),
  (
    'The Fourth Crusade Sacks Constantinople — Christians Plunder Christians',
    'In April 1204, the knights of the Fourth Crusade — ostensibly launched to recapture Jerusalem — instead besieged and sacked Constantinople, the capital of the Byzantine Empire and a fellow Christian city, driven by Venetian commercial interests and debts the Crusaders could not pay. The three-day sack was barbaric: churches were stripped, the Hagia Sophia was looted, artwork accumulated over centuries was destroyed or stolen, and women — including nuns — were raped. Estimates suggest the looting yielded three times the annual revenue of the Kingdom of England. The Byzantine Empire never fully recovered, establishing the Latin Empire of Constantinople in its place — a development that ultimately accelerated the Ottoman conquest of 1453. The Fourth Crusade exposed how religious movements are routinely hijacked by economic and political interests.',
    '1204-04-13'::date,
    'War & Intelligence Operations',
    '{"tags": ["Fourth Crusade", "Constantinople", "Venice", "Byzantine Empire", "sack"], "category": "Military Atrocity", "significance": "critical", "sources": ["Wikipedia - Sack of Constantinople", "Britannica - Sack of Constantinople (1204)"]}'::jsonb
  ),
  (
    'Genghis Khan Unites the Mongols — The World''s Most Destructive Empire Launches',
    'In 1206 CE, a Mongolian chieftain named Temujin convened a great assembly — a kurultai — on the banks of the Onon River and was proclaimed Genghis Khan (''Universal Ruler''), having conquered and unified all Mongol and Turkic tribes of Mongolia and southern Siberia. From this foundation, he unleashed the most rapid territorial expansion in history: within 25 years, Mongol armies had conquered northern China, Central Asia, Persia, and reached the edges of Eastern Europe. Genghis Khan''s military genius combined devastating psychological terror — cities that resisted were systematically annihilated — with sophisticated intelligence networks, engineering expertise, and meritocratic military promotion. Estimates suggest his campaigns killed 40 million people, reducing global population by roughly 10%.',
    '1206-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Genghis Khan", "Mongol Empire", "conquest", "steppe", "genocide"], "category": "Empire Building", "significance": "critical", "sources": ["Britannica - Mongol Empire", "Wikipedia - Mongol Empire"]}'::jsonb
  ),
  (
    'The Crusade Against the Cathars — Genocide in the Name of Orthodoxy',
    'In 1209, Pope Innocent III launched the Albigensian Crusade against the Cathar heresy in the Languedoc region of southern France — the first major military campaign mounted by the Catholic Church against other Christians. Cathars rejected material wealth, Church hierarchy, and the Old Testament God as evil — beliefs that threatened both Church authority and the economic interests of the nobility. The crusade''s opening massacre at Beziers on July 22, 1209, allegedly killed up to 20,000 inhabitants — when asked how to distinguish Cathars from Catholics, Papal legate Arnaud Amalric reportedly replied ''Kill them all, God will know his own.'' Over 20 years of warfare, the Cathar population was systematically exterminated and the culture of Provencal troubadours destroyed. The Inquisition was created specifically to root out surviving Cathars.',
    '1209-07-22'::date,
    'War & Intelligence Operations',
    '{"tags": ["Cathars", "Albigensian Crusade", "heresy", "genocide", "Catholic Church"], "category": "Religious Genocide", "significance": "critical", "sources": ["Britannica - Albigensian Crusade", "Wikipedia - Albigensian Crusade"]}'::jsonb
  ),
  (
    'The Children''s Crusade — Mass Delusion and Slave Trading Under Holy Banner',
    'In 1212 CE, two separate popular movements swept through France and Germany: French shepherd boy Stephen of Cloyes claimed a letter from Jesus Christ summoned him to lead children to liberate Jerusalem without arms, gathering an estimated 30,000 followers; simultaneously, Nicholas of Cologne led a march of thousands of German youths toward Italy. The French contingent reached Marseille where merchants offered them ships — which allegedly sailed to North Africa where the children were sold into slavery. The German contingent largely disintegrated from starvation and disease crossing the Alps. The historical record is contested and likely exaggerated by later chroniclers, but the episode illustrates how religious fervor, charismatic leadership, and the desperation of the poor could be weaponized by those with commercial interests in human trafficking.',
    '1212-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags": ["Children''s Crusade", "medieval", "human trafficking", "religious manipulation", "crusades"], "category": "Religious Exploitation", "significance": "high", "sources": ["Britannica - Children''s Crusade", "Wikipedia - Children''s Crusade"]}'::jsonb
  ),
  (
    'The Magna Carta — Barons Force the King to Kneel',
    'On June 15, 1215, King John of England was compelled by rebellious barons to seal the Magna Carta at Runnymede — a document containing 63 clauses limiting royal power, protecting barons from illegal imprisonment, and promising access to swift and impartial justice. The charter''s ''Clause 61'' established a council of 25 barons empowered to seize the king''s castles if he violated its terms — the first formal mechanism for collectively constraining a monarch in English history. Though Pope Innocent III annulled it within months and civil war broke out, the Magna Carta was reissued repeatedly and became the cornerstone of constitutional governance. Its principles — that rulers are subject to law — echoed through the English Bill of Rights, the American Declaration of Independence, and the Universal Declaration of Human Rights.',
    '1215-06-15'::date,
    'Elections & Democratic Process',
    '{"tags": ["Magna Carta", "King John", "constitutional law", "barons", "rule of law"], "category": "Constitutional Governance", "significance": "critical", "sources": ["Wikipedia - Magna Carta", "Historic UK - Magna Carta"]}'::jsonb
  ),
  (
    'The Magna Carta''s Clause 61 — The First Constitutional Mechanism Against Tyranny',
    'The Magna Carta of June 1215 contained in its 61st clause the most revolutionary political mechanism in medieval history: a council of 25 barons empowered to meet, consider complaints, and if the King had not remedied a violation within 40 days, to ''seize castles, lands, possessions, and in any other way they can, distress and harm us [the king] until amends have been made.'' This ''security clause'' — the first formal constitutional check on royal power backed by an enforcement mechanism — was so radical that Pope Innocent III declared it ''shameful, demeaning, illegal, and unjust'' and annulled the charter. Though Clause 61 was dropped from all subsequent reissues, its principle — that law binds kings and that citizens have the right to collective enforcement of that law — became the foundation of constitutional governance worldwide. The struggle between elites demanding accountability and rulers claiming absolute prerogative has never ended.',
    '1215-06-15'::date,
    'Elections & Democratic Process',
    '{"tags": ["Magna Carta", "Clause 61", "constitutional law", "barons", "rule of law"], "category": "Constitutional Governance", "significance": "critical", "sources": ["Wikipedia - Magna Carta", "Historic UK - Origins of Magna Carta"]}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);