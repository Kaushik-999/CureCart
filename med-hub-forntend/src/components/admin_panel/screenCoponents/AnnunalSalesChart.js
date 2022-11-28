import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { SalesData } from "../temp-data/SalesData";
import { Chart as ChartJS } from "chart.js/auto";
import "../css/SalesChart.css";

function AnnunalSalesChart() {
  
  const [salesData, setSalesData] = useState({
    labels: SalesData.map((data) => data.year),
    datasets: [
      {
        label: "Annual Sales",
        data: SalesData.map((data) => data.sales),
        fill: true,
        borderColor: "#497174",
        tension: 0.3,
        xAxisID: "Year",
        yAxisID: "Annual Sales in ₹",
        pointStyle: "circle",
        pointRadius: 5
      },
    ],
  });
 
  return (
    <div className="sales-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Annual Earning Overvew
        </div>
        <div className="card-body">
          <Line data={salesData} />
        </div>
      </div>
    </div>
  );
}

export default AnnunalSalesChart;
