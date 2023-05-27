import React from "react";
import "./BloodDonationJumbotron.css"; // import your CSS file
import {FaRegWindowMinimize} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";

function BloodDonationJumbotron() {
  return (
    <div className="jumbotron-heading-and-paragraph ">
  <h1 className="text-3xl font-semibold">WE ARE HELPING PEOPLE FROM ANY PART OF THE COUNTRY</h1>
  <p>You can give blood at any of our blood donation venues all over India. We have a donor centres in every state and visit on various occasions.</p>
    <div className="blood-donation-jumbotron">
      <div className="jumbotron-request-button-appointment">
        <button>REQUEST FOR APPOINTMENT</button>
      </div>
    </div>
    <div className="jumbotron-blood-donation-process">
    <h1><strong>DONATION PROCESS</strong></h1>
    <p>The donation process from the time you arrive center until the time you leave</p>
    
</div>
<div className="jumbotron-icons-container">
        <FaRegWindowMinimize className="jumbotron-icon" />
        <MdBloodtype className="jumbotron-icon" />
        <FaRegWindowMinimize className="jumbotron-icon" />
      </div>
    </div>
  );
}

export default BloodDonationJumbotron;
 