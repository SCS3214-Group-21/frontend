import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register components_depr
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

function AdminGraph2() {
    // Dummy data for the number of weddings
    const annualData = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
    const weeklyData = [5, 8, 6, 9, 7, 8, 10];
    const dailyData = [1, 2, 1, 3, 2, 2, 1];

    const [graphData, setGraphData] = useState({
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'Weddings',
                data: annualData,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
                            label: 'Weddings',
                            data: dailyData,
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
                            label: 'Weddings',
                            data: weeklyData,
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
                            label: 'Weddings',
                            data: annualData,
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
                        return ` ${tooltipItem.raw} weddings`;
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
        <div className="w-full h-full p-4 bg-white shadow-md rounded-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold">Weddings 2024</h2>
                    <h2 className="text-2xl font-bold text-custom-secondary">Total Weddings: {annualData.reduce((a, b) => a + b, 0)}</h2>
                    <p className="text-sm text-green-500">+15% increase from 2023</p>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {["Daily", "Weekly", "Annually"].map((item) => (
                        <button
                            key={item}
                            className={`px-4 py-2 rounded-full ${timeframe === item
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
}

export default AdminGraph2;
