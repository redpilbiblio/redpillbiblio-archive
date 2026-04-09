import { useState, useMemo, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, LayoutGrid, LayoutList, Download, X } from 'lucide-react';
import archiveData from '@/data/archive-2026-batch.json';

interface ArchiveItem {
  title: string;
  verification_status: string;
  summary: string;
  event_date: string;
  categories: string[];
  tags: string[];
  document_url: string | null;
  original_id: string;
}

type ViewMode = 'card' | 'table';
type SortOption = 'newest' | 'oldest' | 'title';

export function Archive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    status: false,
    tags: false,
    date: false,
  });

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    archiveData.forEach(item => {
      item.categories.forEach(cat => cats.add(cat));
    });
    return Array.from(cats).sort();
  }, []);

  const allStatuses = useMemo(() => {
    const statuses = new Set<string>();
    archiveData.forEach(item => statuses.add(item.verification_status));
    return Array.from(statuses).sort();
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    archiveData.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredItems = useMemo(() => {
    let filtered = archiveData as ArchiveItem[];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term)
      );
    }

    if (selectedCategories.size > 0) {
      filtered = filtered.filter(item =>
        item.categories.some(cat => selectedCategories.has(cat))
      );
    }

    if (selectedStatuses.size > 0) {
      filtered = filtered.filter(item =>
        selectedStatuses.has(item.verification_status)
      );
    }

    if (selectedTags.size > 0) {
      filtered = filtered.filter(item =>
        item.tags.some(tag => selectedTags.has(tag))
      );
    }

    if (dateRange.start) {
      filtered = filtered.filter(item => item.event_date >= dateRange.start);
    }

    if (dateRange.end) {
      filtered = filtered.filter(item => item.event_date <= dateRange.end);
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedStatuses, selectedTags, dateRange]);

  const sortedItems = useMemo(() => {
    const sorted = [...filteredItems];
    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime());
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  }, [filteredItems, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => {
      const next = new Set(prev);
      if (next.has(status)) next.delete(status);
      else next.add(status);
      return next;
    });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategories(new Set());
    setSelectedStatuses(new Set());
    setSelectedTags(new Set());
    setDateRange({ start: '', end: '' });
  };

  const hasActiveFilters =
    searchTerm ||
    selectedCategories.size > 0 ||
    selectedStatuses.size > 0 ||
    selectedTags.size > 0 ||
    dateRange.start ||
    dateRange.end;

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Verified': 'bg-green-500/20 text-green-300 border-green-500/50',
    };
    return colors[status] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navigation />
      <PageHeader title="Evidence Archive" subtitle="Comprehensive primary-source bibliography of government, court, and corporate documentation" />

      <main className="min-h-screen bg-black text-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Section */}
          <div className="mb-8 p-4 border border-gray-800 rounded-lg bg-gray-950">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-gray-400 text-sm">Total Items</p>
                <p className="text-2xl font-bold text-green-400">{archiveData.length}</p>
              </div>
              <div className="h-8 w-px bg-gray-800" />
              <div>
                <p className="text-gray-400 text-sm">Showing Results</p>
                <p className="text-2xl font-bold text-green-400">{sortedItems.length}</p>
              </div>
              <div className="h-8 w-px bg-gray-800" />
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold text-green-400">{allCategories.length}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <Input
                    placeholder="Search title or summary..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-950 border-gray-700 text-gray-100 h-10"
                  />
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortOption)}
                    className="w-full bg-gray-950 border border-gray-700 rounded px-3 py-2 text-sm text-gray-100"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">View</label>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setViewMode('card')}
                      variant={viewMode === 'card' ? 'default' : 'outline'}
                      size="sm"
                      className="flex-1"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => setViewMode('table')}
                      variant={viewMode === 'table' ? 'default' : 'outline'}
                      size="sm"
                      className="flex-1"
                    >
                      <LayoutList className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Category Filter */}
                <FilterSection
                  title="Category"
                  expanded={expandedFilters.category}
                  onToggle={() => setExpandedFilters(prev => ({ ...prev, category: !prev.category }))}
                  items={allCategories}
                  selected={selectedCategories}
                  onToggle={toggleCategory}
                />

                {/* Status Filter */}
                <FilterSection
                  title="Verification Status"
                  expanded={expandedFilters.status}
                  onToggle={() => setExpandedFilters(prev => ({ ...prev, status: !prev.status }))}
                  items={allStatuses}
                  selected={selectedStatuses}
                  onToggle={toggleStatus}
                />

                {/* Tags Filter */}
                <FilterSection
                  title="Tags"
                  expanded={expandedFilters.tags}
                  onToggle={() => setExpandedFilters(prev => ({ ...prev, tags: !prev.tags }))}
                  items={allTags.slice(0, 15)}
                  selected={selectedTags}
                  onToggle={toggleTag}
                />

                {/* Date Range */}
                <div className="border border-gray-700 rounded-lg p-3">
                  <button
                    onClick={() => setExpandedFilters(prev => ({ ...prev, date: !prev.date }))}
                    className="w-full flex items-center justify-between mb-3"
                  >
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date Range</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters.date ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFilters.date && (
                    <div className="space-y-2">
                      <input
                        type="date"
                        value={dateRange.start}
                        onChange={e => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                        className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs text-gray-100"
                      />
                      <input
                        type="date"
                        value={dateRange.end}
                        onChange={e => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                        className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs text-gray-100"
                      />
                    </div>
                  )}
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {sortedItems.length === 0 ? (
                <div className="text-center py-12 border border-gray-800 rounded-lg bg-gray-950">
                  <p className="text-gray-400">No items match your filters.</p>
                </div>
              ) : viewMode === 'card' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sortedItems.map(item => (
                    <ArchiveCard key={item.original_id} item={item} statusColor={getStatusColor} formatDate={formatDate} />
                  ))}
                </div>
              ) : (
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800 bg-gray-950">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400">Title</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400">Date</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedItems.map(item => (
                        <tr key={item.original_id} className="border-b border-gray-900 hover:bg-gray-950/50 transition-colors">
                          <td className="px-4 py-3">
                            <p className="text-gray-200 font-medium line-clamp-1">{item.title}</p>
                            <p className="text-gray-500 text-xs line-clamp-1 mt-1">{item.summary}</p>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className={getStatusColor(item.verification_status)}>
                              {item.verification_status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{formatDate(item.event_date)}</td>
                          <td className="px-4 py-3 text-right">
                            {item.document_url && (
                              <a
                                href={item.document_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 text-xs font-semibold"
                              >
                                View
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

interface FilterSectionProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  items: string[];
  selected: Set<string>;
  onToggle: (item: string) => void;
}

function FilterSection({ title, expanded, onToggle, items, selected, onToggle: itemToggle }: FilterSectionProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-3"
      >
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {items.map(item => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.has(item)}
                onChange={() => itemToggle(item)}
                className="w-4 h-4 rounded border-gray-600 bg-gray-900 cursor-pointer"
              />
              <span className="text-xs text-gray-300">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

interface ArchiveCardProps {
  item: ArchiveItem;
  statusColor: (status: string) => string;
  formatDate: (date: string) => string;
}

function ArchiveCard({ item, statusColor, formatDate }: ArchiveCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-4 bg-gray-950 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-semibold text-gray-100 line-clamp-2 flex-1">{item.title}</h3>
        <Badge variant="outline" className={`shrink-0 text-xs ${statusColor(item.verification_status)}`}>
          {item.verification_status}
        </Badge>
      </div>

      <p className="text-xs text-gray-400 line-clamp-3 mb-3">{item.summary}</p>

      <div className="mb-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {item.categories.slice(0, 2).map(cat => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
          {item.categories.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{item.categories.length - 2}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-block px-2 py-1 text-xs bg-gray-900 text-gray-300 rounded border border-gray-700">
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded border border-gray-700">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <span className="text-xs text-gray-500">{formatDate(item.event_date)}</span>
        {item.document_url && (
          <a
            href={item.document_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-green-400 hover:text-green-300 transition-colors"
          >
            View Document
          </a>
        )}
      </div>
    </div>
  );
}
