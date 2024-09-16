import React, { useState } from 'react';
import { IconButton, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const items = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Projects', icon: <FolderIcon /> },
    { text: 'Transaction', icon: <AccountBalanceWalletIcon /> },
    { text: 'My Team', icon: <GroupIcon /> },
    { text: 'Research Data', icon: <DataUsageIcon /> },
    { text: 'Reports', icon: <ReportIcon /> },
  ];

  const handleClick = (text: string) => {
    setSelected(text);
  };

  return (
    <div className="dashboard flex flex-col h-full">
      <div className="flex-grow flex flex-col p-2">
        {items.map((item, index) => (
          <div
            key={item.text}
            className={`dashboard-item ${
              selected === item.text ? 'selected-item' : 'unselected-item'
            } ${index < items.length - 1 ? 'item-margin' : ''}`}
            onClick={() => handleClick(item.text)}
          >
            <IconButton
              className={`p-2 rounded-full ${
                selected === item.text ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
              }`}
            >
              {item.icon}
            </IconButton>
            <span>{item.text}</span>
          </div>
        ))}
        <Divider className="divider-margin" />
        <div className="dashboard-item unselected-item">
          <IconButton className="p-2 rounded-full hover:bg-blue-200">
            <SettingsIcon />
          </IconButton>
          <span>Settings</span>
        </div>
        <div className="dashboard-item unselected-item">
          <IconButton className="p-2 rounded-full hover:bg-blue-200">
            <HelpIcon />
          </IconButton>
          <span>Help</span>
        </div>
      </div>
      <div className="dashboard-item unselected-item logout">
        <IconButton className="p-2 rounded-full hover:bg-blue-200">
          <LogoutIcon />
        </IconButton>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Dashboard;
