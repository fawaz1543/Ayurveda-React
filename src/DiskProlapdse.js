import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class DiskProlapdse extends Component {
    state = {  }
    render() { 
      const meta = {
        title: 'Alleviate Disc Prolapse with Ayurveda | Adam & Eve Ayurveda',
        description: 'Ayurvedic treatments can relieve the pain caused by disc prolapse. This condition is caused by the inner part of the disc bulging out to irritate nerves. ',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Disc Prolapse,Disc Prolapse treatment,Natural Disc Prolapse treatment,Slipped Disc Treatment,Slipped Disc Ayurvedic Treatment, Ayurvedic treatment for disc prolapse'
          }
        }
      };
        return (          
          <>
            <DocumentMeta {...meta}><span></span></DocumentMeta>
          <div class="row">
            <div class="col-md-12">
              <div className="Treatment-Title">
                <br/>
                  <h3 id="diskprolapdse"><b>Ayurveda for Disc Prolapse</b></h3>  
                  <br/>
                  <img src="images/service-banners/DiscProlapse.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
                <p>Disc Prolapse, also known as herniated disc, happens when the softer part of the disc that is found in the spinal cord protrudes from the disc, touching delicate nerves which can cause pain and swelling. How does it happen? Between every vertebrae in the spinal column are discs that act as shock absorbers during movements, physical activities, and the like. Inside these discs are soft, gel-like substances called nucleus pulposus. Disc prolapse happens when this gel-like substance sticks out of the discs. </p>
              </div>
              <div className="Treatment-Content-two">
                <h5><b>Symptoms of Disc Prolapse</b></h5>
                <ul>
                  <li>Pain and numbness</li>
                  <li>Worsening pain after standing or sitting</li>
                  <li>Pain radiating to arms or legs</li>
                  <li>Pain when walking short distances</li>
                  <li>Muscle weakness</li>
                  <li>Tingling, or burning sensations in the affected area</li>
                  <li>Worsening pain at night or while doing certain movements</li>
               </ul>

              </div>
            </div>

          </div>

      
  
          <div class="row">
            <div class="col-md-12">
             <h5><b>How can Ayurveda treat disc prolapse ?</b></h5>
             </div>
         </div>

          <div class="row">   
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-abyangam">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Abhyangam </b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>A whole body massage with Ayurvedic oils that stimulate the nervous system and mitigate depression and anxiety  </span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-swedana">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Swedana </b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This treatment helps you to expel out toxins through profuse prespiration</span>
              </div>
            </div>

             <div class="col-md-4 treatment-image-section">
                 <div class="col-md-12  treatment-image-shodana">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Shodana</b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>This is a breathing exercise that helps expel toxins by letting air flow freely all throughout the body.</span>

                </div> 
         
            </div> 


            <div class="col-md-4 treatment-image-section" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12 treatment-image-nasyam">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Nasyam </b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>This is an Ayurvedic treatment dedicated for sinusitis that also relieves migraine, headache, and induces relaxation. Medicated herbal oils are applied to the nostrils to eliminate toxins in the head, nose, and throat. </span>
                    
                </div> 
         
            </div> 


          </div>


          <div class="row" style={{ 'margin-top' : '100px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
               1) How do you avoid disc prolapse?
             </div>
              <div id="demo" class="collapse">
                  <ul>
                      <li>Maintain a healthy weight</li>
                      <li>Use proper lifting techniques</li>
                      <li>Practice proper posture when sitting, walking, standing, sleeping, etc.</li>
                     <li>Stop smoking</li>
                     <li>Exercise regularly</li>
                  </ul>
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               2) What helps a prolapsed disc?
             </div>
              <div id="demo1" class="collapse">
                <ul>
                   <li>Heat therapy</li>
                   <li>Stretching and exercise </li>
                </ul>

               </div>

            </div>




       
        
          </div>





          

  </>         
      



          );
    }
}
 
export default DiskProlapdse;