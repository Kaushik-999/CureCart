import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { AvailableBloodTypesData } from "../temp-data/AvailableBloodTypesData";

function AvailableBloodTypeChart() {
  // eslint-disable-next-line
  const [availableBloodTypeData, setAvailableBloodTypeData] = useState({
    labels: AvailableBloodTypesData.map((data) => data.boodType),
    datasets: [
      {
        label: "Available Blood Types",
        data: AvailableBloodTypesData.map((data) => data.units),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)"
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="available-blood-types-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Available Blood Types
        </div>
        <div className="card-body">
          <Bar
            data={availableBloodTypeData}
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
      </div>
    </div>
  );
}

export default AvailableBloodTypeChart;
