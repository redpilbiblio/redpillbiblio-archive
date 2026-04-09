import { useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { PILLAR_SUBCATEGORIES } from '@/lib/subcategories';
import { ChevronLeft, ChevronRight, Save, RefreshCw, Filter, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react';

interface ReviewDoc {
  id: string;
  title: string;
  document_type: string;
  subcategory: string;
  description: string | null;
  date_published: string | null;
}

interface PendingChange {
  id: string;
  subcategory: string;
}

const PAGE_SIZE = 25;

const ALL_PILLARS = Object.keys(PILLAR_SUBCATEGORIES);

function formatSubcategory(s: string) {
  return s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function SubcategoryReview() {
  const [docs, setDocs] = useState<ReviewDoc[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pillarFilter, setPillarFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'title' | 'date_published'>('title');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<Record<string, PendingChange>>({});
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const fetchDocs = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);

    let countQuery = supabase
      .from('documents')
      .select('id', { count: 'exact', head: true })
      .eq('subcategory', 'general');

    let dataQuery = supabase
      .from('documents')
      .select('id, title, document_type, subcategory, description, date_published')
      .eq('subcategory', 'general')
      .order(sortBy, { ascending: true })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);

    if (pillarFilter !== 'all') {
      countQuery = countQuery.eq('document_type', pillarFilter);
      dataQuery = dataQuery.eq('document_type', pillarFilter);
    }

    const [{ count }, { data, error }] = await Promise.all([countQuery, dataQuery]);

    if (error) {
      setErrorMsg('Failed to load documents: ' + error.message);
    } else {
      setDocs(data ?? []);
      setTotal(count ?? 0);
    }
    setLoading(false);
  }, [page, pillarFilter, sortBy]);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  useEffect(() => {
    setPage(0);
    setPendingChanges({});
  }, [pillarFilter, sortBy]);

  function handleSubcategoryChange(docId: string, value: string) {
    setPendingChanges(prev => ({ ...prev, [docId]: { id: docId, subcategory: value } }));
    setSavedIds(prev => { const s = new Set(prev); s.delete(docId); return s; });
  }

  async function saveOne(docId: string) {
    const change = pendingChanges[docId];
    if (!change) return;
    setSaving(true);
    setErrorMsg(null);

    const { error } = await supabase
      .from('documents')
      .update({ subcategory: change.subcategory })
      .eq('id', docId);

    setSaving(false);
    if (error) {
      setErrorMsg('Save failed: ' + error.message);
    } else {
      setSavedIds(prev => new Set(prev).add(docId));
      setPendingChanges(prev => {
        const next = { ...prev };
        delete next[docId];
        return next;
      });
      setDocs(prev => prev.filter(d => d.id !== docId));
      setTotal(prev => prev - 1);
    }
  }

  async function saveAll() {
    const changes = Object.values(pendingChanges);
    if (changes.length === 0) return;
    setSaving(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    let failed = 0;
    const savedDocIds: string[] = [];

    await Promise.all(
      changes.map(async ({ id, subcategory }) => {
        const { error } = await supabase
          .from('documents')
          .update({ subcategory })
          .eq('id', id);
        if (error) {
          failed++;
        } else {
          savedDocIds.push(id);
        }
      })
    );

    setSaving(false);
    setPendingChanges(prev => {
      const next = { ...prev };
      savedDocIds.forEach(id => delete next[id]);
      return next;
    });
    setSavedIds(prev => {
      const s = new Set(prev);
      savedDocIds.forEach(id => s.add(id));
      return s;
    });
    setDocs(prev => prev.filter(d => !savedDocIds.includes(d.id)));
    setTotal(prev => prev - savedDocIds.length);

    if (failed > 0) {
      setErrorMsg(`${failed} saves failed. Remaining changes are still pending.`);
    } else {
      setSuccessMsg(`${savedDocIds.length} document${savedDocIds.length !== 1 ? 's' : ''} updated successfully.`);
      setTimeout(() => setSuccessMsg(null), 4000);
    }
  }

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const pendingCount = Object.keys(pendingChanges).length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-mono font-bold text-[#00ff41] mb-1">
            Subcategory Review
          </h1>
          <p className="text-gray-400 font-mono text-sm">
            Documents classified as <span className="text-yellow-400">general</span> — review and assign specific subcategories
          </p>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 bg-red-900/30 border border-red-500/40 text-red-300 rounded px-4 py-3 mb-4 font-mono text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="flex items-center gap-2 bg-green-900/30 border border-[#00ff41]/40 text-[#00ff41] rounded px-4 py-3 mb-4 font-mono text-sm">
            <CheckCircle className="w-4 h-4 shrink-0" />
            {successMsg}
          </div>
        )}

        <div className="bg-[#111] border border-white/10 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={pillarFilter}
                  onChange={e => setPillarFilter(e.target.value)}
                  className="bg-[#0a0a0a] border border-white/15 text-gray-300 rounded px-3 py-1.5 font-mono text-xs focus:outline-none focus:border-[#00ff41]/50"
                >
                  <option value="all">All Pillars</option>
                  {ALL_PILLARS.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-mono text-xs">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as 'title' | 'date_published')}
                  className="bg-[#0a0a0a] border border-white/15 text-gray-300 rounded px-3 py-1.5 font-mono text-xs focus:outline-none focus:border-[#00ff41]/50"
                >
                  <option value="title">Title</option>
                  <option value="date_published">Date</option>
                </select>
              </div>

              <button
                onClick={fetchDocs}
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#00ff41] font-mono text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refresh
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm">
                <span className="text-yellow-400 font-bold">{total}</span>
                <span className="text-gray-400"> document{total !== 1 ? 's' : ''} need review</span>
              </span>

              {pendingCount > 0 && (
                <button
                  onClick={saveAll}
                  disabled={saving}
                  className="flex items-center gap-1.5 bg-[#00ff41]/10 hover:bg-[#00ff41]/20 border border-[#00ff41]/40 text-[#00ff41] rounded px-4 py-1.5 font-mono text-xs transition-colors disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  {saving ? 'Saving...' : `Save All (${pendingCount})`}
                </button>
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#00ff41] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : docs.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-mono">
            <CheckCircle className="w-10 h-10 mx-auto mb-3 text-[#00ff41]/40" />
            <p>No documents with "general" subcategory found.</p>
            {pillarFilter !== 'all' && (
              <p className="text-xs mt-1">Try clearing the pillar filter.</p>
            )}
          </div>
        ) : (
          <div className="bg-[#111] border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0d0d0d]">
                    <th className="text-left text-gray-500 font-medium px-4 py-3 text-xs uppercase tracking-wider">Title</th>
                    <th className="text-left text-gray-500 font-medium px-4 py-3 text-xs uppercase tracking-wider whitespace-nowrap">Pillar</th>
                    <th className="text-left text-gray-500 font-medium px-4 py-3 text-xs uppercase tracking-wider whitespace-nowrap">Description</th>
                    <th className="text-left text-gray-500 font-medium px-4 py-3 text-xs uppercase tracking-wider whitespace-nowrap">Subcategory</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {docs.map(doc => {
                    const pillarKey = doc.document_type;
                    const subcats = PILLAR_SUBCATEGORIES[pillarKey] ?? ['general'];
                    const currentSub = pendingChanges[doc.id]?.subcategory ?? doc.subcategory;
                    const isDirty = !!pendingChanges[doc.id];
                    const isSaved = savedIds.has(doc.id);

                    return (
                      <tr
                        key={doc.id}
                        className={`transition-colors ${isDirty ? 'bg-yellow-900/10' : 'hover:bg-white/[0.02]'}`}
                      >
                        <td className="px-4 py-3 max-w-xs">
                          <span
                            className="text-gray-200 line-clamp-2 leading-snug"
                            title={doc.title}
                          >
                            {doc.title}
                          </span>
                          {doc.date_published && (
                            <span className="text-gray-600 text-xs block mt-0.5">
                              {doc.date_published.slice(0, 10)}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="text-[#00ff41]/80 text-xs bg-[#00ff41]/5 border border-[#00ff41]/20 rounded px-2 py-0.5">
                            {doc.document_type}
                          </span>
                        </td>
                        <td className="px-4 py-3 max-w-sm">
                          <span className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                            {doc.description ? doc.description.slice(0, 100) + (doc.description.length > 100 ? '…' : '') : '—'}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <select
                            value={currentSub}
                            onChange={e => handleSubcategoryChange(doc.id, e.target.value)}
                            className={`bg-[#0a0a0a] border rounded px-2 py-1.5 text-xs focus:outline-none focus:border-[#00ff41]/50 min-w-[160px] ${
                              isDirty
                                ? 'border-yellow-500/50 text-yellow-300'
                                : 'border-white/15 text-gray-300'
                            }`}
                          >
                            {subcats.map(s => (
                              <option key={s} value={s}>{formatSubcategory(s)}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {isSaved ? (
                            <span className="flex items-center gap-1 text-[#00ff41] text-xs">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Saved
                            </span>
                          ) : isDirty ? (
                            <button
                              onClick={() => saveOne(doc.id)}
                              disabled={saving}
                              className="flex items-center gap-1 bg-[#00ff41]/10 hover:bg-[#00ff41]/20 border border-[#00ff41]/30 text-[#00ff41] rounded px-3 py-1 text-xs transition-colors disabled:opacity-50"
                            >
                              <Save className="w-3 h-3" />
                              Save
                            </button>
                          ) : (
                            <span className="text-gray-700 text-xs">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-500 font-mono text-xs">
              Page {page + 1} of {totalPages} &mdash; {total} total
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
                className="flex items-center gap-1 px-3 py-1.5 border border-white/15 rounded text-gray-400 hover:text-[#00ff41] hover:border-[#00ff41]/30 font-mono text-xs transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Prev
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="flex items-center gap-1 px-3 py-1.5 border border-white/15 rounded text-gray-400 hover:text-[#00ff41] hover:border-[#00ff41]/30 font-mono text-xs transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
