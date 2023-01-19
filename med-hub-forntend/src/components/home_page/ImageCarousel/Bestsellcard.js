import React, { useState } from "react";
import "./Bestsellcard.css";

function Bestsellcard(props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      class={`card bsc ${hover ? "hovered" : ""}`}
      style={{ minWidth: 350, marginRight: 25 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={props.link} class="card-img-top bsc-cit" alt="..." />
      <button className={`btn btn-bstsell btn-primary ${hover ? "slide-in" : "slide-out"}`}>
        ADD TO CART
      </button>
      <div class="card-body">
        <div className="justify-content-center card-text px-2">
          <h4>{props.title}</h4>
        </div>

        <div className="d-flex justify-content-left ps-2 mt-3">
          <h5>
            <b>₹500</b>
          </h5>
          <s className="ps-2">₹700</s>
        </div>
      </div>
    </div>
  );
}

export default Bestsellcard;
