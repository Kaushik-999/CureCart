import React from "react";

const Card = ({ image, title, paragraph }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className="card__paragraph">{paragraph}</p>
    </div>
  );
};

export default Card;
