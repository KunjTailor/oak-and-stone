import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  height = '60vh', 
  overlay = 'rgba(0,0,0,0.4)',
  showCTA = false,
  ctaText = "Request Consultation",
  ctaLink = "/contact",
  align = 'center'
}) => {
  return (
    <div 
      className={`hero hero-align-${align}`} 
      style={{ 
        backgroundImage: `url(${image})`,
        height: height
      }}
    >
      <div className="hero-overlay" style={{ backgroundColor: overlay }}></div>
      <div className="container hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {showCTA && (
          <div className="hero-cta-wrapper">
            <Link to={ctaLink} className="btn btn-primary">{ctaText}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
