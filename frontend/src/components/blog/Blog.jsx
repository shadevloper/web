import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "./blogData";
import "./Blog.css";

const categories = [
  { name: "Canada PR", count: 3 },
  { name: "Australia PR", count: 2 },
  { name: "Europe Work Permit", count: 2 },
  { name: "IELTS", count: 1 },
  { name: "Study Abroad", count: 1 },
];

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const featured = posts.find((p) => p.featured);
  const filteredPosts =
    activeCategory === "All"
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => !p.featured && p.category === activeCategory);

  const recentPosts = posts.slice(1, 5);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className={`blog-container ${mounted ? "animate" : ""}`}>
      {/* Header */}
      <div className="blog-header">
        <p className="blog-small">OUR BLOG</p>
        <h1>Immigration Insights & News</h1>
        <p className="blog-desc">
          Expert articles, tips, and updates to guide your global migration journey
        </p>
      </div>

      {/* Featured Post */}
      <div className="featured-post">
        <div className="featured-image">
          <img src={featured.image} alt={featured.title} />
          <span className="featured-tag">Featured</span>
        </div>
        <div className="featured-content">
          <span className="category">{featured.category}</span>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <div className="author-row">
            <div className="author-avatar">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div>
              <p className="author-name">{featured.author}</p>
              <p className="author-role">{featured.authorRole}</p>
            </div>
          </div>
          <div className="post-meta">
            <span><i className="fa-regular fa-calendar"></i> {featured.date}</span>
            <span><i className="fa-regular fa-clock"></i> {featured.readTime}</span>
          </div>
          <div className="post-tags">
            {featured.tags.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <Link to={`/blog/${featured.id}`} className="read-more">
            Read More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Main Layout */}
      <div className="blog-layout">
        {/* Posts Area */}
        <div className="posts-section">
          {/* Category Filter */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                className={`filter-btn ${activeCategory === c.name ? "active" : ""}`}
                onClick={() => setActiveCategory(c.name)}
              >
                {c.name} <span className="count">{c.count}</span>
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <article className="post-card" key={post.id}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category">{post.category}</span>
                </div>
                <div className="post-body">
                  <div className="post-meta">
                    <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                    <span><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="author-row small">
                    <div className="author-avatar">
                      <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <div>
                      <p className="author-name">{post.author}</p>
                      <p className="author-role">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="post-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search */}
          <div className="sidebar-widget">
            <h4>Search</h4>
            <div className="search-box">
              <input type="text" placeholder="Search articles..." />
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul className="category-list">
              <li>
                <button onClick={() => setActiveCategory("All")}>
                  All Posts <span>{posts.length}</span>
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

          {/* Recent Posts */}
          <div className="sidebar-widget">
            <h4>Recent Posts</h4>
            <ul className="recent-list">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <div className="recent-thumb">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="recent-info">
                    <span className="recent-cat">{post.category}</span>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    <small>{post.date}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="sidebar-widget">
            <h4>Popular Tags</h4>
            <div className="tag-cloud">
              {["Canada", "Australia", "Europe", "PR", "IELTS", "Work Permit", "Study Abroad", "Express Entry"].map((t) => (
                <span key={t} className="cloud-tag">#{t}</span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="sidebar-widget newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get the latest immigration news and updates delivered to your inbox.</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                <i className="fa-solid fa-paper-plane"></i> Subscribe
              </button>
            </form>
            {subscribed && <p className="subscribed-msg">✓ Thank you for subscribing!</p>}
          </div>
        </aside>
      </div>

</div>
  );
}
