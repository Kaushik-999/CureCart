import React from "react";
import "./SignIn.css";
import authenticationImage from "../image/authentication.png";
import FormComponents from "./formComponents/FormComponents";
function SignIn() {
  return (
    <div className="sign-in-main">
      <div className="sign-in-main-image">
        <img src={authenticationImage} alt="" />
      </div>
      <div className="sign-in-main-form">
        <FormComponents />
      </div>
    </div>
  );
}

export default SignIn;
