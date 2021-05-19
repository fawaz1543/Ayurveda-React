import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function HeathHacktwo () {
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
                      <img src="images/yoga-blog-content.jpeg" style={{ 'width':'100%' }} />
                      <br/><br/>


    <ul>
        <li class="blog-one-latest"><b>Pranayama (Breathing Exercise) </b>
            <ul>
                <li>One type of Pranayama is the deep diaphragmatic breathing exercise. It helps you increase your oxygen intake by clearing carbon dioxide in the lungs. This exercise allows you to massage your internal organs and improves digestion. 
</li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Swedana (Sweating) </b>
            <ul>
                <li>There is no better way of detoxification than through the largest organ of your body: the skin. Engaging in various exercises, sports, taking regular sessions of steam and sauna, and other activities that will make your sweat glands active will sweat the toxins out of your body. Don’t forget to rehydrate and drink plenty of water after every activity. </li>
            </ul>
        </li>
        <li class="blog-one-latest"><b>Do not stress eat </b>
                <ul>
                    <li>Emotional eating will take your mind off your plate which will lead to not just overeating, but also poor digestion, and dissatisfaction. Before looking at the menu, take a breather for a few minutes until you have exhaled all the bad emotions and other stress factors. 
</li>
                </ul>
        </li>

        <li class="blog-one-latest"><b>Practice Yoga </b>
            <ul>
                <li>Yoga and other forms of exercises can help you release endorphins and serotonin that will make you feel good after. Practicing yoga and doing other exercises are optimal for your overall well-being. </li>
            </ul>
        </li>

        <li class="blog-one-latest"> <b>Drink plenty of water </b>
            <ul>
                <li>
                Filling yourself up with glasses of water everyday will increase the body’s metabolic rate which helps in burning calories.  

Want to slim down naturally? Click here: Ayurvedic Slimming Therapies https://aesmc.com/ayurveda/slimming-therapies</li>
            </ul>
        </li>

     <li class="blog-one-latest"> <b>Use your 6 tastes in every meal </b>
            <ul>
                <li>
                According to Ayurveda, you should activate your six tastes in every meal. You can do this by simply spicing up your meal with turmeric, cinnamon, coriander, pepper, ginger, and more.</li>
            </ul>
        </li>



        <li class="blog-one-latest"> <b>Eat an early and light dinner </b>
            <ul>
                <li>
                Ayurveda recommends that you eat your dinner before 8 PM so that your body can focus on giving you a good night’s sleep rather than digesting heavy amounts of food in your tummy. 
                </li>
            </ul>
        </li>


<li class="blog-one-latest"><b>Oil Pulling</b>
    <ul>
        <li>For 20 minutes, swish a generous amount of coconut oil or any natural oils in your mouth and spit it out right after. This is one method of detoxification and naturally brightening your teeth. 

</li>
            </ul>
   
</li>



<li class="blog-one-latest"><b>Drink tea, not coffee</b>
    <ul>
        <li>Coffee has high caffeine content which is harmful for your health. Instead, get your daily caffeine dose from tea. It is a light stimulant and has other health benefits that are absent in coffee.    </li>
            </ul> 
</li>



<li class="blog-one-latest"><b>Chirata benefits </b>
    <ul>
        <li>Chirata is a bitter-tasting medicinal herb that is popularly used in India to treat Malaria. Here are the other benefits of Chirata:
         <ul>
             <li>Worm infestations</li>
             <li>Fever</li>
             <li>Malaria</li>
             <li>Upset stomach</li>
             <li>Loss of appetite</li>
             <li>Constipation</li>
         </ul>
    </li>
    </ul> 
</li>

    
</ul>
<b>Make sure to follow Adam & Eve Ayurveda’s social media accounts for more health tips that you can do at home! </b>

                
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
 
export default HeathHacktwo;