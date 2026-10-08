import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { companyData } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`} id="site-header">
        <div className="container navbar-content">
          {/* Logo in Clean White Pill Badge */}
          <a href="#home" className="logo-pill-badge" id="main-brand-logo" aria-label="CBD IT Solutions Home">
            <img
              src="/logo.png"
              alt="CBD IT Solutions Pvt. Ltd."
              className="navbar-logo-img"
            />
          </a>

          {/* Center Navigation Links (Wix SaaS Style) */}
          <nav className="navbar-links" aria-label="Main Navigation">
            <a href="#home" className="nav-link-item">Home</a>
            <a href="#about" className="nav-link-item">About</a>
            <a href="#products" className="nav-link-item">Solutions</a>
            <a href="#education" className="nav-link-item">Education</a>
            <a href="#locations" className="nav-link-item">Locations</a>
            <a href="#contact" className="nav-link-item">Contact</a>
          </nav>

          {/* Right Action Button */}
          <div className="navbar-right-actions">
            <a
              href={companyData.externalLinks.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-item"
              style={{ fontSize: "14px", color: "#1e293b", fontWeight: 600 }}
            >
              Shop ↗
            </a>
            <a href="#contact" className="btn-pill btn-pill-outline-white btn-pill-sm">
              Contact
            </a>
          </div>

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
      </header>

      {/* Mobile Drawer (Vanilla Yellow Theme) */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(161, 98, 7, 0.25)",
            backdropFilter: "blur(8px)",
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
              background: "var(--vanilla-surface)",
              borderLeft: "1px solid var(--vanilla-border)",
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
                paddingBottom: "20px",
                borderBottom: "1px solid var(--vanilla-border)",
                marginBottom: "24px",
              }}
            >
              <div className="logo-pill-badge" style={{ padding: "5px 14px" }}>
                <img src="/logo.png" alt="CBD IT Solutions" style={{ height: "42px", width: "auto" }} />
              </div>
              <button onClick={closeMenu} style={{ color: "#0f172a" }} aria-label="Close">
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="#home" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>Home</a>
              <a href="#about" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>About Us</a>
              <a href="#products" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>Products & Services</a>
              <a href="#education" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>Tally Education</a>
              <a href="#locations" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>Branch Locations</a>
              <a href="#contact" onClick={closeMenu} style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700 }}>Contact Us</a>
            </nav>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={companyData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary"
                style={{ background: "#25d366", boxShadow: "none" }}
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <a
                href={companyData.externalLinks.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline-white"
              >
                Online Store ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
