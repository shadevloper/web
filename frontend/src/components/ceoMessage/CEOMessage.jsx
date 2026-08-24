import ceoImg from "../../assets/ceo-img-1.jpeg"
import "./CEOMessage.css";

export default function CEOMessage() {
  return (
    <section className="ceo-message">
      <div className="message-container">
        <h1>Message from Our CEO</h1>
        
        <div className="message-content">
          <div className="message-image">
            <img src={ceoImg} alt="CEO" />
          </div>

          <div className="message-text">
            <div className="message-header">
              <h2>Dear Valued Clients,</h2>
            </div>

            <div className="message-body">
              <p>
                Welcome to AMSTER. It is my privilege to lead an organization that has touched the lives of thousands 
                of families, helping them realize their dreams of a better future in new countries.
              </p>

              <p>
                Over the past decade and a half, we have witnessed the transformative power of migration. What started 
                as a small consultancy with a simple mission—to simplify the immigration process—has grown into a trusted 
                partner for individuals across the globe. This growth is a testament to the dedication of our team and, 
                most importantly, the trust you place in us.
              </p>

              <p>
                In today's interconnected world, immigration represents opportunity, education, career advancement, and 
                family reunification. However, the process can be complex and overwhelming. That's where we come in. Our 
                commitment is to demystify this journey and provide you with clear, honest, and expert guidance every step 
                of the way.
              </p>

              <p>
                We pride ourselves on our integrity, expertise, and unwavering commitment to excellence. Every member of 
                our team is not just a professional—they are advocates for your dreams. We invest in continuous learning, 
                stay updated with immigration policy changes, and leverage technology to ensure you receive the best possible service.
              </p>

              <p>
                As we continue to expand our services and reach more countries, our core values remain unchanged: your success 
                is our success. We don't measure our achievements by numbers alone, but by the smiles on our clients' faces when 
                they receive their visas and begin their new chapters.
              </p>

              <p>
                Thank you for considering AMSTER as your immigration partner. We look forward to being part of your success story.
              </p>

              <div className="signature">
                <p className="sign-off">With warm regards,</p>
                <p className="ceo-name">Founder & CEO</p>
                <p className="company-name">AMSTER Immigration Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
