import React from "react";
import { Star, Globe, Headset, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { companyData } from "../data/content";

export default function About() {
  const highlights = [
    {
      icon: <Star size={24} />,
      title: "5-Star Tally Partner",
      desc: "Top certified tier in India, upholding highest standards in sales, deployment, and cloud migration.",
    },
    {
      icon: <Globe size={24} />,
      title: "Nationwide & Global Reach",
      desc: "Serving thousands of enterprises across Mumbai, Maharashtra, Chhattisgarh, and international clients.",
    },
    {
      icon: <Headset size={24} />,
      title: "Dedicated Technical Support",
      desc: "Certified engineers available for quick troubleshooting, custom reports, and AMC support.",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Tally Education Academy",
      desc: "Structured training programs allowing students and accountants to achieve corporate accounting mastery.",
    },
  ];

  return (
    <section className="light-section light-section-white" id="about">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Company Profile</span>
          <h2 className="section-headline">The Best Tally Certified 5-Star Partner</h2>
          <p className="section-subtext">
            {companyData.subtitle}
          </p>
        </div>

        {/* Story & Founders */}
        <div className="about-split-row">
          <div className="about-intro-box">
            <h3>Delivering Business IT Excellence Since 2000</h3>
            <p>
              <strong>{companyData.name}</strong> (Core Business Development), formerly
              known as <em>Sunny Enterprises</em>, was established in 2000 by
              founders <strong>Mr. Santosh Wadode</strong>,{" "}
              <strong>Mrs. Trupti Sannake</strong>, and{" "}
              <strong>Mrs. Smita Wadode</strong>.
            </p>
            <p>
              {companyData.aboutExtended}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "24px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 500, color: "var(--text-dark)" }}>
                <CheckCircle2 size={18} color="var(--accent-blue)" />
                <span>Authorized Tally Partner for over 25 years</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 500, color: "var(--text-dark)" }}>
                <CheckCircle2 size={18} color="var(--accent-blue)" />
                <span>6 Office branches across Maharashtra and Chhattisgarh</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 500, color: "var(--text-dark)" }}>
                <CheckCircle2 size={18} color="var(--accent-blue)" />
                <span>End-to-end accounting, payroll, CRM, and cloud IT services</span>
              </div>
            </div>

            <a href="#contact" className="btn-pill btn-pill-dark">
              Get In Touch With Our Team <ArrowRight size={16} />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="about-features-grid">
            {highlights.map((item, idx) => (
              <div className="about-card-item" key={idx}>
                <div className="about-icon-pill">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
