import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import ServiceAreas from './pages/ServiceAreas';
import Financing from './pages/Financing';
import Contact from './pages/Contact';

// Service Pages
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRemodeling from './pages/BathroomRemodeling';
import WholeHomeRenovations from './pages/WholeHomeRenovations';
import CustomCabinetry from './pages/CustomCabinetry';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
            <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
            <Route path="/services/whole-home-renovations" element={<WholeHomeRenovations />} />
            <Route path="/services/custom-cabinetry" element={<CustomCabinetry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
