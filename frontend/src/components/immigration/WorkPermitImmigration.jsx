import { Link } from "react-router-dom";
import "./ImmigrationDetail.css";

const countries = [
{
    icon: "fa-solid fa-industry",
    title: "Poland",
    desc: "Poland is Europe's manufacturing powerhouse, offering high demand for warehouse, production, and logistics workers in cities like Warsaw and Krakow.",
  },
  {
    icon: "fa-solid fa-warehouse",
    title: "Slovakia",
    desc: "Slovakia specializes in warehouse and automotive sector jobs, with many employers in Bratislava and Kosice providing accommodation support.",
  },

  {
    icon: "fa-solid fa-mountain-sun",
    title: "Albania",
    desc: "Albania offers legal work permits for skilled and semi-skilled applicants seeking employment in Tirana and the fast-growing Adriatic coastal region.",
  },
  {
    icon: "fa-solid fa-flag",
    title: "Ireland",
    desc: "Ireland's booming economy in Dublin and Cork offers strong opportunities in logistics, hospitality, and tech with a direct pathway to EU mobility.",
  },
  {
    icon: "fa-solid fa-sun",
    title: "Croatia",
    desc: "Croatia's Adriatic coastline drives a thriving tourism and hospitality sector, with work permits in Zagreb, Split, and Dubrovnik.",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "Bulgaria",
    desc: "Bulgaria offers a stable job market in Sofia and Plovdiv with long-term residence opportunities, serving as an affordable gateway to the EU.",
  },

  {
    icon: "fa-solid fa-mountain",
    title: "Slovenia",
    desc: "Slovenia offers work permits for skilled professionals in Ljubljana and Maribor, with a strong focus on manufacturing, logistics, and tech industries.",
  },
  {
    icon: "fa-solid fa-snowflake",
    title: "Russia",
    desc: "Russia provides work permit opportunities in Moscow and Saint Petersburg across construction, engineering, and IT sectors with competitive salaries.",
  },
  {
    icon: "fa-solid fa-flag-checkered",
    title: "Macedonia",
    desc: "Macedonia offers growing opportunities for skilled and semi-skilled workers in Skopje, with demand in manufacturing, construction, and agriculture.",
  },
];

const benefits = [
  { icon: "fa-solid fa-circle-check", text: "Legal work permits & skilled migration support across Europe" },
  { icon: "fa-solid fa-circle-check", text: "Verified European employer connections with placement assistance" },
  { icon: "fa-solid fa-circle-check", text: "Complete support: counseling, documentation & relocation guidance" },
  { icon: "fa-solid fa-circle-check", text: "Skilled & semi-skilled job pathways available" },
  { icon: "fa-solid fa-circle-check", text: "Warehouse jobs, internships & hospitality placements across Europe" },
  { icon: "fa-solid fa-circle-check", text: "Transparent, ethical processing with personalized career mapping" },
  { icon: "fa-solid fa-circle-check", text: "End-to-end assistance from application to arrival" },
  { icon: "fa-solid fa-circle-check", text: "Strong track record in Europe work permit approvals" },
];

const jobSectors = [
  { icon: "fa-solid fa-boxes-stacked", title: "Warehouse & Logistics", desc: "High-demand roles in sorting, packing, and distribution centers across Poland, Slovakia, and Romania." },
  { icon: "fa-solid fa-hotel", title: "Hospitality & Tourism", desc: "Hotel, restaurant, and resort positions in Croatia, Malta, and Ireland with great earning potential." },
  { icon: "fa-solid fa-industry", title: "Manufacturing & Production", desc: "Factory and assembly roles in Poland, Bulgaria, and Hungary with stable contracts." },
  { icon: "fa-solid fa-laptop-code", title: "IT & Technology", desc: "Skilled tech roles in the Netherlands, Ireland, and Germany with high salaries and fast processing." },
  { icon: "fa-solid fa-user-nurse", title: "Healthcare", desc: "Nursing and caregiving positions across Europe with strong demand and sponsorship." },
  { icon: "fa-solid fa-hard-hat", title: "Skilled Trades", desc: "Electricians, welders, and construction trades in high demand throughout the EU." },
];

const whyEurope = [
  "Visa-free travel across the Schengen Area",
  "High-quality healthcare and social security",
  "Pathway to permanent residency & EU citizenship",
  "Strong worker rights and labor protections",
  "Access to world-class education for families",
  "Diverse cultures and welcoming communities",
  "Stable economies with competitive salaries",
  "Excellent work-life balance and infrastructure",
];

const steps = [
  { icon: "fa-solid fa-user-check", title: "Profile & Counseling", desc: "Match your profile with verified European employers" },
  { icon: "fa-solid fa-file-lines", title: "Job Contract", desc: "Secure an employment contract & accommodation letter" },
  { icon: "fa-solid fa-paper-plane", title: "Work Permit Application", desc: "File your work permit application with authorities" },
  { icon: "fa-solid fa-plane-departure", title: "Relocation", desc: "Receive your approval and depart with full support" },
  { icon: "fa-solid fa-house", title: "Settlement Support", desc: "Assistance with accommodation, onboarding, and local integration" },
];

const docs = [
  "Valid passport (6+ months validity)",
  "Updated CV / resume",
  "Educational certificates",
  "Work experience certificates",
  "Passport-size photographs",
  "Medical certificate",
  "Police clearance certificate",
  "Job contract & accommodation letter",
];

export default function WorkPermitImmigration() {
  return (
    <div className="imm-detail">

      {/* Hero */}
      <div className="imm-hero">
        <div className="imm-hero-inner">
          <p className="imm-hero-label">WORK & SETTLE IN EUROPE</p>
          <h1>Europe Work Permit</h1>
          <p className="imm-hero-sub">
            Explore a world without borders. Europe offers high-quality jobs, safe living
            conditions, and long-term global prospects through legal work permits and
            industry-ready placements.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="imm-section">
        <div className="imm-intro">
          <p>
            Europe is one of the most desired destinations for professionals seeking high-quality
            jobs, safe living circumstances, and long-term worldwide prospects. Amster, a reputable
            Europe immigration consultant in Kerala, directs individuals to the most promising
            European destinations through legal work permits, industry-ready placements, and
            completely transparent documentation support.
          </p>
          <p>
            From work visas to skilled migration pathways, our staff guarantees that each client
            receives clear, ethical, and personalized advice for a smooth transfer into Europe's
            flourishing job market.
          </p>
        </div>

        {/* Destinations */}
        <h2>Available European Destinations</h2>
        <div className="imm-pathways">
          {countries.map((c, i) => (
            <div className="imm-pathway" key={i}>
              <div className="imm-path-icon"><i className={c.icon}></i></div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Europe */}
        <h2>Why Choose Europe?</h2>
        <div className="imm-check-grid">
          {whyEurope.map((w, i) => (
            <div className="imm-check-item" key={i}><i className="fa-solid fa-circle-check"></i><span>{w}</span></div>
          ))}
        </div>

        {/* Job Sectors */}
        <h2>In-Demand Job Sectors in Europe</h2>
        <div className="imm-pathways">
          {jobSectors.map((j, i) => (
            <div className="imm-pathway" key={i}>
              <div className="imm-path-icon"><i className={j.icon}></i></div>
              <h4>{j.title}</h4>
              <p>{j.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Amster */}
        <h2>Why Choose Amster for Europe Immigration?</h2>
        <div className="imm-check-grid">
          {benefits.map((b, i) => (
            <div className="imm-check-item" key={i}><i className={b.icon}></i><span>{b.text}</span></div>
          ))}
        </div>

        {/* Process */}
        <h2>Our Europe Work Permit Process</h2>
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
          <h2>Ready to Work in Europe?</h2>
          <p>Get counseling and placement support from our trusted Europe work permit consultants.</p>
          <Link to="/consultation" className="imm-cta-btn">Start Your Journey <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>

</div>
  );
}
