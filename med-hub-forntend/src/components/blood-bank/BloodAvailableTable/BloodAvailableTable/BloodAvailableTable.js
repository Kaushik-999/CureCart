import React from 'react';
import "./BloodAvailableTable.css";
import {BloodAvailableTableTempData} from "./BloodAvailableTableTempData";

function BloodAvailableTable() {
  return (
    <div className='blood-available-table-container'>
    <table className="bloods-available-table">
      <tbody>
        <tr>
          <th>Donor Name</th>
          <th>Blood Type</th>
          <th>Date</th>
          <th>Location</th>
          <th>Contact No.</th>
        </tr>
        {BloodAvailableTableTempData.map((data, key) => (
          <tr className='bb-hover-row' key={key}>
            <td>{data.donorName}</td>
            <td>{data.bloodType}</td>
            <td>{data.date}</td>
            <td>{data.location}</td>
            <td>{data.contact}</td>
            <td>{<i className="fa-solid fa-arrow-right hover"></i>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
    
  )
}
 
export default BloodAvailableTable