import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import Watermark from './components/Watermark';

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

// Project Detail Pages
import ProjectModernKitchen from './pages/ProjectModernKitchen';
import ProjectSpaBath from './pages/ProjectSpaBath';
import ProjectChefsKitchen from './pages/ProjectChefsKitchen';
import ProjectColonialRenovation from './pages/ProjectColonialRenovation';
import ProjectWetRoom from './pages/ProjectWetRoom';
import ProjectMudroomPantry from './pages/ProjectMudroomPantry';

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

            {/* Project Detail Pages */}
            <Route path="/portfolio/modern-minimalist-kitchen" element={<ProjectModernKitchen />} />
            <Route path="/portfolio/spa-inspired-primary-bath" element={<ProjectSpaBath />} />
            <Route path="/portfolio/transitional-chefs-kitchen" element={<ProjectChefsKitchen />} />
            <Route path="/portfolio/main-line-colonial-renovation" element={<ProjectColonialRenovation />} />
            <Route path="/portfolio/contemporary-wet-room" element={<ProjectWetRoom />} />
            <Route path="/portfolio/bespoke-mudroom-pantry" element={<ProjectMudroomPantry />} />
          </Routes>
        </main>
        <Footer />
        <Watermark />
      </div>
    </Router>
  );
}

export default App;
