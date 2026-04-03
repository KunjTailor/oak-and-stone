import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectChefsKitchen = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Transitional Chef's Kitchen"
        subtitle="Designed for a culinary enthusiast, featuring professional-grade appliances and a massive prep island."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">16</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">400</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$220K</span>
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
                An avid home chef and entertainer approached us with a dream: a kitchen that could rival a professional restaurant while remaining warm enough for family Sunday dinners. Their existing kitchen felt disconnected, with the cooking zone isolated from the entertaining area.
              </p>
              <p>
                They wanted an expansive prep island, commercial-grade cooking equipment, and a layout designed around the triangle workflow that professional chefs depend on.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                We created a seamless transition between traditional warmth and contemporary functionality. The cabinetry features inset shaker doors in a custom-mixed sage green, complemented by brushed nickel hardware and honed Carrara marble countertops.
              </p>
              <p>
                The showpiece is a 10-foot island with a prep sink, built-in cutting board station, and seating for four. A 60" Thermador range with matching hood anchors the cooking wall, flanked by floor-to-ceiling pantry cabinets.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop" alt="Chef's kitchen prep island overview" />
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop" alt="Professional range and hood detail" />
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop" alt="Custom sage green cabinetry" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>10-Foot Prep Island</h4>
                  <p>Oversized island with prep sink, cutting board station, and seating for four.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>60" Thermador Range</h4>
                  <p>Professional dual-fuel range with matching stainless-steel ventilation hood.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Custom Sage Cabinetry</h4>
                  <p>Inset shaker doors in a bespoke sage green with brushed nickel hardware.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Honed Carrara Marble</h4>
                  <p>Elegant natural stone countertops and full-height backsplash.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Walk-In Pantry</h4>
                  <p>Floor-to-ceiling pantry cabinets with custom pull-out shelving and lighting.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Butler's Pantry</h4>
                  <p>Adjacent wet bar with glass-front cabinets and beverage refrigeration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "As someone who cooks every day, this kitchen has changed my life. The workflow is perfect, and the finishes are absolutely stunning. Worth every penny."
            </blockquote>
            <cite>— The Harrison Family, Chester Springs, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Let's design a kitchen that works as hard as you do—and looks incredible doing it.</p>
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

export default ProjectChefsKitchen;
