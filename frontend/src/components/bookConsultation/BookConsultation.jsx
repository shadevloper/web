import { useState } from "react";
import "./BookConsultation.css";
import { useToast } from "../../context/ToastContext";

export default function BookConsultation() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    city: "",
    qualification: "",
    languageProficiency: "",
    languageScore: "",
    nearestOffice: "",
    countryPreferred: "",
    preferredDate: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10,}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Mobile must be at least 10 digits";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp is required";
    } else if (!/^\d{10,}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "WhatsApp must be at least 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.qualification) newErrors.qualification = "Please select qualification";
    if (!formData.languageProficiency) newErrors.languageProficiency = "Please select language proficiency";
    if (!formData.languageScore.trim()) newErrors.languageScore = "Language score is required";
    if (!formData.nearestOffice) newErrors.nearestOffice = "Please select nearest office";
    if (!formData.countryPreferred) newErrors.countryPreferred = "Please select preferred country";
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a date";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await fetch("http://localhost:5000/api/book-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          mobileNumber: formData.mobile,
          whatsappNumber: formData.whatsapp,
          email: formData.email,
          city: formData.city,
          highestQualification: formData.qualification,
          languageProficiency: formData.languageProficiency,
          languageScore: formData.languageScore,
          nearestOffice: formData.nearestOffice,
          countryPreferred: formData.countryPreferred,
          preferredDate: formData.preferredDate
        })
      });

      const result = await response.json();
  console.log(result);
      if (response.ok) {
        console.log("Consultation booked:", result);

        setSubmitted(true);

        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          whatsapp: "",
          email: "",
          city: "",
          qualification: "",
          languageProficiency: "",
          languageScore: "",
          nearestOffice: "",
          countryPreferred: "",
          preferredDate: ""
        });

        setTimeout(() => setSubmitted(false), 3000);
} else {
        showToast(result.message || "Submission failed", "error");
      }

    } catch (error) {
      console.error(error);
      showToast(
        "Server error: Could not submit your booking. Please make sure the backend server is running on http://localhost:5000 and try again.",
        "error"
      );
    }

  } else {
    setErrors(newErrors);
  }
};

  return (
    <section className="digital">

      {/* HERO */}

      <div className="digital-hero">

        <div className="BC-hero-left">
          <h5>STUDY ABROAD</h5>
          <h1>Your Trusted Partner for Work Abroad & PR Success</h1>

        </div>

        {/* FORM CARD */}

        <div className="BC-hero-form">

          <h3>Book Your E-Counselling</h3>
          {submitted && <div className="form-success">✓ Booking confirmed! We'll contact you soon.</div>}

          <div className="form-grid">
            <div>
              <input 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={errors.firstName ? "input-error" : ""}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div>
              <input 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={errors.lastName ? "input-error" : ""}
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>

            <div>
              <input 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className={errors.mobile ? "input-error" : ""}
              />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </div>

            <div>
              <input 
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Whatsapp Number"
                className={errors.whatsapp ? "input-error" : ""}
              />
              {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
            </div>

            <div>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div>
              <input 
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={errors.city ? "input-error" : ""}
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>

            <div>
              <select 
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={errors.qualification ? "input-error" : ""}
              >
                <option value="" disabled hidden>Highest Qualification</option>
                <option value="Entry Level">Entry Level (SSLC)</option>
                <option value="Higher Secondary">Higher Secondary (HSC)</option>
                <option value="BA">Bachelor of Arts (BA)</option>
                <option value="BSc">Bachelor of Science (BSc)</option>
                <option value="BCom">Bachelor of Commerce (BCom)</option>
                <option value="BBA">Bachelor of Business Administration (BBA)</option>
                <option value="BTech">Bachelor of Technology (BTech)</option>
                <option value="BEd">Bachelor of Education (BEd)</option>
                <option value="LLB">Bachelor of Laws (LLB)</option>
                <option value="MBBS">Bachelor of Medicine, Bachelor of Surgery (MBBS)</option>
                <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                <option value="MA">Master of Arts (MA)</option>
                <option value="MSc">Master of Science (MSc)</option>
                <option value="MBA">Master of Business Administration (MBA)</option>
                <option value="MCA">Master of Computer Applications (MCA)</option>
                <option value="MCom">Master of Commerce (MCom)</option>
                <option value="ME">Master of Engineering (ME)</option>
                <option value="MTech">Master of Technology (MTech)</option>
                <option value="PhD">Doctorate (PhD)</option>
                <option value="other">Other</option>
              </select>
              {errors.qualification && <span className="error-text">{errors.qualification}</span>}
            </div>

            <div>
              <select 
                name="languageProficiency"
                value={formData.languageProficiency}
                onChange={handleChange}
                className={errors.languageProficiency ? "input-error" : ""}
              >
                <option value="" disabled hidden>Language Proficiency</option>
                <option value="IELTS">IELTS</option>
                <option value="PTE">PTE</option>
              </select>
              {errors.languageProficiency && <span className="error-text">{errors.languageProficiency}</span>}
            </div>

            <div>
              <input 
                name="languageScore"
                value={formData.languageScore}
                onChange={handleChange}
                placeholder="Language Score"
                className={errors.languageScore ? "input-error" : ""}
              />
              {errors.languageScore && <span className="error-text">{errors.languageScore}</span>}
            </div>

            <div>
              <select 
                name="nearestOffice"
                value={formData.nearestOffice}
                onChange={handleChange}
                className={errors.nearestOffice ? "input-error" : ""}
              >
                <option value="" disabled hidden>Nearest Office</option>
                <option value="Abudhabi">Abudhabi</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Dubai">Dubai</option>
                <option value="Kochi">Kochi</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kollam">Kollam</option>
                <option value="Kozhikkod">Kozhikkod</option>
                <option value="Oman">Oman</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Trivandrum">Trivandrum</option>
              </select>
              {errors.nearestOffice && <span className="error-text">{errors.nearestOffice}</span>}
            </div>

            <div>
              <select 
                name="countryPreferred"
                value={formData.countryPreferred}
                onChange={handleChange}
                className={errors.countryPreferred ? "input-error" : ""}
              >
                <option value="" disabled hidden>Country Preferred</option>
                <option value="Albania">Albania</option>
                <option value="Australia">Australia</option>
                <option value="Bosnia">Bosnia</option>
                <option value="Canada">Canada</option>
                <option value="Croatia">Croatia</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Malta">Malta</option>
                <option value="Moldova">Moldova</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Poland">Poland</option>
                <option value="Serbia">Serbia</option>
                <option value="Slovakia">Slovakia</option>
              </select>
              {errors.countryPreferred && <span className="error-text">{errors.countryPreferred}</span>}
            </div>

            <div className="full">
              <input 
                type="date" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={errors.preferredDate ? "input-error" : ""}
              />
              {errors.preferredDate && <span className="error-text">{errors.preferredDate}</span>}
            </div>

          </div>

          <button onClick={handleSubmit}>Submit</button>

        </div>

      </div>

      {/* BLUE STRIP */}

      <div className="digital-strip">
        <h3>Work Overseas with Confidence<br/>We Have the Way</h3>
        <p>Start your international career journey with expert digital guidance. We provide personalized assistance for Work Visa, Work Permit, and PR applications, ensuring smooth processing, transparent procedures, and end-to-end support for your global ambitions.</p>
      </div>

    </section>
  );
}
