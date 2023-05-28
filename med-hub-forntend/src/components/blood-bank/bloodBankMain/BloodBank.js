import React from 'react'
import BloodBankCarousel from '../bloodBankCarousel/BloodBankCarousel'
import BloodBankDonationProcess from '../bloodBankDonationProcess/BloodBankDonationProcess'
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
import "./BloodBank.css"
function BloodBank() {
  return (
    <div className='blood-bank-main'>
        {/* <h3>Blood Bank</h3> */}
        <BloodBankCarousel/>
        <BloodDonationJumbotron />
        <BloodBankDonationProcess />
        <BloodBankRequestAppointment/>
        <CardImage/>
        
        <CardGrid/>
        <OpinionCarousel />
        <ImageWithButton />
        <CampaignJumbotron />
        <Campaign />
        <PhotoGallery />
        <SponsorsSection />
        

    </div>
  )
}

export default BloodBank