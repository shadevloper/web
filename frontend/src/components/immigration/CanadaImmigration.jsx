import { Link } from "react-router-dom";
import "./ImmigrationDetail.css";

const pathways = [
  {
    icon: "fa-solid fa-bolt",
    title: "Express Entry (FSWP, FSTP, CEC)",
    desc: "The fastest and most popular pathway for skilled professionals. Manage your profile through the Comprehensive Ranking System (CRS) and receive an Invitation to Apply (ITA) for permanent residence.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Provincial Nominee Program (PNP)",
    desc: "Provinces nominate applicants who meet local economic needs. Offers additional CRS points (600) and includes streams like the Alberta Advantage Immigration Program (AAIP) and Saskatchewan's ISW.",
  },
  {
    icon: "fa-solid fa-ship",
    title: "Atlantic Immigration Program (AIP)",
    desc: "A pathway for skilled workers to settle in Atlantic Canada's provinces — New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador.",
  },
  {
    icon: "fa-solid fa-tree-city",
    title: "Rural & Northern Immigration Pilot (RNIP)",
    desc: "For skilled workers who want to settle in smaller Canadian communities, with a focus on population growth and local workforce needs.",
  },
  {
    icon: "fa-solid fa-flag",
    title: "Quebec Skilled Worker Program",
    desc: "The ARRIMA system manages Quebec's immigration. Candidates are selected based on a points grid that recognizes training, work experience, and French proficiency.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Family Sponsorship & Super Visa",
    desc: "Sponsor your spouse, common-law partner, parents, and grandparents for permanent residence, or apply for the Parent & Grandparent Super Visa.",
  },
];

const steps = [
  { icon: "fa-solid fa-user-check", title: "Eligibility Assessment", desc: "Evaluate your profile against CRS/PNP criteria" },
  { icon: "fa-solid fa-file-lines", title: "Document Preparation", desc: "Gather education, work, and language proofs" },
  { icon: "fa-solid fa-language", title: "Language Test", desc: "Clear IELTS/CLB with target scores (CLB 9 ideal)" },
  { icon: "fa-solid fa-paper-plane", title: "Application & Follow-up", desc: "Submit your profile and track until decision" },
];

const docs = [
  "Valid passport & photographs",
  "Educational certificates (ECA report)",
  "Work experience letters",
  "IELTS/CLB language test results",
  "Proof of funds",
  "Police clearance certificate",
  "Medical examination",
  "Birth & marriage certificates",
  "NOC selection & reference letters",
];

export default function CanadaImmigration() {
  return (
    <div className="imm-detail">

      {/* Hero */}
      <div className="imm-hero">
        <div className="imm-hero-inner">
          <p className="imm-hero-label">IMMIGRATION TO CANADA</p>
          <h1>Canada PR Immigration</h1>
          <p className="imm-hero-sub">
            Build your future in a land of opportunities. Canada offers reliable
            pathways to permanent residency for skilled professionals, families,
            and students seeking long-term career security.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="imm-section">
        <div className="imm-intro">
          <p>
            Canada is a premier destination for qualified individuals pursuing permanent
            residency and enduring career security. With the increasing demand for skilled
            individuals, Canada presents remarkable opportunities for engineers, healthcare
            workers, IT professionals, and technical specialists.
          </p>
          <p>
            At Amster, we expertly support hopeful candidates through Canada's leading pathways,
            such as Express Entry, PNP, AIPP, RNIP, and Family Sponsorship programs. Our dedication
            and knowledge position us as a trusted partner for Canada PR consultants in Calicut,
            Canada work permit consultants in Kollam, and the best consultancy for Canada PR in
            Calicut and Trivandrum.
          </p>
        </div>

        {/* Pathways */}
        <h2>Canada PR Pathways</h2>
        <div className="imm-pathways">
          {pathways.map((p, i) => (
            <div className="imm-pathway" key={i}>
              <div className="imm-path-icon"><i className={p.icon}></i></div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Canada */}
        <h2>Why Choose Canada?</h2>
        <div className="imm-check-grid">
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>Universal healthcare and social security</span></div>
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>High demand for engineers, nurses, IT & technical professionals</span></div>
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>Pathway to citizenship after permanent residency</span></div>
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>World-class education & family-friendly environment</span></div>
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>Multicultural and welcoming society</span></div>
          <div className="imm-check-item"><i className="fa-solid fa-circle-check"></i><span>Strong economy with excellent work opportunities</span></div>
        </div>

        {/* Process */}
        <h2>Our Canada PR Process</h2>
        <div className="imm-steps">
          {steps.map((s, i) => (
            <div className="imm-step" key={i}>
              <span className="imm-step-num">0{i + 1}</span>
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
          <h2>Ready to Start Your Canada PR Journey?</h2>
          <p>Get a free eligibility assessment from our expert Canada immigration consultants.</p>
          <Link to="/consultation" className="imm-cta-btn">Start Your Assessment <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>

</div>
  );
}
