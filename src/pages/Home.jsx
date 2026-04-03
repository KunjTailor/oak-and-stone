import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero 
        title="Elevate Your Every Day."
        subtitle="Premium kitchen, bath, and whole-home remodeling designed for the way you live. Bringing established craftsmanship to the Pennsylvania area."
        image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
        showCTA={true}
        height="85vh"
        align="center"
      />

      {/* Trust & Craftsmanship */}
      <section className="section trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-content">
              <h2>Established Craftsmanship. Uncompromising Quality.</h2>
              <p className="mb-6">At Oak & Stone, we believe your home should be a reflection of your finest tastes. Our team of master builders and designers have spent decades perfecting the art of the remodel, ensuring every cabinet, tile, and fixture is placed with absolute precision.</p>
              <Link to="/about" className="btn btn-secondary">Our Story</Link>
            </div>
            <div className="trust-features">
              <div className="trust-feature">
                <ShieldCheck size={32} className="trust-icon" />
                <h4>Lifetime Warranty</h4>
                <p>We stand behind our craftsmanship with an industry-leading guarantee.</p>
              </div>
              <div className="trust-feature">
                <Clock size={32} className="trust-icon" />
                <h4>On-Time Delivery</h4>
                <p>Meticulous project management ensures we finish when we say we will.</p>
              </div>
              <div className="trust-feature">
                <Award size={32} className="trust-icon" />
                <h4>Award-Winning Design</h4>
                <p>Recognized locally for our innovative and elegant remodeling solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section section-alt services-overview">
        <div className="container text-center">
          <span className="section-eyebrow">Our Expertise</span>
          <h2 className="mb-12">Transforming Spaces</h2>
          <div className="services-grid">
            <Link to="/services/kitchen-remodeling" className="service-card-simple">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" alt="Kitchen Remodeling" />
              <div className="service-card-content">
                <h3>Kitchen Remodeling</h3>
                <span className="learn-more">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
            <Link to="/services/bathroom-remodeling" className="service-card-simple">
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop" alt="Bathroom Remodeling" />
              <div className="service-card-content">
                <h3>Bathroom Remodeling</h3>
                <span className="learn-more">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
            <Link to="/services/whole-home-renovations" className="service-card-simple">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="Whole-Home Renovations" />
              <div className="service-card-content">
                <h3>Whole-Home</h3>
                <span className="learn-more">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section portfolio-preview">
        <div className="container">
          <div className="section-header-row mb-8">
            <div>
              <span className="section-eyebrow">Our Work</span>
              <h2>Featured Remodels</h2>
            </div>
            <Link to="/portfolio" className="btn btn-secondary d-none-mobile">View All Projects</Link>
          </div>
          <div className="portfolio-grid">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
              title="Modern Minimalist Kitchen"
              category="Kitchen"
              description="A complete tear-down and rebuild featuring custom matte black cabinetry and Calacatta marble."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              title="Spa-Inspired Primary Bath"
              category="Bathroom"
              description="Transformed an outdated bathroom into a serene retreat with a freestanding soaking tub."
            />
          </div>
          <div className="mobile-only-btn text-center mt-4">
             <Link to="/portfolio" className="btn btn-secondary w-100">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section process-preview section-alt">
        <div className="container">
          <div className="process-grid">
            <div className="process-image-col">
              <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop" alt="Design planning" className="process-img" />
            </div>
            <div className="process-content-col">
              <span className="section-eyebrow">How We Work</span>
              <h2>A Seamless, Stress-Free Process</h2>
              <p className="mb-6">From our initial consultation to the final walkthrough, we manage every detail. You never have to worry about contractors, permits, or timelines. We handle it all with complete transparency.</p>
              <ul className="process-list mb-8">
                <li><span className="process-num">01</span> Consultation & Vision</li>
                <li><span className="process-num">02</span> Design & Material Selection</li>
                <li><span className="process-num">03</span> Construction & Build</li>
                <li><span className="process-num">04</span> Final Walkthrough</li>
              </ul>
              <Link to="/process" className="btn btn-primary">Discover Our Process</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section testimonials-preview">
        <div className="container">
          <h2 className="text-center mb-12">Client Experiences</h2>
          <div className="testimonials-grid">
            <TestimonialCard 
              quote="Oak & Stone completely transformed our kitchen. The level of detail and craftsmanship is unparalleled. Our project manager kept us informed every step of the way."
              author="Sarah & David M."
              location="Main Line, PA"
              projectType="Kitchen Remodel"
            />
            <TestimonialCard 
              quote="Professional, clean, and incredibly talented. They turned our cramped 1980s bathroom into a modern oasis. We couldn't be happier with the results."
              author="Michael T."
              location="West Chester, PA"
              projectType="Bathroom Remodel"
            />
          </div>
        </div>
      </section>

      {/* Financing & Final CTA */}
      <section className="section cta-section text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Ready to Begin Your Transformation?</h2>
          <p className="mb-8">Contact us today to schedule your consultation. Flexible financing options are available to help bring your vision to life.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
            <Link to="/financing" className="btn btn-outline-white">View Financing</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
