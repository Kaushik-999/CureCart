import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
// import { MonthlySalesTempData } from "./MonthlySalesTempData";

function VedorAccountMonthlySalesChart(props) {
  // console.log(props.last_five_months_sales[0]);
  const labels = props.last_five_months_sales.map(month => Object.keys(month)[0]).reverse();
  const data = props.last_five_months_sales.map(amount => Object.values(amount)[0]).reverse();
  
  // eslint-disable-next-line
  const [salesData, setSalesData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Monthly Sales(in ₹)",
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
  );
}

export default VedorAccountMonthlySalesChart;
