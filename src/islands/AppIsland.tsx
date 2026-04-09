import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SkipLink } from '@/components/SkipLink';
import { BackToTop } from '@/components/BackToTop';

const EvidenceBoard = lazy(() => import('@/pages/EvidenceBoard').then(m => ({ default: m.EvidenceBoard })));
const DossierDetail = lazy(() => import('@/pages/DossierDetail').then(m => ({ default: m.DossierDetail })));
const Timeline = lazy(() => import('@/pages/Timeline').then(m => ({ default: m.Timeline })));
const ConnectionMap = lazy(() => import('@/pages/ConnectionMap'));
const CongressTrades = lazy(() => import('@/pages/CongressTrades'));
const InsiderTrades = lazy(() => import('@/pages/InsiderTrades'));
const SuspiciousDeaths = lazy(() => import('@/pages/SuspiciousDeaths'));
const AccidentsPage = lazy(() => import('@/pages/AccidentsPage'));
const RevolvingDoor = lazy(() => import('@/pages/RevolvingDoor'));
const Sitemap = lazy(() => import('@/pages/Sitemap').then(m => ({ default: m.Sitemap })));

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#00ff41] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-[#a0a0a0] font-mono text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function AppIsland() {
  return (
    <Router>
      <HelmetProvider>
        <SkipLink />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/evidence" element={<EvidenceBoard />} />
            <Route path="/evidence/:id" element={<DossierDetail />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/connections" element={<ConnectionMap />} />
            <Route path="/congress-trades" element={<CongressTrades />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="/trackers/congress-trades" element={<CongressTrades />} />
            <Route path="/trackers/insider-trades" element={<InsiderTrades />} />
            <Route path="/trackers/suspicious-deaths" element={<SuspiciousDeaths />} />
            <Route path="/trackers/accidents" element={<AccidentsPage />} />
            <Route path="/trackers/revolving-door" element={<RevolvingDoor />} />
          </Routes>
        </Suspense>
        <BackToTop />
      </HelmetProvider>
    </Router>
  );
}
