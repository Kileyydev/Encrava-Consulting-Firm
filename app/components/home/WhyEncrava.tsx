'use client';

import { ShieldCheck } from "lucide-react";

export default function WhyChooseEncrava() {
  return (
    <section className="w-full py-14 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* HEADER (ICON + COLORED TITLE) */}
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#7BE09C] w-6 h-6" />

            <h2 className="text-3xl md:text-4xl font-semibold text-[#7BE09C]">
              Why Choose Encrava
            </h2>
          </div>

        </div>

        {/* CARD */}
        <div className="mt-8">

          <div className="why-card">

            <h3 className="text-xl font-semibold text-black">
              Built for Africa’s Real Threat Landscape
            </h3>

            <p className="mt-4 text-black/70 text-sm leading-relaxed">
              Encrava is not a foreign vendor retrofitting Western cybersecurity tools.
              We understand the attackers targeting Africa — from M-Pesa fraud syndicates,
              SIM-swap networks, and local phishing campaigns to state-aligned threat actors.
              Our intelligence is built around African realities, not imported assumptions.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="font-semibold text-black">Local Threat Intelligence</p>
                  <p className="text-black/70">
                    Tracks African cybercriminal networks and regional attack patterns.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="font-semibold text-black">Mobile-First Security</p>
                  <p className="text-black/70">
                    Built for M-Pesa, USSD systems, fintech apps, and mobile banking.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="font-semibold text-black">Regulatory Alignment</p>
                  <p className="text-black/70">
                    KDPA 2019, CBK guidelines, ODPC requirements, AU frameworks.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="font-semibold text-black">Affordable Enterprise Security</p>
                  <p className="text-black/70">
                    Built for African budgets without reducing capability.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .why-card {
          background: white;

          border: 2px solid rgba(0,0,0,0.12);

          border-radius: 30px 30px 0 0;

          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);

          padding: 36px;
        }

        .feature {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .dot {
          width: 10px;
          height: 10px;
          margin-top: 6px;
          border-radius: 999px;
          background: #7BE09C;
          box-shadow: 0 0 10px rgba(123, 224, 156, 0.6);
          flex-shrink: 0;
        }
      `}</style>

    </section>
  );
}