// UpcomingMeetingEvent.tsx
import React, { useState } from 'react';
import './upcomingMeetingEvent.css'; // Ensure this file exists

const UpcomingMeetingEvent: React.FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`event-box ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="event-details">
        <h2 className="event-title">Team Meeting</h2>
        <p className="event-description">Discuss project progress and upcoming deadlines.</p>
        <p className="event-date">Date: 20/09/24</p>
        <p className="event-time">Time: 3:00 PM - 4:00 PM</p>
        <a href="https://meet.example.com/meeting-link" className="meeting-link" target="_blank" rel="noopener noreferrer">
          Join Meeting
        </a>
      </div>
    </div>
  );
};

export default UpcomingMeetingEvent;
