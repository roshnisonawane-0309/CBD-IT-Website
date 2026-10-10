import React, { useState, useEffect } from "react";
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
import TestimonialsPage from "./components/TestimonialsPage";
import ShopPage from "./components/ShopPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#testimonials-page" || hash === "#testimonials") {
        setCurrentPage("testimonials");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#shop-page" || hash === "#shop") {
        setCurrentPage("shop");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (!hash || hash === "#home" || hash.startsWith("#who") || hash.startsWith("#journey") || hash.startsWith("#contact")) {
        setCurrentPage("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === "testimonials") {
      window.location.hash = "#testimonials-page";
    } else if (page === "shop") {
      window.location.hash = "#shop-page";
    } else {
      window.location.hash = "#home";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-canvas">
      {/* Orgocloud Multi-Tier Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      <main id="main-content">
        {currentPage === "testimonials" ? (
          /* Dedicated Customer Testimonials Page */
          <TestimonialsPage
            onBackToHome={() => navigateTo("home")}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
          />
        ) : currentPage === "shop" ? (
          /* Dedicated Software & Products Store Page */
          <ShopPage
            onBackToHome={() => navigateTo("home")}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
          />
        ) : (
          /* Main Landing Sections */
          <>
            {/* Full-width Hero with Frosted Glass Center Card & Book Now CTA */}
            <Hero />

            {/* "Who are we?" Section with Gradient Header & Divider */}
            <About />

            {/* "Your Journey Begins Here" Soft Cards */}
            <Products onNavigateToShop={() => navigateTo("shop")} />

            {/* "Driving Success Through Innovation" Milestones & Call to Action */}
            <Education />

            {/* Testimonials Blockquote Carousel */}
            <Testimonials onNavigateToPage={() => navigateTo("testimonials")} />

            {/* Branch Offices Across India */}
            <Locations />

            {/* Dedicated Support Ticket Section & Modal */}
            <Support
              isModalOpen={isSupportModalOpen}
              onCloseModal={() => setIsSupportModalOpen(false)}
            />

            {/* Contact Us Form */}
            <Contact />
          </>
        )}
      </main>

      {/* Support Ticket Modal (accessible across all pages) */}
      {(currentPage === "testimonials" || currentPage === "shop") && (
        <Support
          isModalOpen={isSupportModalOpen}
          onCloseModal={() => setIsSupportModalOpen(false)}
        />
      )}

      {/* Orgocloud 3-Column Footer */}
      <Footer
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
        onNavigateToTestimonials={() => navigateTo("testimonials")}
        onNavigateToShop={() => navigateTo("shop")}
      />

      {/* Floating WhatsApp Action Pill */}
      <WhatsAppButton />
    </div>
  );
}
