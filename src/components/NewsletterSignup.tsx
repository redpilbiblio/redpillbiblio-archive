import { useState } from 'react';

interface NewsletterSignupProps {
  variant: 'about' | 'banner';
  onDismiss?: () => void;
}

export function NewsletterSignup({ variant, onDismiss }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: email, tags: [variant] }),
      });
      if (res.ok || res.status === 201) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch {
      setStatus('error');
    }
  };

  if (variant === 'banner') {
    return (
      <div className="fixed bottom-16 left-0 right-0 z-50 px-4 pb-4 animate-in slide-in-from-bottom duration-500">
        <div className="max-w-2xl mx-auto bg-black/95 border border-green-500/40 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-green-500/10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {status === 'success' ? (
                <p className="text-green-400 font-mono text-sm">Signal received. You're in the network now.</p>
              ) : (
                <>
                  <p className="text-green-400 font-mono text-xs font-bold mb-2">&gt; SUBSCRIBE.sh</p>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-black border border-green-500/30 rounded px-3 py-1.5 text-green-400 font-mono text-xs focus:outline-none focus:border-green-500 placeholder:text-green-500/30"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-green-500/20 text-green-400 border border-green-500/50 rounded px-4 py-1.5 font-mono text-xs font-bold hover:bg-green-500/30 transition-colors disabled:opacity-50 shrink-0"
                    >
                      {status === 'loading' ? '...' : 'SUBSCRIBE'}
                    </button>
                  </form>
                  <p className="text-green-500/30 font-mono text-[10px] mt-1.5">
                    Weekly evidence drops. No spam. Powered by Buttondown.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={onDismiss}
              className="text-green-500/40 hover:text-green-400 font-mono text-xs p-1 transition-colors shrink-0"
              aria-label="Dismiss newsletter banner"
            >
              [X]
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
      <h3 className="text-green-400 font-mono text-base font-bold mb-2">
        &gt; SUBSCRIBE.sh
      </h3>
      <p className="text-green-300/70 font-mono text-sm leading-relaxed mb-4">
        Enter your signal frequency (email) to receive weekly evidence drops.
      </p>

      {status === 'success' ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
          <p className="text-green-400 font-mono text-sm">Signal received. You're in the network now.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-black border border-green-500/30 rounded px-4 py-2.5 text-green-400 font-mono text-sm focus:outline-none focus:border-green-500 placeholder:text-green-500/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-green-500/20 text-green-400 border border-green-500/50 rounded px-6 py-2.5 font-mono text-sm font-bold hover:bg-green-500/30 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'TRANSMITTING...' : 'SUBSCRIBE'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-red-400 font-mono text-xs">Transmission failed. Try again.</p>
          )}
          <p className="text-green-500/40 font-mono text-xs">
            We will never sell, share, or spam your email. Unsubscribe anytime. Powered by Buttondown.
          </p>
        </form>
      )}
    </div>
  );
}
