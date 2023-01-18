import React from "react";
import Carousel from "../Carousel";
import Categories from "../Categories";
import Imagecarousel from "../ImageCarousel/Imagecarousel";
import Mycard from "../ImageCarousel/Mycard";
import { tdata, bestselldata } from "../ImageCarousel/trendingdata";
import Bestsellcard from "../ImageCarousel/Bestsellcard";
import Footer from "../Footer";
import "./Homepage.css"
const ncard = (val) => {
  return <Mycard link={val.link} title={val.title} />;
};

const bestSell = (val) => {
  return <Bestsellcard link={val.link} title={val.title} />;
};
function Homepage() {
  return (
    <>
      <div className="container-fluid pt-3" style={{"margin-top":"50px"}}>
        <Carousel />
      </div>

      <div className="container-fluid mt-5 p-3 mb-5 bg-body rounded">
      <div className="d-flex ps-5">
          <h2>Trending</h2>
        </div>
        <Imagecarousel key={tdata.title} ncard={tdata.map(ncard)} />
      </div>

      <div className="container-fluid">
        <Categories />
      </div>

      <div className="container-fluid">
        <div className="d-flex ps-5">
          <h2>Best Selling</h2>
        </div>
        <Imagecarousel key={bestselldata.title} ncard={bestselldata.map(bestSell)} />
      </div>

      <Footer/>
    </>
  );
}

export default Homepage;
