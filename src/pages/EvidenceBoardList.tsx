import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Document } from '@/lib/supabase';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FilterSidebar } from '@/components/FilterSidebar';
import { FeaturedInvestigations } from '@/components/FeaturedInvestigations';
import { EvidenceCard } from '@/components/EvidenceCard';
import { RecentUpdates } from '@/components/RecentUpdates';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, FileArchive } from 'lucide-react';
import { MatrixRain } from '@/components/MatrixRain';
import { getArchiveStats } from '@/lib/archiveStats';
import { useLastVisit } from '@/hooks/useLastVisit';
import { useDocuments } from '@/hooks/useSupabaseQuery';

export function EvidenceBoardList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { lastVisit } = useLastVisit();
  const { data: documents = [], isLoading: loading } = useDocuments();
  const [searchTerm, setSearchTerm] = useState(() => searchParams.get('search') ?? '');

  const [isRecentCollapsed, setIsRecentCollapsed] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return true;
    const saved = localStorage.getItem('recentUpdatesSidebarCollapsed');
    return saved === 'true';
  });

  const handleToggleRecent = () => {
    const newState = !isRecentCollapsed;
    setIsRecentCollapsed(newState);
    localStorage.setItem('recentUpdatesSidebarCollapsed', String(newState));
  };

  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedTiers, setSelectedTiers] = useState<Set<string>>(new Set());
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const [loadTimeout, setLoadTimeout] = useState<'slow' | 'failed' | null>(null);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('evidenceListSidebarCollapsed');
    return saved === 'true';
  });

  const handleToggleSidebar = () => {
    const newState = !isSidebarCollapsed;
    setIsSidebarCollapsed(newState);
    localStorage.setItem('evidenceListSidebarCollapsed', String(newState));
  };

  useEffect(() => {
    if (!loading) {
      setLoadTimeout(null);
      return;
    }
    const slowTimer = setTimeout(() => setLoadTimeout('slow'), 10000);
    const failTimer = setTimeout(() => setLoadTimeout('failed'), 30000);
    return () => {
      clearTimeout(slowTimer);
      clearTimeout(failTimer);
    };
  }, [loading]);

  const handleRetry = () => {
    setLoadTimeout(null);
    window.location.reload();
  };

  const documentTypes = useMemo(() => {
    const types = new Set<string>();
    documents.forEach(doc => types.add(doc.document_type));
    return Array.from(types).sort();
  }, [documents]);

  const verificationTiers = ['verified', 'open', 'corroborated', 'preliminary'];

  const topicTags = useMemo(() => {
    const tags = new Set<string>();
    documents.forEach(doc => {
      if (doc.topic_tags && Array.isArray(doc.topic_tags)) {
        doc.topic_tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    let filtered = [...documents];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        doc =>
          doc.title.toLowerCase().includes(term) ||
          doc.description?.toLowerCase().includes(term) ||
          doc.content?.toLowerCase().includes(term) ||
          doc.document_type.toLowerCase().includes(term)
      );
    }

    if (selectedTypes.size > 0) {
      filtered = filtered.filter(doc => selectedTypes.has(doc.document_type));
    }

    if (selectedTiers.size > 0) {
      filtered = filtered.filter(doc => selectedTiers.has(doc.verification_tier));
    }

    if (selectedTags.size > 0) {
      filtered = filtered.filter(doc =>
        doc.topic_tags && Array.isArray(doc.topic_tags) && doc.topic_tags.some(tag => selectedTags.has(tag))
      );
    }

    if (dateRange.start) {
      filtered = filtered.filter(
        doc => !doc.date_published || doc.date_published.split('T')[0] >= dateRange.start
      );
    }

    if (dateRange.end) {
      filtered = filtered.filter(
        doc => !doc.date_published || doc.date_published.split('T')[0] <= dateRange.end
      );
    }

    return filtered;
  }, [documents, searchTerm, selectedTypes, selectedTiers, selectedTags, dateRange]);

  const stats = useMemo(() => getArchiveStats(documents), [documents]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const handleTierChange = (tier: string) => {
    setSelectedTiers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tier)) {
        newSet.delete(tier);
      } else {
        newSet.add(tier);
      }
      return newSet;
    });
  };

  const handleClearAll = () => {
    setSelectedTypes(new Set());
    setSelectedTags(new Set());
    setSelectedTiers(new Set());
    setDateRange({ start: '', end: '' });
    setSearchTerm('');
  };

  const handleQuickPreset = (preset: string) => {
    handleClearAll();

    switch (preset) {
      case 'court-filings':
        setSelectedTypes(new Set(['DOJ/Legal', 'Court Filing']));
        break;
      case 'post-2020':
        setDateRange({ start: '2020-01-01', end: '' });
        break;
      case 'cross-referenced':
        setSelectedTiers(new Set(['verified', 'corroborated']));
        break;
    }
  };

  const handleBulkExport = () => {
    const exportData = {
      metadata: {
        export_date: new Date().toISOString(),
        total_items: filteredDocuments.length,
        filters_applied: {
          types: Array.from(selectedTypes),
          tiers: Array.from(selectedTiers),
          tags: Array.from(selectedTags),
          dateRange,
          searchTerm,
        },
      },
      documents: filteredDocuments,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evidence-archive-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-green-500">
        <Navigation />
        <div className="relative flex items-center justify-center bg-black" style={{ height: 'calc(100vh - 4rem)', marginTop: '4rem' }}>
          <MatrixRain />
          <div className="relative z-10 text-center">
            <div className="text-green-400 font-mono text-lg mb-2 animate-pulse">
              DECLASSIFYING...
            </div>
            <div className="text-green-500/50 font-mono text-sm mb-6">
              [LOADING EVIDENCE ITEMS]
            </div>
            {loadTimeout === 'failed' && (
              <div className="space-y-3">
                <div className="text-red-400 font-mono text-sm">Failed to load. Please try again.</div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30 font-mono text-xs rounded"
                  >
                    Retry
                  </button>
                  <a href="/" className="px-4 py-2 text-green-500/60 border border-green-500/20 hover:bg-green-500/10 font-mono text-xs rounded">
                    Go Home
                  </a>
                </div>
              </div>
            )}
            {loadTimeout === 'slow' && (
              <div className="space-y-3">
                <div className="text-yellow-400/80 font-mono text-xs">Loading is taking longer than expected.</div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30 font-mono text-xs rounded"
                  >
                    Retry
                  </button>
                  <a href="/" className="px-4 py-2 text-green-500/60 border border-green-500/20 hover:bg-green-500/10 font-mono text-xs rounded">
                    Go Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Evidence Archive"
        description="Searchable archive of declassified documents, court records, and verified evidence across government, corporate, intelligence, and historical research categories."
        url="https://redpillbiblio.wtf/evidence-list"
      />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Navigation />

      <FilterSidebar
        documentTypes={documentTypes}
        topicTags={topicTags}
        verificationTiers={verificationTiers}
        dateRange={dateRange}
        selectedTypes={selectedTypes}
        selectedTags={selectedTags}
        selectedTiers={selectedTiers}
        onTypeChange={handleTypeChange}
        onTagChange={handleTagChange}
        onTierChange={handleTierChange}
        onDateRangeChange={setDateRange}
        onClearAll={handleClearAll}
        onQuickPreset={handleQuickPreset}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />

      <div className={`flex h-screen pt-16 transition-all duration-300 ${isSidebarCollapsed ? 'md:pl-0' : 'md:pl-80'}`}>
        <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isRecentCollapsed ? '' : 'md:pr-56'}`}>
          <div className="container mx-auto px-4 md:px-6 py-6 pb-24 md:pb-6">
            <PageHeader
              title="&gt; EVIDENCE_ARCHIVE.db"
              description="Searchable database of documented evidence items with advanced filtering"
              icon={<FileArchive className="w-8 h-8" />}
              stats={[
                { label: 'TOTAL', value: `${stats.total} ITEMS` },
                { label: 'VERIFIED SOURCES', value: `${stats.verifiedPercent}%` },
                { label: 'SOURCED LINKS', value: stats.sourcedCount },
                { label: 'FILES ADDED IN LAST 7 DAYS', value: stats.newLast7Days },
              ]}
              actions={
                <Button
                  onClick={handleBulkExport}
                  size="sm"
                  className="bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30 font-mono text-xs"
                >
                  <Download className="w-3 h-3 mr-2" />
                  DOWNLOAD SNAPSHOT
                </Button>
              }
            />

            <FeaturedInvestigations />

            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500/50 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search documents by title, content, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black border-green-500/30 text-green-400 placeholder:text-green-500/30 focus:border-green-500 font-mono text-base min-h-[48px]"
              />
            </div>

            <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="text-green-500/70 font-mono text-sm">
                Showing {filteredDocuments.length} of {documents.length} items
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate('/evidence')}
                className="text-green-400 hover:text-green-300 hover:bg-green-500/10 font-mono text-xs min-h-[44px] px-4 py-3"
              >
                Switch to Network View
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredDocuments.map(doc => (
                <EvidenceCard
                  key={doc.id}
                  document={doc}
                  searchTerm={searchTerm}
                  onClick={() => navigate(`/evidence/${doc.slug}`)}
                />
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-20">
                <div className="text-green-500/50 font-mono text-lg mb-2">
                  NO ITEMS MATCH CURRENT FILTERS
                </div>
                <Button
                  variant="outline"
                  onClick={handleClearAll}
                  className="mt-4 border-green-500/50 text-green-400 hover:bg-green-500/10 font-mono"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            <div className="mt-12 p-6 bg-black border border-green-500/30 rounded-lg font-mono text-xs text-green-500/50 text-center">
              ALL ITEMS PULLED FROM PUBLIC RECORDS • LAST FULL SWEEP {new Date().toISOString().split('T')[0]} • NO SPECULATION
            </div>
          </div>
        </div>

        <div className={`hidden md:flex flex-col fixed right-0 top-16 bottom-0 bg-black border-l border-green-500/20 transition-all duration-300 z-20 ${isRecentCollapsed ? 'w-8' : 'w-56'}`}>
          <RecentUpdates
            lastVisit={lastVisit}
            isCollapsed={isRecentCollapsed}
            onToggle={handleToggleRecent}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
