import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const WholeHomeRenovations = () => {
  return (
    <div className="service-detail-page">
      <Hero 
        title="Whole-Home Renovations"
        subtitle="Reimagining your living space with cohesive design and master execution."
        image="/images/whole-home-renovation.png"
      />
      <div className="container section">
        <div className="max-w-1000 mx-auto" style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem'}}>
          <div>
            <h2 className="mb-6">A Cohesive Architectural Vision</h2>
            <p className="mb-4 text-large">
              Sometimes, a single room isn't enough. When an entire floorplan needs to be rethought, Oak & Stone provides the comprehensive design and structural expertise required to execute a flawless whole-home transformation.
            </p>
            <p className="mb-8">
              We specialize in taking closed-off, dated interiors and opening them up into light-filled, expansive open concepts. Our holistic approach means that every room flows seamlessly into the next, creating a unified narrative of style, texture, and color throughout your home. From initial structural engineering to the final coat of paint, we manage the entire complex process.
            </p>

            <h3 className="mb-4">Our Expertise</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.05rem'}}>
              <li><strong>Structural Modifications:</strong> Removing load-bearing walls for open-concept layouts.</li>
              <li><strong>Flooring & Trim:</strong> Cohesive hardwood installation and premium custom millwork throughout.</li>
              <li><strong>Additions:</strong> Expanding your footprint to accommodate growing families or new lifestyle needs.</li>
            </ul>

            <div className="text-center mt-12 p-lg-box" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
              <h3 className="mb-4">Ready to reimagine your entire home?</h3>
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeHomeRenovations;
