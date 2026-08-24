import { useState } from "react";
import "./Contact.css";
import { useToast } from "../../context/ToastContext";

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  });

const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone must be at least 10 digits";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
const handleSendSubmit = async (event) => {
    event.preventDefault();
    setServerError("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          fullName: formData.fullName,
    email: formData.email,
    phoneNumber: formData.phone,
    interestedCountry: formData.country,
    serviceRequired: formData.service,
    message: formData.message
          })
        }
      );

      let result;
      try {
        result = await response.json();
      } catch (e) {
        result = { message: "Something went wrong on the server. Please try again later." };
      }

if (response.ok) {
        setSubmitted(true);
        showToast(result.message || "Message submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          service: "",
          message: ""
        });
      } else {
        const msg = result.message || "Unable to submit your enquiry. Please try again.";
        setServerError(msg);
        showToast(msg, "error");
      }

    } catch (error) {
      console.log(error);
      const msg = "Server error: Could not submit your enquiry. Please check your connection and try again.";
      setServerError(msg);
      showToast(msg, "error");
    }
  };

  return (
    <div className="contact-section">

      <p className="contact-small">GET IN TOUCH</p>
      <h1>Contact Amster Overseas</h1>
      <p className="contact-sub">
        Ready to start your journey? Reach out to us and our experts will guide you through the process
      </p>

      <div className="contact-grid">

        {/* LEFT CARD */}
        
        <div className="contact-info">

          <h2>Contact Information</h2>

                 <div className="call info-item">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="information">
                        <h4>Call:</h4>
                        <p> +91 9066 555 666 (INDIA),</p>
                        <p>+91 7699 777 555(INDIA)</p>
                    </div>
                </div>
                  <div className="email info-item">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="information">
                        <h4>Email</h4>
                        <p> contact@amsteroverseas.in</p>
                        <p> info@amsteroverseas.com</p>
                    </div>
                </div>

                <div className="open-hours info-item">
                    <div className="icon">
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="information">
                        <h4>Open Hours:</h4>
                        <p>Monday - Friday: 9:30 AM - 5:30 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
         
         <hr />
             <div className="social-media">
              <p>Follow Us:</p>
                    <a href="https://www.facebook.com/share/18NgSBNGw6/?mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/amster_group" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/amsterimmigrationoverseas/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/amster-immigration/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://youtube.com/@amstergroups?si=qMx82ZVl4OCraVk4" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSendSubmit}>

<h3>Send Us a Message</h3>
          {submitted && <div className="success-msg">✓ Message sent successfully!</div>}
          {serverError && <div className="server-error-msg">⚠ {serverError}</div>}

          <label>Full Name</label>
          <input 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}

          <div className="two">
            <div>
              <label>Email Address</label>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div>
              <label>Phone Number</label>
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>

          <label>Interested Country</label>
          <select 
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select a country</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="europe">Europe</option>
          </select>
          {errors.country && <span className="error-text">{errors.country}</span>}

          <label>Service Required</label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={errors.service ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select a service</option>
            <option value="immigration">Immigration</option>
            <option value="study-abroad">Study Abroad</option>
            <option value="ielts">IELTS</option>
          </select>
          {errors.service && <span className="error-text">{errors.service}</span>}

          <label>Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

<button type="submit">Send Message</button>

        </form>

      </div>

</div>
  );
}
