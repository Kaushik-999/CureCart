import React from "react";
import "./SignUp.css";
import authenticationImage from "../image/authentication.png";
import FormComponent from "./FormComponent"
function SignUp() {
  return (
    <div className="sign-up-main">
      <div className="container sign-up">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={authenticationImage} alt="login" className="img-fluid" />
          </div>
          <div className="col-md-6 sign-up-form ">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
