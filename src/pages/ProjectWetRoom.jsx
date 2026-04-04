import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectWetRoom = () => {
  return (
    <div className="project-detail-page">
      <Hero 
        title="Contemporary Wet Room"
        subtitle="An expansive, curbless shower and tub enclave wrapped in large-format porcelain tile."
        image="/images/wet-room.png"
      />
      <div className="container section">
        <div className="project-detail-content">

          <div className="project-detail-stats">
            <div className="stat-item">
              <span className="stat-value">12</span>
              <span className="stat-label">Weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">200</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$130K</span>
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
                Inspired by European hotel design, our clients wanted to push the boundaries of what a residential bathroom could be. They envisioned a completely barrier-free wet room—a single, seamlessly waterproofed space where the shower, tub, and open floor coexist without traditional barriers.
              </p>
              <p>
                The goal was a space that felt expansive, modern, and deeply luxurious, moving away from the conventional compartmentalized bathroom layout entirely.
              </p>
            </div>
            <div>
              <h2>The Execution</h2>
              <p>
                Engineering a true wet room requires meticulous waterproofing and precise floor grading. We installed a Schluter Kerdi membrane system across the entire room—floor, walls, and ceiling—creating a monolithic waterproof shell before any tile was set.
              </p>
              <p>
                The floor features a subtle slope toward a linear drain, allowing the entire space to function as one continuous shower zone. Large-format 48"×24" porcelain slabs in a warm concrete tone cover every surface, with minimal grout lines for a dramatic, seamless aesthetic.
              </p>
            </div>
          </div>

          <div className="project-detail-gallery">
            <img src="/images/wet-room.png" alt="Full wet room with curbless entry" />
            <img src="/images/brass-vanity.png" alt="Linear drain and large-format tile detail" />
            <img src="/images/bathroom-hero.png" alt="Freestanding tub within wet room" />
          </div>

          <div className="project-detail-features">
            <h3>Design Highlights</h3>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Curbless Zero-Entry Design</h4>
                  <p>Completely barrier-free floor with precision grading toward a concealed linear drain.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Large-Format Porcelain</h4>
                  <p>48"×24" porcelain slabs with minimal grout lines for a monolithic, modern look.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Dual Rainfall Showerheads</h4>
                  <p>Ceiling-mounted 16" rain shower and wall-mounted hand shower on a slide bar.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Freestanding Japanese Tub</h4>
                  <p>Deep-soaking Ofuro-style tub positioned within the wet zone for seamless bathing.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Full Schluter Waterproofing</h4>
                  <p>Complete Kerdi membrane system across every surface for bulletproof moisture control.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-icon" />
                <div>
                  <h4>Niche & Bench Features</h4>
                  <p>Built-in tiled bench seating and recessed niches with integrated LED accent lighting.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-testimonial">
            <blockquote>
              "The wet room is like nothing we've ever seen in a residential home. It feels like stepping into a luxury hotel every single day. Absolutely stunning work."
            </blockquote>
            <cite>— James & Priya K., Malvern, PA</cite>
          </div>

          <div className="project-detail-cta">
            <h3>Inspired by This Project?</h3>
            <p>Push the boundaries of your bathroom design with a custom wet room concept.</p>
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

export default ProjectWetRoom;
