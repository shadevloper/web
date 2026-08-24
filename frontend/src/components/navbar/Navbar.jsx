import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amster-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [immigrationDropdown, setImmigrationDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="AMSTER logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        {/* About */}
        <li
          className="dropdown-li"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <Link to="/about">
            About
            <span
              className={`dropdown-arrow ${
                aboutDropdown ? "open" : ""
              }`}
            ></span>
          </Link>

          {aboutDropdown && (
            <div className="dropdown-menu">

              <Link to="/company-overview">
                Company Overview
              </Link>

              <Link to="/ceo-message">
                CEO Message
              </Link>

            </div>
          )}
        </li>

        {/* Immigration */}
        <li
          className="immigration-li"
          onMouseEnter={() => setImmigrationDropdown(true)}
          onMouseLeave={() => setImmigrationDropdown(false)}
        >
          <Link to="/immigration">
            Immigration
            <span
              className={`dropdown-arrow ${
                immigrationDropdown ? "open" : ""
              }`}
            ></span>
          </Link>

          {immigrationDropdown && (
            <div className="dropdown-immigration-menu">

              <Link to="/canada-pr-immigration">
                Canada PR Immigration
              </Link>

              <Link to="/australia-pr-immigration">
                Australia PR Immigration
              </Link>

              <Link to="/europe-work-permit">
                Europe Work Permit
              </Link>

            </div>
          )}
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

<li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/news">News</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>

        <ul className="mobile-nav-links">

          <li>
            <Link to="/" onClick={handleMobileLinkClick}>
              Home
            </Link>
          </li>

          {/* About */}
          <li className="mobile-dropdown-li">
            <details>

              <summary>About</summary>

              <div className="mobile-dropdown-menu">

                <Link
                  to="/company-overview"
                  onClick={handleMobileLinkClick}
                >
                  Company Overview
                </Link>

                <Link
                  to="/ceo-message"
                  onClick={handleMobileLinkClick}
                >
                  CEO Message
                </Link>

              </div>

            </details>
          </li>

          {/* Immigration */}
          <li className="mobile-dropdown-li">

            <details>

              <summary>Immigration</summary>

              <div className="mobile-dropdown-menu">

                <Link
                  to="/canada-pr-immigration"
                  onClick={handleMobileLinkClick}
                >
                  Canada PR Immigration
                </Link>

                <Link
                  to="/australia-pr-immigration"
                  onClick={handleMobileLinkClick}
                >
                  Australia PR Immigration
                </Link>

                <Link
                  to="/europe-work-permit"
                  onClick={handleMobileLinkClick}
                >
                  Europe Work Permit
                </Link>

              </div>

            </details>

          </li>

          <li>
            <Link
              to="/services"
              onClick={handleMobileLinkClick}
            >
              Services
            </Link>
          </li>

<li>
            <Link
              to="/blog"
              onClick={handleMobileLinkClick}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/news"
              onClick={handleMobileLinkClick}
            >
              News
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </li>

        </ul>

        <Link
          to="/bookconsultation"
          onClick={handleMobileLinkClick}
        >
          <button className="mobile-consult-btn">
            Book Consultation
          </button>
        </Link>

      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${
          showMobileMenu ? "active" : ""
        }`}
        onClick={() =>
          setShowMobileMenu(!showMobileMenu)
        }
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Desktop Button */}
      <Link
        to="/bookconsultation"
        className="desktop-consult-link"
      >
        <button className="consult-btn">
          Book Consultation
        </button>
      </Link>

    </nav>
  );
}