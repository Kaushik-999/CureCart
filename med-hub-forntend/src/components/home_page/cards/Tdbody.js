import React from "react";
import { useDispatch } from "react-redux";

// import { useState } from "react";
import { deleteItem } from "../../actions";


function Tdbody(props) {

  const val = {
    id : props.id,
    title : props.title,
    link : props.link,
    quantity : props.quantity,
    price : props.price
  }
  // const [myState, setmyState] = useState(props.quantity);
  


 const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td className="p-5">
          <button
          onClick={()=>dispatch(deleteItem(val))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            
          </button>
        </td>
        <td>
          <div className="w-28 p-2">
            <img src={props.link} alt="" />
          </div>
        </td>
        <td className="p-3">
          <div className="text-slate-600 text-base">{props.title}</div>
        </td>
        <td className="p-5">
          <div className="text-xl font-medium text-teal-500">{props.price}</div>
        </td>
        <td className="p-4">
          <div className="text-xl font-medium text-teal-500">
            {/* <button
              className="inline pt-0 pb-0 pl-3 text-2xl text-slate-700 "
              onClick={() => (myState > 0 ? setmyState(myState - 1) : 0)}
            >
              -
            </button> */}
            {/* <span className=" pl-4 pr-4 pt-1 pb-1 text-slate-700 text-lg"> */}
            {props.quantity}
              
            {/* </span> */}
            {/* <button
              className="inline pt-0 pb-0 pr-3 text-2xl text-slate-700 "
              onClick={() => setmyState(myState + 1)}
            >
              +
            </button> */}
          </div>
        </td>
        <td className="p-5">
          <div className="text-xl font-medium text-teal-500">{props.quantity*props.price}</div>
        </td>
      </tr>
    </>
  );
}

export default Tdbody;
