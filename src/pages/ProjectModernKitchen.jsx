import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectModernKitchen = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Modern Minimalist Kitchen"
        subtitle="A complete tear-down and rebuild featuring custom matte black cabinetry and Calacatta marble."
        image="/images/kitchen-island.png"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">14</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">320</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$185K</span>
              <span className="stat-label">Investment</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2024</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>

          <div className="project-detail-intro">
            <div>
              <h2>The Vision</h2>
              <p>
                Our clients came to us with a bold vision: transform their cramped, 1990s-era kitchen into an expansive, contemporary masterpiece. They wanted dramatic contrast, clean lines, and a space designed as much for entertaining as for family dinners.
              </p>
              <p>
                The original kitchen featured dated oak cabinetry, laminate countertops, and a closed-off layout that felt disconnected from the rest of the home. We stripped the room down to the studs and started fresh.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                We opened the floor plan by removing a load-bearing wall and installing a concealed steel beam, creating a seamless flow between the kitchen and the great room. The centerpiece is a 12-foot waterfall island clad in bookmatched Calacatta Borghini marble.
              </p>
              <p>
                Custom matte black flat-panel cabinetry with integrated pulls lines every wall, paired with brass accents and under-cabinet LED lighting that brings warmth to the monochromatic palette.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="/images/kitchen-island.png" alt="Kitchen island with marble waterfall edge" />
            <img src="/images/kitchen-hero.png" alt="Custom matte black cabinetry detail" />
            <img src="/images/whole-home-renovation.png" alt="Professional-grade appliance integration" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Calacatta Marble Island</h4>
                  <p>12-foot waterfall edge island with bookmatched Calacatta Borghini marble slab.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Matte Black Cabinetry</h4>
                  <p>Custom flat-panel cabinets with integrated edge pulls and soft-close hardware.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Wolf & Sub-Zero Suite</h4>
                  <p>Professional 48" range, built-in refrigeration, and integrated wine column.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Open-Concept Conversion</h4>
                  <p>Removed load-bearing wall with concealed steel beam for seamless flow.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Layered Lighting Design</h4>
                  <p>Recessed, pendant, and under-cabinet LED lighting with smart controls.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Wide-Plank Oak Floors</h4>
                  <p>European white oak hardwood with a matte natural finish throughout.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "Oak & Stone completely transformed our kitchen. The level of detail and craftsmanship is unparalleled. Our project manager kept us informed every step of the way."
            </blockquote>
            <cite>— Sarah & David M., Main Line, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Let's discuss how we can bring your kitchen vision to life with the same level of craftsmanship.</p>
            <div className="project-nav">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/portfolio" className="btn btn-outline-white">Back to Portfolio</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModernKitchen;
