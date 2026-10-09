import React from "react";
import { ChevronRight, Award, ShieldCheck, Users } from "lucide-react";
import { companyData } from "../data/content";

export default function About() {
  return (
    <section className="orgo-who-section" id="who-we-are">
      <div className="container">
        <h2 className="orgo-who-title">
          <span className="text-gradient-blue">Who are we?</span>
        </h2>

        <p className="orgo-who-body">
          <strong>{companyData.name}</strong> (Core Business Development), formerly known
          as <em>Sunny Enterprises</em>, is a premier <strong>Authorized Tally Certified 5-Star Partner</strong> headquartered
          in CBD Belapur, Navi Mumbai. Established in 2000 by <strong>Mr. Santosh Wadode</strong>,{" "}
          <strong>Mrs. Trupti Sannake</strong>, and <strong>Mrs. Smita Wadode</strong>, we have been delivering
          mission-critical business accounting, cloud ERP, and compliance solutions to organizations across India and internationally for over 25 years.
        </p>

        <p className="orgo-who-body">
          Our team of certified consultants and technical engineers brings deep expertise across TallyPrime deployment,
          custom TDL reporting, Spine HR & payroll automation, and secure cloud hosting. We work closely with SMEs and large corporates
          to eliminate manual errors, ensure 100% statutory GST/TDS compliance, and drive measurable operational growth.
        </p>

        <hr className="orgo-thick-separator" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <a href="#products" className="orgo-discover-link">
            DISCOVER MORE &nbsp; <ChevronRight size={18} />
          </a>

          <div style={{ display: "flex", gap: "24px", color: "var(--text-muted)", fontSize: "14px", fontWeight: 500 }}>
            <span>✓ 25+ Years Experience</span>
            <span>✓ 10,000+ Clients Served</span>
            <span>✓ 5 Strategic Offices</span>
          </div>
        </div>
      </div>
    </section>
  );
}
