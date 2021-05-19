import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function PsoriasisBlog () {
  const history=useHistory()
        return (
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row">
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
                <li><a  class="active">How to Prevent Psoriasis Flare-ups Naturally 

</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>
How to Prevent Psoriasis Flare-ups Naturally 
</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="../images/Psoriasis 757x322.png" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Psoriasis is an incurable, chronic, auto-immune disease that affects the skin, causing red scaly patches on the scalp, elbows, knees, and other parts of the body. These patches on the skin are the result of the rapid production of skin cells which only takes three days–– severely faster than the skin cell’s normal life cycle of one month. Due to this phenomenon, old skin cells will not be able to fall off as new skin cells grow, causing their thick scaly buildup.  
</p>

<p>
Psoriasis is a systemic disease, not just a skin disease. This means that there are various systemic comorbidities that are more likely to increase when someone has this condition. Some that are linked to psoriasis are: arthritis, conjunctivitis, obesity, type 2 diabetes, high blood pressure, cardiovascular disease, coronary artery disease, sclerosis, Crohn’s disease, depression, and more. 

</p>


<b>Causes of psoriasis
</b>

<p>
Until now, doctors have no clue what causes psoriasis or how people get the illness, although the different factors that trigger the disease have been identified. Moreover, there are some instances where people who are predisposed to psoriasis do not experience symptoms until they come across one of these triggers: skin infections, cold and dry weather, skin injury (bug bite, cut, sunburn, etc.), stress, smoking, exposure to secondhand smoke, alcohol consumption, and certain medications.  
</p>


<b>
Ayurvedic treatments for psoriasis 
</b>

<p>
There are many ways to treat the skin illness like medications, phototherapy, lifestyle, nutrition, and more. However, each treatment depends on the severity of the patient’s psoriasis and the side effects that the treatments may pose.   
</p>

<p>
Since there are no permanent goodbyes to psoriasis, doctors will result in trial and error just to find the right treatment for you. Fortunately, you can resort to natural alternative medicines such as Ayurveda that will help you mitigate the symptoms of psoriasis without worrying about any side effects.   
</p>





<p><b>Takradhara</b> - The word “takra” means buttermilk and “dhara” means stream. This treatment is similar to shirodhara 
but instead of warm oil, medicated buttermilk is poured onto the head of the patient along with a soothing head massage.
 Buttermilk is rich in lactic acid and can relieve the itchiness caused by psoriasis. Furthermore, it can counter stress
  which is a factor that can trigger symptoms of the disease. </p>

<p>
<b>Special abhyangam</b> - This treatment uses warm medicated oil to give the patient a whole body massage.
 It can help moisturize the dry itchy scaly patches caused by psoriasis. Abhyangam also relaxes the
  muscles and the mind to prevent future stress-related flare-ups. </p>

<p>
With the right herbs, you can also keep psoriasis symptoms at bay one trigger at a time. Neem, garlic, and
 onion can boost the immune system and purify the blood while turmeric can reduce inflammation, redness,
  and swelling. Ashwagandha is a medicinal herb that has anti-stress properties that can fight depression 
  and anxiety. </p>

<p>
The therapies and medicinal herbs that are suggested by Ayurveda are proven to be effective to fight psoriasis and free of side effects. </p>

<p>
If you have psoriasis, you can try and explore what remedies will best fit your current condition or not. But since there is no silver bullet yet to eradicate psoriasis, Ayurvedic therapies and tips for the disease will naturally relieve its symptoms with no side effects in sight. Adam and Eve Ayurveda will help you get the best Ayurvedic treatments for psoriasis in Abu Dhabi. 
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
 
export default PsoriasisBlog;
