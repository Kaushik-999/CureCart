import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import {UnitsTempData } from "./UnitsTempData";

function BloodAvailableUnitsChart() {
  const labels = UnitsTempData.map((data) => data.bloodType);
  const data = UnitsTempData.map((data) => data.donationCount);

  // eslint-disable-next-line
  const [UnitsData, setUnitsData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Donation Distribution",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
         
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div style={{ width: '100%', height: '330px' }}>
      <Bar
        data={UnitsData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BloodAvailableUnitsChart;
