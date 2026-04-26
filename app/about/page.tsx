// app/about/page.tsx
import Link from "next/link";
import {
  Shield,
  Globe,
  Heart,
  Star,
  Lock,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Users,
    title: "Ubuntu Security",
    description:
      "We believe collective digital safety benefits everyone. We share intelligence, build community, and uplift the regional ecosystem.",
  },
  {
    icon: Globe,
    title: "Local Relevance",
    description:
      "Our solutions are designed around African threat actors, regulations, and infrastructure realities — not adapted from elsewhere.",
  },
  {
    icon: Lock,
    title: "Accessibility",
    description:
      "Enterprise-grade security should not require an enterprise-level budget. Our pricing reflects the African market.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We are honest about risk, transparent about our methods, and accountable for outcomes.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We hold our work to international standards while remaining firmly grounded in local context.",
  },
];

const valueCards = [
  {
    title: "Local Relevance",
    description: "Designed around African threat actors and regulations",
  },
  {
    title: "Ubuntu Security",
    description: "Collective digital safety benefits everyone",
  },
  {
    title: "Accessibility",
    description: "Enterprise-grade security, fair African pricing",
  },
  {
    title: "Excellence",
    description: "International standards, local context",
  },
];

const stats = [
  { value: "300+", label: "Organisations Protected" },
  { value: "12", label: "Countries Across Africa" },
  { value: "800+", label: "Intelligence Sources" },
  { value: "24/7", label: "Incident Response" },
];

const offices = [
  { city: "Nairobi", country: "Headquarters — Kenya", highlight: true },
  { city: "Kampala", country: "Uganda", highlight: false },
  { city: "Dar es Salaam", country: "Tanzania", highlight: false },
  { city: "Kigali", country: "Rwanda", highlight: false },
  { city: "Lagos", country: "Nigeria", highlight: false },
  { city: "Johannesburg", country: "South Africa", highlight: false },
];

const badges = [
  "KDPA 2019 Compliant",
  "ODPC Registered",
  "ISO 27001 Aligned",
  "SOC 2 Type II",
  "KE-CIRT/CC Partner",
  "CA Kenya Partner",
  "AU Cyber Security Member",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0]">
      <TopNavBar />

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#145c4f] mb-2 leading-tight">
            Securing Africa's
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6 leading-tight">
            Digital Future
          </h1>
          <p className="text-base md:text-lg text-[#2f5e53] mb-10 leading-relaxed max-w-2xl mx-auto">
            Encrava is a cybersecurity company headquartered in Nairobi, Kenya, with a mission to protect
            Africa's digital economy. We combine world-class consulting expertise with AI-powered security
            technology built specifically for African operating environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#story"
              className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition"
            >
              Our Story
            </Link>
            <Link
              href="#team"
              className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section id="story" className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 border border-green-100 shadow-sm text-center">
              <h2 className="text-2xl font-bold text-[#166b5f] mb-4">Our Mission</h2>
              <p className="text-[#2f5e53] leading-relaxed">
                To protect Africa's growing digital economy by delivering accessible, intelligent,
                and locally relevant cybersecurity solutions to organisations of all sizes.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 border border-green-100 shadow-sm text-center">
              <h2 className="text-2xl font-bold text-[#166b5f] mb-4">Our Vision</h2>
              <p className="text-[#2f5e53] leading-relaxed">
                An Africa where every individual, business, and government agency can participate
                in the digital economy without fear of cyber exploitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Encrava ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] text-center mb-4">
            Why Encrava for Africa?
          </h2>
          <p className="text-center text-[#2f5e53] mb-10">
            Encrava is not a foreign vendor retrofitting a Western product for the African market.
          </p>

          <div className="bg-[#e8f5f0] rounded-2xl p-8 border border-green-200 mb-10 max-w-3xl mx-auto">
            <p className="text-[#2f5e53] leading-relaxed mb-3">
              We understand the specific threat actors targeting the continent, the regulatory
              frameworks governing data in East Africa, the realities of mobile-first
              infrastructure, and the budget constraints of growing organisations.
            </p>
            <p className="text-[#166b5f] font-semibold">We build for Africa, in Africa.</p>
          </div>

          {/* Value pill cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valueCards.map((v) => (
              <div
                key={v.title}
                className="bg-white/80 rounded-2xl p-5 border border-green-100 shadow-sm"
              >
                <h4 className="text-sm font-bold text-[#166b5f] mb-2">{v.title}</h4>
                <p className="text-xs text-[#2f5e53] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-12">Our Impact Across Africa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-extrabold text-[#166b5f] mb-2">{stat.value}</div>
                <div className="text-xs font-semibold text-[#4b5563] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] text-center mb-4">Our Core Values</h2>
          <p className="text-center text-[#2f5e53] mb-12 max-w-xl mx-auto">
            These principles guide everything we do — from product development to client relationships.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#e8f5f0] rounded-2xl p-6 border border-green-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={18} className="text-[#166b5f]" />
                    <h3 className="text-base font-bold text-[#166b5f]">{value.title}</h3>
                  </div>
                  <p className="text-sm text-[#2f5e53] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Presence ── */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Our Regional Presence</h2>
          <p className="text-[#2f5e53] mb-12">
            Headquartered in Nairobi's Westlands Business District, with coverage across East and Sub-Saharan Africa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`rounded-2xl p-5 border text-center ${
                  office.highlight
                    ? "bg-[#166b5f] text-white border-[#166b5f]"
                    : "bg-white/80 border-green-100"
                }`}
              >
                <div className="flex justify-center mb-2">
                  <MapPin
                    size={16}
                    className={office.highlight ? "text-white" : "text-[#166b5f]"}
                  />
                </div>
                <h4
                  className={`text-sm font-bold mb-1 ${
                    office.highlight ? "text-white" : "text-[#166b5f]"
                  }`}
                >
                  {office.city}
                </h4>
                <p
                  className={`text-xs ${
                    office.highlight ? "text-green-100" : "text-[#4b5563]"
                  }`}
                >
                  {office.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust & Compliance ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Trust & Compliance</h2>
          <p className="text-[#2f5e53] mb-10">
            We operate to the highest international standards while maintaining full compliance
            with African regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/80 rounded-full px-5 py-2 border border-green-200 shadow-sm"
              >
                <Shield size={14} className="text-[#166b5f]" />
                <span className="text-sm font-medium text-[#166b5f]">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#166b5f] to-[#0f5549] rounded-3xl p-10 md:p-14 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Join the Organisations Trusting Encrava
            </h2>
            <p className="text-[#a8ddd4] max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              From fintech startups to government agencies — we're protecting Africa's digital
              future, one organisation at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-white text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#e0f1ea] transition inline-flex items-center gap-2"
              >
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/60 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
