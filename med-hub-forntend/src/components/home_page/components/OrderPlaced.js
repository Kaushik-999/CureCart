import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { resetStore } from "../../actions";
import axios from "axios";

function OrderPlaced() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetStore());
    
  }, // eslint-disable-next-line
  []);

  const [list, setList] = useState(null);

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

 
  return (
    <>
     {
      loading ? (<div className="vendor-invoices-loading-message">Loading...</div>)
    :(
      <div className="mt-2">
        <div className="text-green-500 text-9xl flex justify-center mt-5">
          <BsFillPatchCheckFill />
        </div>
        <div className="flex justify-center">
          <p className="text-green-500 text-4xl font-semibold">
            Your Order has been placed
          </p>
        </div>

        <div className="mx-5 py-8">
          <h2 className="text-2xl font-semibold mb-4">Ordered Items</h2>
          {list && list.map((item) => (
            <div
              key={item.id}
              className="flex border mb-4 rounded-md p-4 shadow-sm"
            >
              <img
                src={item.link}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">Price: ₹{item.price}</p>
                <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Total: ₹{item.price*item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-2 ml-5">
          <Link to="/invoice">
          <button className="bg-white text-sky-600 px-6 py-2 shadow-sm ">Download Invoice</button>
          </Link>
           
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <button className="font-semibold text-lg bg-emerald-500 px-5 py-2 text-white mt-5">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    )
          }
    </>
  );
}

export default OrderPlaced;
