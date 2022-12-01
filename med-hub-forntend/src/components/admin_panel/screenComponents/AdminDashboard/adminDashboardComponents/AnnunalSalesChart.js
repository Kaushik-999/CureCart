import React, { useState } from "react";
import { SalesData } from "../temp-data/SalesData";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function AnnunalSalesChart() {
  // eslint-disable-next-line
  const [salesData, setSalesData] = useState({
    labels: SalesData.map((data) => data.year),
    datasets: [
      {
        label: "Annual Sales",
        data: SalesData.map((data) => data.sales),
        fill: true,
        borderColor: "#497174",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: 5
      }
    ]
  });
 
  return (
    <div className="sales-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Annual Earning Overvew
        </div>
        <div className="card-body">
          <Line data={salesData} options={{maintainAspectRatio: false, responsive: true}}/>
        </div>
      </div>
    </div>
  );
}

export default AnnunalSalesChart;
