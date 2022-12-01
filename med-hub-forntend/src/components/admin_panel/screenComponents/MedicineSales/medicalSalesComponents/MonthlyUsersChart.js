import React, {useState} from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import {MonthlyUsersData} from "../temp-data/MonthlyUsersData"

function MonthlyUsersChart() {
  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: MonthlyUsersData.map((data)=>data.month),
    datasets: [
      {
        label: "Monthly Users",
        data: MonthlyUsersData.map((data) => data.users),
        fill: true,
        borderColor: "#497174",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: 5
      }
    ]
  })

  return (
    <div className="sales-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Monthly User
        </div>
        <div className="card-body">
          <Line
            data={userData}
            options={{ maintainAspectRatio: false, responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyUsersChart;
