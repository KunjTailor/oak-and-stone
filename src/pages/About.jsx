import React from 'react';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div className="about-page">
      <Hero 
        title="Our Story"
        subtitle="Three generations of master craftsmanship and unwavering commitment to excellence."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
        align="center"
      />
      <div className="container section">
        <div className="max-w-800 mx-auto" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="mb-6">Established in Pennsylvania</h2>
          <p className="mb-4">
            Oak & Stone Kitchen & Bath was founded on a simple principle: your home is your sanctuary, and it deserves to be treated with the utmost respect. For decades, we have been the premier choice for luxury remodeling across the Main Line, Downingtown, West Chester, and Exton.
          </p>
          <p className="mb-8">
            What started as a small family operation has grown into a full-scale design and build firm. But despite our growth, we have never lost sight of what matters most—the details. Every joint, every tile, and every fixture is placed with absolute precision by our team of master craftsmen.
          </p>
          
          <h3 className="mb-4 mt-8">Our Philosophy</h3>
          <p className="mb-4">
            We believe that a successful remodel is a collaboration. We listen intimately to your needs, how you use your space, and what you envision for your daily life. Then, we apply our design expertise and construction knowledge to bring that vision to life, elegantly and efficiently.
          </p>
          <p>
            When you choose Oak & Stone, you are not just hiring a contractor; you are partnering with dedicated professionals who will treat your home as if it were their own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
