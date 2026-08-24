import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { posts } from "./blogData";
import "./BlogPost.css";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const post = posts.find((p) => p.id === Number(id));

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
      <div className="bp-notfound">
        <h1>Post Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Link to="/blog" className="bp-back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = posts.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 2);

  const otherPosts = posts.filter(
    (p) => p.id !== post.id && p.category !== post.category
  ).slice(0, 3 - relatedPosts.length);

  const sidebarPosts = [...relatedPosts, ...otherPosts].slice(0, 3);

  return (
    <div className={`bp-container ${mounted ? "animate" : ""}`}>
      {/* Breadcrumb */}
      <div className="bp-breadcrumb">
        <Link to="/">Home</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <Link to="/blog">Blog</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <span>{post.category}</span>
      </div>

      {/* Header */}
      <div className="bp-header">
        <span className="bp-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="bp-meta">
          <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
          <span><i className="fa-regular fa-clock"></i> {post.readTime}</span>
        </div>
        <div className="bp-author">
          <div className="bp-avatar">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div>
            <p className="bp-author-name">{post.author}</p>
            <p className="bp-author-role">{post.authorRole}</p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bp-hero-image">
        <img src={post.image} alt={post.title} />
      </div>

      {/* Main Layout */}
      <div className="bp-layout">
        {/* Content */}
        <article className="bp-content">
          <div className="bp-excerpt">
            <p>{post.excerpt}</p>
          </div>

          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* Tags */}
          <div className="bp-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="bp-tag">#{tag}</span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bp-cta">
            <div className="bp-cta-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="bp-cta-text">
              <h3>Need Help With Your Immigration Journey?</h3>
              <p>
                Our expert consultants are ready to guide you through every step.
                Book a free consultation today.
              </p>
            </div>
            <Link to="/bookconsultation" className="bp-cta-btn">
              Book Consultation <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          {/* Share */}
          <div className="bp-share">
            <span>Share This Article:</span>
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
          <div className="bp-nav">
            <button className="bp-nav-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i> Previous
            </button>
            <Link to="/blog" className="bp-nav-btn">
              All Posts <i className="fa-solid fa-th-large"></i>
            </Link>
            {(() => {
              const idx = posts.findIndex((p) => p.id === post.id);
              const next = posts[(idx + 1) % posts.length];
              return (
                <Link to={`/blog/${next.id}`} className="bp-nav-btn">
                  Next <i className="fa-solid fa-arrow-right"></i>
                </Link>
              );
            })()}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="bp-sidebar">
          {/* Author Card */}
          <div className="bp-widget author-card">
            <div className="bp-widget-avatar">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <h4>About the Author</h4>
            <p className="bp-widget-name">{post.author}</p>
            <p className="bp-widget-role">{post.authorRole}</p>
            <button
              className="bp-follow-btn"
              onClick={() => navigate("/about")}
            >
              View All Articles
            </button>
          </div>

          {/* Categories */}
          <div className="bp-widget">
            <h4>Categories</h4>
            <ul className="bp-cat-list">
              {["Canada PR", "Australia PR", "Europe Work Permit", "IELTS", "Study Abroad"].map((c) => {
                const count = posts.filter((p) => p.category === c).length;
                return (
                  <li key={c}>
                    <Link to={`/blog?category=${encodeURIComponent(c)}`}>
                      {c} <span>{count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Related Posts */}
          <div className="bp-widget">
            <h4>Related Posts</h4>
            <ul className="bp-related-list">
              {sidebarPosts.map((p) => (
                <li key={p.id}>
                  <Link to={`/blog/${p.id}`}>
                    <div className="bp-related-thumb">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div>
                      <span className="bp-related-cat">{p.category}</span>
                      <p>{p.title}</p>
                      <small>{p.date}</small>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

</div>
  );
}
