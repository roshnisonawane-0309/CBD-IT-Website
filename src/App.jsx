import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <div className="site-canvas">
      {/* Orgocloud Multi-Tier Header */}
      <Navbar onOpenSupportModal={() => setIsSupportModalOpen(true)} />

      <main id="main-content">
        {/* Full-width Hero with Frosted Glass Center Card & Book Now CTA */}
        <Hero />

        {/* "Who are we?" Section with Gradient Header & Divider */}
        <About />

        {/* "Your Journey Begins Here" Soft Cards */}
        <Products />

        {/* "Driving Success Through Innovation" Milestones & Call to Action */}
        <Education />

        {/* Testimonials Blockquote Carousel */}
        <Testimonials />

        {/* Branch Offices Across India */}
        <Locations />

        {/* Dedicated Support Ticket Section & Modal */}
        <Support
          isModalOpen={isSupportModalOpen}
          onCloseModal={() => setIsSupportModalOpen(false)}
        />

        {/* Contact Us Form */}
        <Contact />
      </main>

      {/* Orgocloud 3-Column Footer */}
      <Footer onOpenSupportModal={() => setIsSupportModalOpen(true)} />

      {/* Floating WhatsApp Action Pill */}
      <WhatsAppButton />
    </div>
  );
}
