import React from "react";
import { MembersData } from "../temp-data/MembersData";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function MemebersTable() {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "bloodType",
      text: "Blood Type",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Phone",
    },
  ];

  return (
    <div className="members-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Members
        </div>
        <BootstrapTable
          keyField="id"
          data={MembersData}
          columns={columns}
          striped
          hover
          condensed
          bordered={false}
          pagination={paginationFactory({
            hideSizePerPage: true,
            showTotal: true,
            sizePerPage: 8
          })}
        />
      </div>
    </div>
  );
}

export default MemebersTable;
