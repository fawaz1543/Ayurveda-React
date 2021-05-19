import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function PanchakarmaBlog () {
  const history=useHistory()
        return (
            <>
            <div className="container-fluid">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
   
           {/* Banner Section Starts Here*/}
           <div className="row Nadipariksha-blog-banner">
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
                <li><a  class="active">Panchakarma: Five actions with one goal</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Panchakarma: Five actions with one goal</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Panchakarma 757x322.png" style={{ 'width':'100%' }} />
                      <br/><br/>
                     <p> Panchakarma is an in-depth <a onClick={()=>{history.push('/https://www.aesmc.com/ayurveda/ayurveda-consultation')}} style={{ 'color' : '#09f' }}>Ayurvedic treatment</a> that cleanses and detoxifies the body. It is one of Ayurveda’s
                          therapies that have made waves around the world as an effective relaxation inducer to the mind and body. However, 
                          if you seek to dive deeper into the serene ocean of natural health and wellness that is Ayurveda, one therapy that 
                          you will encounter is Panchakarma, a series of Ayurvedic treatments that aims to free your body of toxins, negative
                           energy, stress, and everything in between. </p>

                      <p>Pancha is a Sanskrit word that means “five” and karma means “action,” which when put together refers to five actions 
                          or the five stages that make up Panchakarma. These stages consist of rejuvenating Ayurvedic treatments each targeting
                           to balance the three doshas that flow within the body. And since it is composed of five treatments, the program
                            will take a course of five days to give the patient ample time to fully relax in between treatments. </p>

<p><b>How does Panchakarma work? </b></p>
	 <p>
     This program goes beyond the typical spa experience where massages only soothe the muscles. Panchakarma’s aim is to clear out the
      toxins that are stuck in the blood vessels, sweat glands, urinary tract, and intestines to make the body’s channels work 
      smoothly like a well-oiled machine. 
     </p>

     <p>
     Many years ago, the primordial Panchakarma was composed of herbalized oil enemas (basti), nasal irrigation (nasya), 
     therapeutic vomiting (vamana), purgation (virechana), and bloodletting (raktamokshana) which you may find hard to
      swallow and put you in a quandary. But fortunately, as time passed by, certain modifications have been made to
       prevent even the slightest discomfort to the patients. The modern Panchakarma now includes herbal oil massages,
        steam baths, cleansing enemas, nasal administration, gentle laxatives, and specialized diet. Although there were 
        changes, the powerful and long-lasting effects of the present-day “five actions” is no different from its forefather. 
     </p>

<b>What to expect during Panchakarma </b>

<p>
The procedure does not jump straight to the five actions right away–– it follows a specific process that will help the body gradually 
prepare for the principal treatments up until the physiological maintenance after the procedures. It starts off with poorva karma
 (preparation phase), pradhana karma (principal procedures), and paschat karma (post-therapy procedures).
</p>

<p>
Panchakarma of every clinic varies. But the fundamental components of the program are always present and the end goal of detoxifying both mind and body will always be in place. 
Poorva karma (preparation phase) is where the channels in the body are prepared to release the stored toxins. This process is done through drinking ginger tea, medicated herbal oils, triphala, and guggul. And when your channels are ready, the main Ayurvedic treatments that revolve around abhyangam, swedana, nasya, and bastis. After the completion of all the treatments, the success and effectiveness of paschat karma or post-therapy procedures are all up to you. Post-therapy procedures such as yoga, meditation, dosha-specific diet, abhyangam, and pranayama (breathing exercises) further nourish the body and maximize the benefits of Pancharkarma. Aside from these, staying true to the Ayurvedic way of life can fundamentally maintain the toxin-free mind-body physiology that the program helped you achieve. 

</p>



<b>Panchakarma benefits</b>
<ul>
    <li>Detoxifies the mind and body</li>
    <li>Improves digestion </li>
    <li>Restores the balance of the three doshas </li>
    <li>Boosts immune system </li>
    <li>Cleanses internal organs </li>
    <li>Fat reduction </li>
    <li>Enhances skin health </li>
    <li>De-stresses the mind and body</li>
    <li>Counters premature aging </li>
</ul>



<b>One goal</b>

<p>The five actions that patients undergo in Panchakarma bring patients to the one and only goal which is to
    provide a healthy mind and body–– free of toxins, stress, and illnesses. Adam and Eve Ayurveda offers Panchakarma which can be tailor-made according to the patients’ health condition and body constitution. </p>


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
 
export default PanchakarmaBlog;