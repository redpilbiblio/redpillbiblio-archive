import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SkipLink } from './components/SkipLink';
import { RouteAnnouncer } from './components/RouteAnnouncer';
import { BackToTop } from './components/BackToTop';

const Landing = lazy(() => import('./pages/Landing').then(m => ({ default: m.Landing })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const EvidenceBoard = lazy(() => import('./pages/EvidenceBoard').then(m => ({ default: m.EvidenceBoard })));
const EvidenceBoardList = lazy(() => import('./pages/EvidenceBoardList').then(m => ({ default: m.EvidenceBoardList })));
const DossierDetail = lazy(() => import('./pages/DossierDetail').then(m => ({ default: m.DossierDetail })));
const Timeline = lazy(() => import('./pages/Timeline').then(m => ({ default: m.Timeline })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Methodology = lazy(() => import('./pages/Methodology').then(m => ({ default: m.Methodology })));
const ConnectionMap = lazy(() => import('./pages/ConnectionMap'));
const Convictions = lazy(() => import('./pages/Convictions').then(m => ({ default: m.Convictions })));
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(m => ({ default: m.Sitemap })));
const TrackersLanding = lazy(() => import('./pages/TrackersLanding'));
const CongressTrades = lazy(() => import('./pages/CongressTrades'));
const InsiderTrades = lazy(() => import('./pages/InsiderTrades'));
const SuspiciousDeaths = lazy(() => import('./pages/SuspiciousDeaths'));
const AccidentsPage = lazy(() => import('./pages/AccidentsPage'));
const RevolvingDoor = lazy(() => import('./pages/RevolvingDoor'));
const Solutions = lazy(() => import('./pages/Solutions').then(m => ({ default: m.Solutions })));
const Transparency = lazy(() => import('./pages/Transparency').then(m => ({ default: m.Transparency })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const DMCA = lazy(() => import('./pages/DMCA').then(m => ({ default: m.DMCA })));
const Watchlist = lazy(() => import('./pages/Watchlist').then(m => ({ default: m.Watchlist })));
const SubcategoryReview = lazy(() => import('./pages/admin/SubcategoryReview').then(m => ({ default: m.SubcategoryReview })));
const SearchResults = lazy(() => import('./pages/SearchResults').then(m => ({ default: m.SearchResults })));
const PillarOverview = lazy(() => import('./pages/PillarOverview').then(m => ({ default: m.PillarOverview })));
const Changelog = lazy(() => import('./pages/Changelog').then(m => ({ default: m.Changelog })));
const Submit = lazy(() => import('./pages/Submit').then(m => ({ default: m.Submit })));
const FamiliesLanding = lazy(() => import('./pages/FamiliesLanding'));
const ClintonDynasty = lazy(() => import('./pages/ClintonDynasty'));
const TrumpDynasty = lazy(() => import('./pages/TrumpDynasty'));
const BushDynasty = lazy(() => import('./pages/BushDynasty').then(m => ({ default: m.BushDynasty })));
const ResearchWorkspace = lazy(() => import('./pages/ResearchWorkspace').then(m => ({ default: m.ResearchWorkspace })));
const TransparencyHub = lazy(() => import('./pages/TransparencyHub').then(m => ({ default: m.TransparencyHub })));
const GlobalArchives = lazy(() => import('./pages/GlobalArchives').then(m => ({ default: m.GlobalArchives })));
const DockingStation = lazy(() => import('./pages/DockingStation').then(m => ({ default: m.DockingStation })));
const NotFound = lazy(() => import('./components/NotFound').then(m => ({ default: m.NotFound })));

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

function AppInner() {
  return (
    <>
      <SkipLink />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/evidence" element={<EvidenceBoard />} />
          <Route path="/evidence-list" element={<EvidenceBoardList />} />
          <Route path="/evidence/:id" element={<DossierDetail />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/connections" element={<ConnectionMap />} />
          <Route path="/convictions" element={<Convictions />} />
          <Route path="/congress-trades" element={<Navigate to="/trackers#congress-trades" replace />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="/trackers" element={<TrackersLanding />} />
          <Route path="/trackers/congress-trades" element={<CongressTrades />} />
          <Route path="/trackers/insider-trades" element={<InsiderTrades />} />
          <Route path="/trackers/suspicious-deaths" element={<SuspiciousDeaths />} />
          <Route path="/trackers/accidents" element={<AccidentsPage />} />
          <Route path="/trackers/revolving-door" element={<RevolvingDoor />} />
          <Route path="/trackers/convictions" element={<Convictions />} />
          <Route path="/trackers/transparency-hub" element={<TransparencyHub />} />
          <Route path="/trackers/docking-station" element={<DockingStation />} />
          <Route path="/global-archives" element={<GlobalArchives />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/enemies" element={<Navigate to="/watchlist" replace />} />
          <Route path="/families" element={<FamiliesLanding />} />
          <Route path="/families/clinton" element={<ClintonDynasty />} />
          <Route path="/families/trump" element={<TrumpDynasty />} />
          <Route path="/families/bush" element={<BushDynasty />} />
          <Route path="/admin/subcategory-review" element={<SubcategoryReview />} />
          <Route path="/pillars/:slug" element={<PillarOverview />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/research" element={<ResearchWorkspace />} />
          <Route path="/network" element={<Navigate to="/research" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <RouteAnnouncer />
      <AppInner />
    </Router>
  );
}

export default App;
