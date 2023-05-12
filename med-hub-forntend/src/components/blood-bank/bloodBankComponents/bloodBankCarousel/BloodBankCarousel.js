import React, {useState} from "react";
import "./BloodBankCarousel.css";
import image1 from "./images/blood (1).jpg";
import image2 from "./images/blood (2).jpg";
import image3 from "./images/blood (3).jpg";
import image4 from "./images/blood (4).jpg";
import image5 from "./images/blood (5).jpg";

function BloodBankCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? 4 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === 4 ? 0 : currentIndex + 1);
  };
  return (
    <div className="blood-bank-slider-main">
      <div className="slider">
      <img
        src={image1}
        alt="bb1"
        className={currentIndex === 0 ? "slide active" : "slide"}
      />
      <img
        src={image2}
        alt="bb1"
        className={currentIndex === 1 ? "slide active" : "slide"}
      />
      <img
        src={image3}
        alt="bb1"
        className={currentIndex === 2 ? "slide active" : "slide"}
      />
      <img
        src={image4}
        alt="bb1"
        className={currentIndex === 3 ? "slide active" : "slide"}
      />
      <img
        src={image5}
        alt="bb1"
        className={currentIndex === 4 ? "slide active" : "slide"}
      />
      <div className="button-group">
        <button className="slider-button previous" onClick={handlePreviousClick}>
          &#8249;
        </button>
        <button className="slider-button next" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
    </div>
    </div>
  );
}

export default BloodBankCarousel;
