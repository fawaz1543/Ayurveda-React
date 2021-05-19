import React, { Component } from 'react';
class SportsInjury extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Curing Sports Injuries with Ayurveda | Adam & Eve Ayurveda',
        description: 'Ayurvedic treatments for sports injuries will help you get back on track by healing dislocated or torn muscles, bones, tendons, or ligaments.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Ayurvedic Treatment for Ankle sprain,Ayurvedic treatment for muscle tear,Ayurvedic treatment for muscle pain'
          }
        }
      };

        return (

            <>
            <div class="row">
              <div class="col-md-12">
                <div className="Treatment-Title">
                  <br/>
                    <h3 id="sportsinjury"><b>Ayurvedic Treatments for Sports Injuries </b></h3> 
                    <br/> 
                    <img src="images/service-banners/SportsInjury.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
                </div>
                <div className="Treatment-Content-one">
                  <br/>
                  <p>Sports injuries are caused by external factors like falling, twisting, and sudden action. These may lead to pain, swelling, immobility, etc. Muscles, tendons, and ligaments are mainly affected by sprains, tears, and dislocations.</p>
                </div>
                <div className="Treatment-Content-two">
                  <h5><b> There are dozens of sports injuries that athletes and other people deal with. Here are the most common of them all: </b></h5>
                  <ul>
                    <li>Ankle sprain </li>
                    <li>Shin splints</li>
                    <li>Hamstring strain </li>
                    <li>ACL tear (knee injury)</li>
                    <li>Groin pull</li>
                  </ul>
  
                  <h5><b>How can Ayurveda treat Sports injury?</b></h5> 
                  Adam & Eve Ayurveda specialized in all types of pain-related treatments which starts after the proper diagnosis with relevant investigations. These treatments reduce pain, improving mobility, strengthening muscles and joints. 
          
                </div>
              </div>
  
            </div>
  
        
  
            <div class="row">
              <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-abyangam">
                   
                </div>
                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Podikizhi </b></h5>
                </div>
                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                 <span>This Ayurvedic treatment is known for reducing swelling, pain and spasms. It uses hot boluses of herbs and medicated oil to relieve body ache and strengthen muscles. </span>
  
                </div>
              </div>   
  
              <div class="col-md-4 treatment-image-section">
                  <div class="col-md-12 treatment-image-podikizhi">
              
                  </div>
                 
                 <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                     <h5><b>Lepam </b></h5>
                 </div>
  
                <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                    <span>This treatment uses medicated herbal paste and lathers it on the affected area of the body. It eases pain and swelling in the muscles. </span>
                </div>
              </div>
  
               <div class="col-md-4 treatment-image-section">
                   <div class="col-md-12 treatment-image-pizhichil">
  
                  </div>
  
                  <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                    <h5><b>Bandage </b></h5>
                  </div>
  
                  <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                    <span>This treatment involves the use of hot paste and leaves. The affected area will be massaged followed by the application of hot paste.  </span>
  
                  </div> 
           
              </div> 
  
  
              <div class="col-md-4 treatment-image-section" style={{ 'margin-top' : '50px' }}>
                   <div class="col-md-12 treatment-image-nasyam">
  
                  </div>
  
                  <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                    <h5><b>Njavarakizhi</b></h5>
                  </div>
  
                  <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                    <span>This treatment uses pouches filled with cooked Njavara rice to massage the body. Njavarakizhi improves skin texture, tones muscles, and relieves stress.</span>
                      
                  </div> 
           
              </div> 
  
            </div>
  
  
            <div class="row" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
  
               
  
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                  1) Is there any treatment in Ayurveda for sports injuries?
               </div>
                <div id="demo" class="collapse">
                  Treatment options are varied and can include yoga, herbal medicine, massage therapy and dietary changes.
                 </div>
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
                 2) Can Ayurveda cure sports injuries?
               </div>
                <div id="demo1" class="collapse">
                   Ayurveda has many options for sports injuries. Ayurvedic herbs that reduce inflammation and yoga are the safest ways to cure back pain.
                 </div>
   
  
              </div>
  
  
  
  
         
          
            </div>
  
  
  
            
  
    </>         
        



          );
    }
}
 
export default SportsInjury;