import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import RecentBlogs from './RecentBlogs';
import Testimonials from './Testimonials';
import Footer from './footer';

class TeamMembers extends Component {
    state = {  }
    render() { 
        return ( 
<>

        <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>

        <div class="container team-container">
          <div class="row">
          <div class="col-md-5 justify-content-center d-grid mb-3" id="team-section">
            <h3 style={{ 'color':'#333333' , 'text-align' : 'center' }}> <br/> <b>Our Specialists</b></h3>
            <hr/>
            <p style={{ 'text-align' : 'justify'  }}>We want our clients to experience the holistic approach within every Ayurvedic treatment we offer. In order to provide the best Ayurvedic treatments in Abu Dhabi, we gathered the best doctors and specialists to conduct the ideal Ayurvedic practices to our clients on their every visit. In addition to this, every Ayurvedic therapist in our team underwent rigorous training to perfect their knowledge in performing the ancient healing treatment. Altogether, our team has the ability to offer an end-to-end premium Ayurvedic service from consultation to therapies and treatments, to lifestyle and diet modifications. Your life-changing journey to a healthier life awaits, and we are here to be with you all throughout.</p>
          </div>

           <div class="col-md-7 mt-3 justify-content-center d-flex doctor-pic-team">
                    <div class="about-doctor-pic">
                      <div class="doctor-pic">
                      </div>
                      <span style={{ 'padding' : '10px' }}>Dr. Shiji Santhosh [ BAMS ]</span><br/>
                      <span style={{  'padding' : '10px' , 'font-size' : '13px' }}>HAAD Licensed Ayurvedic Practitioner</span><br/>
                      <span style={{  'padding' : '10px' , 'font-size' : '12px' }}>Over 15 years of experience in Kerala (India) and in Abu Dhabi</span>
                    
                    </div>


                   <div class="about-doctor-pic-one">
                      <div class="doctor-pic-one">

                      </div>
                      <span style={{ 'padding' : '10px' }}>Dr. Athira Cherakkara [BAMS]</span><br/>
                      <span style={{  'padding' : '10px' , 'font-size' : '13px' }}>Ayurveda Practitioner</span><br/>
                      <span style={{  'padding' : '10px' , 'font-size' : '12px' }}>Over 3 years of experience in Kerala (India)</span>
                  </div> 

          </div>
          
          </div>


          <Testimonials></Testimonials>
          <RecentBlogs></RecentBlogs>


        </div>  

        </div>

        <div class="mt-5">
        <Footer></Footer>
        </div>

            
</>

         );
    }
}
 
export default TeamMembers;