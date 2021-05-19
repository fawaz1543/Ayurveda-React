import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Footer from './footer';

  function ArthritisBlog () {
    const history=useHistory()

        return (
          
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row cervical-blog-banner">
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
                <li><a onClick={()=>{history.push('/')}} class="active">Don’t Let Arthritis Get Your Grip</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Don’t Let Arthritis Get Your Grip</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-images/Arthritis-blog-img.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>

                       <p>
                      Have you ever dropped a plate not because it is heavy but because your hand just suddenly switched itself off? Since rheumatoid arthritis can attack every joint in your body, getting your hands off of this disease is impossible. There are four joints in each finger and none of them are safe if rheumatoid arthritis starts wreaking havoc. 
</p>
                       <p>
There are two ways that arthritis can make you lose your grip. First is osteoarthritis of the thumb where a patient may feel a constant ache in the thumb or a sharp pain everytime they use it. A thumb is always needed for a person to grip on something, and if this finger loses its function, your remaining fingers will have a hard time trying to fill in for the injured one. Second is simply the swelling of the 27 joints in each hand. The pain when holding or picking up something with a swollen hand is utterly unbearable. 
</p>

                       <p>Losing your grip is one parameter of how severe arthritis is affecting your body because the hands are a major part of your daily function. Grip strength is a sign of how well your body is aging. As people approach their 30s, they will start to lose muscle mass, strength, and grip. Arthritis, however, will accelerate the bone’s aging process if not treated right away. 
</p>

<p>
If you start feeling pain in your fingers, thumb, and wrist, even without signs of swelling, tenderness, redness, or disfigurement, let the doctor know about your condition right away. This will help you prevent the arthritis from getting worse and thwart potential disabilities. 
</p>





                       <h5><b>Grasping on your grip strength </b></h5>
                      
                      <p>
Combining Ayurvedic treatments with other forms of therapies can mitigate symptoms of arthritis occuring in your hands, especially in its early stages. Dhanyamla Dhara, for example, is an Ayurvedic treatment for arthritis that uses a concoction of cereals and herbal medicines to pour all over the body. Another type of Ayurvedic treatment is Elakizhi where boluses are filled with herbs and oils to massage the affected areas of the body, i.e. back, elbows, knees. 
</p>

<b>Read: Ayurvedic Treatments for Arthritis & Joint Pain 
(https://aesmc.com/ayurveda/arthritis-and-joint-pain)
</b>
<br/>

                      <p>
Stress balls are one of the grip toys that arthritis patients can use to treat joint pains and get their hands moving. These kinds of toys like rubber bands, ring bands that you can squeeze and stretch, and stress balls enable the patients to stretch their muscles and joints in different angles. There are also hand exercises that can strengthen your hand joints too.  
</p>





                        <h5><b>Treating joint pains with Ayurveda </b></h5>


                        <p>Adam & Eve Ayurveda provides natural remedies for arthritis and joint pains here in Abu Dhabi. Our therapists use specific massage techniques that can improve circulation and regulate the blood flow to the joints in order to reduce pain brought by arthritis. Moreover, our Ayurvedic doctor will suggest the best diet and lifestyle modifications that can prevent further joint pains. 
</p>


<p>
Visit us at Pink Building, Mezzanine & 01 Floor, Next to Royal Rose Hotel, Electra Street, Abu Dhabi, UAE. Or Book an Appointment by calling us at +971 2 676 7366. 
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
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/don’t-let-arthritis-get-your-grip')}} >Don’t Let Arthritis Get Your Grip
</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-backpain">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/causes-of-back-pain-and-how-can-ayurveda-help')}} >Causes of Back Pain and How Can Ayurveda Help?


</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-abhyangam">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/abhyangam-more-than-an-oil-massage')}} >Abhyangam : More than oil massage
</a></h5>
                            </div>
                       </div>




                  
                   <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/solving-cervical-spondylosis-with-ayurveda')}} >Solving Cervical Spondylosis with Ayurveda
</a></h5>
                            </div>
                       </div>



                       <div class="Related-blog-section">
                            <div class="Related-section-image-Nadipariksha">

                            </div>
                            <div class="Related-section-content">
                                <h6>Heath Concern</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold' }}><a onClick={()=>{history.push('/blog/balancing-doshas-with-nadi-pariksha')}} >Balancing Doshas with Nadi Pariksha</a></h5>
                            </div>
                       </div>
                       <div class="Related-blog-section">
                            <div class="Related-section-image-Sinusitis">

                            </div>
                            <div class="Related-section-content">
                                <h6>Doctor Consultation</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/unclogging-stuffy-nose-with-ayurveda')}} >Unclogging Stuffy Nose with Ayurveda </a></h5>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a onClick={()=>{history.push('/blog/wash-out-stress-and-anxiety-with-shirodhara')}} >Wash Out Stress and Anxiety with Shirodhara
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
 
export default ArthritisBlog;