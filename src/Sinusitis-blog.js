import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';
import ServiceForm from './service-form';
import { useHistory } from 'react-router-dom';

function SinusitisBlog () {
  const history=useHistory()

        return (
          
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row sinus-blog-banner">
               <span>Blog</span><br />
               {/* <ul style="display:flex;list-style-type:none;font-weight:bold;color:#ffffff;">
                     <li>Home</li> &nbsp;/&nbsp;
                     <li>About us</li>
                   </ul> */}
           </div>   
           {/* Banner Section Ends Here*/}
   
         {/* Content Section Starts Here*/}
         <div className="container" style={{marginBottom: '20px',  'width' : '100%' }}>
          
          <div class="row" style={{ 'margin': '20px 0px 0px 0px' }}>
            <ul class="breadcrumb">
                <li><a onClick={()=>{history.push('/')}} style={{ 'color' : '#fff' }}>Home</a></li>
                <li><a onClick={()=>{history.push('/Blog')}} style={{ 'color' : '#fff' }}>Blog</a></li>
                <li><a  class="active">Unclogging Stuffy Nose with Ayurveda  </a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Unclogging Stuffy Nose with Ayurveda  </b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-Title/Blog-Title-Sinusitis.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        The head contains four pairs of sinuses: 
                        <ul>
                            <li><b>Frontal Sinsuses</b> -  which can be found on the forehead </li>
                            <li><b>Ethmoid Sinuses</b>  -  which are located between the eyes</li>
                            <li><b>Sphenoid Sinuses</b> -  which are placed behind the nose</li>
                            <li><b>Sphenoid  & Maxillary Sinuses </b> -   which are held by the cheekbones.</li>
                        </ul>
                        </p>

                        <p>
                        Sinuses have walls that are filled with a thin layer of mucus to keep the tissue and the
                         interior of the nose moist. The mucus also traps dirt, dust, pollutants, and micro-organisms 
                         that enter our noses as we inhale air. Regular mucus drainage is crucial for sinuses to 
                         function properly. But if our sinuses are blocked, sinusitis will occur. 
                        </p>



                        <p>Ayurvedic belief states that the nose is the gateway to the brain and consciousness,
                             and it is where the Prana (life force) enters before it spreads all throughout the 
                             body. In order for Prana’s even distribution, an uncongested breathing must be maintained. 
                             Otherwise, certain health issues, i.e. Sinusitis will be felt. The symptoms of sinusitis
                              resemble that of “Suryavarta,” a condition involving the Vata and Kapha Doshas. </p>

 
                    <p>There are herbs, vegetables, and other organic means of treating unclogging stuffy nose caused 
                        by sinusitis. Nasyam is one Ayurvedic treatment that can relieve sinusitis symptoms and helps
                         in its faster healing. </p>

                   
                   <h5><b>Nasyam Treatment</b></h5>          

                   {/* <img src="images/pulse.jpeg" style={{ 'width':'100%' }} />
                   <br/><br/> */}
                    <p>
                    This treatment starts off with a face massage using medicated oil. The Ayurvedic doctor will 
                    perform strokes that will soothe the sinuses and the pressure points of the face. Then it is 
                    followed by a facial steam in preparation for the Nasyam treatment. For the most awaited part,
                     3 to 5 drops of medicated oil will be instilled in each nostril. 
                    </p>

                    <p>
                    Nasyam cleans toxins accumulated in the head, nose, and throat. It has been used for nasal passage
                     lubrication, voice improvement, and to clear the vision. Through the lubrication of nasal passages,
                      the air we breathe will be moist as it passes through the nose. 
                    </p>


                    <h5><b>Steam Treatment</b></h5>

                    {/* <img src="images/pulse.jpeg" style={{ 'width':'100%' }} /> */}
                    <br/><br/>
                    <p>Another treatment is steam. Although it won’t cure your sinusitis, it can make you feel better.
                       Sinusitis is a condition that usually lasts for weeks and a doctor’s help is not commonly
                       needed to cure it. One extremely helpful home remedy that is done by many is steam. Just boil
                        a pot of water, take it off the stove and start inhaling its steam. Inhaling warm, moist air
                         will help decongest the nasal passages, allowing the patient to breathe freely. The mucus in 
                         the throat and lungs will loosen up, relieving the inflamed blood vessels in the nose. 
                     </p>

                
                   <p>Ginger and turmeric are vegetables that have abundant anti-inflammatory properties and are rich 
                      in anti-oxidants. Drinking ginger or turmeric tea will unclog nasal passages and relax sinus pressure. 
                      Ayurveda uses medicated oils and massages that can clear clogged sinuses that are totally safe and 
                     have no side effects. Adam & Eve Ayurveda in Abu Dhabi provides Nasyam treatment that can decongest
                      nasal passages and allow people to relish the fresh air that was blocked by sinusitis.   
</p>





 




                
                     </div>
                 </div> 
             

               
                 <div class="Related-blogs">
                   <div class="Related-blog-title">
                    <h5><b>Related Blogs</b></h5>
                   </div>

                   <div class="Related-blog-outline">


                   <div class="Related-blog-section">
                            <div class="Related-section-image-arthritis">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/don’t-let-arthritis-get-your-grip')}} >Don’t Let Arthritis Get Your Grip
</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-backpain">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/causes-of-back-pain-and-how-can-ayurveda-help')}} >Causes of Back Pain and How Can Ayurveda Help?


</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-abhyangam">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/abhyangam-more-than-an-oil-massage')}} >Abhyangam : More than oil massage
</a></h5>
                            </div>
                       </div>




                  
                   <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/solving-cervical-spondylosis-with-ayurveda')}} >Solving Cervical Spondylosis with Ayurveda
</a></h5>
                            </div>
                       </div>



                       <div class="Related-blog-section">
                            <div class="Related-section-image-Nadipariksha">

                            </div>
                            <div class="Related-section-content">
                                <h6>Heath Concern</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold' }}><a onClick={()=>{history.push('/balancing-doshas-with-nadi-pariksha')}} >Balancing Doshas with Nadi Pariksha</a></h5>
                            </div>
                       </div>
                       <div class="Related-blog-section">
                            <div class="Related-section-image-Sinusitis">

                            </div>
                            <div class="Related-section-content">
                                <h6>Doctor Consultation</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/unclogging-stuffy-nose-with-ayurveda')}} >Unclogging Stuffy Nose with Ayurveda </a></h5>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/wash-out-stress-and-anxiety-with-shirodhara')}} >Wash Out Stress and Anxiety with Shirodhara
</a></h5>
                            </div>
                       </div>

                      <div class="row">
                          <div class="col-md-12" style={{ 'padding' : '10px 30px 30px 30px' }}>
                          <ServiceForm></ServiceForm>
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
 
export default SinusitisBlog;