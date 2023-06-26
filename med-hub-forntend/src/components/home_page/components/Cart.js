import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Tdbody from "../cards/Tdbody";
import { Link } from "react-router-dom";


function Cart() {
  
  const list = useSelector((state) => state.cartReducer.list);
  const len = list.length;

  const total = (list) =>{
   let sum = 0;
   for (var key in list) {
    if (list.hasOwnProperty(key)) {
       sum += list[key].price * list[key].quantity;
    }
 }
   return sum;
  }
  // console.log(total(list));
  
  
  // console.log(list);

  return (
    <>
      <div className="ml-16 mr-16 mt-2 mb-10">
        <div className="text-neutral-400 text-sm">Home/Cart</div>
        <div className="flex mt-10">
          <div>
            <table className="border-2 ">
              <thead className="border-2 w-10">
                <tr className="">
                  <th className=" border-2 w-10"></th>
                  <th className=" border-2 w-28"></th>
                  <th className="font-semibold border-2 w-96">Product</th>
                  <th className="font-semibold w-24 border-2">Price</th>
                  <th className="font-semibold w-24 border-2">Quantity</th>
                  <th className="font-semibold w-24 border-2">Subtotal</th>
                </tr>
              </thead>
              {
                len===0 && (
                  <tbody className="">
                    <tr>
                      <td className="" colSpan="5">
                      <div className="text-slate-600 flex justify-center" > <div className="my-5">Your Cart is Empty</div>
                      </div>

                      </td>
                    </tr>
                    
                  </tbody>
                )
              }

              <tbody>
                {list.map((val, index) => (
                  <Tdbody
                    link={val.link}
                    title={val.title}
                    price={val.price}
                    quantity={val.quantity}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {len !== 0 && (
            <div className="ml-10 w-96">
              <div className="bg-slate-300 p-5">
                <div className="ml-3 mt-5 text-xl font-medium">CART TOTALS</div>
                <div className="flex justify-between mt-5">
                  <div className="text-black text-base ml-3">Subtotal</div>
                  <div className="text-black font-semibold">₹{total(list)}</div>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="text-black text-base ml-3">Total</div>
                  <div className="text-black font-semibold">₹{total(list)}</div>
                </div>
                <Link to="/checkout">
                  <button
                    to="/checkout"
                    className="mt-28 pt-3 pb-3 bg-black text-white pl-2 pr-auto w-full"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}



export default Cart;
