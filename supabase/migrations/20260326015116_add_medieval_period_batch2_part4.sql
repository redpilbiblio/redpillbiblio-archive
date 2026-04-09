/*
  # Add Medieval Period events batch 2 part 4

  Inserts events 76-100 from the Medieval Period (500-1500 CE)
  into the events table with duplicate prevention.

  1. New Data
    - 25 timeline events covering Medieval Period history
  2. Safety
    - Uses NOT EXISTS to prevent duplicate insertions
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Ottoman Conquest of the Balkans — How Southeast Europe Was Islamized',
    'Between 1354 and 1396, Ottoman forces systematically conquered the Balkan Peninsula — crossing into Europe at Gallipoli in 1354, capturing Adrianople (Edirne) in 1369, defeating Serbia at the Battle of Marica (1371) and Kosovo (1389), and crushing the last major Crusading army at Nicopolis (1396) — establishing Ottoman suzerainty over a region that had been Christian-Byzantine for a thousand years. The conquest was facilitated by internal Christian political divisions: Bulgarian and Serbian rulers frequently allied with the Ottomans against each other. The devshirme system conscripted Balkan Christian boys into the Ottoman military and bureaucracy, creating local elites with interests aligned with Ottoman power. By 1400, the Ottoman presence in Europe was permanent and expanding — beginning a 500-year occupation that would shape Balkan politics, ethnic composition, and religious distribution to the present day.',
    '1354-01-01'::date,
    'War & Intelligence Operations',
    '{"tags": ["Ottoman Empire", "Balkans", "conquest", "medieval", "Christianity"], "category": "Military Conquest", "significance": "critical", "sources": ["Britannica - Ottoman Empire", "Wikipedia - Ottoman conquest of the Balkans"]}'::jsonb
  ),
  (
    'The Hanseatic League — Medieval Europe''s Corporate Trade Monopoly',
    'By 1241 CE, the German cities of Hamburg and Lubeck had formed an official commercial partnership to monopolize trade in salt and herring in northern Europe — the seed of what became the Hanseatic League, formally constituted as a multi-city trade alliance in 1356. At its peak, the League encompassed over 200 cities stretching from the Baltic to the North Sea, controlling trade in commodities including fish, grain, timber, furs, textiles, and amber. The League maintained its own navy, negotiated diplomatic treaties with kings, and imposed trade embargoes on rival states — functioning as a supranational corporate entity that routinely subordinated national sovereignty to commercial interests. The Hanseatic League represents history''s clearest early example of a corporate trade bloc wielding power independent of — and often superior to — the states in which it operated.',
    '1356-01-01'::date,
    'Financial Systems',
    '{"tags": ["Hanseatic League", "medieval trade", "Baltic", "commercial monopoly", "Germany"], "category": "Trade & Commerce", "significance": "critical", "sources": ["World History Encyclopedia - Hanseatic League", "Britannica - Hanseatic League"]}'::jsonb
  ),
  (
    'The Black Prince — Scorched Earth Warfare and the Massacre at Limoges',
    'Edward of Woodstock — known as the Black Prince, eldest son of Edward III of England — commanded English forces in France during the Hundred Years'' War and conducted devastating chevauchees (mounted raids) through the French countryside in 1355 and 1356, deliberately burning crops, killing civilians, and destroying economic infrastructure across hundreds of miles of Languedoc and Gascony. His greatest military triumph was the Battle of Poitiers (September 19, 1356), where his force of 6,000 defeated 14,000–16,000 French troops and captured King John II of France — the most valuable prisoner taken in medieval warfare, ransomed for 3 million gold ecus. His darkest act was the Sack of Limoges in September 1370, where despite being carried on a litter suffering from illness, he ordered the massacre of approximately 3,000 unarmed civilians. The Black Prince personifies the medieval reality that war''s greatest costs were borne by civilians.',
    '1356-09-19'::date,
    'War & Intelligence Operations',
    '{"tags": ["Black Prince", "Hundred Years War", "chevauchee", "Limoges", "warfare"], "category": "Military History", "significance": "high", "sources": ["Wikipedia - Edward the Black Prince", "Wikipedia - Battle of Poitiers"]}'::jsonb
  ),
  (
    'The Hanseatic League''s Trade War — Commercial Monopoly Enforced by Naval Blockade',
    'In 1361, the Hanseatic League responded to King Valdemar IV of Denmark''s seizure of the Swedish island of Gotland and its port of Visby — a critical node in Baltic trade — by imposing a commercial embargo and then waging a naval war that culminated in the Peace of Stralsund in 1370, forcing Denmark to grant Hanse merchants extensive trading privileges and the right to veto the Danish royal succession. The victory demonstrated that a coalition of merchant cities could project military and diplomatic power exceeding that of the most powerful Scandinavian monarch. The Hanseatic League controlled access to the Baltic grain trade — upon which much of northern Europe depended for food — making its commercial monopoly a form of structural power over national food security that governments could not easily challenge. The episode prefigures the modern dynamic of transnational corporations wielding power that exceeds that of the states in which they operate.',
    '1370-05-24'::date,
    'Financial Systems',
    '{"tags": ["Hanseatic League", "trade war", "Denmark", "Baltic", "commercial power"], "category": "Corporate Power", "significance": "high", "sources": ["Britannica - Hanseatic League", "Wikipedia - Peace of Stralsund"]}'::jsonb
  ),
  (
    'Ibn Khaldun''s Muqaddimah — The World''s First Systematic Theory of History',
    'In 1377, North African Arab historian Ibn Khaldun completed the Muqaddimah (Introduction to History) — a prolegomena to his universal history that stands as the earliest systematic work of historiography, sociology, economics, and political science in human history. Ibn Khaldun proposed asabiyyah (social cohesion or group solidarity) as the driving force of historical cycles: nomadic tribal groups with strong cohesion overthrow decadent settled civilizations, become wealthy and corrupt, and are in turn overthrown by the next vigorous tribal group — a cyclical theory of civilization collapse he derived from North African history. He analyzed economic phenomena including the division of labor, price formation, and the relationship between taxation and economic activity — anticipating Adam Smith and Keynes by centuries. A North African Muslim scholar, writing in the 14th century, produced the intellectual foundation for modern social science.',
    '1377-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Ibn Khaldun", "Muqaddimah", "historiography", "social science", "Islamic scholarship"], "category": "Intellectual History", "significance": "critical", "sources": ["Britannica - Ibn Khaldun", "Wikipedia - Muqaddimah"]}'::jsonb
  ),
  (
    'The Papal Schism — Three Men Claim to Be Pope Simultaneously',
    'From 1378 to 1417, the Western Schism split the Roman Catholic Church between competing claimants to the papal throne — first two, then three simultaneous ''popes'' (at Rome, Avignon, and Pisa) each claiming to be the legitimate Vicar of Christ, excommunicating each other, and demanding the loyalty of European rulers for whom papal favor was a political currency. The crisis began when the French-dominated college of cardinals elected a French pope in Avignon in opposition to the newly elected Roman pope Urban VI. The spectacle of multiple popes hurling anathemas at each other catastrophically undermined the Church''s claim to divine authority. The Council of Constance (1414–1418) resolved the schism by deposing all claimants and electing Martin V, but permanently established the principle that a church council could exercise authority over a pope — a precedent that fueled the later Protestant Reformation.',
    '1378-09-20'::date,
    'Elections & Democratic Process',
    '{"tags": ["Western Schism", "papacy", "Council of Constance", "Catholic Church", "corruption"], "category": "Institutional Crisis", "significance": "critical", "sources": ["Britannica - Western Schism", "Wikipedia - Western Schism"]}'::jsonb
  ),
  (
    'The Devshirme — The Ottoman System of Child Tribute',
    'From the late 14th century, the Ottoman Empire institutionalized the devshirme — a ''blood tax'' by which Christian boys aged 8–20 were systematically taken from their families in the Balkans every few years, forcibly converted to Islam, educated at the Ottoman court, and assigned to the Janissary corps or the imperial bureaucracy. Selected for their physical fitness and intelligence, these children were stripped of their family identities and reborn as servants of the Sultan. The most talented rose to become Grand Viziers, generals, and provincial governors — giving the system a veneer of meritocracy while concealing its foundational violence of forced religious conversion and family separation. Estimates suggest 200,000–500,000 Christian children were conscripted over two centuries. The devshirme demonstrates how sophisticated states can construct systems of child exploitation that simultaneously generate social mobility for some individuals while perpetuating structural violence against entire communities.',
    '1380-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags": ["devshirme", "Ottoman Empire", "Janissaries", "child conscription", "forced conversion"], "category": "Child Exploitation", "significance": "critical", "sources": ["Britannica - Devshirme", "Wikipedia - Devshirme"]}'::jsonb
  ),
  (
    'The Peasants'' Revolt of 1381 — England''s Workers Reject Feudal Bondage',
    'In June 1381, tens of thousands of English peasants and artisans from Essex and Kent marched on London under leaders including Wat Tyler and the radical priest John Ball — burning tax records, opening prisons, and briefly occupying the Tower of London in the most serious popular uprising in English medieval history. The revolt was triggered by an unpopular poll tax levied to finance the Hundred Years'' War, but its underlying causes were the economic and social transformations accelerated by the Black Death: labor shortages had given peasants unprecedented bargaining power, which landlords attempted to suppress through reimposing serfdom via the Statute of Laborers (1351). The rebellion was crushed after King Richard II met Wat Tyler at Smithfield and Tyler was killed; promises of reform were revoked. Yet within a generation, serfdom in England had largely withered — the revolt accelerated what it could not immediately achieve.',
    '1381-06-01'::date,
    'Corporate Accountability',
    '{"tags": ["Peasants'' Revolt", "Wat Tyler", "England", "feudalism", "labor rebellion"], "category": "Labor Uprising", "significance": "critical", "sources": ["Britannica - Peasants'' Revolt", "Wikipedia - Peasants'' Revolt"]}'::jsonb
  ),
  (
    'The Battle of Kosovo 1389 — How Serbia Became a Nation of Martyrs',
    'On June 28, 1389, a Serbian coalition led by Prince Lazar Hrebeljanovic was defeated by the Ottoman army of Sultan Murad I on the Field of Blackbirds in Kosovo — with both Lazar and Murad killed in the fighting. Though the battle was tactically ambiguous — neither side achieved decisive victory, and the Ottomans withdrew temporarily — Serbian epic poetry transformed it into the defining national myth of Serbian identity: the noble sacrifice of a Christian people against Muslim conquest, with Lazar elevated to martyrdom. The Cult of Kosovo became the foundational narrative of Serbian nationalism, invoked from the 19th-century independence movement through the 1990s wars in Yugoslavia. The battle illustrates how historical events are deliberately mythologized — stripped of their complexity — to serve the political needs of nation-states centuries later.',
    '1389-06-28'::date,
    'Media Manipulation',
    '{"tags": ["Battle of Kosovo", "Serbia", "Ottoman Empire", "nationalism", "myth-making"], "category": "Historical Mythology", "significance": "critical", "sources": ["Britannica - Battle of Kosovo", "Wikipedia - Battle of Kosovo"]}'::jsonb
  ),
  (
    'The Crusade of Nicopolis — Europe''s Last Grand Crusade Ends in Disaster',
    'On September 25, 1396, a combined Christian army of approximately 16,000 knights and soldiers from Hungary, France, Burgundy, Germany, and England — the largest Crusading force assembled in a century — was annihilated by Ottoman Sultan Bayezid I at Nicopolis on the Danube in what is now Bulgaria. The French and Burgundian knights, refusing to follow the tactical plan of experienced Hungarian King Sigismund, charged the Ottoman lines in a display of chivalric recklessness and were massacred; the survivors were largely ransomed or enslaved. The Battle of Nicopolis ended any realistic prospect of European military challenge to Ottoman expansion in the Balkans and effectively sealed the fate of the Byzantine Empire. It also exposed the fundamental contradiction of Crusading ideology: the knights who financed the expedition were more interested in personal glory than strategic objectives.',
    '1396-09-25'::date,
    'War & Intelligence Operations',
    '{"tags": ["Nicopolis", "Crusade", "Ottoman Empire", "Bayezid I", "Balkans"], "category": "Military Defeat", "significance": "high", "sources": ["Britannica - Battle of Nicopolis", "Wikipedia - Battle of Nicopolis"]}'::jsonb
  ),
  (
    'Medici Bank Dominates European Finance — The Original Too-Big-to-Fail',
    'Founded in 1397 by Giovanni di Bicci de'' Medici in Florence, the Medici Bank grew into the most powerful financial institution in 15th-century Europe, with branches spanning London, Geneva, Bruges, and Rome. The bank pioneered the use of letters of credit, holding accounts, and early double-entry bookkeeping, financing popes, kings, and the Italian Renaissance itself. Their system of branch managers sharing profits — rather than being mere employees — was the template for the modern corporate structure, while their practice of lending to monarchs created the political leverage that banking dynasties have wielded over governments ever since.',
    '1397-01-01'::date,
    'Financial Systems',
    '{"tags": ["Medici", "Florence", "banking", "Renaissance", "finance"], "category": "Banking & Finance", "significance": "critical", "sources": ["Medici Bank - Wikipedia", "themedicifamily.com"]}'::jsonb
  ),
  (
    'Timur (Tamerlane) Sacks Delhi — 100,000 Massacred in a Single Day',
    'On December 17, 1398, Timur (Tamerlane) — the Turco-Mongol conqueror who fashioned himself the successor to Genghis Khan — captured and sacked Delhi, then capital of the Delhi Sultanate, massacring an estimated 100,000 Hindu prisoners in a single day before entering the city because he feared they would revolt. His army plundered Delhi for three days, enslaving its artisans and intellectuals for transport to his capital Samarkand, and leaving the city so devastated that it reportedly did not recover for a century. Timur''s campaigns (1370–1405) killed an estimated 17 million people — approximately 5% of the world''s population — across Persia, Central Asia, the Caucasus, Anatolia, and northern India. His destruction of Delhi fatally weakened the Delhi Sultanate and created the political vacuum eventually filled by the Mughal Empire. Timur built towers of severed heads as monuments to his power.',
    '1398-12-17'::date,
    'War & Intelligence Operations',
    '{"tags": ["Timur", "Tamerlane", "Delhi", "massacre", "Central Asia"], "category": "Military Atrocity", "significance": "critical", "sources": ["Britannica - Timur", "Wikipedia - Timur"]}'::jsonb
  ),
  (
    'The Ming Dynasty''s Treasure Fleets — China''s Abandoned Global Empire',
    'Between 1405 and 1433, Chinese admiral Zheng He commanded seven extraordinary naval expeditions dispatched by the Ming Dynasty''s Yongle and Xuande Emperors — commanding fleets of up to 317 ships and 28,000 men, including ''treasure ships'' reportedly 120 meters long (five times the length of Columbus''s Santa Maria) — reaching Arabia, East Africa, India, and Southeast Asia and establishing diplomatic and commercial relationships across the Indian Ocean world. The expeditions demonstrated Chinese naval supremacy decades before European powers launched their own maritime ventures. In 1433, a faction of Confucian bureaucrats convinced the Xuande Emperor to terminate the voyages as wasteful and un-Confucian; China turned inward, burned its oceangoing ships, and prohibited private maritime commerce. This deliberate abandonment of global naval power created the vacuum that Portuguese and later European powers filled — one of history''s most consequential decisions of political ideology over economic rationality.',
    '1405-07-11'::date,
    'Energy & Suppressed Technology',
    '{"tags": ["Zheng He", "Ming Dynasty", "treasure fleets", "China", "suppressed exploration"], "category": "Suppressed Technology & Exploration", "significance": "critical", "sources": ["Britannica - Zheng He", "Wikipedia - Zheng He"]}'::jsonb
  ),
  (
    'The Battle of Grunwald — Poland-Lithuania Breaks the Teutonic Knights',
    'On July 15, 1410, the combined forces of the Kingdom of Poland and the Grand Duchy of Lithuania under King Wladyslaw II Jagiello and Grand Duke Vytautas decisively defeated the Teutonic Order at the Battle of Grunwald (Tannenberg) in Prussia — the largest pitched battle in medieval European history, involving approximately 39,000 Polish-Lithuanian troops against 27,000 Teutonic Knights and mercenaries. The Grand Master Ulrich von Jungingen and most of the Order''s senior leadership were killed. The battle ended the Teutonic Knights'' military dominance of the Baltic and began the long decline of their state. Grunwald became the founding myth of Polish national identity — invoked by nationalists, poets, and politicians from the 15th century to Solidarity''s struggle against Soviet rule in the 1980s. The battle also marked one of history''s earliest decisive uses of the combined Polish-Lithuanian political union as a military force.',
    '1410-07-15'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Grunwald", "Teutonic Knights", "Poland", "Lithuania", "Baltic"], "category": "Military Battle", "significance": "critical", "sources": ["Britannica - Battle of Tannenberg (1410)", "Wikipedia - Battle of Grunwald"]}'::jsonb
  ),
  (
    'The Council of Constance — Church Hierarchy Judges Itself and Fails',
    'Convened from 1414 to 1418, the Council of Constance ended the Western Schism by deposing all three competing popes and electing Martin V, condemned and burned Jan Hus despite a safe conduct guarantee, and passed the decree Haec Sancta asserting that a general council held authority superior to the pope — the doctrine of ''conciliarism.'' The Council demonstrated that the Catholic Church, when under sufficient institutional stress, could reform its leadership through collective action. However, the conciliarist precedent was quickly reversed: the papacy reasserted its supremacy, refused to implement the structural reforms the Council had promised, and continued the sale of indulgences and clerical corruption that the Council had ostensibly convened to address. By refusing meaningful reform while burning reformers, the Church made the Protestant Reformation of the next century inevitable.',
    '1414-11-01'::date,
    'Elections & Democratic Process',
    '{"tags": ["Council of Constance", "Western Schism", "Jan Hus", "conciliarism", "Catholic Church"], "category": "Institutional Reform", "significance": "critical", "sources": ["Britannica - Council of Constance", "Wikipedia - Council of Constance"]}'::jsonb
  ),
  (
    'Jan Hus Burned for Heresy — The Reformation a Century Early',
    'On July 6, 1415, Czech theologian Jan Hus was burned at the stake in Constance by order of the Council of Constance, despite having been given a safe conduct pass by Holy Roman Emperor Sigismund, after refusing to recant his criticisms of clerical corruption, the sale of indulgences, and the doctrine of papal infallibility. Hus had argued that scripture, not the pope, was the supreme authority for Christians — a position that anticipated Martin Luther by exactly 100 years. His execution triggered the Hussite Wars (1419–1434) in Bohemia, where his followers — using revolutionary military tactics including armored wagon-forts — repeatedly defeated Crusading armies sent to crush them. Hus became the founding martyr of Czech national identity, and his story demonstrates how institutions routinely violate their own rules (safe conduct) to silence reformers who threaten their power.',
    '1415-07-06'::date,
    'Media Manipulation',
    '{"tags": ["Jan Hus", "heresy", "Council of Constance", "Reformation", "Catholic Church"], "category": "Religious Persecution", "significance": "critical", "sources": ["Britannica - Jan Hus", "Wikipedia - Jan Hus"]}'::jsonb
  ),
  (
    'The Portuguese Begin Atlantic Exploration — The Age of Colonial Extraction Begins',
    'Beginning with the capture of Ceuta in Morocco in 1415 under Prince Henry ''the Navigator,'' Portugal systematically developed the techniques, technology, and institutional infrastructure for long-range oceanic exploration — establishing a school of navigation at Sagres, funding voyages down the African coast, developing the caravel (a nimble, lateen-rigged ship capable of sailing into the wind), and creating systematic charts of the Atlantic winds and currents. By 1488, Bartolomeu Dias had rounded the Cape of Good Hope; by 1498, Vasco da Gama had reached India; by 1500, Pedro Alvares Cabral had claimed Brazil. These voyages opened the global trade routes that would enable European powers to bypass the Islamic commercial monopoly on Asian goods and begin the Atlantic slave trade. The Portuguese exploration program represents the first systematic state investment in geopolitical intelligence — mapping the world to extract its resources.',
    '1415-08-21'::date,
    'Financial Systems',
    '{"tags": ["Portugal", "Age of Exploration", "Henry the Navigator", "colonial", "Atlantic"], "category": "Exploration & Colonialism", "significance": "critical", "sources": ["Britannica - Henry the Navigator", "Wikipedia - Age of Discovery"]}'::jsonb
  ),
  (
    'Battle of Agincourt — Henry V''s Impossible Victory Over France',
    'On October 25, 1415 — the feast of St. Crispin — a depleted English army of roughly 6,000 men under King Henry V defeated a French force estimated at 12,000–36,000 at Agincourt in northern France, one of the most lopsided military victories in history. Henry''s longbowmen — comprising nearly 80% of his force — fired lethal volleys into the packed ranks of advancing French men-at-arms who were channeled by woodland flanks into a narrow killing ground of recently plowed mud. Estimates suggest 6,000–10,000 French were killed against fewer than 500 English dead. Henry ordered the unprecedented execution of French prisoners when a flanking attack threatened to overwhelm his position — an act that violated chivalric norms. Agincourt became the cornerstone of English national myth, immortalized by Shakespeare in Henry V.',
    '1415-10-25'::date,
    'War & Intelligence Operations',
    '{"tags": ["Battle of Agincourt", "Henry V", "Hundred Years War", "longbow", "France"], "category": "Military Battle", "significance": "critical", "sources": ["Wikipedia - Battle of Agincourt", "Britannica - Battle of Agincourt"]}'::jsonb
  ),
  (
    'Joan of Arc — A Teenage Peasant Girl Turns the Tide of the Hundred Years'' War',
    'In 1429, a 17-year-old illiterate peasant girl from Domremy named Joan of Arc convinced the Dauphin of France that she had received divine visions commanding her to drive the English from France — and was given command of a military force that lifted the seven-month Siege of Orleans in just nine days, a feat that stunned both sides of the conflict. Joan''s intervention reversed the course of the Hundred Years'' War, enabling Charles VII''s coronation at Reims on July 17, 1429. Captured by the Burgundians in 1430 and sold to the English, she was tried for heresy by a pro-English ecclesiastical court and burned at the stake on May 30, 1431, at age 19. Twenty-five years later, Pope Callixtus III declared the trial invalid; she was canonized in 1920. Joan''s story reveals how institutions of church and state routinely destroy those they cannot control.',
    '1429-05-08'::date,
    'War & Intelligence Operations',
    '{"tags": ["Joan of Arc", "Hundred Years War", "France", "Orleans", "martyrdom"], "category": "Military Leadership", "significance": "critical", "sources": ["Wikipedia - Hundred Years'' War", "Britannica - Hundred Years War"]}'::jsonb
  ),
  (
    'The Ming Dynasty''s Isolation Policy — China Walls Itself Off From the World',
    'In 1433–1436, the Ming Dynasty under the Xuande and later Zhengtong Emperors — driven by Confucian bureaucrats who viewed overseas trade as politically dangerous and culturally corrupting — banned private maritime trade, ordered the destruction of oceangoing ships and navigational charts, prohibited Chinese subjects from sailing abroad, and executed those who defied these orders. This ''Haijin'' (sea ban) policy effectively ended China''s status as the world''s leading maritime power just as the Portuguese were beginning their systematic Atlantic exploration that would eventually connect the hemispheres. The ban was enforced with varying degrees of rigor for the next 150 years, leaving the lucrative Asian trade routes to be filled by Arab, Malay, Japanese, and ultimately European merchants. The Ming maritime isolation is history''s most consequential self-inflicted strategic wound — a superpower voluntarily surrendering global commercial dominance for ideological reasons.',
    '1433-01-01'::date,
    'Energy & Suppressed Technology',
    '{"tags": ["Ming Dynasty", "Haijin", "maritime ban", "China", "isolation"], "category": "Strategic Self-Harm", "significance": "critical", "sources": ["Britannica - Ming dynasty", "Wikipedia - Haijin"]}'::jsonb
  ),
  (
    'The Portuguese Slave Trade in West Africa — Building the Infrastructure of Human Commodification',
    'Beginning with Goncalves''s first capture of Africans near Cap Blanc in 1441, Portugal constructed a systematic commercial infrastructure for the enslavement and export of Africans that became the foundation of the transatlantic slave trade. By 1500, Portugal was transporting approximately 1,500 enslaved Africans per year; the establishment of trading posts at Elmina (1482) and other points along the West African coast created permanent slave-trading nodes. The Portuguese worked in partnership with West African kingdoms who provided captives in exchange for firearms and trade goods, embedding African elites in the system — a deliberate colonial strategy of corruption that persisted for centuries.',
    '1441-01-01'::date,
    'Child Safety & Trafficking',
    '{"tags": ["Portugal", "West Africa", "slave trade", "Elmina", "human trafficking"], "category": "Transatlantic Slave Trade", "significance": "critical", "sources": ["Wikipedia - Atlantic slave trade", "Encyclopaedia Britannica"]}'::jsonb
  ),
  (
    'Gutenberg''s Printing Press — Europe''s Information Revolution',
    'Around 1440–1455 CE, German goldsmith Johannes Gutenberg of Mainz developed a mechanized movable-type printing press using a metal alloy that melted and cooled rapidly to form durable reusable type, combined with oil-based ink and a screw press adapted from wine-making — producing the first mass-produced books in European history, including the famous Gutenberg Bible of 1455. Before Gutenberg, a single book required months of a scribe''s labor; the press could produce hundreds of identical copies in days at a fraction of the cost. Within 50 years of Gutenberg''s press, over 20 million books had been printed in Europe, making previously rare knowledge widely accessible. The press enabled the Protestant Reformation, the Scientific Revolution, and the spread of democratic ideas — a technological disruption that fundamentally redistributed the power to control information.',
    '1450-01-01'::date,
    'Surveillance & Technology',
    '{"tags": ["Gutenberg", "printing press", "information revolution", "Europe", "books"], "category": "Technology", "significance": "critical", "sources": ["Britannica - Johannes Gutenberg", "Wikipedia - Printing press"]}'::jsonb
  ),
  (
    'The Fall of Constantinople — The End of the Roman Empire',
    'On May 29, 1453, Sultan Mehmed II of the Ottoman Empire captured Constantinople — capital of the Byzantine Empire and continuation of the Roman Empire — after a 53-day siege employing massive Hungarian-cast cannons that breached walls that had protected the city for a thousand years. The last Byzantine Emperor, Constantine XI Palaiologos, died fighting on the walls. Mehmed''s army of 100,000–130,000 faced approximately 7,000 defenders; the decisive breach came when the enormous cannon ''Basilica'' destroyed sections of the Theodosian Walls. The fall ended the Roman Empire in any form — a civilizational continuity stretching back 1,500 years — and cut off European access to the overland Silk Road, pushing European powers to seek ocean routes to Asia that would lead directly to the Age of Discovery and colonial expansion.',
    '1453-05-29'::date,
    'War & Intelligence Operations',
    '{"tags": ["Fall of Constantinople", "Ottoman Empire", "Byzantine Empire", "Mehmed II", "Roman Empire"], "category": "Military Conquest", "significance": "critical", "sources": ["Wikipedia - Fall of Constantinople", "Britannica - Fall of Constantinople"]}'::jsonb
  ),
  (
    'The Siege of Constantinople Falls — The Byzantine Empire Ends',
    'On May 29, 1453, Ottoman Sultan Mehmed II captured Constantinople after a 53-day siege, ending the 1,000-year Byzantine Empire and transforming the greatest Christian city in the East into an Islamic capital. The fall sent shockwaves across Christendom: Greek scholars fled to Italy carrying classical manuscripts that helped ignite the Renaissance, while the closure of the overland Silk Road trade routes spurred the search for oceanic routes to Asia that produced the Age of Exploration. Mehmed converted the Hagia Sophia into a mosque; Constantinople became Istanbul, the capital of the Ottoman Empire at the height of its power.',
    '1453-05-29'::date,
    'War & Intelligence Operations',
    '{"tags": ["Constantinople", "Byzantine Empire", "Ottoman", "Mehmed II", "1453"], "category": "Empire & Conquest", "significance": "critical", "sources": ["Wikipedia - Fall of Constantinople", "Encyclopaedia Britannica"]}'::jsonb
  ),
  (
    'The Gutenberg Bible Printed — Scripture Escapes the Church''s Exclusive Control',
    'Around 1452–1455, Johannes Gutenberg completed printing approximately 180 copies of the Latin Bible in Mainz, Germany — the first major book produced in Europe using movable type. Before this, the Church''s monopoly over written copies of Scripture gave it unparalleled control over religious interpretation; a single Bible might take a monk two years to copy by hand. Gutenberg''s Bible put Scripture within reach of literate laypeople, merchants, and scholars, making independent theological study possible. Within decades, reformers like Martin Luther were using the press to distribute challenges to Church authority to hundreds of thousands of readers — a media revolution the Church could not contain.',
    '1455-01-01'::date,
    'Media Manipulation',
    '{"tags": ["Gutenberg Bible", "printing press", "Reformation", "literacy", "censorship"], "category": "Information Revolution", "significance": "critical", "sources": ["Gutenberg Bible - Wikipedia", "The Huntington Library"]}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);