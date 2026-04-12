import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const KitchenRemodeling = () => {
  return (
    <div className="service-detail-page">
      <Hero 
        title="Kitchen Remodeling"
        subtitle="The culinary heart of your home, designed for gathering and gastronomy."
        image="/images/kitchen-hero.png"
      />
      <div className="container section">
        <div className="max-w-1000 mx-auto" style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem'}}>
          <div>
            <h2 className="mb-6">A Masterpiece of Form and Function</h2>
            <p className="mb-4 text-large">
              At Oak & Stone, we understand that the kitchen is more than a place to cook. It is where life happens. It's the backdrop for hurried weekday breakfasts, festive holiday gatherings, and quiet evening conversations.
            </p>
            <p className="mb-8">
              Our bespoke kitchen remodels are tailored to how you live. We focus on optimizing flow and maximizing storage without sacrificing an ounce of style. From custom-milled cabinetry and statement islands to integrated professional-grade appliances and ambient lighting, every element is curated to create a space that is as breathtaking as it is practical.
            </p>

            <img src="/images/kitchen-island.png" alt="Luxury kitchen island details" style={{width: '100%', marginBottom: '3rem'}} />

            <h3 className="mb-4">Our Approach to Kitchens</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.05rem'}}>
              <li><strong>Custom Cabinetry:</strong> Precision-crafted storage solutions designed exactly for your inventory.</li>
              <li><strong>Premium Surfaces:</strong> From durable quartz to dramatic natural stone countertops and backsplashes.</li>
              <li><strong>Chef-Grade Appliances:</strong> Seamless integration of luxury appliances like Sub-Zero and Wolf.</li>
              <li><strong>Layered Lighting:</strong> Perfect illumination for prep work, dining, and ambiance.</li>
            </ul>

            <div className="text-center mt-12 bg-alt p-lg-box" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
              <h3 className="mb-4">Ready to design your dream kitchen?</h3>
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenRemodeling;
