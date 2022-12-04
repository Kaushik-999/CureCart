import React, { useState } from "react";
// eslint-disable-next-line
import { Chart as ChartJS, plugins } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { MedicineTypesData } from "../temp-data/MedicineTypesData";

function MedicineTypesChart() {
  // eslint-disable-next-line
  const [medicineTypesData, setMedicineTypesData] = useState({
    labels: MedicineTypesData.map((data) => data.medicineType),
    datasets: [
      {
        label: "Medicine Types",
        data: MedicineTypesData.map((data) => data.units),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div className="medicine-types-chart">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Medicine Types
        </div>
        <div
          className="card-body ms-auto me-auto"
          
        >
          <Pie
            data={medicineTypesData}
          />
        </div>
      </div>
    </div>
  );
}

export default MedicineTypesChart;
