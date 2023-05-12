import React from 'react'
import "./VendorAccountTable.css"
import {VendorAccountTableTempData} from "./VendorAccountTableTempData"

function VendorAccountTable() {
  return (
    <div className='vendor-account-table-container'>
      <table className="vendors-account-table">
        <tr>
          <th>Order Id</th>
          <th>Date</th>
          <th>Product</th>
          <th>Payment Status</th>
          <th>Total Amount</th>
          <th>View Invoice</th>
        </tr>
        {VendorAccountTableTempData.map((data,key)=>(
          <tr className='hover-row' key={key}>
            <td>{data.id}</td>
            <td>{data.date}</td>
            <td>{data.product}</td>
            <td>{data.paymentStatus}</td>
            <td>{data.totalAmount}</td>
            <td>{<i className="fa-solid fa-arrow-right hover"></i>}</td>
          </tr>
        ))}

      </table>
    </div>
  )
}
 
export default VendorAccountTable