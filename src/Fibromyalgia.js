import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta'; 

class Fibromyalgia extends Component {
    state = {  }
    render() { 
      const meta = {
        title: 'Fibromyalgia Management with Ayurveda | Adam & Eve Ayurveda',
        description: 'With the right Ayurvedic treatments, Fibromyalgia, which is composed of musculoskeletal pain, fatigue, memory issues, and the like can be managed effectively.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Fibromyalgia,Fibromyalgia Treatment,Fibromyalgia treatment in Abu Dhabi,Fibromyalgia Ayurvedic Treatment,Ayurvedic treatment for fibromyalgia'
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
                  <h3 id="fibromyalgia"><b>Ayurvedic Treatment for Fibromyalgia </b></h3>  
                  <br/>
                  <img src="images/service-banners/Fibromyalgia.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
                <p>Fibromyalgia is a disorder causing fatigue, sleep, memory, and mood issues. Fibromyalgia’s patients are sensitive to pain when pressure is applied to specific areas of your body. These are called tender points located at the back of the head, between shoulder blades, top of shoulders, front sides of the neck, upper chest, outer elbows, upper & sides of hips, inner knees, etc. In Ayurvedic perspective, the increase of Vata Dosha is one factor of Fibromyalgia.</p>
              </div>
              <div className="Treatment-Content-two">
                <h5><b>Symptoms of Fibromyalgia</b></h5>
                <ul>
                  <li>Fatigue</li>
                  <li>Trouble sleeping</li>
                  <li>Nonrestorative sleep</li>
                  <li>Headaches</li>
                  <li>Depression</li>
                  <li>Anxiety</li>
                </ul>

                <h5><b>How can Ayurveda treat Fibromyalgia ?</b></h5>         
              </div>
            </div>

          </div>

      

          <div class="row">
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-abyangam">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Abhyangam</b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>This treatment reduces muscle stiffness to affect its flexibility. It allows the muscles to achieve their full range of motion. It involves use of different manipulative techniques to reduce your heart rate, relax your muscles, improve range of motion in your joints and increase production of your body's natural painkillers. It often helps relieve stress and anxiety.</span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-podikizhi">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Podikizhi </b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This is a treatment that reduces muscle spasms, stiffness, swelling and improves blood circulation as well. Medicated herbal powder is placed in a bolus and warmed with Ayurvedic oils. These cloth bags are used to massage the body of the patient and the level of pressure depends on the condition</span>
              </div>
            </div>

             <div class="col-md-4 treatment-image-section">
                 <div class="col-md-12 treatment-image-pizhichil">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Pizhichil </b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>Through oil massage and heat, it improves blood circulation, relieves body pain, and increases muscle development.</span>

                </div> 
         
            </div> 

          </div>


          <div class="row" style={{ 'margin-top' : '100px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                1) Can fibromyalgia go away?
             </div>
              <div id="demo" class="collapse">
              Fibromyalgia is a chronic condition. However, it won’t get worse overtime or cause joint or muscle damage. The condition’s symptoms are manageable as well. 
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               2) What are the natural remedies for fibromyalgia?
             </div>
              <div id="demo1" class="collapse">
              Some of the natural remedies for the condition’s symptoms include: 
              <ul>
                <li>Rest</li>
                <li>Reduce stress </li>
                <li>Massage </li>
                <li>Exercise </li>
              </ul>
               </div>


            </div>




       
        
          </div>



          

  </>         
      




          );
    }
}
 
export default Fibromyalgia;