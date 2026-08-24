import "./About.css"
import { useState, useEffect } from "react";
import image from "../../assets/high-angle-permanent-resident-cards-envelope.jpg.jpeg";

// Counter Component
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return `${count}${suffix}`;
}

export default function About() {
  return (
    <div className="about-container">

      {/* Main Section */}
      <div className="about-main">

        {/* Image */}
        <div className="about-image">
          <img src={image} />
        </div>

        {/* Content */}
        <div className="about-content">
          <p className="small-title">ABOUT AMSTER OVERSEAS</p>

          <h1>Your Trusted Partner in Global Migration</h1>

          <p>
          At Amster Overseas, we understand that moving to a new country is more than just paperwork—it's about building a new life, pursuing dreams, and creating opportunities. With years of experience in immigration and study abroad consulting, we've helped hundreds of families and students achieve their global aspirations.
          </p>

          <p>
            Our team of certified immigration consultants and IELTS trainers provides personalized guidance through every step of your journey. From initial consultation to post-landing support, we ensure a smooth and successful transition to your destination country.
          </p>

          {/* Features */}
          <div className="features">
            <div className="feature-box blue">
              <h4>  <i className="a-user fa-solid fa-users"></i> Expert Team</h4>
              <span>
              <p>Certified consultants with proven track records</p>
              </span>
            </div>

            <div className="feature-box red">
              <h4><i className="a-check fa-regular fa-square-check"></i>Trusted Service</h4>
              <p>Transparent process with no hidden charges</p>
            </div>

            <div className="feature-box blue">
              <h4><i className="a-support fa-solid fa-headset"></i>24/7 Support</h4>
              <p>Always available to answer your queries</p>
            </div>

            <div className="feature-box red">
              <h4><i className="a-success fa-solid fa-trophy"></i>High Success Rate</h4>
              <p>98% visa approval success rate</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div>
              <h2><Counter target={500} suffix="+" /></h2>
              <span className="a-spn">Successful Visas</span>
            </div>

            <div>
<h2><Counter target={10} suffix="+" /></h2>
              <span className="a-spn">Countries Covered</span>
            </div>

            <div>
              <h2><Counter target={10} suffix="+" /></h2>
              <span className="a-spn">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Detailed Sections Below ===== */}

      {/* Our Story */}
      <div className="about-detail">
        <p className="about-detail-label">OUR STORY</p>
        <h2>Who We Are</h2>
        <p className="about-detail-lead">
          AMSTER is a one-stop service portal for Migration, Study Abroad, HR Placement,
          and IELTS Training — built on a promise of trust, transparency, and global opportunity.
        </p>
        <div className="about-detail-grid">
          <p>
            Founded in Kerala and expanding across India and the UAE, Amster Overseas has
            grown into a leading immigration consultancy recognized for ethical practices and
            consistently high visa approval rates. Our certified consultants and registered
            partners (ICCRC, MARA, IDP) bring world-class expertise to every application.
          </p>
          <p>
            Whether you are pursuing permanent residency, a work permit, an international
            degree, or a job abroad, our team guides you from the very first consultation to
            post-landing settlement — so you can focus on your future while we handle the details.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="about-detail">
        <p className="about-detail-label">OUR SERVICES</p>
        <h2>What We Offer</h2>
        <div className="about-offer-grid">
          <div className="about-offer-card">
            <i className="fa-solid fa-id-card-clip"></i>
            <h4>Visa & Immigration</h4>
            <p>Canada PR (Express Entry, PNP, AIP, RNIP), Australia Skilled Migration (189, 190, 491), Europe work permits and family sponsorships.</p>
          </div>
          <div className="about-offer-card">
            <i className="fa-solid fa-graduation-cap"></i>
            <h4>Study Abroad</h4>
            <p>University admissions, scholarships, and student visa support across Canada, Australia, UK, USA, Ireland, France, Singapore, Malaysia & Europe.</p>
          </div>
          <div className="about-offer-card">
            <i className="fa-solid fa-book-open"></i>
            <h4>IELTS Preparation</h4>
            <p>Authorized IDP partner with CLB 9-based training, certified trainers, mock tests and score analysis to help you achieve 7+ bands.</p>
          </div>
          <div className="about-offer-card">
            <i className="fa-solid fa-briefcase"></i>
            <h4>HR & Job Support</h4>
            <p>Licensed HR placement in Abu Dhabi connecting professionals with verified employers across GCC & Europe, plus resume and interview coaching.</p>
          </div>
        </div>
      </div>

      {/* Why Choose AMSTER */}
      <div className="about-detail">
        <p className="about-detail-label">WHY AMSTER</p>
        <h2>Why Choose AMSTER Overseas?</h2>
        <div className="about-why-grid">
          <div className="about-why-item">
            <i className="fa-solid fa-shield-halved"></i>
            <h4>Registered & Regulated</h4>
            <p>Accredited by ICCRC, MARA, IDP & Ministry of External Affairs (POI), Govt. of India.</p>
          </div>
          <div className="about-why-item">
            <i className="fa-solid fa-user-check"></i>
            <h4>Expert Consultants</h4>
            <p>Certified, experienced counselors with proven track records across all major destinations.</p>
          </div>
          <div className="about-why-item">
            <i className="fa-solid fa-file-shield"></i>
            <h4>Transparent Process</h4>
            <p>Ethical fee structure with no hidden charges and honest, realistic case assessment.</p>
          </div>
          <div className="about-why-item">
            <i className="fa-solid fa-headset"></i>
            <h4>End-to-End Support</h4>
            <p>From eligibility assessment and documentation to visa filing and post-landing settlement.</p>
          </div>
          <div className="about-why-item">
            <i className="fa-solid fa-globe"></i>
            <h4>Global Presence</h4>
            <p>Offices across Kerala (Kochi, Calicut, Kottayam, Kollam, Thrissur, Trivandrum) and the UAE.</p>
          </div>
          <div className="about-why-item">
            <i className="fa-solid fa-trophy"></i>
            <h4>98% Success Rate</h4>
            <p>Hundreds of families and students have successfully migrated with our guidance.</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="about-detail">
        <p className="about-detail-label">OUR VALUES</p>
        <h2>What Drives Us</h2>
        <div className="about-values">
          <div className="about-value">
            <span className="about-value-num">01</span>
            <h4>Integrity</h4>
            <p>Honest and transparent dealings with every client.</p>
          </div>
          <div className="about-value">
            <span className="about-value-num">02</span>
            <h4>Excellence</h4>
            <p>Commitment to the highest standards of service delivery.</p>
          </div>
          <div className="about-value">
            <span className="about-value-num">03</span>
            <h4>Customer Focus</h4>
            <p>Your success is our priority, always.</p>
          </div>
          <div className="about-value">
            <span className="about-value-num">04</span>
            <h4>Professionalism</h4>
            <p>Expert, ethical guidance at every step of your journey.</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="about-mv">
        <div className="about-mv-card">
          <i className="fa-solid fa-bullseye"></i>
          <h3>Our Mission</h3>
          <p>
            To enable a smooth, stress-free, and effective immigration experience through expert
            guidance and dedicated support — helping you pursue a global career, gain permanent
            residency, or seize new opportunities abroad.
          </p>
        </div>
        <div className="about-mv-card">
          <i className="fa-solid fa-eye"></i>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and preferred immigration consulting partner, delivering
            excellence and transforming lives through seamless migration experiences — a world
            where geographical boundaries don't limit opportunity.
          </p>
        </div>
      </div>

</div>
  );
}
