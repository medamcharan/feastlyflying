import React, { useState } from 'react';
import '../Styles/main.css';
import Avathar from '../assets/Avathar.avif';

import { Search, WbSunny, NightsStay, Message } from '@mui/icons-material'; // Import Material UI icons
import { Avatar } from 'flowbite-react';
import ProjectBox from './smallcomponents/ProjectBox';
import CompletedProjectsBox from './smallcomponents/CompletedProjectsBox';
import RunningProjectsBox from './smallcomponents/RunningProjectsBox';
import XYZProjectTeamBox from './smallcomponents/XYZProjectTeamBox';
import RevenueChart from './smallcomponents/RevenueChart';
import UpcomingMeetingEvent from './smallcomponents/UpcomingMeetingEvent';
import Transactions from './smallcomponents/Transactions';
import TeamPerformance from './smallcomponents/TeamPerformance';

const MainPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        
      <div className="header-container">
        <div className="ds">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="text-sm text-gray-500">Sep 15, 2024</p>
        </div>
      
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <div className="message-icon">
          <Message className="message-icon-style" />
        </div>

        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? (
            <WbSunny className="theme-icon" /> // Sun icon for light mode
          ) : (
            <NightsStay className="theme-icon" /> // Moon icon for dark mode
          )}
        </div>
        
        <div>
          <Avatar className="Avatharr" img={Avathar} alt="Charan M" rounded />
        </div>
        
        <div>
          <h1 className="h1 font-semibold">CHARAN M</h1>
        </div>
        
      </div>
      <div className='pbb'>
      <div className='pb'><ProjectBox></ProjectBox>
      <CompletedProjectsBox></CompletedProjectsBox>
      <RunningProjectsBox></RunningProjectsBox>
      <div><XYZProjectTeamBox></XYZProjectTeamBox> <UpcomingMeetingEvent></UpcomingMeetingEvent></div>
      </div>
      <div className='ntr'><RevenueChart></RevenueChart>
     </div>
     <div className='mb'>
     <Transactions></Transactions>
     <div className='aa'><TeamPerformance ></TeamPerformance></div>
     
     </div>

      </div>
      
      
      
    </div>

    
  );
};

export default MainPage;