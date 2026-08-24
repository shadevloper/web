import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { services } from "./serviceData";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, [serviceId]);

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0);
    }
  }, [serviceId, service]);

  if (!service) {
    return (
      <div className="svc-notfound">
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link to="/services" className="svc-back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back to Services
        </Link>
      </div>
    );
  }

  const idx = services.findIndex((s) => s.id === service.id);
  const next = services[(idx + 1) % services.length];

  return (
    <div className={`svc-container ${mounted ? "animate" : ""}`}>
      {/* Breadcrumb */}
      <div className="svc-breadcrumb">
        <Link to="/">Home</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <Link to="/services">Services</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <span>{service.shortTitle}</span>
      </div>

      {/* Hero */}
      <div className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-hero-icon"><i className={service.icon}></i></div>
          <p className="svc-hero-label">{service.heroLabel}</p>
          <h1>{service.title}</h1>
          <p className="svc-hero-sub">{service.heroSub}</p>
        </div>
      </div>

      {/* Content */}
      <div className="svc-section">
        {/* Overview */}
        <div className="svc-intro">
          {service.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Highlights */}
        <h2>What We Offer</h2>
        <div className="svc-check-grid">
          {service.highlights.map((h, i) => (
            <div className="svc-check-item" key={i}>
              <i className="fa-solid fa-circle-check"></i>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2>Why Choose AMSTER?</h2>
        <div className="svc-check-grid">
          {service.whyChoose.map((w, i) => (
            <div className="svc-check-item" key={i}>
              <i className="fa-solid fa-star"></i>
              <span>{w}</span>
            </div>
          ))}
        </div>

        {/* Process */}
        <h2>Our Process</h2>
        <div className="svc-steps">
          {service.process.map((s, i) => (
            <div className="svc-step" key={i}>
              <span className="svc-step-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="svc-step-icon"><i className={s.icon}></i></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <h2>Documents Required</h2>
        <div className="svc-docs">
          {service.docs.map((d, i) => (
            <div className="svc-doc" key={i}>
              <i className="fa-solid fa-file-circle-check"></i>
              <span>{d}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions</h2>
        <div className="svc-faq">
          {service.faqs.map((f, i) => (
            <details className="svc-faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="svc-cta">
          <h2>{service.ctaTitle}</h2>
          <p>{service.ctaText}</p>
          <Link to={service.ctaLink} className="svc-cta-btn">
            {service.ctaLabel} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Navigation */}
        <div className="svc-nav">
          <button className="svc-nav-btn" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>
          <Link to="/services" className="svc-nav-btn">
            All Services <i className="fa-solid fa-th-large"></i>
          </Link>
          <Link to={`/services/${next.id}`} className="svc-nav-btn">
            Next Service <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

</div>
  );
}
