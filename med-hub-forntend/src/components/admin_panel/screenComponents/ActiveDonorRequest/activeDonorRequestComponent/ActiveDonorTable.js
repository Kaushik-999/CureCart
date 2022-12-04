import React from "react";
import { ActiveDonorData } from "../temp-data/ActiveDonorData";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function ActiveDonorTable() {
  const activeDonorData = ActiveDonorData.map((data, index) => {
    return {
      id: index + 1,
      name: data.name,
      bloodGroup: data.bloodGroup,
      place: data.place,
      phone: data.phone,
    };
  });

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Donor Name",
    },
    {
      dataField: "bloodGroup",
      text: "Blood Group",
    },
    {
      dataField: "place",
      text: "Address",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
  ];

  return (
    <div className="medicine-review-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Active Donors
        </div>
        <BootstrapTable
          keyField="id"
          data={activeDonorData}
          columns={columns}
          striped
          hover
          condensed
          bordered={false}
          pagination={paginationFactory({
            hideSizePerPage: true,
            showTotal: true,
            sizePerPage: 8,
          })}
        />
      </div>
    </div>
  );
}

export default ActiveDonorTable;
