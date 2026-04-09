export interface DynastySource {
  label: string;
  url: string;
}

export interface DynastyBusiness {
  name: string;
  title: string;
  revenue: string;
  url: string;
  urlDisplay: string;
}

export interface DynastyMember {
  id: string;
  fullName: string;
  parentName: string;
  status: string;
  borderType: 'deceased' | 'living' | 'gold';
  dob: string;
  dod: string | null;
  spouse: string | null;
  spouseFamily: string | null;
  profession: string;
  majorPositions?: string | null;
  netWorth: string;
  political: string;
  donations: string;
  wikiUrl?: string | null;
  primarySourceUrl?: string | null;
  sources?: DynastySource[];
  childrenIds?: string[];
  note?: string;
  patronage?: string;
  businesses?: DynastyBusiness[];
  disclaimer?: string;
}

export interface DynastyGeneration {
  number: number;
  label?: string;
  members: DynastyMember[];
}

export interface DynastyFounder {
  fullName: string;
  status: string;
  dob: string;
  dod: string;
  spouse: string;
  spouseFamily: string;
  profession: string;
  majorPositions: string;
  netWorth: string;
  political: string;
  donations: string;
  wikiUrl: string;
  sources: DynastySource[];
}

export interface DynastyConnection {
  type: string;
  institution: string;
  relationship: string;
}

export interface DynastyLegacyItem {
  title: string;
  description: string;
}

export interface MediciDynastyData {
  id: string;
  origins: {
    paragraphs: string[];
    preWealthLineage: string[];
    sources: DynastySource[];
  };
  founder: DynastyFounder;
  generations: DynastyGeneration[];
  modernClaimants: DynastyMember[];
  connections: DynastyConnection[];
  legacy: {
    intro: string;
    items: DynastyLegacyItem[];
  };
  allSources: DynastySource[];
}

export const mediciDynasty: MediciDynastyData = {
  id: 'medici',

  origins: {
    paragraphs: [
      'The name Medici derives from the Italian word for "doctors" or "physicians." Whether the family\'s earliest ancestors actually practiced medicine is disputed; more likely the name was an occupational descriptor for an ancestor several generations before the family\'s documented rise.',
      'The Medici originated in the Mugello Valley, a rugged agricultural region northeast of Florence in Tuscany. The first documented land purchases by the family in Mugello date to approximately 1260, with the last land acquisition in the region recorded in 1318 — suggesting a branch family that had quietly accumulated land over several generations before pivoting to trade and banking.',
      'Historical and archival records trace approximately five generations of Medici ancestors living in Mugello between roughly 1046 and 1240 before the family migrated to Florence. Their means of livelihood was agricultural land ownership and small-scale commerce.',
      'Around 1200, members of the family relocated from Mugello to Florence — then a rapidly growing city-state whose power depended on trade in wool and banking. The Medici joined the city\'s merchant class and began participating in the highly influential merchant guild (Arte della Lana).',
      "By the 1280s, Ardingo de' Medici had risen to become prior (head) of the Florentine merchant guild — the earliest documented Medici in a position of civic power, presaging the family's political trajectory over the following two centuries.",
      "The family entered banking in the 13th century. By the early 14th century, Averardo di Averardo held the office of prior (1309) and was later elected Gonfaloniere (1314). His son Averardo \"Bicci\" de' Medici (1320–1363) would become the grandfather of Giovanni di Bicci — the founder of the dynasty's true wealth.",
    ],
    preWealthLineage: [
      "Averardo I de' Medici (c. 1260) — first documented land purchases",
      "Averardo II \"il Chiarissimo\" de' Medici (1270–1319)",
      "Salvestro de' Medici (1300–1346)",
      "Averardo \"Bicci\" de' Medici (1320–1363) — father of the dynasty's founder",
    ],
    sources: [
      { label: "House of Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/House_of_Medici" },
      { label: "Averardo de' Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/Averardo_de%27_Medici" },
      { label: "The Medici Family", url: "https://themedicifamily.com" },
      { label: "La Dinastia Medicea (PDF)", url: "https://toscana.uno/wp-content/uploads/2020/11/LA_DINASTIA_MEDICEA.pdf" },
    ],
  },

  founder: {
    fullName: "Giovanni di Bicci de' Medici",
    status: 'DECEASED',
    dob: "1360, Florence, Republic of Florence",
    dod: "February 20, 1429 (aged ~69)",
    spouse: "Piccarda Bueri (married c. 1385)",
    spouseFamily: "Old Florentine family; her 1,500-florin dowry financed purchase of Rome bank branch — the dynasty's seed capital",
    profession: "Banker; founder of the Medici Bank (1397). Managed Papal finances through the Apostolic Chamber; secured Vatican tax-collection rights; held alum mines monopoly granted by the Papacy.",
    majorPositions: "Sole/majority owner: Medici Bank (Florence HQ + European branches) · Chief Papal Banker · Vatican tax collection rights · Alum mines monopoly",
    netWorth: "Precise valuation unavailable — Medici Bank was the largest in Europe by his death. Son Cosimo later spent 600,000 gold florins (~$500M adjusted) on art alone.",
    political: "Florentine republican faction; supported commoners against oligarchs",
    donations: "N/A — pre-modern political system (patronage/guild system)",
    wikiUrl: "https://en.wikipedia.org/wiki/Giovanni_di_Bicci_de%27_Medici",
    sources: [
      { label: "Love from Tuscany — Giovanni", url: "https://lovefromtuscany.com/culture/giovanni-di-bicci-de-medici/" },
      { label: "Italy On This Day", url: "https://www.italyonthisday.com/2026/02/giovanni-di-bicci-de-medici-banker.html" },
      { label: "Medici Bank — Wikipedia", url: "https://en.wikipedia.org/wiki/Medici_Bank" },
    ],
  },

  generations: [
    {
      number: 2,
      members: [
        {
          id: 'cosimo-elder',
          fullName: "Cosimo de' Medici \"The Elder\"",
          parentName: "Giovanni di Bicci de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "September 27, 1389, Florence",
          dod: "August 1, 1464, Careggi (aged 74)",
          spouse: "Contessina de' Bardi",
          spouseFamily: "Bardi family — one of Florence's great banking dynasties (had financed Edward III's wars before their collapse)",
          profession: "Banker and politician; de facto ruler of Florence from 1434. Expanded Medici Bank across Europe. Chief Papal Banker.",
          majorPositions: "Medici Bank (all European branches: Rome, Venice, Bruges, Geneva, Pisa, London, Avignon, Milan) · Tolfa alum mines monopoly (1462) · Chief Papal Banker",
          netWorth: "Spent 600,000+ gold florins (~$500M adjusted) on art and public works; controlled majority of Florence's capital. Britannica: \"certainly the wealthiest man of his time.\"",
          political: "Florentine republican faction; exiled 1433, returned 1434, ruled until death",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Cosimo_de%27_Medici",
          sources: [
            { label: "Britannica — Cosimo", url: "https://www.britannica.com/biography/Cosimo-de-Medici" },
            { label: "Order of the Fleur de Lys", url: "https://www.orderofthefleurdelys.org.uk/order-history/cosimo-de-medici/" },
          ],
          childrenIds: ['piero-gouty'],
        },
        {
          id: 'lorenzo-elder',
          fullName: "Lorenzo \"The Elder\" de' Medici",
          parentName: "Giovanni di Bicci de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "1395, Florence",
          dod: "September 23, 1440 (aged ~45)",
          spouse: "Ginevra Cavalcanti",
          spouseFamily: null,
          profession: "Banker; co-managed Medici banking operations; founded the cadet (junior) branch that later produced the Grand Dukes of Tuscany.",
          majorPositions: null,
          netWorth: "Junior share of Medici banking wealth",
          political: "Florentine republican faction",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Lorenzo_di_Giovanni_de%27_Medici",
          sources: [],
          childrenIds: ['pierfrancesco-elder'],
        },
      ],
    },
    {
      number: 3,
      members: [
        {
          id: 'piero-gouty',
          fullName: "Piero di Cosimo de' Medici \"The Gouty\"",
          parentName: "Cosimo de' Medici \"The Elder\"",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "September 19, 1416, Florence",
          dod: "December 2, 1469 (aged 53)",
          spouse: "Lucrezia Tornabuoni (b. 1427 – d. 1482)",
          spouseFamily: "Tornabuoni — prominent Florentine noble banking family; Lucrezia was a poet and literary patron",
          profession: "Lord of Florence (1464–1469); banker. Last Medici elected Gonfaloniere (1461).",
          majorPositions: null,
          netWorth: "Inherited largest fortune in Florence; declined under his management but still among Europe's wealthiest",
          political: "Florentine popular faction",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Piero_di_Cosimo_de%27_Medici",
          sources: [
            { label: "Adgblog — Piero the Gouty", url: "https://www.adgblog.it/2007/01/27/the-medicis-dinasty-piero-the-gouty/" },
          ],
          childrenIds: ['lorenzo-magnificent', 'giuliano-assassinated'],
        },
        {
          id: 'pierfrancesco-elder',
          fullName: "Pierfrancesco \"The Elder\" de' Medici",
          parentName: "Lorenzo \"The Elder\" de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "1430, Florence",
          dod: "July 19, 1476 (aged ~46)",
          spouse: null,
          spouseFamily: null,
          profession: "Banker, junior cadet branch — administered sub-branch of Medici banking interests",
          majorPositions: null,
          netWorth: "Minor share of Medici banking fortune",
          political: "Florentine republican faction",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Pierfrancesco_di_Lorenzo_de%27_Medici",
          sources: [],
          childrenIds: ['giovanni-cadet'],
        },
      ],
    },
    {
      number: 4,
      members: [
        {
          id: 'lorenzo-magnificent',
          fullName: "Lorenzo de' Medici \"The Magnificent\"",
          parentName: "Piero di Cosimo de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "January 1, 1449, Florence",
          dod: "April 8, 1492 (aged 43)",
          spouse: "Clarice Orsini (b. 1453 – d. 1488; married 1469)",
          spouseFamily: "Orsini — one of Rome's oldest and most powerful noble families; extended Medici influence into Papal States",
          profession: "De facto ruler of the Florentine Republic; greatest patron of Renaissance arts; managed Medici Bank at its zenith.",
          majorPositions: "Medici Bank (all European operations) · Vatican banking relationship · Alum trade monopoly · Florentine political control",
          netWorth: "Among the wealthiest in 15th-century Europe; bank began declining due to extravagant arts patronage",
          political: "Florentine republic; managed Italic League to stabilize Italian peninsula",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Lorenzo_de%27_Medici",
          patronage: "Michelangelo, Botticelli, Leonardo da Vinci (indirect), Galileo (family tradition)",
          sources: [
            { label: "History Extra — Lorenzo", url: "https://www.historyextra.com/period/renaissance/lorenzo-de-medici-the-magnificent-facts-life-death-patronage-pazzi-conspiracy/" },
            { label: "The Florence Insider", url: "https://theflorenceinsider.com/lorenzo-magnificent-medici/" },
          ],
          childrenIds: ['piero-unfortunate', 'pope-leo-x', 'giuliano-nemours'],
        },
        {
          id: 'giuliano-assassinated',
          fullName: "Giuliano de' Medici (assassinated 1478)",
          parentName: "Piero di Cosimo de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "March 12, 1453, Florence",
          dod: "April 26, 1478 (assassinated in Pazzi Conspiracy, aged 25)",
          spouse: "Unmarried",
          spouseFamily: null,
          profession: "Florentine political figure; killed in the Pazzi Conspiracy attack on the Medici during Mass at Florence Cathedral",
          majorPositions: null,
          netWorth: "Shared in Medici family wealth",
          political: "Florentine republic",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Giuliano_de%27_Medici",
          sources: [],
          childrenIds: ['pope-clement-vii'],
          note: "Illegitimate son (with Fioretta Gorini): Giulio → Pope Clement VII",
        },
        {
          id: 'giovanni-cadet',
          fullName: "Giovanni di Pierfrancesco de' Medici",
          parentName: "Pierfrancesco \"The Elder\" de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "October 21, 1467",
          dod: "September 14, 1498 (aged 30)",
          spouse: null,
          spouseFamily: null,
          profession: "Banker, cadet branch",
          majorPositions: null,
          netWorth: "Cadet-branch share",
          political: "Florentine republican faction",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Giovanni_di_Pierfrancesco_de%27_Medici",
          sources: [],
          childrenIds: ['giovanni-bande-nere'],
        },
      ],
    },
    {
      number: 5,
      members: [
        {
          id: 'piero-unfortunate',
          fullName: "Piero de' Medici \"The Unfortunate\"",
          parentName: "Lorenzo de' Medici \"The Magnificent\"",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "February 15, 1472, Florence",
          dod: "December 28, 1503 (drowned fleeing battle; aged 31)",
          spouse: "Alfonsina Orsini",
          spouseFamily: "Orsini — same Roman noble family as his grandmother Clarice",
          profession: "De facto ruler of Florence briefly; expelled 1494 under pressure from Savonarola and King Charles VIII of France. Never regained power.",
          majorPositions: null,
          netWorth: "Diminished — lost Florentine holdings upon exile",
          political: "Florentine republic (exiled)",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Piero_di_Lorenzo_de%27_Medici",
          sources: [],
          childrenIds: ['lorenzo-duke-urbino'],
        },
        {
          id: 'pope-leo-x',
          fullName: "Giovanni di Lorenzo de' Medici (Pope Leo X)",
          parentName: "Lorenzo de' Medici \"The Magnificent\"",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "December 11, 1475, Florence",
          dod: "December 1, 1521 (aged 45)",
          spouse: "None (celibate vows)",
          spouseFamily: null,
          profession: "Pope of the Catholic Church (1513–1521). His sale of indulgences to finance St. Peter's Basilica directly triggered Martin Luther's 95 Theses (1517) and the Protestant Reformation.",
          majorPositions: "Pope (supreme authority of the Catholic Church)",
          netWorth: "Controlled Papal treasury; notorious spender who nearly bankrupted the papacy",
          political: "Head of the Catholic Church / Medici political interests",
          donations: "N/A",
          wikiUrl: "https://en.wikipedia.org/wiki/Pope_Leo_X",
          sources: [
            { label: "Medici Popes — Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_popes_from_the_Medici_family" },
            { label: "Britannica — Medici Family", url: "https://www.britannica.com/topic/Medici-family" },
          ],
          childrenIds: [],
        },
        {
          id: 'giuliano-nemours',
          fullName: "Giuliano de' Medici, Duke of Nemours",
          parentName: "Lorenzo de' Medici \"The Magnificent\"",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "March 12, 1479, Florence",
          dod: "March 17, 1516 (aged 37)",
          spouse: "Philiberta of Savoy (married Feb 22, 1515)",
          spouseFamily: "Savoy — sovereign ruling house; later became the royal family of unified Italy (1861–1946)",
          profession: "Florentine political figure; Duke of Nemours by French royal grant",
          majorPositions: null,
          netWorth: "Medici family wealth share",
          political: "Florentine / French alliance",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Giuliano_de%27_Medici,_Duke_of_Nemours",
          sources: [],
          childrenIds: [],
        },
        {
          id: 'pope-clement-vii',
          fullName: "Giulio di Giuliano de' Medici (Pope Clement VII)",
          parentName: "Giuliano de' Medici (assassinated 1478)",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "May 26, 1478, Florence (illegitimate)",
          dod: "September 25, 1534 (aged 56)",
          spouse: "None (celibate vows)",
          spouseFamily: null,
          profession: "Pope of the Catholic Church (1523–1534). Presided over the Sack of Rome (1527); refused to annul Henry VIII's marriage to Catherine of Aragon, triggering the English Reformation.",
          majorPositions: "Pope (supreme authority of the Catholic Church)",
          netWorth: "Controlled Papal treasury",
          political: "Head of the Catholic Church",
          donations: "N/A",
          wikiUrl: "https://en.wikipedia.org/wiki/Pope_Clement_VII",
          sources: [],
          childrenIds: [],
        },
        {
          id: 'giovanni-bande-nere',
          fullName: "Giovanni delle Bande Nere",
          parentName: "Giovanni di Pierfrancesco de' Medici",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "April 5, 1498",
          dod: "November 30, 1526 (aged 28; died of battle wound)",
          spouse: "Maria Salviati (b. 1499 – d. 1543)",
          spouseFamily: "Salviati — prominent Florentine banking/political family with direct Medici connections",
          profession: "Condottiere (mercenary military captain); most celebrated Italian military commander of his era",
          majorPositions: null,
          netWorth: "Military income; cadet-branch Medici wealth",
          political: "Italian mercenary captain — served various Italian states",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Giovanni_dalle_Bande_Nere",
          sources: [],
          childrenIds: ['cosimo-i'],
        },
      ],
    },
    {
      number: 6,
      members: [
        {
          id: 'lorenzo-duke-urbino',
          fullName: "Lorenzo II de' Medici, Duke of Urbino",
          parentName: "Piero de' Medici \"The Unfortunate\"",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "September 12, 1492, Florence",
          dod: "May 4, 1519 (aged 26; died of tuberculosis and syphilis)",
          spouse: "Madeleine de la Tour d'Auvergne (married May 5, 1518)",
          spouseFamily: "Tour d'Auvergne — French noble family with royal connections",
          profession: "Duke of Urbino; ruler of Florence for the Medici during exile reversal period",
          majorPositions: null,
          netWorth: "Medici political wealth; ducal holdings",
          political: "Florentine Medici faction",
          donations: "N/A — pre-modern",
          wikiUrl: "https://en.wikipedia.org/wiki/Lorenzo_II_de%27_Medici,_Duke_of_Urbino",
          sources: [],
          childrenIds: ['catherine-medici'],
        },
        {
          id: 'cosimo-i',
          fullName: "Cosimo I de' Medici, Grand Duke of Tuscany",
          parentName: "Giovanni delle Bande Nere",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "June 12, 1519, Florence",
          dod: "April 21, 1574 (aged 54)",
          spouse: "Eleanor of Toledo",
          spouseFamily: "Daughter of the Viceroy of Naples; Spanish-Habsburg aligned nobility",
          profession: "Duke of Florence (1537), then first Grand Duke of Tuscany (1569). Re-established Medici absolute rule; built Uffizi palace; patronized Vasari.",
          majorPositions: "Grand Duke of Tuscany (sovereign ruler) · Patron of the arts and sciences",
          netWorth: "Sovereign wealth of Tuscany; one of the wealthiest rulers in Europe",
          political: "Absolute monarch (Grand Duke)",
          donations: "N/A — pre-modern / sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Cosimo_I_de%27_Medici,_Grand_Duke_of_Tuscany",
          sources: [],
          childrenIds: ['francesco-i', 'ferdinando-i'],
          note: "Also: Isabella de' Medici (b. 1542, murdered by husband Paolo Orsini, 1576) · Garcia de' Medici (b. 1547, d. 1562)",
        },
      ],
    },
    {
      number: 7,
      members: [
        {
          id: 'catherine-medici',
          fullName: "Catherine de' Medici — Queen of France",
          parentName: "Lorenzo II, Duke of Urbino",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "April 13, 1519, Florence",
          dod: "January 5, 1589 (aged 69)",
          spouse: "King Henry II of France (b. 1519 – d. 1559)",
          spouseFamily: "Valois dynasty — ruling royal house of France (1328–1589); married 1533 at age 14, brokered by Pope Clement VII",
          profession: "Queen Consort (1547–1559); Queen Mother and primary political power during reigns of three sons. Mother of three French kings (Francis II, Charles IX, Henry III). Called the \"Serpent Queen\"; credited/blamed for the St. Bartholomew's Day Massacre (1572).",
          majorPositions: "Queen Consort → Queen Regent → Queen Mother of France for 30 years",
          netWorth: "French royal treasury; Medici dowry wealth",
          political: "French Catholic faction / Medici interests",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Catherine_de%27_Medici",
          sources: [],
          childrenIds: [],
          note: "Children: Francis II, Charles IX, Henry III, Margaret of Valois — all Valois royal line",
        },
        {
          id: 'francesco-i',
          fullName: "Francesco I de' Medici, Grand Duke",
          parentName: "Cosimo I, Grand Duke of Tuscany",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "March 25, 1541, Florence",
          dod: "October 19, 1587 (aged 46; possibly poisoned)",
          spouse: "1) Joanna of Austria (d. 1578); 2) Bianca Cappello (secret, 1579)",
          spouseFamily: "1) Habsburg dynasty — Holy Roman Emperor's daughter, one of Europe's most powerful ruling houses",
          profession: "2nd Grand Duke of Tuscany (1574–1587); scientist and alchemist; established Medici glass workshops.",
          majorPositions: "Grand Duke of Tuscany (sovereign ruler)",
          netWorth: "Sovereign wealth of Tuscany",
          political: "Absolute monarch (Grand Duke)",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Francesco_I_de%27_Medici",
          sources: [],
          childrenIds: ['marie-medici'],
        },
        {
          id: 'ferdinando-i',
          fullName: "Ferdinando I de' Medici, Grand Duke",
          parentName: "Cosimo I, Grand Duke of Tuscany",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "July 30, 1549, Florence",
          dod: "February 7, 1609 (aged 59)",
          spouse: "Christina of Lorraine (1565–1637)",
          spouseFamily: "Lorraine dynasty — sovereign ruling house; granddaughter of Catherine de' Medici; later merged with Habsburg as Habsburg-Lorraine",
          profession: "3rd Grand Duke of Tuscany (1587–1609); former Cardinal; renounced cardinalate to rule; expanded Tuscan trade; patronized Galileo Galilei.",
          majorPositions: "Grand Duke of Tuscany (sovereign ruler) · Patron of Galileo",
          netWorth: "Sovereign wealth of Tuscany",
          political: "Absolute monarch (Grand Duke)",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Ferdinand_I,_Grand_Duke_of_Tuscany",
          sources: [
            { label: "Britannica — Ferdinand I", url: "https://www.britannica.com/biography/Ferdinand-I-grand-duke-of-Tuscany" },
          ],
          childrenIds: ['cosimo-ii'],
        },
      ],
    },
    {
      number: 8,
      members: [
        {
          id: 'marie-medici',
          fullName: "Marie de' Medici — Queen of France",
          parentName: "Francesco I, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "April 26, 1573, Florence",
          dod: "July 3, 1642, Cologne (aged 69)",
          spouse: "King Henry IV of France (b. 1553 – d. 1610; assassinated)",
          spouseFamily: "Bourbon dynasty — ruling royal house of France, Navarre, and Spain; Henry IV converted from Protestantism (\"Paris is worth a Mass\")",
          profession: "Queen Consort (1600–1610); Regent of France for son Louis XIII (1610–1617). Commissioned the famous Rubens cycle of paintings (Louvre).",
          majorPositions: "Queen Consort → Queen Regent of France",
          netWorth: "French royal treasury; Medici dowry",
          political: "French Catholic / Medici interests",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Marie_de%27_Medici",
          sources: [
            { label: "Britannica — Marie de' Medici", url: "https://www.britannica.com/biography/Marie-de-Medicis" },
          ],
          childrenIds: [],
          note: "Son: Louis XIII (King of France) → ancestor of all subsequent Bourbons including Louis XIV, XV, XVI",
        },
        {
          id: 'cosimo-ii',
          fullName: "Cosimo II de' Medici, Grand Duke",
          parentName: "Ferdinando I, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "May 12, 1590, Florence",
          dod: "February 28, 1621 (aged 30)",
          spouse: "Maria Magdalena of Austria",
          spouseFamily: "Habsburg archducal family",
          profession: "4th Grand Duke of Tuscany (1609–1621); major patron of Galileo Galilei, whom he appointed court mathematician and philosopher.",
          majorPositions: "Grand Duke of Tuscany · Patron of Galileo",
          netWorth: "Sovereign wealth of Tuscany (declining)",
          political: "Absolute monarch",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Cosimo_II_de%27_Medici,_Grand_Duke_of_Tuscany",
          sources: [],
          childrenIds: ['ferdinando-ii'],
        },
      ],
    },
    {
      number: 9,
      members: [
        {
          id: 'ferdinando-ii',
          fullName: "Ferdinando II de' Medici, Grand Duke",
          parentName: "Cosimo II, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "July 14, 1610, Florence",
          dod: "May 24, 1670 (aged 59)",
          spouse: "Vittoria della Rovere",
          spouseFamily: "Della Rovere — former rulers of Urbino; marriage brought Raphael paintings into the Medici collection",
          profession: "5th Grand Duke of Tuscany (1621–1670); known for religious tolerance; co-founded the Accademia del Cimento (first scientific society in the world, 1657).",
          majorPositions: "Grand Duke of Tuscany · Co-founder of Accademia del Cimento",
          netWorth: "Sovereign wealth of Tuscany (declining further)",
          political: "Absolute monarch",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Ferdinando_II_de%27_Medici,_Grand_Duke_of_Tuscany",
          sources: [],
          childrenIds: ['cosimo-iii'],
        },
      ],
    },
    {
      number: 10,
      members: [
        {
          id: 'cosimo-iii',
          fullName: "Cosimo III de' Medici, Grand Duke",
          parentName: "Ferdinando II, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "August 14, 1642, Florence",
          dod: "October 31, 1723 (aged 81; longest-reigning Medici — 53 years)",
          spouse: "Marguerite Louise d'Orléans (1645–1721)",
          spouseFamily: "Orléans — cadet branch of the French Bourbon royal dynasty; granddaughter of Henry IV & Marie de' Medici (married a descendant of his own great-grandmother)",
          profession: "6th Grand Duke of Tuscany (1670–1723); deeply religious and oppressive ruler; reversed Medici tolerance; taxed subjects heavily; dynasty visibly in decline.",
          majorPositions: "Grand Duke of Tuscany (sovereign ruler)",
          netWorth: "Declining sovereign wealth",
          political: "Absolute monarch (authoritarian)",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Cosimo_III_de%27_Medici,_Grand_Duke_of_Tuscany",
          sources: [],
          childrenIds: ['anna-maria-luisa', 'gian-gastone'],
          note: "Son Ferdinando (b.1663) died 1713 of syphilis without legitimate heirs",
        },
      ],
    },
    {
      number: 11,
      label: "FINAL GENERATION — DYNASTY ENDS",
      members: [
        {
          id: 'anna-maria-luisa',
          fullName: "Anna Maria Luisa de' Medici",
          parentName: "Cosimo III, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "August 11, 1667, Florence",
          dod: "February 18, 1743 (aged 75) — LAST LINEAL DESCENDANT",
          spouse: "Johann Wilhelm, Elector Palatine (b. 1658 – d. 1716)",
          spouseFamily: "Palatinate (Wittelsbach) — one of the seven electoral princes of the Holy Roman Empire",
          profession: "Electress Palatine; patron of music and arts; philanthropist. Bequeathed the entire Medici art collection to the Tuscan state on the permanent condition no piece could ever leave Florence — preserving one of the greatest art collections in human history.",
          majorPositions: "Electress Palatine · Custodian of the Medici collection legacy",
          netWorth: "Inherited the full Medici collection (Uffizi, Palazzo Pitti, villas, all treasures) — donated entirety to Tuscany",
          political: "Palatinate / Medici interests",
          donations: "N/A — bequeathed everything to public trust",
          wikiUrl: "https://en.wikipedia.org/wiki/Anna_Maria_Luisa_de%27_Medici",
          sources: [],
          childrenIds: [],
          note: "No children — MAIN MEDICI LINE ENDS HERE",
        },
        {
          id: 'gian-gastone',
          fullName: "Gian Gastone de' Medici — Last Grand Duke",
          parentName: "Cosimo III, Grand Duke",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "May 25, 1671, Florence",
          dod: "July 9, 1737 (aged 66)",
          spouse: "Anna Maria Franziska of Saxe-Lauenburg (separated)",
          spouseFamily: "German ducal family; marriage was unhappy and they separated",
          profession: "7th and LAST Grand Duke of Tuscany (1723–1737); known for dissolute lifestyle and total disinterest in governing; reversed father's religious oppression; left no heirs.",
          majorPositions: "Last Grand Duke of Tuscany — Grand Duchy passed to House of Habsburg-Lorraine upon his death",
          netWorth: "Remnant sovereign wealth (mostly dissipated)",
          political: "Absolute monarch (disengaged)",
          donations: "N/A — pre-modern sovereign",
          wikiUrl: "https://en.wikipedia.org/wiki/Gian_Gastone_de%27_Medici",
          sources: [
            { label: "Britannica — Gian Gastone", url: "https://www.britannica.com/biography/Gian-Gastone" },
          ],
          childrenIds: [],
          note: "No children — Grand Duchy passes to House of Habsburg-Lorraine",
        },
      ],
    },
  ],

  modernClaimants: [
    {
      id: 'prince-lorenzo-modern',
      fullName: "Prince Lorenzo de' Medici (contemporary)",
      parentName: "Unknown / Disputed lineage",
      status: 'LIVING',
      borderType: 'gold',
      dob: "Not publicly disclosed",
      dod: null,
      spouse: null,
      spouseFamily: null,
      profession: "Art investment advisor; luxury real estate developer; claims to manage \"family wealth.\" Has traded over $500M in fine art (Modigliani, Raphael, Picasso, da Vinci).",
      majorPositions: null,
      netWorth: "Not independently verified",
      political: "Not publicly documented",
      donations: "Not publicly documented",
      wikiUrl: null,
      primarySourceUrl: "https://hauteliving.com/2018/10/prince-lorenzo-de-medici-heir-medici-dynasty/661576/",
      businesses: [
        {
          name: "Medici International Bank",
          title: "Founder (in development)",
          revenue: "Pre-launch",
          url: "#",
          urlDisplay: "Not yet public",
        },
        {
          name: "De' Medici Foundation",
          title: "Principal",
          revenue: "Nonprofit",
          url: "https://demedicifoundation.org/about/",
          urlDisplay: "demedicifoundation.org",
        },
      ],
      sources: [
        { label: "DC Finance — Prince Lorenzo", url: "https://www.dc-finance.com/prince-lorenzo-de'-medici" },
        { label: "Haute Living (2018)", url: "https://hauteliving.com/2018/10/prince-lorenzo-de-medici-heir-medici-dynasty/661576/" },
        { label: "Larry Thompson Org", url: "https://www.larrythompsonorg.com/prince-lorenzo-de-medici" },
      ],
      disclaimer: "Peer-reviewed genealogical research confirms no direct descendants of the main Medici line survive. Historians note that various European families claim Medici ancestry through distant branches or illegitimate lines that cannot be verified to the prominent Florentine dynasty.",
    },
  ],

  connections: [
    { type: "Papal / Religious", institution: "Catholic Church", relationship: "4 Popes: Leo X (1513–1521), Clement VII (1523–1534), Pius IV (1559–1565), Leo XI (1605)" },
    { type: "Papal / Financial", institution: "Vatican Apostolic Chamber", relationship: "Chief Papal Bankers; collected Vatican taxes across Europe; held alum monopoly" },
    { type: "French Royalty", institution: "House of Valois", relationship: "Catherine de' Medici married Henry II; mother of three French kings" },
    { type: "French Royalty", institution: "House of Bourbon", relationship: "Marie de' Medici married Henry IV; mother of Louis XIII → ancestor of all Bourbon monarchs" },
    { type: "Holy Roman Empire", institution: "Habsburg Dynasty", relationship: "Francesco I married Joanna of Austria; Cosimo II married Habsburg archduchess" },
    { type: "Holy Roman Empire", institution: "House of Lorraine", relationship: "Ferdinando I married Christina of Lorraine; Tuscany passed to Habsburg-Lorraine in 1737" },
    { type: "Roman Nobility", institution: "Orsini Family", relationship: "Lorenzo the Magnificent married Clarice Orsini; Piero the Unfortunate married Alfonsina Orsini" },
    { type: "Florentine Banking", institution: "Bardi Family", relationship: "Cosimo the Elder married Contessina de' Bardi; cemented Medici-Bardi banking alliance" },
    { type: "Florentine Nobility", institution: "Tornabuoni Family", relationship: "Piero the Gouty married Lucrezia Tornabuoni; cultural and financial alliance" },
    { type: "Palatinate Royalty", institution: "Wittelsbach (Palatinate)", relationship: "Anna Maria Luisa married Johann Wilhelm, Elector Palatine" },
    { type: "Scientific", institution: "Galileo Galilei", relationship: "Cosimo II appointed Galileo court mathematician; Ferdinando II co-founded first scientific society" },
    { type: "Artistic", institution: "Renaissance Masters", relationship: "Patronized: Michelangelo, Botticelli, Leonardo da Vinci (indirect), Donatello, Brunelleschi, Raphael" },
    { type: "British Royalty", institution: "Stuart / Windsor", relationship: "Via Catherine de' Medici descendants into Stuart line and modern British Royal Family" },
    { type: "French Nobility", institution: "House of Savoy", relationship: "Giuliano, Duke of Nemours married Philiberta of Savoy" },
  ],

  legacy: {
    intro: "The Medici banking operations introduced or popularized several instruments that define modern finance:",
    items: [
      { title: "Bill of exchange / Letter of credit", description: "Allowed money transfer across borders without physical transport of coin — revolutionary for international commerce." },
      { title: "Branch banking", description: "Among the first to operate a coherent multi-city network of branches under unified management across Europe." },
      { title: "Double-entry bookkeeping", description: "While not Medici-invented, they systematized and spread the general ledger system across European banking." },
      { title: "Holding company structure", description: "Used franchising arrangements with semi-independent branch managers holding equity stakes — a precursor to the modern holding company." },
    ],
  },

  allSources: [
    { label: "House of Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/House_of_Medici" },
    { label: "Medici Family Tree — Wikipedia", url: "https://en.wikipedia.org/wiki/Medici_family_tree" },
    { label: "Medici Bank — Wikipedia", url: "https://en.wikipedia.org/wiki/Medici_Bank" },
    { label: "Giovanni di Bicci — Wikipedia", url: "https://en.wikipedia.org/wiki/Giovanni_di_Bicci_de%27_Medici" },
    { label: "Averardo de' Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/Averardo_de%27_Medici" },
    { label: "Cosimo de' Medici — Britannica", url: "https://www.britannica.com/biography/Cosimo-de-Medici" },
    { label: "Medici Family — Britannica", url: "https://www.britannica.com/topic/Medici-family" },
    { label: "Lorenzo de' Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/Lorenzo_de%27_Medici" },
    { label: "Catherine de' Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/Catherine_de%27_Medici" },
    { label: "Marie de' Medici — Wikipedia", url: "https://en.wikipedia.org/wiki/Marie_de%27_Medici" },
    { label: "Anna Maria Luisa — Wikipedia", url: "https://en.wikipedia.org/wiki/Anna_Maria_Luisa_de%27_Medici" },
    { label: "Gian Gastone — Wikipedia", url: "https://en.wikipedia.org/wiki/Gian_Gastone_de%27_Medici" },
    { label: "Medici Popes — Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_popes_from_the_Medici_family" },
    { label: "Pope Leo X — Wikipedia", url: "https://en.wikipedia.org/wiki/Pope_Leo_X" },
    { label: "Pope Clement VII — Wikipedia", url: "https://en.wikipedia.org/wiki/Pope_Clement_VII" },
    { label: "Francesco I — Wikipedia", url: "https://en.wikipedia.org/wiki/Francesco_I_de%27_Medici" },
    { label: "Ferdinand I — Britannica", url: "https://www.britannica.com/biography/Ferdinand-I-grand-duke-of-Tuscany" },
    { label: "Gian Gastone — Britannica", url: "https://www.britannica.com/biography/Gian-Gastone" },
    { label: "Marie de' Medici — Britannica", url: "https://www.britannica.com/biography/Marie-de-Medicis" },
    { label: "Giovanni di Bicci — Love from Tuscany", url: "https://lovefromtuscany.com/culture/giovanni-di-bicci-de-medici/" },
    { label: "Piero the Gouty — Adgblog", url: "https://www.adgblog.it/2007/01/27/the-medicis-dinasty-piero-the-gouty/" },
    { label: "Lorenzo — History Extra", url: "https://www.historyextra.com/period/renaissance/lorenzo-de-medici-the-magnificent-facts-life-death-patronage-pazzi-conspiracy/" },
    { label: "U of Oregon — Medici Tree", url: "https://pages.uoregon.edu/dluebke/WesternCiv102/MediciFamily.html" },
    { label: "All About History — Medici", url: "https://www.allabouthistory.co.uk/History/Italy/Paternal/Medici.html" },
    { label: "No Living Direct Descendants", url: "https://www.leonardodavincisinventions.com/renaissance/are-there-any-descendants-of-the-medici-family/" },
    { label: "Is Medici Family Still Around?", url: "https://thecinemaholic.com/is-the-medici-family-still-around-where-are-they-today/" },
    { label: "De' Medici Foundation", url: "https://demedicifoundation.org/about/" },
    { label: "Prince Lorenzo — DC Finance", url: "https://www.dc-finance.com/prince-lorenzo-de'-medici" },
    { label: "Prince Lorenzo — Haute Living", url: "https://hauteliving.com/2018/10/prince-lorenzo-de-medici-heir-medici-dynasty/661576/" },
    { label: "Giovanni di Bicci — Italy On This Day", url: "https://www.italyonthisday.com/2026/02/giovanni-di-bicci-de-medici-banker.html" },
    { label: "The Medici Family", url: "https://themedicifamily.com" },
    { label: "La Dinastia Medicea (PDF)", url: "https://toscana.uno/wp-content/uploads/2020/11/LA_DINASTIA_MEDICEA.pdf" },
    { label: "Guide Me Florence", url: "https://www.guidemeflorence.com/the-medici-family/" },
    { label: "Cosimo de' Medici — Order of Fleur de Lys", url: "https://www.orderofthefleurdelys.org.uk/order-history/cosimo-de-medici/" },
    { label: "The Florence Insider — Lorenzo", url: "https://theflorenceinsider.com/lorenzo-magnificent-medici/" },
  ],
};
