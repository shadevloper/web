import './LegalPage.css';

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <span className="legal-kicker">Legal</span>
        <h1>Privacy Policy</h1>
        <p>
          We value your privacy and are committed to protecting the personal information you share with us.
        </p>
      </header>

      <section className="legal-card">
        <div className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, contact details, passport information,
            education background, work experience, residency status, and inquiry details when you use our
            website, contact us, or request immigration or education services.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to respond to your queries, assess your eligibility, provide consultation,
            process visa or migration applications, communicate updates, and improve the quality of our services.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Information Sharing</h2>
          <p>
            We may share your information only with trusted third parties involved in your application process,
            such as immigration authorities, education partners, legal advisors, or service providers, as required
            for legitimate business and compliance purposes. We do not sell your personal information.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information from
            unauthorized access, misuse, alteration, or disclosure.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Cookies and Website Analytics</h2>
          <p>
            Our website may use cookies or similar technologies to improve user experience, analyze traffic, and
            understand visitor behaviour. You may disable cookies in your browser settings if you prefer.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data in accordance with applicable
            law. If you have any concerns regarding your personal information, please contact us.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at<br />
            <strong>Email:</strong> info@amsteroverseas.com<br />
            <strong>Phone:</strong> +91 8806288062
          </p>
        </div>
      </section>
    </main>
  );
}
