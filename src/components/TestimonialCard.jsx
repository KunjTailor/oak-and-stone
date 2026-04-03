import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ quote, author, location, projectType }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="testimonial-author-info">
        <p className="testimonial-author">{author}</p>
        <p className="testimonial-meta">{location} &bull; {projectType}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
