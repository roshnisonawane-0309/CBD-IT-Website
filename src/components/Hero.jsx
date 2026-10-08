import React from "react";
import { ArrowRight, Award, ShieldCheck, CheckCircle } from "lucide-react";
import { companyData } from "../data/content";

export default function Hero() {
  return (
    <section className="hero-wrapper dot-grid-bg" id="home">
      <div className="container">
        {/* Massive Headline (Directly mirroring Wix 4260 & 4262) */}
        <h1 className="hero-giant-heading">
          Innovative <br />
          <span className="gradient-word">Solutions</span>
        </h1>

        {/* Split Content Grid */}
        <div className="hero-split-grid">
          {/* Left Column: Subhead, Description & CTAs */}
          <div className="hero-left-column">
            <div className="hero-tag-badge">
              <Award size={15} />
              <span>Authorized Tally 5-Star Partner</span>
            </div>

            <h2 className="hero-subhead">
              Empowering organizations with TallyPrime, Spine HR, and enterprise IT automation.
            </h2>

            <p className="hero-lead-text">
              At CBD IT Solutions Pvt. Ltd., we specialize in comprehensive business
              accounting and cloud software for small to medium-sized enterprises and
              corporates. Serving clients across India and globally for over 25 years.
            </p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn-pill btn-pill-primary btn-pill-lg" id="hero-get-started-btn">
                Get Started <ArrowRight size={18} />
              </a>
              <a
                href={companyData.externalLinks.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline-white btn-pill-lg"
              >
                Visit Shop ↗
              </a>
            </div>

            {/* Key Metrics Band */}
            <div className="hero-stats-band">
              <div className="stat-unit">
                <div className="stat-metric">{companyData.experienceYears}</div>
                <div className="stat-label-text">Years Experience</div>
              </div>
              <div className="stat-unit">
                <div className="stat-metric">{companyData.partnerTier}</div>
                <div className="stat-label-text">Tally Partner</div>
              </div>
              <div className="stat-unit">
                <div className="stat-metric">{companyData.clientsCount}</div>
                <div className="stat-label-text">Clients Served</div>
              </div>
              <div className="stat-unit">
                <div className="stat-metric">{companyData.locationsCount}</div>
                <div className="stat-label-text">Office Locations</div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Corporate Office Visual (from Wix Template 4260) */}
          <div className="hero-right-column">
            <div className="hero-framed-visual">
              <img
                src="/hero-office.jpg"
                alt="CBD IT Solutions Corporate Collaboration"
                className="hero-office-img"
              />
              <div className="hero-floating-pill">
                <div className="floating-pill-left">
                  <ShieldCheck size={20} color="#38bdf8" />
                  <span>TallyPrime 5.1 Certified Support</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "3px 8px", borderRadius: "6px" }}>
                    GST Ready
                  </span>
                  <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.15)", padding: "3px 8px", borderRadius: "6px" }}>
                    Multi-User
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
