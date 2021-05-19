import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Footer from './footer';

  function WinterwellnessBlog () {
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
                <li><a onClick={()=>{history.push('/')}} class="active">Illnesses to Watch Out for this Winter </a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Illnesses to Watch Out for this Winter </b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-images/Winter-wellness-blog-img.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>



                        
                       <p>
                       After six months of scorching heat, it finally rained–– marking the start of the winter season bringing in cold winds that will stay until early next year. But along with the cool breeze that dashes through every street during this season are illnesses that can freeze your plans this winter. These illnesses and diseases can hurt any part of your body, i.e. nose, throat, skin, fingers, and more. We listed the most common illnesses that you might come across with this winter. 
</p>
                    
                   <ul>
                     <li><b>Common Cold</b>  - Always remember, when it’s cold, you can get the common cold. Rhinovirus, a viral infectious agent that causes the cold, is stronger and thrives in colder temperatures and dry climate. </li>
                     <li><b>Cold Sore</b> - While hormonal changes and stress can cause the formation of blisters on or around the mouth, an impaired immune system in winter is also a big factor. In addition, exposure to strong sunlight and other illnesses can flare cold sores up. </li>
                     <li><b>Sore Throat</b> - The dry and cold air can irritate the throat, especially if you are constantly switching from warm air to cold air and vice versa.</li>
                     <li><b>Sinus Infection</b> - If your sinuses are infected, you may experience headache, runny or stuffy nose, pain in the face, post-nasal drip, sore throat, and cough. A weak immune system, seasonal allergy, or pre-existing sinus problems attract sinus infections especially during this season. </li>
                     <li><b>Achy Joints</b> - This occurs more often to people with arthritis. According to a study, 67% of people with arthritis experience worse joints pains in cold temperatures</li>
                     <li><b>Pneumonia</b> - During cold seasons, there is an abundance of bacteria and viruses that cause pneumonia. If you have this disease, you may feel fatigue, persistent dry cough, and muscle aches. </li>
                     <li><b>Migraine</b> - Prepare yourself for more prolonged headaches this winter as season changes and temperature shifts can trigger this condition. Dehydration due to cold and dry air can also lead to headaches. </li>
                     <li><b>Pertussis</b> - More commonly known as whooping cough, this bacterial infection largely affects infants and children. This disease also comes with watery eyes, runny nose, sneezing, and fever. </li>
                     <li><b>Christmas Tree Allergie</b> - You are not really allergic to Christmas Trees when you have this type of allergy, but to the accumulated dust and allergens in the tree. Having Christmas Tree allergies will give you watery and itchy eyes, runny nose, and trouble breathing. </li>
                     <li><b>Raynaud’s Disease</b> - Exposure to cold air will cause the fingers and toes to feel numb and change color when you have this disease. The reduction of blood flow in these body parts may lead to more painful spasms.  </li>
                     <li><b>Flu</b> - Anyone can get the flu any time of the year but it is more notorious during winter. Symptoms of flu include: stuffy or runny nose, sore throat, sinus pressure, fever, vomiting, headache, cold sweats, and nausea. </li>
                     <li><b>Dry Skin</b> - This is caused by low levels of humidity during winter. It often happens on exposed body parts like hands. </li>
                     <li><b>Asthma</b> - People who have asthma have a hard time dealing with the disease every winter season. The dry and cold air causes muscle spasm as it irritates the passageways which can make it more difficult to breathe.</li>
                     <li><b>Bronchitis </b> - You may get bronchitis due to non-stop coughing and overproduction of mucus. People with this disease experience shortness of breath and discomfort in the chest. </li>
                   </ul>

                
                        <h5><b>Curing winter illnesses naturally </b></h5>

                        <p>Strengthening your immune system this winter with Ayurveda will let you enjoy every frosty day of this season–– wearing your favorite jackets or slowly drifting off to a deep comfortable sleep. Here are the Ayurvedic treatments that will boost your health this winter season. </p>

                        <ul>
                          <li><b>Abhyangam</b> - moisturizes skin and regulates blood circulation </li>  
                          <li><b>Herbal Steam</b> - relieves sinus congestion, hydrates skin, and promotes collagen and elastin production </li>
                          <li><b>Nasal Detox Therapy</b> - cleanses airways and sinuses </li>
                          <li><b>Herbal Water Bath </b>- opens ups lungs for easier breathing, enhances blood flow, promotes relaxation, and stops coughs and colds</li>
                          <li><b>Detox Dhara </b>- eliminates wastes and toxins and improves immunity </li>
                        </ul>

                        <h5><b>How can Adam & Eve Ayurveda help?</b></h5>

                        <p>We have been waiting for this season to come and catching winter-related diseases will be a bummer. Adam & Eve Ayurveda 
wants everyone to have a good time without getting any illnesses by giving our patients a healthy immune system that can fight off viruses, microbes, and bacteria. Our team of Ayurvedic doctors created a 7-day Winter Wellness Program consisting of Ayurvedic treatments that will naturally optimize your physical health and help defend your body from winter-related illnesses. </p>

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
 
export default WinterwellnessBlog;