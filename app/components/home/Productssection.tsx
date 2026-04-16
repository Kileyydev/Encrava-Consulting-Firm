"use client";

import { useState } from "react";
import { Radar, Shield, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="w-full py-4 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Products
        </h2>

        {/* CARD */}
        <div className="mt-4 product-card">

          <div className={`inner ${flipped ? "flipped" : ""}`}>

            {/* ================= FRONT ================= */}
            <div className="side front">

              {/* IMAGE (FULL COVER LEFT SIDE) */}
              <div className="image-box">
                <img src="/images/products/shield.jpg" alt="Encrava Intel" />
              </div>

              {/* CONTENT */}
              <div className="content">

                <div className="title">
                  <Radar className="icon" />
                  Encrava Intel
                </div>

                <p className="lead">
                  Africa-focused threat intelligence platform for real-time cyber visibility.
                </p>

                <ul>
                  <li>Monitors mobile money fraud networks</li>
                  <li>Tracks SIM-swap & phishing syndicates</li>
                  <li>Detects leaked credentials from dark web markets</li>
                  <li>Delivers alerts in under 60 seconds</li>
                </ul>

                <p className="sub">
                  Built specifically for African cyber threat environments.
                </p>

                <button className="btn">
                  Learn More <ArrowRight size={14} />
                </button>

                <button className="switch" onClick={() => setFlipped(true)}>
                  Switch to Shield →
                </button>

              </div>

            </div>

            {/* ================= BACK ================= */}
            <div className="side back">

              {/* CONTENT */}
              <div className="content">

                <div className="title">
                  <Shield className="icon" />
                  Encrava Shield
                </div>

                <p className="lead">
                  AI-powered phishing detection system trained on African attack patterns.
                </p>

                <ul>
                  <li>M-Pesa, KRA & bank impersonation detection</li>
                  <li>Business email compromise protection</li>
                  <li>Link & attachment analysis in under 2 seconds</li>
                  <li>Kiswahili + English phishing detection</li>
                </ul>

                <p className="sub">
                  99.7% accuracy tuned for African cybercrime behavior.
                </p>

                <button className="btn">
                  Learn More <ArrowRight size={14} />
                </button>

                <button className="switch" onClick={() => setFlipped(false)}>
                  ← Back to Intel
                </button>

              </div>

              {/* IMAGE (FULL COVER RIGHT SIDE) */}
              <div className="image-box">
                <img src="/images/products/shield.jpg" alt="Encrava Shield" />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .product-card {
          margin-top: 28px;

          border: 2px solid rgba(0,0,0,0.12);
          border-radius: 30px 30px 0 0;

          box-shadow: 0 22px 60px rgba(0,0,0,0.10);

          overflow: hidden;

          perspective: 1200px;
        }

        .inner {
          position: relative;
          height: 460px;

          transform-style: preserve-3d;
          transition: transform 0.75s ease;
        }

        .inner.flipped {
          transform: rotateY(180deg);
        }

        .side {
          position: absolute;
          inset: 0;

          display: flex;
          justify-content: space-between;
          align-items: stretch; /* IMPORTANT FIX */

          backface-visibility: hidden;
        }

        .back {
          transform: rotateY(180deg);
        }

        /* 🔥 FULL IMAGE SIDE */
        .image-box {
          width: 45%;
          height: 100%;

          overflow: hidden;

          border-radius: 0;
        }

        .image-box img {
          width: 100%;
          height: 100%;

          object-fit: cover; /* KEY FIX */
          object-position: center;

          filter: brightness(0.95);
        }

        .content {
          width: 55%;
          padding: 28px;

          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 8px;

          font-size: 18px;
          font-weight: 600;
          color: black;
        }

        .icon {
          color: #7BE09C;
        }

        .lead {
          font-size: 13px;
          font-weight: 500;
          color: rgba(0,0,0,0.75);
        }

        ul {
          margin-top: 6px;
          padding-left: 16px;
        }

        li {
          font-size: 12.5px;
          color: rgba(0,0,0,0.70);
          margin-top: 6px;
        }

        .sub {
          font-size: 12px;
          color: rgba(0,0,0,0.55);
        }

        .btn {
          margin-top: 10px;

          background: #7BE09C;
          color: black;

          border: none;
          border-radius: 10px;

          padding: 9px 14px;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .switch {
          margin-top: 6px;

          background: transparent;
          border: none;

          color: #7BE09C;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;
          text-align: left;
        }
      `}</style>

    </section>
  );
}