"use client";

import {
  Shield,
  Search,
  Smartphone,
  FileCheck2,
  AlertTriangle,
  GraduationCap,
  Lock,
  Activity,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full py-4 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE (tight spacing like before) */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Services
        </h2>

        {/* MAIN CARD */}
        <div className="mt-4 services-card">

          <div className="grid grid-cols-1 md:grid-cols-4 relative">

            {/* GREEN PIPES (TALLER + MATCHING STYLE) */}
            <div className="pipe pipe-1" />
            <div className="pipe pipe-2" />
            <div className="pipe pipe-3" />

            {/* COLUMN 1 */}
            <div className="col">
              <div className="title">
                <Search className="icon" />
                Assessment & Testing
              </div>

              <div className="item"><Shield size={14} /> Risk Assessment</div>
              <div className="item"><Activity size={14} /> Penetration Testing</div>
            </div>

            {/* COLUMN 2 */}
            <div className="col">
              <div className="title">
                <Smartphone className="icon" />
                Fintech Security
              </div>

              <div className="item"><Lock size={14} /> Mobile & App Security</div>
              <div className="item"><AlertTriangle size={14} /> API & SIM-Swap Defense</div>
            </div>

            {/* COLUMN 3 */}
            <div className="col">
              <div className="title">
                <FileCheck2 className="icon" />
                Compliance
              </div>

              <div className="item">KDPA Programme</div>
              <div className="item">ODPC Alignment</div>
              <div className="item">ISO / NIST / PCI-DSS</div>
            </div>

            {/* COLUMN 4 */}
            <div className="col">
              <div className="title">
                <GraduationCap className="icon" />
                Response & Training
              </div>

              <div className="item"><AlertTriangle size={14} /> Incident Response</div>
              <div className="item"><GraduationCap size={14} /> Security Training</div>
            </div>

          </div>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .services-card {
          background: white;

          /* SAME BORDER STYLE AS WHY CHOOSE ENCRAVA */
          border: 2px solid rgba(0,0,0,0.12);

          border-radius: 30px 30px 0 0;

          /* STRONGER, CLEANER SHADOW */
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.10);

          padding: 26px;

          position: relative;
        }

        .col {
          padding: 10px 18px;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 8px;

          font-weight: 600;
          font-size: 14px;

          color: black;

          margin-bottom: 14px;
        }

        .icon {
          color: #7BE09C;
        }

        .item {
          font-size: 12.5px;
          color: rgba(0,0,0,0.7);

          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* 🔥 TALLER GREEN PIPES (MORE VISUAL PRESENCE) */
        .pipe {
          position: absolute;

          /* increased height (your request) */
          top: 10%;
          bottom: 10%;

          width: 2px;

          background: #7BE09C;

          box-shadow: 0 0 14px rgba(123, 224, 156, 0.65);
        }

        .pipe-1 { left: 25%; }
        .pipe-2 { left: 50%; }
        .pipe-3 { left: 75%; }
      `}</style>

    </section>
  );
}