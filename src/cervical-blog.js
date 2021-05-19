import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceForm from './service-form';
import Footer from './footer';

  function CervicalBlog () {
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
                <li><a onClick={()=>{history.push('/')}} class="active">Solving Cervical Spondylosis with Ayurveda</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Solving Cervical Spondylosis with Ayurveda</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/Blog-Title/Blog-Cervical.jpg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        
                       <p>  Cervical spondylosis is a neck-related problem that involves your cervical spine and everything in it. Also called neck arthritis or cervical osteoarthritis, this condition is very usual to happen to everyone as it is caused by the wear and tear of the disks between the cervical spine. </p> 
                    
                       <p> Our neck is part of the backbone-- a long and flexible column protecting the spinal cord which extends from the neck to the other parts of the body. The part of this backbone or spinal column resting on the neck region is called the cervical spine, which consists of seven bones or vertebrae. In between these bones are intervertebral discs that act as shock absorbers-- or fibrocartilaginous cushions-- that prevent the vertebrae to graze one another during motion or activity.   </p>

                       <p> However, these cushions do not last a lifetime and will start to wear and tear as we age and will undoubtedly lead to other painful complications. One of which is cervical spondylosis, a condition which is a result of prior neck conditions, i.e. bone spurs, dehydrated spinal discs, and herniated discs.</p>

                       <p>Bone spurs are extra bones spawned by the body’s efforts to make the spine stronger. These extra bones may touch and press the spinal cord and other sensitive parts of the spine which can cause neck pain. On the other hand, spinal discs will begin to dry out as we start aging and will lose their ability to cushion the spinal vertebrae. Herniated discs happen when the internal cushion of the discs protrudes from the outer section of the disc. These protrusions will touch the delicate parts of the spine too.</p>

 

                       <h5><b>Not as spine-tingling as it sounds</b></h5>
                      
                      <p>The terms cervical spondylosis or arthritis of the neck may sound frightening and might worry anyone who feels that they may have it in the future. However, it can be cured without seeking help from a surgeon. Just by stretching, exercise, and massages, people with cervical spondylosis can say goodbye to their neck pains. </p>

                      <p>
One way to get the pain off your neck is through Ayurveda. It offers a lot of natural treatments that utilize herbs, medicated oil, and massages. The first treatment, Abhyangam is done by massaging the muscles and the affected area with medicated oil to reduce muscle stiffness. Podikzhi is a treatment that can also reduce the muscle stiffness, but at the same time, it can also decrease muscle soreness. The Ayurvedic treatment that can fast-track the neck’s healing process is Pizichil where oil is poured onto the body while being massaged. Nasyam is a relaxing treatment that instills medicated oils into the nose. By inducing relaxation to the head, neck pains will ease. </p>



                        <h5><b>Stick your neck out</b></h5>


                        <p>If neck pains persist, you might want to stick your neck out and seek the help of medical professionals. They know the right natural treatments that will solve your neck issues. Abhyangam, pizichil, podikzhi, and nasyam are just some of the Ayurvedic treatments that our doctors can use. Visit Adam & Eve Ayurveda to learn more about your cervical spondylosis and cure it right away. </p>




                
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
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="blog/don’t-let-arthritis-get-your-grip" >Don’t Let Arthritis Get Your Grip
</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-backpain">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="/blog/causes-of-back-pain-and-how-can-ayurveda-help" >Causes of Back Pain and How Can Ayurveda Help?


</a></h5>
                            </div>
                       </div>




                   <div class="Related-blog-section">
                            <div class="Related-section-image-abhyangam">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="/blog/abhyangam-more-than-an-oil-massage">Abhyangam : More than oil massage
</a></h5>
                            </div>
                       </div>




                  
                   <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="/blog/solving-cervical-spondylosis-with-ayurveda">Solving Cervical Spondylosis with Ayurveda
</a></h5>
                            </div>
                       </div>



                       <div class="Related-blog-section">
                            <div class="Related-section-image-Nadipariksha">

                            </div>
                            <div class="Related-section-content">
                                <h6>Heath Concern</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold' }}><a href="/blog/balancing-doshas-with-nadi-pariksha"  >Balancing Doshas with Nadi Pariksha</a></h5>
                            </div>
                       </div>
                       <div class="Related-blog-section">
                            <div class="Related-section-image-Sinusitis">

                            </div>
                            <div class="Related-section-content">
                                <h6>Doctor Consultation</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="/blog/unclogging-stuffy-nose-with-ayurveda"  >Unclogging Stuffy Nose with Ayurveda </a></h5>
                            </div>
                       </div>

                       <div class="Related-blog-section">
                            <div class="Related-section-image-Shirodhara">

                            </div>      
                            <div class="Related-section-content">
                                 <h6>Ayurveda</h6>
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold'  }}><a href="/blog/wash-out-stress-and-anxiety-with-shirodhara" >Wash Out Stress and Anxiety with Shirodhara
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
 
export default CervicalBlog;