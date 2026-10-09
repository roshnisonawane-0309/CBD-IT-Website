import React from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { companyData, productsData } from "../data/content";

export default function Footer() {
  return (
    <footer className="orgo-footer" id="footer">
      <div className="container">
        <div className="orgo-footer-top">
          {/* Brand Column */}
          <div className="orgo-footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/logo.png"
                alt="CBD IT Solutions Pvt. Ltd."
                style={{ height: "48px", width: "auto" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.3px" }}>
                CBD IT Solutions
              </span>
            </div>
            <p>
              Authorized Tally Certified 5-Star Partner with over 25+ years of proven business excellence.
              We empower enterprises with seamless accounting automation, Spine HR & Payroll, CRM, cloud ERP, and professional training.
            </p>
            <div className="orgo-social-icons">
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="orgo-social-btn"
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
                className="orgo-social-btn"
                aria-label="Twitter"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="orgo-social-btn"
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
                className="orgo-social-btn"
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
                className="orgo-social-btn"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="orgo-footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#journey">Products & Solutions</a></li>
              <li><a href="#driving-success">Driving Innovation</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#locations">Office Branches</a></li>
              <li><a href="#support">Helpdesk & Support</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li>
                <a href={companyData.externalLinks.shop} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--orgo-blue)" }}>
                  Online Store <ExternalLink size={12} style={{ display: "inline", verticalAlign: "middle" }} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us & Offices Column */}
          <div className="orgo-footer-contact">
            <h5>Office Locations</h5>
            <ul style={{ gap: "14px" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Phone size={17} style={{ color: "var(--orgo-blue)", marginTop: "4px", flexShrink: 0 }} />
                <div style={{ fontSize: "14px" }}>
                  <div>
                    <a href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, "")}`}>
                      {companyData.contacts.primaryPhone}
                    </a>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    <span style={{ fontSize: "12px", color: "var(--orgo-blue)", fontWeight: 600 }}>Raipur: </span>
                    <a href={`tel:${companyData.contacts.raipurPhone.replace(/\s+/g, "")}`}>
                      {companyData.contacts.raipurPhone}
                    </a>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    <span style={{ fontSize: "12px", color: "var(--orgo-blue)", fontWeight: 600 }}>Jalgaon: </span>
                    <a href={`tel:${companyData.contacts.jalgaonPhone.replace(/\s+/g, "")}`}>
                      {companyData.contacts.jalgaonPhone}
                    </a>
                  </div>
                </div>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Mail size={17} style={{ color: "var(--orgo-blue)", marginTop: "4px", flexShrink: 0 }} />
                <div style={{ fontSize: "14px" }}>
                  <a href={`mailto:${companyData.contacts.primaryEmail}`}>
                    {companyData.contacts.primaryEmail}
                  </a>
                  <br />
                  <a href={`mailto:${companyData.contacts.supportEmail}`}>
                    {companyData.contacts.supportEmail}
                  </a>
                </div>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={17} style={{ color: "var(--orgo-blue)", marginTop: "4px", flexShrink: 0 }} />
                <div style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: "1.5" }}>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <strong style={{ color: "var(--text-dark)" }}>H.O:</strong> {companyData.contacts.headOffice}
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <strong style={{ color: "var(--text-dark)" }}>B.O (Dombivli):</strong> Office No 612, 6th floor, Navare Plaza, Ramnagar, Dombivli (E) 421201
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <strong style={{ color: "var(--text-dark)" }}>B.O (Andheri):</strong> Old Nagardas Road, MD CHS, Patelwadi, Andheri (E), Mumbai
                  </p>
                  <div style={{ marginTop: "8px" }}>
                    <a href="#locations" style={{ color: "var(--orgo-blue)", fontWeight: 600, fontSize: "13px" }}>
                      View all 5 office locations & maps →
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: "18px" }}>
              <a
                href={companyData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orgo-outline"
                style={{ fontSize: "13.5px", padding: "8px 20px" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="orgo-copyright-row">
          <div>
            Copyright © {new Date().getFullYear()} CBD IT Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div>
            Authorized Tally Certified 5-Star Partner
          </div>
        </div>
      </div>
    </footer>
  );
}
