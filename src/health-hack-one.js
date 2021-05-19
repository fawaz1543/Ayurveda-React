import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function HeathHackone () {
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
                <li><a  class="active">10 Ayurvedic Health Hacks You Should Try</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>10 Ayurvedic Health Hacks You Should Try</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/10-ayurvedic-hacks-one-blog.png" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Approximately 5,000 years ago, way before the advent of modern medical practice, thousands 
                        of people have already been following the core of Ayurvedic practices to stay healthy and 
                        prevent further illnesses. They managed to keep themselves alive without the assistance of 
                        vaccines, laboratory-made medicines and the like. That is because they are already healthy,
                         their doshas are balanced, and their mind, body, and soul are aligned with nature because of
                          Ayurveda. </p>


<p>Here is a list of 10 effective natural health tips, hacks, and lifestyle recommendations that are proven and tested by both science and time. </p>
	<ul>
        <li class="blog-one-latest"><b>Tongue Scraping</b>
            <ul>
                <li>Did you know that plaque and bacteria hinder your taste buds to distinguish the real taste of your 
                    food? This will lead to more spoonfuls of salt or sugar on your food, and will trick you to overeat.
                     Scraping your tongue regularly will allow you to taste the actual flavor of your food so you can go
                      easy on the condiments.</li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Self-Massage </b>
            <ul>
                <li>Massage is best when done by an Ayurvedic therapist. But if the spa is too far, you can still do it at home by none other than yourself.
                    <ul>
                        <li>Get a coconut oil or any massage oils of your liking </li>
                        <li>Put a generous amount of oil on your palm and apply it from the scalp all the way down to your toes </li>
                        <li>Massage your joints in circular motion and apply long strokes on the other parts of your body like arms, legs, and back. </li>
                        <li>Massage your abdomen in a clockwise manner </li>
                        <li></li>
                    </ul>
                </li>
                <li>To know more about self-massage or Abhyangam, click here: Abhyangam: More Than an Oil Massage https://aesmc.com/ayurveda/abhyangam-more-than-an-oil-massage</li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Your largest meal should be at lunchtime </b>
                <ul>
                    <li>Eat light meals for dinner for easier digestion and the largest meal of the day
                        should be eaten during lunch. Ayurveda believes that when the sun reaches its highest point 
                        in the sky (12 - 1pm), the digestive fire is at its strongest.</li>
                </ul>
        </li>
        <li class="blog-one-latest"><b>Chew your food slowly </b>
            <ul>
                <li>Try dissolving your food properly starting with your mouth. Doing this won’t give the stomach a hard time digesting the food you swallow. By chewing and eating as
                     slowly as possible, the stomach will have the luxury of time to signal your brain that you are full without
                      having to devour more amounts of food. </li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Drink ginger tea </b>
            <ul>
                <li>Drinking 2 to 4 cups of ginger tea a day will help prevent bloating and stomach cramps. Ginger helps in speeding up metabolism for a faster breakdown of food.</li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Improve your skin texture naturally </b>
            <ul>
                <li>Get one teaspoon of sandalwood powder, add one teaspoon of turmeric powder, then a few drops of rose water. Mix them all together to create a paste and use it as a face mask. Do this regularly to get rid of acne and blemishes! </li>
            </ul>
        </li>
        <li class="blog-one-latest"> <b>Go to bed early </b>
            <ul>
                <li>
                Hitting the sheets early gives you the opportunity to have 7 to 9 hours of sleep, wake up early, and have more energy the next day. Getting enough sleeping hours will keep you focused, attentive, and vigorous. 
                </li>
            </ul>
        </li>

     <li class="blog-one-latest"> <b>Avoid junk and extra spicy foods</b>
            <ul>
                <li>
                Intake of junk foods and extra spicy foods has a negative effect on your skin’s health. Such foods cause acne, hair loss, and more. Maintain a healthy skin by loosening up a bit on these types of foods. 
                </li>
            </ul>
        </li>



        <li class="blog-one-latest"> <b>Tulsi benefits </b>
            <ul>
                <li>
                Tulsi or Basil offers plenty of health benefits. You can put it on your dishes too and make them more tasty!
                </li>
                <li>Benefits of Basil:
                    <ul>
                        <li>Boosts cardiovascular health</li>
                        <li>Cures respiratory diseases</li>
                        <li>Promotes smooth digestion</li>
                        <li>Improves function of liver</li>
                        <li>Manages blood sugar level</li>
                        <li>Strengthens immunity</li>
                    </ul>
                </li> 
            </ul>
        </li>


<li class="blog-one-latest"><b>How to boost your immunity this winter </b>
    <ul>
        <li>Get powdered variants of these herbs:
            <ul>
                <li>Giloy</li>
                <li>Tulsi</li>
                <li>Mulethi</li>
                <li>Chilata</li>
                <li>Take a half spoon of each and boil them in a pot with a glass of water. Let the concoction cool and drink.
</li>
            </ul>
        </li>
    </ul>
</li>

    </ul>
    

<b>Stay tuned for more Ayurvedic health tips by following Adam & Eve Ayurveda’s social media accounts.</b>

                
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
 
export default HeathHackone;