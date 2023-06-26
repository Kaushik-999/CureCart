import React from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';

const InvoicePage = () => {

  const [list, setList] = useState(null);
  const [address,setAddress] = useState(null);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOrderedList = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const header = {
          token: token,
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/homepage/getOrders/",
          {
            headers: header,
          }
        );
        // console.log(response.data.orders)
        setList(response.data.orders[response.data.orders.length-1].list);
        setAddress(response.data.orders[response.data.orders.length-1].address);

        // console.log(list1);
        // console.log(date);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      
    };
    getOrderedList();
    
  }, []);

  const total = (list) =>{
    let sum = 0;
    for (var key in list) {
     if (list.hasOwnProperty(key)) {
        sum += list[key].price * list[key].quantity;
     }
  }
    return sum;
   }











  
  const componentRef = useRef();

  const handlePrint =  
    useReactToPrint({
      content: () => componentRef.current,
    });
  

  return (
    <>
    {
      loading ? (<div className="vendor-invoices-loading-message">Loading...</div>)
    :(
    <div className="container mx-auto py-8">
      <div className="flex justify-between mb-4 mx-2 md:mx-10">
        <h1 className="text-2xl font-bold">CureCart Invoice</h1>

        <ReactToPrint
        trigger={() => <button
          onClick={handlePrint}
          className="bg-white text-sky-600 px-6 py-2 my-4 shadow-md round-sm font-bold"
        >
          
          Print
        </button>}
        content={() => componentRef.current}
      />
        
      </div>

      <div id="invoice-content" ref={componentRef} className='mx-2 md:mx-10'>
        <div className="mb-4 mt-10">
          <h2 className="text-lg font-bold mb-2">Invoice Details</h2>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">Invoice ID: {'INV-001'}</p>
              <p>Date: {list && list[0].date}</p>
            </div>
            <div>
              <p className="font-bold">{address && address.firstName} {address && address.lastName}</p>
              <p>{address && address.email}</p>
              <p>{address && address.address}</p>
              <p>{address && address.zip}</p>
              <p>{address && address.country}</p>
              <p>{address && address.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className=''>
          <h2 className="text-lg font-bold mb-2">Invoice Items</h2>
          <table className="w-full md:w-3/5 border-2">
            <thead className='border-2'>
              <tr>
                <th className="py-2 md:px-5">Item</th>
                <th className="py-2 md:px-5">Quantity</th>
                <th className="py-2 md:px-5">Price</th>
                <th className="py-2 md:px-5">Total</th>
              </tr>
            </thead>
            <tbody className=''>
              {list && list.map((item) => (
                <tr key={item.id} className=''>
                  <td className="py-2 ">{item.title}</td>
                  <td className="py-2 ">{item.quantity}</td>
                  <td className="py-2 ">₹{item.price}</td>
                  <td className="py-2 ">₹{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="md:text-left text-right font-bold mt-4 ">Total: ₹{total(list)}</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="font-semibold text-lg bg-emerald-500 px-5 py-2 text-white mt-5">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
    </div>)}

    </>
    
  );
};

export default InvoicePage;