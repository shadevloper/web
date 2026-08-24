import { Link } from "react-router-dom";
import "./Consultantion.css";

export default function Consultantion() {
  return (
    <div className="cta-section">

      <h1>Ready to Start Your Global Journey?</h1>

      <p className="cta-sub">
        Book a free consultation with our immigration experts today and take the first step
        towards your dream destination
      </p>

      <Link to="/bookconsultation">
        <button className="cta-btn">
          <i className="fa-regular fa-calendar-check"></i> Schedule Consultation
        </button>
      </Link>

      <p className="cta-note">
        No obligations. Expert advice guaranteed.
      </p>

      <div className="cta-features">

        <div className="C-confidential">
          <i className="fa-solid fa-check"></i> <span>100% Confidential</span>
        </div>

        <div className="C-response">
          <i className="fa-regular fa-clock"></i> <span>Quick Response</span>
        </div>

        <div className="C-guidence">
          <i className="fa-sharp-duotone fa-solid fa-user-graduate"></i> <span>Expert Guidance</span>
        </div>

      </div>

    </div>
  );
}
