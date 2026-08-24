import { Link } from "react-router-dom";
import "./Highlights.css";

const highlights = [
  {
    icon: "fa-solid fa-paper-plane",
    title: "Canada PR & Express Entry",
    desc: "Guide you through Express Entry, PNP, and family sponsorship for a smooth transition to Canada.",
    link: "/canada-pr-immigration",
  },
  {
    icon: "fa-solid fa-earth-oceania",
    title: "Australia Skilled Migration",
    desc: "Points-based PR pathways (Subclass 189, 190, 491) with expert skill assessment support.",
    link: "/australia-pr-immigration",
  },
  {
    icon: "fa-solid fa-earth-europe",
    title: "Europe Work Permits",
    desc: "Legal work permits and placements across Poland, Slovakia, Croatia, Malta, and more.",
    link: "/europe-work-permit",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Study Abroad",
    desc: "Admissions to top universities across Canada, Australia, UK, USA, Ireland, and Europe.",
    link: "/services",
  },
];

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-container">
        <p className="highlights-small">WHY AMSTER OVERSEAS</p>
        <h2>Your Global Journey Starts Here</h2>
        <p className="highlights-desc">
          From permanent residency to study abroad and work permits, we provide a complete
          suite of migration services tailored to your goals.
        </p>

        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <Link to={h.link} className="highlight-card" key={i}>
              <div className="highlight-icon"><i className={h.icon}></i></div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
              <span className="highlight-link">Explore <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
