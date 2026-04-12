import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const BathroomRemodeling = () => {
  return (
    <div className="service-detail-page">
      <Hero 
        title="Bathroom Remodeling"
        subtitle="A private sanctuary for restoration and relaxation."
        image="/images/bathroom-remodeling-fix.png"
      />
      <div className="container section">
        <div className="max-w-1000 mx-auto" style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem'}}>
          <div>
            <h2 className="mb-6">Your Personal Retreat</h2>
            <p className="mb-4 text-large">
              A master bathroom should be an oasis—a place to start the day with energy and end it in tranquility. Oak & Stone transforms ordinary bathrooms into spa-like retreats combining elegant aesthetics with high-performance plumbing.
            </p>
            <p className="mb-8">
              Whether you desire a seamless curbless shower enclosure, a deep soaking tub, or dual custom vanities with integrated lighting, our designers craft spaces that cater to your daily rituals. We source the finest tiles, natural stones, and fixtures to ensure your new bathroom is a sanctuary of comfort and luxury.
            </p>

            <img src="/images/bathroom-remodeling-fix.png" alt="Luxury bathroom shower" style={{width: '100%', marginBottom: '3rem'}} />

            <h3 className="mb-4">Elevated Bath Features</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.05rem'}}>
              <li><strong>Wet Rooms & Walk-In Showers:</strong> Expansive, frameless glass enclosures with dual showerheads.</li>
              <li><strong>Radiant Floor Heating:</strong> Invisible luxury that keeps tiles warm underfoot during PA winters.</li>
              <li><strong>Freestanding Tubs:</strong> Sculptural soaking tubs that serve as striking functional focal points.</li>
              <li><strong>Custom Vanities:</strong> Tailored storage for a clutter-free, serene environment.</li>
            </ul>

            <div className="text-center mt-12 p-lg-box" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
              <h3 className="mb-4">Ready to elevate your daily routine?</h3>
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomRemodeling;
