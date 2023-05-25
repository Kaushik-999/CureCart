import React, { useState, useEffect } from "react";
import "./CardImage.css"; // import custom css file
import { RiHeartPulseLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs";
import {FaAward} from "react-icons/fa";

function CardImage() {
    const [count, setCount] = useState(0); // create state variable to store count

  useEffect(() => {
    // update count from 0 to title number when component mounts
    const titleNumbers = document.querySelectorAll(".card1 h2");
    const interval = setInterval(() => {
      if (count < titleNumbers.length) {
        setCount(count + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="card-image-container">
      <div className="card1">
        <div className="icons-container1">
        <RiHeartPulseLine />
            <h2>{count}</h2>
        <p>SUCCESS SMILE</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
            <FaStethoscope/>
        <h2>3235</h2>
        <p>HAPPY DONORS</p>
      </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
            <BsFillPeopleFill/>
        <h2>3568</h2>
        <p>HAPPY RECIPIENT</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
            <FaAward/>
        <h2>1364</h2>
        <p>TOTAL AWARDS</p>
      </div>
    </div>
    </div>
  );
}

export default CardImage;
