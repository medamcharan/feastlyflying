import React, { useState } from 'react';
import './projectBox.css'; // Ensure this file exists

import { PlayCircle } from '@mui/icons-material'; // Import Material UI icon

const RunningProjectsBox: React.FC = () => {
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
        <PlayCircle className="project-icon" />
      </div>
      <h2 className="project-count">926</h2> {/* Example count */}
      <p className="project-label">Running Projects</p>
      <p className="completion-ratio">9% Active</p> {/* Example ratio */}
    </div>
  );
};

export default RunningProjectsBox;
