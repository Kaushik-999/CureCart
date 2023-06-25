import React from 'react';
import './PhotoGalleryJumbotron.css';
import {FaRegWindowMinimize} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";


const PhotoGalleryJumbotron = () => {
  return (
    <>
    <div className="bb-photo-gallery-title">
          <h1>PHOTO GALLERY</h1>
          <div className="bb-photo-gallery-icons-container">
        <FaRegWindowMinimize className="bb-photo-gallery-icon" />
        <MdBloodtype className="bb-photo-gallery-icon" />
        <FaRegWindowMinimize className="bb-photo-gallery-icon" />
      </div>
      </div><div className="bb-photo-gallery-paragraph">
              <p>Campaign photos of different parts of world and our prestigious voluntary work.</p>
          </div>
          </>

  );
};

export default PhotoGalleryJumbotron;
