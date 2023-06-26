import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios"
function BloodAvailableBloodTypeChart() {
  const [bloodData, setBloodData] = useState(null);
  // eslint-disable-next-line
  const [UnitsData, setUnitsData] = useState({
    labels: [],
    datasets: [
      {
        label: "Blood Type Distribution",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        hoverOffset: 5,
        hoverBorderRadius: 3,
        weight: 3,
      },
    ],
  });
  useEffect(() => {
    const getBloodData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/blood-bank/get-blood-details/"
        );
        setBloodData(response.data.bloodlist);
      } catch (error) {
        console.log(error);
      }
    };
    getBloodData();
  }, []);

  useEffect(() => {
    const bloodTypeLabel = bloodData && bloodData.map((data) => data.bloodType);
    const bloodUnitsAvailable =
      bloodData && bloodData.map((data) => data.unitsAvailable);

    setUnitsData((prevState) => ({
      ...prevState,
      labels: bloodTypeLabel || [],
      datasets: [
        {
          ...prevState.datasets[0],
          data: bloodUnitsAvailable || [],
        },
      ],
    }));
  }, [bloodData]);


  return (
    <div style={{ width: "100%", height: "330px" }}>
    <Doughnut
      data={UnitsData}
      options={{
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  </div>
  );
}

export default BloodAvailableBloodTypeChart;
