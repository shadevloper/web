import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Immigration.css";
import canadaImg from "../../assets/canada-immigration-image-2.jpeg";
import australiaImg from "../../assets/australia-immigration-image-1.jpeg";
import europeImg from "../../assets/europe-immigration-image-2.jpeg";

const data = {
  Canada: {
    image: canadaImg,
    title: "Immigration to Canada",
    desc: "Canada Immigration - Build Your Future with Amster",
    link: "/canada-pr-immigration",
    pathways: [
      { name: "Express Entry (FSWP, FSTP, CEC)", desc: "Fastest pathway for skilled professionals via CRS points" },
      { name: "Provincial Nominee Program (PNP)", desc: "Provinces nominate applicants for extra 600 CRS points" },
      { name: "Atlantic Immigration Program (AIP)", desc: "Settle in Atlantic Canada with a full-time job offer" },
      { name: "Rural & Northern Immigration Pilot (RNIP)", desc: "Settle in smaller Canadian communities" },
      { name: "Family Sponsorship & Super Visa", desc: "Sponsor spouse, parents & grandparents" },
    ],
    programs: [
      "Expert assistance for Express Entry, PNP, AIPP, RNIP & Family Sponsorship",
      "Dedicated support for Canada PR & work permits",
      "Career opportunities for engineers, healthcare, IT & technical professionals",
      "Guidance in NOC selection and document preparation",
      "End-to-end visa application support",
      "Continuous follow-up until visa decision",
      "Trusted Canada immigration consultants in Calicut, Kollam & Trivandrum",
      "Helping you build a secure future in Canada",
    ],
  },

  Australia: {
    image: australiaImg,
    title: "Immigration to Australia",
    desc: "Australia Immigration – Your Pathway to a Brighter Future.",
    link: "/australia-pr-immigration",
    pathways: [
      { name: "Skilled Independent Visa (Subclass 189)", desc: "PR without needing state or employer nomination" },
      { name: "Skilled Nominated Visa (Subclass 190)", desc: "PR with state/territory nomination for extra points" },
      { name: "Skilled Work Regional Visa (Subclass 491)", desc: "Provisional visa for regional Australia settlement" },
      { name: "Employer-Sponsored Migration", desc: "TSS (482) and Employer Nomination (186) pathways" },
      { name: "Family & Partner Migration", desc: "Sponsorship for partners and family members" },
    ],
    programs: [
      "Expert guidance for Subclass 189, 190 & 491 visa pathways",
      "Transparent points-based PR system with long-term settlement options",
      "Complete support: skill assessment, EOI filing & state nomination",
      "Assistance with documentation, eligibility checks & standout applications",
      "PR pathways for IT, Engineering, Healthcare, Hospitality & Trades",
      "Employer-sponsored & regional migration programs available",
      "Personalized advice aligned with your career goals",
      "End-to-end immigration support until visa decision",
      "Best Australia immigration agency in Kerala – Amster",
      "Build your future in Australia with confidence and professional guidance",
    ],
  },

  Europe: {
    image: europeImg,
    title: "Immigration to Europe",
    desc: "Europe offers education and work immigration programs.",
    link: "/europe-work-permit",
    pathways: [
      { name: "Poland Work Permit", desc: "Manufacturing, logistics & skilled trades roles" },
      { name: "Slovakia Work Permit", desc: "Warehouse jobs with accommodation support" },
      { name: "Netherlands & Ireland", desc: "Internships and skilled tech roles" },
      { name: "Croatia & Malta", desc: "Hospitality & tourism opportunities" },
      { name: "Romania & Bulgaria", desc: "Factory & long-term residence programs" },
    ],
    programs: [
      "Legal work permits and skilled migration support across Europe",
      "Job opportunities in Poland, Netherlands, Albania, Romania, Croatia & Malta",
      "Verified European employer connections with placement assistance",
      "Complete support: counseling, documentation & relocation guidance",
      "Skilled & semi-skilled job pathways available",
      "Transparent, ethical processing with personalized career mapping",
      "Warehouse jobs, internships & hospitality placements across Europe",
      "Trusted Europe immigration consultants in Kerala",
      "End-to-end assistance from application to arrival",
      "Strong track record in Europe work permit approvals",
      "Build a secure future in Europe with Amster",
    ],
  },
};

export default function Immigration() {
  const [active, setActive] = useState("Canada");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`dest-container ${mounted ? "animate" : ""}`}>

      <p className="dest-small">IMMIGRATION DESTINATIONS</p>
      <h1 className="immigration-h1">Where We Can Take You</h1>
      <p className="dest-desc">
        Explore immigration opportunities across multiple countries with our expert guidance.
      </p>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(data).map((c) => (
          <button
            key={c}
            className={active === c ? "tab active" : "tab"}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="dest-card">

        {/* Image */}
        <div className="dest-image">
          <img src={data[active].image} />
        </div>

        {/* Content */}
        <div className="dest-content">
          <h2>{data[active].title}</h2>
          <p>{data[active].desc}</p>

          <h4>Popular Pathways:</h4>
          <ul className="pathway-list">
            {data[active].pathways.map((p, i) => (
              <li key={i}><i className="im-check fa-solid fa-circle-check"></i> <strong>{p.name}</strong> — {p.desc}</li>
            ))}
          </ul>

          <h4>Available Programs:</h4>
          <ul>
            {data[active].programs.map((p, i) => (
              <li key={i}><i className="im-check fa-solid fa-circle-check"></i> {p}</li>
            ))}
          </ul>

          <div className="dest-actions">
            <Link to={data[active].link}>
              <button className="start-btn">
                Learn More About {active}
              </button>
            </Link>
            <Link to="/consultation">
              <button className="start-btn outline">
                Get Started with {active}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Confidence Stats */}
      <div className="dest-stats">
        <div className="dest-stat">
          <i className="fa-solid fa-file-circle-check"></i>
          <h3>500+</h3>
          <span>Visas Approved</span>
        </div>
<div className="dest-stat">
          <i className="fa-solid fa-earth-americas"></i>
          <h3>10+</h3>
          <span>Countries Served</span>
        </div>
        <div className="dest-stat">
          <i className="fa-solid fa-user-tie"></i>
          <h3>10+</h3>
          <span>Years Experience</span>
        </div>
        <div className="dest-stat">
          <i className="fa-solid fa-trophy"></i>
          <h3>98%</h3>
          <span>Success Rate</span>
        </div>
      </div>

</div>
  );
}
