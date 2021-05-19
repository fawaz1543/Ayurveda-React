import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function PostnatalBlog () {
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
                <li><a href="/"  style={{ 'color' : '#fff' }}>Home</a></li>
                <li><a href="/Blog"  style={{ 'color' : '#fff' }}>Blog</a></li>
                <li><a  class="active">Postnatal Care with Ayurveda 

</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>
                          Postnatal Care with Ayurveda 
</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/postnatal-banner.png" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Postnatal period starts after the mother gives birth to a child. It refers to the 6-week stage where the mother’s body, hormone levels, uterus size, etc. returns to a non-pregnant state. In this phase, both the mother and the newborn baby are in a state of fragility. While the mother is largely recovering, the baby is still frail. That is why their well-being is of paramount importance in Ayurveda. Childbirth does not only affect the mother’s physical health but her psychological health as well. Aside from physical discomforts like cramps, vaginal discharge, and hormonal changes, a mother who has recently given birth may experience lack of sleep, anxiety, and depression. 
 
</p>

<p>
Incorporating an Ayurvedic approach to postpartum care is a natural and holistic treatment that can kickstart the mother’s recovery. One treatment is Abhyanga, or whole body massage using medicated herbal oil. It can strengthen the muscles, joints, ligaments, and the whole body while increasing blood circulation and relieving stress. Consult an Ayurvedic doctor to know the type of oil that is fit for your body constitution and for other medical advice. Start doing abhyanga at home after 5 days if you have had a normal delivery. On the other hand, for C-section delivery, you need to let your wound heal for two weeks before beginning with the massage. 
</p>


<p>
Ever notice someone who just recently gave birth still has a tummy of a 7-month pregnant mom? That is because the physical transformations during pregnancy do not just snap back to where they were before the mother got pregnant. During pregnancy, the tummy, uterus, and abdominal walls stretch as big as the baby inside. However, after giving birth, the size of these body parts and the fats that developed during childbearing do not contract or vanish. One Ayurvedic trick to get them back in place is belly wrapping. It will help in toning the abdominal muscles, support the womb and the internal organs, lessen back pains, and promote better posture. 
</p>


<p>
For lactation, it is highly advised to go vegetarian and avoid eating foods with preservatives and spicy because these foods may decrease the secretion. Do not expose the body to pollution because the dirt might be transferred to the baby. Ghee and oils should be taken in adequate amounts to improve digestion, facilitate bowel movements, nourish the traumatized tissues, and subdue the vitiated Vata Dosha, which is aggravated during the process of childbirth. 
</p>

<p>
The Ayurvedic doctors and therapists at Adam and Eve Ayurveda will help mothers get through the postnatal stage healthy and safe. Our treatments will help in providing remedy for stress, fatigue, and other effects of childbirth. 
</p>


<p>
Visit our Ayurveda center in Abu Dhabi to get started with your postnatal care today!</p>

<img src="images/Center-image.jpeg" style={{ 'width' : '100%' , 'border-radius' : '10px' }}  />
                
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
 
export default PostnatalBlog;
