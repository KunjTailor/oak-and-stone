import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectMudroomPantry = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Bespoke Mudroom & Pantry"
        subtitle="Custom millwork designed to maximize storage while maintaining an elegant aesthetic."
        image="/images/mudroom-pantry-fix.png"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">8</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">160</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$72K</span>
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
                A busy family of five was drowning in clutter. Their back entry was a chaotic dumping ground for shoes, backpacks, and sports gear, while the adjacent pantry was a narrow closet that couldn't keep up with weekly groceries. They needed custom storage that could handle the rigors of real family life while looking magazine-worthy.
              </p>
              <p>
                The goal was an organized, beautiful transition space that made coming home feel as good as leaving.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                We combined the existing mud room and an underutilized laundry alcove into one cohesive space. Floor-to-ceiling custom cabinetry in warm white with brass hardware lines one wall, featuring individual lockers for each family member with hooks, cubbies, and closed storage.
              </p>
              <p>
                The pantry was expanded and fitted with custom pull-out shelving, a marble prep counter with a small sink, and adjustable shelving for dry goods. Warm wide-plank oak flooring and a vaulted ceiling with exposed beams complete the space.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="/images/mudroom-pantry-fix.png" alt="Custom mudroom storage lockers" />
            <img src="/images/pantry-shelving.png" alt="Pull-out pantry shelving detail" />
            <img src="/images/marble-prep-counter.png" alt="Marble prep counter and brass fixtures" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Individual Family Lockers</h4>
                  <p>Five dedicated lockers with hooks, cubbies, and concealed storage for each member.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Custom Pull-Out Shelving</h4>
                  <p>Full-extension pantry shelves with soft-close mechanisms and adjustable heights.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Marble Prep Counter</h4>
                  <p>Honed marble surface with integrated prep sink for grocery staging and arrangement.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Brass Hardware Suite</h4>
                  <p>Coordinated brushed brass knobs, pulls, and hooks throughout both spaces.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Boot Bench & Shoe Storage</h4>
                  <p>Built-in walnut bench with ventilated cubbies underneath for shoes and boots.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Vaulted Ceiling Detail</h4>
                  <p>Exposed structural beams with tongue-and-groove paneling for architectural drama.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "The custom cabinetry they designed for our mudroom and pantry is nothing short of a work of art. The finish is flawless, and it changed the entire feel of our home."
            </blockquote>
            <cite>— Elizabeth K., Exton, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Transform your home's hardest-working spaces into something beautiful and functional.</p>
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

export default ProjectMudroomPantry;
