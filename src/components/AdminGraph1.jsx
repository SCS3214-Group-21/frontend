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

function AdminGraph1() {
    // Dummy data for subscription income
    const annualData = [15000, 23000, 35000, 40000, 45000, 50000, 55000, 60000, 62000, 67000, 72000, 78000];
    const weeklyData = [15000, 17000, 20000, 22000, 21000, 23000, 24000, 25000, 26000, 27000, 28000, 29000];
    const dailyData = [5000, 5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 7200, 7400, 7600, 7800, 8000, 8200, 8400, 8600, 8800, 9000, 9200, 9400, 9600, 9800, 10000, 10200, 10400, 10600, 10800];

    const [graphData, setGraphData] = useState({
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'Subscription Income',
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
                    labels: Array.from({ length: dailyData.length }, (_, i) => `Day ${i + 1}`),
                    datasets: [
                        {
                            label: 'Subscription Income',
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
                    labels: Array.from({ length: weeklyData.length }, (_, i) => `Week ${i + 1}`),
                    datasets: [
                        {
                            label: 'Subscription Income',
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
                            label: 'Subscription Income',
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
                        return ` ${tooltipItem.raw} USD`;
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
                    <h2 className="text-2xl font-bold">Subscription Income 2024</h2>
                    <h2 className="text-2xl font-bold text-custom-secondary">240,000LKR</h2>
                    <p className="text-sm text-green-500">+1.3% VS LAST YEAR</p>
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

export default AdminGraph1;
