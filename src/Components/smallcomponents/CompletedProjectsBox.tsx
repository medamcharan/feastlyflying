import React, { useState } from 'react';
import './projectBox.css'; // Ensure this file exists

import { CheckCircle } from '@mui/icons-material'; // Import Material UI icon

const CompletedProjectsBox: React.FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`project-box ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="icon-container">
        <CheckCircle className="project-icon" />
      </div>
      <h2 className="project-count">9,801</h2>
      <p className="project-label">Completed Projects</p>
      <p className="completion-ratio">91% Completed</p> {/* Added completion ratio */}
    </div>
  );
};

export default CompletedProjectsBox;
