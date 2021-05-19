import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Footer from './footer';

  function AbhyangamBlog () {
    const history=useHistory()

        return (
          
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row abhyangam-blog-banner">
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
                <li><a onClick={()=>{history.push('/')}} class="active">Abhyangam : More than an oil massage</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Abhyangam : More Than An Oil Massage</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-images/Abhyangam-blog-img.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>



                        
                       <p> Abhyangam is Ayurveda’s version of oil massage and is one of the sought after natural therapies of people who want to calm their nerves and rejuvenate their bones and muscles.</p> 
                    
                       <p> In order for you to experience the best results, the treatment may start with a consultation with the Ayurvedic doctor. This will help you identify your Dosha constitution and health concerns before choosing the massage sneha or oil that is best for your body. The different kinds of oils run from Ashwagandha oil, turmeric-based oil, sesame oil, to almond oil and more. However, the most common massage oils used in treatments are coconut oil for a cooling effect which is best during summer and sesame oil to induce warmth in your system during winter.  
</p>

                       <p> On the bright side, since every Ayurvedic oil used in abhyangam is organic, you can pick the massage oil you want on every visit and still experience tremendous relaxation. 

</p>



                       <h5><b>Abhyangam is Self-Love </b></h5>
                      
                      <p>The body can only get tired and exhausted so much until you will feel backaches, joint pains, muscle stiffness, and more. Don’t forget that it also needs to relax and be rejuvenated every once in a while. If not, your body will give signals saying that you need to lie down for a while, relax, and breathe. </p>

                      <p>Going for abhyangam to treat yourself during your day off is one way of saying that you love every part of your body. Sneha is a Sanskrit word for “oil” and can also be translated to “love.” So, in a way, this oil massage is treating your body with a much-deserved break and showing yourself some love. </p>



                        <h5><b>Benefits of Abhyangam </b></h5>


                        <p>This Ayurvedic oil massage is not only side effect-proof— it holds a lot of benefits too! </p>
                        <ul>
                            <li>It releases toxins from the body </li>
                            <li>Calms the nerves</li>
                            <li>Reduces anxiety </li>
                            <li>Improves sleep </li>
                            <li>Promotes circulation and mental alertness</li>
                            <li>Gives nourishment to skin and tissues </li>
                            <li>Softens, smoothens, and tones the skin </li>
                            <li>Lubricates joints</li>
                            <li>Strengthens muscles</li>
                        </ul>

                   <p>If you want to maximize the health benefits that you can get from this Ayurvedic full body massage, you need to seek help from the best Ayurvedic doctors and therapists around you. Adam & Eve Ayurveda will give you the best Ayurvedic massage treatment in Abu Dhabi. Our therapists know how to expel those toxins out and relax your muscles to give you the rest your body needs. </p>

                   <p><b>Visit us at Pink Building, Mezzanine & 01 Floor, Next to Royal Rose Hotel, Electra Street, Abu Dhabi, UAE. Or Book an Appointment by calling us at +971 2 676 7366. </b></p>

                
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
 
export default AbhyangamBlog;