// app/products/shield/page.tsx
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function ShieldPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
                🛡️ AI-Powered Phishing Detection
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
                Phishing Attacks in Africa Look Different.<br />Our Detection Does Too.
              </h1>
              <p className="text-lg text-[#2f5e53] mb-8 leading-relaxed">
                Encrava Shield is trained on African phishing campaigns — M-Pesa scams, KRA impersonation, 
                local bank fraud, and Kiswahili-language attacks — to protect your organisation with 99.7% detection accuracy.
              </p>
              <div className="flex gap-4">
                <Link href="/products/shield/demo" className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                  Request live demo →
                </Link>
                <Link href="/contact" className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                  See how it works
                </Link>
              </div>
              <p className="text-sm text-[#4b5563] mt-4">No commitment · M-Pesa accepted · African-trained AI</p>
            </div>
            <div className="bg-gradient-to-br from-[#d2eae2] to-[#e0f1ea] rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1e5a4e] mb-4">🛡️ Real threats we stop daily</h3>
              <div className="space-y-2">
                {[
                  '📱 M-Pesa fake SMS & email scams',
                  '🏦 KCB / Equity Bank lookalike portals',
                  '📄 KRA iTax refund phishing',
                  '🇰🇪 eCitizen & Huduma fraud',
                  '💼 CEO fraud / BEC targeting finance'
                ].map(item => (
                  <div key={item} className="text-[#2f5e53]">{item}</div>
                ))}
              </div>
              <div className="mt-6 bg-white/80 rounded-2xl p-4">
                <p className="text-sm italic">"Shield caught a KRA impersonation email written in Kiswahili — our previous global vendor missed it completely."</p>
                <p className="text-xs font-bold mt-2">— Head of IT, Kenyan Government Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Shield page content remains the same */}
    </div>
  )
}