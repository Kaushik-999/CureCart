import React, { useState, useEffect } from "react";
import "./CardImage.css"; // import custom css file
import { RiHeartPulseLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

function CardImage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 80) {
        setCount1((prevCount) => prevCount + 1);
      }
    }, 1);
    
    const interval2 = setInterval(() => {
      if (count2 < 150) {
        setCount2((prevCount) => prevCount + 1);
      }
    }, 1);
    
    const interval3 = setInterval(() => {
      if (count3 < 250) {
        setCount3((prevCount) => prevCount + 1);
      }
    }, 1);
    
    const interval4 = setInterval(() => {
      if (count4 < 350) {
        setCount4((prevCount) => prevCount + 1);
      }
    }, 1);
    
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div className="card-image-container">
      <div className="card1">
        <div className="icons-container1">
          <RiHeartPulseLine />
          <h2 className="count">{count1}</h2>
          <p>SUCCESS SMILE</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <FaStethoscope />
          <h2 className="count">{count2}</h2>
          <p>HAPPY DONORS</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <BsFillPeopleFill />
          <h2 className="count">{count3}</h2>
          <p>HAPPY RECIPIENT</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <FaAward />
          <h2 className="count">{count4}</h2>
          <p>TOTAL AWARDS</p>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
