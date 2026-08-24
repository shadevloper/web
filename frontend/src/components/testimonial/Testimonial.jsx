import "./Testimonial.css";
import fallbackImg from "../../assets/amster-logo.png";
import unknownPerson from "../../assets/unknown_person.svg";

const clients = [
  {
    name: "Rajesh ",
    status: "Now in Canada",
    rating: 5,
    date: "2 weeks ago",
    text:
      "Amster Overseas made my Canadian PR dream come true. Their team guided me through every step with patience and expertise. My COPR was issued in just 8 months!",
    img: unknownPerson,
  },
  {
    name: "Priya Sharma",
    status: "Studying in Australia",
    rating: 5,
    date: "1 month ago",
    text:
      "Thanks to Amster Overseas, I got admission to my dream university in Melbourne. Their study abroad consulting service is exceptional and transparent.",
    img: unknownPerson,
  },
  {
    name: "Mohammed Ali",
    status: "Working in UAE",
    rating: 4,
    date: "3 weeks ago",
    text:
      "Their job placement service helped me secure an excellent position in Dubai. The entire process was smooth and professional. Highly recommended!",
    img: unknownPerson,
  },
  {
    name: "Sneha",
    status: "Student Visa - UK",
    rating: 5,
    date: "5 days ago",
    text:
      "From document verification to visa interview preparation, everything was handled so well. I am now studying in London because of their hard work.",
    img: unknownPerson,
  },
  {
    name: "Arjun Singh",
    status: "PR - Australia",
    rating: 5,
    date: "2 months ago",
    text:
      "The team kept me updated at every stage of my Australia PR application. Very honest advice and no false promises. Truly grateful for their support.",
    img: unknownPerson,
  },
  {
    name: "Fatima Khan",
    status: "Work Permit - Poland",
    rating: 4,
    date: "1 week ago",
    text:
      "After trying with other agencies and failing, Amster Overseas turned things around. My Poland work permit was approved quickly. Thank you team!",
    img: unknownPerson,
  },
];

const Stars = ({ count }) => {
  const full = "★".repeat(count);
  const empty = "☆".repeat(5 - count);
  return <span className="stars">{full}{empty}</span>;
};

export default function Testimonial() {
  return (
    <div className="test-container">

      <p className="test-small">SUCCESS STORIES</p>
      <h1>What Our Clients Say</h1>
      <p className="test-desc">
        Real stories from real people who achieved their dreams with our guidance
      </p>

      {/* Review Summary */}
      <div className="review-summary">
        <span className="summary-rating">4.9</span>
        <span className="summary-stars">★★★★★</span>
        <span className="summary-count">Based on 200+ verified reviews</span>
      </div>

      <div className="test-grid">
        {clients.map((c, i) => (
          <div className="test-card" key={i}>

            <div className="card-top">
              <img
                src={c.img}
                className="avatar"
                alt={c.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImg;
                }}
              />
              <span className="verify-badge">
                <i className="fa-solid fa-circle-check"></i> Verified Client
              </span>
            </div>

            <Stars count={c.rating} />

            <p className="quote">"{c.text}"</p>

            <h4>{c.name}</h4>
            <span className="T-badge">{c.status}</span>
            <p className="review-date">
              <i className="fa-regular fa-clock"></i> {c.date}
            </p>
          </div>
        ))}
      </div>

</div>
  );
}
