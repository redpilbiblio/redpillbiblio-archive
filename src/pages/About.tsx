import { Navigation } from '@/components/Navigation';
import { PageHeader } from '@/components/PageHeader';
import { SEOHead } from '@/components/SEOHead';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, FileText, Scale, Globe, DollarSign, Shield, Baby, Eye, Zap, Target, ChartBar as BarChart3, Trees, ArrowRight } from 'lucide-react';
import { getArchiveStats } from '@/lib/archiveStats';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { parseUTCYear } from '@/lib/utils';
import { useDocuments } from '@/hooks/useSupabaseQuery';

export function About() {
  const navigate = useNavigate();
  const { data: documents = [], isLoading: loading } = useDocuments();

  const stats = getArchiveStats(documents);

  const additionalStats = {
    pillarsCount: 10,
    documentTypes: new Set(documents.map(d => d.document_type)).size,
    earliestYear: documents.length > 0
      ? Math.min(...documents.map(d => parseUTCYear(d.date_published) ?? 2026))
      : 2026,
    yearsCovered: documents.length > 0
      ? 2026 - Math.min(...documents.map(d => parseUTCYear(d.date_published) ?? 2026))
      : 0,
  };

  const pillars = [
    { name: 'Elections & Governance', icon: Scale, description: 'Voting systems, campaign finance, election integrity', slug: 'elections-government' },
    { name: 'Financial Systems', icon: DollarSign, description: 'Banking, corporate influence, economic manipulation', slug: 'financial-systems' },
    { name: 'War & Intelligence', icon: Shield, description: 'Military operations, covert programs, defense spending', slug: 'military-covert-ops' },
    { name: 'Media Manipulation', icon: Target, description: 'Propaganda, narrative control, corporate media influence', slug: 'media-manipulation' },
    { name: 'Energy & Technology', icon: Zap, description: 'Suppressed innovation, patent secrecy, energy policy', slug: 'suppressed-technology' },
    { name: 'Health Transparency', icon: FileText, description: 'Pharmaceutical influence, medical research, public health', slug: 'health-transparency' },
    { name: 'Child Safety & Human Trafficking', icon: Baby, description: 'Trafficking networks, institutional abuse, protection failures', slug: 'trafficking-networks' },
    { name: 'Space & Black Budget', icon: Globe, description: 'Classified programs, unaccounted spending, secret projects', slug: 'black-budget' },
    { name: 'AI & Surveillance', icon: Eye, description: 'Digital monitoring, algorithmic control, privacy erosion', slug: 'surveillance-state' },
    { name: 'Environmental & Corporate Accountability', icon: Trees, description: 'Documented cases of corporate environmental destruction, industrial poisoning, and regulatory capture', slug: 'environmental-crimes' },
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="About"
        description="What The Red Pill Bibliography is, how it works, and why every claim links to a primary source. An evidence library built on declassified files and court records."
        url="https://redpillbiblio.wtf/about"
      />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 pointer-events-none" />

      <Navigation />

      <main id="main-content" tabIndex={-1} className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-5xl relative z-10">
        <PageHeader
          title="&gt; ABOUT.md"
          description="What this archive is, how it works, and what you'll find inside"
          icon={<BookOpen className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-6 max-w-3xl mx-auto text-center">
              <p className="text-green-300/90 text-lg leading-relaxed italic">
                You found this site because something inside you already knows.
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mx-auto" />

              <p className="text-green-300/90 text-base leading-[1.8]">
                You know that the world you were taught to accept — the one where everything important is "too complicated" for regular people to understand, where the systems that govern your money, your health, your food, your children's future are explained away as "just the way things are" — that world is a construction. Built by people. Maintained by silence. And protected by your fear of looking too closely.
              </p>
              <p className="text-green-300 text-lg leading-relaxed font-semibold">
                We built The Red Pill Bibliography because we believe you deserve better than fear.
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mx-auto" />

              <p className="text-green-300/90 text-base leading-[1.8]">
                This is not a conspiracy site. <span className="text-green-400 font-semibold">This is a library.</span> Every item in this collection is sourced, cited, and documented — drawn from declassified government files, peer-reviewed research, court records, congressional testimony, corporate filings, and investigative journalism from the most respected institutions on earth. These are not theories. <span className="text-green-400 font-semibold">These are receipts.</span>
              </p>
              <p className="text-green-300/90 text-base leading-[1.8]">
                For generations, we have been told — by our teachers, our parents, our employers, our media — that the machinery behind our world is "not worth your time," "above your pay grade," or "too complicated to explain." That was never true. It was a way to keep you quiet. The truth was always there. It was just never organized in one place, in plain language, for everyday people.
              </p>
              <p
                className="text-green-300 text-2xl leading-relaxed font-bold font-mono py-4"
                style={{ letterSpacing: '0.05em' }}
              >
                Until now.
              </p>
              <p className="text-green-300/90 text-base leading-[1.8]">
                We believe something about human beings that the powerful have always feared: that when ordinary people have access to the same information as the powerful, they make extraordinary decisions. We believe that knowledge is not a luxury for the educated — it is a <span className="text-green-400 font-semibold">birthright of every living soul</span>. We believe that the version of you that reads this entire site — the version that finally sees the full picture — is more powerful than any institution, any corporation, any government on this earth.
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent mx-auto my-2" />

              <p className="text-green-300/80 text-base leading-[1.8] italic">
                And we believe something else. Something older than politics, older than money, older than every empire that ever rose and fell.
              </p>
              <p className="text-green-300/90 text-base leading-[1.8]">
                We believe the human heart generates an electromagnetic field that extends beyond the body. Science has measured it. We believe the pineal gland — the "third eye" that ancient civilizations revered — produces a flash of light at the moment of birth and the moment of death, as if the body itself knows it is arriving from somewhere and returning to somewhere. We believe that what we call "consciousness" is not a metaphor. It is energy. And that energy does not operate in isolation.
              </p>

              <div className="py-3">
                <p className="text-green-400 text-lg leading-relaxed font-semibold tracking-wide">
                  You are not a single signal. You are a node in a network.
                </p>
              </div>

              <p className="text-green-300/90 text-base leading-[1.8]">
                Every person you love amplifies your frequency. Every truth you share strengthens the field. Every act of courage — every moment you choose knowledge over comfort, empathy over indifference, love over fear — raises the collective signal of every human being alive. This is not poetry. This is physics. We are electromagnetic beings living in an electromagnetic universe, and the only force strong enough to overcome the machinery of control is the accumulated energy of people who refuse to look away.
              </p>

              <div className="py-2">
                <p className="text-green-300 text-xl leading-relaxed font-bold">
                  Humanity is not doomed. Humanity is asleep.
                </p>
              </div>

              <p className="text-green-300/90 text-base leading-[1.8]">
                And every single person who enters this site and reads with an open heart is another soul waking up.
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mx-auto" />

              <p className="text-green-300/90 text-base leading-[1.8]">
                We don't ask you to believe everything you read here. We ask you to <span className="text-green-400 font-semibold">read it — and then decide for yourself</span>. That's all we've ever asked. That's all the powerful have ever been afraid of.
              </p>
              <p className="text-green-300/90 text-base leading-[1.8]">
                If you believe that humanity has a chance — not because governments will save us, not because technology will save us, but because enough of us choosing love over hate, truth over comfort, and each other over ourselves will save us — then this site was built for you.
              </p>

              <div className="py-4">
                <p
                  className="text-xl font-bold font-mono"
                  style={{
                    color: '#ff2a2a',
                    textShadow: '0 0 8px #ff2a2a, 0 0 16px #ff0000, 0 0 32px #ff0000, 0 0 4px #ffd700, 0 0 60px #ffd70055, 0 0 2px #fff8',
                    filter: 'drop-shadow(0 0 6px #ffd700aa)',
                  }}
                >
                  Welcome to The Red Pill Bibliography.
                </p>
              </div>

              <p className="text-green-400 text-lg font-mono">
                PLUG INTO LOVE AND DROP OUT OF HATE.<br/>
                LET KNOWLEDGE IN — AND RADIATE. ✦
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-green-500/20 max-w-3xl mx-auto">
              <h3 className="text-green-400 font-mono text-base font-bold text-center mb-6">HOW TO USE THIS SITE</h3>
              <div className="space-y-5">
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5 text-center hover:border-green-500/40 transition-colors">
                  <p className="text-green-400 font-semibold text-sm mb-2">Start with what resonates.</p>
                  <p className="text-green-300/80 text-sm leading-relaxed">
                    Every Pillar on this site is its own rabbit hole. Follow your intuition. If something feels important, read deeper. Every claim is sourced. Every document is linked. Trust yourself to verify.
                  </p>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5 text-center hover:border-green-500/40 transition-colors">
                  <p className="text-green-400 font-semibold text-sm mb-2">Share what you find.</p>
                  <p className="text-green-300/80 text-sm leading-relaxed">
                    The most powerful thing you can do is show someone else a primary source they've never seen. Not to argue. Not to prove you're right. Just to say: "Here's what I found. What do you think?"
                  </p>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5 text-center hover:border-green-500/40 transition-colors">
                  <p className="text-green-400 font-semibold text-sm mb-2">Contribute if you can.</p>
                  <p className="text-green-300/80 text-sm leading-relaxed">
                    If you find something we missed — a document, a connection, a source that deserves to be here — reach out through the Contact page. This library grows stronger with every person who adds to it.
                  </p>
                  <Link
                    to="/submit"
                    className="inline-flex items-center gap-2 mt-3 text-green-400 hover:text-green-300 text-sm font-mono font-semibold transition-colors"
                  >
                    Submit Evidence
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-green-400 font-mono text-sm font-semibold text-center pt-2">
                  Knowledge is infrastructure. Let's build it together.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  WHAT THIS IS NOT
                </h2>
                <p className="text-green-300/80 text-sm leading-relaxed">
                  This is not a conspiracy theory website. Every item in this archive links to its original source. Items are classified by verification tier and subject to ongoing review. We explicitly exclude unverified social media posts, anonymous claims without corroboration, opinion pieces, and fabricated materials.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-3">
                  WHAT YOU'LL FIND INSIDE
                </h2>
                <p className="text-green-300/70 text-sm mb-4">
                  Evidence organized across 9 thematic pillars:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-0 md:ml-9">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Link
                    key={pillar.name}
                    to={`/pillars/${pillar.slug}`}
                    className="bg-black border border-green-500/30 rounded p-3 hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
                  >
                    <div className="flex items-start gap-2">
                      <Icon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-green-400 font-mono text-xs font-bold mb-1 flex items-center justify-between">
                          {pillar.name}
                          <ArrowRight className="w-3 h-3 text-green-500/30 group-hover:text-green-400 transition-colors" />
                        </div>
                        <div className="text-green-300/60 text-xs">
                          {pillar.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-3">
                  BY THE NUMBERS
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-0 md:ml-9">
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : stats.total}</div>
                <div className="text-green-300/60 text-xs font-mono">ITEMS</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : `${stats.verifiedPercent}%`}</div>
                <div className="text-green-300/60 text-xs font-mono">VERIFIED SOURCES</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : stats.sourcedCount}</div>
                <div className="text-green-300/60 text-xs font-mono">WITH SOURCE LINKS</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">3</div>
                <div className="text-green-300/60 text-xs font-mono">VERIFICATION TIERS</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : additionalStats.pillarsCount}</div>
                <div className="text-green-300/60 text-xs font-mono">PILLARS</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : additionalStats.yearsCovered}</div>
                <div className="text-green-300/60 text-xs font-mono">YEARS OF HISTORY</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">180</div>
                <div className="text-green-300/60 text-xs font-mono">CONVICTIONS TRACKED</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-400 font-mono mb-1">{loading ? '...' : additionalStats.documentTypes}</div>
                <div className="text-green-300/60 text-xs font-mono">DOCUMENT TYPES</div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  VERIFICATION STANDARDS
                </h2>
                <div className="text-green-300/80 text-sm leading-relaxed mb-3">
                  Every item is classified by source authenticity:{' '}
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono text-xs mx-1">
                    VERIFIED
                  </Badge>{' '}
                  for primary sources,{' '}
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 font-mono text-xs mx-1">
                    VALID
                  </Badge>{' '}
                  for independently verified secondary sources, and{' '}
                  <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/50 font-mono text-xs mx-1">
                    PRELIMINARY
                  </Badge>{' '}
                  for emerging evidence under review.
                </div>
                <button
                  onClick={() => navigate('/methodology')}
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Read full methodology →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  HOW THIS IS FUNDED
                </h2>
                <div className="text-green-300/80 text-sm leading-relaxed space-y-4">
                  <p className="font-semibold text-green-400">Short answer: We're not.</p>

                  <p>
                    Longer answer: This site runs on love, caffeine, stubborn idealism, and the kind of energy that keeps you up at 3 AM reading declassified documents because you felt something and couldn't stop pulling the thread.
                  </p>

                  <p>
                    There is no corporation behind this. No grant. No think tank. No billionaire with an agenda and a tax write-off. No algorithm deciding what you see based on who paid the most. The Red Pill Bibliography is funded the same way every dangerous idea in history has been funded — by people who couldn't afford not to do it.
                  </p>

                  <div className="pl-4 border-l-2 border-green-500/30 space-y-1 my-3">
                    <p>We are funded by time we could have spent elsewhere.</p>
                    <p>By weekends that disappeared into congressional testimony.</p>
                    <p>By phone batteries drained reading FOIA documents on the bus.</p>
                    <p>By the ancient and sacred currency of giving a damn.</p>
                  </div>

                  <p>
                    If you want to know who our investors are — look in the mirror. Every person who reads this site, shares an item, sends a link to someone they love, or sits with an uncomfortable truth long enough to let it change them — you are our operating budget. Your attention is the only capital we've ever had, and we refuse to sell it to the highest bidder.
                  </p>

                  <div className="space-y-1 font-mono text-green-400/90 text-xs">
                    <p>We will never run ads.</p>
                    <p>We will never accept funding that comes with editorial conditions.</p>
                    <p>We will never put a paywall between a human being and the truth.</p>
                  </div>

                  <p>
                    If that model sounds unsustainable — good. So is every act of love. So is raising a child. So is planting a tree whose shade you'll never sit in. The things that actually matter have never made financial sense. That's how you know they're real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  CONTACT
                </h2>
                <p className="text-green-300/80 text-sm leading-relaxed mb-3">
                  Have a tip? Found an error? Want to submit evidence?
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Get in touch →
                </button>
              </div>
            </div>
          </div>

          <NewsletterSignup variant="about" />

          <div className="flex justify-center py-8">
            <Button
              onClick={() => navigate('/evidence')}
              className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border-2 border-green-500 font-mono text-lg px-12 py-6 rounded-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 animate-pulse hover:animate-none"
            >
              「 WELCOME TO SOURCES 」
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
