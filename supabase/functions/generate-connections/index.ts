import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ExtractedEntities {
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

const CORROBORATION_KEYWORDS = [
  'confirm', 'support', 'verify', 'validate', 'evidence', 'document',
  'reveal', 'expose', 'demonstrate', 'show', 'prove'
];

const CONTRADICTION_KEYWORDS = [
  'deny', 'refute', 'contradict', 'dispute', 'challenge', 'oppose',
  'counter', 'reject', 'dismiss'
];

function extractEntities(text: string): ExtractedEntities {
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
  entities.dates = [...new Set(entities.dates)];
  entities.keywords = [...new Set(entities.keywords)];

  return entities;
}

function getSharedEntities(entities1: ExtractedEntities, entities2: ExtractedEntities): string[] {
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

function areInSameTimePeriod(entities1: ExtractedEntities, entities2: ExtractedEntities): boolean {
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

function documentMentionsOther(sourceText: string, targetTitle: string): boolean {
  const lowerSource = sourceText.toLowerCase();
  const lowerTarget = targetTitle.toLowerCase();

  const titleWords = lowerTarget.split(/\s+/).filter((w: string) => w.length > 3);

  if (titleWords.length >= 3) {
    const matchedWords = titleWords.filter((word: string) => lowerSource.includes(word));
    return matchedWords.length >= 3;
  }

  return lowerSource.includes(lowerTarget);
}

function classifyConnectionType(doc1: any, doc2: any, sharedEntities: string[]): string {
  const text1 = `${doc1.title} ${doc1.description} ${doc1.content}`.toLowerCase();
  const text2 = `${doc2.title} ${doc2.description} ${doc2.content}`.toLowerCase();

  const hasCorroborationKeywords = CORROBORATION_KEYWORDS.some(
    keyword => text1.includes(keyword) || text2.includes(keyword)
  );

  const hasContradictionKeywords = CONTRADICTION_KEYWORDS.some(
    keyword => text1.includes(keyword) || text2.includes(keyword)
  );

  if (hasContradictionKeywords && sharedEntities.length >= 2) {
    return 'contradicts';
  }

  if (sharedEntities.length >= 3 && hasCorroborationKeywords) {
    return 'corroborates';
  }

  if (documentMentionsOther(doc1.content, doc2.title) || documentMentionsOther(doc2.content, doc1.title)) {
    return 'references';
  }

  if (sharedEntities.length >= 2) {
    return 'corroborates';
  }

  return 'categoryLink';
}

function calculateConfidence(doc1: any, doc2: any, reasoning: any): number {
  let score = 0;

  score += Math.min(reasoning.sharedEntities.length * 0.15, 0.5);

  if (reasoning.mentionsOther) {
    score += 0.25;
  }

  if (reasoning.sameTimePeriod && reasoning.sharedKeywords.length >= 2) {
    score += 0.15;
  }

  if (reasoning.sharedEntities.length >= 3) {
    score += 0.1;
  }

  const verificationBonus =
    (doc1.verification_tier === 'verified' ? 0.05 : 0) +
    (doc2.verification_tier === 'verified' ? 0.05 : 0);
  score += verificationBonus;

  return Math.min(Math.max(score, 0), 1);
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: documents, error: docError } = await supabase
      .from('documents')
      .select('*');

    if (docError) throw docError;

    const documentsWithEntities = documents.map((doc: any) => ({
      ...doc,
      entities: extractEntities(`${doc.title} ${doc.description} ${doc.content}`)
    }));

    await supabase.from('auto_generated_connections').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    const connections = [];

    for (let i = 0; i < documentsWithEntities.length; i++) {
      for (let j = i + 1; j < documentsWithEntities.length; j++) {
        const doc1 = documentsWithEntities[i];
        const doc2 = documentsWithEntities[j];

        const sharedEntities = getSharedEntities(doc1.entities, doc2.entities);
        const sharedKeywords = doc1.entities.keywords.filter((k: string) =>
          doc2.entities.keywords.includes(k)
        );
        const mentionsOther =
          documentMentionsOther(doc1.content, doc2.title) ||
          documentMentionsOther(doc2.content, doc1.title);
        const sameTimePeriod = areInSameTimePeriod(doc1.entities, doc2.entities);
        const sameCategory = doc1.metadata?.category === doc2.metadata?.category;

        const hasStrongConnection =
          sharedEntities.length >= 2 ||
          mentionsOther ||
          (sameTimePeriod && sharedKeywords.length >= 2);

        if (hasStrongConnection) {
          const reasoning = {
            sharedEntities,
            sharedKeywords,
            mentionsOther,
            sameTimePeriod,
            sameCategory
          };

          const connectionType = classifyConnectionType(doc1, doc2, sharedEntities);
          const confidenceScore = calculateConfidence(doc1, doc2, reasoning);

          if (confidenceScore >= 0.3) {
            connections.push({
              source_document_id: doc1.id,
              target_document_id: doc2.id,
              connection_type: connectionType,
              scope: sameCategory ? 'intra-tree' : 'cross-tree',
              confidence_score: Math.round(confidenceScore * 100) / 100,
              reasoning,
              shared_entities: sharedEntities
            });
          }
        }
      }
    }

    if (connections.length > 0) {
      const { error: insertError } = await supabase
        .from('auto_generated_connections')
        .insert(connections);

      if (insertError) throw insertError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        connectionsGenerated: connections.length
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
