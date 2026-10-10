import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileEdit,
  Headphones,
} from "lucide-react";

export default function Navbar({ onOpenSupportModal, onNavigate, currentPage = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({
    blog: false,
    partners: false,
    education: false,
  });

  const dropdownRef = useRef(null);
  const hoverTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = (menu) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const toggleDropdownClick = (e, menu) => {
    e.stopPropagation();
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileExpanded((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <header id="site-header" style={{ position: "relative", zIndex: 1100 }}>
      {/* Main Navigation Bar */}
      <nav
        className={`cbd-navbar-wrapper ${scrolled ? "scrolled" : ""}`}
        style={{
          backgroundColor: "#ffffff",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "all 0.2s ease",
        }}
      >
        <div
          className="container"
          ref={dropdownRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
            position: "relative",
          }}
        >
          {/* Logo on Left */}
          <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} aria-label="CBD IT Solutions Home">
            <img
              src="/logo.png"
              alt="CBD IT SOLUTIONS PVT. LTD."
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Navigation Links in Center */}
          <ul
            className="cbd-nav-menu"
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              gap: "20px",
              margin: 0,
              padding: 0,
            }}
          >
            {/* 1. Home */}
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  if (currentPage !== "home" && onNavigate) {
                    e.preventDefault();
                    onNavigate("home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  closeMenu();
                }}
                className={`cbd-nav-link ${currentPage === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>

            {/* 2. About */}
            <li>
              <a
                href="#who-we-are"
                onClick={(e) => {
                  if (currentPage !== "home" && onNavigate) {
                    onNavigate("home");
                  }
                  closeMenu();
                }}
                className="cbd-nav-link"
              >
                About
              </a>
            </li>

            {/* 3. Shop */}
            <li>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  if (onNavigate) {
                    onNavigate("shop");
                  } else {
                    window.location.hash = "#shop-page";
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`cbd-nav-link ${currentPage === "shop" ? "active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }}
              >
                Shop
              </button>
            </li>

            {/* 4. Blog (Dropdown) */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("blog")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className={`cbd-nav-link cbd-dropdown-btn ${currentPage === "testimonials" ? "active" : ""}`}
                onClick={(e) => toggleDropdownClick(e, "blog")}
                aria-expanded={activeDropdown === "blog"}
              >
                <span>Blog</span>
                <ChevronDown
                  size={14}
                  style={{
                    marginLeft: "2px",
                    transition: "transform 0.2s",
                    transform: activeDropdown === "blog" ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </button>

              {activeDropdown === "blog" && (
                <div
                  className="cbd-dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter("blog")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      closeMenu();
                      if (onNavigate) {
                        onNavigate("testimonials");
                      } else {
                        window.location.hash = "#testimonials-page";
                      }
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cbd-dropdown-item"
                    style={{
                      background: "none",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Testimonials</span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        backgroundColor: "#e0f2fe",
                        color: "#0f5999",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Stories
                    </span>
                  </button>
                </div>
              )}
            </li>

            {/* 5. Webinar */}
            <li>
              <a href="https://cbditsolutions.com/webinar/" target="_blank" rel="noopener noreferrer" className="cbd-nav-link">
                Webinar
              </a>
            </li>

            {/* 6. Partners (Dropdown) */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("partners")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="cbd-nav-link cbd-dropdown-btn"
                onClick={(e) => toggleDropdownClick(e, "partners")}
                aria-expanded={activeDropdown === "partners"}
              >
                <span>Partners</span>
                <ChevronDown
                  size={14}
                  style={{
                    marginLeft: "2px",
                    transition: "transform 0.2s",
                    transform: activeDropdown === "partners" ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </button>

              {activeDropdown === "partners" && (
                <div
                  className="cbd-dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter("partners")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href="#journey"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Spine
                  </a>
                  <a
                    href="#journey"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    CRM
                  </a>
                  <a
                    href="#journey"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Telecaller
                  </a>
                  <a
                    href="#journey"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Sarathi
                  </a>
                  <a
                    href="#journey"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Sanchay CRM
                  </a>
                </div>
              )}
            </li>

            {/* 7. Tally Education (Dropdown) */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("education")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="cbd-nav-link cbd-dropdown-btn"
                onClick={(e) => toggleDropdownClick(e, "education")}
                aria-expanded={activeDropdown === "education"}
              >
                <span>Tally Education</span>
                <ChevronDown
                  size={14}
                  style={{
                    marginLeft: "2px",
                    transition: "transform 0.2s",
                    transform: activeDropdown === "education" ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </button>

              {activeDropdown === "education" && (
                <div
                  className="cbd-dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter("education")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href="#driving-success"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Tally Essential: Level 1
                  </a>
                  <a
                    href="#driving-success"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Tally Essential Level 2
                  </a>
                  <a
                    href="#driving-success"
                    onClick={() => {
                      if (currentPage !== "home" && onNavigate) onNavigate("home");
                      closeMenu();
                    }}
                    className="cbd-dropdown-item"
                  >
                    Tally Essential: Level 3
                  </a>
                </div>
              )}
            </li>

            {/* 8. Career */}
            <li>
              <a href="https://cbditsolutions.com/career/" target="_blank" rel="noopener noreferrer" className="cbd-nav-link">
                Career
              </a>
            </li>

            {/* 9. Contact Us */}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  if (currentPage !== "home" && onNavigate) onNavigate("home");
                  closeMenu();
                }}
                className="cbd-nav-link"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right Action Buttons: Enquiry & Support */}
          <div className="cbd-navbar-actions" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Button 1: Enquiry */}
            <a
              href="#contact"
              className="cbd-btn-enquiry"
              style={{
                backgroundColor: "#0f5999",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "13.5px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              <span>Enquiry</span>
              <FileEdit size={14} />
            </a>

            {/* Button 2: Support */}
            <button
              type="button"
              onClick={onOpenSupportModal || (() => { window.location.href = "#support"; })}
              className="cbd-btn-support"
              style={{
                backgroundColor: "#323b46",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "13.5px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              <span>Support</span>
              <Headphones size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="cbd-mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                color: "#172541",
                cursor: "pointer",
                padding: "6px",
              }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 30, 46, 0.45)",
            backdropFilter: "blur(4px)",
            zIndex: 1200,
          }}
          onClick={closeMenu}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "320px",
              background: "#ffffff",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              overflowY: "auto",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
              <img src="/logo.png" alt="CBD IT Solutions" style={{ height: "42px", width: "auto" }} />
              <button onClick={closeMenu} style={{ background: "transparent", border: "none", color: "#172541", cursor: "pointer" }} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="#home"
                onClick={(e) => {
                  if (currentPage !== "home" && onNavigate) {
                    e.preventDefault();
                    onNavigate("home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  closeMenu();
                }}
                className="cbd-mobile-link"
              >
                Home
              </a>
              <a
                href="#who-we-are"
                onClick={(e) => {
                  if (currentPage !== "home" && onNavigate) {
                    onNavigate("home");
                  }
                  closeMenu();
                }}
                className="cbd-mobile-link"
              >
                About
              </a>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  if (onNavigate) {
                    onNavigate("shop");
                  } else {
                    window.location.hash = "#shop-page";
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`cbd-mobile-link ${currentPage === "shop" ? "active" : ""}`}
                style={{ background: "none", border: "none", textAlign: "left", cursor: "pointer", width: "100%", padding: 0 }}
              >
                Shop
              </button>

              {/* Mobile Blog Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("blog")}
                  className="cbd-mobile-link"
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: 0 }}
                >
                  <span>Blog</span>
                  <ChevronDown size={16} style={{ transform: mobileExpanded.blog ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {mobileExpanded.blog && (
                  <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                    <button
                      type="button"
                      onClick={() => {
                        closeMenu();
                        if (onNavigate) {
                          onNavigate("testimonials");
                        } else {
                          window.location.hash = "#testimonials-page";
                        }
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="cbd-mobile-sublink"
                      style={{
                        background: "none",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "6px 0",
                      }}
                    >
                      <span>Testimonials</span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          backgroundColor: "#e0f2fe",
                          color: "#0f5999",
                          padding: "2px 6px",
                          borderRadius: "4px",
                        }}
                      >
                        Stories
                      </span>
                    </button>
                  </div>
                )}
              </div>

              <a href="https://cbditsolutions.com/webinar/" target="_blank" rel="noopener noreferrer" className="cbd-mobile-link">Webinar</a>

              {/* Mobile Partners Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("partners")}
                  className="cbd-mobile-link"
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: 0 }}
                >
                  <span>Partners</span>
                  <ChevronDown size={16} style={{ transform: mobileExpanded.partners ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {mobileExpanded.partners && (
                  <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                    <a href="#journey" onClick={closeMenu} className="cbd-mobile-sublink">Spine</a>
                    <a href="#journey" onClick={closeMenu} className="cbd-mobile-sublink">CRM</a>
                    <a href="#journey" onClick={closeMenu} className="cbd-mobile-sublink">Telecaller</a>
                    <a href="#journey" onClick={closeMenu} className="cbd-mobile-sublink">Sarathi</a>
                    <a href="#journey" onClick={closeMenu} className="cbd-mobile-sublink">Sanchay CRM</a>
                  </div>
                )}
              </div>

              {/* Mobile Tally Education Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("education")}
                  className="cbd-mobile-link"
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: 0 }}
                >
                  <span>Tally Education</span>
                  <ChevronDown size={16} style={{ transform: mobileExpanded.education ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {mobileExpanded.education && (
                  <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                    <a href="#driving-success" onClick={closeMenu} className="cbd-mobile-sublink">Tally Essential: Level 1</a>
                    <a href="#driving-success" onClick={closeMenu} className="cbd-mobile-sublink">Tally Essential Level 2</a>
                    <a href="#driving-success" onClick={closeMenu} className="cbd-mobile-sublink">Tally Essential: Level 3</a>
                  </div>
                )}
              </div>

              <a href="https://cbditsolutions.com/career/" target="_blank" rel="noopener noreferrer" className="cbd-mobile-link">Career</a>
              <a href="#contact" onClick={closeMenu} className="cbd-mobile-link">Contact Us</a>
            </nav>

            {/* Mobile Actions */}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="#contact"
                onClick={closeMenu}
                style={{
                  backgroundColor: "#0f5999",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <span>Enquiry</span>
                <FileEdit size={16} />
              </a>

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  if (onOpenSupportModal) onOpenSupportModal();
                  else window.location.href = "#support";
                }}
                style={{
                  backgroundColor: "#323b46",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span>Support</span>
                <Headphones size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
