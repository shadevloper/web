  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/about/About'
import Consultantion from './components/consultantion/Consultantion'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Immigration from './components/immigration/Immigration'
import CanadaImmigration from './components/immigration/CanadaImmigration'
import AustraliaImmigration from './components/immigration/AustraliaImmigration'
import WorkPermitImmigration from './components/immigration/WorkPermitImmigration'
import Process from './components/process/Process'
import Services from './components/services/Services'
import ServiceDetail from './components/services/ServiceDetail'
import Ielts from './components/ielts/Ielts';
import Testimonial from './components/testimonial/Testimonial';
import Offices from './components/offices/Offices';
import BookConsultation from './components/bookConsultation/BookConsultation';
import EnrollModal from './components/entrollModal/EnrollModal';
import { ModalProvider } from './context/ModalContext';
import { ToastProvider } from './context/ToastContext';
import License from './components/license/License';
import Partners from './components/partners/Partners';
import CompanyOverview from './components/companyOverview/CompanyOverview';
import CEOMessage from './components/ceoMessage/CEOMessage';
import GMMessage from './components/gmMessage/GMMessage';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import News from './components/news/News';
import NewsPost from './components/news/NewsPost';
import NewsSection from './components/news/NewsSection';
import LeadGen from './components/leadgen/LeadGen';
import Highlights from './components/highlights/Highlights';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import EnquiryForm from './components/enquiry/EnquiryForm';
import PrivacyPolicyPage from './components/legal/PrivacyPolicyPage';
import TermsAndConditionsPage from './components/legal/TermsAndConditionsPage';
// import DoubleSwiper from "./DoubleSwiper";


// Home page - displays all sections
const Home = () => (
  <div>
    <Hero/>
    <About/>
    <License/>
    <Highlights/>
    <Immigration/>
    <Services/>
    <Ielts/>
<Testimonial/>
    <Process/>
    <NewsSection/>
    <Consultantion/>
    <Contact/>
    <Partners/>
    <Offices/>
    <Footer/>

  </div>
);

// Individual page layouts
const AboutPage = () => (
  <div>
    <About/>
    <Footer/>
  </div>
);

const ImmigrationPage = () => (
  <div>
    <Immigration/>
    <Services/>
    <Process/>
    <Consultantion/>
    <Contact/>
    <Footer/>
  </div>
);

const ServicesPage = () => (
  <div>
    <Services/>
    <Contact/>
    <Footer/>
  </div>
);

const ServiceDetailPage = () => (
  <div>
    <ServiceDetail/>
    <Footer/>
  </div>
);

const ProcessPage = () => (
  <div>
    <Process/>
    <Contact/>
    <Footer/>
  </div>
);

const ContactPage = () => (
  <div>
    <Contact/>
    <Offices/>
    <Footer/>
  </div>
);

const ConsultationPage = () => (
  <div>
    <Contact/>
    <Footer/>
  </div>
);
const BookingPage = () => (
  <div>
    <BookConsultation/>
    <Footer/>
   </div>
);

const BlogPage = () => (
  <div>
    <Blog/>
    <Footer/>
  </div>
);

const BlogPostPage = () => (
  <div>
    <BlogPost/>
    <Footer/>
  </div>
);

const NewsPage = () => (
  <div>
    <News/>
    <Footer/>
  </div>
);

const NewsPostPage = () => (
  <div>
    <NewsPost/>
    <Footer/>
  </div>
);

const LeadGenPage = () => (
  <div>
    <LeadGen/>
    <Footer/>
  </div>
);

const EnquiryPage = () => (
  <div>
    <EnquiryForm/>
    <Footer/>
  </div>
);

const CanadaPage = () => (
  <div>
    <CanadaImmigration/>
    <Services/>
    <Process/>
    <Consultantion/>
    <Contact/>
    <Footer/>
  </div>
);

const AustraliaPage = () => (
  <div>
    <AustraliaImmigration/>
    <Services/>
    <Process/>
    <Consultantion/>
    <Contact/>
    <Footer/>
  </div>
);

const EuropePage = () => (
  <div>
    <WorkPermitImmigration/>
    <Services/>
    <Process/>
    <Consultantion/>
    <Contact/>
    <Footer/>
  </div>
);

const App = () => {
return (
    <ModalProvider>
      <ToastProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/company-overview" element={<div><CompanyOverview /><Footer /></div>} />
          <Route path="/ceo-message" element={<div><CEOMessage /><Footer /></div>} />
          {/* <Route path="/gm-message" element={<div><GMMessage /><Footer /></div>} /> */}
          <Route path="/immigration" element={<ImmigrationPage />} />
          <Route path="/canada-pr-immigration" element={<CanadaPage />} />
          <Route path="/australia-pr-immigration" element={<AustraliaPage />} />
          <Route path="/europe-work-permit" element={<EuropePage />} />
<Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/bookconsultation" element={<BookingPage />} />
          <Route path="/blog" element={<BlogPage />} />
<Route path="/blog/:id" element={<BlogPostPage />} />
<Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPostPage />} />
          <Route path="/free-assessment" element={<LeadGenPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/PrivacyPolicy" element={<><PrivacyPolicyPage /><Footer /></>} />
          <Route path="/terms-and-conditions" element={<><TermsAndConditionsPage /><Footer /></>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
<EnrollModal />
        <ScrollToTop />
      </Router>
      </ToastProvider>
    </ModalProvider>
  )
  // return <DoubleSwiper />;
}

export default App