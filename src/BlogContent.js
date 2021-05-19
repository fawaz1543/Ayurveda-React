import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
function BlogContent() {
  const history=useHistory()
        return (

            <>
            {/* <div class="row">
                <div class="col-md-12">
                <h4 class="Service-title">Blog Content</h4>
                </div>
            </div> */}


            <div class="row" style={{ 'margin-top' : '10px' }}>

            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Meno-3.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title" >Holistic Pregnancy</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 27th April 2021
                            </span>
                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/How-to-Stop-Your-Menopausal-Symptoms" ><b>How to Stop Your Menopausal Symptoms 
</b></a></h4>
<br/>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}><a href="/blog/How-to-Stop-Your-Menopausal-Symptoms" >Read More</a></button>
                         </div>
                     </div>
            </div>




            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/ramadan3.png" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title" >Ayurveda</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 13th April 2021
                            </span>

                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/best-ramadan-offer:Ayurvedic-Treatments-to-Revitalize-Your-Well-being" ><b>Best Ramadan Offer: Ayurvedic Treatments 
</b></a></h4>
<br/>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}><a href="/blog/best-ramadan-offer:Ayurvedic-Treatments-to-Revitalize-Your-Well-being" >Read More</a></button>
                         </div>
                     </div>
            </div>




            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/tulsi-blogcontent.jpeg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title" >Health Concern</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 21th March, 2020
                            </span>

                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/tulsi-a-tool-for-a-healthy-body" ><b>Tulsi a tool for a healthy body  
</b></a></h4>
<br/><br/>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}><a href="/blog/tulsi-a-tool-for-a-healthy-body" >Read More</a></button>
                         </div>
                     </div>
            </div>




            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/postnatal-thumbnail.png" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title" >Pregnancy & Babycare</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 13th March, 2020
                            </span>

                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/postnatal-care-with-ayurveda" ><b>Postnatal Care with Ayurveda 
</b></a></h4>
<br/><br/>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}><a href="/blog/postnatal-care-with-ayurveda" >Read More</a></button>
                         </div>
                     </div>
            </div>

            


            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Psoriasis 260X146.png" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title" >Health Concern</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 25th February, 2020
                            </span>
                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/how-to-prevent-psoriasis-flare-ups-naturally" ><b>How to Prevent Psoriasis Flare-ups Naturally 
</b></a></h4>
                   
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}><a href="/blog/how-to-prevent-psoriasis-flare-ups-naturally" >Read More</a></button>
                         </div>
                     </div>
            </div>




            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Panchakarma 260X146.png" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Doctor Consultation</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 13th February, 2020
                            </span>
                         </div>
                         <br/>
                        <h4 class="card-title"><a href="/blog/panchakarma-five-actions-with-one-goal" ><b>Panchakarma: Five Actions with One Goal </b></a></h4>

                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                            <a href="/blog/panchakarma-five-actions-with-one-goal" >Read More</a>
                         </button>
                         </div>
                     </div>
            </div>

         

            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/hairfall-blogcontent.jpeg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Health Concern</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 05th January, 2020
                            </span>
                         </div>
                         <br/>

                        <h4 class="card-title"><a href="/blog/5-Causes-of-Hair-Loss-and-How-to-Cure-it-Naturally" ><b>5 Causes of Hair Loss and How to Cure it Naturally</b></a></h4>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                              <a href="/blog/5-Causes-of-Hair-Loss-and-How-to-Cure-it-Naturally" >Read More</a>
                         </button>
                         </div>
                     </div>
            </div>



            <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/yoga-blog-content.jpeg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Wellness & Detox</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 22th December, 2020
                            </span>
                         </div>
                         <br/>

                        <h4 class="card-title"><a href="/blog/10-ayurvedic-health-hacks-you-should-try-part-2" ><b>10 Ayurvedic Health Hacks You Should Try - (Part 2)</b></a></h4>
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/10-ayurvedic-health-hacks-you-should-try-part-2" >Read More</a>
                         </button>
                         </div>
                     </div>
            </div>


              <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/10-ayurvedic-hacks-one-blog.png" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' , 'background-size' : 'cover' , 'height' : '146px' }} />
                         <div class="card-body">
                         
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Wellness & Detox</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 16th December, 2020
                            </span>
                         </div>
                         <br/>
          
                        <h4 class="card-title"><a href="/blog/10-ayurvedic-health-hacks-you-should-try-part-1" ><b>10 Ayurvedic Health Hacks You Should Try - (Part 1)</b></a></h4>
                  
                          <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/10-ayurvedic-health-hacks-you-should-try-part-1" >Read More</a>
                         </button>
                         </div>
                     </div>
               </div>


              <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-images/Winter-wellness-blog-thumbnail.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Doctor Consultation</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 8th December, 2020
                            </span>
                         </div>
                         <br/>


                        <h4 class="card-title"><a href="/blog/illnesses-to-watch-out-for-this-winter" ><b>Illnesses to watch out for this winter</b></a></h4>
                         <br />
                         <hr/>

                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/10-ayurvedic-health-hacks-you-should-try-part-1" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>



               <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-images/Arthritis-blog-thumbnail.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Doctor Consultation</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 25th November, 2020
                            </span>
                         </div>
                         <br/>

                       
                        <h4 class="card-title"><a href="/blog/don’t-let-arthritis-get-your-grip" ><b>Don’t Let Arthritis Get Your Grip</b></a></h4>
                        <br/>
                         <hr/>

                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/don’t-let-arthritis-get-your-grip" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>



               <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-images/backpain-blog-thumbnail.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' }} />
                         <div class="card-body">
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Doctor Consultation</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 10th November, 2020
                            </span>
                         </div>
                         <br/>

                        
                        <h4 class="card-title"><a  href="/blog/causes-of-back-pain-and-how-can-ayurveda-help" ><b>Causes of Back Pain and How Can Ayurveda Help?</b></a></h4>
                         <hr/>

                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/causes-of-back-pain-and-how-can-ayurveda-help" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>


               <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-images/Abhyangam-blog-thumbnail.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' }} />
                         <div class="card-body">
                        
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Ayurveda</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 3rd November, 2020
                            </span>
                         </div>
                         <br/>

                      
                        <h4 class="card-title"><a href="/blog/abhyangam-more-than-an-oil-massage" ><b>Abhyangam : More than oil massage</b></a></h4>
                        <br/>
                         <hr/>

                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                         <a href="/blog/abhyangam-more-than-an-oil-massage" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>


                <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-LandingPage/Blog-NadiPariksha.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px' }} />
                         <div class="card-body">
                        
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Doctor Consultation</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 13rd October, 2020
                            </span>
                         </div>
                         <br/>

                        <h4 class="card-title"><a href="/blog/balancing-doshas-with-nadi-pariksha" ><b>Balancing Doshas with Nadi Pariksha</b></a></h4>
                        <br/>
                         <hr/>

                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/balancing-doshas-with-nadi-pariksha" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>


                <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-LandingPage/Blog-Sinusitis.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px'  }} />
                         <div class="card-body">

                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Health Concern</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 6th October, 2020
                            </span>
                         </div>
                         <br/>

                     
                        <h4 class="card-title"><a href="/blog/unclogging-stuffy-nose-with-ayurveda"><b>Unclogging Stuffy Nose with Ayurveda  </b></a></h4>
                        <br/>
                         <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/unclogging-stuffy-nose-with-ayurveda" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>


                <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-LandingPage/Blog-Shirodara.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px'  }} />
                         <div class="card-body">

                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Ayurveda</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 4th October, 2020
                            </span>
                         </div>

                       <br/>
                        <h4 class="card-title"><a href="/blog/wash-out-stress-and-anxiety-with-shirodhara"><b>Wash Out Stress and Anxiety with Shirodhara</b></a></h4>
                        
                         <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/wash-out-stress-and-anxiety-with-shirodhara" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>

                <div class="col-md-3">
                     <div class="card" style={{ 'box-shadow': '0px -2px 9px 7px #EAEAEA' , 'margin-top' : '10px' , 'border-radius' : '50px 0px 50px 0px' }}>
                         <img class="card-img-top" src="images/Blog-LandingPage/Blog-Cervical.jpg" alt="Card image" style={{ width:'100%' ,  'border-radius' : '50px 0px 50px 0px'  }} />
                         <div class="card-body">
                        
                         <div style={{'line-height' : '20px'}}>
                            <span class="card-title">Health Concern</span><br/>
                            <span style={{ 'font-size':'13px' }}>
                                <i class="fa fa-calendar"></i> 2nd October, 2020
                            </span>
                         </div>
                         <br/>


                        <h4 class="card-title"><a href="/blog/solving-cervical-spondylosis-with-ayurveda"><b>Solving Cervical Spondylosis with Ayurveda</b></a></h4>
                
                         <hr/>
                         <button class="btn btn-success" style={{ 'background-color'  : "green" , 'border' : 'green' }}>
                             <a href="/blog/solving-cervical-spondylosis-with-ayurveda" >Read More</a>
                         </button>
                         </div>
                     </div>
                </div>


               
           </div>

</>


          );
  
}
 
export default BlogContent;