import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Footer from './footer';

  function BackpainBlog () {
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
                <li><a onClick={()=>{history.push('/')}} class="active">Causes of back pain and how can ayurveda help</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Causes of back pain and how can ayurveda help</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-images/backpain-blog-img.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>
                     
                       <p>
                      Back pain is a sign that you’ve worked your fingers to the bone and gone the extra mile. It is also the body’s way of saying that you should stop and rest because: a. You’re adulting, b. You’re a full-fledged adult, c. You did too much physical work, or d. You have poor posture. 
</p>
                       <p>
Sometimes, back pain will give you a few light jabs of inconveniences where you can still stand and function with lesser efforts. But there will be days that back pain can be grueling and unbearable that even getting out of your bed is torturous. Drinking pain relievers is not enough and you are running out of solutions–– often, you don’t even know what caused it. The pain doesn’t want to leave and your back is against the wall. 
</p>

                       <p>
You can feel various back pain sensations, i.e., burning, stabbing, and shooting, that may differ depending on the cause. There’s a lot of factors that may lead to back pain: from bad posture, to pinched nerve, or slipped disc. Here are some of the reasons why you are having burdensome back pains: 

   </p>

   <ul>
    <li>Lifting heavy objects</li>
    <li>Being overweight</li>
    <li>Smoking</li>
    <li>Wearing high heels</li>
    <li>Not exercising</li>
    <li><b>Slipped disc</b> - the soft tissue inside the discs located between the joints comes out </li>
    <li><b>Bulging disc</b>  - the same soft tissue inside the discs protrudes and presses a nerve root</li>
    <li><b>Degenerative disc disease</b>  - the discs wear and tear, which is common in people with old age  </li>
    <li><b>Spinal stenosis</b>  - happens to people 60 years old and above. The narrowing of the spinal canal will add pressure on the spine and nerves </li>
    <li><b>Spondylolisthesis</b>  - this happens when a bone in the spine slips out of place</li>
    <li><b>Sprains and strains</b>  - this is brought by injuries involving muscles, ligaments, and tendons</li>
    <li><b>Spasms</b>  - a sports-related injury, this occurs when muscles and tendons in your lower back are torn due to extreme physical activities</li>
    <li><b>Arthritis / Osteoarthritis</b>  - a disease that causes joint swelling, inflammation, and stiffness </li>
    <li><b>Scoliosis</b>  - an inborn disease that cause the curvature of the spine </li>
   </ul>

    Whether you got your back pain from lifting heavy objects, spasms, or slipped disc, Ayurveda has natural treatments that will get the pain off your back. Some of these are: 
	<ul>
     <li><b>Therapeutic massage</b> - reduces muscle stiffness to regain its flexibility and allows the affected muscles to achieve their full range of motion</li>
     <li><b>Lepam and Bandage</b> - relieves pain and inflammation due to arthritis</li>
     <li><b>Kativasthi</b> - Heated herbal oils will be placed on your lumbar area for a specific number of minutes to warm your back and lubricate your joints, improve blood circulation, and treat slip discs.</li>
    </ul>

 At Adam & Eve Ayurveda, we got your back. We treat health concerns like back pain through natural methods. A 7-day program with these treatments will surely help you relieve back pain. Our Ayurvedic doctors will determine its root causes and apply these therapies to completely get rid of your back pain and give your body a natural and holistic experience. 



                
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
 
export default BackpainBlog;