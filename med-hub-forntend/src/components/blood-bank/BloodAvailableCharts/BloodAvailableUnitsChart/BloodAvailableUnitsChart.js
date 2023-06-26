import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
function BloodAvailableUnitsChart() {
  const [bloodData, setBloodData] = useState(null);
  // eslint-disable-next-line
  const [UnitsData, setUnitsData] = useState({
    labels: [],
    datasets: [
      {
        label: "Donation Distribution",
        data: [],
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
      <Bar
        data={UnitsData}
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

export default BloodAvailableUnitsChart;
