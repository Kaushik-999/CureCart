import React from "react";
import "./MedicalSales.css";
import HeaderCard from "./medicalSalesComponents/HeaderCard";
import MonthlySalesChart from "./medicalSalesComponents/MonthlySalesChart";
import MonthlyUsersChart from "./medicalSalesComponents/MonthlyUsersChart";
import SalesTable from "./medicalSalesComponents/SalesTable";

function MedicalSales() {
  return (
    <div className="main">
      {/* header */}
      <div className="fw-bold fs-3 mb-4  title">Medical Sales</div>
      {/* header ends */}

      {/* header-card */}
      <div className="container-fluid ms-1">
        <div className="row">
          <HeaderCard cardHead="Today (till now)" cardText="₹5000" />
          <HeaderCard cardHead="Yesterday" cardText="₹10000" />
          <HeaderCard cardHead="Last Month" cardText="₹500000" />
          <HeaderCard cardHead="Notifications" cardText="5" />
        </div>
      </div>
      {/* header-card ends */}

      {/* Sales Chart */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <MonthlySalesChart />
          </div>
          <div className="col-lg-5 col-md-12">
            <MonthlyUsersChart/>
          </div>
        </div>
      </div>
      {/* Sales Chart Ends */}

      {/* Sales-table */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <SalesTable />
          </div>
        </div>
      </div>
      {/* Sales-table-ends */}
    </div>
  );
}

export default MedicalSales;
