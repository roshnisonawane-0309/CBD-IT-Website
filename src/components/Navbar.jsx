import React, { useState, useEffect } from "react";
import { Menu, X, Search, Phone, Mail, Award, MessageCircle } from "lucide-react";
import { companyData } from "../data/content";

export default function Navbar({ onOpenSupportModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = "#products";
    }
  };

  return (
    <header id="site-header">
      {/* Top Utility Bar (Orgocloud Style) */}
      <div className="orgo-top-bar">
        <div className="container orgo-top-bar-content">
          <div className="orgo-top-links">
            <a href={`mailto:${companyData.contacts.primaryEmail}`}>
              <Mail size={14} color="var(--orgo-blue)" />
              <span>{companyData.contacts.primaryEmail}</span>
            </a>
            <a href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, "")}`}>
              <Phone size={14} color="var(--orgo-blue)" />
              <span>{companyData.contacts.primaryPhone}</span>
            </a>
          </div>

          <div className="orgo-top-right">
            <span className="partner-badge">
              <Award size={13} />
              <span>Authorized Tally 5-Star Partner</span>
            </span>
            <button
              type="button"
              onClick={onOpenSupportModal || (() => { window.location.href = "#support"; })}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--orgo-blue)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Quick Support
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation (Orgocloud Style) */}
      <nav className={`orgo-navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="container orgo-navbar-content">
          {/* Brand Logo */}
          <a href="#home" className="orgo-logo-link" id="main-brand-logo" aria-label="CBD IT Solutions Home">
            <img
              src="/logo.png"
              alt="CBD IT Solutions Pvt. Ltd."
              className="orgo-navbar-logo-img"
            />
          </a>

          {/* Navigation Menu */}
          <ul className="orgo-nav-menu" aria-label="Main Navigation">
            <li><a href="#home" className="orgo-nav-link active">Home</a></li>
            <li><a href="#who-we-are" className="orgo-nav-link">About</a></li>
            <li><a href="#products" className="orgo-nav-link">Services</a></li>
            <li><a href="#education" className="orgo-nav-link">Success Stories</a></li>
            <li><a href="#locations" className="orgo-nav-link">Branches</a></li>
            <li><a href="#support" className="orgo-nav-link">Support</a></li>
            <li><a href="#contact" className="orgo-nav-link">Contact</a></li>
          </ul>

          {/* Right Action: Search Bar & Book Now CTA */}
          <div className="orgo-navbar-actions">
            <form className="orgo-search-pill" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search software solutions"
              />
              <button type="submit" className="orgo-search-btn" aria-label="Search">
                <Search size={14} />
              </button>
            </form>

            <a href="#contact" className="btn-orgo-primary" id="navbar-book-now-btn">
              Book Now
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation"
              id="mobile-drawer-toggle"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Orgocloud Clean White Theme) */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 30, 46, 0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 1200,
          }}
          onClick={closeMenu}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "320px",
              maxWidth: "85vw",
              background: "#ffffff",
              boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.15)",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              zIndex: 1250,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "18px",
                borderBottom: "1px solid var(--border-color)",
                marginBottom: "24px",
              }}
            >
              <img src="/logo.png" alt="CBD IT Solutions" style={{ height: "46px", width: "auto" }} />
              <button onClick={closeMenu} style={{ color: "var(--text-dark)" }} aria-label="Close">
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="#home" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Home</a>
              <a href="#who-we-are" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>About</a>
              <a href="#products" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Services</a>
              <a href="#education" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Success Stories</a>
              <a href="#locations" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Branches</a>
              <a href="#support" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Support</a>
              <a href="#contact" onClick={closeMenu} style={{ color: "var(--text-dark)", fontSize: "16px", fontWeight: 600 }}>Contact</a>
            </nav>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="#contact" onClick={closeMenu} className="btn-orgo-primary" style={{ width: "100%", justifyContent: "center" }}>
                Book Now
              </a>
              <a
                href={companyData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orgo-outline"
                style={{ width: "100%", justifyContent: "center", color: "#16a34a", borderColor: "#16a34a" }}
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
