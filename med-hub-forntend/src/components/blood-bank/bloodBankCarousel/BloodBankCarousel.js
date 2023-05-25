import React, {useState} from "react";
import "./BloodBankCarousel.css";
import image1 from "../BloodBankCarouselImages/blood (1).jpeg";
import image2 from "../BloodBankCarouselImages/blood (2).jpg";

function BloodBankCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === 1 ? 0 : currentIndex + 1);
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