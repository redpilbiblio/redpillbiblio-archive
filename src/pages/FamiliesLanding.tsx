import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { DynastyModule } from '../components/families/DynastyModule';
import { dynastiesIndex } from '../data/dynasties_index';

type SortKey = 'WEALTH' | 'ERA' | 'NAME';
type FilterCategory = 'ALL' | 'HISTORICAL' | 'INDUSTRIAL' | 'SOVEREIGN' | 'CORPORATE';

const FILTER_COLORS: Record<FilterCategory, string> = {
  ALL: '#fff',
  HISTORICAL: '#C9A84C',
  INDUSTRIAL: '#00ff41',
  SOVEREIGN: '#00D4FF',
  CORPORATE: '#A855F7',
};

export default function FamiliesLanding() {
  const [activeDynasty, setActiveDynasty] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const [activeSort, setActiveSort] = useState<SortKey>('WEALTH');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const matched = dynastiesIndex.find(d => d.id === hash);
      if (matched) {
        setActiveDynasty(hash);
        setTimeout(() => {
          document.getElementById(`dynasty-${hash}`)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  const filters: { label: FilterCategory; color: string }[] = [
    { label: 'ALL', color: FILTER_COLORS.ALL },
    { label: 'HISTORICAL', color: FILTER_COLORS.HISTORICAL },
    { label: 'INDUSTRIAL', color: FILTER_COLORS.INDUSTRIAL },
    { label: 'SOVEREIGN', color: FILTER_COLORS.SOVEREIGN },
    { label: 'CORPORATE', color: FILTER_COLORS.CORPORATE },
  ];

  const sorts: SortKey[] = ['WEALTH', 'ERA', 'NAME'];

  const filteredDynasties = dynastiesIndex.filter(d => {
    const matchesFilter = activeFilter === 'ALL' || d.category === activeFilter;
    const matchesSearch = !searchQuery || d.title.toLowerCase().includes(searchQuery.toLowerCase()) || d.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column' }}>
      <Navigation />

      <main
        id="main-content"
        tabIndex={-1}
        style={{ flex: 1, paddingTop: '7.5rem', paddingBottom: '4rem' }}
      >
        {/* Page Header */}
        <div style={{ padding: '2rem 1.5rem 0', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00ff41',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            margin: '0 0 0.5rem 0',
          }}>
            {'>'} DYNASTY_INDEX.db
          </h1>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(0, 255, 65, 0.6)',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            marginBottom: '2rem',
            margin: '0 0 2rem 0',
          }}>
            Blood, money, and power — mapped across generations. Follow the lineage.
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          padding: '0 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto 2.5rem',
        }}>
          {[
            { value: '9', label: 'DYNASTIES INDEXED', isLive: false },
            { value: '182', label: 'SOURCE DOCUMENTS', isLive: false },
            { value: '● LIVE', label: 'RESEARCH ACTIVE', isLive: true },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#111',
              border: '1px solid #1a1a1a',
              borderLeft: '3px solid #00ff41',
              padding: '0.75rem 1.25rem',
              flex: '1',
              minWidth: '120px',
            }}>
              <div style={{
                color: item.isLive ? '#00ff41' : '#ff6b35',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {item.value}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
                textTransform: 'uppercase' as const,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter & Sort Controls */}
        <div style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto 1.5rem' }}>
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter.label;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    border: `1px solid ${isActive ? filter.color : '#333'}`,
                    color: filter.color,
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: filter.color,
                    display: 'inline-block',
                    flexShrink: 0,
                  }} />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search dynasties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: '#111',
                border: '1px solid #1a1a1a',
                color: '#e8e8e8',
                padding: '0.6rem 1rem 0.6rem 2.25rem',
                borderRadius: '0.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box' as const,
              }}
            />
          </div>

          {/* Sort toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <span style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
            }}>
              SORT:
            </span>
            {sorts.map((sort) => {
              const isActive = activeSort === sort;
              return (
                <button
                  key={sort}
                  onClick={() => setActiveSort(sort)}
                  style={{
                    background: isActive ? 'rgba(0,255,65,0.1)' : 'transparent',
                    border: `1px solid ${isActive ? '#00ff41' : '#333'}`,
                    color: isActive ? '#00ff41' : '#666',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {sort}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynasty Accordion List */}
        <div style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredDynasties.length === 0 ? (
            <div style={{
              textAlign: 'center' as const,
              padding: '3rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.85rem',
            }}>
              No dynasties match your current filters.
            </div>
          ) : (
            filteredDynasties.map((dynasty) => (
              <DynastyModule
                key={dynasty.id}
                dynasty={dynasty}
                isOpen={activeDynasty === dynasty.id}
                onToggle={() => setActiveDynasty(activeDynasty === dynasty.id ? null : dynasty.id)}
              />
            ))
          )}
        </div>

        {/* Coming Soon Teaser */}
        <div style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '2rem auto 0' }}>
          <div style={{
            background: '#0d0d0d',
            border: '1px dashed #1a1a1a',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            textAlign: 'center' as const,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.75rem',
              marginBottom: '0.5rem',
            }}>
              ◆ NEXT IN QUEUE
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255,255,255,0.2)',
              fontSize: '0.7rem',
              lineHeight: '1.8',
            }}>
              Vanderbilt · Astor · Al Nahyan · Al Saud · Al Thani · Ambani · Carnegie · Getty · Du Pont
            </div>
          </div>
        </div>
      </main>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
