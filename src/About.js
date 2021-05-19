import React, { Component } from 'react';
import Testimonials from './Testimonials';
import AppointmentForm from './AppointmentForm';
import RecentBlogs from './RecentBlogs';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import TeamMembers from './TeamMembers';
import { useHistory } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Footer from './footer';


function About () {
  const history=useHistory()
  
  const meta = {
    title: 'Abu Dhabi Now Has the Best Ayurveda Center | Adam & Eve Ayurveda',
    description: 'Adam & Eve Ayurveda is a natural and holistic center in Abu Dhabi offering the best traditional Ayurvedic therapies available in the Emirate.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Ayurvedic Treatments , Best Ayurvedic Treatments , Ayurvedic Treatments in Abu Dhabi'
      }
    }
  };

    return (   
<>

      <div className="container-fluid" style={{float: 'left'}} id="about-anchor">
     <DocumentMeta {...meta}><span></span></DocumentMeta>
     <TopSection></TopSection>
     <StickyMenu></StickyMenu>
       <div className="row about-banner">
          <div className="about-banner">
        
            {/* <span>About <br />Adam &amp; Eve Ayurveda</span><br /> */}
          </div>
       </div>   
      {/* Content Section Starts Here*/}
      <div className="container" id="about-responsive-layout" style={{marginBottom: '20px', marginTop: '0px'}}>
        <div class="row" style={{ 'margin-top' : '30px' }}>
        <ul class="breadcrumb">
          <li><a onClick={()=>{history.push('/')}} style={{ 'color' : '#fff' }}>Home</a></li>
          <li><a href="" class="active">About Us</a></li>    
        </ul>
       </div>

        <div class="row">
          <div class="col-md-5">
            <img src="images/about-ayurveda.jpg" style={{ 'width' : '100%' , 'border-radius' : '0px 50px 0px 50px' , 'margin-top'  : '60px' ,
            'box-shadow': 'rgb(36 37 36) 1px 1px 7px 0px' }}/>
          </div>

          <div class="col-md-7 about-introduction" style={{ 'text-align' : 'justify' ,  'padding' : '50px' }}>
           <h3 style={{ 'color':'#333333'}}>About <br/> <b>ADAM & EVE AYURVEDA</b></h3>
           <hr style={{ 'border-color' : 'rgb(163, 165, 50)' }}/>
            <p style={{ 'color':'#333333' , 'font-weight' : '500' }}>
            <h6 style={{ 'font-style' : 'italic' , 'color' : '#6da12e' }}><b>Taking the Nature’s Path</b></h6>
              Adam & Eve Ayurveda is an alternative healing center located in Abu Dhabi. 
              Here, we focus on your health and its connection to nature and how you can heal
               with it. Mother Nature is the ultimate source of cure as she ceaselessly creates 
               natural medicines that you probably have never heard of. We, at Adam & Eve Ayurveda,
                are trained and qualified to be the middlemen between nature and your path to healing. 
                In order to achieve this, we look past people’s diseases to give us a bigger picture.
                 The present and visible symptoms of illnesses are not enough. We dig deeper, down to 
                 the very root of the problem. We discern your habits, relationships, character, history,
                  and any detail that would bring us back to the cause of your ailments. We will not just 
                  help cure your body, but your mind as well. 
            </p>
          </div>

        </div>


        <div class="row">
          <div class="col-md-6" id="team-section" style={{ 'text-align' : 'justify'  }}>
          <h3 style={{ 'color':'#333333'}}> <br/> <b>Our Mission</b></h3>
           <hr style={{ 'border-color' : 'rgb(163, 165, 50)' }}/>
           We believe that Adam & Eve Specialized Medical Centre has a commitment to the community. We are here to:

        <ul>
          <li>Providing competent, innovative and affordable solutions for healthcare needs</li>
          <li>Promoting wellness and healthcare awareness</li>
          <li>Advance excellence in therapeutic and preventive medicine</li>
          <li>Demonstrating social responsibility by choosing and properly using sustainable resources</li>
          <li>Fostering a participative culture with a common vision</li>
          <li>Contributing to better quality of life for the entire community</li>
        </ul>


          </div>

           <div class="col-md-6" style={{ 'text-align' : 'justify'}}>
           <h3 style={{ 'color':'#333333'}}> <br/> <b>Our Vision</b></h3>
           <hr style={{ 'border-color' : 'rgb(163, 165, 50)' }}/>
           To be the best healthcare provider by imbuing our medical services with compassion. We aim to be the leading medical
            centre through the utilization of the latest state-of-the-art medical facilities for optimal patient experience.
          </div>
          
        </div>  




          <div class="row">
             <div class="col-md-12 col-lg-12 col-sm-12">                
               {/* <TeamMembers></TeamMembers> */}
             </div>

          </div>


          <div class="row">
              <Testimonials></Testimonials>
          </div>

          <div class="row">
              <RecentBlogs></RecentBlogs>
          </div>
              
      </div>
   
  </div>

      <Footer></Footer>

</>

    )
}

export default About;