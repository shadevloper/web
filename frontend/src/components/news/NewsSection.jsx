import { Link } from "react-router-dom";
import { newsItems } from "./newsData";
import "./NewsSection.css";

export default function NewsSection() {
  const recent = newsItems.slice(0, 3);

  return (
    <section className="news-section">
      <p className="news-section-small">LATEST NEWS</p>
      <h2 className="news-section-title">News & Updates</h2>
      <p className="news-section-desc">
        Stay informed with the latest immigration news, company updates, and announcements from AMSTER.
      </p>

      <div className="news-section-grid">
        {recent.map((item) => (
          <article className="news-section-card" key={item.id}>
            <div className="news-section-image">
              <img src={item.image} alt={item.title} />
              <span className="news-section-cat">{item.category}</span>
            </div>
            <div className="news-section-body">
              <div className="news-section-meta">
                <span><i className="fa-regular fa-calendar"></i> {item.date}</span>
                <span><i className="fa-regular fa-clock"></i> {item.readTime}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
<Link to={`/news/${item.id}`} className="news-section-link">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Link to="/news" className="news-section-button">
        View All News <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </section>
  );
}
