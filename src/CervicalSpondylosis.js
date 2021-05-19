import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from './TopSection';
import ServiceList from './ServiceList';
import AyurvedaPackages from './AyurvedaPackages';
import RecentBlogs from './RecentBlogs';
import Footer from './footer';
import CervicalContent from './ContentCervical';
import LowerBackPain from './LowerBackPain';
import DiskProlapdse from './DiskProlapdse';
import AppointmentForm from './AppointmentForm';
import Fibromyalgia from './Fibromyalgia';
import Arthritis from './Arthritis';
import Gout from './Gout';
import FrozenShoulder from './FrozenShoulder';
import ImmunityBoostProgram from './ImmunityBoostProgram';
import VericoseVein from './VericoseVein';
import DiabeticCare from './DiabeticCare';
import PsoriasisEczema from './Psoriasis&Eczema';
import ObesityManagement from './ObesityManagement';
import Sinusitis from './Sinusitis';
import DigestiveDisorder from './DigestiveDisorder' ;
import StressManagement from './StressManagement';
import Insomnia from './Insomnia';
import AyurvedaConsultation from './AyurvedaConsultation';
import AyurvedaforBabyChildcare from './Baby&Childcare'
import NaadiPariksha from './Naadipariksha';
import DryEyeSyndrome from './DryEyeSyndrome';
import PolycysticOvarySyndrome from './PolycysticOvarySyndrome';
import MultipleSclerosis from './MultipleSclerosis';
import SystemicLupusErythematosus from './SystemicLupusErythematosus';
import HairfallDandruff from './Hairfall&Dandruff'; 
import SportsInjury from './SportsInjury';
import SlimmingTherapy from './SlimmingTherapy';
import DietProgram from './DietProgram';
import LifeStyleRecommendation from './LifeStyleRecommendation';
import DetoxProgram from './DetoxProgram';
import BeautyTherapy from './BeautyTherapies';
import HolisticPregnancy from './HolisticPregnancy';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Form from './Form';


export const CervicalSpondylosis = (props) => {
const {location}=props
    return (
   
<>
      <div className="container-fluid" style={{float: 'left'}}>
       <TopSection></TopSection>
       <StickyMenu></StickyMenu>
      <div className="row">
          <div className="Naadi-pariksha-banner">
              <span>Traditional Healing <br/> with Modern Touch</span>
          </div>
      </div>
      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px', marginTop: '-30px'}}>
        <div className="row" >

        <div class="col-md-9 order-sm-9">
            {location.pathname.match('cervical-spondylosis')&& <CervicalContent/>} 
            {location.pathname.match('sciatica-and-lower-back-pain')&& <LowerBackPain/>} 
            {location.pathname.match('disc-prolapse')&& <DiskProlapdse/>}
            {location.pathname.match('fibromyalgia')&& <Fibromyalgia/>}
            {location.pathname.match('arthritis-and-joint-pain')&& <Arthritis/>}
            {location.pathname.match('gout')&& <Gout/>}
            {location.pathname.match('slimming-therapies')&& <SlimmingTherapy/>}
            {location.pathname.match('frozen-shoulder')&& <FrozenShoulder/>}
            {location.pathname.match('immunity-boost-program')&& <ImmunityBoostProgram/>}
            {location.pathname.match('varicose-veins')&& <VericoseVein/>}
            {location.pathname.match('diabetic-care-management')&& <DiabeticCare/>}
            {location.pathname.match('Psoriasis-Eczema')&&<PsoriasisEczema/>}
            {location.pathname.match('obesity-management')&& <ObesityManagement/>}
            {location.pathname.match('sinusitis-allergy')&& <Sinusitis/>}
            {location.pathname.match('digestive-disorder')&& <DigestiveDisorder/>}
            {location.pathname.match('stress-management')&& <StressManagement/>}
            {location.pathname.match('insomnia')&& <Insomnia/>}
            {location.pathname.match('ayurveda-consultation')&& <AyurvedaConsultation/>}
            {location.pathname.match('child-care-and-baby-care')&& <AyurvedaforBabyChildcare/>}
            {location.pathname.match('nadi-pariksha')&& <NaadiPariksha/>}
            {location.pathname.match('dry-eye-syndrome-and-eye-strain')&& <DryEyeSyndrome/>}
            {location.pathname.match('pcos-and-menopause')&& <PolycysticOvarySyndrome/>}
            {location.pathname.match('multiple-sclerosis')&& <MultipleSclerosis/>}
            {location.pathname.match('systemic-lupus-erythematosus')&& <SystemicLupusErythematosus/>}
            {location.pathname.match('sports-injury')&& <SportsInjury/>}
            {location.pathname.match('hair-fall-and-dandruff')&& <HairfallDandruff/>}
            {location.pathname.match('personalized-diet-program')&& <DietProgram/>}
            {location.pathname.match('lifestyle-recommendations')&& < LifeStyleRecommendation/>}
            {location.pathname.match('detox-program')&& <DetoxProgram/>}
            {location.pathname.match('beauty-therapies')&&<BeautyTherapy/>}
            {location.pathname.match('holistic-pregnancy')&&<HolisticPregnancy/>}

  
          </div>

          <div class="col-md-3 order-sm-3">
              <ServiceList></ServiceList>
              <ServiceForm></ServiceForm>
          </div>


      </div>

       
        {/* <AyurvedaPackages></AyurvedaPackages>
        <RecentBlogs></RecentBlogs> */}
    
      </div>

     </div>
     <Footer></Footer>
    </>

    )

}



