import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Hero 
        title="Our Portfolio"
        subtitle="A curated showcase of our finest remodeling and renovation projects."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="portfolio-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2.5rem'}}>
          <ProjectCard 
            image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
            title="Modern Minimalist Kitchen"
            category="Kitchen"
            description="A complete tear-down and rebuild featuring custom matte black cabinetry and Calacatta marble."
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
            title="Spa-Inspired Primary Bath"
            category="Bathroom"
            description="Transformed an outdated bathroom into a serene retreat with a freestanding soaking tub."
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            title="Transitional Chef's Kitchen"
            category="Kitchen"
            description="Designed for a culinary enthusiast, featuring professional-grade appliances and a massive prep island."
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            title="Main Line Colonial Renovation"
            category="Whole-Home"
            description="A full-scale update to a historic property, blending modern amenities with classic architectural details."
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop"
            title="Contemporary Wet Room"
            category="Bathroom"
            description="An expansive, curbless shower and tub enclave wrapped in large-format porcelain tile."
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1596766099351-ad3ccce11bf1?q=80&w=2080&auto=format&fit=crop"
            title="Bespoke Mudroom & Pantry"
            category="Custom Cabinetry"
            description="Custom millwork designed to maximize storage while maintaining an elegant aesthetic."
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
