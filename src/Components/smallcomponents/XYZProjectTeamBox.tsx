import React, { useState } from 'react';
import Avathar from './Avathar.avif';
import WW from './WW.jpeg';
import './xyzProjectTeamBox.css'; // Ensure this file exists

import { Group } from '@mui/icons-material'; // Import Material UI icon
import { Avatar } from 'flowbite-react';

const XYZProjectTeamBox: React.FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`project-boxX ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="icon-title-container">
        <Group className="project-icon" />
        <h2 className="project-title">XYZ Project Team</h2>
      </div>
      <p className="project-description">A dedicated team working on cutting-edge solutions.</p>
      <div className="details-container">
        <p className="project-date">Date: 15/09/24</p>
        <p className="team-members">Members: 15</p>
      </div>
      <div className="avatars-container">
        <Avatar.Group>
          <Avatar className="avatar" img={WW} alt="Charan M" rounded />
          <Avatar className="avatar" img={Avathar} alt="Charan M" rounded />
          <Avatar className="avatar" img={Avathar} alt="Charan M" rounded />
          <Avatar.Counter total={12} href="#" />
        </Avatar.Group>
      </div>
    </div>
  );
};

export default XYZProjectTeamBox;
