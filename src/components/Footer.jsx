import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-alt">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <span className="logo-text">OAK <span className="logo-amp">&</span> STONE</span>
              <span className="logo-subtext">KITCHEN & BATH</span>
            </Link>
            <p className="footer-desc">
              Premium kitchen, bath, and whole-home remodeling services for the Pennsylvania area. We build with established craftsmanship and elevated design.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/financing">Financing Options</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/kitchen-remodeling">Kitchen Remodeling</Link></li>
              <li><Link to="/services/bathroom-remodeling">Bathroom Remodeling</Link></li>
              <li><Link to="/services/whole-home-renovations">Whole-Home Renovations</Link></li>
              <li><Link to="/services/custom-cabinetry">Custom Cabinetry</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Serving Main Line, Downingtown, West Chester, Exton, & nearby PA.</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+16105550198">(610) 555-0198</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:hello@oakandstone.com">hello@oakandstone.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Oak & Stone Kitchen & Bath. All rights reserved. A LocalLift Demo.</p>
          <div className="footer-bottom-links">
            <Link to="/service-areas">Service Areas</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
