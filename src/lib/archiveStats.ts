import { Document } from './supabase';

export interface ArchiveStats {
  total: number;
  verifiedPercent: number;
  sourcedCount: number;
  newLast7Days: number;
}

export function getArchiveStats(documents: Document[]): ArchiveStats {
  const total = documents.length;

  const tieredDocs = documents.filter(
    doc => doc.verification_tier === 'verified' || doc.verification_tier === 'corroborated' || doc.verification_tier === 'preliminary'
  );

  const verifiedCount = tieredDocs.filter(
    doc => doc.verification_tier === 'verified' || doc.verification_tier === 'corroborated'
  ).length;

  const tieredTotal = tieredDocs.length;

  const verifiedPercent = tieredTotal > 0
    ? Math.round((verifiedCount / tieredTotal) * 100)
    : 0;

  const sourcedCount = documents.filter(
    doc => doc.source_url && doc.source_url.trim() !== ''
  ).length;

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const newLast7Days = documents.filter(doc => {
    if (!doc.date_published) return false;
    const docDate = new Date(doc.date_published);
    return docDate >= sevenDaysAgo;
  }).length;

  return {
    total,
    verifiedPercent,
    sourcedCount,
    newLast7Days
  };
}
