import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    icon: "fa-solid fa-id-card-clip",
    color: "red",
    title: "Visa & Immigration",
    link: "/services/visa-immigration",
    desc: "Complete visa processing and immigration support",
    features: [
      "Canada PR (Express Entry, PNP, AIP, RNIP)",
      "Australia Skilled Migration (Subclass 189, 190, 491)",
      "Europe Work Permits (Poland, Slovakia, Croatia, Malta)",
      "Family Sponsorship & Super Visa",
      "LMIA-based Work Permits",
      "Post-landing & settlement support",
    ],
  },
{
    icon: "fa-solid fa-graduation-cap",
    color: "blue",
    title: "Study Abroad Consulting",
    link: "/services/study-abroad",
    desc: "Expert guidance for university selection and admission",
    features: [
      "University & Course Selection",
      "Application Support & Admissions",
      "Documentation & SOP Help",
      "Scholarship & Financial Aid Guidance",
      "Student Visa Processing",
      "Post-landing & PR Support",
    ],
  },
{
    icon: "fa-solid fa-book-open",
    color: "red",
    title: "IELTS Preparation",
    link: "/services/ielts",
    desc: "Comprehensive IELTS training with certified instructors",
    features: [
      "Authorized Partner of IDP IELTS",
      "CLB 9-based Training Curriculum",
      "Expert Certified Trainers",
      "Mock Tests & Score Analysis",
      "Flexible Batches (Weekday & Weekend)",
      "Target Score: W-7, R-7, S-7, L-8",
    ],
  },
{
    icon: "fa-solid fa-briefcase",
    color: "blue",
    title: "HR & Job Support",
    link: "/services/hr-job-support",
    desc: "Professional job placement and career support services",
    features: [
      "GCC & Europe Job Placements",
      "Licensed HR Placement (Abu Dhabi)",
      "Resume Building & Optimization",
      "Interview Preparation",
      "Career Counseling & Mapping",
      "Employer Verification & Contracts",
    ],
  },
{
    icon: "fa-solid fa-diagram-project",
    color: "red",
    title: "Project Management",
    link: "/services/project-management",
    desc: "Licensed project management consultancy in Dubai",
    features: [
      "Licensed Project Management Consultant (Dubai)",
      "Staff Training & HR Training",
      "Reputation Management",
      "100+ Global Company Partnerships",
      "Company Needs Assessment",
      "Value Delivery Solutions",
    ],
  },
{
    icon: "fa-solid fa-earth-asia",
    color: "blue",
    title: "Study Abroad Destinations",
    link: "/services/study-abroad-destinations",
    desc: "University admissions across the world",
    features: [
      "Canada",
      "Australia & UK",
      "USA & Ireland",
      "France & Singapore",
      "Malaysia & Europe",
      "Admission + Visa + Settlement",
    ],
  },
{
    icon: "fa-solid fa-house-circle-check",
    color: "red",
    title: "Job Assistance & Post-Landing Services",
    link: "/services/job-post-landing",
    desc: "Job placement and seamless settlement support after you land",
    features: [
      "Job Assistance & Placement Support",
      "Airport Pickup & Welcome",
      "SIM Card & Mobile Connection Setup",
      "Accommodation Hunting Assistance",
      "School Admission & Education Support",
      "Bank Account & Local Registration Help",
    ],
  },
];

const process = [
  { icon: "fa-solid fa-comments", title: "Free Consultation", desc: "Understand your goals and assess your eligibility" },
  { icon: "fa-solid fa-file-lines", title: "Documentation", desc: "Prepare and verify all required documents" },
  { icon: "fa-solid fa-paper-plane", title: "Application", desc: "Submit applications to relevant authorities" },
  { icon: "fa-solid fa-clock", title: "Visa Processing", desc: "Track and manage your application status" },
  { icon: "fa-solid fa-house", title: "Post-Landing Support", desc: "Assistance with settlement and integration" },
];

const faqs = [
  {
    q: "How do I start my immigration process?",
    a: "The first step is to complete a detailed eligibility assessment with our experts. We evaluate your profile against the visa requirements of your target country and recommend the best pathway for you.",
  },
  {
    q: "Which countries do you specialize in?",
    a: "We specialize in Canada PR, Australia skilled migration, and Europe work permits. We also provide study abroad support for Canada, Australia, UK, USA, Ireland, France, Singapore, and Malaysia.",
  },
  {
    q: "How long does the immigration process take?",
    a: "Processing time varies depending on the country and visa category, usually ranging from a few months to over a year. We provide continuous updates and follow-up until a decision is made.",
  },
  {
    q: "Do you assist with work permits?",
    a: "Yes, we provide complete support for Canada work permits, LMIA-based permits, and Europe employment visas across Poland, Slovakia, Croatia, Malta, and more.",
  },
  {
    q: "What documents are required for immigration?",
    a: "Typical documents include your passport, educational certificates, work experience letters, language test results, police clearance, and financial proofs. Our team guides you on the exact list for your application.",
  },
];

export default function Services() {
  return (
    <div className="services-container">

      {/* Header */}
      <p className="services-small">OUR SERVICES</p>
      <h1>Comprehensive Immigration & Study Solutions</h1>
      <p className="services-desc">
        End-to-end support tailored to your global ambitions with personalized guidance at every step
      </p>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className={`service-card ${s.color === "blue" ? "active" : ""}`} key={i}>
            <div className={`icon ${s.color}`}><i className={`s-main fa-solid ${s.icon}`}></i></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            <ul className="s-icon">
              {s.features.map((f, j) => (
                <li key={j}><i className="fa-solid fa-check"></i> {f}</li>
              ))}
            </ul>

<Link to={s.link} className={`learn ${s.color}-text`}>Learn More →</Link>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="services-why">
        <p className="services-small">WHY AMSTER</p>
        <h2>Your Trusted Global Migration Partner</h2>
        <div className="services-why-grid">
          <div className="why-item"><i className="fa-solid fa-shield-halved"></i><h4>Registered & Regulated</h4><p>ICCRC, MARA, IDP & Ministry of External Affairs credentialed</p></div>
          <div className="why-item"><i className="fa-solid fa-user-check"></i><h4>10+ Years Experience</h4><p>Trusted team of certified and experienced consultants</p></div>
          <div className="why-item"><i className="fa-solid fa-award"></i><h4>95% Success Rate</h4><p>Helped thousands of clients migrate successfully</p></div>
          <div className="why-item"><i className="fa-solid fa-heart"></i><h4>Personalized Service</h4><p>Every immigration plan tailored to your goals</p></div>
        </div>
      </div>

      {/* Process */}
      <div className="services-process">
        <p className="services-small">OUR PROCESS</p>
        <h2>How It Works</h2>
        <div className="services-process-timeline">
          {process.map((p, i) => (
            <div className="process-step" key={i}>
              <div className="process-icon"><i className={p.icon}></i></div>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="services-faq">
        <p className="services-small">FAQ</p>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

</div>
  );
}
