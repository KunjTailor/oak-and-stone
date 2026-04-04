import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const CustomCabinetry = () => {
  return (
    <div className="service-detail-page">
      <Hero 
        title="Custom Cabinetry"
        subtitle="Handcrafted woodwork tailored precisely to your space and lifestyle."
        image="/images/cabinetry-hero.png"
      />
      <div className="container section">
        <div style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem', maxWidth: '1000px', margin: '0 auto'}}>
          <div>
            <h2 className="mb-6">The Mark of True Quality</h2>
            <p className="mb-4 text-large">
              At Oak & Stone Kitchen & Bath, we believe that off-the-shelf cabinetry can never match the soul and durability of true custom woodwork. Our artisanal approach means every cabinet, drawer, and built-in is designed and constructed specifically for your home.
            </p>
            <p className="mb-8">
              Whether you're looking for sleek, European-style flat panels for a modern aesthetic, or rich, inset shaker doors for a classic transitional look, our cabinetry stands as the foundation of our high-end remodels. We use only premium woods, heavy-duty soft-close hardware, and resilient finishing techniques.
            </p>

            <img src="/images/custom-cabinetry.png" alt="Custom walnut cabinetry with brass hardware" style={{width: '100%', marginBottom: '3rem'}} />

            <h3 className="mb-4">Beyond the Kitchen</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.05rem'}}>
              <li><strong>Built-Ins & Libraries:</strong> Elegant shelving and media centers for your living spaces.</li>
              <li><strong>Mudrooms & Drop Zones:</strong> Beautiful, robust storage to keep your family organized.</li>
              <li><strong>Custom Closets:</strong> Boutique-inspired wardrobe storage.</li>
              <li><strong>Pantry Organization:</strong> Maximizing space with intelligent pull-outs and shelving.</li>
            </ul>

            <div className="text-center mt-12" style={{backgroundColor: 'var(--color-bg-secondary)', padding: '4rem 2rem'}}>
              <h3 className="mb-4">Ready for uncompromising quality?</h3>
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCabinetry;
