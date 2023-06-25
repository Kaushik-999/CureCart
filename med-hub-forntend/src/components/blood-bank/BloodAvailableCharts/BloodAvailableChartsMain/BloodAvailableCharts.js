import React from "react";
import BloodAvailableUnitsChart from "../BloodAvailableUnitsChart/BloodAvailableUnitsChart";
import BloodAvailableBloodTypeChart from "../BloodAvailableBloodTypeChart/BloodAvailableBloodTypeChart";
import "./BloodAvailableCharts.css";

function BloodAvailableCharts() { 
  return (
    <div className="blood-available-charts-main">
      <div className="blood-available-chart-container">
        <div className=" bb-chart-card">
          <div className="bb-chart-card-head">Blood Donation Distribution</div>
          <div className="bb-chart-card-body">
            <BloodAvailableUnitsChart />
          </div>
        </div>

           {/* Blood type distribution chart */}
        <div className="bb-chart-card">
          <div className="bb-chart-card-head">Blood Type Distribution</div>
          <div className="bb-chart-card-body">
            <BloodAvailableBloodTypeChart/>
          </div>
        </div>
          {/* Blood type distribution chart ends */}
      </div>
    </div>
  );
}

export default BloodAvailableCharts;
