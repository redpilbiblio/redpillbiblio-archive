import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageHeader } from '@/components/PageHeader';
import { ScrollText, BookOpen, Scale, TriangleAlert as AlertTriangle, Shield, Globe } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Terms of Service"
        description="Terms of service for The Red Pill Bibliography. This archive is provided for educational and research purposes only. Read the full terms of use."
        url="https://redpillbiblio.wtf/terms"
      />

      <Navigation />

      <main id="main-content" tabIndex={-1} className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-4xl relative z-10">
        <PageHeader
          title="&gt; TERMS_OF_SERVICE.md"
          description="The rules of engagement for using this research archive"
          icon={<ScrollText className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">EDUCATIONAL & RESEARCH PURPOSE</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>The Red Pill Bibliography ("the Site") is an educational research archive. All content is provided for informational, educational, and research purposes only.</p>
                  <p>The Site aggregates and organizes publicly available documents, records, and sources. We do not create original investigative content; we curate, categorize, and present existing public-record materials with proper attribution.</p>
                  <p>By using this Site, you acknowledge that the content is intended to facilitate independent research and critical thinking, not to substitute for professional advice of any kind.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Scale className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">FAIR USE</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>This Site operates under the fair use doctrine (17 U.S.C. Section 107). Content is presented for purposes of commentary, criticism, education, and research.</p>
                  <p>Where excerpts of copyrighted materials appear, they are used in limited quantities necessary for commentary and criticism, with attribution to original sources. This use is transformative in nature, serving a different purpose than the original works.</p>
                  <p>All evidence items link to their original source where available, directing traffic to the original publishers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">NO LEGAL ADVICE</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>Nothing on this Site constitutes legal advice. The presentation of legal documents, court records, or legislative materials is for educational reference only.</p>
                  <p>If you require legal advice regarding any matter referenced on this Site, consult a licensed attorney in your jurisdiction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">LIMITATION OF LIABILITY</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>The Site is provided "as is" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                  <p>In no event shall the operators of this Site be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site or its content.</p>
                  <p>While we strive for accuracy through our three-tier verification system, we do not guarantee the completeness, accuracy, or currency of any content. Users are encouraged to verify all information independently through the linked original sources.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">GOVERNING LAW</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>These terms shall be governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.</p>
                  <p>Any disputes arising from the use of this Site shall be resolved through appropriate legal channels in the jurisdiction of the Site's operators.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-green-500/40 font-mono text-xs py-4">
            Last updated: March 2026
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
