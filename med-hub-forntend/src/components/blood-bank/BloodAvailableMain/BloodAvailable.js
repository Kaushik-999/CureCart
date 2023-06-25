import React from "react";
import "./BloodAvailable.css";
import BloodAvailableCharts from "../BloodAvailableCharts/BloodAvailableChartsMain/BloodAvailableCharts"
import BloodAvailableUnitsTable from "../BloodAvailableTable/BloodAvailableUnitsTableMain/BloodAvailableUnitsTable";

function BloodAvailable() {
  return (
    <> 
  
      <div className="blood-available-main">
        <h3>Blood Available Dashboard</h3>
        <BloodAvailableCharts/>
        <BloodAvailableUnitsTable/>
      </div>
    </>
  );
}

export default BloodAvailable;
