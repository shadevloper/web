import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { newsItems } from "./newsData";
import "./NewsPost.css";

export default function NewsPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const post = newsItems.find((n) => n.id === Number(id));

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, [id]);

  useEffect(() => {
    if (post) {
      window.scrollTo(0, 0);
    }
  }, [id, post]);

  if (!post) {
    return (
      <div className="np-notfound">
        <h1>Story Not Found</h1>
        <p>The news article you are looking for does not exist.</p>
        <Link to="/news" className="np-back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back to Newsroom
        </Link>
      </div>
    );
  }

  const remaining = newsItems.filter((n) => n.id !== post.id);
  const sidebarPosts = remaining.slice(0, 3);

  return (
    <div className={`np-container ${mounted ? "animate" : ""}`}>
      {/* Breadcrumb */}
      <div className="np-breadcrumb">
        <Link to="/">Home</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <Link to="/news">Newsroom</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <span>{post.category}</span>
      </div>

      {/* Header */}
      <div className="np-header">
        <span className="np-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="np-meta">
          <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
          <span><i className="fa-regular fa-clock"></i> {post.readTime}</span>
        </div>
        <div className="np-author">
          <div className="np-avatar">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div>
            <p className="np-author-name">{post.author}</p>
            <p className="np-author-role">{post.authorRole}</p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="np-hero-image">
        <img src={post.image} alt={post.title} />
      </div>

      {/* Main Layout */}
      <div className="np-layout">
        {/* Content */}
        <article className="np-content">
          <div className="np-excerpt">
            <p>{post.excerpt}</p>
          </div>

          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* Tags */}
          <div className="np-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="np-tag">#{tag}</span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="np-cta">
            <div className="np-cta-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="np-cta-text">
              <h3>Ready to Start Your Journey?</h3>
              <p>
                Our expert consultants are ready to guide you through every step.
                Book a free consultation today.
              </p>
            </div>
            <Link to="/bookconsultation" className="np-cta-btn">
              Book Consultation <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          {/* Share */}
          <div className="np-share">
            <span>Share This Story:</span>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/919072722877" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* Navigation */}
          <div className="np-nav">
            <button className="np-nav-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i> Previous
            </button>
            <Link to="/news" className="np-nav-btn">
              All Stories <i className="fa-solid fa-th-large"></i>
            </Link>
            {(() => {
              const idx = newsItems.findIndex((n) => n.id === post.id);
              const next = newsItems[(idx + 1) % newsItems.length];
              return (
                <Link to={`/news/${next.id}`} className="np-nav-btn">
                  Next <i className="fa-solid fa-arrow-right"></i>
                </Link>
              );
            })()}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="np-sidebar">
          {/* Categories */}
          <div className="np-widget">
            <h4>Quick Reads</h4>
            <ul className="np-related-list">
              {sidebarPosts.map((p) => (
                <li key={p.id}>
                  <Link to={`/news/${p.id}`}>
                    <div className="np-related-thumb">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div>
                      <span className="np-related-cat">{p.category}</span>
                      <p>{p.title}</p>
                      <small>{p.date}</small>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="np-widget np-promo">
            <h4>Need a Consultation?</h4>
            <p>Talk to our experts about your immigration journey.</p>
            <Link to="/bookconsultation" className="np-promo-btn">
              Book Consultation
            </Link>
          </div>
        </aside>
      </div>

</div>
  );
}
