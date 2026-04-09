export interface ExtractedEntities {
  people: string[];
  organizations: string[];
  programs: string[];
  legislation: string[];
  locations: string[];
  dates: string[];
  keywords: string[];
}

const KNOWN_ORGANIZATIONS = [
  'CIA', 'FBI', 'NSA', 'DHS', 'DOJ', 'FDA', 'FTC', 'SEC', 'FCC',
  'BlackRock', 'Vanguard', 'State Street', 'JPMorgan', 'Goldman Sachs',
  'Purdue Pharma', 'Boeing', 'Meta', 'Google', 'Amazon', 'Uber', 'DoorDash',
  'UnitedHealth', 'Equifax', 'Experian', 'TransUnion',
  'Federal Reserve', 'Pentagon', 'Congress', 'Senate', 'House',
  'Supreme Court', 'White House', 'AARO', 'NCMEC',
  'Bank of North Dakota', 'Palantir', 'Blackwater', 'Academi',
  'FTX', 'Alameda Research'
];

const KNOWN_PROGRAMS = [
  'MK-Ultra', 'COINTELPRO', 'Operation Paperclip',
  'Quantitative Tightening', 'QT', 'QE',
  'STOCK Act', 'SAVE Act', 'TAKE IT DOWN Act',
  'FISA', 'Section 702', 'Proposition 22',
  'NDAA', 'Inflation Reduction Act',
  'Digital Services Act', 'Kids Online Safety Act',
  'ENFORCE Act', 'Affordable Care Act'
];

const KNOWN_PEOPLE = [
  'Sam Bankman-Fried', 'SBF', 'Jeffrey Epstein', 'Sackler',
  'Elon Musk', 'Trump', 'Biden', 'MLK', 'Malcolm X',
  'Erik Prince', 'Wernher von Braun', 'John Barnett', 'Joshua Dean',
  'Richard Helms', 'Fred Hampton'
];

export function extractEntities(text: string): ExtractedEntities {
  const entities: ExtractedEntities = {
    people: [],
    organizations: [],
    programs: [],
    legislation: [],
    locations: [],
    dates: [],
    keywords: []
  };

  const lowerText = text.toLowerCase();

  KNOWN_ORGANIZATIONS.forEach(org => {
    if (lowerText.includes(org.toLowerCase())) {
      entities.organizations.push(org);
    }
  });

  KNOWN_PROGRAMS.forEach(program => {
    if (lowerText.includes(program.toLowerCase())) {
      entities.programs.push(program);
    }
  });

  KNOWN_PEOPLE.forEach(person => {
    if (lowerText.includes(person.toLowerCase())) {
      entities.people.push(person);
    }
  });

  const legislationPatterns = [
    /\b([A-Z][A-Z\s]+Act)\b/g,
    /\bExecutive Order\b/gi,
    /\bH\.R\.\s*\d+/gi,
    /\bS\.\s*\d+/gi
  ];

  legislationPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.legislation.push(...matches);
    }
  });

  const locationPatterns = [
    /\b(United States|U\.S\.?|America|California|Texas|Florida|New York|North Dakota|Vermont|New Mexico)\b/gi,
    /\b(China|Russia|Iran|Europe|EU|Middle East)\b/gi
  ];

  locationPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.locations.push(...matches);
    }
  });

  const datePattern = /\b(19\d{2}|20\d{2})\b/g;
  const dateMatches = text.match(datePattern);
  if (dateMatches) {
    entities.dates.push(...dateMatches);
  }

  const thematicKeywords = [
    'surveillance', 'fraud', 'corruption', 'whistleblower', 'crisis',
    'accountability', 'transparency', 'classified', 'declassified',
    'investigation', 'lawsuit', 'settlement', 'bankruptcy', 'conviction',
    'prosecution', 'criminal', 'liability', 'immunity', 'pardon',
    'housing', 'healthcare', 'insurance', 'pharmaceutical', 'opioid',
    'student loan', 'debt', 'credit score', 'banking', 'financial',
    'military', 'contractor', 'defense', 'intelligence', 'war',
    'election', 'voting', 'voter', 'AI', 'algorithm', 'data',
    'privacy', 'censorship', 'regulation', 'monopoly', 'antitrust'
  ];

  thematicKeywords.forEach(keyword => {
    if (lowerText.includes(keyword.toLowerCase())) {
      entities.keywords.push(keyword);
    }
  });

  entities.people = [...new Set(entities.people)];
  entities.organizations = [...new Set(entities.organizations)];
  entities.programs = [...new Set(entities.programs)];
  entities.legislation = [...new Set(entities.legislation)];
  entities.locations = [...new Set(entities.locations)];
  entities.dates = [...new Set(entities.dates)];
  entities.keywords = [...new Set(entities.keywords)];

  return entities;
}

export function countSharedEntities(entities1: ExtractedEntities, entities2: ExtractedEntities): number {
  let count = 0;

  const sharedPeople = entities1.people.filter(p =>
    entities2.people.some(p2 => p.toLowerCase() === p2.toLowerCase())
  );
  count += sharedPeople.length * 2;

  const sharedOrgs = entities1.organizations.filter(o =>
    entities2.organizations.some(o2 => o.toLowerCase() === o2.toLowerCase())
  );
  count += sharedOrgs.length * 2;

  const sharedPrograms = entities1.programs.filter(p =>
    entities2.programs.some(p2 => p.toLowerCase() === p2.toLowerCase())
  );
  count += sharedPrograms.length * 3;

  const sharedLegislation = entities1.legislation.filter(l =>
    entities2.legislation.some(l2 => l.toLowerCase() === l2.toLowerCase())
  );
  count += sharedLegislation.length * 2;

  const sharedKeywords = entities1.keywords.filter(k =>
    entities2.keywords.some(k2 => k.toLowerCase() === k2.toLowerCase())
  );
  count += sharedKeywords.length * 0.5;

  return count;
}

export function getSharedEntitiesList(entities1: ExtractedEntities, entities2: ExtractedEntities): string[] {
  const shared: string[] = [];

  entities1.people.forEach(p => {
    if (entities2.people.some(p2 => p.toLowerCase() === p2.toLowerCase())) {
      shared.push(p);
    }
  });

  entities1.organizations.forEach(o => {
    if (entities2.organizations.some(o2 => o.toLowerCase() === o2.toLowerCase())) {
      shared.push(o);
    }
  });

  entities1.programs.forEach(p => {
    if (entities2.programs.some(p2 => p.toLowerCase() === p2.toLowerCase())) {
      shared.push(p);
    }
  });

  entities1.legislation.forEach(l => {
    if (entities2.legislation.some(l2 => l.toLowerCase() === l2.toLowerCase())) {
      shared.push(l);
    }
  });

  return [...new Set(shared)];
}

export function areInSameTimePeriod(entities1: ExtractedEntities, entities2: ExtractedEntities): boolean {
  if (entities1.dates.length === 0 || entities2.dates.length === 0) {
    return false;
  }

  const years1 = entities1.dates.map(d => parseInt(d));
  const years2 = entities2.dates.map(d => parseInt(d));

  for (const year1 of years1) {
    for (const year2 of years2) {
      if (Math.abs(year1 - year2) <= 2) {
        return true;
      }
    }
  }

  return false;
}

export function documentMentionsOther(sourceText: string, targetTitle: string): boolean {
  const lowerSource = sourceText.toLowerCase();
  const lowerTarget = targetTitle.toLowerCase();

  const titleWords = lowerTarget.split(/\s+/).filter(w => w.length > 3);

  if (titleWords.length >= 3) {
    const matchedWords = titleWords.filter(word => lowerSource.includes(word));
    return matchedWords.length >= 3;
  }

  return lowerSource.includes(lowerTarget);
}
