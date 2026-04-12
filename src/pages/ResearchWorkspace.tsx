import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ResultsDrawer } from '../components/research/ResultsDrawer';
import { SEOHead } from '../components/SEOHead';
import { useCorkboardPins } from '../hooks/useCorkboardPins';

export function ResearchWorkspace() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const corkboard = useCorkboardPins();

  return (
    <>
      <SEOHead
        title="Research Board"
        description="Interactive research workspace for exploring evidence, connections, and analysis across investigations."
        canonical="/research"
      />
      <Navigation />
      <div className="pt-16 min-h-screen bg-background">
        <ResultsDrawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          corkboard={corkboard}
        />
        {!isDrawerOpen && (
          <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-4 py-2 rounded-md bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Open Research Board
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
