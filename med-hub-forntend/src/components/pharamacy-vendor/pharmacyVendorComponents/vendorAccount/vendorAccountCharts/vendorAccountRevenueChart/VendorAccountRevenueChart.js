import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function VendorAccountRevenueChart() {
  // eslint-disable-next-line
  const [revenueBreakdownData, setRevenueBreakdownData] = useState({
    labels: ["Cost Price", "Profit", "Tax"],
    datasets: [
      {
        label: "Amount(in ₹)",
        data: [300000, 50000, 10000],
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
    <div style={{ width: "100%", height: "330px" }}>
      <Doughnut
        data={revenueBreakdownData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
}

export default VendorAccountRevenueChart;
