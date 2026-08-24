import { useEffect, useState } from "react";
import idp from "../../assets/idp.png";
import mara from "../../assets/mara.png";
import iccrc from "../../assets/iccrc.png";
import aea from "../../assets/aea.jpeg";
import clearness from "../../assets/clearness.png";
import gst from "../../assets/gst.png";
import hr from "../../assets/hr.png";
import pmld from "../../assets/project-management-license-in-dubai.png";
import "./License.css";

export default function License() {
  const slides = [
    { src: iccrc, alt: "ICCRC", caption: "REGISTERED CONSULTANT\nUNDER GOVT OF CANADA" },
    { src: idp, alt: "IDP", caption: "OFFICIAL PARTNER OF IDP" },
    { src: mara, alt: "MARA", caption: "AUSTRALIAN CONSULTANT\nUNDER GOVT OF AUSTRALIA" },
    { src: aea, alt: "AEA", caption: "AEA-EUROPE\nMEMORSHIP" },
    { src: clearness, alt: "Clearness", caption: "CLEARNESS FROM\nGOVT.OF INDIA\nEXTENAL MINISTRY" },
    { src: gst, alt: "gst", caption: "GST REGISTRATION\nIN INDIA" },
    { src: hr, alt: "HR", caption: "HR PLACEMENT REGISTRATION\nIN ABU DHABI, UAE" },
    { src: pmld, alt: "PMLD", caption: "PROJECT MANAGEMENT\nLICENSE IN DUBAI, UAE" },
    { src: mara, alt: "MARA", caption: "AUSTRALIAN CONSULTANT\nUNDER GOVT OF AUSTRALIA" },
    { src: mara, alt: "MARA", caption: "AUSTRALIAN CONSULTANT\nUNDER GOVT OF AUSTRALIA" }
  ];

  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setPerView(1);
      else if (w < 900) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        return next > Math.max(0, slides.length - perView) ? 0 : next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length, perView]);

  const prev = () => setIndex((i) => (i - 1 < 0 ? Math.max(0, slides.length - perView) : i - 1));
  const next = () => setIndex((i) => (i + 1 > Math.max(0, slides.length - perView) ? 0 : i + 1));

  return (
    <section className="license-section">
      <div className="license-container">
        <h2>Our License & Certifications</h2>

        <div className="license-carousel" aria-roledescription="carousel">

          <div className="slides">
            <div
              className="slides-inner"
              style={{
                transform: `translateX(-${index * (100 / slides.length)}%)`,
                width: `${(slides.length * 100) / perView}%`
              }}
            >
              {slides.map((s, i) => (
                <div
                  key={s.src + i}
                  className={`slide`}
                  aria-hidden={i >= index && i < index + perView ? "false" : "true"}
                  style={{ flex: `0 0 ${100 / slides.length}%` }}
                >
                  <div className="cloud">
                    <img src={s.src} alt={s.alt} />
                    <p>{s.caption.split('\n').map((ln, idx) => (<span key={idx}>{ln}<br/></span>))}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dots">
            {Array.from({ length: Math.ceil(slides.length / perView) }).map((_, page) => (
              <button
                key={page}
                className={`dot ${Math.floor(index / perView) === page ? "active" : ""}`}
                onClick={() => setIndex(page * perView)}
                aria-label={`Go to page ${page + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

