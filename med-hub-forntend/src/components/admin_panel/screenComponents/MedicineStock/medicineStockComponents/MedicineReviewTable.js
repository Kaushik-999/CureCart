import React from "react";
import { MedicineReviewData } from "../temp-data/MedicineReviewData";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Rating } from "react-simple-star-rating";

function MedicineReviewTable() {
  const data = MedicineReviewData.map((data) => {
    return {
      id: data.id,
      user: data.user,
      medicine: data.medicine,
      ratings: <Rating initialValue={data.ratings} size={20} readonly={true}/>,
    };
  });
  //   console.log(data);

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "user",
      text: "Name",
    },
    {
      dataField: "medicine",
      text: "Medicine",
    },
    {
      dataField: "ratings",
      text: "Ratings",
    },
  ];
  return (
    <div className="medicine-review-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Medicine Sales
        </div>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          bordered={false}
          pagination={paginationFactory({
            hideSizePerPage: true,
            showTotal: true,
            sizePerPage:5,
            withFirstAndLast:false
          })}
        />
      </div>
    </div>
  );
}

export default MedicineReviewTable;
