import React from 'react';
import Hero from '../components/Hero';

const ServiceAreas = () => {
  return (
    <div className="service-areas-page">
      <Hero 
        title="Areas We Serve"
        subtitle="Providing premium remodeling services throughout the surrounding Pennsylvania region."
        image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="max-w-800 mx-auto text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="mb-8">Pennsylvania's Premier Remodeler</h2>
          <p className="mb-12">
            Oak & Stone Kitchen & Bath is proud to offer our distinguished design and build services to homeowners across the following communities. If your town is strictly not listed, please reach out—we often accommodate projects in neighboring areas.
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', textAlign: 'left'}}>
            <div>
              <h3 className="mb-4" style={{color: 'var(--color-accent)'}}>Chester County</h3>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.05rem'}}>
                <li>West Chester</li>
                <li>Downingtown</li>
                <li>Exton</li>
                <li>Malvern</li>
                <li>Kennett Square</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4" style={{color: 'var(--color-accent)'}}>The Main Line</h3>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.05rem'}}>
                <li>Wayne</li>
                <li>Villanova</li>
                <li>Bryn Mawr</li>
                <li>Gladwyne</li>
                <li>Radnor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
