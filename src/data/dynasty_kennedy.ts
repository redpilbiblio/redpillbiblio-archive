export const kennedyDynasty = {
  id: 'kennedy',

  origins: {
    paragraphs: [
      'Irish Catholic roots trace to Dunganstown, County Wexford, Ireland. The family\'s American branch begins with Patrick Kennedy (1823–1858), who emigrated from Ireland to Boston in 1849 during the Great Famine. He worked as a cooper (barrel maker) and died young of tuberculosis. His son, Patrick Joseph "P.J." Kennedy (1858–1929), rose from saloon owner and liquor importer to become a powerful Boston ward boss, Massachusetts state legislator, and banker. P.J. helped establish the family\'s early political machine within Boston\'s Irish immigrant community and married into local political circles.',
      'Joseph P. Kennedy Sr. (1888–1969), P.J.\'s son and the true architect of the dynasty, turned the family into a national force. A Harvard graduate, he became the youngest bank president in the U.S. at age 25. He built a fortune through stock-market speculation in the 1920s, Hollywood (acquiring and running RKO Pictures), real estate, and post-Prohibition liquor importation via Somerset Importers. FDR appointed him first Chairman of the SEC (1934–1935), Chairman of the Maritime Commission, and U.S. Ambassador to the Court of St. James\'s (1938–1940). His isolationist views on Britain and WWII proved controversial and ended his own political ambitions but positioned the family for the next generation.',
      'Joe Sr. married Rose Fitzgerald (1890–1995), daughter of Boston Mayor John F. "Honey Fitz" Fitzgerald, strategically merging two powerful Boston Irish political families. Together they had nine children who would produce decades of continuous Democratic congressional representation, cabinet positions, and presidential influence.',
    ],
    keyNote: 'From 19th-century Irish famine immigrants to one of the most recognizable American political dynasties, the Kennedys exemplify rapid ascent through banking, media, real estate, and relentless political ambition. Their story blends genuine public service with the raw mechanics of elite power consolidation, family orchestration, and high-profile tragedy.',
    dynastyClassification: 'Banking → Hollywood → Political Power Dynasty · Democratic Party Tier · Class Origin: Irish immigrant working class → Boston ward politics → Harvard → White House',
  },

  founder: {
    name: 'Joseph P. Kennedy Sr.',
    dob: 'September 6, 1888 · East Boston, Massachusetts',
    dod: 'November 18, 1969 · Hyannis Port, Massachusetts (age 81)',
    spouse: 'Rose Fitzgerald Kennedy (1914–1995, her death)',
    children: 'Joseph Jr. (1915–1944); John F. (1917–1963); Rosemary (1918–2005); Kathleen (1920–1948); Eunice (1921–2009); Patricia (1924–2006); Robert F. (1925–1968); Jean (1928–2020); Edward "Ted" (1932–2009)',
    profession: 'Banker, investor, film producer, U.S. Ambassador, SEC Chairman, Maritime Commission Chairman',
    political: 'Democratic Party — SEC Chairman (1934–35); Ambassador to UK (1938–40)',
    netWorth: '~$400M at peak (1960s, inflation-adjusted ~$3B+)',
    wikiUrl: 'https://en.wikipedia.org/wiki/Joseph_P._Kennedy_Sr.',
  },

  wealthMechanisms: [
    {
      amount: '$400M+',
      label: 'Stock Speculation & Securities (1920s)',
      description: 'Joe Sr. made his first major fortune through stock market speculation, pool operations, and short-selling in the 1920s — activities that helped motivate FDR to appoint him as the first SEC Chairman, on the theory of "set a thief to catch a thief."',
    },
    {
      amount: 'Undisclosed',
      label: 'Hollywood / RKO Pictures (1926–1930)',
      description: 'Acquired and ran several film studios including Film Booking Offices of America and merged them into RKO Pictures. Used the operations to build Hollywood connections that would later serve the dynasty\'s political image-making.',
    },
    {
      amount: 'Undisclosed',
      label: 'Somerset Importers — Post-Prohibition Liquor',
      description: 'Joe Sr. obtained import licenses for Scotch whisky and gin through Somerset Importers ahead of Prohibition\'s repeal, positioning the company to profit immediately. The business became one of the most profitable liquor importation operations in the country.',
    },
    {
      amount: '~$100M+',
      label: 'Chicago Merchandise Mart & Real Estate',
      description: 'Kennedy purchased the Chicago Merchandise Mart in 1945 for $12.5M — at the time the world\'s largest building. It remained a Kennedy family asset for decades, sold in 1998 for approximately $625M.',
    },
  ],

  members: [
    {
      name: 'Joseph P. Kennedy Jr.',
      title: 'WWII Naval Aviator · Designated Family Political Heir',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born July 25, 1915. Joe Sr.\'s eldest son and designated political heir.',
        'Killed August 12, 1944, when his B-24 Liberator exploded during Operation Aphrodite — a secret WWII mission.',
        'His death shifted Joe Sr.\'s presidential ambitions to his next son, John F. Kennedy.',
      ],
    },
    {
      name: 'John F. Kennedy (JFK)',
      title: '35th President of the United States (1961–1963) · U.S. Senator',
      status: 'DECEASED' as const,
      isFounder: true,
      isPatriarch: false,
      keyFacts: [
        'Born May 29, 1917. Harvard graduate. WWII PT-109 naval hero.',
        'U.S. Representative (1947–1953); U.S. Senator, Massachusetts (1953–1960).',
        '35th President (January 1961 – November 1963). Youngest elected U.S. president at 43.',
        'Oversaw the Bay of Pigs invasion failure (1961) and the Cuban Missile Crisis (1962).',
        'Assassinated in Dallas, Texas, November 22, 1963. Lee Harvey Oswald charged; killed two days later by Jack Ruby.',
        'Warren Commission concluded lone-gunman theory. House Select Committee on Assassinations (1979) found "probable conspiracy."',
      ],
    },
    {
      name: 'Rosemary Kennedy',
      title: 'Kennedy Family Member · Institutionalized',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born September 13, 1918. Showed signs of intellectual disability and emotional instability.',
        'Joe Sr. authorized a lobotomy in 1941 without Rose Kennedy\'s knowledge. The procedure left Rosemary severely incapacitated.',
        'Institutionalized at St. Coletta School in Wisconsin. The family kept her condition secret for decades.',
        'Her story motivated sister Eunice to found the Special Olympics. Rosemary died January 7, 2005.',
      ],
    },
    {
      name: 'Kathleen "Kick" Kennedy',
      title: 'Society Figure · British Aristocracy Connection',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born February 20, 1920. Known as "Kick" for her vivacious personality.',
        'Married William Cavendish, Marquess of Hartington, in 1944, connecting the Kennedys to British aristocracy.',
        'Her husband was killed in WWII three months after their wedding.',
        'Died May 13, 1948, in a plane crash in France. She was 28.',
      ],
    },
    {
      name: 'Eunice Kennedy Shriver',
      title: 'Founder, Special Olympics · Political Activist',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born July 10, 1921. Married Sargent Shriver — Peace Corps director, VP candidate (1972).',
        'Founded the Special Olympics in 1968, inspired by her sister Rosemary\'s institutionalization.',
        'Worked through the Joseph P. Kennedy Jr. Foundation for decades on intellectual disability causes.',
        'Mother of Maria Shriver, who married Arnold Schwarzenegger (Governor of California).',
        'Died August 11, 2009.',
      ],
    },
    {
      name: 'Robert F. Kennedy (RFK)',
      title: 'U.S. Attorney General · U.S. Senator · Presidential Candidate',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born November 20, 1925. Harvard and University of Virginia Law School.',
        'U.S. Attorney General (1961–1964) under brother JFK. Conducted aggressive campaigns against organized crime and the Teamsters.',
        'U.S. Senator, New York (1965–1968). Strong civil rights advocate.',
        'Assassinated June 5, 1968, at the Ambassador Hotel in Los Angeles while campaigning for the Democratic presidential nomination. Sirhan Sirhan convicted.',
      ],
    },
    {
      name: 'Edward "Ted" Kennedy',
      title: 'U.S. Senator, Massachusetts (1962–2009)',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born February 22, 1932. Longest-serving Kennedy in Congress — 47 years in the Senate.',
        'Led landmark legislation including the Americans with Disabilities Act, COBRA, and CHIP.',
        'Chappaquiddick incident (July 1969): drove off a bridge; passenger Mary Jo Kopechne drowned. Ted left the scene and reported the accident 10 hours later. Pleaded guilty to leaving the scene.',
        'Failed 1980 presidential primary challenge to Carter.',
        'Died August 25, 2009, of brain cancer.',
      ],
    },
    {
      name: 'Jean Kennedy Smith',
      title: 'U.S. Ambassador to Ireland (1993–1998)',
      status: 'DECEASED' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born February 20, 1928. Youngest surviving daughter of Joe Sr. and Rose.',
        'Founded Very Special Arts (now VSA), providing arts programs for people with disabilities.',
        'Appointed U.S. Ambassador to Ireland by President Clinton (1993–1998). Played a role in Northern Ireland peace process.',
        'Died June 17, 2020.',
      ],
    },
    {
      name: 'Robert F. Kennedy Jr.',
      title: 'Environmental Lawyer · U.S. Secretary of Health and Human Services',
      status: 'LIVING' as const,
      isFounder: false,
      isPatriarch: false,
      keyFacts: [
        'Born January 17, 1954. Son of Robert F. Kennedy.',
        'Environmental lawyer; founded Waterkeeper Alliance; led major environmental legal actions.',
        'Became prominent vaccine-skeptic activist; founded Children\'s Health Defense.',
        'Ran as independent presidential candidate in 2024; withdrew and endorsed Donald Trump.',
        'Appointed U.S. Secretary of Health and Human Services by President Trump in 2025.',
      ],
    },
  ],

  scandals: [
    {
      title: 'Rosemary Kennedy Lobotomy — Concealed for Decades',
      year: '1941',
      authority: 'Family decision / Dr. Walter Freeman',
      status: 'DOCUMENTED / NO CHARGES',
      statusColor: '#888',
      description: 'Joe Sr. authorized a lobotomy on his 23-year-old daughter Rosemary without the knowledge or consent of his wife Rose. The procedure, performed by lobotomy pioneer Dr. Walter Freeman, left Rosemary severely incapacitated. The family concealed the truth for decades, claiming she was simply "mentally retarded." The full story did not emerge publicly until Eunice Kennedy Shriver\'s public statements and later biographies.',
    },
    {
      title: 'JFK Assassination — Unanswered Questions',
      year: '1963',
      authority: 'Warren Commission / House Select Committee on Assassinations',
      status: 'CONTESTED / ONGOING',
      statusColor: '#d97706',
      description: 'President Kennedy was assassinated on November 22, 1963. The Warren Commission concluded Lee Harvey Oswald acted alone. The House Select Committee on Assassinations (1979) found "probable conspiracy" based on acoustic evidence. Thousands of CIA documents remained classified until recent partial releases. The assassination remains one of the most analyzed events in American history with significant documented inconsistencies.',
    },
    {
      title: 'Chappaquiddick — Ted Kennedy / Mary Jo Kopechne',
      year: '1969',
      authority: 'Massachusetts District Court',
      status: 'GUILTY PLEA / SUSPENDED SENTENCE',
      statusColor: '#d97706',
      description: 'On July 18, 1969, Senator Ted Kennedy drove his car off a bridge on Chappaquiddick Island. Passenger Mary Jo Kopechne, 28, drowned. Kennedy swam free, left the scene, and did not report the accident for approximately 10 hours. He pleaded guilty to leaving the scene of an accident and received a two-month suspended sentence. The incident permanently damaged his presidential prospects.',
    },
    {
      title: 'Joe Sr. — SEC Manipulation & Nazi Appeasement',
      year: '1934–1940',
      authority: 'Historical record / State Department archives',
      status: 'DOCUMENTED / NO CHARGES',
      statusColor: '#888',
      description: 'Joe Sr. was appointed first SEC Chairman despite (or because of) his own history of stock pool manipulation. As U.S. Ambassador to the UK (1938–1940), his statements sympathetic to Nazi Germany and his defeatist view of Britain\'s chances led to his removal. State Department cables document his private statements supporting appeasement and disparaging Churchill\'s government.',
    },
  ],

  connections: [
    {
      type: 'Political Alliance',
      name: 'Franklin D. Roosevelt',
      detail: 'FDR appointed Joe Sr. as first SEC Chairman, Maritime Commission head, and Ambassador to the UK. The relationship later soured over Kennedy\'s isolationist stance.',
    },
    {
      type: 'Hollywood Network',
      name: 'RKO Pictures / Rat Pack',
      detail: 'Joe Sr.\'s Hollywood connections extended to Patricia Kennedy\'s marriage to actor Peter Lawford, embedding the family in the Rat Pack (Sinatra, Martin, Davis Jr.) social circle.',
    },
    {
      type: 'Labor',
      name: 'AFL-CIO / UAW',
      detail: 'The Kennedy political machine relied on organized labor, particularly the AFL-CIO and UAW, for electoral support throughout the 1950s–1970s Democratic coalition.',
    },
    {
      type: 'Marriage Alliance',
      name: 'Shriver / Schwarzenegger',
      detail: 'Eunice Kennedy\'s marriage to Sargent Shriver (Peace Corps director, 1972 VP nominee) and their daughter Maria\'s marriage to Arnold Schwarzenegger extended dynasty reach into politics and entertainment.',
    },
    {
      type: 'Intelligence',
      name: 'CIA / Cold War Apparatus',
      detail: 'JFK oversaw the Bay of Pigs invasion planned under Eisenhower. His relationship with the CIA became openly adversarial following the operation\'s failure. RFK targeted organized crime figures with documented CIA connections.',
    },
    {
      type: 'Philanthropy',
      name: 'Joseph P. Kennedy Jr. Foundation / Special Olympics',
      detail: 'The foundation, established 1946 in memory of Joe Jr., channeled dynasty wealth into intellectual disability advocacy. Eunice\'s Special Olympics became a global institution with 170+ country presence.',
    },
  ],

  allSources: [
    {
      label: 'JFK Library — Kennedy Family Collection',
      url: 'https://www.jfklibrary.org/asset-viewer/archives/kfc',
    },
    {
      label: 'JFK Library — P.J. Kennedy Personal Papers',
      url: 'https://www.jfklibrary.org/asset-viewer/archives/pjkpp',
    },
    {
      label: 'JFK Library — Joseph P. Kennedy Personal Papers',
      url: 'https://www.jfklibrary.org/asset-viewer/archives/jpkpp',
    },
    {
      label: 'JFK Library — The Kennedy Family',
      url: 'https://www.jfklibrary.org/learn/about-jfk/the-kennedy-family',
    },
    {
      label: 'JFK Library — JFK and Ireland',
      url: 'https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/john-f-kennedy-and-ireland',
    },
    {
      label: 'Biographical Directory of Congress — Kennedy, John Fitzgerald',
      url: 'https://bioguide.congress.gov/search/bio/k000107',
    },
    {
      label: 'National Park Service — A Rise to Prominence',
      url: 'https://www.nps.gov/articles/000/a-rise-to-prominence-john-f-kennedy-s-patriarchal-lineage.htm',
    },
  ],
};
