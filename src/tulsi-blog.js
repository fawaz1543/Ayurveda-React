import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function TulsiBlog () {
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
                <li><a  class="active">Tulsi a tool for a healthy body
</a></li>
            </ul>           
          </div>
   
           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Tulsi a tool for a healthy body</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/tulsi-banner.jpeg" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                        Tulsi, also known as Holy Basil, is a medicinal herb that is widely cultivated throughout Southeast Asia.
                         The tiny green leaves of tulsi contain hefty amounts of health benefits that drinking one cup of tulsi
                          tea everyday may keep diseases and infections at bay. This plant can treat different kinds of health 
                          conditions such as cough, diarrhea, eczema, and more. Embedded in each leaf are vitamins A, C, and K, 
                          magnesium, iron, potassium, calcium, phosphorus, fiber, and protein.   
</p>


<p>Here are some of the benefits of tulsi leaves: </p>
	<ul>


      <li class="blog-one-latest"><b>Boosts Immunity</b>
               <p>Aside from being rich in Vitamin C and zinc, it is also overflowing with antiviral, antifungal, and antibacterial properties to naturally boost the immunity and help the body avoid infections. </p>
                
        </li>

        <li class="blog-one-latest"><b>Reduces fever and relieves pain </b>
               <p>Tulsi is both antipyretic and analgesic, thanks to one of its active ingredients called eugenol and its antibacterial and antiviral components suitable for treating fever and relieving pain. Periodic fevers, for example, where a child experiences recurrent fevers, can be remedied by drinking boiled leaves of tulsi in 500 ml water with cardamom powder, mixed with sugar and milk. </p>
                
        </li>
        <li class="blog-one-latest"><b>Treats respiratory disorders like cough and cold </b>
        <p>Basil leaves contain camphene, cineole, and eugenol that help reduce respiratory congestion. </p>
                
        </li>
     

        <li class="blog-one-latest"><b>
        Lowers blood pressure and reduces stress</b>
        <p>Ocimumoside A and B can be found in tulsi as well. These compounds are good anti-stress agents by balancing the brain’s neurotransmitters such as serotonin and dopamine. Moreover, its anti-inflammatory properties help lower the body’s blood pressure.  </p>     
        </li>
     


        <li class="blog-one-latest"><b>
        Anti-cancer </b>
        <p>Tulsi leaves are abundant in phytochemicals. These are chemical compounds that prevent cell damage that often lead to cancer.  </p>     
        </li>



        <li class="blog-one-latest"><b>
        Strengthens heart  </b>
        <p>Because of the plant’s rich antioxidant properties, tulsi is extremely effective in reducing hypertension, lowering blood lipid content, and minimizing ischemia and the risks of stroke–– all in all making the heart strong enough to stay away from cardiovascular diseases.  </p>     
        </li>



        <li class="blog-one-latest"><b>
        Suitable for people with diabetes  </b>
        <p>Studies have shown that tulsi extracts lower the blood glucose levels specifically in patients with type 2 diabetes.  </p>     
        </li>

        <li class="blog-one-latest"><b>
        Treats gout and kidney stones  </b>
        <p>Aside from its diuretic properties that promote healthy urine production, tulsi leaves are capable of decreasing uric acid levels in our body that are the primary reason for developing kidney stones and gout.  </p>     
        </li>

        <li class="blog-one-latest"><b>
        Addresses gastrointestinal disorders  </b>
        <p>Tulsi leaves can also aid several gastrointestinal disorders including bloating, flatulence, loss of appetite, and indigestion.  </p>     
        </li>


        <li class="blog-one-latest"><b>
        Improves hair and skin health </b>
        <p>With the plant’s rich antioxidant and antifungal properties, it prevents acne breakouts, blemishes, premature aging, minimizes hair fall and dandruff.   </p>     
        </li>

    </ul>
    

<b>How to make tulsi tea?</b>

<p>Drinking a warm cup of tulsi tea everyday can ease your mind and strengthen your overall well-being. 
    Follow these easy steps and treat yourself with tulsi tea today:  </p>

<ul>
    <li>Step 1: Put 1 teaspoon of fresh tulsi leaves in a cup</li>
    <li>Step 2: Add 1 cup of hot water</li>
    <li>Step 3: Let it seep for 15 minutes</li>
    <li>Step 4: Strain the tulsi leaves</li>
    <li>Step 5: You may add some honey for a sweeter taste</li>
    <li>Your natural immunity booster is ready. Enjoy!  </li>
</ul>

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
 
export default TulsiBlog;