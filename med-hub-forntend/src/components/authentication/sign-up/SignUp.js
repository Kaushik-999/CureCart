import React from "react";
import "./SignUp.css";
import authenticationImage from "../image/authentication.png";
import FormComponents from "./formComponent/FormComponents";

function SignUp() {
  return (
    <div className="sign-up-main">
      <div className="sign-up-main-image">
        <img src={authenticationImage} alt="" />
      </div>
      <div className="sign-up-main-form">
        <FormComponents />
      </div>
    </div>
  );
}

export default SignUp;
