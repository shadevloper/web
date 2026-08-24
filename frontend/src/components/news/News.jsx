import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsItems } from "./newsData";
import { useToast } from "../../context/ToastContext";
import "./News.css";

const categories = [
  { name: "Canada PR", count: 1 },
  { name: "Australia PR", count: 1 },
  { name: "Europe Work Permit", count: 2 },
  { name: "IELTS", count: 1 },
  { name: "Study Abroad", count: 1 },
  { name: "Company News", count: 2 },
];

export default function News() {
  const { showToast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const featured = newsItems.find((n) => n.featured);
  const filteredNews =
    activeCategory === "All"
      ? newsItems.filter((n) => !n.featured)
      : newsItems.filter((n) => !n.featured && n.category === activeCategory);

  const breaking = newsItems.slice(0, 3);

  return (
    <div className={`news-container ${mounted ? "animate" : ""}`}>
      {/* Masthead */}
      <header className="news-masthead">
        <div className="news-brand">
          <span className="news-brand-dot"></span>
          <h1>AMSTER <span>NEWSROOM</span></h1>
        </div>
        <p className="news-tagline">The latest immigration headlines & company updates</p>
      </header>

      {/* Breaking ticker */}
      <div className="news-ticker">
        <span className="news-ticker-label">BREAKING</span>
        <div className="news-ticker-scroll">
          {breaking.map((n) => (
            <span key={n.id} className="news-ticker-item">
              <i className="fa-solid fa-circle"></i> {n.title}
            </span>
          ))}
        </div>
      </div>

      {/* Issue date bar */}
      <div className="news-issue-bar">
        <span>Daily Edition</span>
<span className="news-issue-date">March 2026</span>
        <span>Vol. 12</span>
      </div>

      {/* Main Layout */}
      <div className="news-layout">
        {/* Headlines */}
        <div className="news-headlines">
          {/* Lead story */}
          <article className="news-lead">
            <div className="news-lead-image">
              <img src={featured.image} alt={featured.title} />
              <span className="news-lead-tag">Lead Story</span>
            </div>
            <div className="news-lead-content">
              <span className="news-cat">{featured.category.toUpperCase()}</span>
              <h2>{featured.title}</h2>
              <div className="news-byline">
                <span><i className="fa-regular fa-calendar"></i> {featured.date}</span>
                <span><i className="fa-regular fa-clock"></i> {featured.readTime}</span>
                <span><i className="fa-solid fa-user-tie"></i> {featured.author}</span>
              </div>
<p>{featured.excerpt}</p>
              <Link to={`/news/${featured.id}`} className="news-lead-link">
                Continue Reading <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </article>

          {/* Category filter */}
          <div className="news-filter-bar">
            <button
              className={`news-filter-btn ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                className={`news-filter-btn ${activeCategory === c.name ? "active" : ""}`}
                onClick={() => setActiveCategory(c.name)}
              >
                {c.name} <span className="news-count">{c.count}</span>
              </button>
            ))}
          </div>

          {/* Horizontal news rows */}
          <div className="news-rows">
            {filteredNews.map((item, idx) => (
              <article className="news-row" key={item.id}>
                <div className="news-row-index">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
<div className="news-row-date">
                  <span className="news-row-day">{item.date.split(" ")[1].replace(",", "")}</span>
                  <span className="news-row-month">{item.date.split(" ")[0]}</span>
                </div>
                <div className="news-row-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-row-content">
                  <span className="news-cat">{item.category.toUpperCase()}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-row-meta">
                    <span><i className="fa-regular fa-clock"></i> {item.readTime}</span>
<Link to={`/news/${item.id}`} className="news-row-link">
                      Read Story <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="news-sidebar">
          {/* Categories */}
          <div className="news-widget">
            <h4 className="news-widget-title">Sections</h4>
            <ul className="news-cat-list">
              <li>
                <button onClick={() => setActiveCategory("All")}>
                  All News <span>{newsItems.length}</span>
                </button>
              </li>
              {categories.map((c) => (
                <li key={c.name}>
                  <button onClick={() => setActiveCategory(c.name)}>
                    {c.name} <span>{c.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Reads */}
          <div className="news-widget">
            <h4 className="news-widget-title">Quick Reads</h4>
            <ol className="news-ranked">
              {newsItems.slice(0, 4).map((item, idx) => (
                <li key={item.id}>
                  <span className="news-ranked-num">{idx + 1}</span>
                  <div>
<Link to={`/news/${item.id}`}>{item.title}</Link>
                    <small>{item.date}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Subscribe */}
          <div className="news-widget news-subscribe">
            <span className="news-subscribe-icon"><i className="fa-solid fa-envelope-open-text"></i></span>
            <h4 className="news-widget-title">Get the Daily Briefing</h4>
            <p>Join our newsletter for the top immigration stories every morning.</p>
            <form
onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                showToast("Subscribed! You'll receive the AMSTER daily briefing.");
              }}
            >
              <input type="email" placeholder="your@email.com" required />
              <button type="submit" className="news-subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* Ad/CTA */}
          <div className="news-widget news-promo">
            <h4 className="news-widget-title">Need a Consultation?</h4>
            <p>Talk to our experts about your immigration journey.</p>
            <Link to="/bookconsultation" className="news-promo-btn">
              Book Consultation
            </Link>
          </div>
        </aside>
      </div>

</div>
  );
}
