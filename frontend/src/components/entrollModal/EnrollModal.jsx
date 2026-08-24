import "./EnrollModal.css";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useToast } from "../../context/ToastContext";

export default function EnrollModal() {
  const { showToast } = useToast();
  const { open, closeModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetBand: "",
    batch: ""
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

    if (!formData.targetBand) {
      newErrors.targetBand = "Please select a target band";
    }

    if (!formData.batch) {
      newErrors.batch = "Please select a batch";
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

const submitForm = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/enroll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          score: formData.targetBand,
          batch: formData.batch
        })
      }
    );
    const data = await response.json();
    console.log(data);
if (data.success) {
      showToast("Enrollment Submitted");
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

    await submitForm();

  } else {

    setErrors(newErrors);
  }
};

if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <span className="close" onClick={closeModal}>×</span>

        <h2>Enroll in IELTS Training</h2>
        <p className="sub">
          Fill in your details and we'll get back to you soon
        </p>

        {submitted && <div className="modal-success">✓ Enrollment submitted successfully!</div>}

        <form onSubmit={handleSubmit}>

          <label>Full Name </label>
          <input 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}

          <label>Email Address </label>
          <input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label>Phone Number </label>
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}

          <label>Target Band Score </label>
          <select 
            name="targetBand"
            value={formData.targetBand}
            onChange={handleChange}
            className={errors.targetBand ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select target score</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8.0">8.0</option>
          </select>
          {errors.targetBand && <span className="error-text">{errors.targetBand}</span>}

          <label>Preferred Batch </label>
          <select 
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className={errors.batch ? "input-error" : ""}
          >
            <option value="" disabled hidden>Select batch timing</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
          {errors.batch && <span className="error-text">{errors.batch}</span>}

          <button type="button" onClick={handleSubmit}>Submit Enrollment</button>
  </form>

      </div>

    </div>
  );
}


