import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">OAK <span className="logo-amp">&</span> STONE</span>
          <span className="logo-subtext">KITCHEN & BATH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link to="/about" className="nav-link">About</Link></li>
            
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <span className="nav-link dropdown-trigger">
                Services <ChevronDown size={14} />
              </span>
              {servicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services/kitchen-remodeling" className="dropdown-link">Kitchen Remodeling</Link></li>
                  <li><Link to="/services/bathroom-remodeling" className="dropdown-link">Bathroom Remodeling</Link></li>
                  <li><Link to="/services/whole-home-renovations" className="dropdown-link">Whole-Home</Link></li>
                  <li><Link to="/services/custom-cabinetry" className="dropdown-link">Custom Cabinetry</Link></li>
                </ul>
              )}
            </li>
            
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link to="/process" className="nav-link">Process</Link></li>
            <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary d-none-mobile">Consultation</Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li><Link to="/" className="mobile-nav-link">Home</Link></li>
            <li><Link to="/about" className="mobile-nav-link">About</Link></li>
            <li className="mobile-nav-section-title">Our Services</li>
            <li><Link to="/services/kitchen-remodeling" className="mobile-nav-link sub-link">Kitchen Remodeling</Link></li>
            <li><Link to="/services/bathroom-remodeling" className="mobile-nav-link sub-link">Bathroom Remodeling</Link></li>
            <li><Link to="/services/whole-home-renovations" className="mobile-nav-link sub-link">Whole-Home Renovations</Link></li>
            <li><Link to="/services/custom-cabinetry" className="mobile-nav-link sub-link">Custom Cabinetry</Link></li>
            <li><Link to="/portfolio" className="mobile-nav-link mt-4">Portfolio</Link></li>
            <li><Link to="/process" className="mobile-nav-link">Process</Link></li>
            <li><Link to="/testimonials" className="mobile-nav-link">Testimonials</Link></li>
            <li><Link to="/service-areas" className="mobile-nav-link">Service Areas</Link></li>
            <li><Link to="/financing" className="mobile-nav-link">Financing</Link></li>
            <li><Link to="/contact" className="mobile-nav-link">Contact</Link></li>
          </ul>
          <div className="mobile-nav-footer">
            <Link to="/contact" className="btn btn-primary w-100 text-center">Request Consultation</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
