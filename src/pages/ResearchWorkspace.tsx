import { useState } from 'react';
import { Navigation } from '../components/Navigation';
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
      <ResultsDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        corkboard={corkboard}
      />
      {!isDrawerOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background pt-16">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 rounded-md bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Open Research Board
          </button>
        </div>
      )}
    </>
  );
}
