import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    email: "",
    business: "",
    subject: "Enquiry for Digital Marketing",
    question: "We want to know more about your services.",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    setSubmitted(true);
  };

  return (
    <section className="orgo-contact-section" id="contact">
      {/* Dynamic Orgocloud / Odoo Wavy Background Shape */}
      <div className="orgo-wavy-shape-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1440 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            {/* Top soft wave */}
            <linearGradient id="waveLight1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3984c6" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#3984c6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3984c6" stopOpacity="0.28" />
            </linearGradient>

            {/* Mid ribbon wave */}
            <linearGradient id="waveMid2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3984c6" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#3984c6" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#2b689c" stopOpacity="0.6" />
            </linearGradient>

            {/* Prominent right side wave */}
            <linearGradient id="waveDark3" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#3984c6" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#2b689c" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#1e5282" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Top flowing ribbon layer */}
          <path
            d="M320,120 C520,70 780,180 1020,100 C1180,50 1320,80 1440,110 L1440,0 L320,0 Z"
            fill="url(#waveLight1)"
          />

          {/* Broad soft wave across top-center to right */}
          <path
            d="M380,140 C680,60 920,220 1200,160 C1320,130 1390,170 1440,210 L1440,540 C1360,480 1220,380 1100,320 C960,250 680,310 480,240 C380,200 340,170 380,140 Z"
            fill="url(#waveLight1)"
          />

          {/* Mid crossing wave ribbon */}
          <path
            d="M620,160 C840,120 1040,220 1220,200 C1340,180 1410,240 1440,310 L1440,560 C1380,480 1310,400 1240,350 C1120,270 940,300 780,260 C680,230 600,190 620,160 Z"
            fill="url(#waveMid2)"
          />

          {/* Bottom gentle wave rising under button */}
          <path
            d="M180,620 C380,520 640,540 880,510 C1120,480 1310,540 1440,570 L1440,620 Z"
            fill="url(#waveLight1)"
          />

          {/* Right prominent vertical blue wave crest (exactly like screenshot) */}
          <path
            d="M1080,210 C1200,240 1310,280 1370,360 C1420,420 1440,490 1440,580 L1440,210 C1380,190 1260,180 1080,210 Z"
            fill="url(#waveMid2)"
          />
          <path
            d="M1230,210 C1310,240 1380,310 1420,390 C1440,440 1440,510 1440,560 L1440,210 Z"
            fill="url(#waveDark3)"
          />
        </svg>
      </div>

      <div className="container orgo-form-container">
        {/* Section Heading: "Contact Us" */}
        <h2 className="orgo-contact-title">Contact Us</h2>

        {submitted ? (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              padding: "40px",
              background: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              textAlign: "center",
              border: "1px solid #ced4da",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#dcfce7",
                color: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#141e2e" }}>
              Thank you, {formData.name}!
            </h3>
            <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px" }}>
              Your inquiry has been submitted successfully. We will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "+91 ",
                  email: "",
                  business: "",
                  subject: "Enquiry for Digital Marketing",
                  question: "We want to know more about your services.",
                });
              }}
              className="orgo-exact-submit-btn"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} id="orgocloud-exact-form">
            <div className="orgo-form-table-layout">
              {/* Row 1: Your Name * */}
              <div className="orgo-form-row">
                <label className="orgo-field-label" htmlFor="orgo-f-name">
                  Your Name <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <input
                    type="text"
                    id="orgo-f-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="orgo-exact-input"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number * */}
              <div className="orgo-form-row">
                <label className="orgo-field-label" htmlFor="orgo-f-phone">
                  Phone Number <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <input
                    type="tel"
                    id="orgo-f-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="orgo-exact-input"
                  />
                </div>
              </div>

              {/* Row 3: Your Email * */}
              <div className="orgo-form-row">
                <label className="orgo-field-label" htmlFor="orgo-f-email">
                  Your Email <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <input
                    type="email"
                    id="orgo-f-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="orgo-exact-input"
                  />
                </div>
              </div>

              {/* Row 4: Your Business * */}
              <div className="orgo-form-row">
                <label className="orgo-field-label" htmlFor="orgo-f-business">
                  Your Business <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <input
                    type="text"
                    id="orgo-f-business"
                    name="business"
                    placeholder="Enter Your Business Details"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="orgo-exact-input"
                  />
                </div>
              </div>

              {/* Row 5: Subject * */}
              <div className="orgo-form-row">
                <label className="orgo-field-label" htmlFor="orgo-f-subject">
                  Subject <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <input
                    type="text"
                    id="orgo-f-subject"
                    name="subject"
                    placeholder="Enquiry for Digital Marketing"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="orgo-exact-input"
                  />
                </div>
              </div>

              {/* Row 6: Your Question * */}
              <div className="orgo-form-row align-top">
                <label className="orgo-field-label" htmlFor="orgo-f-question" style={{ paddingTop: "8px" }}>
                  Your Question <span className="req">*</span>
                </label>
                <div className="orgo-field-control">
                  <textarea
                    id="orgo-f-question"
                    name="question"
                    rows={3}
                    placeholder="We want to know more about your services."
                    value={formData.question}
                    onChange={handleChange}
                    required
                    className="orgo-exact-textarea"
                  />
                </div>
              </div>

              {/* Row 7: Submit Button */}
              <div className="orgo-form-row" style={{ marginTop: "12px" }}>
                <div className="orgo-submit-spacer"></div>
                <div className="orgo-field-control">
                  <button type="submit" className="orgo-exact-submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
