import React from 'react';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <Hero 
        title="Client Experiences"
        subtitle="Don't just take our word for it. Hear from homeowners who have entrusted us with their most personal spaces."
        image="/images/client-experiences-hero.png"
      />
      <div className="container section">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem'}}>
          <TestimonialCard 
            quote="Oak & Stone completely transformed our kitchen. The level of detail and craftsmanship is unparalleled. Our project manager kept us informed every step of the way."
            author="Sarah & David M."
            location="Main Line, PA"
            projectType="Kitchen Remodel"
          />
          <TestimonialCard 
            quote="Professional, clean, and incredibly talented. They turned our cramped 1980s bathroom into a modern oasis. We couldn't be happier with the results."
            author="Michael T."
            location="West Chester, PA"
            projectType="Bathroom Remodel"
          />
          <TestimonialCard 
            quote="We hired them for a whole-home renovation, and the experience was seamless. They managed unexpected structural issues with grace and kept the project on time."
            author="The Reynolds Family"
            location="Downingtown, PA"
            projectType="Whole-Home Renovation"
          />
          <TestimonialCard 
            quote="The custom cabinetry they designed for our great room is nothing short of a work of art. The finish is flawless, and it changed the entire feel of our home."
            author="Elizabeth K."
            location="Exton, PA"
            projectType="Custom Cabinetry"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
