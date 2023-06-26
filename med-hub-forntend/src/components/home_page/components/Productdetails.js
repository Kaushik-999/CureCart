import React from "react";
import RatingStars from "react-rating-stars-component";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { addToCart } from "../../actions";







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




function Productdetails(props) {
  
  
  const [myState,setmyState] = useState(1)
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('ADD TO CART');

 
  

  
  
  
  const val = {
    id : props.id,
    title : props.title,
    link : props.link,
    price : parseInt(props.price),
    quantity : myState
  }
  const handleClick = () => {
    setButtonText('ADDED TO CART');
    dispatch(addToCart(val));
  };
  
  return (
    <div>
      <div className="flex ml-20">
        <div className="flex w-5/12">
          <a href="/" className="">
            <img
              className=""
              src={props.link}
              alt=""
            />
          </a>
          <div className="inline mt-3 mr-3 h-4 px-1 pb-1 align-middle ml-auto bg-teal-500 text-xs text-white">
            -30%
          </div>
        </div>

        <div className="mt-2 ml-20">
          <div className="text-2xl font-medium ">{props.title}</div>
          <div className="flex mt-3">
            <div className="p-1 inline bg-slate-100 text-xs text-slate-500">
              Fitness
            </div>
            <div className="ml-2 p-1 inline bg-slate-100 text-xs text-slate-500">
              Family Nutrition
            </div>
          </div>
          <div className="flex mt-3">
            <RatingStars {...ratingProps} />
            <div className="pt-1 pl-2 text-slate-500">0 review(s)</div>
          </div>

          <div className="flex mt-3">
            <div className="text-2xl font-medium text-teal-500">₹{props.price}</div>
            <del className="pl-3 pt-1 text-slate-400   text-lg font-normal">
              ₹{(parseInt(props.price)+100)}
            </del>
          </div>

          <div className="flex mt-10 border-1 border-slate-300">
            <div className="text-slate-500 mr-5 mt-3 text-lg">Quantity :</div>
            <div className="flex border-2 border-slate-100">
              <button
                className="inline pt-1 pb-1 pl-3 text-4xl text-slate-700 "
                onClick={()=>setmyState(myState>0 ? myState-1 : myState)}
              >
                -
              </button>
              <span className=" pl-8 pr-8 pt-2 text-slate-700 text-3xl">
                {myState}
              </span>
              <button
                className="inline pt-1 pb-1 pr-3 text-4xl text-slate-700 "
                onClick={() => setmyState(myState+1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex mt-10">
            <button className="bg-black px-10 py-3 text-white "
            onClick={handleClick}>
              {buttonText}
            </button>
            {/* <button className="bg-teal-700 ml-5 px-10 py-3 text-white">
              BUY NOW
            </button> */}
          </div>
        </div>
      </div>
      <div className="mt-8 mb-10">
        <hr className="text-slate-600 " />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-10">
        <div className="col-span-1 flex flex-col ">
          <div className="inline ml-10">
            <button className=" text-slate-600 font-medium mb-4 ">
              Description
            </button>
          </div>
          <div className="inline ml-10">
            <button className=" text-slate-600 font-medium mb-4 ">
              Reviews
            </button>
          </div>
          <div className="inline ml-10">
            <button className=" text-slate-600 font-medium mb-4 ">
              Store Policy
            </button>
          </div>
          <div className="inline ml-10">
            <button className=" text-slate-600 font-medium mb-4 ">
              Inquiries
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam
            nihil reprehenderit saepe totam, maxime quos, quibusdam, quo quod
            voluptates in. Temporibus ipsum voluptate qui veniam sint beatae
            explicabo dolorem! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Odit quo sunt deleniti autem cum, saepe dolorum
            temporibus quibusdam earum sed, iste repellendus. Aliquam assumenda,
            temporibus corrupti deleniti quo consequatur dolorum!r Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dolores provident ut,
            possimus, earum, cumque ex eius officiis itaque quisquam quo
            assumenda adipisci iure. Provident earum quis quisquam laboriosam
            debitis at! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus accusamus quam, sed, ex quia explicabo qui neque provident
            assumenda temporibus quos dolor repudiandae distinctio aliquam.
            Ullam molestias commodi sed et? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Corporis, odit esse? Eligendi a ipsum
            modi, nemo aperiam dicta, laudantium unde architecto ducimus
            explicabo facere voluptate fugiat tempora temporibus! Optio, modi!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
