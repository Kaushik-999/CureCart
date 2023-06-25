import React from "react";
import BloodAvailableTable from "../BloodAvailableTable/BloodAvailableTable";
import "./BloodAvailableUnitsTable.css";
function BloodAvailableUnitsTable() {
  return (
    <div className="blood-available-units-table-main">
      <div className="blood-available-units-table-container">
        <div className="units-table-card">
          <div className="units-table-head">Recent units</div>
          <div className="units-table-body">
            <BloodAvailableTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodAvailableUnitsTable;
