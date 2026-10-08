import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { companyData, productsData } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer-dark-wrapper" id="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="logo-pill-badge" style={{ padding: "6px 16px" }}>
              <img
                src="/logo.png"
                alt="CBD IT Solutions Pvt. Ltd."
                style={{ height: "50px", width: "auto" }}
              />
            </div>
            <p>
              <strong>CBD IT Solutions Pvt. Ltd.</strong> — Authorized Tally
              Certified 5-Star Partner for over 25 years. Delivering
              trusted enterprise business accounting, payroll, CRM, and cloud
              solutions to organizations across India and abroad.
            </p>
            <div className="social-pills-row">
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                </svg>
              </a>
              <a
                href={companyData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="Twitter / X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>
              <a
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={companyData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col-nav">
            <h4>Navigation</h4>
            <ul className="footer-link-stack">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Solutions</a></li>
              <li><a href="#education">Tally Education</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#locations">Office Branches</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Software Products */}
          <div className="footer-col-nav">
            <h4>Products</h4>
            <ul className="footer-link-stack">
              {productsData.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>{p.name}</a>
                </li>
              ))}
              <li>
                <a
                  href={companyData.externalLinks.shop}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Online Shop ↗
                </a>
              </li>
              <li>
                <a
                  href={companyData.externalLinks.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Downloads ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col-nav">
            <h4>Head Office</h4>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "14px", lineHeight: "1.6" }}>
              810, B Wing, Punit Tower 2, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", marginBottom: "8px" }}>
              <strong>Phone:</strong> {companyData.contacts.primaryPhone}
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>
              <strong>Email:</strong> {companyData.contacts.primaryEmail}
            </p>

            <a
              href={companyData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline-white btn-pill-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              WhatsApp Support ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} CBD IT Solutions Pvt. Ltd. All rights reserved.</p>
          <p>Authorized Tally 5-Star Partner | Navi Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
