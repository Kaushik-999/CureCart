import React from 'react';
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import Card from '../components/Card';


function BloodBank() {
  return (
    <div>
      <div className="BloodBank">
        <Navbar/>
        <Carousel/> 
        <Jumbotron/>
        <Card/>
    </div>
    </div>
  );
}
export default BloodBank; 
