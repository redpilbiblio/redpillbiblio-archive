import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MatrixRain } from '@/components/MatrixRain';
import { MobilePillButton } from '@/components/PillButton';
import { ThreeJSPills } from '@/components/ThreeJSPills';
import { TypewriterText } from '@/components/TypewriterText';
import { SEOHead } from '@/components/SEOHead';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { useLastVisit } from '@/hooks/useLastVisit';
import { useNewDocumentsCount } from '@/hooks/useSupabaseQuery';

export function Landing() {
  const navigate = useNavigate();
  const { lastVisit, isInitialized } = useLastVisit();
  const { data: newItemCount = 0 } = useNewDocumentsCount(isInitialized ? lastVisit : null);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [redHovered, setRedHovered] = useState(false);
  const [blueHovered, setBlueHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    if (motionQuery.matches) {
      setIsLoading(false);
      setShowContent(true);
      setShowTagline(true);
      setShowSubtitle(true);
    } else {
      setTimeout(() => setIsLoading(false), 1500);
      setTimeout(() => setShowContent(true), 1600);
      setTimeout(() => setShowTagline(true), 2800);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const handleRedPill = () => {
    navigate('/about');
  };

  const handleBluePill = () => {
    window.open('https://unglobalcompact.org/', '_blank', 'noopener,noreferrer');
  };

  const handleTypingComplete = () => {
    setTimeout(() => setShowSubtitle(true), 300);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-matrix">
      <Navigation />
      <SEOHead
        title="The Red Pill Bibliography — Primary Sources. Full Documents. You Decide."
        description="An open-source evidence library of declassified documents, court records, and verified primary sources documenting institutional corruption and accountability."
        url="https://redpillbiblio.wtf"
        noTitleSuffix
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'The Red Pill Bibliography',
          url: 'https://redpillbiblio.wtf',
          description: 'An open-source evidence library of declassified documents, court records, and verified primary sources documenting institutional corruption and accountability.',
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: 'https://redpillbiblio.wtf/search?q={search_term_string}' },
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      <MatrixRain />

      {isLoading && (
        <div className="fixed inset-0 bg-black z-50" />
      )}

      {newItemCount > 0 && showContent && (
        <div className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <Link
            to="/changelog"
            className="pointer-events-auto mt-2 inline-flex items-center gap-2 bg-black/90 border border-green-500/60 text-green-400 font-mono text-xs px-4 py-2 rounded backdrop-blur-sm hover:bg-green-500/10 hover:border-green-400 transition-all shadow-lg shadow-green-500/10"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            [ {newItemCount} NEW ITEM{newItemCount !== 1 ? 'S' : ''} SINCE YOUR LAST VISIT ]
          </Link>
        </div>
      )}

      {showContent && (
        <main id="main-content" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8 md:gap-12"
          >
            {showTagline && (
              <div className="text-center mb-4 md:mb-8">
                <h1 className="text-lg md:text-2xl lg:text-3xl text-[#00ff41] mb-4 md:mb-6">
                  <TypewriterText
                    text="The truth is documented. The evidence is waiting."
                    delay={50}
                    onComplete={handleTypingComplete}
                  />
                </h1>
              </div>
            )}

            {isMobile ? (
              <div className="w-full max-w-sm space-y-6">
                <MobilePillButton type="red" onClick={handleRedPill} />
                <MobilePillButton type="blue" onClick={handleBluePill} />
              </div>
            ) : (
              <div className="relative flex flex-col items-center">
                <ThreeJSPills
                  onRedClick={handleRedPill}
                  onBlueClick={handleBluePill}
                  redHovered={redHovered}
                  blueHovered={blueHovered}
                  onRedHover={setRedHovered}
                  onBlueHover={setBlueHovered}
                  prefersReducedMotion={prefersReducedMotion}
                />
                {(redHovered || blueHovered) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 whitespace-nowrap font-matrix text-sm md:text-base"
                    style={{ color: redHovered ? '#ff1744' : '#2979ff' }}
                  >
                    {redHovered ? 'See how deep it goes \u2192' : 'Go back to sleep \u2192'}
                  </motion.div>
                )}
              </div>
            )}

            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-base md:text-xl lg:text-2xl text-[#00ff41] text-center mt-4 md:mt-8"
              >
                What do you want to believe?
              </motion.p>
            )}
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-8 left-0 right-0 text-center px-4"
          >
            <p className="text-[#00ff41] opacity-50 text-xs md:text-sm mb-3">
              RedPillBiblio.wtf — Primary Sources. Full Documents. You Decide.
            </p>
            <div className="flex justify-center gap-4 md:gap-6 text-[#00ff41] opacity-50 text-xs md:text-sm">
              <Link
                to="/about"
                className="hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                About
              </Link>
              <Link
                to="/methodology"
                className="hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                Methodology
              </Link>
              <Link
                to="/contact"
                className="hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                Contact
              </Link>
            </div>
          </motion.footer>
        </main>
      )}

      <Footer />
    </div>
  );
}
