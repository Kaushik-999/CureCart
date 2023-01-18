import React, { useRef } from "react";

import "./Imagecarousel.css";

const Imagecarousel = (props) => {
  const ref = useRef(null);

  const btnpressprev = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width / 4;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width / 4;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <div className="product-container" ref={ref}>
        {props.ncard}
      </div>

      <button className="pre-btn" onClick={btnpressprev}>
        <span>
          <i class="bi bi-chevron-left"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <span>
          <i class="bi bi-chevron-right"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Imagecarousel;
