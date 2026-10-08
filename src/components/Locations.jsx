import React from "react";
import { Building2, MapPin, Navigation } from "lucide-react";
import { locationsData } from "../data/content";

export default function Locations() {
  return (
    <section className="light-section" id="locations">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Our Presence</span>
          <h2 className="section-headline">Office Branches Across India</h2>
          <p className="section-subtext">
            Our certified consultants deliver rapid on-premise implementation, corporate training, and continuous remote support.
          </p>
        </div>

        <div className="locations-cards-grid">
          {locationsData.map((loc, idx) => (
            <div
              className={`location-tile ${loc.isHeadOffice ? "is-ho" : ""}`}
              key={idx}
            >
              <div className="location-top-bar">
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: loc.isHeadOffice ? "var(--accent-blue)" : "var(--light-bg)",
                    color: loc.isHeadOffice ? "#fff" : "var(--text-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {loc.isHeadOffice ? <Building2 size={20} /> : <MapPin size={20} />}
                </div>
                <span className={`loc-badge-pill ${loc.isHeadOffice ? "ho-pill" : ""}`}>
                  {loc.type}
                </span>
              </div>

              <h4>{loc.name}</h4>
              <p>{loc.address}</p>

              {loc.isHeadOffice ? (
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-link-arrow"
                  style={{ marginTop: "auto" }}
                >
                  <Navigation size={14} /> Open in Google Maps
                </a>
              ) : (
                <a href="#contact" className="tile-link-arrow" style={{ marginTop: "auto" }}>
                  <MapPin size={14} /> Inquire for this Region
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
