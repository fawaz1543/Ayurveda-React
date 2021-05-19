import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function HairfallBlog () {
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
                <li><a  class="active">5 Causes of Hair Loss and How to Cure it Naturally 
</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>5 Causes of Hair Loss and How to Cure it Naturally </b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/hairfall-banner.jpeg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Hair fall is the real culprit of entangled hair strands stuck in your brush everyday.
                         This is biologically normal and part of the hair cycle. However, catching a handful 
                         from time to time can be quite worrying and might need a doctor’s attention. On the 
                         other hand, there are some people who ignore their hair loss because of genetic reasons 
                         or they are just getting old. While it is common knowledge that hair fall or hair loss 
                         is sadly a part of aging and heredity, there’s a lot more factors that cause it.</p>


<p>Here are 5 reasons why you are experiencing hair fall: </p>
	<ul>

        <li class="blog-one-latest"><b>Alopecia</b>
            <ul>
                <li>Massage is best when done by an Ayurvedic therapist. But if the spa is too far, you can still do it at home by none other than yourself.
                    <ul>
                        <li><b>Androgenetic Alopecia </b></li>
                        <p>If you are a man and your temples start to unveil or the hair on your 
                            crown begins to thin out, this is a symptom of Androgenetic Alopecia, 
                            one of the most common causes of hair loss in men and women. On 
                            the other hand, the hair of females becomes thinner all over the
                             head. Androgenetic Alopecia varies from person to person. It
                              starts after puberty and its symptoms become more prominent 
                              as we age.   </p>

                              <li><b>Alopecia Areata</b></li>
                        <p>This is a serious autoimmune condition where the body’s immune system attacks healthy parts of the body including hair follicles causing hair from the scalp, eyebrows, eyelashes, and the like to fall out. </p>
                    
                        <li><b>Traction Alopecia </b></li>
                        <p>Fond of braiding your hair into different trendy styles? You are risking yourself of Traction Alopecia, a condition you get from constantly pulling your hair to create tight hairstyles such as tight ponytails, buns, cornrows, braids, and the like. </p>

                    </ul>
                </li>

            </ul>
        </li>
        <li class="blog-one-latest"><b>Pregnancy </b>
               <p>After giving birth, mothers may notice that large amounts of hair strands are falling everyday. Fortunately, this condition is normal, temporary and will naturally heal within a year. Hair fall after giving birth is caused by the decline of estrogen levels. </p>
                
        </li>
        <li class="blog-one-latest"><b>Nutritional Deficiencies </b>
        <p>If you are following a diet plan, it may promote weight loss but you might lose your hair along the process as well. Unknowingly depriving yourself from the appropriate amounts of protein and other vitamins because of your diet regime can lead to excessive hair fall. </p>
                
        </li>
        <li class="blog-one-latest"><b>Anagen and Telogen Effluvium</b>
            <ul>
                <li><b>Anagen Effluvium</b></li>
                <p>Every hair strand undergoes three phases of growth, namely Anagen, Catagen, and Telogen. Anagen Effluvium occurs when hair falls out during Anagen, the first phase of the hair cycle where hair strands are still growing. This condition affects eyebrows, eyelashes, and the like. Anagen effluvium is caused by:</p>
                <ul>
                    <li>Fungal infection</li>
                    <li>Autoimmune disease, radiation, and therapy </li>
                </ul>
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
 
export default HairfallBlog;