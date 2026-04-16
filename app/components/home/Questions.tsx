"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Encrava different from global cybersecurity vendors?",
      a: "Encrava is built for African threat environments, focusing on M-Pesa fraud, SIM-swap attacks, local phishing campaigns, and regional cybercriminal networks that global tools often miss.",
    },
    {
      q: "How does Encrava Intel detect African cyber threats?",
      a: "Encrava Intel monitors Telegram fraud channels, dark web markets, SIM-swap brokers, and Africa-specific threat actors, delivering real-time alerts in under 60 seconds.",
    },
    {
      q: "What attacks does Encrava Shield protect against?",
      a: "Shield detects M-Pesa impersonation, KRA scams, bank phishing pages, business email compromise, job scams, and WhatsApp-based phishing attacks.",
    },
    {
      q: "Is Encrava compliant with Kenyan regulations?",
      a: "Yes. Encrava aligns with KDPA 2019, ODPC requirements, CBK cybersecurity guidelines, and broader African data protection frameworks.",
    },
    {
      q: "Can Encrava integrate with existing enterprise systems?",
      a: "Yes. It integrates with Microsoft 365, Google Workspace, SIEM tools like Splunk and Sentinel, and supports REST API-based custom integrations.",
    },
    {
      q: "Does Encrava support SMEs or only large enterprises?",
      a: "Encrava supports both SMEs and enterprises with scalable pricing tiers designed for African business environments.",
    },
    {
      q: "How accurate is Encrava Shield in detecting phishing?",
      a: "Shield achieves up to 99.7% accuracy on African phishing datasets, including Kiswahili-language and local impersonation campaigns.",
    },
    {
      q: "Does Encrava provide incident response support?",
      a: "Yes. We offer incident response planning, 24/7 retainer support, and rapid response assistance for active security incidents.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 bg-white flex justify-center">

      <div className="w-full max-w-6xl px-4 md:px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Encrava Frequently Asked Questions
        </h2>

        <p className="text-center text-sm text-black/60 mt-2">
          Key questions about Encrava Intel, Shield, and cybersecurity operations in Africa.
        </p>

        {/* GRID */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-card">

                <button
                  className="question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>

                  {isOpen ? (
                    <ChevronUp className="icon" />
                  ) : (
                    <ChevronDown className="icon" />
                  )}
                </button>

                <div className={`answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .faq-card {
          border: 2px solid rgba(123, 224, 156, 0.55);
          border-radius: 16px;

          box-shadow: 0 14px 40px rgba(0,0,0,0.08);

          background: white;
          overflow: hidden;
        }

        .question {
          width: 100%;
          padding: 14px 16px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          border: none;
          background: white;

          cursor: pointer;

          font-size: 13px;
          font-weight: 600;
          color: black;
          text-align: left;
        }

        .icon {
          color: #7BE09C;
        }

        .answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.35s ease;

          padding: 0 16px;
        }

        .answer.open {
          max-height: 220px;
          padding: 0 16px 14px 16px;
        }

        .answer p {
          font-size: 12.5px;
          color: rgba(0,0,0,0.70);
          line-height: 1.5;
        }
      `}</style>

    </section>
  );
}