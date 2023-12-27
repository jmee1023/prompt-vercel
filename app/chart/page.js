"use client"
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

function ChartComponent() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const sampleData = [
      { name: 'January', value: 15 },
      { name: 'February', value: 25 },
      { name: 'March', value: 30 },
      { name: 'April', value: 10 },
      { name: 'May', value: 20 },
    ];

    const formattedData = {
      labels: sampleData.map(item => item.name),
      datasets: [
        {
          label: 'Monthly Sales',
          data: sampleData.map(item => item.value),
          backgroundColor: 'rgba(255, 99, 10, 0.2)', // Adjust for dark theme
          borderColor: 'rgba(255, 99, 132, 1)', // Adjust for dark theme
          borderWidth: 1,
        },
      ],
    };
    setChartData(formattedData);
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legend for clean look
      },
      title: {
        display: true, // Ensure title display is true
        text: 'Sales', // Add chart title
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div>
    <h1 className="text-3xl font-bold flex items-center justify-center">Sales</h1>

    <div className="w-full h-96 flex items-center justify-center py-4">
      <div className="flex items-center justify-center py-4"> {/* Center and add padding */}
       
      </div>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    </div>
  );

}

export default ChartComponent;