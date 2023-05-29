import React from 'react'
import BloodBankCarousel from '../bloodBankCarousel/BloodBankCarousel'

import BloodBankRequestAppointment from '../bloodBankRequestAppointment/BloodBankRequestAppointment'
import BloodDonationJumbotron from "../BloodDonationJumbotron/BloodDonationJumbotron";
import CardImage from '../CardImage';
import CardGrid from '../CardGrid';
import OpinionCarousel from '../OpinionCarousel/OpinionCarousel';
import ImageWithButton from '../ImageWithButton/ImageWithButton';
import CampaignJumbotron from '../CampaignJumbotron/CampaignJumbotron';
import Campaign from '../Campaign/Campaign';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import SponsorsSection from '../SponsorsSection/SponsorsSection';
import JoinUs from '../JoinUs/JoinUs';
import RegisterForm from '../RegisterForm/RegisterForm';
import "./BloodBank.css"
function BloodBank() {
  return (
    <div className='blood-bank-main'>
        {/* <h3>Blood Bank</h3> */}
        <BloodBankCarousel/>
        <BloodDonationJumbotron />
        <CardGrid/>
        <BloodBankRequestAppointment/>
        <CardImage/>
        
        
        <OpinionCarousel />
        <ImageWithButton />
        <CampaignJumbotron />
        <Campaign />
        <PhotoGallery />
        <SponsorsSection />
        <JoinUs/>
        <RegisterForm/>
        

    </div>
  )
}

export default BloodBank