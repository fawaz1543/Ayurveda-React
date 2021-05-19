import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';
import ServiceForm from './service-form';
import { useHistory } from 'react-router-dom';

function ShirodharaBlog () {
const history=useHistory()

        return (
          
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row shirodhara-blog-banner">
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
                <li><a onClick={()=>{history.push('/Blog')}} style={{ 'color' : '#fff' }} >Blog</a></li>
                <li><a  class="active">Wash Out Stress and Anxiety with Shirodhara</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Wash Out Stress and Anxiety with Shirodhara</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-Title/Blog-Shirodara.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>

                    
                        <p>
                        Shirodhara is claimed to be one of the most rejuvenating treatments of Ayurveda that focuses on the head alone. From the two Sanskrit words shiro(head) and dhara(flow), placing them right next to each other infers a continuous pouring of warm Ayurvedic oil for a specific time period. The oil will penetrate into the nervous system as it flows down onto the forehead and scalp, regulating the pituitary gland’s functions and stimulating the hypothalamus to induce sleep. It is a method that mainly relieves the clients’ headaches, stress, insomnia, and other head-related problems. 
                        </p>

                        <h5><b>Procedure</b></h5>
	                    <p>With eyes covered, the patient lies down on a supine position on the Shirodhara massage table and the therapist will perform a head massage to the patient to warm them up for the procedure. The therapist will then pour the Ayurvedic oils from the Shirodhara pot onto the patient’s forehead. Then, the stream of oil will be swayed from left to right of the forehead. The entire process will last for 30 minutes with light head massages in between. An additional 30-minute rest will be given to the patient to allow the herbal oils to seep through the pores of the head.</p> 


                        <h5><b>Benefits of Shirodhara</b></h5>

                        <p>Since the procedure is performed directly on the head, Shirodhara can instantly relax your mind and relieve you of mental exhaustion. Here are other benefits of Shirodhara: </p>

                        <ul>
                            <li>Reduces anxiety </li>
                            <li>Removes harmful toxins</li>
                            <li>Induces better sleeping patterns </li>
                            <li>Improves blood circulation in the head</li>
                            <li>Minimizes eye problems </li>
                       </ul>


                       <h5><b>Side effects of Shirodhara</b></h5>
                        <p>There are no known side effects of Shirodhara. However, since the massage is performed by pouring large amounts of oil onto the head repetitively, it’s important to avoid the oil from getting into your eyes. </p>

                        <h5><b>Who should not go for a Shirodhara treatment?</b></h5>
                  
                        <ul>
                            <li>Shirodhara is safe for most people but there are still a few limitations that we should observe.</li>
                            <li>People who have oil allergies </li>
                            <li>People who have severe sweating conditions </li>
                            <li>People who have abrasions on the forehead or suffering from a neck injury</li>
                            <li>Improves blood circulation in the head</li>
                            <li>Women nearing the last stage of pregnancy</li>
                       </ul>


                       <h5><b> Who should go for a Shirodhara treatment? </b></h5>
                  
                  <ul>
                      <li>People who are suffering from insomnia</li>
                      <li>People who want to relax and remove stress</li>
                      <li>People who want to slow signs of ageing </li>
                      <li>People with jet lag</li>
                      <li>People with hypertension</li>
                      <li>Women nearing the last stage of pregnancy</li>
                 </ul>



                 <h5><b>What are the post-Shirodhara guidelines? </b></h5>
                  
                  <ul>
                      <li>	Wash your hair with shampoo three times to remove oil residue </li>
                      <li>Avoid caffeine intake for a few days. Drink juice or eat fruits as a substitute </li>
                      <li>Avoid strenuous physical activities </li>
                      <li>Avoid excessive exposure to sunlight </li>
                      <li>Avoid smoking </li>
                 </ul>

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
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='/blog/don’t-let-arthritis-get-your-grip'>Don’t Let Arthritis Get Your Grip
</a></h5>
                            </div>
                       </div>


                   <div class="Related-blog-section">
                            <div class="Related-section-image-backpain">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='/blog/causes-of-back-pain-and-how-can-ayurveda-help' >Causes of Back Pain and How Can Ayurveda Help?


</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-abhyangam">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='/blog/abhyangam-more-than-an-oil-massage' >Abhyangam : More than oil massage
</a></h5>
                            </div>
                       </div>




                  
                   <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='/blog/solving-cervical-spondylosis-with-ayurveda' >Solving Cervical Spondylosis with Ayurveda
</a></h5>
                            </div>
                       </div>



                       <div class="Related-blog-section">
                            <div class="Related-section-image-Nadipariksha">

                            </div>
                            <div class="Related-section-content">
                                <h6>Heath Concern</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold' }}><a href='/blog/balancing-doshas-with-nadi-pariksha' >Balancing Doshas with Nadi Pariksha</a></h5>
                            </div>
                       </div>
                       <div class="Related-blog-section">
                            <div class="Related-section-image-Sinusitis">

                            </div>
                            <div class="Related-section-content">
                                <h6>Doctor Consultation</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='/blog/unclogging-stuffy-nose-with-ayurveda' >Unclogging Stuffy Nose with Ayurveda </a></h5>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href='blog/wash-out-stress-and-anxiety-with-shirodhara'>Wash Out Stress and Anxiety with Shirodhara
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
 
export default ShirodharaBlog;