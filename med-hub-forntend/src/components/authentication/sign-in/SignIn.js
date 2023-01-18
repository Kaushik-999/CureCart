import React from 'react'
import "./SignIn.css"
import authenticationImage from "../image/authentication.png"
import FormComponent from './FormComponent'
function SignIn() {
  return ( 
    <div className='sign-in-main'>
        <div className="container sign-in">
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={authenticationImage} alt="login" className='img-fluid'/>
                </div>
                <div className="col-md-6 sign-in-form ">
                    <FormComponent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn