import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeadGen.css";
import canadaImg from "../../assets/canada-immigration-image-1.jpeg";
import australiaImg from "../../assets/australia-immigration-image-1.jpeg";
import europeImg from "../../assets/europe-immigration-image-2.jpeg";
import ieltsImg from "../../assets/ielts-image-1.jpeg";

const steps = [
  { icon: "fa-regular fa-comment", title: "Free Consultation", desc: "Speak with an expert about your profile and goals." },
  { icon: "fa-regular fa-file", title: "Documentation", desc: "We help you gather and prepare all required documents." },
  { icon: "fa-solid fa-paper-plane", title: "Application", desc: "Submit your application to the relevant authorities." },
  { icon: "fa-solid fa-plane-up", title: "Visa & Fly", desc: "Track your visa and prepare for your new life abroad." },
];

const testimonials = [
  {
    name: "Rahul Menon",
    dest: "Canada PR",
    text: "Amster made my Canada PR journey stress-free. From assessment to visa stamping, they guided me at every step. Highly recommended!",
    initial: "R",
  },
  {
    name: "Anjali Krishnan",
    dest: "Australia PR",
    text: "Their team helped me maximize my EOI points and I received my Australia PR invitation in just 4 months. Incredible support!",
    initial: "A",
  },
  {
    name: "Suresh Nair",
    dest: "Europe Work Permit",
    text: "I got my Poland work permit through Amster. Transparent process, genuine employer, and great follow-up. Thank you!",
    initial: "S",
  },
];

export default function LeadGen() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    service: "Immigration to Canada",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (form.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ""))) newErrors.phone = "Phone must be at least 10 digits";

    if (!form.country) newErrors.country = "Please select your destination";
    if (!form.message.trim()) newErrors.message = "Please tell us about your goals";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setApiMessage("");

    try {
      const response = await fetch("https://amsterimmigration.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phoneNumber: form.phone,
          interestedCountry: form.country,
          serviceRequired: form.service,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setApiMessage(result.message || "Thank you! Our team will contact you within 24 hours.");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          service: "Immigration to Canada",
          message: "",
        });
      } else {
        setApiMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setApiMessage("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`leadgen-container ${mounted ? "animate" : ""}`}>

      {/* HERO */}
      <section className="lg-hero">
        <div className="lg-hero-inner">
          <p className="lg-badge">FREE ASSESSMENT • LIMITED SPOTS</p>
          <h1>Get Your Free Immigration Eligibility Assessment</h1>
          <p className="lg-sub">
            Find out today if you qualify for Canada PR, Australia PR, or a Europe
            Work Permit — with a 100% confidential, no-obligation review by our experts.
          </p>

          <div className="lg-hero-stats">
            <div><strong>500+</strong><span>Visas Approved</span></div>
<div><strong>10+</strong><span>Countries</span></div>
            <div><strong>95%</strong><span>Success Rate</span></div>
            <div><strong>24hrs</strong><span>Response Time</span></div>
          </div>

          <a href="#lg-form" className="lg-cta">Get Started Now <i className="fa-solid fa-arrow-down"></i></a>
        </div>
      </section>

      {/* MAIN GRID: FORM + WHY */}
      <section className="lg-main">
        <div className="lg-grid">

          {/* LEAD FORM */}
          <div className="lg-form-card" id="lg-form">
            <span className="lg-form-badge">Limited Time Offer</span>
            <h2>Claim Your Free Assessment</h2>
            <p className="lg-form-sub">Fill out the form below and our counselors will reach out to you.</p>

            {apiMessage && <div className={`lg-msg ${submitted ? "success" : "error"}`}>{apiMessage}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <label>Full Name</label>
              <input
                name="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                className={errors.fullName ? "input-error" : ""}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}

              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}

              <label>Phone Number</label>
              <input
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}

              <label>Destination Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={errors.country ? "input-error" : ""}
              >
                <option value="" disabled hidden>Select your destination</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
              </select>
              {errors.country && <span className="error-text">{errors.country}</span>}

              <label>Program of Interest</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Immigration to Canada</option>
                <option>Immigration to Australia</option>
                <option>Europe Work Permit</option>
                <option>Study Abroad</option>
                <option>IELTS Preparation</option>
              </select>

              <label>Your Goals / Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your profile, goals, or questions..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}

              <button type="submit" className="lg-submit-btn" disabled={submitting}>
                {submitting ? "Submitting..." : "Get My Free Assessment"}
                {!submitting && <i className="fa-solid fa-arrow-right"></i>}
              </button>

              <p className="lg-privacy">
                <i className="fa-solid fa-lock"></i> 100% confidential. We never share your information.
              </p>
            </form>
          </div>

          {/* WHY CHOOSE US */}
          <div className="lg-why">
            <p className="lg-why-label">WHY AMSTER?</p>
            <h2>Your Dream Destination Is Closer Than You Think</h2>
            <p className="lg-why-desc">
With 10+ years of experience and a 95% success rate, AMSTER is
              one of Kerala's most trusted immigration consultancies.
            </p>

            <ul className="lg-advantages">
              <li><i className="fa-solid fa-circle-check"></i> Registered with ICCRC, MARA & IDP</li>
              <li><i className="fa-solid fa-circle-check"></i> Certified, experienced counselors</li>
              <li><i className="fa-solid fa-circle-check"></i> Transparent, ethical fee structure</li>
              <li><i className="fa-solid fa-circle-check"></i> End-to-end application support</li>
              <li><i className="fa-solid fa-circle-check"></i> Offices in India & UAE</li>
              <li><i className="fa-solid fa-circle-check"></i> Post-landing settlement assistance</li>
            </ul>

            <div className="lg-credit">
              <div className="lg-credit-avatar"><i className="fa-solid fa-headset"></i></div>
              <div>
                <p className="lg-credit-name">Talk to a Counselor Now</p>
                <p className="lg-credit-phone">+91 8806288062</p>
              </div>
            </div>

            <div className="lg-pop-dest">
              <h3>Popular Destinations</h3>
              <div className="lg-dest-tags">
                <span><i className="fa-solid fa-location-dot"></i> Canada PR</span>
                <span><i className="fa-solid fa-location-dot"></i> Australia PR</span>
                <span><i className="fa-solid fa-location-dot"></i> Europe Work Permit</span>
                <span><i className="fa-solid fa-location-dot"></i> Study Abroad</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="lg-dist">
        <p className="lg-dist-label">POPULAR DESTINATIONS</p>
        <h2>Programs We Specialize In</h2>

        <div className="lg-dist-grid">
          <div className="lg-dist-card">
            <img src={canadaImg} alt="Immigrate to Canada" />
            <div className="lg-dist-overlay">
              <h3>Canada PR</h3>
              <p>Express Entry, PNP & Family Sponsorship</p>
              <Link to="/canada-pr-immigration" className="lg-dist-link">Learn More →</Link>
            </div>
          </div>

          <div className="lg-dist-card">
            <img src={australiaImg} alt="Immigrate to Australia" />
            <div className="lg-dist-overlay">
              <h3>Australia PR</h3>
              <p>Subclass 189, 190 & 491 Pathways</p>
              <Link to="/australia-pr-immigration" className="lg-dist-link">Learn More →</Link>
            </div>
          </div>

          <div className="lg-dist-card">
            <img src={europeImg} alt="Europe Work Permit" />
            <div className="lg-dist-overlay">
              <h3>Europe Work Permit</h3>
              <p>Poland, Netherlands, Romania & More</p>
              <Link to="/europe-work-permit" className="lg-dist-link">Learn More →</Link>
            </div>
          </div>

          <div className="lg-dist-card">
            <img src={ieltsImg} alt="IELTS Preparation" />
            <div className="lg-dist-overlay">
              <h3>IELTS Training</h3>
              <p>Score 7+ Bands with Expert Trainers</p>
              <Link to="/services" className="lg-dist-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="lg-process">
        <p className="lg-process-label">HOW IT WORKS</p>
        <h2>Your Journey in 4 Simple Steps</h2>

        <div className="lg-steps">
          {steps.map((s, i) => (
            <div className="lg-step" key={i}>
              <div className="lg-step-icon"><i className={s.icon}></i></div>
              <span className="lg-step-num">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="lg-testi">
        <p className="lg-testi-label">SUCCESS STORIES</p>
        <h2>What Our Clients Say</h2>

        <div className="lg-testi-grid">
          {testimonials.map((t, i) => (
            <div className="lg-testi-card" key={i}>
              <div className="lg-testi-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="lg-testi-text">"{t.text}"</p>
              <div className="lg-testi-person">
                <div className="lg-testi-avatar">{t.initial}</div>
                <div>
                  <p className="lg-testi-name">{t.name}</p>
                  <p className="lg-testi-dest">{t.dest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lg-final-cta">
        <h2>Ready to Start Your Immigration Journey?</h2>
        <p>Don't wait — the sooner you apply, the sooner you land.</p>
        <a href="#lg-form" className="lg-cta light">Get My Free Assessment <i className="fa-solid fa-arrow-up"></i></a>
      </section>

</div>
  );
}

