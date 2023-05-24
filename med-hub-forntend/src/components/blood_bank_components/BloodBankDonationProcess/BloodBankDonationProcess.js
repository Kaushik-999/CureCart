import React from "react";
import "./BloodBankDonationProcess.css";
import procedureImage1 from "../BloodBankDonationProcessImages/process_1.jpg"
import procedureImage2 from "../BloodBankDonationProcessImages/process_2.jpg"
import procedureImage3 from "../BloodBankDonationProcessImages/process_3.jpg"
import procedureImage4 from "../BloodBankDonationProcessImages/process_4.jpg"
function BloodBankDonationProcess() {
  return (
    
     <div className="blood-bank-donation-process-procedure">
        <div className="donation-procedure-1">
            <img src={procedureImage1} alt="" />
            <h3>1. Registration</h3>
            <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
        </div>
        <div className="donation-procedure-2">
            <img src={procedureImage2} alt="" />
            <h3>2. Screening</h3>
            <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
        </div>
        <div className="donation-procedure-3">
            <img src={procedureImage3} alt="" />
            <h3>3. Donation</h3>
            <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
        </div>
        <div className="donation-procedure-4">
            <img src={procedureImage4} alt="" />
            <h3>4. Refreshment</h3>
            <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
        </div>
      </div>
  );
}

export default BloodBankDonationProcess;