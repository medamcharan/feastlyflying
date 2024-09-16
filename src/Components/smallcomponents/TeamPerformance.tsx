import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './teamPerformance.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TeamPerformance: React.FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'], // X-axis labels
    datasets: [
      {
        label: 'Performance',
        data: [655, 595, 550, 815], // Performance data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
        borderWidth: 1, // Bar border width
        barThickness: 40, // Increase bar height
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        min: 0, // Minimum value of y-axis
        max: 1000, // Maximum value of y-axis
        ticks: {
          stepSize: 100, // Step size for y-axis ticks
        },
      },
    },
  };

  return (
    <div
      className={`chart-containerr ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <h2 className="chart-title">Team Performance</h2>
      <Bar data={data} options={options} />
      <p className="performance-brief">
        The Team Performance chart provides an overview of the team's performance over the last four months. 
        The data shows a positive trend with increasing performance metrics each month. The team is 
        performing well and achieving higher targets consistently. Further analysis may be required 
        to understand the factors contributing to these performance improvements.
      </p>
    </div>
  );
};

export default TeamPerformance;
