import {React} from "react";

function Cards(props) {
  
  return (
    <div className="relative bg-white rounded w-64 p-2 mx-4 snap-start scroll-m-2">
      
        <img
          className="w-48 mx-auto "
          src={
            "https://demo.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/Vitamin-C-with-Zinc-30-Tablets.jpg"
          }
          alt=""
        />
      

      <div className="px-4 py-2 bottom-0 left-0 right-0 bg-white ">
        <div className="font-medium text-base mb-2 text-gray-800 ">
          <a href="/">{"Vitamin C With Zinc – 30 Tablets"}</a>
        </div>
        <div className="flex">
          <div className="text-lg font-medium text-pink-700">₹600</div>
          <del className="pl-2 pt-2 text-xs">₹700</del>
        </div>
        <div className="text-green-500 text-base">GET {props.x}% OFF</div>
      </div>
    </div>
  );
}

export default Cards;
