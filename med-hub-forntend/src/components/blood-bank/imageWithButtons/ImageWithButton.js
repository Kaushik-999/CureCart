import React from 'react';
import "./ImageWithButton.css";

const ImageWithButton = () => {
  return (
    <div className="image-wrapper">
      <div className="image-overlay1">
        <p>JOIN WITH US AND SAVE LIVES!</p>
        <button className="mild-opacity-button">
          BECOME VOLUNTEER
        </button>
      </div>
      <img src={"https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpvaW4lMjBoYW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"} alt="" />
    </div>
  );
};

export default ImageWithButton;
