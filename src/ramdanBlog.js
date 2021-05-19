import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import { useHistory } from 'react-router-dom';
import ServiceForm from './service-form';
import Footer from './footer';

function RamadanBlog () {
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
                <li><a  class="active">Best Ramadan Offer: Ayurvedic Treatments to Revitalize Your Well-being 

</a></li>
            </ul>           
          </div>
   




           <div className="row">
             <div class="blog-content-layout">
                 <div class="blog-content-section">
                     <div class="blog-content-title">
                          <h3><b>Best Ramadan Offer: Ayurvedic Treatments to Revitalize Your Well-being 
</b></h3>
                    </div>
                    <div class="blog-content-inner">
                      <img src="images/ramadan3.png" style={{ 'width':'100%' }} />
                      <br/><br/>
                        <p>
                      Get these exciting offers of Adam and Eve Ayurveda to celebrate Ramadan. Ayurvedic treatments are about focusing on
                       oneself, meditating, freeing the mind from stress. Aside from the indulging effects of these treatments, they can also
                        help the body do away with illnesses that affect their general well-being. Most importantly, Ayurveda doesn’t welcome
                         chemically-modified products to avoid potential side effects on the patient. It only relies on the healing power of 
                         nature. Treat yourself and your family with these amazing bundle offers! </p>


<b class="blog-hd">Offer 1: Abhyanga, Shirodhara, and Mukhalepam</b>
<hr/>
	<ul>


      <li class="blog-one-latest">
               <p>Abhyanga is Ayurveda’s version of oil massage and is one of the sought after natural therapies of people who want to calm their nerves and rejuvenate their bones and muscles. It can reinvigorate the nerves, remove stress, fatigue, and relieve muscle pains in the core and in the upper extremities like shoulders, back, and arms. Abyangham also increases circulation and cures insomnia.
</p>
                
        </li>

        <li class="blog-one-latest">
               <p>Shirodhara is claimed to be one of the most rejuvenating treatments of Ayurveda that focuses on the head alone. 
                   From the two Sanskrit words shiro(head) and dhara(flow), placing them right next to each other infers a continuous
                    pouring of warm Ayurvedic oil for a specific time period. The oil will penetrate into the nervous system as
                     it flows down onto the forehead and scalp, regulating the pituitary gland’s functions and stimulating 
                     the hypothalamus to induce sleep. It is a method that mainly relieves the clients’
                      headaches, stress, insomnia, and other head-related problems.  </p>

        </li>
        <li class="blog-one-latest">
        <p>Mukhalepam is a treatment that detoxifies and nourishes the face by using a mixture of oils and herbs as an Ayurvedic face pack. It is followed by a face massage and face scrub. For a full relaxation on the head region, Ayurvedic head massage is done with the use of oils to moisturize the scalp and promote hair growth. In addition, using Navara rice and other herbs, and oils can exfoliate and moisturize the skin, unleashing the skin’s natural glow. It also tones the face and takes the sagginess away. The husk in Navara rice removes the outermost dead cell layer.   
 </p>
                
        </li>
     
    </ul>
    
    <b style={{ 'font-size':'24px' , 'font-weight':'800' , 'display' : 'flex' , 'justify-content' : 'center' , 'color' : 'green' }}>Get these treatments for only AED 599! </b>

<br/><br/>


<b class="blog-hd">Offer 2: Detox Massage, Nasyam, Tharpanam, and Nabhi Vasthi </b>
<hr/>
	<ul>


      <li class="blog-one-latest">
               <p>Detox Massage is a type of massage designed to remove toxins that are not meant to flow throughout the body and boost one’s physical and mental well-being. This treatment concentrates on stimulating the lymphatic system and the muscle tissues. As we unknowingly intake toxins from the foods we eat, detox massage is the helpful method in releasing those toxins from your body. </p>
                
        </li>

        <li class="blog-one-latest">
               <p>Nasyam is a soothing Ayurvedic treatment that cleanses the head, sinuses, nose, and throat, and expels toxins that can cause illnesses. It is known for instilling drops of medicated oil into the patient’s nose which is identified as the doorway to the head. Nasyam is effective in relieving headache and migraine, sinusitis and nasal congestion, treating hoarseness of voice, tonsillitis, laryngitis, and other ENT concerns. </p>

        </li>
        <li class="blog-one-latest">
        <p>Tharpanam is an Ayurvedic treatment for the eyes. It consists of pouring a specific amount of herbal oil around the eyes to give them a revitalizing treatment. Since they are the windows to our soul, we must give them a treatment that removes the negative effects of heavy pollution and the constant staring at computer screens. </p>
                
        </li>

        <li class="blog-one-latest">
        <p>Nabhi Vasthi is perfect for various gastrointestinal disorders such as gastritis, diarrhea, irritable bowel movement, and the like. Black gram is molded and placed around the navel area, then warm medicated oil is poured within the circumference of the dough. The oil is left for about 30 minutes to maximize the health benefits. </p>
                
        </li>
     
    </ul>



    
    <b style={{ 'font-size':'24px' , 'font-weight':'800' , 'display' : 'flex' , 'justify-content' : 'center' , 'color' : 'green' }}>Relax and detoxify for only AED 599! </b>

<br/><br/>




<b class="blog-hd">Offer 3: Ayurvedic oil therapy with kizhi, Kati vasti, and Foot reflexology  </b>
<hr/>
	<ul>


      <li class="blog-one-latest">
               <p>Ayurvedic oil therapy with kizhi is a sweat-inducing treatment that uses boluses filled with herbal powders to massage the body. It improves blood circulation and reduces the swelling of joints and muscles. Ayurvedic oil therapy with kizhi is mostly used for relieving pain and swelling. Inside the poultice bags are different types of medicated powder that are mixed depending on the patient’s disease. </p>
                
        </li>

        <li class="blog-one-latest">
               <p>Kati Vasthi is dedicated to drawing muscle and joint pains out of your lumbar area. This method is done by placing a small pool of medicated herbal oils on top of your lower back for a specific period of time, followed by a massage on the affected area. While the oils sit on the lumbosacral region, they improve blood circulation, lessen pain, inflammation, removes spasms and soreness, and give strength to the joints, including ligaments, connective tissues, and nerves.</p>

        </li>
        <li class="blog-one-latest">
        <p>Foot Reflexology can relieve pain, stimulation, migraine, and encourage proper blood flow. It also improves your mood, releases stress, promotes a healthier well-being, and prevents illnesses. Merely accessing the pressure points in one’s foot can do wonders to one’s health.</p>
                
        </li>
     
    </ul>



    
    <b style={{ 'font-size':'24px' , 'font-weight':'800' , 'display' : 'flex' , 'justify-content' : 'center' , 'color' : 'green' }}>Rejuvenate and do away with pain with these treatments for only AED 450.</b>

<br/><br/>

<p>Adam and Eve Ayurveda celebrates the spirit of Ramadan by allowing everyone to restore their physical and mental well-being. Call us so you can book your appointment now! 

</p>

<b>Visit us at Pink Building, Mezzanine & O1 Floor,  Next to Royal Rose Hotel, Electra Street, Abu Dhabi. </b>

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
                                <h5 style={{ 'line-height' : '25px' , 'font-weight' : 'bold' }}><a onClick={()=>{history.push('/balancing-doshas-with-nadi-pariksha')}} >Balancing Doshas with Nadi Pariksha</a></h5>
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
 
export default RamadanBlog;
