import React, { Component } from 'react';
class Sinusitis extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Treatments  for Sinusitis | Adam & Eve Ayurveda',
        description: 'There are Ayurvedic treatments that can unclog blocked sinuses and can give you headache, cough and colds all at the same time. If not treated right away, sinusitis may last from 4 weeks to 4 months.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Sinusitis,Ayurvedic for sinusitis,Ayurvedic treatment for sinusitis,Sinusitis treatment in abu dhabi'
          }
        }
      };

        return (

          <>
          <div class="row">
            <div class="col-md-12">
              <div className="Treatment-Title">
                <br/>
                  <h3 id="sinusitis"><b>Ayurvedic Treatments for Sinusitis</b></h3>  
                  <br/>
                  <img src="images/service-banners/SinusitisAllergy.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
                <p>Sinuses act as air filters in your nose. They filter the air you breathe, smoke, pollution, including viruses and bacteria before the air gets into your lungs with the right temperature and humidification. Sinuses, when healthy, are filled with air all the time. But when they get inflamed, blocked and filled with fluid, that is the cue for the germs to enter and grow. There are a lot of factors that can block the sinuses. It can be a common cold, allergic rhinitis, smoke, allergies, nasal polyps, and misaligned septum which 80% of people have.</p>
                <p>Sinusitis is experienced by almost everyone. Some have it that lasts a few weeks and some symptoms last for more than 4 months. The types of sinusitis depend on the symptoms and how long they stay with the patient. </p>
                <p><b>Here they are :</b></p>
                <ul>
                  <li><b>Acute sinusitis</b> - 2 - 4 weeks </li>
                  <li><b>Subacute sinusitis</b> - 4 - 12 weeks</li>
                  <li><b>Chronic sinusitis</b> - 12 weeks and longer</li>
                  <li><b>Recurring sinusitis</b> - symptoms recur several times a year   </li>
                </ul>
              </div>
              <div className="Treatment-Content-two">
                <h5><b>Symptoms</b></h5>
                <ul>
                  <li>Fever</li>
                  <li>Runny nose</li>
                  <li>Headache </li>
                  <li>Cough</li>
                  <li>Loss of smell</li>
                  <li>Dental pain</li>
                  <li>Nasal blockage </li>
                </ul>
             

              </div>
            </div>

          </div>
       
       <div class="row">
         <div class="col-md-12">
            <h5><b>How can Ayurveda treat sinusitis ?</b></h5>
         </div>
       </div>

          <div class="row">   
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-nasyam">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Nasyam</b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>This is an Ayurvedic treatment dedicated for sinusitis that also relieves migraine, headache, and induces relaxation. Medicated herbal oils are applied to the nostrils to eliminate toxins in the head, nose, and throat. </span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-swedana">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Herbal Steam </b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This treatment can reduce sinus pressure by opening the nasal passages </span>
              </div>
            </div>

    
          </div>


          <div class="row" style={{ 'margin-top' : '100px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                   1) How can Nasyam cure sinusitis? 
             </div>
              <div id="demo" class="collapse">
              Nasyam cleanses the nasal passage to allow easier breathing by directly instilling herbal oil through the nostrils 
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               2) What herbs are good for sinus congestion? 
             </div>
              <div id="demo1" class="collapse">
              Ginger is a natural antihistamine and an antiviral agent. You can drink hot ginger tea and at the same time, inhale the steam from the cup. Or you can boil water in a pot with ginger and turmeric and inhale its steam.   
               </div>

               <div class="collapse-faq" data-toggle="collapse" data-target="#demo2"> 
               3) What happens if you let a sinus infection go too long?
             </div>
              <div id="demo2" class="collapse">
              Until it is treated, sinusitis symptoms will persist which can last for months. Untreated sinusitis can lead to loss of smell, meningitis, and brain abscess.  
               </div>



            </div>




       
        
          </div>



          

  </>         
      







          );
    }
}
 
export default Sinusitis;