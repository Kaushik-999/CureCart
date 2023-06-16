import {React} from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  
  // console.log(props);
  
  return (
    <div className="relative bg-white rounded w-64 p-2 mx-4 snap-start scroll-m-2">
      
        <img
          className="w-48 mx-auto "
          src={
           props.link
          }
          alt=""
        />
      

      <div className="px-4 py-2 bottom-0 left-0 right-0 bg-white ">
        <div className="font-medium text-base mb-2 text-gray-800 ">
        <Link to={{pathname : `/productpage/${props.id}`,search : "?v=product"}}>
          
          {props.title}
          
          </Link>
        
        </div>
        <div className="flex">
          <div className="text-lg font-medium text-pink-700">₹{props.price}</div>
          <del className="pl-2 pt-2 text-xs">₹700</del>
          
        </div>
        <div className="text-green-500 text-base">GET {props.x}% OFF</div>
      </div>
    </div>
  );
}

export default Cards;
