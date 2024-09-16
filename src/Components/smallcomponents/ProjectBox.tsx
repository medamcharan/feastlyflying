import React, { useState } from 'react';
import './projectBox.css'; 

import { Work } from '@mui/icons-material'; 

const ProjectBox: React.FC = () => {
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
        <Work className="project-icon" />
      </div>
      <h2 className="project-count">10,724</h2>
      <p className="project-label">Project Count</p>
    </div>
  );
};

export default ProjectBox;
