import React from 'react';
import Hero from '../components/Hero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero 
        title="Start Your Consultation"
        subtitle="We typically respond to all inquiries within 24 business hours."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="container section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="mb-6">Get in Touch</h2>
            <p className="mb-8">Your dream space begins with a conversation. Reach out to our design team to discuss your vision, timeline, and how we can bring it to life.</p>
            
            <ul className="contact-details">
              <li>
                <Phone className="contact-icon" size={24} />
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+16105550198">(610) 555-0198</a></p>
                </div>
              </li>
              <li>
                <Mail className="contact-icon" size={24} />
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:hello@oakandstone.com">hello@oakandstone.com</a></p>
                </div>
              </li>
              <li>
                <MapPin className="contact-icon" size={24} />
                <div>
                  <strong>Service Area</strong>
                  <p>Main Line, Downingtown, West Chester, Exton, & nearby PA</p>
                </div>
              </li>
              <li>
                <Clock className="contact-icon" size={24} />
                <div>
                  <strong>Office Hours</strong>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="mb-6">Request a Consultation</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Jane Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="jane@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="(610) 555-0123" required />
              </div>
              <div className="form-group">
                <label htmlFor="project">Project Type</label>
                <select id="project" required>
                  <option value="">Select a project type</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bath">Bathroom Remodel</option>
                  <option value="whole">Whole-Home Renovation</option>
                  <option value="cabinetry">Custom Cabinetry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" rows="4" placeholder="Tell us about your vision..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Request</button>
              <p className="form-note mt-4 text-center" style={{fontSize: '0.85rem', color: 'var(--color-taupe)'}}>
                A design consultant will reach out via phone or email for the next steps.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
