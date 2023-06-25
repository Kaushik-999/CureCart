import React from 'react';
import "./OpinionCarousel.css";

const OpinionCarousel = () => {
  return (
    <div>
      <div className="opinion-slider">
   <input type="radio" name="opinion-slider" id="opinion-slide1" defaultChecked/>
   <input type="radio" name="opinion-slider" id="opinion-slide2"/>
   <input type="radio" name="opinion-slider" id="opinion-slide3"/>
   <div id="opinion-slides">
      <div className="opnion-overflow">
         <div className="opinion-inner">
            <div className="opinion-slide opinion-slide_1">
               <div className="opinion-slide-content">
                  <h2 className="donor-opinion-heading">DONOR OPINION</h2>
                  <p className="donor-opinion-paragraph">I proudly donate blood regularly because it gives others something they desperately need to survive.
                 Knowing I can make a difference in someone else’s life makes me feel great!</p>
                  <h6 className="donor-opinion-name">Brandon Munson</h6>
                            <span className="donor-opinion-span">CTO, Fulcrum Design, USA</span>
               </div>
            </div>
            <div className="opinion-slide opinion-slide_2">
               <div className="opinion-slide-content">
                  <h2 className="donor-opinion-heading">DONOR OPINION</h2>
                  <p className="donor-opinion-paragraph">I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover, it gives me real peace of mind.</p>
                  <h6 className="donor-opinion-name">Brandon Munson</h6>
                            <span className="donor-opinion-span">CTO, Fulcrum Design, USA</span>
               </div>
            </div>
            <div className="opinion-slide opinion-slide_3">
               <div className="opinion-slide-content">
                  <h2 className="donor-opinion-heading">RECIPIENT OPINION</h2>
                  <p className="donor-opinion-paragraph">I wish I could tell you, my donor, how grateful I am for your selfless act. You gave me a new lease on life. We may be coworkers or schoolmates, or just two people in the same community. I'm very grateful to you.</p>
                  <h6 className="donor-opinion-name">Brandon Munson</h6>
                            <span className="donor-opinion-span">CTO, Fulcrum Design, USA</span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="opinion-controls">
      <label htmlFor="opinion-slide1"></label>
      <label htmlFor="opinion-slide2"></label>
      <label htmlFor="opinion-slide3"></label>

   </div>
   <div id="opinion-bullets">
      <label htmlFor="opinion-slide1"></label>
      <label htmlFor="opinion-slide2"></label>
      <label htmlFor="opinion-slide3"></label>
   </div>
</div>
    </div>
  )
};

export default OpinionCarousel;
