import React, { useState } from "react";
import {
  Quote,
  Star,
  ExternalLink,
  CheckCircle,
  Play,
  ArrowLeft,
  Building,
  MapPin,
  MessageSquare,
  ThumbsUp,
  Headphones,
  Award,
} from "lucide-react";
import { companyData } from "../data/content";

const categories = [
  "All Stories",
  "Tally Solutions",
  "Support & AMC",
  "Cloud & Customization",
  "Education & Training",
];

const testimonialsList = [
  {
    id: 1,
    author: "Mr. Devin Lohana",
    role: "Senior Accounts Manager",
    company: "Vijay Enterprises",
    city: "Mumbai, Maharashtra",
    category: "Support & AMC",
    rating: 5,
    tag: "Verified Client Story",
    date: "October 2021",
    featured: true,
    isVideo: true,
    videoUrl: "https://www.youtube.com/watch?v=Q28tO-5wRAI",
    articleUrl: "https://cbditsolutions.com/review-by-mr-devin-lohana/",
    quote:
      "Mr. Devin Lohana handles accounts for Vijay Enterprises. He shares his firsthand experience with our services and reliable support. At CBD IT Solutions, customer satisfaction is paramount—we firmly believe in our service-first policy with swift ticket resolution.",
    highlights: [
      "Zero downtime during financial year-end closing",
      "Immediate phone and remote support resolution",
      "Custom voucher validation & audit automation",
    ],
  },
  {
    id: 2,
    author: "Rajesh Kumar",
    role: "Director",
    company: "Mumbai Manufacturing Co.",
    city: "Belapur, Navi Mumbai",
    category: "Tally Solutions",
    rating: 5,
    tag: "10+ Years Partnership",
    date: "August 2023",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "CBD IT Solutions has been our trusted Tally partner for over 10 years. Their support team is always available and their in-depth knowledge of TallyPrime multi-user setup has streamlined our plant operations and invoice tracking.",
    highlights: [
      "Multi-user TallyPrime deployment across 3 units",
      "Inventory batch & expiry tracking automation",
      "GST compliance & e-Way bill sync",
    ],
  },
  {
    id: 3,
    author: "Priya Sharma",
    role: "Chief Financial Officer",
    company: "Retail Chain Group",
    city: "Navi Mumbai, Maharashtra",
    category: "Cloud & Customization",
    rating: 5,
    tag: "Cloud Migration",
    date: "November 2023",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "The team at CBD IT Solutions went above and beyond to help us migrate seamlessly from Tally ERP 9 to TallyPrime on Cloud. Smooth transition with zero downtime and total data integrity across our 14 retail branches.",
    highlights: [
      "Centralized cloud data synchronization",
      "Real-time cash flow & sales reports",
      "24/7 disaster recovery & automated backup",
    ],
  },
  {
    id: 4,
    author: "Amit Mehta",
    role: "Managing Partner",
    company: "Trading Enterprises",
    city: "Dombivli, Maharashtra",
    category: "Education & Training",
    rating: 5,
    tag: "Corporate Training",
    date: "January 2024",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "Their Tally education and corporate training program is top-notch. Our accounting staff completed Tally Essential Level 2 with CBD IT and now handles all monthly GST filings, reconciliation, and TDS returns independently without any external consulting costs.",
    highlights: [
      "Certified practical training for in-house staff",
      "Direct reduction in external compliance audits",
      "Custom training modules on banking & payroll",
    ],
  },
  {
    id: 5,
    author: "Vikram Singhania",
    role: "General Manager - IT",
    company: "Logistics & Freight India",
    city: "Andheri, Mumbai",
    category: "Cloud & Customization",
    rating: 5,
    tag: "Custom Integration",
    date: "April 2024",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "The custom WhatsApp and SMS integration developed by CBD IT Solutions for automated payment reminders in Tally has cut our outstanding debtor days by 35%. Their post-implementation support is second to none.",
    highlights: [
      "Custom TDL plugin for instant invoice messaging",
      "Automated payment ledger sync",
      "Dedicated account manager for fast support",
    ],
  },
  {
    id: 6,
    author: "Sunil Agrawal",
    role: "Proprietor",
    company: "Agrawal Steels & Hardware",
    city: "Raipur, Chhattisgarh",
    category: "Support & AMC",
    rating: 5,
    tag: "Regional Branch Client",
    date: "July 2024",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "Having a local branch of CBD IT in Raipur makes a world of difference. Whenever we face any Tally database corruption or network issue, their field engineer arrives within hours or solves it on AnyDesk immediately.",
    highlights: [
      "Local on-site support in Raipur",
      "Tally Annual Maintenance Contract (AMC)",
      "Periodic database health audits",
    ],
  },
  {
    id: 7,
    author: "Mahesh Patil",
    role: "Managing Director",
    company: "Khandesh Agro Industries",
    city: "Jalgaon, Maharashtra",
    category: "Tally Solutions",
    rating: 5,
    tag: "Agri-Business Solutions",
    date: "September 2024",
    featured: false,
    articleUrl: "https://cbditsolutions.com/testimonials/",
    quote:
      "CBD IT Solutions Jalgaon branch helped us digitize our mandis and mill accounts with customized billing modules. We are grateful for their continuous guidance and trustworthy advice over the years.",
    highlights: [
      "Custom weighbridge-to-Tally integration",
      "Farmer purchase registers & GST e-Invoice",
      "Prompt branch phone & remote assistance",
    ],
  },
];

export default function TestimonialsPage({ onBackToHome, onOpenSupportModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredList =
    selectedCategory === "All Stories"
      ? testimonialsList
      : testimonialsList.filter((item) => item.category === selectedCategory);

  return (
    <div className="cbd-testimonials-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* 1. Header Banner & Breadcrumb */}
      <section
        style={{
          background: "linear-gradient(135deg, #172541 0%, #0f5999 100%)",
          color: "#ffffff",
          padding: "60px 0 50px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #172541 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Back button & Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <button
              type="button"
              onClick={onBackToHome}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13.5px",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>

            <nav
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              aria-label="Breadcrumb"
            >
              <button
                type="button"
                onClick={onBackToHome}
                style={{
                  background: "none",
                  border: "none",
                  color: "#cbd5e1",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: "13px",
                }}
              >
                Home
              </button>
              <span>/</span>
              <span style={{ color: "#cbd5e1" }}>Blog</span>
              <span>/</span>
              <span style={{ color: "#ffffff", fontWeight: 600 }}>Testimonials</span>
            </nav>
          </div>

          <div style={{ maxWidth: "820px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(235, 38, 41, 0.2)",
                color: "#ff8082",
                border: "1px solid rgba(235, 38, 41, 0.35)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "14px",
              }}
            >
              Customer Reviews & Trust
            </span>
            <h1
              style={{
                fontSize: "clamp(28px, 4.5vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Client Testimonials & Success Stories
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#cbd5e1",
                lineHeight: 1.6,
                maxWidth: "700px",
                marginBottom: "24px",
              }}
            >
              Trusted by 5,000+ businesses across Mumbai, Navi Mumbai, Dombivli, Raipur, and Jalgaon.
              Explore our real client experiences and access the official live portal below.
            </p>

            {/* Quick Metrics */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>5,000+</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>Satisfied Clients</div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>10+ Years</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>3-Star Certified Partner</div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>4.9 / 5.0</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>Client Satisfaction Score</div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>5 Offices</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>Belapur, Dombivli, Andheri, Raipur, Jalgaon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Spotlight Section: Official Testimonials Portal & Video Review */}
      <section style={{ padding: "40px 0 20px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginTop: "-30px",
              position: "relative",
              zIndex: 3,
            }}
          >
            {/* Spotlight Card 1: Official Testimonials Link Card (Requested by User) */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "2px solid #0f5999",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#0f5999",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderBottomLeftRadius: "8px",
                  letterSpacing: "0.5px",
                }}
              >
                Official Live Portal
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(15, 89, 153, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0f5999",
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#172541", margin: 0 }}>
                      CBD IT Solutions Official Hub
                    </h3>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>cbditsolutions.com/testimonials</span>
                  </div>
                </div>

                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "16px" }}>
                  Access our official live website repository of client reviews, case studies, TallyPrime customer feedback, and regular business blogs directly on our main domain.
                </p>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    border: "1px dashed #cbd5e1",
                    marginBottom: "20px",
                    fontSize: "13px",
                    color: "#334155",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <CheckCircle size={16} color="#0f5999" style={{ flexShrink: 0 }} />
                  <span>
                    Direct Link: <strong>https://cbditsolutions.com/testimonials/</strong>
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="https://cbditsolutions.com/testimonials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orgo-btn-primary"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  <span>Open Official Testimonials</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={onOpenSupportModal}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    color: "#172541",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e2e8f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                >
                  <Headphones size={15} />
                  <span>Get Support</span>
                </button>
              </div>
            </div>

            {/* Spotlight Card 2: Featured Video Review - Mr. Devin Lohana */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(235, 38, 41, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#eb2629",
                      }}
                    >
                      <MessageSquare size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#172541", margin: 0 }}>
                        Review by Mr. Devin Lohana
                      </h3>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>Vijay Enterprises • #CustomerSpeaks</span>
                    </div>
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "#fef2f2",
                      color: "#dc2626",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "6px",
                      border: "1px solid #fecaca",
                    }}
                  >
                    <Play size={10} fill="#dc2626" /> Video Story
                  </span>
                </div>

                <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.6, marginBottom: "16px" }}>
                  <em>
                    "Mr. Devin Lohana handles accounts for Vijay Enterprises. He shares his firsthand experience with our services and reliable support. Customer satisfaction is our top priority through our service-first commitment."
                  </em>
                </p>

                {/* Video Preview Box */}
                <div
                  style={{
                    backgroundColor: "#172541",
                    borderRadius: "8px",
                    padding: "16px",
                    color: "#ffffff",
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <a
                      href="https://www.youtube.com/watch?v=Q28tO-5wRAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#eb2629",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        boxShadow: "0 4px 12px rgba(235, 38, 41, 0.4)",
                        flexShrink: 0,
                      }}
                      aria-label="Play video on YouTube"
                    >
                      <Play size={18} fill="#ffffff" style={{ marginLeft: "2px" }} />
                    </a>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Watch Client Interview</div>
                      <div style={{ fontSize: "11.5px", color: "#94a3b8" }}>Hosted on official YouTube channel</div>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/watch?v=Q28tO-5wRAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#93c5fd",
                      fontSize: "12px",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>Watch</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="https://cbditsolutions.com/review-by-mr-devin-lohana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    backgroundColor: "#172541",
                    color: "#ffffff",
                    padding: "11px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <span>Read Full Article</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Customer Testimonial Cards Grid */}
      <section style={{ padding: "40px 0 60px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="orgo-eyebrow">Verified Experiences</span>
            <h2 className="orgo-heading">Stories From Across Our Branches</h2>
            <div className="orgo-header-divider" />
            <p style={{ maxWidth: "650px", margin: "12px auto 0 auto", color: "#64748b", fontSize: "15px" }}>
              Filter by service category to explore how we support enterprises with Tally implementation, compliance, customization, and dedicated AMC.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "36px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: selectedCategory === cat ? "1px solid #0f5999" : "1px solid #e2e8f0",
                  backgroundColor: selectedCategory === cat ? "#0f5999" : "#ffffff",
                  color: selectedCategory === cat ? "#ffffff" : "#475569",
                  boxShadow: selectedCategory === cat ? "0 4px 12px rgba(15, 89, 153, 0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredList.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "26px",
                  border: item.featured ? "2px solid #0f5999" : "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div>
                  {/* Top Metadata: Tag & Stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11.5px",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(15, 89, 153, 0.08)",
                        color: "#0f5999",
                      }}
                    >
                      {item.tag}
                    </span>

                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  {/* Quote statement */}
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "#334155",
                      lineHeight: 1.65,
                      marginBottom: "18px",
                      position: "relative",
                    }}
                  >
                    “{item.quote}”
                  </p>

                  {/* Bullet Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div
                      style={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        padding: "12px 14px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "#64748b",
                          marginBottom: "6px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Key Highlights
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                        {item.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            style={{
                              fontSize: "12.5px",
                              color: "#475569",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <span style={{ color: "#0f5999", fontWeight: "bold" }}>✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Author Info Card Footer */}
                <div
                  style={{
                    paddingTop: "16px",
                    borderTop: "1px solid #f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#172541",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "13px",
                      }}
                    >
                      {item.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#172541", margin: 0 }}>
                        {item.author}
                      </h4>
                      <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  <a
                    href={item.articleUrl || "https://cbditsolutions.com/testimonials/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0f5999",
                      padding: "6px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    title="Read on CBD IT Solutions"
                    aria-label={`Read story by ${item.author}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Call-to-Action Bar */}
      <section
        style={{
          background: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          padding: "50px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: "#172541",
              borderRadius: "16px",
              padding: "40px 32px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <span
                style={{
                  color: "#ff8082",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                Experience the Difference
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "6px", marginBottom: "8px" }}>
                Ready to Experience 5-Star Tally & IT Solutions?
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>
                Whether you need assistance with TallyPrime licenses, customized modules, AMC support, or cloud sync, our dedicated team is here to help.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={onOpenSupportModal}
                className="cbd-btn-enquiry"
                style={{
                  backgroundColor: "#eb2629",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Headphones size={16} />
                <span>Create Support Ticket</span>
              </button>

              <button
                type="button"
                onClick={onBackToHome}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
