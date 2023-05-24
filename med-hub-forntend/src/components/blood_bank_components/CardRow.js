import React from 'react';
import './Card1.css';

const CardRow = () => {
  return (
    <div className="card-row1">
      <div className="card-container1"
        title1="Card 1 Title"
        image1="https://placehold.it/300x200"
        paragraph1="Card 1 Paragraph"
        title2="Card 2 Title"
        image2="https://placehold.it/300x200"
        paragraph2="Card 2 Paragraph"
      />
      <div className="card-container1"
        title1="Card 3 Title"
        image1="https://placehold.it/300x200"
        paragraph1="Card 3 Paragraph"
        title2="Card 4 Title"
        image2="https://placehold.it/300x200"
        paragraph2="Card 4 Paragraph"
      />
    </div>
  );
};

export default CardRow;
