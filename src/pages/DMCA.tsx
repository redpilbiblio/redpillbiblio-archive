import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageHeader } from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { ShieldAlert, FileWarning, RotateCcw, Mail } from 'lucide-react';

export function DMCA() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="DMCA Notice"
        description="DMCA Safe Harbor notice for The Red Pill Bibliography. Procedure for copyright takedown requests and counter-notifications under 17 U.S.C. 512."
        url="https://redpillbiblio.wtf/dmca"
      />

      <Navigation />

      <main id="main-content" className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-4xl relative z-10">
        <PageHeader
          title="&gt; DMCA_NOTICE.md"
          description="Digital Millennium Copyright Act Safe Harbor Notice"
          icon={<ShieldAlert className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="text-green-300/70 font-mono text-sm leading-relaxed space-y-3">
              <p>The Red Pill Bibliography respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using this website.</p>
              <p>This Site operates as a research archive that curates publicly available materials under the fair use doctrine. However, if you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please follow the procedures outlined below.</p>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">DESIGNATED AGENT</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>Our designated agent for receiving DMCA takedown notices can be reached through our contact form. All DMCA-related communications should be submitted with the subject line "DMCA Takedown Request" or "DMCA Counter-Notification."</p>
                  <Link
                    to="/contact"
                    className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors inline-block mt-1"
                  >
                    Contact the designated agent &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileWarning className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">TAKEDOWN REQUEST PROCEDURE</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>To file a DMCA takedown notice, your notification must include the following:</p>
                  <div className="pl-4 space-y-2 border-l-2 border-green-500/20">
                    <p>1. A physical or electronic signature of the copyright owner or person authorized to act on their behalf.</p>
                    <p>2. Identification of the copyrighted work claimed to have been infringed.</p>
                    <p>3. Identification of the material that is claimed to be infringing, with sufficient detail to enable us to locate it on the Site (e.g., a URL).</p>
                    <p>4. Your contact information (address, telephone number, and email address).</p>
                    <p>5. A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</p>
                    <p>6. A statement, made under penalty of perjury, that the information in the notification is accurate and that you are the copyright owner or are authorized to act on behalf of the copyright owner.</p>
                  </div>
                  <p className="text-amber-400/80 text-xs">Note: Under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing may be subject to liability.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <RotateCcw className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">COUNTER-NOTIFICATION PROCEDURE</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>If you believe that the material that was removed or disabled is not infringing, or that you have authorization from the copyright owner or the law to post the material, you may file a counter-notification containing the following:</p>
                  <div className="pl-4 space-y-2 border-l-2 border-green-500/20">
                    <p>1. Your physical or electronic signature.</p>
                    <p>2. Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or disabled.</p>
                    <p>3. A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</p>
                    <p>4. Your name, address, telephone number, and a statement that you consent to the jurisdiction of the federal court in your judicial district (or if outside the United States, any judicial district in which the service provider may be found), and that you will accept service of process from the person who provided the takedown notification.</p>
                  </div>
                  <p>Upon receipt of a valid counter-notification, we will forward it to the complaining party. If the complaining party does not file a court action within 10 business days, we will restore the removed material.</p>
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
