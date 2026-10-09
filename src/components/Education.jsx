import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Education() {
  const milestones = [
    {
      number: "01",
      tag: "Migration Excellence",
      desc: "Successfully deployed & migrated over 10,000+ enterprises to TallyPrime with zero data downtime.",
    },
    {
      number: "02",
      tag: "5-Star Tally Partner",
      desc: "Ranked as the top Authorized Tally Certified 5-Star Partner across Mumbai and Western India for over 25 years.",
    },
    {
      number: "03",
      tag: "Certified Academy",
      desc: "Trained and certified over 5,000+ professional accountants through our official Tally Education modules.",
    },
    {
      number: "04",
      tag: "Instant SLA Support",
      desc: "Delivered 99.8% customer satisfaction with dedicated remote desk and on-premise technical assistance.",
    },
  ];

  return (
    <>
      {/* Driving Success Through Innovation (Orgocloud s_key_images) */}
      <section className="orgo-driving-section" id="education">
        <div className="container">
          <div className="orgo-section-header">
            <h2>Driving Success Through Innovation</h2>
            <p>Empowering Businesses to Reach New Heights with Enterprise IT Automation</p>
          </div>

          <div className="orgo-milestones-grid">
            {milestones.map((m, idx) => (
              <div className="orgo-milestone-col" key={idx}>
                <div className="orgo-milestone-number">{m.number}</div>
                <div className="orgo-milestone-tag">{m.tag}</div>
                <p className="orgo-milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner (Orgocloud s_call_to_action) */}
      <section className="orgo-cta-banner-section">
        <div className="container">
          <div className="orgo-cta-row">
            <div className="orgo-cta-text">
              <h3>We have delivered over 25+ Years of Proven Excellence</h3>
              <p>Join over 10,000+ businesses and make your enterprise another success story with us.</p>
            </div>
            <div className="orgo-cta-btn-wrap">
              <a href="#contact" className="orgo-cta-btn-white" id="cta-contact-btn">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
