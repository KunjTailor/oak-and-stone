import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, category, description, link = "/portfolio" }) => {
  return (
    <Link to={link} className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <span className="project-view-btn">View Project</span>
        </div>
      </div>
      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        {description && <p className="project-description">{description}</p>}
        {description && (
          <span className="project-link-text">
            Explore Details <ArrowRight size={16} />
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
