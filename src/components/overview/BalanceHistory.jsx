import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const BalanceHistory = () => {
  const chartData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance History",
        data: [100, 350, 250, 450, 420, 790, 210, 590, 220, 620, 600, 420, 450, 250, 550], 
        borderColor: "blue",
        backgroundColor: "rgba(93, 134, 211, 0.3)", 
        tension: 0.4, 
        fill: true, 
        pointRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: true, borderDash: [5, 5] },
        ticks: { color: "black" },
      },
      y: {
        grid: { display: true, borderDash: [5, 5] },
        ticks: {
          color: "black",
          stepSize: 200,
          suggestedMin: 0,
          suggestedMax: 800, 
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-1/2 bg-gray-100 p-6 float-right flex flex-col items-start">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Balance History</h2>

        <div className="w-[600px] h-[350px] bg-white p-5 rounded-[15px] shadow-md">
            <Line data={chartData} options={options} />
        </div>
    </div>  
  );
};

export default BalanceHistory;