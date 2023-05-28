import React, { useState, useEffect } from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorInvoices.css";
import axios from "axios";

function VendorInvoices() {
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllInvoices = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const header = {
          token: token,
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/pharmacy-vendor/get-all-invoices/",
          {
            headers: header,
          }
        );

        setInvoices(response.data.invoices);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllInvoices();
  }, []);

  const handleInvoiceClick = (invoice) => {
    console.log(invoice);
  };

  return (
    <>
      <SideBar />
      {loading ? (
        <div className="vendor-invoices-loading-message">Loading...</div>
      ) : (
        <div className="vendor-invoices-main">
          <div className="vendor-invoice-container">
            <h2>Customer Invoices</h2>
            <div className="vendor-invoice-table-content">
              <ul className="vendor-invoice-table">
                <li className="vendor-invoice-table-header">
                  <div className="column-1">ID</div>
                  <div className="column-2">Date</div>
                  <div className="column-3">Product</div>
                  <div className="column-4">Payment</div>
                  <div className="column-5">Delivery</div>
                  <div className="column-6">Amount</div>
                  <div className="column-7">Invoice</div>
                </li>
                {invoices &&
                  invoices.map((invoice, index) => (
                    <li className="vendor-invoice-table-row" key={invoice.id}>
                      <div className="column-1">{index + 1}</div>
                      <div className="column-2">{invoice.date}</div>
                      <div className="column-3">{invoice.product}</div>
                      <div className="column-4">{invoice.payement}</div>
                      <div className="column-5">{invoice.delivery}</div>
                      <div className="column-6">{invoice.amount}</div>
                      <div className="column-7">
                        <i
                          className="fa-solid fa-arrow-right hover"
                          onClick={() => handleInvoiceClick(invoice)}
                        ></i>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VendorInvoices;
