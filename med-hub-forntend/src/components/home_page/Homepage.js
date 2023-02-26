import React from "react";
import Carousel from "./components/Carousel";
import { bestselldata, tdata } from "./cards/trendingdata";
import Footer from "./components/Footer";
import Cards from "./cards/Cards";
import Banner from "./cards/Banner";
import Brandcard from "./cards/Brandcard";
import Dotd from "./components/Dotd";
import Deals from "./components/Deals";
import NewArrival from "./components/NewArrival";

const images = [
  "https://www.ashland.com/file_source/Ashland/images/Slider_antaronSoja_desktop%20c.jpg",
  "https://www.ashland.com/file_source/Ashland/images/Slider_sensiveGoNat_desktopFINAL.jpg",
  "https://www.ashland.com/file_source/Ashland/images/Slider_caressense_desktop-final.jpg",
];
const array = [];
for (let i = 0; i < 8; i++) {
  array.push(bestselldata[i]);
}

function Homepage() {
  //for timer

  //for card carousel buttons

  return (
    <>
      {/* <div className="container-fluid pt-3" style={{"margin-top":"50px"}}> */}
      <Carousel images={images} />

      {/* Deals of the day */}
      <Dotd />

      {/* Banner */}
      <div className="flex justify-items-center mt-14 mb-4">
        {tdata.map((val, key) => (
          <Banner link={val.link} key={key} title={val.title} />
        ))}
      </div>

      {/* Fitness Deals */}
      <Deals />

      {/* Random image */}
      <div className="flex mt-16 mb-16">
        <img
          className="w-fit mx-auto"
          src="https://demo.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/banner-23.jpg"
          alt=""
        />
      </div>

      {/* {new arrivals} */}
      <NewArrival
        l={"14"}
        r={"11"}
        title={"New Arrivals"}
        func={array.map((val, index) => (
          <Cards
            link={val.link}
            key={index}
            title={"Vitamin C With Zinc – 30 Tablets"}
            x="30"
          />
        ))}
      />

      {/* brands */}
      <NewArrival
        l={"16"}
        title={"Featured Brands"}
        r={"16"}
        func={bestselldata.map((val, index) => (
          <Brandcard
            link={val.link}
            key={index}
            title={"Vitamin C With Zinc – 30 Tablets"}
            x="30"
          />
        ))}
      />
      <Footer />
    </>
  );
}

export default Homepage;
