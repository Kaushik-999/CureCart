import React from 'react';
import './Card1.css';

const Card1 = ({ title, image, paragraph }) => {
  return (
    <div className="card2">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card1;
