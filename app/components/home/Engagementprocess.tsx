"use client";

import {
  Search,
  FileText,
  Settings,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function EngagementProcess() {
  return (
    <section className="w-full py-6 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Client Engagement Process
        </h2>

        {/* FLOW WRAPPER */}
        <div className="mt-6 flow">

          {/* STEP 1 */}
          <div className="step">
            <Search className="icon" />
            <h3>Discovery</h3>
            <p>We analyze your environment, systems, and threat exposure.</p>
          </div>

          <ArrowRight className="arrow" />

          {/* STEP 2 */}
          <div className="step">
            <FileText className="icon" />
            <h3>Proposal</h3>
            <p>Clear scope, timeline, deliverables, and transparent pricing.</p>
          </div>

          <ArrowRight className="arrow" />

          {/* STEP 3 */}
          <div className="step">
            <Settings className="icon" />
            <h3>Execution</h3>
            <p>Hands-on implementation with continuous progress updates.</p>
          </div>

          <ArrowRight className="arrow" />

          {/* STEP 4 */}
          <div className="step">
            <Activity className="icon" />
            <h3>Findings</h3>
            <p>Detailed technical + executive reports in clear language.</p>
          </div>

          <ArrowRight className="arrow" />

          {/* STEP 5 */}
          <div className="step">
            <ShieldCheck className="icon" />
            <h3>Remediation</h3>
            <p>Optional support to implement fixes and strengthen security.</p>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;

          margin-top: 10px;
        }

        .step {
          flex: 1;

          background: white;

          border: 2px solid rgba(123, 224, 156, 0.45);
          border-radius: 18px;

          box-shadow: 0 14px 40px rgba(0,0,0,0.08);

          padding: 14px;

          display: flex;
          flex-direction: column;
          gap: 6px;

          min-height: 120px;
        }

        .icon {
          color: #7BE09C;
        }

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: black;
        }

        p {
          font-size: 12px;
          color: rgba(0,0,0,0.65);
          line-height: 1.4;
        }

        .arrow {
          color: #7BE09C;
          flex-shrink: 0;
        }

        /* MOBILE — STACKED FLOW */
        @media (max-width: 768px) {
          .flow {
            flex-direction: column;
            align-items: stretch;
          }

          .arrow {
            transform: rotate(90deg);
            margin: 6px 0;
          }
        }
      `}</style>

    </section>
  );
}