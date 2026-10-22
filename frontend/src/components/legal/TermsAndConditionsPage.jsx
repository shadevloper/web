import './LegalPage.css';

export default function TermsAndConditionsPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <span className="legal-kicker">Legal</span>
        <h1>Terms & Conditions</h1>
        <p>
          These terms govern your use of our website and the services we provide through it.
        </p>
      </header>

      <section className="legal-card">
        <div className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not
            agree with any part of these terms, please do not use our website.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Services</h2>
          <p>
            Amster Immigration Overseas provides immigration, visa, work permit, study abroad, and related consultancy
            services. The scope, outcome, timeline, and success of any service depend on the information provided, legal
            requirements, and applicable government policies.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Client Responsibilities</h2>
          <p>
            Clients are expected to provide accurate information, relevant documents, and timely responses. Delays or
            incomplete submissions may affect the application process and timelines.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Fees and Payments</h2>
          <p>
            Any fees for consultation or services are communicated in advance and are subject to the terms agreed at the
            time of engagement. Fees are generally non-refundable once services have commenced, except where otherwise
            stated in writing.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Website Content</h2>
          <p>
            The content on this website is for general informational purposes only. While we aim to provide accurate and
            up-to-date information, we do not guarantee that all details are complete or error-free.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, or consequential damages arising from the use
            of our website or services, including loss of business, data, or opportunities, except where required by law.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these terms at any time. Continued use of the website after changes
            are posted constitutes your acceptance of the revised terms.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Contact Information</h2>
          <p>
            For any questions regarding these terms, please contact us at<br />
            <strong>Email:</strong> info@amsteroverseas.com<br />
            <strong>Phone:</strong> +91 8806288062
          </p>
        </div>
      </section>
    </main>
  );
}
