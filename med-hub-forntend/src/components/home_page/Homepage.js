import React from "react";
import Carousel from "./components/Carousel";
import { bestselldata, tdata } from "./cards/trendingdata";
import { useState, useEffect } from "react";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pharmacy-vendor/get-medicine/"
      );
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  // const newdata = data['meds'].filter((med) => med.link !== 'None');
 console.log(data)
 

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
          <Banner
            link={val.link}
            key={key}
            title={val.title}
            price={val.price}
          />
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
            title={val.title}
            id={val.id}
            price={val.price}
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
          <Brandcard link={val.link} key={index} title={val.title} x="30" />
        ))}
      />
    </>
  );
}

export default Homepage;
