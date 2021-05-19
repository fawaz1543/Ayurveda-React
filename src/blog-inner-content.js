import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';

class BlogInnerContent extends Component {
    state = {  }
    render() { 
        return ( 

            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row Blog-banner">
               <span>Blog</span><br />
               {/* <ul style="display:flex;list-style-type:none;font-weight:bold;color:#ffffff;">
                     <li>Home</li> &nbsp;/&nbsp;
                     <li>About us</li>
                   </ul> */}
           </div>   
           {/* Banner Section Ends Here*/}
   
         {/* Content Section Starts Here*/}
         <div className="container" style={{marginBottom: '20px',  'width' : '100%' }}>
          
          <div class="row" style={{ 'margin':'20px' }}>
            <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="#">Balancing Doshas with Nadi Pariksha</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Balancing Doshas with Nadi Pariksha</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Naadipariksha-banner-img.jpeg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Despite its existence for thousands of years, Nadi Pariksha (or Pulse Diagnosis) 
                        still has its finger on the pulse of the healthcare industry. Its reliability in 
                        diagnosing the patient’s physical, emotional, and mental health imbalances has been 
                        thriving for decades and has been helping patients heal their ailments holistically.
                         Nadi Pariksha listens to every vibratory frequency the pulse sends that even the 
                         softest beats would tell a lot about the patient’s well-being.</p>


                        <p>Three fingers are enough for Nadi pariksha treatment to precisely detect what needs 
                            to be detected. It looks into the three doshas that circulate in our bodies which 
                            constitute our genetic framework. The index finger feels the Vata dosha, middle finger
                             feels the Pitta dosha, and the ring finger feels the Kapha dosha. Anything that has
                              to do with our body’s motion and movements are under Vata, digestion and metabolism
                               are under Pitta, and the body’s physical and fluid balance are under Kapha. </p>

 
                    <p>These doshas are perfectly balanced when the body is healthy. But as soon as one dosha loses 
                        its way, the imbalance will have a huge effect on our bodies and diseases will start to 
                        invade our systems. Nadi pariksha treatment is about re-coordinating our doshas back to
                         where they should be so the uninvited diseases will vacate our bodies. </p>

                   
                   <h5><b>Nadi Tarangini</b></h5>

          

                    <p>
                    This device is an offspring of an old but gold medical practice and modern technology. Nadi
                     Tarangini is a tool that can heighten the Ayurvedic doctor’s ability to sense dosha imbalances.
                      It uses sensors to detect the pulse and translate its frequency into graphs which the doctor 
                      will interpret right after. 
                    </p>


                    <h5><b>Listening to the pulse</b></h5>

                    <img src="images/pulse.jpeg" style={{ 'width':'100%' }} />
                    <br/><br/>
                    <p>In Nadi pariksha, the pulse tells a lot about the body’s present constitution and the Ayurvedic
                         doctor’s duty is to listen to what the pulse has to say. As soon as the doctor finds out about 
                         the patient’s ailments, treatments as non-invasive as nadi pariksha will be given. These include
                          medicinal herbs, Ayurvedic therapies, lifestyle and diet modifications.</p>

<br/>
                   <p>
It does not cure the disease directly. But rather treat the very root that caused such disease by giving the body proper 
care and avoid the way of life that misaligned the doshas and made the body vulnerable to impurities. </p>





 




                
                     </div>
                 </div> 
             

             <div class="Related-blogs">
                   <div class="Related-blog-title">
                    <h5><b>Related Blogs</b></h5>
                   </div>

                   <div class="Related-blog-outline">
                       <div class="Related-blog-section">
                            <div class="Related-section-image-Nadipariksha">

                            </div>
                            <div class="Related-section-content">
                                <h6>Health Concern</h6>
                                <h4 style={{ 'line-height' : '25px' }}><a href="" >Balancing Doshas with Nadi Pariksha</a></h4>
                            </div>
                       </div>
                       <div class="Related-blog-section">
                            <div class="Related-section-image">

                            </div>
                            <div class="Related-section-content">
                                <h6>Doctor Consultation</h6>
                                <h4 style={{ 'line-height' : '25px' }}><a href="" >Unclogging Stuffy Nose with Ayurveda </a></h4>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Blog Category</h6>
                                <h4 style={{ 'line-height' : '25px' }}><a href="" >Balancing Doshas with Nadi Pariksha</a></h4>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image">

                            </div>      
                            <div class="Related-section-content">
                                <h6>Blog Category</h6>
                                <h4 style={{ 'line-height' : '25px' }}><a href="" >Balancing Doshas with Nadi Pariksha</a></h4>
                            </div>
                       </div>



                   </div>



            </div>

            </div>


           </div>
         </div>
       
         {/* Content Section Close Here*/}
   
       </div>
       
         <Footer></Footer>
   


</>

         );
    }
}
 
export default BlogInnerContent;