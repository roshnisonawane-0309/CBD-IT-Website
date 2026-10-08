import React from "react";
import {
  Check,
  ArrowRight,
  Download,
  ShoppingCart,
  Users2,
  LineChart,
  PhoneCall,
  MapPin,
  Handshake,
  ExternalLink,
} from "lucide-react";
import { productsData, companyData } from "../data/content";

export default function Products() {
  const tally = productsData.find((p) => p.id === "tallyprime");
  const otherProducts = productsData.filter((p) => p.id !== "tallyprime");

  const getProductIcon = (id) => {
    switch (id) {
      case "spine":
        return <Users2 size={22} />;
      case "crm":
        return <LineChart size={22} />;
      case "telecaller":
        return <PhoneCall size={22} />;
      case "sarathi":
        return <MapPin size={22} />;
      case "sanchay":
        return <Handshake size={22} />;
      default:
        return <ShoppingCart size={22} />;
    }
  };

  return (
    <section className="light-section" id="products">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Enterprise Software</span>
          <h2 className="section-headline">Products & Solutions</h2>
          <p className="section-subtext">
            Comprehensive business accounting, HR, CRM, and automation solutions engineered to elevate organizational efficiency.
          </p>
        </div>

        {/* Dark Obsidian Spotlight for TallyPrime (Contrast Anchor) */}
        {tally && (
          <div className="spotlight-card-modern" id="tallyprime">
            <div className="spotlight-left">
              <span
                style={{
                  display: "inline-block",
                  background: "#0f172a",
                  color: "#fbbf24",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: "var(--pill-radius)",
                  marginBottom: "16px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.15)",
                }}
              >
                ★ Featured Software
              </span>
              <h3>{tally.name}</h3>
              <div className="spotlight-tagline-text">{tally.tagline}</div>
              <p>{tally.description}</p>

              <div className="bullet-points-list">
                {tally.highlights.map((feat, i) => (
                  <div className="bullet-row" key={i}>
                    <Check size={18} color="#78350f" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="spotlight-button-row">
                <a
                  href={tally.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary"
                >
                  <ShoppingCart size={16} /> Buy TallyPrime
                </a>
                <a
                  href={tally.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-outline-white"
                >
                  <Download size={16} /> Download Setup ↗
                </a>
                <a href="#contact" className="btn-pill btn-pill-outline-white">
                  Request Demo
                </a>
              </div>
            </div>

            <div className="spotlight-right-display">
              <h4>TallyPrime 5.1</h4>
              <span>Official Release</span>
              <div className="spec-pills-cluster">
                <div className="spec-pill-box">GST Ready</div>
                <div className="spec-pill-box">Auto Banking</div>
                <div className="spec-pill-box">Multi-User</div>
                <div className="spec-pill-box">Remote Cloud</div>
                <div className="spec-pill-box">Inventory MIS</div>
                <div className="spec-pill-box">Payroll Ready</div>
              </div>
            </div>
          </div>
        )}

        {/* Clean Light Tiles for Other Products */}
        <div className="modern-products-grid">
          {otherProducts.map((prod) => (
            <div className="product-tile-card" key={prod.id} id={prod.id}>
              <div className="tile-header-row">
                <div className="tile-icon-box">{getProductIcon(prod.id)}</div>
                <span className="tile-category-tag">{prod.category}</span>
              </div>
              <h4>{prod.name}</h4>
              <p>{prod.description}</p>
              <a
                href={prod.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tile-link-arrow"
              >
                Learn More <ArrowRight size={15} />
              </a>
            </div>
          ))}

          {/* Official Software Store Card */}
          <div
            className="product-tile-card"
            style={{
              borderColor: "var(--accent-blue)",
              background: "linear-gradient(145deg, #ffffff 0%, #eff6ff 100%)",
            }}
          >
            <div className="tile-header-row">
              <div className="tile-icon-box" style={{ background: "var(--accent-blue)", color: "#fff" }}>
                <ShoppingCart size={22} />
              </div>
              <span className="tile-category-tag" style={{ color: "var(--accent-blue)" }}>
                Online Store
              </span>
            </div>
            <h4>Official Software Store</h4>
            <p>
              Purchase fresh TallyPrime licenses, Tally Software Services (TSS)
              renewals, multi-user expansions, and customized add-ons online.
            </p>
            <a
              href={companyData.externalLinks.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-primary btn-pill-sm"
              style={{ marginTop: "auto" }}
            >
              Visit Store <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
