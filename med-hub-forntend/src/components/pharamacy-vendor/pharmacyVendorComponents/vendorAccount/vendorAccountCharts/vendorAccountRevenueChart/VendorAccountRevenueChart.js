import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function VendorAccountRevenueChart(props) {
  const labels = props.categories.map(label => label.category);
  const amount = props.categories.map(amount => amount.occurrences);
  // eslint-disable-next-line
  const [revenueBreakdownData, setRevenueBreakdownData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Amount(in ₹)",
        data: amount,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
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
