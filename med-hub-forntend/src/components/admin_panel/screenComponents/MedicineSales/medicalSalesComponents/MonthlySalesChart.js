import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { MonthlySalesData } from "../temp-data/MonthlySalesData";

function MonthlySalesChart() {
    // eslint-disable-next-line
  const [salesData, setSalesData] = useState({
    labels: MonthlySalesData.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Sales(in ₹)",
        data: MonthlySalesData.map((data) => data.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="sales-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Monthly Medicine Sales
        </div>
        <div className="card-body">
          <Bar
            data={salesData}
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

export default MonthlySalesChart;
