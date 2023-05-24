import React from "react";
import "./BloodBankRequestAppointment.css";
import bloodAppointmentManImage from "../BloodBankRequestAppointmentImages/bloodAppointment.png"
import AppointmentForm from "./AppointmentForm";
function BloodBankRequestAppointment() {
  return (
    <div className="blood-bank-request-appointment-main">
      <div className="request-appointment-image-div">
        <img src={bloodAppointmentManImage} alt="" />
      </div>
      <div className="request-appointment-form">
        <AppointmentForm/>
      </div>
    </div>
  ); 
}

export default BloodBankRequestAppointment;