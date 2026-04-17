// app/products/intel/page.tsx
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function IntelPage() {
  return (
    <div>
      {/* Hero Section - same content as before, but update internal links */}
      <section className="bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
                🕵️‍♂️ African Threat Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
                African Threats Need African Intelligence
              </h1>
              <p className="text-lg text-[#2f5e53] mb-8 leading-relaxed">
                Encrava Intel monitors the threat sources that matter most to African organisations — local cybercriminal networks, 
                mobile money fraud syndicates, regional dark web markets, and the threat actors specifically targeting Kenya and Sub-Saharan Africa.
              </p>
              <div className="flex gap-4">
                <Link href="/products/intel/trial" className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                  Start 14-day free trial →
                </Link>
                <Link href="/contact" className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                  Request demo
                </Link>
              </div>
              <p className="text-sm text-[#4b5563] mt-4">No credit card required · M-Pesa payment available</p>
            </div>
            <div className="bg-gradient-to-br from-[#d2eae2] to-[#e0f1ea] rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1e5a4e] mb-4">🔍 Real-time African Intel</h3>
              <div className="space-y-3">
                {[
                  '📡 3,000+ global + 800+ Africa-specific sources',
                  '⚡ sub-60 sec alert delivery',
                  '🇰🇪 Kiswahili NLP engine & local dark web',
                  '📱 M-Pesa fraud monitoring module'
                ].map(item => (
                  <div key={item} className="text-[#2f5e53]">{item}</div>
                ))}
              </div>
              <div className="mt-6 bg-white/80 rounded-2xl p-4">
                <p className="text-sm italic">"Encrava Intel detected a SIM-swap broker within 90 seconds — proactive defense saved millions."</p>
                <p className="text-xs font-bold mt-2">— CISO, Tier-1 Kenyan Bank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Intel page content remains the same */}
      {/* Africa-Specific Sources, Key Features, Pricing sections */}
      {/* Just make sure any internal links use /products/intel/... */}
    </div>
  )
}