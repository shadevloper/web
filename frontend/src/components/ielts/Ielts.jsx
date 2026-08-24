import ieltsImg from "../../assets/latin-mature-students-embracing-american-collegiate-aesthetics.jpg";
import "./Ielts.css";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function Ielts() {
  const { openModal } = useContext(ModalContext);
  return (
    <section className="ielts">

      <div className="ielts-grid">

        {/* IMAGE SIDE */}
        <div className="ielts-image">

<img
            src={ieltsImg}
            alt="IELTS Class"
          />

<div className="badge">
            🏅 British Council <br />
            <strong>Certified</strong>
          </div>

          <div className="ielts-badges">
            <span>
              <i className="fa-solid fa-language"></i>
              <strong>7+</strong> Band Score
            </span>
            <span>
              <i className="fa-solid fa-user-group"></i>
              <strong>500+</strong> Students Trained
            </span>
          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="ielts-content">

          <span className="tag">IELTS EXCELLENCE</span>

          <h1>Achieve Your Target Band Score</h1>

          <p className="desc">
            Our comprehensive IELTS training program is designed to help you
            achieve your desired band score with expert guidance, personalized
            attention, and proven teaching methodologies.
          </p>

          <div className="features">

            <div className="item">
              <i className="i-user fa-solid fa-user-check"></i>
              <div>
                <h4>One-on-One Sessions Available</h4>
                <p>Personalized coaching tailored to your needs</p>
              </div>
            </div>

            <div className="item">
              <i className="i-material fa-solid fa-book"></i>
              <div>
                <h4>Comprehensive Study Material</h4>
                <p>Latest resources and practice materials</p>
              </div>
            </div>

            <div className="item">
              <i className="i-mock fa-solid fa-file-signature"></i>
              <div>
                <h4>Regular Mock Tests & Feedback</h4>
                <p>Track your progress with detailed analysis</p>
              </div>
            </div>

            <div className="item">
              <i className="i-audio fa-solid fa-microphone"></i>
              <div>
                <h4>Speaking Practice Labs</h4>
                <p>Dedicated sessions to improve fluency</p>
              </div>
            </div>

          </div>

          <button className="enroll-btn" onClick={openModal}>Enroll Now →</button>

          {/* <small>Next batch starts: February 15, 2025</small> */}

        </div>

</div>

    </section>
  );
}
