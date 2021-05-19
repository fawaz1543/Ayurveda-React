import React, { Component } from 'react';
import TopSection from './TopSection';
import BannerHomepage from './BannerHomepage';
import ServiceCircle  from './ServiceCircle';
import CollapseCircle from './CollapseCircle';
import IntroductionContent from './IntroductionContent';
import AppointmentForm from './AppointmentForm';
import AyurvedaPackages from './AyurvedaPackages';
import ServiceGallery from './ServiceGallery';
import AyurvedaTreatmentList from './AyurvedaTreatmentList';
import InsurancePartners from './InsurancePartners';
import Testimonials from './Testimonials';
import RecentBlogs from './RecentBlogs';
import Footer from './footer';
import StickyMenu from './StickyMenu';
import DocumentMeta from 'react-document-meta';
import ayurveda from './ayurveda';

 export const Home = () => {

  const meta = {
    title: 'Welcome to the Best Ayurveda Center in Abu Dhabi | Adam & Eve Ayurveda',
    description: 'Adam & Eve Ayurveda is home to a variety of ancient treatments proven to prevent illnesses and relax the mind, making us the best Ayurveda center in Abu Dhabi.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Ayurveda,Ayurvedic Centre,Ayurvedic Treatment Centre,Best Ayurvedic Centre,Best Ayurvedic Centre in Abu Dhabi'
      }
    }
  };

    return ( 
  <div>
    <div className="container-fluid" style={{float: 'left'}} id="home-anchor">
     <DocumentMeta {...meta}><span></span></DocumentMeta>
      <StickyMenu></StickyMenu>
      <TopSection></TopSection>
      <BannerHomepage></BannerHomepage>
      {/* <ServiceCircle></ServiceCircle> */}
      {/* <CollapseCircle></CollapseCircle> */}
      <IntroductionContent></IntroductionContent> 
      <AppointmentForm></AppointmentForm>
      <ServiceGallery></ServiceGallery>      
      <AyurvedaPackages></AyurvedaPackages>
      <Testimonials></Testimonials>
      <RecentBlogs></RecentBlogs>
      <InsurancePartners></InsurancePartners>   
    </div>
      <Footer></Footer>
  </div>

    )
 }