import React, { useState } from "react";
import { Building2, MapPin, Phone, Mail, ExternalLink, Navigation, CheckCircle2 } from "lucide-react";
import { locationsData } from "../data/content";

export default function Locations() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeMapLoc, setActiveMapLoc] = useState(locationsData[0]);

  const filteredLocations = locationsData.filter((loc) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "ho") return loc.isHeadOffice;
    if (selectedFilter === "mmr") return loc.region.includes("MMR") || loc.region.includes("Mumbai");
    if (selectedFilter === "maharashtra") return loc.region.includes("Maharashtra");
    if (selectedFilter === "chhattisgarh") return loc.region.includes("Chhattisgarh");
    return true;
  });

  return (
    <section className="orgo-locations-section" id="locations" style={{ padding: "90px 0", backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="orgo-section-header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="orgo-eyebrow" style={{ color: "var(--orgo-blue)", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Pan-India Presence
          </span>
          <h2 className="orgo-heading" style={{ fontSize: "36px", fontWeight: 800, marginTop: "8px", color: "var(--text-dark)" }}>
            Our Office Locations
          </h2>
          <div className="orgo-header-divider" style={{ width: "60px", height: "3px", backgroundColor: "var(--orgo-blue)", margin: "14px auto" }}></div>
          <p className="orgo-subtext" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: "1.6" }}>
            Headquartered in CBD Belapur, Navi Mumbai, with strategic branch offices across Mumbai, Thane, Jalgaon, and Raipur. Our certified consultants provide responsive on-site implementation and ongoing remote Tally support.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "36px",
            marginBottom: "40px",
          }}
        >
          {[
            { id: "all", label: `All Offices (${locationsData.length})` },
            { id: "ho", label: "Head Office (H.O)" },
            { id: "mmr", label: "Mumbai & MMR (3)" },
            { id: "maharashtra", label: "North Maharashtra (1)" },
            { id: "chhattisgarh", label: "Chhattisgarh (1)" },
          ].map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => setSelectedFilter(pill.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "13.5px",
                fontWeight: 600,
                border: selectedFilter === pill.id ? "1px solid var(--orgo-blue)" : "1px solid var(--border-color)",
                backgroundColor: selectedFilter === pill.id ? "var(--orgo-blue)" : "#ffffff",
                color: selectedFilter === pill.id ? "#ffffff" : "var(--text-dark)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: selectedFilter === pill.id ? "0 4px 12px rgba(43, 104, 156, 0.2)" : "var(--shadow-sm)",
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          {filteredLocations.map((loc) => {
            const isCurrentlySelectedOnMap = activeMapLoc.id === loc.id;
            return (
              <div
                key={loc.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "30px 26px",
                  border: loc.isHeadOffice
                    ? "2px solid var(--orgo-blue)"
                    : isCurrentlySelectedOnMap
                    ? "2px solid #94bce0"
                    : "1px solid var(--border-color)",
                  boxShadow: loc.isHeadOffice
                    ? "0 10px 30px rgba(43, 104, 156, 0.12)"
                    : "0 4px 16px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Header Row: Icon + Type Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: loc.isHeadOffice ? "var(--orgo-blue)" : "#f0f7fc",
                      color: loc.isHeadOffice ? "#ffffff" : "var(--orgo-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    {loc.isHeadOffice ? <Building2 size={24} /> : <MapPin size={24} />}
                  </div>

                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        padding: "5px 12px",
                        borderRadius: "9999px",
                        backgroundColor: loc.isHeadOffice ? "var(--orgo-blue)" : "#f1f5f9",
                        color: loc.isHeadOffice ? "#ffffff" : "var(--text-dark)",
                        border: "1px solid " + (loc.isHeadOffice ? "var(--orgo-blue)" : "var(--border-color)"),
                      }}
                    >
                      {loc.type}
                    </span>
                  </div>
                </div>

                {/* Office Title */}
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  {loc.name}
                </h4>

                {/* Address block */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "16px",
                    flexGrow: 1,
                  }}
                >
                  <MapPin size={17} style={{ color: "var(--orgo-blue)", marginTop: "4px", flexShrink: 0 }} />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {loc.address}
                  </p>
                </div>

                {/* Contact Block: Phone */}
                <div
                  style={{
                    padding: "14px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "10px",
                    border: "1px solid #edf2f7",
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <Phone size={15} style={{ color: "var(--orgo-blue)", flexShrink: 0 }} />
                    <span style={{ fontSize: "13.5px", color: "var(--text-dark)", fontWeight: 600 }}>
                      <a href={`tel:${loc.phone.replace(/[\s()-]/g, "")}`} style={{ color: "var(--orgo-blue)" }}>
                        {loc.phone}
                      </a>
                      {loc.altPhone && (
                        <>
                          {" / "}
                          <a href={`tel:${loc.altPhone.replace(/[\s()-]/g, "")}`} style={{ color: "var(--orgo-blue)" }}>
                            {loc.altPhone}
                          </a>
                        </>
                      )}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <Mail size={15} style={{ color: "var(--orgo-blue)", flexShrink: 0 }} />
                    <a
                      href={`mailto:${loc.email}`}
                      style={{ fontSize: "13px", color: "var(--text-muted)", wordBreak: "break-all" }}
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMapLoc(loc);
                      const mapElem = document.getElementById("interactive-office-map");
                      if (mapElem) {
                        mapElem.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    style={{
                      width: "100%",
                      fontSize: "13.5px",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      border: isCurrentlySelectedOnMap ? "1px solid var(--orgo-blue)" : "1px solid var(--border-color)",
                      backgroundColor: isCurrentlySelectedOnMap ? "var(--orgo-blue-soft)" : "#ffffff",
                      color: isCurrentlySelectedOnMap ? "var(--orgo-blue)" : "var(--text-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Navigation size={15} />
                    <span>{isCurrentlySelectedOnMap ? "Showing on Map Below" : "View on Map"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Map Showcase Box */}
        <div
          id="interactive-office-map"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: "1px solid var(--border-color)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            overflow: "hidden",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              padding: "24px 28px",
              backgroundColor: "var(--orgo-blue-dark)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    backgroundColor: activeMapLoc.isHeadOffice ? "#3984c6" : "rgba(255,255,255,0.2)",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {activeMapLoc.type}
                </span>
                <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                  {activeMapLoc.region}
                </span>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {activeMapLoc.name}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#cbd5e1", margin: "4px 0 0 0" }}>
                {activeMapLoc.address}
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <a
                href={`tel:${activeMapLoc.phone.replace(/[\s()-]/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Phone size={14} />
                <span>Call {activeMapLoc.phone}</span>
              </a>

              <a
                href={activeMapLoc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 18px",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  color: "var(--orgo-blue-dark)",
                  fontSize: "13px",
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div style={{ width: "100%", height: "380px", backgroundColor: "#e2e8f0", position: "relative" }}>
            <iframe
              title={`Map location for ${activeMapLoc.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                activeMapLoc.address
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </div>

          {/* Operational Hours Strip */}
          <div
            style={{
              padding: "16px 28px",
              backgroundColor: "#f8fafc",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "13.5px",
              color: "var(--text-muted)",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={16} color="#16a34a" />
              <span><strong>Working Hours:</strong> Monday – Saturday: 9:30 AM – 6:30 PM IST (Sunday Closed)</span>
            </div>
            <div>
              <span>Need on-site deployment? <a href="#contact" style={{ color: "var(--orgo-blue)", fontWeight: 600 }}>Schedule an engineer visit →</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
