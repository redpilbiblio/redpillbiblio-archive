import { Document } from '@/lib/supabase';
import {
  extractEntities,
  countSharedEntities,
  getSharedEntitiesList,
  areInSameTimePeriod,
  documentMentionsOther,
  ExtractedEntities
} from './entityExtraction';

export interface DiscoveredConnection {
  sourceId: string;
  targetId: string;
  connectionType: 'corroborates' | 'references' | 'contradicts' | 'categoryLink';
  scope: 'intra-tree' | 'cross-tree';
  confidenceScore: number;
  reasoning: {
    sharedEntities: string[];
    sharedKeywords: string[];
    mentionsOther: boolean;
    sameTimePeriod: boolean;
    sameCategory: boolean;
  };
}

interface DocumentWithEntities extends Document {
  entities: ExtractedEntities;
}

const CORROBORATION_KEYWORDS = [
  'confirm', 'support', 'verify', 'validate', 'evidence', 'document',
  'reveal', 'expose', 'demonstrate', 'show', 'prove'
];

const CONTRADICTION_KEYWORDS = [
  'deny', 'refute', 'contradict', 'dispute', 'challenge', 'oppose',
  'counter', 'reject', 'dismiss'
];

export function classifyConnectionType(
  doc1: DocumentWithEntities,
  doc2: DocumentWithEntities,
  sharedEntities: string[]
): 'corroborates' | 'references' | 'contradicts' | 'categoryLink' {
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

export function calculateConfidenceScore(
  doc1: DocumentWithEntities,
  doc2: DocumentWithEntities,
  sharedEntities: string[],
  reasoning: DiscoveredConnection['reasoning']
): number {
  let score = 0;

  const entityScore = countSharedEntities(doc1.entities, doc2.entities);
  score += Math.min(entityScore / 10, 0.5);

  if (reasoning.mentionsOther) {
    score += 0.25;
  }

  if (reasoning.sameTimePeriod && reasoning.sharedKeywords.length >= 2) {
    score += 0.15;
  }

  if (sharedEntities.length >= 3) {
    score += 0.1;
  }

  const verificationBonus =
    (doc1.verification_tier === 'verified' ? 0.05 : 0) +
    (doc2.verification_tier === 'verified' ? 0.05 : 0);
  score += verificationBonus;

  return Math.min(Math.max(score, 0), 1);
}

export function discoverConnections(documents: Document[]): DiscoveredConnection[] {
  const documentsWithEntities: DocumentWithEntities[] = documents.map(doc => ({
    ...doc,
    entities: extractEntities(`${doc.title} ${doc.description} ${doc.content}`)
  }));

  const connections: DiscoveredConnection[] = [];

  for (let i = 0; i < documentsWithEntities.length; i++) {
    for (let j = i + 1; j < documentsWithEntities.length; j++) {
      const doc1 = documentsWithEntities[i];
      const doc2 = documentsWithEntities[j];

      const sharedEntities = getSharedEntitiesList(doc1.entities, doc2.entities);
      const sharedKeywords = doc1.entities.keywords.filter(k =>
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
        const confidenceScore = calculateConfidenceScore(doc1, doc2, sharedEntities, reasoning);

        if (confidenceScore >= 0.3) {
          connections.push({
            sourceId: doc1.id,
            targetId: doc2.id,
            connectionType,
            scope: sameCategory ? 'intra-tree' : 'cross-tree',
            confidenceScore: Math.round(confidenceScore * 100) / 100,
            reasoning
          });
        }
      }
    }
  }

  connections.sort((a, b) => b.confidenceScore - a.confidenceScore);

  return connections;
}

export function formatConnectionReason(reasoning: DiscoveredConnection['reasoning']): string {
  const reasons: string[] = [];

  if (reasoning.sharedEntities.length > 0) {
    const entities = reasoning.sharedEntities.slice(0, 3).join(', ');
    reasons.push(`Both mention: ${entities}`);
  }

  if (reasoning.mentionsOther) {
    reasons.push('Direct reference detected');
  }

  if (reasoning.sameTimePeriod && reasoning.sharedKeywords.length >= 2) {
    reasons.push(`Same time period (${reasoning.sharedKeywords.slice(0, 2).join(', ')})`);
  }

  if (reasoning.sameCategory) {
    reasons.push('Same category');
  }

  return reasons.join(' • ');
}
