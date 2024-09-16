import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './revenueChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'], // X-axis labels
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1500, 800, 1900, 1400, 1300, 1700, 1500], // Revenue data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Default bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Default bar border color
        borderWidth: 1, // Bar border width
        hoverBackgroundColor: 'rgba(0, 123, 255, 0.6)', // Bar color on hover
        hoverBorderColor: 'rgba(0, 123, 255, 1)', // Border color on hover
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
            return `$${context.raw}`;
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
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Revenue Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
