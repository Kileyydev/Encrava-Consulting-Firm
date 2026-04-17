// app/products/page.tsx
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
          🔐 Built for African organisations
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
          Cybersecurity Products<br />Made for Africa
        </h1>
        <p className="text-xl text-[#2f5e53] max-w-2xl mx-auto">
          Global solutions miss local threats. Our products are engineered specifically for the African threat landscape.
        </p>
      </section>

      {/* Product Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12 my-16">
        
        {/* Encrava Intel Card - links to /products/intel */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-xl border border-green-200/30 hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="bg-gradient-to-r from-[#166b5f]/10 to-[#2b9a7a]/10 p-8">
            <div className="text-5xl mb-4">🕵️‍♂️</div>
            <h2 className="text-3xl font-bold text-[#166b5f]">Encrava Intel</h2>
            <span className="inline-block bg-[#ffe0f0] text-[#b14562] text-xs font-bold px-3 py-1 rounded-full mt-2">
              African Threat Intelligence Platform
            </span>
          </div>
          <div className="p-8">
            <p className="text-[#2f5e53] mb-6 leading-relaxed">
              Real-time threat intelligence focused on African cybercriminal networks, mobile money fraud syndicates, 
              and dark web markets that target Kenyan and Sub-Saharan African organisations.
            </p>
            <div className="space-y-3 mb-8">
              {[
                '3,000+ global + 800+ Africa-specific sources',
                'M-Pesa & mobile money fraud monitoring',
                'Kiswahili language NLP engine',
                'Dark web credential monitoring',
                'SIEM integration (Splunk, Sentinel, QRadar)',
                '500+ Africa-focused threat actor profiles'
              ].map(feature => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#166b5f]" />
                  <span className="text-sm text-[#1e4a42]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/products/intel" className="flex-1 text-center bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                Learn More →
              </Link>
              <Link href="/products/intel/trial" className="flex-1 text-center border-2 border-[#166b5f] text-[#166b5f] py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                Start Trial
              </Link>
            </div>
          </div>
        </div>

        {/* Encrava Shield Card - links to /products/shield */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-xl border border-green-200/30 hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="bg-gradient-to-r from-[#166b5f]/10 to-[#2b9a7a]/10 p-8">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl font-bold text-[#166b5f]">Encrava Shield</h2>
            <span className="inline-block bg-[#ffe0f0] text-[#b14562] text-xs font-bold px-3 py-1 rounded-full mt-2">
              AI-Powered Phishing Detection
            </span>
          </div>
          <div className="p-8">
            <p className="text-[#2f5e53] mb-6 leading-relaxed">
              AI-driven phishing detection trained on African phishing samples — M-Pesa scams, KRA impersonation, 
              local bank fraud, and Kiswahili-language attacks. 99.7% detection accuracy.
            </p>
            <div className="space-y-3 mb-8">
              {[
                '200+ African brand watchlist',
                'Kiswahili NLP engine for local threats',
                'AI link analysis & attachment sandboxing',
                'BEC / CEO fraud detection',
                'Auto-remediation & real-time quarantine',
                'Microsoft 365 & Google Workspace native'
              ].map(feature => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#166b5f]" />
                  <span className="text-sm text-[#1e4a42]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/products/shield" className="flex-1 text-center bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                Learn More →
              </Link>
              <Link href="/products/shield/demo" className="flex-1 text-center border-2 border-[#166b5f] text-[#166b5f] py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 my-16">
        <h2 className="text-2xl font-bold text-center text-[#145c4f] mb-8">Which product is right for you?</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-green-200">
                <th className="text-left py-4 px-4 font-bold text-[#0f5549]">Capability</th>
                <th className="text-left py-4 px-4 font-bold text-[#0f5549]">Encrava Intel</th>
                <th className="text-left py-4 px-4 font-bold text-[#0f5549]">Encrava Shield</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Threat intelligence & dark web monitoring', intel: '✓ Dedicated', shield: '—' },
                { feature: 'Phishing & email threat detection', intel: '—', shield: '✓ Dedicated' },
                { feature: 'M-Pesa & mobile money fraud', intel: '✓ Advanced', shield: '✓ Included' },
                { feature: 'Kiswahili language NLP', intel: '✓ Yes', shield: '✓ Yes' },
                { feature: 'African brand impersonation', intel: '✓ Yes', shield: '✓ Yes' },
                { feature: 'SIEM / SOAR integration', intel: '✓ Native', shield: '✓ Native' },
                { feature: 'Auto-remediation', intel: 'Limited', shield: '✓ Full' }
              ].map(row => (
                <tr key={row.feature} className="border-b border-green-100">
                  <td className="py-3 px-4 font-medium text-[#1e4a42]">{row.feature}</td>
                  <td className="py-3 px-4 text-[#166b5f]">{row.intel}</td>
                  <td className="py-3 px-4 text-[#166b5f]">{row.shield}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#c5e5d9] to-[#edf7f1] rounded-3xl p-12 text-center my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0e5a4d] mb-4">
          Not sure which product fits your needs?
        </h2>
        <p className="text-[#2f5e53] max-w-lg mx-auto mb-8">
          Our team will assess your security posture and recommend the right solution — or a combined package for complete protection.
        </p>
        <Link href="/consultation" className="inline-block bg-[#b1536e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#9a4560] transition">
          Talk to a security expert →
        </Link>
      </div>
    </div>
  )
}