import React, { useState } from "react";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function RevenueChart() {
  // eslint-disable-next-line
  const [revenueData, setRevenueData] = useState({
    labels: ["Sales", "Social", "Referral"],
    datasets: [
      {
        label: "Revenue Source",
        data: [200000, 400000, 600000],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 5,
        hoverBorderRadius: 3,
        weight: 3,
      },
    ],
  });

  return (
    <div className="revenue-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Revenue
        </div>
        <div
          className="card-body ms-auto me-auto"
          style={{ paddingBottom: "30px", paddingTop: "30px" }}
        >
          <Doughnut data={revenueData} />
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;
