import { useState } from "react";
import "./EnquiryForm.css";
import { useToast } from "../../context/ToastContext";

export default function EnquiryForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
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

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://amsterimmigration.onrender.com/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          message: formData.message
        })
      });

      let result;
      try {
        result = await response.json();
      } catch (err) {
        result = { message: "Something went wrong on the server. Please try again later." };
      }

      if (response.ok) {
        showToast(result.message || "Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: ""
        });
      } else {
        const msg = result.message || "Unable to submit your enquiry. Please try again.";
        setServerError(msg);
        showToast(msg, "error");
      }
    } catch (err) {
      console.log(err);
      const msg = "Server error: Could not submit your enquiry. Please check your connection and try again.";
      setServerError(msg);
      showToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquiry-section">

      <p className="enquiry-small">GET IN TOUCH</p>
      <h1>Send Us an Enquiry</h1>
      <p className="enquiry-sub">
        Have a question about immigration, study abroad or IELTS?
        Fill in the form below and our experts will get back to you shortly.
      </p>

      <div className="enquiry-grid">

        {/* LEFT INFO CARD */}
        <div className="enquiry-info">
          <h2>Why Enquire With Us?</h2>
          <p>
            Our experienced consultants provide honest guidance for visas,
            permanent residency and test preparation — tailored to your goals.
          </p>

          <div className="enquiry-point">
            <i className="fa-solid fa-circle-check"></i>
            <span>Free initial consultation</span>
          </div>
          <div className="enquiry-point">
            <i className="fa-solid fa-circle-check"></i>
            <span>End-to-end application support</span>
          </div>
          <div className="enquiry-point">
            <i className="fa-solid fa-circle-check"></i>
            <span>Quick response within 24 hours</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h3>Enquiry Form</h3>

          {serverError && <div className="server-error-msg">⚠ {serverError}</div>}

          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

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

          <label>Country</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. Canada, Australia"
            className={errors.country ? "input-error" : ""}
          />
          {errors.country && <span className="error-text">{errors.country}</span>}

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

      </div>

    </div>
  );
}

