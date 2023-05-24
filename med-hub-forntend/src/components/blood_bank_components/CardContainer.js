import React from 'react';
import Card1 from './Card1';
import './Card1.css';

const CardContainer = ({ title1, image1, paragraph1, title2, image2, paragraph2 }) => {
  return (
    <div className="card-container1">
      <Card1 title={title1} image={image1} paragraph={paragraph1} />
      <Card1 title={title2} image={image2} paragraph={paragraph2} />
    </div>
  );
};

export default CardContainer;
