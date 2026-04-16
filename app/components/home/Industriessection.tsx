"use client";

import { useState } from "react";
import {
  Banknote,
  Smartphone,
  Building2,
  HeartPulse,
  ShoppingBag,
  Globe,
  Zap,
} from "lucide-react";

export default function IndustriesSection() {
  const [index, setIndex] = useState(0);

  const groups = [
    [
      {
        icon: Banknote,
        title: "Financial & Mobile Money Ecosystem",
        desc: "Banks, SACCOs, fintechs, payment processors, and mobile money operators.",
      },
      {
        icon: Smartphone,
        title: "Telecom & Digital Infrastructure",
        desc: "Mobile network operators, ISPs, and communication infrastructure providers.",
      },
      {
        icon: Building2,
        title: "Government & National Systems",
        desc: "Public sector platforms, ministries, county systems, and digital government services.",
      },
    ],

    [
      {
        icon: HeartPulse,
        title: "Healthcare & Critical Services",
        desc: "Hospitals, insurers, pharmaceutical networks, and digital health platforms.",
      },
      {
        icon: ShoppingBag,
        title: "Commerce & Digital Retail Systems",
        desc: "E-commerce platforms, logistics networks, and online consumer services.",
      },
      {
        icon: Globe,
        title: "NGOs & Development Networks",
        desc: "International NGOs, humanitarian orgs, and donor-funded digital systems.",
      },
    ],

    [
      {
        icon: Zap,
        title: "Energy & Critical Utilities",
        desc: "Power grids, oil & gas infrastructure, water systems, and national utilities.",
      },
    ],
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % groups.length);
  };

  return (
    <section className="w-full py-4 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE (tighter spacing) */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Industries We Serve
        </h2>

        {/* GRID */}
        <div className="mt-4 grid md:grid-cols-3 gap-4">

          {groups[index].map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="industry-card">

                <div className="top">
                  <Icon className="icon" />
                  <h3>{item.title}</h3>
                </div>

                <p>{item.desc}</p>

              </div>
            );
          })}

        </div>

        {/* SINGLE DOT NAV */}
        <div className="dots">
          <button onClick={next} className="dot">
            ...
          </button>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .industry-card {
          background: white;

          border: 1px solid rgba(0,0,0,0.10);

          border-radius: 30px 30px 0 0;

          box-shadow: 0 14px 35px rgba(0,0,0,0.10);

          padding: 16px;

          min-height: 140px;
        }

        .top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon {
          width: 18px;
          height: 18px;
          color: #7BE09C;
        }

        h3 {
          font-size: 13px;
          font-weight: 600;
          color: black;
        }

        p {
          margin-top: 10px;
          font-size: 12px;
          color: rgba(0,0,0,0.65);
          line-height: 1.4;
        }

        /* ONLY ONE NAV CONTROL */
        .dots {
          display: flex;
          justify-content: flex-end;
          margin-top: 6px;
        }

        .dot {
          font-size: 26px;
          font-weight: 900;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #7BE09C;
          letter-spacing: 2px;
        }
      `}</style>

    </section>
  );
}