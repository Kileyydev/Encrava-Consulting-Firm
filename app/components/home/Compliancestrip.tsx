"use client";

import {
  ShieldCheck,
  Lock,
  Globe,
  FileCheck2,
  Database,
  Building2,
} from "lucide-react";

export default function ComplianceStrip() {
  const items = [
    { icon: ShieldCheck, text: "KDPA 2019 Compliant" },
    { icon: Lock, text: "ISO/IEC 27001:2022" },
    { icon: FileCheck2, text: "PCI-DSS v4.0" },
    { icon: Globe, text: "GDPR Aligned" },
    { icon: Database, text: "AU Cybersecurity Convention" },
    { icon: Building2, text: "ODPC Registered" },
    { icon: ShieldCheck, text: "CA Kenya Cybersecurity Partner" },
  ];

  return (
    <section className="w-full py-6 bg-white flex justify-center">

      <div className="max-w-6xl w-full px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Compliance Frameworks We Support
        </h2>

        {/* SCROLLER */}
        <div className="mt-5 overflow-hidden strip">

          <div className="track">

            {/* FIRST LOOP */}
            {items.map((item, i) => (
              <div className="item" key={i}>
                <item.icon size={16} className="icon" />
                <span>{item.text}</span>
              </div>
            ))}

            {/* DUPLICATE LOOP (for seamless scroll) */}
            {items.map((item, i) => (
              <div className="item" key={"dup-" + i}>
                <item.icon size={16} className="icon" />
                <span>{item.text}</span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .strip {
          position: relative;
          white-space: nowrap;
        }

        .track {
          display: flex;
          gap: 28px;
          width: max-content;

          animation: scroll 18s linear infinite;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 10px 14px;

          border: 1px solid rgba(123, 224, 156, 0.5);
          border-radius: 999px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.06);

          font-size: 12.5px;
          font-weight: 500;

          color: black;
          background: white;
        }

        .icon {
          color: #7BE09C;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}