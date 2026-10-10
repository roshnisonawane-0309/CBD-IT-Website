import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, ExternalLink, ArrowRight } from "lucide-react";
import { testimonialsData } from "../data/content";

export default function Testimonials({ onNavigateToPage }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIdx];

  return (
    <section className="orgo-quotes-section" id="testimonials">
      <div className="container">
        <div className="orgo-section-header">
          <span className="orgo-eyebrow">Client Feedback</span>
          <h2 className="orgo-heading">What Our Clients Say</h2>
          <div className="orgo-header-divider"></div>
        </div>

        <div style={{ position: "relative", maxWidth: "860px", margin: "40px auto 0 auto" }}>
          <div className="orgo-quote-box">
            <div className="orgo-quote-icon">
              <Quote size={24} />
            </div>
            <p className="orgo-quote-text">“{current.quote}”</p>
            <div className="orgo-quote-author">
              <h5>{current.author}</h5>
              <span>
                {current.role}, {current.company}
              </span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            style={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-dark)",
              zIndex: 10,
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next review"
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-dark)",
              zIndex: 10,
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "24px",
            }}
          >
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: currentIdx === i ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  backgroundColor:
                    currentIdx === i ? "var(--orgo-blue)" : "#cbd5e1",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* View All Testimonials Link & Dedicated Page */}
          <div style={{ textAlign: "center", marginTop: "32px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={onNavigateToPage || (() => { window.location.hash = "#testimonials-page"; })}
              className="orgo-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
              }}
            >
              <span>Explore All Testimonials Page</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="https://cbditsolutions.com/testimonials/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 600,
                fontSize: "13.5px",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#172541",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <span>Visit Official Portal</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
