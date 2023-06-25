import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SponsorsSection.css';
import SponsorsImage1 from "../SponsorsImages/logo_1.jpg";
import SponsorsImage2 from "../SponsorsImages/logo_2.jpg";
import SponsorsImage3 from "../SponsorsImages/logo_3.jpg";
import SponsorsImage4 from "../SponsorsImages/logo_4.jpg";
import SponsorsImage5 from "../SponsorsImages/logo_5.jpg"; 
import SponsorsImage6 from "../SponsorsImages/logo_6.jpg";
import {FaRegWindowMinimize} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";


const SponsorsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sponsors-section">
      <h2>OUR SPONSORS</h2>
      <div className="sponsors-icons-container">
        <FaRegWindowMinimize className="sponsors-icon" />
        <MdBloodtype className="sponsors-icon" />
        <FaRegWindowMinimize className="sponsors-icon" />
      </div>
      <p>The sponsors who give their valuable amounts to fulfil our mission</p>
      
      <Slider {...settings}>
        <div className="sponsor-item">
          <img src={SponsorsImage1} alt="Sponsor 1" />
        </div>
        <div className="sponsor-item">
          <img src={SponsorsImage2} alt="Sponsor 2" />
        </div>
        <div className="sponsor-item">
          <img src={SponsorsImage3} alt="Sponsor 3" />
        </div>
        <div className="sponsor-item">
          <img src={SponsorsImage4} alt="Sponsor 4" />
        </div>
        <div className="sponsor-item">
          <img src={SponsorsImage5} alt="Sponsor 5" />
        </div>
        <div className="sponsor-item">
          <img src={SponsorsImage6} alt="Sponsor 6" />
        </div>
        {/* Add more sponsor items here */}
      </Slider>
    </div>
  );
};

export default SponsorsSection;
