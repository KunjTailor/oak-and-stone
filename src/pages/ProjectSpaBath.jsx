import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectSpaBath = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Spa-Inspired Primary Bath"
        subtitle="Transformed an outdated bathroom into a serene retreat with a freestanding soaking tub."
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">10</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">180</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$95K</span>
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
                The homeowners envisioned a primary bathroom that felt like a five-star spa retreat. Their existing bath was a dark, compartmentalized space with outdated tile, a builder-grade vanity, and a cramped shower-tub combo that hadn't been updated since the early 2000s.
              </p>
              <p>
                They wanted an atmosphere of calm and luxury—natural materials, warm lighting, and a layout that made the room feel twice its size.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                We reconfigured the layout to center a sculptural freestanding soaking tub beneath the window, creating an immediate focal point. The shower was expanded into a generous walk-in enclosure with floor-to-ceiling frameless glass panels and dual rain showerheads.
              </p>
              <p>
                Walls feature large-format Bianco Dolomiti marble-look porcelain tile, complemented by warm white oak floating vanity cabinets and solid brass fixtures in a brushed gold finish.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop" alt="Freestanding soaking tub by window" />
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" alt="Walk-in shower with frameless glass" />
            <img src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop" alt="Custom vanity with brass fixtures" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Freestanding Soaking Tub</h4>
                  <p>A sculptural Victoria + Albert tub positioned as the room's centerpiece.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Frameless Glass Shower</h4>
                  <p>Walk-in enclosure with dual rain showerheads and hand shower on brass bar.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Radiant Floor Heating</h4>
                  <p>In-floor electric radiant heating beneath porcelain tile for year-round comfort.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>White Oak Floating Vanity</h4>
                  <p>Custom 72" double vanity with integrated outlets and soft-close drawers.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Brushed Gold Fixtures</h4>
                  <p>Coordinated brass hardware throughout for a cohesive warm metallic accent.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Sconce & Dimmer Lighting</h4>
                  <p>Vanity sconces and recessed ceiling lights on separate dimmer circuits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "Professional, clean, and incredibly talented. They turned our cramped 1980s bathroom into a modern oasis. We couldn't be happier with the results."
            </blockquote>
            <cite>— Michael T., West Chester, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Transform your bathroom into a personal sanctuary. Let's start the conversation.</p>
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

export default ProjectSpaBath;
