import "./CompanyOverview.css";

export default function CompanyOverview() {
  return (
    <section className="company-overview">

      {/* Hero */}
      <div className="overview-hero">
        <p className="overview-hero-label">ABOUT AMSTER</p>
        <h1>Company Overview</h1>
        <p className="overview-hero-sub">
          Migration, Study Abroad, HR Placement, and IELTS Training — a trusted
          gateway to global opportunities, serving clients across Kerala and beyond.
        </p>
      </div>

      {/* Stats */}
      <div className="overview-stats">
        <div className="stat">
          <strong>500+</strong>
          <span>Visas Approved</span>
        </div>
        <div className="stat">
          <strong>10+</strong>
          <span>Years of Experience</span>
        </div>
        <div className="stat">
          <strong>95%</strong>
          <span>Success Rate</span>
        </div>
        <div className="stat">
          <strong>12+</strong>
          <span>Offices in Kerala & UAE</span>
        </div>
      </div>

      <div className="overview-container">
        <div className="overview-content">

          {/* Our Story */}
          <div className="overview-card">
            <h2>Our Story</h2>
            <p>
              AMSTER is a leading immigration consultancy firm dedicated to helping
              individuals and families achieve their dreams of relocating to countries
              worldwide. With years of experience and a team of certified professionals,
              we provide comprehensive guidance through every step of the immigration process.
            </p>
            <p>
              Welcome to Amster — a one-stop service web portal for Migration, Study Abroad,
              HR Placement, and IELTS Training. We strive to provide you with accurate and
              clear information and data, so you can make confident decisions about your future.
            </p>
          </div>

          {/* Global Presence & Credentials */}
          <div className="overview-card">
            <h2>Global Presence & Accreditations</h2>
            <p>
              Amster Group offers services that are recommended and approved by the migration
              lawyers of the Australian Government's MARA (Migration Agents Registration
              Authority) and the Canadian Government's ICCRC (Immigration Consultants of Canada
              Regulatory Council).
            </p>
            <ul>
              <li>Clearance from External Ministry (POI), Govt. of India</li>
              <li>Government of Canada — ICCRC</li>
              <li>Government of Australia — MARA</li>
              <li>Project Management License, Dubai (UAE)</li>
              <li>Licensed HR Placement Company, Abu Dhabi (UAE)</li>
              <li>IDP IELTS Official Partner</li>
              <li>Registered PVT LTD & GST Company in India</li>
            </ul>
          </div>

          {/* Our Vision */}
          <div className="overview-card">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and preferred immigration consulting partner, delivering
              excellence and transforming lives through seamless migration experiences. We
              envision a world where geographical boundaries don't limit opportunities.
            </p>
            <p>
              AMSTER UAE offers services as a licensed business in the UAE alongside the Govt
              of Abu Dhabi's Licensed HR Company and the Government of the UAE's Project
              Management Company.
            </p>
          </div>

          {/* Our Values */}
          <div className="overview-card">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Integrity:</strong> Honest and transparent dealings with all clients</li>
              <li><strong>Excellence:</strong> Commitment to highest standards in service delivery</li>
              <li><strong>Customer Focus:</strong> Your success is our priority</li>
              <li><strong>Innovation:</strong> Continuous improvement in processes and solutions</li>
              <li><strong>Professionalism:</strong> Expert guidance every step of the way</li>
            </ul>
          </div>

          {/* Services We Offer */}
          <div className="overview-card">
            <h2>What We Offer</h2>
            <ul>
              <li><strong>Skilled Migration:</strong> Canada PR, Australia PR & Europe work permits</li>
              <li><strong>Study Abroad:</strong> Admissions to universities in USA, Canada, Australia, UK, Europe, Singapore & Malaysia</li>
              <li><strong>IELTS Training:</strong> Authorized partner of IDP with CLB-based coaching</li>
              <li><strong>HR Placement:</strong> Job placements to GCC, Europe & Canada</li>
              <li><strong>Project Management:</strong> Licensed project management consultancy in Dubai</li>
            </ul>
          </div>

          {/* Why Choose AMSTER */}
          <div className="overview-card">
            <h2>Why Choose AMSTER?</h2>
            <ul>
              <li><strong>Trusted Expertise:</strong> Ranked among the best immigration consultants in Kerala, with a track record of satisfied clients</li>
              <li><strong>Transparent Process:</strong> No hidden costs or false promises — entirely ethical and expert handling</li>
              <li><strong>Complete Assistance:</strong> From eligibility assessment to post-landing support</li>
              <li><strong>Personalized Approach:</strong> Each immigration plan is tailored to your goals and background</li>
              <li><strong>High Success Rate:</strong> Helped thousands of clients migrate successfully</li>
              <li><strong>Local Trust, Global Reach:</strong> Esteemed consultants across Kochi, Calicut, Kottayam, Kollam, Thrissur & Trivandrum</li>
            </ul>
          </div>

          {/* Our Reach */}
          <div className="overview-card">
            <h2>Our Reach</h2>
            <p>
              We serve applicants across Kerala, including those seeking experienced immigration
              consultants in Kochi, Calicut, Kottayam, Kollam, Thrissur, and Trivandrum. Our
              international presence extends to the UAE, where we operate licensed HR placement
              and project management companies.
            </p>
            <ul>
              <li>Trusted Canadian immigration consultants in Kochi, Calicut & Trivandrum</li>
              <li>Australia PR specialists across Kerala</li>
              <li>Europe job consultancy in Thrissur & beyond</li>
              <li>Verified employers across Poland, Netherlands, Romania, Croatia & Malta</li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="overview-card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to enable a smooth, stress-free, and effective immigration
              experience through expert guidance and dedicated support. Whether you are aiming
              to pursue a global career, acquire permanent residency, or seek new opportunities
              abroad, Amster Immigration is your reliable partner throughout every stage of the process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
