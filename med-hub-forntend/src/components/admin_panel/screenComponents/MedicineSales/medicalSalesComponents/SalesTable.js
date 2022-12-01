import React from "react";
import { SalesData } from "../temp-data/SalesData";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function SalesTable() {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "userName",
      text: "Name",
      sort: true,
    },
    {
      dataField: "medicineUnits",
      text: "Medicine(units)",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Amount(in ₹)",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Phone",
    },
  ];

  return (
    <div className="sales-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Medicine Sales
        </div>
        {/* <div className="container-fluid "> */}
          <BootstrapTable
            keyField="id"
            data={SalesData}
            columns={columns}
            striped
            hover
            condensed
            bordered={false}
            pagination={paginationFactory()}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default SalesTable;
