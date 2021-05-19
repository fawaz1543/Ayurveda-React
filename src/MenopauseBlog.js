import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function MenopauseBlog () {
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
                <li><a  class="active">How to Stop Your Menopausal Symptoms 

</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>How to Stop Your Menopausal Symptoms </b></h3>
                    </div>



                    <div class="blog-content-inner">
                      <img src="images/Meno-3.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Menopause is the finale of a series of menstrual cycles of women aged 40 to 50 and above.
                         It is diagnosed after one year of no menstrual periods, which is a red light on any
                          conception in the future. It is not a disease and is rather a part of every woman’s 
                          biological cycle. Menopause is divided into two phases. Menopausal signs and symptoms will 
                          start showing up on the first phase, called  Perimenopause, which runs approximately for five years.
                           During this stretch, the patient may experience headaches, insomnia, hair loss, tender breasts, vaginal
                            dryness, weight gain, reduced bone mass, dry skin, mouth, and eyes, memory problems, painful or stiff joints, 
                            depression, anxiety, urinary tract infections, and reduced libido. The second and last phase is called Postmenopause,
                             which refers to the day after a year since your last period. During this phase, the ovaries cease to produce 
                             eggs and progesterone, and secrete less estrogen. Symptoms during these menopausal stages may make women feel
                              a little bit under the weather and affect their overall well-being.
</p>


<p>Here are Ayurvedic treatments that can mitigate the symptoms of menopause:  </p>
	<ul>


      <li class="blog-one-latest"><b>Abhyanga</b>
               <p>Abhyanga is Ayurveda’s version of oil massage and is one of the sought after natural therapies of people who want to calm their nerves and rejuvenate their bones and muscles. It can reinvigorate the nerves, remove stress, fatigue, and relieve muscle pains in the core and in the upper extremities like shoulders, back, and arms. Abyangham also increases circulation and cures insomnia. </p>
                
        </li>

        <li class="blog-one-latest"><b>Shirodhara </b>
               <p>Shirodhara is claimed to be one of the most rejuvenating treatments of Ayurveda that focuses on the head alone. From the two Sanskrit words shiro(head) and dhara(flow), placing them right next to each other infers a continuous pouring of warm Ayurvedic oil for a specific time period. The oil will penetrate into the nervous system as it flows down onto the forehead and scalp, regulating the pituitary gland’s functions and stimulating the hypothalamus to induce sleep. It is a method that mainly relieves the clients’ headaches, stress, insomnia, and other head-related problems. </p>
                
        </li>
        <li class="blog-one-latest"><b>Virechana </b>
        <p>This is a Sanskrit word for “laxative” or “purging.” In this treatment, purgative substances are taken by the patient. Virechana will clean the stomach, small intestine, liver, spleen, colon, and sweat glands. 
 </p>
                
        </li>
     

        <li class="blog-one-latest"><b>Nasyam</b>
        <p>Nasyam is a soothing Ayurvedic treatment that cleanses the head, sinuses, nose, and throat, and expels toxins that can cause illnesses. It is known for instilling drops of medicated oil into the patient’s nose which is identified as the doorway to the head. Nasyam is effective in relieving headache and migraine, sinusitis and nasal congestion, treating hoarseness of voice, tonsillitis, laryngitis, and other ENT concerns. </p>     
        </li>
     
    </ul>
    

<b>Experiencing menopausal symptoms? Adam and Eve Ayurveda is the best Ayurvedic centre in Abu Dhabi that can keep menopausal symptoms at bay. Book an appointment now and rejuvenate naturally. 

</b>

<br/><br/>

<div>
<img src="images/Center-image.jpeg" style={{ 'width': '100%' , ' border-radius': '10px' }} />
</div>


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
 
export default MenopauseBlog;

