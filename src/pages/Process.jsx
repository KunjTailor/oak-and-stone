import React from 'react';
import Hero from '../components/Hero';

const Process = () => {
  return (
    <div className="process-page">
      <Hero 
        title="Our Proven Process"
        subtitle="Meticulous planning for flawless execution."
        image="/images/design-planning.png"
      />
      <div className="container section">
        <div className="max-w-800 mx-auto" style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="process-step mb-12">
            <h2 className="mb-4"><span style={{color: 'var(--color-accent)'}}>01.</span> Consultation & Vision</h2>
            <p>Our journey begins with an in-depth consultation. We visit your home to understand your space, listen to your goals, and uncover your personal style. We discuss functionality, aesthetics, and targeted investment to establish a solid foundation for the project.</p>
          </div>
          <div className="process-step mb-12">
            <h2 className="mb-4"><span style={{color: 'var(--color-accent)'}}>02.</span> Design & Material Selection</h2>
            <p>Our design team creates a comprehensive plan, including 3D renderings and material boards. We guide you through selecting premium finishes, from custom cabinetry and countertops to elegant lighting and plumbing fixtures, ensuring everything harmonizes beautifully.</p>
          </div>
          <div className="process-step mb-12">
            <h2 className="mb-4"><span style={{color: 'var(--color-accent)'}}>03.</span> Construction & Build</h2>
            <p>With permits secured, our master craftsmen begin the transformation. A dedicated project manager ensures clear communication, meticulous site protection, and strict adherence to our timeline, minimizing disruption to your daily life.</p>
          </div>
          <div className="process-step">
            <h2 className="mb-4"><span style={{color: 'var(--color-accent)'}}>04.</span> Final Walkthrough</h2>
            <p>Upon completion, we conduct a thorough walkthrough with you to ensure every detail meets our exacting standards. We don't consider the job done until you are absolutely thrilled with your new space.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
