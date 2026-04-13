import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageHeader } from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Lock, Shield, Server, Trash2, Globe, Mail } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for The Red Pill Bibliography. We collect minimal data, use no tracking cookies, and never sell your information to third parties."
        url="https://redpillbiblio.wtf/privacy"
      />

      <Navigation />

      <main id="main-content" tabIndex={-1} className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-4xl relative z-10">
        <PageHeader
          title="&gt; PRIVACY_POLICY.md"
          description="What we collect, what we don't, and why you can trust us with neither"
          icon={<Lock className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">WHAT WE COLLECT</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p><span className="text-green-400 font-bold">Cloudflare Analytics:</span> Basic, privacy-preserving analytics through Cloudflare (page views, country-level geographic data). Cloudflare does not use cookies or track individual users across sites.</p>
                  <p><span className="text-green-400 font-bold">Supabase:</span> Our database infrastructure is hosted on Supabase. It stores evidence items, connections, and metadata. No personal user data is stored unless you explicitly submit it.</p>
                  <p><span className="text-green-400 font-bold">Contact Form Submissions:</span> If you submit a tip or correction through our contact form, we store your email address and message content solely for the purpose of responding to your submission.</p>
                  <p><span className="text-green-400 font-bold">Newsletter Signups:</span> If you subscribe to our newsletter, your email is stored by Buttondown (our email provider) for the sole purpose of sending you updates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">WHAT WE DO NOT COLLECT</h2>
                <div className="space-y-2 text-green-300/70 font-mono text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold shrink-0">x</span>
                    <span>No cookies. We do not set any cookies on your browser.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold shrink-0">x</span>
                    <span>No advertising trackers. No Google Analytics, no Facebook Pixel, no ad networks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold shrink-0">x</span>
                    <span>No user accounts. We do not require or offer user registration.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold shrink-0">x</span>
                    <span>No fingerprinting. We do not attempt to identify individual visitors through browser fingerprinting.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold shrink-0">x</span>
                    <span>No data sales. We will never sell, share, or monetize visitor data in any form.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Server className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">THIRD-PARTY SERVICES</h2>
                <div className="space-y-3 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p><span className="text-green-400 font-bold">Cloudflare:</span> CDN and DDoS protection. Cloudflare may process minimal request metadata (IP addresses) for security purposes. See Cloudflare's privacy policy for details.</p>
                  <p><span className="text-green-400 font-bold">Supabase:</span> Database hosting and edge functions. Supabase infrastructure is hosted on AWS. No personal data is stored beyond what you explicitly submit.</p>
                  <p><span className="text-green-400 font-bold">Buttondown:</span> Newsletter delivery service. Stores subscriber email addresses. See Buttondown's privacy policy for details.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Trash2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">DATA RETENTION</h2>
                <div className="space-y-2 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>Contact form submissions are retained for up to 12 months to allow for follow-up and verification, then permanently deleted.</p>
                  <p>Newsletter subscriptions persist until you unsubscribe. Upon unsubscription, your email is removed from our mailing list.</p>
                  <p>Server logs (managed by Cloudflare) are retained according to Cloudflare's standard retention policy, typically 72 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">GDPR RIGHTS (EU VISITORS)</h2>
                <div className="space-y-2 text-green-300/70 font-mono text-sm leading-relaxed">
                  <p>If you are located in the European Union, you have the following rights under GDPR:</p>
                  <div className="pl-4 space-y-1">
                    <p>- Right to access any personal data we hold about you</p>
                    <p>- Right to rectification of inaccurate data</p>
                    <p>- Right to erasure ("right to be forgotten")</p>
                    <p>- Right to restrict processing</p>
                    <p>- Right to data portability</p>
                    <p>- Right to object to processing</p>
                  </div>
                  <p>Since we collect minimal data and do not use cookies or tracking, these rights apply primarily to contact form submissions and newsletter subscriptions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-base font-bold mb-3">DATA REQUESTS</h2>
                <p className="text-green-300/70 font-mono text-sm leading-relaxed mb-3">
                  To exercise any of your data rights, or to request information about what data we hold about you, please contact us through our contact form.
                </p>
                <Link
                  to="/contact"
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Submit a data request &rarr;
                </Link>
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
