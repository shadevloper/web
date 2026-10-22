import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amster-logo.png";
import "./Footer.css";

const tagline =
  "Your trusted partner in global migration. Making dreams of studying and working abroad a reality.";

function TypeWriter({ text, speed = 35 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => setIndex((i) => i + 1), speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <p className="footer-tagline">
      {text.slice(0, index)}
      <span className="type-cursor">|</span>
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Column 1 */}
        <div>
          <img src={logo} className="footer-logo" alt="footer logo" />
          <TypeWriter text={tagline} />

     

          <div className="media-icons">
          <a href="https://www.facebook.com/share/18NgSBNGw6/?mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/amster_group" target="_blank"><i className="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/amsterimmigrationoverseas/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/amster-immigration/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://youtube.com/@amstergroups?si=qMx82ZVl4OCraVk4" target="_blank"><i className="fab fa-youtube"></i></a>
        </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Services</h4>
          <ul>
            <li to="/services">Immigration Services</li>
            {/* <li>Study Abroad</li> */}
            <li>IELTS Training</li>
            <li>Job Placement</li>
            <li>Visa Services</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Popular Destinations</h4>
          <ul>
            <li>Canada Immigration</li>
            <li>Australia PR</li>
            <li>Croatia Visa</li>
            <li>Poland Work Permit</li>
            <li>Albania Employment</li>
            <li>Bulgeria Work permit</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4>Get in Touch</h4>

          <div className="contact-item">
            <i className="footer-phone fa-solid fa-mobile"></i>
            <div>
              <p>+91 8806288062
                
                
                 (INDIA)</p>
              <p>+971 527386602 (UAE)</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="footer-email fa-solid fa-envelope"></i>
            <div>
              <p>info@amsteroverseas.com</p>
              <p>contact@amsteroverseas.in</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <span>© 2026 Amster Immigration Overseas. All rights reserved.</span>

     

        <div className="links">
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>

</div>

    </footer>
  );
}
