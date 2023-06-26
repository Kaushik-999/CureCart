import React from 'react'
import RatingStars from "react-rating-stars-component";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions';

import { Link } from 'react-router-dom';



const ratingChanged = (newRating) => {
  ratingProps.value = newRating;
};
const ratingProps = {
  size: 20,
  count: 5,
  value: 0,
  onChange: ratingChanged,
  activeColor: "#ffd700",
  inactiveColor: "#c4c4c4",
};




function Seeitemcard(props) {


  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('ADD TO CART');

  const val = {
    id : props.id,
    title : props.title,
    link : props.link,
    price : props.price,
    quantity : props.quantity
  }
  const handleClick = () => {
    setButtonText('ADDED TO CART');
    dispatch(addToCart(val));
  };
  return (
    <>
      <div className="flex w-full mt-5">
              <div className=" w-72">
                <img
                className="w-64"
                  src={props.link}
                  alt=""
                />
                <div className="flex justify-center border-2 border-teal-600 hover:bg-teal-600 group">
                  <button className="text-teal-600 p-1  group-hover:text-white" onClick={handleClick}>
              {buttonText}</button>
                </div>
              </div>
              <div className="ml-20 mt-10 w-full">
                <span className="text-slate-400 text-sm">Personal Care</span>
                <Link to={{pathname : `/productpage/${props.id}`,search : "?v=product"}}>

                <div className="mt-2 text-slate-600 font-semibold text-xl">
                  {props.title}
                </div>
                <div className="flex mt-2">
                  <div className="text-2xl  font-medium text-teal-600">
                  ₹{props.price}
                  </div>
                  <del className="pl-2 pt-1 text-base">₹{props.price +100}</del>
                </div>
                <div className="text-xs text-slate-500 mt-2">Mkt : Garnier</div>
                </Link>

                <hr className="text-slate-500 mt-5" />
                <RatingStars {...ratingProps} />

              </div>
            </div>
    </>
  )
}

export default Seeitemcard
