import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, CalendarCheck } from "lucide-react";
import { companyData } from "../data/content";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Grow your Business",
      lead: "Get verified enterprise accounting and cloud automation to scale sales and profits. Book a FREE Consultation Now.",
      btnText: "Book Now",
      btnLink: "#contact",
    },
    {
      title: "Reach More Customers",
      lead: "Seamless multi-branch accounting, real-time GST invoicing, and financial MIS reporting across India.",
      btnText: "Book Now",
      btnLink: "#contact",
    },
    {
      title: "Optimise Your Time",
      lead: "Automate HR, payroll, CRM lead funnels, and statutory compliance with 25+ years of certified expertise.",
      btnText: "Book Now",
      btnLink: "#contact",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="orgo-hero-section" id="home">
      <div className="orgo-hero-overlay"></div>

      <div className="container orgo-hero-container">
        {/* Centered Frosted Glass Card (Direct Orgocloud Style) */}
        <div className="orgo-hero-card">
          <h1>{slides[activeSlide].title}</h1>
          <div className="orgo-hero-divider">______________________________</div>
          <p className="orgo-hero-lead">{slides[activeSlide].lead}</p>

          <div className="orgo-hero-cta-group">
            <a
              href={slides[activeSlide].btnLink}
              className="btn-orgo-primary btn-orgo-pill-lg"
              id="hero-book-now-btn"
            >
              <CalendarCheck size={18} /> {slides[activeSlide].btnText}
            </a>
            <a
              href="#products"
              className="btn-orgo-outline btn-orgo-pill-lg"
              style={{ background: "rgba(255,255,255,0.7)" }}
            >
              Explore Solutions
            </a>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="orgo-hero-indicators" aria-label="Slide Indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`orgo-hero-indicator-btn ${idx === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
