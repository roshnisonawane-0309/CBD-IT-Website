import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Headphones,
  FileText,
  Star,
  Zap,
  Cloud,
  Users,
  Settings,
  PhoneCall,
  MessageCircle,
  Award,
  Filter,
} from "lucide-react";
import { companyData } from "../data/content";

const categories = [
  "All Products",
  "Tally Licenses",
  "TSS Renewals",
  "Cloud & Hosting",
  "Enterprise Software",
  "Add-ons & AMC",
];

const productsList = [
  {
    id: "tally-silver",
    name: "TallyPrime Silver (Single User)",
    category: "Tally Licenses",
    badge: "Most Popular",
    price: "₹18,000",
    billingPeriod: "+ 18% GST (Perpetual License)",
    rating: 5,
    description:
      "Ideal for small businesses and single PCs. Includes comprehensive accounting, GST filing, e-Invoicing, e-Way bills, inventory management, and connected banking.",
    features: [
      "Perpetual lifetime license for 1 operating system",
      "Automatic GST e-Invoice & e-Way bill generation",
      "Auto bank reconciliation with 100+ supported banks",
      "Standard financial MIS reports, balance sheets & P&L",
      "Includes 1-Year free Tally Software Services (TSS)",
    ],
    popular: true,
    tag: "Single PC",
  },
  {
    id: "tally-gold",
    name: "TallyPrime Gold (Multi User)",
    category: "Tally Licenses",
    badge: "Best for SMEs",
    price: "₹54,000",
    billingPeriod: "+ 18% GST (Perpetual License)",
    rating: 5,
    description:
      "Designed for growing enterprises needing simultaneous multi-workstation access over local area network (LAN) with granular user permission security.",
    features: [
      "Unlimited simultaneous users on Local Area Network (LAN)",
      "Role-based security & multi-level user permissions",
      "Centralized company database for accounts, billing & warehouse",
      "Concurrent data entry with real-time sync",
      "Includes 1-Year free Tally Software Services (TSS)",
    ],
    popular: true,
    tag: "Unlimited LAN Users",
  },
  {
    id: "tally-server",
    name: "TallyPrime Server",
    category: "Tally Licenses",
    badge: "Enterprise Grade",
    price: "₹2,70,000",
    billingPeriod: "+ 18% GST (Enterprise Edition)",
    rating: 5,
    description:
      "Enterprise class concurrency engine that ensures blazing fast reports, zero database downtime, and robust stability for 10+ concurrent users.",
    features: [
      "Dedicated server-based multi-user concurrency architecture",
      "Real-time monitoring of active users & sessions",
      "Zero read/write queuing during peak billing hours",
      "Automated backup triggers & high data confidentiality",
      "Eliminates server crashes & data index rebuild delays",
    ],
    popular: false,
    tag: "High Concurrency",
  },
  {
    id: "tss-silver",
    name: "Tally Software Services (TSS) Silver",
    category: "TSS Renewals",
    badge: "Annual Renewal",
    price: "₹3,600",
    billingPeriod: "+ 18% GST / Year",
    rating: 5,
    description:
      "Keep your TallyPrime Silver up to date with the latest statutory compliance changes, connected e-Invoicing capabilities, remote access, and product upgrades.",
    features: [
      "1-Year continuous upgrades to newest TallyPrime releases",
      "Uninterrupted GST e-Invoice & e-Way bill cloud connectivity",
      "Secure remote access & mobile browser reports access",
      "Automated banking statement templates update",
      "Priority technical support from CBD IT Solutions",
    ],
    popular: false,
    tag: "1 Year Validity",
  },
  {
    id: "tss-gold",
    name: "Tally Software Services (TSS) Gold",
    category: "TSS Renewals",
    badge: "Annual Renewal",
    price: "₹10,800",
    billingPeriod: "+ 18% GST / Year",
    rating: 5,
    description:
      "Annual renewal for TallyPrime Gold multi-user licenses to ensure full compliance with government tax mandates, connected services, and multi-user remote access.",
    features: [
      "Full multi-user product updates and statutory patches",
      "Unlimited connected e-Way bill and e-Invoicing sync",
      "Anywhere remote data sync between multiple branch offices",
      "Mobile and web-based financial dashboards",
      "Dedicated account manager support from CBD IT",
    ],
    popular: false,
    tag: "1 Year Multi-User",
  },
  {
    id: "tally-cloud",
    name: "Tally on Cloud (Anywhere Access)",
    category: "Cloud & Hosting",
    badge: "Work From Anywhere",
    price: "From ₹450",
    billingPeriod: "/ User / Month (+ GST)",
    rating: 5,
    description:
      "Access your genuine TallyPrime from any Mac, Windows laptop, tablet, or smartphone 24/7 with enterprise-level SSD speed and automated daily backups.",
    features: [
      "Access Tally anywhere via secure remote desktop / browser",
      "Works on Windows, Mac, iPad, iPhone, and Android",
      "Daily automated encrypted cloud backups on AWS / Azure",
      "Dedicated high-speed cloud server with 99.9% uptime",
      "Local printer & barcode scanner connectivity supported",
    ],
    popular: true,
    tag: "Remote Access",
  },
  {
    id: "spine-hr",
    name: "Spine HR & Payroll Software",
    category: "Enterprise Software",
    badge: "Comprehensive HRMS",
    price: "Custom Quote",
    billingPeriod: "Based on employee count",
    rating: 5,
    description:
      "All-in-one HRMS solution covering biometric attendance, leave management, automated payroll calculation, statutory compliance, and employee self-service portal.",
    features: [
      "End-to-end payroll processing with automated tax calculations",
      "Biometric hardware & mobile attendance with Geo-fencing",
      "Statutory compliance: PF, ESI, PT, TDS Form 16 generator",
      "Employee self-service (ESS) web portal and mobile app",
      "Seamless integration with TallyPrime accounting ledger",
    ],
    popular: false,
    tag: "HR & Payroll",
  },
  {
    id: "cbd-crm",
    name: "CBD Enterprise CRM",
    category: "Enterprise Software",
    badge: "Sales Growth",
    price: "Custom Quote",
    billingPeriod: "Flexible licensing plans",
    rating: 5,
    description:
      "Transform your sales cycle, capture leads across multi-channels, track follow-ups, dispatch quotes, and accelerate conversion rates with automated pipelines.",
    features: [
      "Lead generation capture from website, IndiaMART, Justdial",
      "Pipeline stage tracking & deal value analytics",
      "Automated WhatsApp & Email quotation dispatches",
      "Sales executive performance tracking & visit logs",
      "Centralized customer history and ticket history",
    ],
    popular: false,
    tag: "CRM & Leads",
  },
  {
    id: "telecaller-suite",
    name: "Telecaller Solution",
    category: "Enterprise Software",
    badge: "Call Center Tech",
    price: "Custom Quote",
    billingPeriod: "Per agent monthly / annual",
    rating: 5,
    description:
      "Smart outbound and inbound calling management system for sales outreach, client relationship teams, and telemarketing agents.",
    features: [
      "Click-to-call dialing directly from customer CRM records",
      "Call recording and agent talk-time productivity metrics",
      "Inbound caller identification and instant ticket lookup",
      "Lead disposition tracking and automated callback alarms",
      "Cloud telephony integration with leading telecom providers",
    ],
    popular: false,
    tag: "Call Automation",
  },
  {
    id: "sarathi-tracker",
    name: "Sarathi Field Force Tracker",
    category: "Enterprise Software",
    badge: "Field Operations",
    price: "Custom Quote",
    billingPeriod: "Per field executive",
    rating: 5,
    description:
      "Supervise on-ground sales and service teams with GPS tracking, client visit reporting, order taking, and digital signature collection.",
    features: [
      "Real-time GPS tracking and daily route travel history",
      "Geo-tagged client check-in / check-out with photos",
      "On-field order booking & payment collection logging",
      "Expense reimbursement management with bill uploads",
      "Live manager dashboard with visit deviation alerts",
    ],
    popular: false,
    tag: "Field GPS",
  },
  {
    id: "tally-whatsapp-addon",
    name: "Auto WhatsApp & Email Voucher Add-on",
    category: "Add-ons & AMC",
    badge: "Must-Have Utility",
    price: "₹3,500",
    billingPeriod: "+ GST (One-time Setup)",
    rating: 5,
    description:
      "Instantly deliver PDF invoices, receipts, and ledger statements to customer WhatsApp and Email directly upon saving any voucher in TallyPrime.",
    features: [
      "1-Click WhatsApp invoice dispatch upon saving voucher",
      "Automated outstanding payment reminder messages",
      "Custom message templates with customer company name",
      "Official Meta WhatsApp API / Gateway integration",
      "Significantly speeds up debtor receivables collection",
    ],
    popular: true,
    tag: "TDL Add-on",
  },
  {
    id: "tally-amc-plan",
    name: "Comprehensive Tally AMC Contract",
    category: "Add-ons & AMC",
    badge: "365-Day Peace of Mind",
    price: "From ₹6,000",
    billingPeriod: "/ Year (+ GST)",
    rating: 5,
    description:
      "Unlimited remote and phone technical support from certified Tally engineers. Covers database health checks, error troubleshooting, and re-installation.",
    features: [
      "Unlimited AnyDesk & phone troubleshooting support",
      "Priority ticket resolution with dedicated desk phone",
      "Quarterly Tally database health check and optimization",
      "Assistance during financial year-end closing & audits",
      "Available across all 5 branches (Mumbai, Belapur, Dombivli, Raipur, Jalgaon)",
    ],
    popular: true,
    tag: "Full Support",
  },
];

export default function ShopPage({ onBackToHome, onOpenSupportModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    message: "",
  });

  const filteredProducts = productsList.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenEnquiryModal = (product) => {
    setSelectedProduct(product);
    setEnquirySuccess(false);
  };

  const handleCloseEnquiryModal = () => {
    setSelectedProduct(null);
    setEnquirySuccess(false);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      // Auto close after 3s
      setSelectedProduct(null);
      setEnquirySuccess(false);
    }, 3500);
  };

  const getWhatsAppLinkForProduct = (productName) => {
    const text = encodeURIComponent(
      `Hello CBD IT Solutions, I am interested in purchasing/inquiry about: ${productName}. Please share pricing, license details, and free demo.`
    );
    return `https://api.whatsapp.com/send?phone=919821950999&text=${text}`;
  };

  return (
    <div className="cbd-shop-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* 1. Header Banner & Breadcrumbs */}
      <section
        style={{
          background: "linear-gradient(135deg, #172541 0%, #0f5999 100%)",
          color: "#ffffff",
          padding: "54px 0 46px 0",
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
          {/* Top row: Back to home button & Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "20px",
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
              <span style={{ color: "#ffffff", fontWeight: 600 }}>Shop & Products Store</span>
            </nav>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "5px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(235, 38, 41, 0.2)",
                color: "#ff8082",
                border: "1px solid rgba(235, 38, 41, 0.35)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: "12px",
              }}
            >
              Official Software Store
            </span>
            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                marginBottom: "14px",
              }}
            >
              CBD IT Solutions Product Store
            </h1>
            <p
              style={{
                fontSize: "15.5px",
                color: "#cbd5e1",
                lineHeight: 1.6,
                maxWidth: "760px",
                marginBottom: "20px",
              }}
            >
              Authorized 5-Star Tally Partner delivering genuine TallyPrime software licenses,
              TSS renewals, Cloud hosting, Spine HRMS, CRM, and tailored business automation tools.
            </p>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "13px",
                color: "#e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color="#4ade80" />
                <span>100% Genuine Certified Licenses</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={16} color="#60a5fa" />
                <span>25+ Years Experience</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Headphones size={16} color="#fbbf24" />
                <span>Free Remote Installation Support</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Zap size={16} color="#f472b6" />
                <span>Instant License Activation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filters Bar */}
      <section
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          position: "sticky",
          top: "76px",
          zIndex: 90,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="container" style={{ padding: "16px 20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#f8fafc",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "8px 14px",
                minWidth: "260px",
                maxWidth: "360px",
                flex: "1 1 260px",
              }}
            >
              <Search size={16} color="#64748b" />
              <input
                type="text"
                placeholder="Search products, Tally, cloud, CRM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  width: "100%",
                  fontSize: "13.5px",
                  color: "#1e293b",
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ×
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                overflowX: "auto",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: selectedCategory === cat ? "1px solid #0f5999" : "1px solid #e2e8f0",
                    backgroundColor: selectedCategory === cat ? "#0f5999" : "#ffffff",
                    color: selectedCategory === cat ? "#ffffff" : "#475569",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid Section */}
      <section style={{ padding: "40px 0 60px 0" }}>
        <div className="container">
          {/* Results count & Quick Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
              fontSize: "14px",
              color: "#64748b",
            }}
          >
            <span>
              Showing <strong>{filteredProducts.length}</strong> software solutions & licenses
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "#0f5999", fontWeight: 600 }}>
                Need personalized advice?
              </span>
              <a
                href="tel:+919821950999"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#0f5999",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                <PhoneCall size={13} />
                <span>+91 98219 50999</span>
              </a>
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "48px 24px",
                textAlign: "center",
                border: "1px dashed #cbd5e1",
              }}
            >
              <Search size={36} color="#94a3b8" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "18px", color: "#172541", marginBottom: "8px" }}>
                No products found matching "{searchQuery}"
              </h3>
              <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "16px" }}>
                Try adjusting your search terms or view all products in the catalog.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Products");
                }}
                className="orgo-btn-primary"
                style={{ padding: "8px 20px", fontSize: "13.5px" }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: product.popular ? "2px solid #0f5999" : "1px solid #e2e8f0",
                    boxShadow: product.popular
                      ? "0 8px 24px rgba(15, 89, 153, 0.12)"
                      : "0 4px 15px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px",
                    position: "relative",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = product.popular
                      ? "0 8px 24px rgba(15, 89, 153, 0.12)"
                      : "0 4px 15px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  {/* Top Badges */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "3px 9px",
                          borderRadius: "4px",
                          backgroundColor: product.popular ? "rgba(15, 89, 153, 0.1)" : "#f1f5f9",
                          color: product.popular ? "#0f5999" : "#475569",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {product.tag}
                      </span>

                      {product.badge && (
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "3px 8px",
                            borderRadius: "4px",
                            backgroundColor: product.popular ? "#eb2629" : "#f1f5f9",
                            color: product.popular ? "#ffffff" : "#172541",
                          }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#172541",
                        lineHeight: 1.3,
                        marginBottom: "6px",
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* Category & Rating */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "14px",
                        fontSize: "12px",
                        color: "#64748b",
                      }}
                    >
                      <span>{product.category}</span>
                      <span>•</span>
                      <div style={{ display: "flex", gap: "1px" }}>
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                    </div>

                    {/* Price block */}
                    <div
                      style={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        padding: "12px 14px",
                        marginBottom: "16px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span style={{ fontSize: "22px", fontWeight: 800, color: "#0f5999" }}>
                          {product.price}
                        </span>
                        <span style={{ fontSize: "11.5px", color: "#64748b" }}>
                          {product.billingPeriod}
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#475569",
                        lineHeight: 1.55,
                        marginBottom: "16px",
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Key Features Bullet Points */}
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "#64748b",
                          marginBottom: "8px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Included Features
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {product.features.map((feat, fi) => (
                          <li
                            key={fi}
                            style={{
                              fontSize: "12.5px",
                              color: "#334155",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "7px",
                              lineHeight: 1.4,
                            }}
                          >
                            <CheckCircle
                              size={14}
                              color="#0f5999"
                              style={{ marginTop: "2px", flexShrink: 0 }}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiryModal(product)}
                      className="orgo-btn-primary"
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <span>Inquire / Get Quote</span>
                    </button>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <a
                        href={getWhatsAppLinkForProduct(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          backgroundColor: "#25D366",
                          color: "#ffffff",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          fontSize: "12.5px",
                          fontWeight: 600,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={onOpenSupportModal}
                        style={{
                          backgroundColor: "#f1f5f9",
                          color: "#172541",
                          border: "1px solid #cbd5e1",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          fontSize: "12.5px",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <Headphones size={13} />
                        <span>Support</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Enterprise Assistance & Demo Callout */}
      <section
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          padding: "50px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: "#172541",
              borderRadius: "16px",
              padding: "36px 32px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span
                style={{
                  color: "#ff8082",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                Expert Guidance
              </span>
              <h3 style={{ fontSize: "22px", fontWeight: 800, marginTop: "6px", marginBottom: "8px" }}>
                Need Help Choosing the Right Tally Edition or Custom Module?
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                Our senior software consultants offer free technical audits, workflow analysis,
                and personalized demonstrations for your accounting and billing teams.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="tel:+919821950999"
                style={{
                  backgroundColor: "#eb2629",
                  color: "#ffffff",
                  padding: "11px 20px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <PhoneCall size={15} />
                <span>Call +91 98219 50999</span>
              </a>

              <button
                type="button"
                onClick={onOpenSupportModal}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  padding: "11px 18px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Headphones size={15} />
                <span>Create Support Ticket</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Instant Quotation / Enquiry Modal */}
      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            zIndex: 1200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "cbdFadeIn 0.2s ease-out forwards",
          }}
          onClick={handleCloseEnquiryModal}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              maxWidth: "520px",
              width: "100%",
              padding: "28px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                borderBottom: "1px solid #f1f5f9",
                paddingBottom: "12px",
              }}
            >
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f5999", textTransform: "uppercase" }}>
                  Product Enquiry
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#172541", margin: 0 }}>
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseEnquiryModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                ×
              </button>
            </div>

            {enquirySuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <CheckCircle size={48} color="#22c55e" style={{ margin: "0 auto 12px auto" }} />
                <h4 style={{ fontSize: "18px", color: "#172541", marginBottom: "8px" }}>
                  Quotation Request Received!
                </h4>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.5 }}>
                  Thank you for your interest. A certified CBD IT Solutions product consultant will
                  contact you shortly at <strong>{enquiryForm.phone || "your number"}</strong> with official pricing,
                  license delivery details, and demo access.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "10px 14px", borderRadius: "8px", fontSize: "13px" }}>
                  <strong>Selected Edition:</strong> {selectedProduct.name} ({selectedProduct.price})
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: "6px",
                      border: "1px solid #cbd5e1",
                      fontSize: "13.5px",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile Number"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: "6px",
                        border: "1px solid #cbd5e1",
                        fontSize: "13.5px",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="business@example.com"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: "6px",
                        border: "1px solid #cbd5e1",
                        fontSize: "13.5px",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      Company / Firm Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={enquiryForm.company}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: "6px",
                        border: "1px solid #cbd5e1",
                        fontSize: "13.5px",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="City (e.g. Mumbai, Raipur)"
                      value={enquiryForm.city}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: "6px",
                        border: "1px solid #cbd5e1",
                        fontSize: "13.5px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g. We have 3 branches and need multi-user cloud access..."
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid #cbd5e1",
                      fontSize: "13px",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <button
                    type="submit"
                    className="orgo-btn-primary"
                    style={{
                      flex: 1,
                      padding: "11px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Submit Quotation Request
                  </button>

                  <a
                    href={getWhatsAppLinkForProduct(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#25D366",
                      color: "#ffffff",
                      padding: "11px 16px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
