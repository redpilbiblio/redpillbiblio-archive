import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col">
      <SEOHead
        title="404 — File Not Found"
        description="The file you requested has been redacted or does not exist in The Red Pill Bibliography archive."
        url="https://redpillbiblio.wtf/404"
      />

      <Navigation />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <pre className="text-green-500/60 text-xs sm:text-sm font-mono leading-tight mb-8 select-none">
{`  ┌─────────────────────┐
  │  ██████████████████  │
  │  █ ACCESS  DENIED █  │
  │  ██████████████████  │
  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
  │  ░░░ REDACTED ░░░░  │
  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
  └─────────────────────┘`}
          </pre>

          <h1 className="text-green-400 font-mono text-3xl sm:text-4xl font-bold mb-4 tracking-wide">
            &gt; ERROR_404.sys
          </h1>

          <p className="text-green-300/70 font-mono text-sm sm:text-base mb-2">
            The file you're looking for has been redacted.
          </p>
          <p className="text-green-500/40 font-mono text-xs mb-10">
            [STATUS: NOT_FOUND] — No matching record in the archive.
          </p>

          <button
            onClick={() => navigate('/')}
            className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/50 hover:border-green-500 font-mono text-sm px-8 py-3 rounded transition-all duration-200"
          >
            &gt; RETURN TO HOME
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
