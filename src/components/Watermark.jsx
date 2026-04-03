import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './Watermark.css';

const Watermark = () => {
  return (
    <div className="watermark-container">
      <div className="watermark-content">
        <ShieldCheck size={18} className="watermark-icon" />
        <span>Concept Demo by <strong>LocalLift Web Studios</strong></span>
      </div>
    </div>
  );
};

export default Watermark;
