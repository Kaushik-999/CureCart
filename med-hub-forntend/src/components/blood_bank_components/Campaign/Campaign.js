
import React from 'react';
import './Campaign.css';


const Campaign = ({ imageUrl, title, paragraph }) => {
  return (
    <><div className="campaign-container">
          <div className="image-container">
              <img src={'https://images.unsplash.com/photo-1669533035587-a5a39adedfa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb29kJTIwY2FtcGFpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'} alt="Campaign" />
          </div>
          <div className="content-container">
              <h3>14 June, 2017</h3>
              <h2>WORLD BLOOD DONORS DAY</h2>
              <p>Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.</p>
              <a className="author" href="/">
         10.00am - 3.00pm
      </a>
      <a className="comments" href="#">
         California, USA
      </a>
          </div>
          <div className="image-container">
              <img src={'https://images.unsplash.com/photo-1669533034812-0aa3b4354fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ymxvb2QlMjBjYW1wYWlnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'} alt="Campaign" />
          </div>
          <div className="content-container">
            <h3>20 Sep, 2017</h3>
              <h2>O- BLOOD DONORS NEEDED</h2>
              <p>O Negative blood cells are called universal meaning they can be transfused to almost any patient in need and blood cells are safest.</p>
              <a className="author" href="#">
         10.00am - 3.00pm
      </a>
      <a className="comments" href="#">
         California, USA
      </a>
          </div>
      </div><div className="campaign-container">
              <div className="image-container">
                  <img src={'https://images.unsplash.com/photo-1669533035239-c320bd01eb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsb29kJTIwY2FtcGFpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'} alt="Campaign" />
              </div>
              <div className="content-container">
                <h3>20 Sep, 2017</h3>
                  <h2>YOU ARE SOMEBODY'S TYPE</h2>
                  <p>Many people has same blood group like you. so donate now and bring smiles in their face and encourage others for donate blood.</p>
                  <a className="author" href="#">
         10.00am - 3.00pm
      </a>
      <a className="comments" href="#">
         California, USA
      </a>
              </div>
              <div className="image-container">
                  <img src={'https://images.unsplash.com/photo-1669533035501-b56911437cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb29kJTIwY2FtcGFpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'} alt="Campaign" />
              </div>
              <div className="content-container">
                <h3>20 Sep, 2017</h3>
                  <h2>DONATION - FEEL REAL PEACE</h2>
                  <p>You're the real hero because you can gift a new life for patient.So donate your blood and enjoy a precious life. Don't fear, it's really easy.</p>
                  <a className="author" href="#">
         10.00am - 3.00pm
      </a>
      <a className="comments" href="#">
         California, USA
      </a>
              </div>
          </div></>
  );
};

export default Campaign;

