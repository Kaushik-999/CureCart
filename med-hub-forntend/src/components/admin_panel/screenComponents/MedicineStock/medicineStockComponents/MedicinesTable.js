import React from "react";
import { MedicineData } from "../temp-data/MedicinesData";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
 
function MedicinesTable() {
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "medicineNamae",
      text: "Name",
    },
    {
      dataField: "quantityInStock",
      text: "Quantity (In Stock)",
    },
    {
      dataField: "manufactureDate",
      text: "Manufacture Date",
    },
    {
      dataField: "expiryDate",
      text: "Expiry Date",
    },
  ];

  return (
    <div className="medicine-review-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Medicines
        </div>
        <BootstrapTable
          keyField="id"
          data={MedicineData}
          columns={columns}
          striped
          hover
          condensed
          bordered={false}
          pagination={paginationFactory({
            hideSizePerPage: true,
            showTotal: true,
            sizePerPage: 15,
            withFirstAndLast: false,
          })}
        />
      </div>
    </div>
  );
}

export default MedicinesTable;
