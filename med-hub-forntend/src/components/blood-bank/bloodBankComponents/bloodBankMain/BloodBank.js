import React from 'react'
import BloodBankCarousel from '../bloodBankCarousel/BloodBankCarousel'
import BloodBankDonationProcess from '../bloodBankDonationProcess/BloodBankDonationProcess'
import BloodBankRequestAppointment from '../bloodBankRequestAppointment/BloodBankRequestAppointment'
import "./BloodBank.css"
function BloodBank() {
  return (
    <div className='blood-bank-main'>
        {/* <h3>Blood Bank</h3> */}
        <BloodBankCarousel/>
        <BloodBankDonationProcess/>
        <BloodBankRequestAppointment/>
    </div>
  )
}

export default BloodBank