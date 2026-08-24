import gmImg from "../../assets/gm-img.jpg"
import "./GMMessage.css";

export default function GMMessage() {
  return (
    <section className="gm-message">
      <div className="message-container">
        <h1>Message from Our General Manager</h1>
        
        <div className="message-content">
          <div className="message-image">
            <img src={gmImg} alt="General Manager" />
          </div>

          <div className="message-text">
            <div className="message-header">
              <h2>Dear Friends,</h2>
            </div>

            <div className="message-body">
              <p>
                Greetings! I'm delighted to share my thoughts on what makes AMSTER such a special organization and why 
                we stand out in the immigration consulting industry.
              </p>

              <p>
                Every day, I work alongside some of the most passionate and dedicated professionals in this field. Our team 
                comprises certified immigration experts, visa specialists, and customer success advocates who are genuinely 
                invested in your journey. What drives us is not just the work we do, but the impact we create.
              </p>

              <p>
                Immigration is deeply personal. It's about dreams, aspirations, family values, and life-changing decisions. 
                We understand this profound responsibility and take it seriously. Our approach is holistic—we don't just process 
                applications; we guide families through one of the most important transitions of their lives.
              </p>

              <p>
                Our operational excellence is built on three pillars: expertise, efficiency, and empathy. We maintain the highest 
                compliance standards, streamline processes to save you time and stress, and always keep your human experience at 
                the center of everything we do.
              </p>

              <p>
                We are proud to hold registrations with multiple government bodies including ICCRC (Canada), MARA (Australia), and 
                IDP (International), which speaks to our credibility and commitment to professional standards. These credentials are 
                not just achievements—they are promises to you that you're working with legitimate, vetted professionals.
              </p>

              <p>
                As we grow and expand our services, we remain committed to maintaining the personal touch that defines AMSTER. 
                Whether you're exploring career opportunities abroad, seeking better education for your children, or starting a 
                new chapter in a different country, we are here to make that transition smooth and successful.
              </p>

              <p>
                Thank you for considering AMSTER. We're excited to be part of your immigration story and to help you achieve 
                your goals.
              </p>

              <div className="signature">
                <p className="sign-off">Best wishes,</p>
                <p className="gm-name">General Manager</p>
                <p className="company-name">AMSTER Immigration Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
