import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Scale } from 'lucide-react';

export function Legal() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Legal Disclaimer"
        description="Legal information, fair use policy, DMCA compliance, and copyright disclaimers for The Red Pill Bibliography evidence archive."
        url="https://redpillbiblio.wtf/legal"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Navigation />

      <div className="relative z-10 pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            title="&gt; LEGAL_DISCLAIMER.txt"
            description="Terms of use and legal notices for The Red Pill Bibliography"
            icon={<Scale className="w-8 h-8" />}
          />

          <div className="space-y-8 font-mono text-sm leading-relaxed">
            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[1]</span> FAIR USE NOTICE
              </h2>
              <p className="text-green-300/80 mb-4">
                This site contains copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of institutional accountability, human rights, economic, democratic, scientific, and social justice issues.
              </p>
              <p className="text-green-300/80">
                We believe this constitutes <span className="text-green-400 font-semibold">fair use</span> as provided for in Section 107 of the US Copyright Act. In accordance with Title 17 U.S.C. Section 107, the material on this site is distributed without profit to those who have expressed a prior interest in receiving the included information for research and educational purposes.
              </p>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[2]</span> EDUCATIONAL PURPOSE
              </h2>
              <p className="text-green-300/80 mb-4">
                The Red Pill Bibliography is an educational research platform. Content is provided for informational purposes only. This site does not provide legal, medical, financial, or investment advice.
              </p>
              <p className="text-green-300/80">
                Verification tiers (<span className="text-green-400">Verified</span>, <span className="text-yellow-400">Corroborated</span>, <span className="text-gray-400">Preliminary</span>) reflect our editorial assessment based on available sources and do not represent legal or scientific certainty. Users are encouraged to conduct their own research and consult appropriate professionals before making decisions based on information presented here.
              </p>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[3]</span> PRESUMPTION OF INNOCENCE
              </h2>
              <p className="text-green-300/80 mb-4">
                Criminal charges referenced on this site do not constitute proof of guilt. <span className="text-green-400 font-semibold">All individuals are presumed innocent until proven guilty in a court of law.</span>
              </p>
              <p className="text-green-300/80">
                Convictions listed in our database may be subject to appeal or reversal. The inclusion of legal proceedings or allegations does not imply culpability and should not be construed as a determination of guilt or liability.
              </p>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[4]</span> NO WARRANTY
              </h2>
              <p className="text-green-300/80 mb-4">
                Content is provided <span className="text-green-400 font-semibold">as-is</span>. While we strive for accuracy and cross-reference multiple sources, we make no warranties regarding the completeness, reliability, or accuracy of any information on this site.
              </p>
              <p className="text-green-300/80">
                The Red Pill Bibliography disclaims all liability for any errors, omissions, or inaccuracies in the content provided. Users access and use this site at their own risk. We are not responsible for any decisions made based on information found on this platform.
              </p>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[5]</span> THIRD-PARTY CONTENT
              </h2>
              <p className="text-green-300/80">
                This site contains links to external websites and references to third-party content. We do not endorse, warrant, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through this site. External links are provided for convenience and informational purposes only.
              </p>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[6]</span> CORRECTIONS & CONCERNS
              </h2>
              <p className="text-green-300/80 mb-4">
                We are committed to maintaining accuracy and fairness in our documentation. If you believe any information on this site is inaccurate, incomplete, or violates your rights, please contact us immediately.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 underline underline-offset-4 transition-colors min-h-[44px]"
              >
                Submit a correction or concern via our contact form →
              </Link>
            </section>

            <section className="border border-green-500/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-green-400 font-bold text-base mb-4 flex items-center gap-2">
                <span className="text-green-500">[7]</span> UPDATES TO DISCLAIMER
              </h2>
              <p className="text-green-300/80">
                This legal disclaimer may be updated periodically to reflect changes in our practices or legal requirements. Users are encouraged to review this page regularly. Continued use of the site following any changes constitutes acceptance of those changes.
              </p>
              <p className="text-green-500/60 mt-4 text-xs">
                Last updated: March 23, 2026
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-green-500/30">
              <p className="text-green-500/70 text-xs text-center">
                For questions about these terms, please{' '}
                <Link to="/contact" className="text-green-400 hover:text-green-300 underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
