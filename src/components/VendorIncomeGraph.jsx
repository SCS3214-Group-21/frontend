import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function VendorIncomeGraph() {
  const annualData = [1200, 1900, 3000, 5000, 2000, 3000, 2500, 3348, 2800, 3200, 4100, 4200];
  const weeklyData = [300, 500, 400, 700, 600, 800, 700];
  const dailyData = [40, 50, 60, 70, 80, 90, 100];

  const [graphData, setGraphData] = useState({
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'Sales',
        data: annualData,
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const [timeframe, setTimeframe] = useState('Annually');

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    switch (newTimeframe) {
      case 'Daily':
        setGraphData({
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              label: 'Sales',
              data: dailyData,
              borderColor: '#FFC107',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        });
        break;
      case 'Weekly':
        setGraphData({
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Sales',
              data: weeklyData,
              borderColor: '#FFC107',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        });
        break;
      case 'Annually':
        setGraphData({
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              label: 'Sales',
              data: annualData,
              borderColor: '#FFC107',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        });
        break;
      default:
        break;
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return ` ${tooltipItem.raw} sales $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
      datalabels: {
        display: true,
        align: 'top',
        color: '#000',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#000',
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#000',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">$12.7k</h2>
          <p className="text-green-500 text-sm">+1.3% VS LAST YEAR</p>
        </div>
        <div className="flex space-x-2">
          {["Daily", "Weekly", "Annually"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-full ${
                timeframe === item
                  ? "bg-custom-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-custom-secondary hover:text-white transition-colors duration-200`}
              onClick={() => handleTimeframeChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-72">
        <Line data={graphData} options={options} />
      </div>
    </div>
  );
};

export default VendorIncomeGraph;
