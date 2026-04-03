import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectColonialRenovation = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Main Line Colonial Renovation"
        subtitle="A full-scale update to a historic property, blending modern amenities with classic architectural details."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">28</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3,800</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$480K</span>
              <span className="stat-label">Investment</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2023</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>

          <div className="project-detail-intro">
            <div>
              <h2>The Vision</h2>
              <p>
                This stately 1920s colonial on the Main Line had incredible bones but decades of piecemeal updates had eroded the home's architectural integrity. The owners wanted a comprehensive renovation that honored the home's historic character while delivering modern comfort, efficiency, and an open layout for their growing family.
              </p>
              <p>
                Every room needed attention—from the compartmentalized first floor to the outdated kitchen, aging bathrooms, and energy-inefficient windows throughout.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                We approached this project with deep respect for the original architecture. Custom millwork profiles were matched to the home's 1920s details, while structural modifications opened the first floor into a flowing kitchen-dining-family room suite.
              </p>
              <p>
                New energy-efficient windows replicate the original divided-light pattern. The kitchen features period-appropriate inset cabinetry with modern conveniences, and both bathrooms were gutted and rebuilt with heated floors and frameless glass showers.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" alt="Renovated colonial exterior" />
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2070&auto=format&fit=crop" alt="Open-concept first floor living" />
            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?q=80&w=2070&auto=format&fit=crop" alt="Period-appropriate millwork details" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Structural Reconfiguration</h4>
                  <p>Multiple walls removed and steel beams installed to create open-concept living.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Period Millwork Restoration</h4>
                  <p>Custom crown molding, wainscoting, and trim profiles matched to 1920s originals.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Energy-Efficient Windows</h4>
                  <p>22 custom windows replicating original divided-light patterns with modern insulation.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Full Kitchen Rebuild</h4>
                  <p>Custom inset cabinetry, marble surfaces, and integrated professional appliances.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Two Bathroom Overhauls</h4>
                  <p>Primary and guest bath rebuilt with radiant heat, frameless glass, and custom vanities.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Hardwood Refinishing</h4>
                  <p>Original oak hardwoods sanded and refinished in a warm medium walnut stain.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "We hired them for a whole-home renovation, and the experience was seamless. They managed unexpected structural issues with grace and kept the project on time."
            </blockquote>
            <cite>— The Reynolds Family, Downingtown, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Preserve your home's character while bringing it into the modern age. Let's talk.</p>
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

export default ProjectColonialRenovation;
