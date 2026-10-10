import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Products({ onNavigateToShop }) {
  const cards = [
    {
      title: "TallyPrime 5.1 & Cloud ERP",
      desc: "Our TallyPrime enterprise deployment covers multi-user network setups, automated GST & e-invoicing, banking integration, and remote cloud hosting for anytime, anywhere access.",
      image: "/card-tally.jpg",
      badge: "Featured Software",
      link: "#contact",
    },
    {
      title: "Spine HR & Payroll Suite",
      desc: "End-to-end human resource management featuring biometric attendance synchronization, automated salary computation, leaves processing, and 100% PF/ESI statutory compliance.",
      image: "/card-hr.jpg",
      badge: "Enterprise HR",
      link: "#contact",
    },
    {
      title: "CRM & Business Automation",
      desc: "Customized CRM and telecaller workflows designed to capture leads, track customer interaction history, issue instant GST quotations, and provide real-time sales pipeline visibility.",
      image: "/card-crm.jpg",
      badge: "Growth Engine",
      link: "#contact",
    },
  ];

  return (
    <section className="orgo-journey-section" id="products">
      <div className="container">
        <div className="orgo-section-header">
          <h2>Your Journey Begins Here</h2>
          <p>We make every moment count with solutions designed just for you.</p>
        </div>

        <div className="orgo-cards-soft-grid">
          {cards.map((card, idx) => (
            <div className="orgo-soft-card" key={idx}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--orgo-blue)",
                  background: "var(--orgo-blue-soft)",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-pill)",
                  marginBottom: "16px",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                {card.badge}
              </span>

              <h3 className="orgo-soft-card-title">{card.title}</h3>
              <p className="orgo-soft-card-desc">{card.desc}</p>

              <div className="orgo-soft-card-img-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="orgo-soft-card-img"
                  loading="lazy"
                />
              </div>

              <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                <a
                  href={card.link}
                  className="orgo-discover-link"
                  style={{ fontSize: "14px" }}
                >
                  Learn More <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Shop / Products Catalog */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            type="button"
            onClick={onNavigateToShop || (() => { window.location.hash = "#shop-page"; })}
            className="orgo-btn-primary"
            style={{
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Browse Full Product Store & Pricing</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
