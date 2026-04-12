import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Financing = () => {
  return (
    <div className="financing-page">
      <Hero 
        title="Flexible Financing"
        subtitle="Bring your vision to life today with convenient payment options customized to your project."
        image="/images/design-planning.png"
      />
      <div className="container section">
        <div className="max-w-800 mx-auto">
          <h2 className="mb-6">Invest in Your Home</h2>
          <p className="mb-8">
            A premium remodel is an investment in your home's value and your daily quality of life. At Oak & Stone Kitchen & Bath, we understand that flexibility is key. That's why we partner with trusted financial institutions to offer competitive, straightforward financing solutions.
          </p>

          <div className="p-box" style={{backgroundColor: 'var(--color-bg-primary)', borderLeft: '4px solid var(--color-accent)', marginBottom: '3rem'}}>
            <h3 className="mb-4">Current Offers</h3>
            <ul className="mb-8" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <li><strong>12 Months Same-As-Cash:</strong> No interest and no payments for the first 12 months on approved credit.</li>
              <li><strong>Low Fixed Monthly Payments:</strong> Spread the cost of your remodel over 5 to 10 years at a competitive fixed rate.</li>
            </ul>
            <p className="text-secondary" style={{fontSize: '0.85rem'}}>
              *Subject to credit approval. Minimum monthly payments required. Ask your design consultant for full terms and conditions based on your specific project scope.
            </p>
          </div>

          <h3 className="mb-4">How to Apply</h3>
          <p className="mb-6">
            The application process is quick, secure, and can be completed entirely online or during your in-home consultation. Approvals often take just minutes, allowing us to move forward with scheduling your project without delay.
          </p>

          <div className="mt-8 text-center">
            <Link to="/contact" className="btn btn-primary">Discuss Financing with a Designer</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
