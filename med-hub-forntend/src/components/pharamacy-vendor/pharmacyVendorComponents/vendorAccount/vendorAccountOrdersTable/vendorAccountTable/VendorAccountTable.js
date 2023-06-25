import React from 'react';
import './VendorAccountTable.css';

function VendorAccountTable(props) {
  console.log(props.invoices);
  return (
    <div className='vendor-account-table-container'>
      <table className='vendors-account-table'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Product</th>
            <th>Payment Status</th>
            <th>Delivery Status</th>
            <th>Total Amount</th>
            {/* <th>View Invoice</th> */}
          </tr>
        </thead>
        <tbody>
          {props.invoices.slice(0, 10).map((data, key) => (
            <tr className='hover-row' key={key}>
              <td>{key+1}</td>
              <td>{data.date}</td>
              <td>{data.product}</td>
              <td>{data.payement}</td>
              <td>{data.delivery}</td>
              <td>₹ {data.amount}</td>
              {/* <td>
                <i className='fa-solid fa-arrow-right hover'></i>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorAccountTable;
