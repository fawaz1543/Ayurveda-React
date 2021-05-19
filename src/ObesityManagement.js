import React, { Component } from 'react';
class ObesityManagement extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Managing Obesity with Ayurveda | Adam & Eve Ayurveda',
        description: 'Ayurvedic management of obesity can help prevent further health complications like heart diseases and diabetes.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'ayurvedic weight loss,ayurvedic weight loss treatment,ayurvedic slimming treatment'
          }
        }
      };
        return (

          <>
          <div class="row">
            <div class="col-md-12">
              <div className="Treatment-Title">
                <br/>
                  <h3 id="obesity"><b>Obesity Management with Ayurveda</b></h3>  
                  <br/>
                  <img src="images/service-banners/ObesityManagement.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
                <p>Obesity is a disease caused by numerous factors which can open up the body for other conditions like diabetes, heart disease, high blood pressure, and more, that can hurt your health much worse than it is already experiencing. It is a condition where the body is overweight due to the presence of extreme amounts of fat that the body cannot burn. One can get obesity by a combination of elements such as genetics, unhealthy diet, sedentary lifestyle, age, pregnancy, stress, insomnia, and more. </p>
             
                <h5><b>Body Mass Index</b></h5>

                <p>How big is too big? Obesity is determined by the body mass index. To get your BMI, divide your weight in kilograms by your height in meters squared. The result, if above 30, will mean you are obese. Underweight people have a BMI of 18.5 and below, while the ones with normal weight have a BMI that runs between 18.5 - 24.9, and overweight people’s BMIs are between 25.0 - 29.9. </p>
             
              </div>

            </div>

          </div>
       
       <div class="row">
         <div class="col-md-12">
         <h5><b>How can Ayurveda treat obesity? </b></h5>
         </div>
       </div>

          <div class="row">   
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12  treatment-image-diet">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>	Diet recommendations </b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span> Eat according to your body’s constitution, foods with less oil and fat and light to digest to initiate proper health.</span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-Udwarthanam">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Udwarthanam </b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This is a deep tissue massage that uses oils and powder that can reduce stiffness in the body and remove vessel blockages. </span>
              </div>
            </div>

             <div class="col-md-4 treatment-image-section">
                 <div class="col-md-12 treatment-image-abyangam">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Abhyangam </b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>This treatment followed by a steam bath will induce extreme sweating to remove cellulites. 
                     </span>

                </div> 
         
            </div> 


            <div class="col-md-4 treatment-image-section" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12  treatment-image-Lymphatic-massage">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Lymphatic Drainage Massage</b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>Tshis is an Ayurvedic treatment that will fix the lymph flow and drain toxins out of the body </span>                   
                </div> 
         
            </div> 

          </div>


          <div class="row" style={{ 'margin-top' : '50px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
         

               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               1) What is the best treatment for obesity?
             </div>
              <div id="demo1" class="collapse">
                <ul>
                  <li>Do regular Yoga</li>
                  <li>Avoid processed foods</li>
                  <li>Lessen sugar intake </li>
                  <li>Eat more fruits and vegetables </li>
                  <li>Drink herbs for faster weight loss like Ginger , Turmeric , Cardamom , Cinnamon </li>
                </ul>
               </div>

            </div>




       
        
          </div>



          

  </>         
      


          );
    }
}
 
export default ObesityManagement;