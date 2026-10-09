import React, { useState } from "react";
import {
  LifeBuoy,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Headphones,
  Laptop,
  Users,
  AlertCircle,
  X,
} from "lucide-react";
import { companyData } from "../data/content";

export default function Support({ isModalOpen, onCloseModal }) {
  const [formData, setFormData] = useState({
    subject: "",
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    tallySerial: "",
    supportMode: "",
    issueFaced: "",
    priority: "",
  });

  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [generatedTicketId, setGeneratedTicketId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    const randomId = "CBD-TK-" + Math.floor(10000 + Math.random() * 90000);
    setGeneratedTicketId(randomId);
    setTicketSubmitted(true);
  };

  const resetForm = () => {
    setTicketSubmitted(false);
    setFormData({
      subject: "",
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      tallySerial: "",
      supportMode: "",
      issueFaced: "",
      priority: "",
    });
  };

  const renderTicketForm = (inModal = false) => (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: inModal ? "36px 32px 32px" : "40px 36px",
        boxShadow: inModal ? "0 25px 60px rgba(0,0,0,0.25)" : "0 8px 30px rgba(0,0,0,0.06)",
        border: "1px solid var(--border-color)",
        position: "relative",
        maxWidth: "540px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Modal Close Button if in modal */}
      {inModal && (
        <button
          type="button"
          onClick={onCloseModal}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          aria-label="Close ticket modal"
        >
          <X size={22} />
        </button>
      )}

      {/* Header: "Create your ticket" */}
      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <h3
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-0.5px",
            margin: 0,
          }}
        >
          Create your ticket
        </h3>
      </div>

      {ticketSubmitted ? (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#dcfce7",
              color: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <CheckCircle2 size={34} />
          </div>

          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "9999px",
              backgroundColor: "var(--orgo-blue-soft)",
              color: "var(--orgo-blue)",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Ticket #{generatedTicketId}
          </span>

          <h4 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
            Ticket Logged Successfully!
          </h4>

          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "22px" }}>
            Thank you, <strong>{formData.fullName}</strong>. Our certified Tally support team has received your ticket
            regarding "<em>{formData.subject || "Tally Support"}</em>". A specialist will reach out via{" "}
            <strong>{formData.supportMode || "remote / phone"}</strong> shortly.
          </p>

          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "10px",
              padding: "14px",
              fontSize: "13px",
              color: "#475569",
              textAlign: "left",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div><strong>Company:</strong> {formData.companyName || "N/A"}</div>
            <div><strong>Tally Serial:</strong> {formData.tallySerial || "N/A"}</div>
            <div><strong>Mode:</strong> {formData.supportMode || "Remote"}</div>
            <div><strong>Priority:</strong> {formData.priority || "Standard"}</div>
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button
              type="button"
              onClick={resetForm}
              className="btn-orgo-outline"
              style={{ fontSize: "13.5px", padding: "9px 20px" }}
            >
              Log Another Ticket
            </button>
            {inModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="btn-orgo-primary"
                style={{ fontSize: "13.5px", padding: "9px 20px" }}
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="support-ticket-form">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* 1. Support Ticket Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Support Ticket Subject"
                required
                className="support-exact-input"
              />
            </div>

            {/* 2. Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="support-exact-input"
              />
            </div>

            {/* 3. Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="support-exact-input"
              />
            </div>

            {/* 4. Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="support-exact-input"
              />
            </div>

            {/* 5. Company Name */}
            <div>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="support-exact-input"
              />
            </div>

            {/* 6. Tally Serial Number */}
            <div>
              <input
                type="text"
                name="tallySerial"
                value={formData.tallySerial}
                onChange={handleChange}
                placeholder="Tally Serial Number"
                required
                className="support-exact-input"
              />
            </div>

            {/* 7. Select Support Mode (Dropdown) */}
            <div>
              <select
                name="supportMode"
                value={formData.supportMode}
                onChange={handleChange}
                required
                className="support-exact-select"
              >
                <option value="">Select Support Mode</option>
                <option value="Call">Call</option>
                <option value="In House">In House</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* 8. Issue faced (Textarea) */}
            <div>
              <textarea
                name="issueFaced"
                rows={3}
                value={formData.issueFaced}
                onChange={handleChange}
                placeholder="Issue faced"
                required
                className="support-exact-textarea"
              />
            </div>

            {/* 9. Priority (Dropdown) */}
            <div>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
                className="support-exact-select"
              >
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* 10. SUBMIT NOW Button */}
            <div style={{ marginTop: "6px" }}>
              <button
                type="submit"
                className="support-exact-submit-btn"
                id="support-submit-now-btn"
              >
                SUBMIT NOW
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );

  return (
    <>
      {/* 1. In-Page Dedicated Support Section */}
      <section
        className="orgo-support-section"
        id="support"
        style={{
          padding: "90px 0",
          backgroundColor: "#ffffff",
          borderTop: "1px solid var(--border-color)",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "48px",
              alignItems: "flex-start",
            }}
            className="orgo-support-grid-layout"
          >
            {/* Left Column: Support Center Info & SLA */}
            <div>
              <div style={{ marginBottom: "28px" }}>
                <span
                  className="orgo-eyebrow"
                  style={{
                    color: "var(--orgo-blue)",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Customer Helpdesk
                </span>
                <h2
                  className="orgo-heading"
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    marginTop: "8px",
                    color: "var(--text-dark)",
                    lineHeight: "1.25",
                  }}
                >
                  Need Help? Log Your Support Ticket
                </h2>
                <div
                  className="orgo-header-divider"
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "var(--orgo-blue)",
                    margin: "16px 0",
                  }}
                ></div>
                <p
                  className="orgo-subtext"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    lineHeight: "1.7",
                  }}
                >
                  As an Authorized Tally 5-Star Partner, CBD IT Solutions provides prompt,
                  certified technical support for TallyPrime, license issues, GST e-invoicing errors,
                  data synchronization, multi-user LAN configuration, and customized TDL modules.
                </p>
              </div>

              {/* 4 Support Modes Info Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "18px",
                  marginBottom: "32px",
                }}
                className="orgo-support-modes-grid"
              >
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--orgo-blue-soft)",
                      color: "var(--orgo-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Laptop size={20} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", color: "var(--text-dark)" }}>
                    Remote Support
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                    Instant screen-share troubleshooting via AnyDesk, UltraViewer, or TeamViewer.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--orgo-blue-soft)",
                      color: "var(--orgo-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", color: "var(--text-dark)" }}>
                    Call Assistance
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                    Direct telephonic call guidance by senior accountants and technical engineers.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--orgo-blue-soft)",
                      color: "var(--orgo-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Users size={20} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", color: "var(--text-dark)" }}>
                    Onsite Deployment
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                    Physical engineer visit to your commercial premises for complex setup and audit.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--orgo-blue-soft)",
                      color: "var(--orgo-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Headphones size={20} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", color: "var(--text-dark)" }}>
                    In House Support
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                    Visit our certified branch offices in Belapur, Dombivli, Andheri, Jalgaon, or Raipur.
                  </p>
                </div>
              </div>

              {/* Quick Helpline Strip */}
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "12px",
                  backgroundColor: "var(--orgo-blue-soft)",
                  border: "1px solid #bfdbfe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "var(--orgo-blue)" }}>
                    Emergency Helpline
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-dark)" }}>
                    <a href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, "")}`}>
                      {companyData.contacts.primaryPhone}
                    </a>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Support Hours</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                    Mon – Sat: 9:30 AM – 6:30 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Ticket Form */}
            <div>{renderTicketForm(false)}</div>
          </div>
        </div>
      </section>

      {/* 2. Modal Overlay (if modal is triggered via Navbar/CTA) */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(17, 24, 39, 0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onCloseModal();
            }
          }}
        >
          <div style={{ width: "100%", maxWidth: "520px", margin: "auto" }}>
            {renderTicketForm(true)}
          </div>
        </div>
      )}
    </>
  );
}
