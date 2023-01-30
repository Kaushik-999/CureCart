import React, { useState } from 'react';




const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <button onClick={handlePrevious}>Previous</button>
      <img className="relative" src={images[currentImageIndex]} alt="slide" />
      <button className="absolute bottom-1/2 right-28 translate" onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
    </div>
  );
};

export default Carousel;
