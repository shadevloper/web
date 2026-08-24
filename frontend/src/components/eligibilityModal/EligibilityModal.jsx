import { useState } from "react";
import "./EligibilityModal.css";
import { useToast } from "../../context/ToastContext";

export default function EligibilityModal({ open, onClose }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    qualification: "",
    workExperience: "",
    ieltsScore: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification";
    }

    if (!formData.workExperience) {
      newErrors.workExperience = "Please select work experience";
    }

    if (!formData.ieltsScore.trim()) {
      newErrors.ieltsScore = "Please enter your IELTS score";
    } else if (isNaN(formData.ieltsScore) || formData.ieltsScore < 0 || formData.ieltsScore > 9) {
      newErrors.ieltsScore = "IELTS score must be between 0-9";
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
const submitEligibility = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/eligibility",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          destination_country: formData.country,
          qualification: formData.qualification,
          work_experience: formData.workExperience,
          IELTS_score: formData.ieltsScore
        })
      }
    );

    const data = await response.json();

    console.log(data);

if (data.success) {

      showToast("Eligibility submitted successfully");

    } else {

      showToast(data.message, "error");
    }

  } catch (error) {

    console.log(error);

    showToast("Server Error", "error");
  }
};
const handleSubmit = async (e) => {

  e.preventDefault();

  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {

    await submitEligibility();

    setSubmitted(true);

  } else {

    setErrors(newErrors);
  }
};

  if (!open) return null;

  return (
    <div className="eligibility-overlay">
      <div className="eligibility-box">
        <span className="close" onClick={onClose}>×</span>

        <h2>Check Your Eligibility</h2>
        <p className="sub">
          Quick assessment to determine your visa eligibility
        </p>

        {submitted && <div className="eligibility-success">✓ Assessment submitted! We'll review and contact you soon.</div>}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}

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

          <label>Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}

          <label>Destination Country</label>
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

          <label>Qualification</label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className={errors.qualification ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select qualification</option>
            <option value="">SSLC</option>
            <option value="12th">12th Standard</option>
            <option value="diploma">Diploma</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
          {errors.qualification && <span className="error-text">{errors.qualification}</span>}

          <label>Work Experience (Years)</label>
          <select
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            className={errors.workExperience ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select work experience</option>
            <option value="0">Fresher</option>
            <option value="1">1-2 years</option>
            <option value="3">3-5 years</option>
            <option value="6">6-10 years</option>
            <option value="10">10+ years</option>
          </select>
          {errors.workExperience && <span className="error-text">{errors.workExperience}</span>}

          <label>IELTS Score</label>
          <input
            name="ieltsScore"
            type="number"
            step="0.5"
            min="0"
            max="9"
            value={formData.ieltsScore}
            onChange={handleChange}
            placeholder="Enter IELTS score (0-9)"
            className={errors.ieltsScore ? "input-error" : ""}
          />
          {errors.ieltsScore && <span className="error-text">{errors.ieltsScore}</span>}

          <button type="submit">Check Eligibility</button>
        </form>
      </div>
    </div>
  );
}
