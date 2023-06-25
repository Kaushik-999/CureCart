import React, {useRef} from 'react'
import BloodBankCarousel from '../bloodBankCarousel/BloodBankCarousel'

import BloodBankRequestAppointment from '../bloodBankRequestAppointment/BloodBankRequestAppointment'
import BloodDonationJumbotron from "../BloodDonationJumbotron/BloodDonationJumbotron";
import BloodDonationCardImage from '../BloodDonationCardImage';
import CardGrid from '../cardGrid/CardGrid';
import OpinionCarousel from '../OpinionCarousel/OpinionCarousel';
import ImageWithButton from '../imageWithButtons/ImageWithButton';
import CampaignJumbotron from '../campaignJumbotron/CampaignJumbotron';
import Campaign from '../campaign/Campaign';
import PhotoGalleryJumbotron from '../PhotoGalleryJumbotron/PhotoGalleryJumbotron';
import SponsorsSection from '../SponsorsSection/SponsorsSection';
import JoinUs from '../JoinUs/JoinUs';
import RegisterForm from '../RegisterForm/RegisterForm';
import BloodBankGallery from '../BloodBankGallery/BloodBankGallery';
import Accordion from '../accordion/Accordion';
import BloodAvailable from '../BloodAvailableMain/BloodAvailable';
import "./BloodBank.css"
function BloodBank() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='blood-bank-main'>
        {/* <h3>Blood Bank</h3> */}
        <BloodBankCarousel/>
        <BloodDonationJumbotron scrollfunc={scrollToForm}/>
        <CardGrid/>
        <BloodBankRequestAppointment formfunc={formRef}/>
        <BloodDonationCardImage/>
        <OpinionCarousel />
        <ImageWithButton />
        <CampaignJumbotron />
        <Campaign />
        <PhotoGalleryJumbotron />
        <BloodBankGallery/>
        <SponsorsSection />
        <JoinUs/>
        <RegisterForm/>
        <Accordion/>
        <BloodAvailable/>
        

    </div>
  )
}

export default BloodBank