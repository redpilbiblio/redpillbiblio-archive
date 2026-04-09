import { lazy, Suspense } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DynastyMeta } from '../../data/dynasties_index';

const MediciContent = lazy(() =>
  import('./MediciContent').then(m => ({ default: m.MediciContent }))
);

const RothschildContent = lazy(() =>
  import('./RothschildContent').then(m => ({ default: m.RothschildContent }))
);

const RockefellerContent = lazy(() =>
  import('./RockefellerContent').then(m => ({ default: m.RockefellerContent }))
);

const WaltonContent = lazy(() =>
  import('./WaltonContent').then(m => ({ default: m.WaltonContent }))
);

const KochContent = lazy(() =>
  import('./KochContent').then(m => ({ default: m.KochContent }))
);

const ClintonContent = lazy(() =>
  import('../../pages/ClintonDynasty').then(m => ({ default: m.ClintonDynasty }))
);

const TrumpContent = lazy(() =>
  import('../../pages/TrumpDynasty').then(m => ({ default: m.TrumpDynasty }))
);

const BushContent = lazy(() =>
  import('./BushContent').then(m => ({ default: m.BushContent }))
);

function DynastyLoader({ accentColor }: { accentColor: string }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' as const }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: accentColor,
        fontSize: '0.8rem',
        animation: 'pulse 1.5s infinite',
      }}>
        Loading dynasty data...
      </div>
    </div>
  );
}

interface DynastyModuleProps {
  dynasty: DynastyMeta;
  isOpen: boolean;
  onToggle: () => void;
}

export function DynastyModule({ dynasty, isOpen, onToggle }: DynastyModuleProps) {
  return (
    <div
      id={`dynasty-${dynasty.id}`}
      style={{ scrollMarginTop: '5rem', marginBottom: '1rem' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          textAlign: 'left' as const,
          background: '#111',
          border: `1px solid ${isOpen ? dynasty.accentColor : '#1a1a1a'}`,
          borderTop: `2px solid ${dynasty.accentColor}`,
          borderRadius: isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem',
          padding: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 15px ${dynasty.accentColor}1a`; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: dynasty.accentColor, fontSize: '0.75rem' }}>
            {'>'} DYNASTY_{dynasty.id.toUpperCase()}.db
          </span>
          <span style={{ fontSize: '1.5rem' }}>{dynasty.icon}</span>
        </div>

        <h3 style={{
          fontFamily: "'Literata', serif",
          color: '#fff',
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '0.25rem',
          margin: '0 0 0.25rem 0',
        }}>
          {dynasty.title}
        </h3>

        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.75rem',
          marginBottom: '1rem',
          margin: '0 0 1rem 0',
        }}>
          {dynasty.tagline}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
              {dynasty.era}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
              {dynasty.region}
            </span>
            <span style={{
              background: 'rgba(0,0,0,0.4)',
              border: `1px solid ${dynasty.accentColor}44`,
              borderRadius: '3px',
              padding: '0.1rem 0.4rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: dynasty.accentColor,
              fontSize: '0.6rem',
            }}>
              {dynasty.category}
            </span>
          </div>
          {isOpen
            ? <ChevronUp size={16} style={{ color: dynasty.accentColor, flexShrink: 0 }} />
            : <ChevronDown size={16} style={{ color: dynasty.accentColor, flexShrink: 0 }} />
          }
        </div>
      </button>

      {isOpen && (
        <div style={{
          background: '#0a0a0a',
          border: `1px solid ${dynasty.accentColor}`,
          borderTop: 'none',
          borderRadius: '0 0 0.5rem 0.5rem',
          padding: '1.5rem',
        }}>
          <Suspense fallback={<DynastyLoader accentColor={dynasty.accentColor} />}>
            {dynasty.id === 'medici' && <MediciContent />}
            {dynasty.id === 'rothschild' && <RothschildContent />}
            {dynasty.id === 'rockefeller' && <RockefellerContent />}
            {dynasty.id === 'walton' && <WaltonContent />}
            {dynasty.id === 'koch' && <KochContent />}
            {dynasty.id === 'clinton' && <ClintonContent />}
            {dynasty.id === 'trump' && <TrumpContent />}
            {dynasty.id === 'bush' && <BushContent />}
          </Suspense>
        </div>
      )}
    </div>
  );
}
