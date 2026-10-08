import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="site-canvas">
      {/* Sleek Dark Top Navbar */}
      <Navbar />

      <main id="main-content">
        {/* Bold Dot-Matrix Dark Hero (Wix 4260 & 4262 Inspiration) */}
        <Hero />

        {/* Curved Contour Transition to Clean Light Sections */}
        <div className="light-content-wrapper">
          <About />
          <Products />
          <Education />
          <Testimonials />
          <Locations />
          <Contact />
        </div>
      </main>

      {/* Deep Obsidian Footer */}
      <Footer />

      {/* WhatsApp Floating Contact Pill */}
      <WhatsAppButton />
    </div>
  );
}
