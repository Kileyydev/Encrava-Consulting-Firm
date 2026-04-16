"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white shadow-inner">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* GREEN GLOW ORBS (with shadow feel) */}
        <div className="absolute top-[-180px] left-[-180px] w-[600px] h-[600px] bg-[#7BE09C]/30 rounded-full blur-3xl shadow-2xl animate-pulse" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl shadow-2xl animate-pulse" />

        {/* GRID */}
        <div className="grid-overlay" />

        {/* FLOATING NODES */}
        <div className="nodes">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="node" />
          ))}
        </div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight drop-shadow-sm">
          Africa’s Cyber Threats Are Unique. <br />
          So Is Our Protection.
        </h1>

        <p className="mt-6 text-black/70 text-[15px] md:text-lg max-w-3xl mx-auto drop-shadow-sm">
          Encrava delivers expert cybersecurity consulting and AI-powered security products built for the African market —
          protecting mobile money platforms, fintech innovators, government systems, and enterprises across the continent.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <button className="px-6 py-3 bg-[#7BE09C] text-black text-sm font-medium shadow-md hover:shadow-lg transition">
            Book Free Consultation
          </button>

          <button className="px-6 py-3 border border-black/20 text-black text-sm shadow-sm hover:shadow-md transition">
            Explore Products
          </button>

        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* GRID */
        .grid-overlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px);

          background-size: 60px 60px;

          opacity: 0.85;

          animation: gridMove 18s linear infinite;

          box-shadow: inset 0 0 120px rgba(123, 224, 156, 0.18);
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(80px);
          }
        }

        /* NODES (MORE VISIBLE + MORE MOTION) */
        .nodes {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;

          background: rgba(123, 224, 156, 0.95);
          box-shadow: 0 0 12px rgba(123, 224, 156, 0.6);

          animation: float 6s infinite ease-in-out;
        }

        .node:nth-child(odd) {
          background: rgba(0,0,0,0.2);
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }

        /* spread positions */
        .node:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; }
        .node:nth-child(2) { top: 25%; left: 70%; animation-delay: 0.5s; }
        .node:nth-child(3) { top: 40%; left: 40%; animation-delay: 1s; }
        .node:nth-child(4) { top: 60%; left: 20%; animation-delay: 1.5s; }
        .node:nth-child(5) { top: 75%; left: 80%; animation-delay: 2s; }
        .node:nth-child(6) { top: 50%; left: 60%; animation-delay: 2.5s; }
        .node:nth-child(7) { top: 30%; left: 30%; animation-delay: 3s; }
        .node:nth-child(8) { top: 85%; left: 10%; animation-delay: 3.5s; }

        @keyframes float {
          0% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(25px, -25px) scale(1.4);
            opacity: 1;
          }
          100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.4;
          }
        }
      `}</style>

    </section>
  );
}