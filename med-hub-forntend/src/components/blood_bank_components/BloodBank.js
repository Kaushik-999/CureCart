import React from 'react';
import BloodBankCarousel from "./BloodBankCarousel/BloodBankCarousel";
import BloodDonationJumbotron from "./BloodDonationJumbotron/BloodDonationJumbotron";
import BloodBankDonationProcess from './BloodBankDonationProcess/BloodBankDonationProcess';
import BloodBankRequestAppointment from './BloodBankRequestAppointmentForm/BloodBankRequestAppointment';
import Navbar1 from './Navbar1/Navbar1';
import OpinionCarousel from './OpinionCarousel/OpinionCarousel';
import ImageWithButton from './ImageWithButton/ImageWithButton';
import CampaignJumbotron from './CampaignJumbotron/CampaignJumbotron';
import Campaign from './Campaign/Campaign';
import SponsorsSection from './SponsorsSection/SponsorsSection';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Footer from './Footer/Footer';
import BloodDonationNavbar from './BloodDonationNavbar/BloodDonationNavbar';
import CardImage from './CardImage';
import CardGrid from './CardGrid';
// https:localhost/admin/******/ -kaushik
// https:localhost/pharamacy-vendor/********/  -kaushik
// https:localhost/blood-bank/*******/   - damini
// https:localhost/ -gourob
// https:localhost/storre/ -gourab
function BloodBank() {
  return (
  
      <div>
        
        {/* <Route exact path="blood-bank/contact" component={<BloodBankContactUs/>} /> */}
        {/* Other routes */}
        <BloodDonationNavbar/>
       <BloodBankCarousel/>
        <BloodDonationJumbotron />
        <BloodBankDonationProcess />
        <BloodBankRequestAppointment />
        <CardImage/>
        <CardGrid/>
        <OpinionCarousel />
        <ImageWithButton />
        <CampaignJumbotron />
        <Campaign />
        <PhotoGallery />
        <SponsorsSection />
        <Footer />
      </div>
  );
}

export default BloodBank;
