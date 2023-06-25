import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function BloodAvailableBloodTypeChart() {
  // eslint-disable-next-line
  const [bloodTypeData, setBloodTypeData] = useState({
    labels: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
    datasets: [
      {
        label: "Blood Type Distribution",
        data: [25, 15, 35, 10, 20, 10, 30, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        hoverOffset: 5,
        hoverBorderRadius: 3,
        weight: 3,
      },
    ],
  });
  return (
    <div style={{ width: "100%", height: "330px" }}>
    <Doughnut
      data={bloodTypeData}
      options={{
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  </div>
  );
}

export default BloodAvailableBloodTypeChart;
