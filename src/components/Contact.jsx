import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "TallyPrime",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="light-section" id="contact">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-headline">Connect With Our Specialists</h2>
          <p className="section-subtext">
            Whatever your query regarding accounting software, migrations, or corporate training — our team is here to assist.
          </p>
        </div>

        <div className="contact-grid-modern">
          {/* Direct Channels */}
          <div className="contact-channels-column">
            <div className="channel-card-modern">
              <div className="channel-icon-pill">
                <Phone size={22} />
              </div>
              <div className="channel-info-body">
                <h5>Call Us Directly</h5>
                <a href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, "")}`}>
                  {companyData.contacts.primaryPhone} (Head Office)
                </a>
                <br />
                <a href={`tel:${companyData.contacts.secondaryPhone.replace(/\s+/g, "")}`}>
                  {companyData.contacts.secondaryPhone} (Shahada Branch)
                </a>
              </div>
            </div>

            <div className="channel-card-modern">
              <div className="channel-icon-pill">
                <Mail size={22} />
              </div>
              <div className="channel-info-body">
                <h5>Email Us</h5>
                <a href={`mailto:${companyData.contacts.primaryEmail}`}>
                  {companyData.contacts.primaryEmail}
                </a>
                <br />
                <a href={`mailto:${companyData.contacts.supportEmail}`}>
                  {companyData.contacts.supportEmail}
                </a>
              </div>
            </div>

            <div className="channel-card-modern">
              <div className="channel-icon-pill">
                <MapPin size={22} />
              </div>
              <div className="channel-info-body">
                <h5>Headquarters</h5>
                <p>{companyData.contacts.headOffice}</p>
              </div>
            </div>

            <div className="channel-card-modern" style={{ borderColor: "#86efac" }}>
              <div className="channel-icon-pill" style={{ background: "#dcfce7", color: "#16a34a" }}>
                <MessageCircle size={22} />
              </div>
              <div className="channel-info-body">
                <h5>WhatsApp Helpdesk</h5>
                <a
                  href={companyData.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#16a34a", fontWeight: 600 }}
                >
                  Direct WhatsApp Chat ↗
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="form-card-modern">
            <h3>Send An Inquiry</h3>
            <p className="form-subhead">
              Please enter your details below and an authorized CBD IT Solutions consultant will get back to you promptly.
            </p>

            {submitted ? (
              <div className="submission-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <CheckCircle2 size={24} color="#059669" />
                  <strong style={{ fontSize: "16px" }}>Inquiry Submitted Successfully!</strong>
                </div>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our team will contact you at{" "}
                  <strong>{formData.phone}</strong> regarding <em>{formData.service}</em> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", service: "TallyPrime", message: "" });
                  }}
                  className="btn-pill btn-pill-outline-dark btn-pill-sm"
                  style={{ marginTop: "14px" }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="inquiry-form-modern">
                <div className="form-field-grid">
                  <div className="form-input-group">
                    <label htmlFor="f-name">Full Name *</label>
                    <input
                      type="text"
                      id="f-name"
                      name="name"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-modern"
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="f-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="f-phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-modern"
                    />
                  </div>
                </div>

                <div className="form-field-grid">
                  <div className="form-input-group">
                    <label htmlFor="f-email">Email Address</label>
                    <input
                      type="email"
                      id="f-email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-modern"
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="f-service">Solution Needed *</label>
                    <select
                      id="f-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="select-modern"
                    >
                      <option value="TallyPrime">TallyPrime Licensing & Upgrades</option>
                      <option value="Spine HR Software">Spine (HR Software)</option>
                      <option value="CRM Software">CRM Software</option>
                      <option value="Telecaller">Telecaller Solution</option>
                      <option value="Sarathi">Sarathi Field Operations</option>
                      <option value="Sanchay CRM">Sanchay CRM</option>
                      <option value="Tally Education">Tally Education Academy</option>
                      <option value="Technical Support / AMC">Annual Maintenance & Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="f-msg">Organization Requirements</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea-modern"
                  />
                </div>

                <button type="submit" className="btn-pill btn-pill-primary btn-pill-lg" style={{ width: "100%" }}>
                  <Send size={18} /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
