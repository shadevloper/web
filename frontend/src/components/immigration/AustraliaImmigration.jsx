import { Link } from "react-router-dom";
import "./ImmigrationDetail.css";

const pathways = [
  {
    icon: "fa-solid fa-route",
    title: "Skilled Independent Visa (Subclass 189)",
    desc: "Grants permanent residency without the need for state or territory nomination. You are invited to apply based on your points score and the skilled occupation list. Best for skilled professionals with no sponsorship requirement.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Skilled Nominated Visa (Subclass 190)",
    desc: "A points-tested visa for skilled workers nominated by an Australian state or territory. Provides a permanent residency pathway with endorsement, adding extra points to your EOI.",
  },
  {
    icon: "fa-solid fa-tree-city",
    title: "Skilled Work Regional Visa (Subclass 491)",
    desc: "A provisional visa for skilled workers willing to live and work in regional Australia. A stepping stone to permanent residency after a qualifying stay under regional occupation lists.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Employer-Sponsored Skilled Migration",
    desc: "For candidates offered employment by an Australian employer, including TSS (Subclass 482) and employer nomination scheme (Subclass 186) transfer pathways.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Family & Partner Migration",
    desc: "Pathways for partners and family members of Australian citizens or permanent residents to obtain residence through partner or family sponsorship.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Regional Migration Programs",
    desc: "Explore designated area migration agreements and regional occupation lists for additional settlement opportunities and priority processing.",
  },
];

const points = [
  { factor: "Age (18–35 years)", points: "Up to 30 points" },
  { factor: "Age (45 years and above)", points: "0 points" },
  { factor: "English Language Ability (IELTS 8+ / PTE 79+)", points: "Up to 20 points" },
  { factor: "English Language Ability (IELTS 7 / PTE 65)", points: "Up to 10 points" },
  { factor: "Educational Qualifications (Bachelor's degree or higher)", points: "Up to 15 points" },
  { factor: "Overseas Skilled Work Experience (2+ years)", points: "Up to 15 points" },
  { factor: "Australian Skilled Employment", points: "Up to 10 points" },
  { factor: "Special Skills / Accreditation (in-demand occupations)", points: "Up to 10 points" },
  { factor: "Study in Australia (relevant degree)", points: "Up to 5 points" },
  { factor: "Australian Relatives (in a designated area)", points: "Up to 5 points" },
  { factor: "Minimum Eligibility Requirement", points: "65 Points" },
];

const occupations = [
  "Registered Nurses",
  "Healthcare Professionals",
  "Hotel Managers",
  "IT Professionals",
  "Civil Engineers",
  "Electrical Engineers",
  "Mechanical Engineers",
  "Teachers & Educators",
  "Accountants & Finance",
  "Trade Workers",
  "Craft Workers",
  "Software Developers",
  "Web Developers",
  "Network Specialists",
  "Data Analysts",
  "Chefs & Cooks",
];

const jobStreams = [
  {
    icon: "fa-solid fa-user-nurse",
    title: "Nurses",
    desc: "High demand across hospitals, aged care, and regional health facilities. One of the most in-demand occupations for Australian PR.",
  },
  {
    icon: "fa-solid fa-hotel",
    title: "Hotel Managers",
    desc: "Excellent opportunities in Australia's booming hospitality industry, with strong sponsorship pathways and regional incentives.",
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "IT Professionals",
    desc: "A strong job market in cybersecurity, cloud computing, and software development. High points and fast nomination for these roles.",
  },
];

const whyAustralia = [
  "High-quality lifestyle and safe environment",
  "World-class healthcare and education system",
  "Stable economy with strong employment opportunities",
  "Pathway to citizenship after permanent residency",
  "Multicultural and welcoming society",
  "Beautiful climate and diverse landscapes",
  "Family-friendly public services and infrastructure",
  "Strong work-life balance culture",
];

const steps = [
  { icon: "fa-solid fa-user-check", title: "Eligibility & Points Test", desc: "Confirm your occupation and score at least 65 points" },
  { icon: "fa-solid fa-file-lines", title: "Skill Assessment", desc: "Complete assessment with the relevant assessing authority" },
  { icon: "fa-solid fa-language", title: "English Test", desc: "Meet IELTS/PTE minimum score requirements" },
  { icon: "fa-solid fa-paper-plane", title: "EOI & Invitation", desc: "Submit your Expression of Interest and await invitation" },
  { icon: "fa-solid fa-file-shield", title: "Visa Application", desc: "Lodge your visa application and medical checks" },
  { icon: "fa-solid fa-plane-departure", title: "Approval & Landing", desc: "Receive your visa and begin your journey in Australia" },
];

const docs = [
  "Valid passport",
  "Skill assessment report",
  "IELTS/PTE English results",
  "Educational qualifications",
  "Employment references",
  "Proof of funds & assets",
  "Police clearance",
  "Medical examination",
  "Birth certificate",
  "Marriage certificate (if applicable)",
];

export default function AustraliaImmigration() {
  return (
    <div className="imm-detail">

      {/* Hero */}
      <div className="imm-hero">
        <div className="imm-hero-inner">
          <p className="imm-hero-label">IMMIGRATION TO AUSTRALIA</p>
          <h1>Australia PR Immigration</h1>
          <p className="imm-hero-sub">
            Australia offers a transparent, merit-based system for skilled professionals
            to obtain permanent residency and long-term career and settlement opportunities.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="imm-section">
        <div className="imm-intro">
          <p>
            Australia is the best place for skilled professionals seeking long-term growth,
            stability, and a high-quality lifestyle. The government provides various immigration
            pathways for those looking to establish a future in the country — with popular options
            including the Skilled Independent Visa (Subclass 189), the Skilled Nominated Visa
            (Subclass 190), and the Skilled Work Regional (Provisional) Visa (Subclass 491).
          </p>
          <p>
            Each visa category uses a fair and transparent points-based system for selection.
            At Amster, we are renowned as the best immigration agency for Australia in Kerala.
            As accredited Subclass 189 consultants in Kochi, Subclass 491 consultants in Calicut,
            and Subclass 190 consultants in Kottayam, we assist applicants with understanding
            eligibility, document preparation, and crafting applications that truly stand out.
          </p>
        </div>

        {/* Pathways */}
        <h2>Australia Immigration Pathways</h2>
        <div className="imm-pathways">
          {pathways.map((p, i) => (
            <div className="imm-pathway" key={i}>
              <div className="imm-path-icon"><i className={p.icon}></i></div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Australia */}
        <h2>Why Choose Australia?</h2>
        <div className="imm-check-grid">
          {whyAustralia.map((w, i) => (
            <div className="imm-check-item" key={i}><i className="fa-solid fa-circle-check"></i><span>{w}</span></div>
          ))}
        </div>

        {/* Points System */}
        <h2>Point-Based Immigration System</h2>
        <p>
          Australian PR programs are competitive, with rigorous standards for age, education,
          English skills, and professional experience. Here's how the points are calculated:
        </p>
        <table className="imm-points-table">
          <thead>
            <tr><th>Factor</th><th>Points</th></tr>
          </thead>
          <tbody>
            {points.map((row, i) => (
              <tr key={i}><td>{row.factor}</td><td>{row.points}</td></tr>
            ))}
          </tbody>
        </table>

        {/* Occupations */}
        <h2>Occupations in Demand for Australian Immigration</h2>
        <div className="imm-occupations">
          {occupations.map((o, i) => (
            <span className="imm-occupation" key={i}><i className="fa-solid fa-briefcase"></i> {o}</span>
          ))}
        </div>

        {/* Job Streams */}
        <h2>Work & Settle in Australia — Popular Job Streams</h2>
        <div className="imm-pathways">
          {jobStreams.map((j, i) => (
            <div className="imm-pathway" key={i}>
              <div className="imm-path-icon"><i className={j.icon}></i></div>
              <h4>{j.title}</h4>
              <p>{j.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <h2>Our Australia PR Process</h2>
        <div className="imm-steps">
          {steps.map((s, i) => (
            <div className="imm-step" key={i}>
              <span className="imm-step-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="imm-step-icon"><i className={s.icon}></i></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <h2>Documents Required</h2>
        <div className="imm-docs">
          {docs.map((d, i) => (
            <div className="imm-doc" key={i}><i className="fa-solid fa-file-circle-check"></i><span>{d}</span></div>
          ))}
        </div>

        {/* CTA */}
        <div className="imm-cta">
          <h2>Ready to Start Your Australia PR Journey?</h2>
          <p>Get a free skill assessment and points calculation from our expert Australia immigration consultants.</p>
          <Link to="/consultation" className="imm-cta-btn">Start Your Assessment <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>

</div>
  );
}
