import React from "react";
import "./MedicineStock.css";
import HeaderCard from "./medicineStockComponents/HeaderCard";
import MedicineReviewTable from "./medicineStockComponents/MedicineReviewTable";
import MedicinesTable from "./medicineStockComponents/MedicinesTable";
import MedicineTypesChart from "./medicineStockComponents/MedicineTypesChart";

function MedicineStock() {
  return (
    <div className="main">
      {/* header */}
      <div className="fw-bold fs-3 mb-4 title">Medicine Stock</div>
      {/* header ends */}

      {/* header cards */}
      <div className="container-fluid">
        <div className="row">
          <HeaderCard cardHead="Total Medicine Type" cardText="154" />
          <HeaderCard cardHead="In Stock" cardText="100" />
          <HeaderCard cardHead="Out Of Stock" cardText="54" />
          <HeaderCard cardHead="Notofications" cardText="3" />
        </div>
      </div>
      {/* header cards ends  */}

      {/* Chart And Table  */}
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <MedicineTypesChart />
          </div>
          <div className="col-lg-6 col-md-12">
            <MedicineReviewTable />
          </div>
        </div>
      </div>
      {/* Chart And Table Ends */}

      {/* Medicine Chart */}
      <div className="container-fluid mt-3">
        <MedicinesTable />
      </div>   
      {/* Medicine Chart End */}
    </div>
  );
}

export default MedicineStock;
