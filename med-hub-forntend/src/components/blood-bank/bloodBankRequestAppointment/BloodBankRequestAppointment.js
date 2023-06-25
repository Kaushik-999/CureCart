import React from "react";
import "./BloodBankRequestAppointment.css";
import bloodAppointmentManImage from "./images/bloodAppointment.png";
import AppointmentForm from "./appointmentForm/AppointmentForm";
function BloodBankRequestAppointment(props) {
  return (
    <div className="blood-bank-request-appointment-main">
      <div className="request-appointment-image-div">
        <img src={bloodAppointmentManImage} alt="" />
      </div>
      <div className="request-appointment-form">
        <AppointmentForm scrollfunc={props.formfunc}/>
      </div>
    </div>
  ); 
}

export default BloodBankRequestAppointment;
