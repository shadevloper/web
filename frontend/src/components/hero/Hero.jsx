import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import EligibilityModal from "../eligibilityModal/EligibilityModal";
import heroVideo from "../../assets/Amster-Video.mp4"
import heroImage1 from "../../assets/green-card-passports-arrangement-view.jpg";
import heroImage2 from "../../assets/traveller-park-ferris-wheel.jpg";
import heroImage3 from "../../assets/side-view-man-holding-passports.jpg.jpeg";

// Auto-playing Carousel Component
const Carousel = () => {
  const images = [
    heroImage1,
    heroImage2,
    heroImage3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayTimeout, setAutoPlayTimeout] = useState(null);

  // Continuous auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Restart auto-play after manual interaction
  useEffect(() => {
    if (autoPlayTimeout === null) return;

    const timer = setTimeout(() => {
      setAutoPlayTimeout(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [autoPlayTimeout]);

  const handlePrevious = () => {
    setAutoPlayTimeout(Date.now());
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setAutoPlayTimeout(Date.now());
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setAutoPlayTimeout(Date.now());
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel slide ${index + 1}`}
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-btn prev" onClick={handlePrevious} aria-label="Previous slide">
        ❮
      </button>
      <button className="carousel-btn next" onClick={handleNext} aria-label="Next slide">
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [eligibilityOpen, setEligibilityOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`container ${mounted ? "animate" : ""}`}>
      {/* Hero */}
      <div className="hero">
        {/* Left */}
        <div className="hero-left">
          <p className="tagline">YOUR GATEWAY TO GLOBAL OPPORTUNITIES</p>

          <h1 className="hero-h1">
            Study Abroad & <br /> Immigration Made Simple
          </h1>

          <p className="description">
            Expert guidance for Canada, Australia, Europe & beyond.
            From visa to landing, we’re with you every step.
          </p>

          <div className="buttons">
            <Link to="/services">
              <button className="primary">Explore Services →</button>
            </Link>
            <button 
              className="secondary"
              onClick={() => setEligibilityOpen(true)}
            >
              Check Eligibility
            </button>
          </div>

<div className="stats">
            <span><i className="h-apprvd fa-regular fa-circle-check"></i> 500+ Visas Approved</span>
            <span><i className="h-ielts fa-solid fa-award"></i> IELTS Trainers</span>
            <span><i className="h-countries fa-solid fa-earth-europe"></i> 10+ Countries</span>
            <span><i className="h-success fa-solid fa-trophy"></i> 98% Success Rate</span>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <i className="fa-solid fa-shield-halved"></i>
              <span>ICCRC Registered</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-award"></i>
              <span>MARA Registered</span>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>IDP Partner</span>
            </div>
          </div>
        </div>
</div>

      <EligibilityModal 
        open={eligibilityOpen} 
        onClose={() => setEligibilityOpen(false)} 
      />
    </div>
  );
}

