import React from 'react';
import './CampaignJumbotron.css';
import {FaRegWindowMinimize} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";

const CampaignJumbotron = () => {
  return (
    <div className="campaign-jumbotron">
      <h1>DONATION CAMPAIGN</h1>
      <div className="campaign-icons-container">
        <FaRegWindowMinimize className="campaign-icon" />
        <MdBloodtype className="campaign-icon" />
        <FaRegWindowMinimize className="campaign-icon" />
      </div>
      <p>Campaigns to encourage new donors to join and existing donors to continue to give blood.</p>
    </div>
  );
};

export default CampaignJumbotron;
