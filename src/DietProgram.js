import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class DietProgram extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Diet with Ayurveda | Adam & Eve Ayurveda',
        description: 'Ayurvedic diet program is part of Ayurveda’s natural treatments for a holistic healing. It doesn’t just provide you the healthier foods but also suggests the best habits that come along with it.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Ayurvedic diet,Ayurvedic diet program,Ayurvedic Diet Plan'
      
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
                  <h3 id="dietprogram"><b>The Ayurvedic Diet Program </b></h3>
                  <br/>
                  <img src="images/service-banners/DetoxProgram.jpg  " style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
                <p>Ayurveda is an alternative healing system that helps in curing diseases with herbs, oils, massages, diet programs, lifestyle, and any other organic procedures with the absence of side effects. As organic as its treatments, Ayurveda suggests to eat whole foods and avoid processed ones to have optimal everyday health. It also involves the temperance in vices, unhealthy foods, and ill-advised eating habits. 
Your prominent Dosha body type, which is identified through Ayurvedic consultation, determines what foods you should eat and what should be avoided. The consultation is not just to identify your Dosha, rather it also addresses what caused the ailments your body is experiencing. Once the Ayurvedic doctor identifies the dominant Dosha (Vata, Pitta, and Kapha), a personalized diet plan bespoke to your needs will be recommended.  
</p>

<p>Your prominent Dosha body type, which is identified through Ayurvedic consultation, determines what foods you should eat and what should be avoided. The consultation is not just to identify your Dosha, rather it also addresses what caused the ailments your body is experiencing. Once the Ayurvedic doctor identifies the dominant Dosha (Vata, Pitta, and Kapha), a personalized diet plan bespoke to your needs will be recommended.  
</p>

<h5><b>What is Ayurvedic diet?</b></h5>

<p>The fundamentals of Ayurveda firmly stands with the certitude that a healthy body stems from the foods we eat. However, this ancient practice goes more specific. A person’s body type, which is defined by the dominant Dosha, is at its best physiological and emotional state when the right foods are eaten. Here are some of the guidelines per Dosha body type:</p>

<ul>
  <li><b>Vata</b> - warm and/or sweet foods should be the focus in this body type’s diet </li>
  <li><b>Pitta</b> - people with this body type should limit the intake of nuts, seeds, and spicy food</li>
  <li><b>Kapha</b> - this body type’s diet should include more fruits and vegetables </li>
</ul>

<p>General diet tips for all Doshas include: steaming, grilling, and boiling of foods; avoiding intake of white bread; seeing to it that a minimum of 50 grams of fiber per day is maintained; eating on time and avoiding overeating; eating at a moderate speed for proper digestion, and more. </p>


              </div>
              <div className="Treatment-Content-two">
                <h5><b>Benefits</b></h5>
                
                <p>Fruits and vegetables are overflowing with essential vitamins and minerals that are extremely helpful to the body. They are also the best sources of fiber, anti-oxidants, and other nutrients that will boost the immune system and fend off harmful diseases from coughs and colds to heart diseases, diabetes and cancer. Ayurveda also promotes a plant-based diet for a smooth digestion of foods as the leafy greens are rich in fiber. </p>
               
                <p>Ayurvedic diet also encourages patients to be mindful of the food they eat. Mindfulness will train patients to be conscious of the amounts of food they put in their bodies and the turn away from the unhealthy eating habits they got used to. </p>

                <p>Another benefit is the promotion of weight loss. Removing processed food from the system, eating whole foods, and fruits and vegetables, together with mindfulness while eating, can promote a healthier body that can lead to weight loss. </p>
              
               <p>Ayurvedic diet programs are there to maintain and prolong the health benefits gained from Ayurvedic treatments. Their main goal is to make the body strong enough to fight off illnesses. Adam & Eve Ayurveda has a team of Ayurvedic specialists that can accurately detect the patient’s body type and recommend effective diet programs that will let the patient have a lasting healthy body.</p>
              
              </div>
            </div>

          </div>

      

          <div class="row">
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-Vaman">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Vaman</b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>It is a treatment that induces vomit to expel the toxins out from the gastrointestinal tract. The patient will be asked to intake a vomit-inducing drink. After the treatment, the patient will feel much lighter, sinuses will be cleared and appetite will be better.</span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-nasyam">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Nasyam</b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This treatment that instills medicated oil into the nose will clear sinuses, eyes, and ears, and will promote proper breathing</span>
              </div>
            </div>

             <div class="col-md-4 treatment-image-section">
                 <div class="col-md-12 treatment-image-pizhichil">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Virechana </b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>This is a Sanskrit word for “laxative” or “purging.” In this treatment, purgative substances are taken by the patient. Virechana will clean the stomach, small intestine, liver, spleen, colon, and sweat glands. </span>

                </div> 
         
            </div> 


            <div class="col-md-4 treatment-image-section" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12 treatment-image-Basti">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Basti</b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>Through the help of medicated herbs and oils, this treatment will help the body in expelling bile, feces, and other body wastes. It also rejuvenates the colon. </span>
                    
                </div> 
         
            </div> 

          </div>


          <div class="row" style={{ 'margin-top' : '50px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                1) 	What foods help flush out your system?
             </div>
              <div id="demo" class="collapse">
                <ul>
                  <li>Cabbage</li>
                  <li>Brown rice </li>
                  <li>Green tea</li>
                  <li>Garlic</li>
                  <li>Ginger </li>
                  <li>Lemon</li>
                </ul>
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               2) How can I clean my stomach naturally?
             </div>
              <div id="demo1" class="collapse">
               <ul>
                  <li>Drink at least 3.7 liters of water per day</li>
                  <li>Get a good night’s sleep </li>
                  <li>Limit alcohol intake </li>
                  <li>Avoid eating processed foods </li>
                  <li>Eat fruits, nuts, berries, and other foods rich in antioxidants </li>
                  <li>Allot 200 minutes of workout per week </li>
                </ul>
              </div>

            </div>




       
        
          </div>



          

  </>         
      


         );
    }
}
 
export default DietProgram;