import React from "react";
import { AdminData } from "../temp-data/AdminData";
function AdminTable() {
  return (
    <div className="admin-table">
      <div className="card m-2 shadow">
        <div className="card-header text-uppercase fw-bold text-primary">
          Admins
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {AdminData.map((data, index) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTable;
