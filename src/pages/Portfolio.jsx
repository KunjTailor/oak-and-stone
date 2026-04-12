import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Hero 
        title="Our Portfolio"
        subtitle="A curated showcase of our finest remodeling and renovation projects."
        image="/images/bathroom-hero.png"
      />
      <div className="container section">
        <div className="portfolio-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))', gap: '2.5rem'}}>
          <ProjectCard 
            image="/images/kitchen-island.png"
            title="Modern Minimalist Kitchen"
            category="Kitchen"
            description="A complete tear-down and rebuild featuring custom matte black cabinetry and Calacatta marble."
            link="/portfolio/modern-minimalist-kitchen"
          />
          <ProjectCard 
            image="/images/bathroom-hero.png"
            title="Spa-Inspired Primary Bath"
            category="Bathroom"
            description="Transformed an outdated bathroom into a serene retreat with a freestanding soaking tub."
            link="/portfolio/spa-inspired-primary-bath"
          />
          <ProjectCard 
            image="/images/chefs-kitchen-range.png"
            title="Transitional Chef's Kitchen"
            category="Kitchen"
            description="Designed for a culinary enthusiast, featuring professional-grade appliances and a massive prep island."
            link="/portfolio/transitional-chefs-kitchen"
          />
          <ProjectCard 
            image="/images/colonial-exterior.png"
            title="Main Line Colonial Renovation"
            category="Whole-Home"
            description="A full-scale update to a historic property, blending modern amenities with classic architectural details."
            link="/portfolio/main-line-colonial-renovation"
          />
          <ProjectCard 
            image="/images/wet-room.png"
            title="Contemporary Wet Room"
            category="Bathroom"
            description="An expansive, curbless shower and tub enclave wrapped in large-format porcelain tile."
            link="/portfolio/contemporary-wet-room"
          />
          <ProjectCard 
            image="/images/mudroom-pantry-fix.png"
            title="Bespoke Mudroom & Pantry"
            category="Custom Cabinetry"
            description="Custom millwork designed to maximize storage while maintaining an elegant aesthetic."
            link="/portfolio/bespoke-mudroom-pantry"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
