import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class DiabeticCare extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Managing Diabetes with Ayurveda | Adam & Eve Ayurveda',
        description: 'Ayurvedic treatments have the ability to control diabetes, a chronic condition caused by high blood sugar levels and can lead to fatal complications if not monitored.',
        meta: {
          charset: 'utf-8',
          name: {
             keywords: 'diabetes,diabetes treatment,diabetes ayurvedic treatment,Ayurveda for diabetes,Ayurvedic treatment for diabetes'  
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
                  <h3 id="diabeticcare"><b>Diabetes Management with Ayurveda </b></h3>  
                  <br/>
                  <img src="images/service-banners/DiabeticCareManagement.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <br/>
             
                <p>Diabetes is a chronic condition about the body’s abnormally high blood sugar levels that can be fatal if proper treatment or attention is not observed. Sugar or glucose levels in the body rise everytime we eat and drink. The pancreas produces insulin-- a hormone that neutralizes glucose and keeps it from going through the roof-- in the bloodstream. Diabetes occurs when the pancreas loses its ability to produce the right amounts of insulin which signals the liver, fat cells, and muscles to absorb glucose. Consequently, with the absence of insulin, glucose will stay in the blood and its levels will rise up as the insulin remains missing. </p>
               <p>A patient will be more likely to have diabetes if he/she is overweight, has a family history of diabetes, not physically active or has high blood pressure, high cholesterol, or high triglycerides.</p>

               <p>There are two types of diabetes: juvenile diabetes and adult-onset diabetes. The first type, juvenile diabetes, also known as insulin-dependent diabetes happens when the insulin-producing cells of the pancreas are destroyed by the body. The second type, also known as adult-onset, is caused by insulin deprivation or resistance.</p>
              </div>
              <div className="Treatment-Content-two">
                <h5><b>Symptoms</b></h5>
                <ul>
                  <li>Blurry Vision</li>
                  <li>Extreme Fatigue</li>
                  <li>Increased Hunger</li>
                  <li>Frequent Urination</li>
                  <li>Sores that don’t heal</li>
                  <li>Increased Thirst</li>
                  <li>Weight Loss</li>
                </ul>
        
              </div>
            </div>

          </div>


          <div class="row">
                <div class="col-md-12">
                <h5><b>What are the Ayurvedic treatments for diabetes? </b></h5> 
                </div>
            </div>
      

          <div class="row">
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-lifestyle">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Ayurvedic Lifestyle</b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>Modifying the food you eat would be of great help for maintaining appropriate sugar levels. In fact, a healthy lifestyle is enough to alleviate diabetes. Exercising regularly, Kapha-reducing diet, eating more vegetables and less on carbohydrates, fat, salt, sugary foods and drinks are enough to keep sugar levels at ease. </span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-nasyam">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Panchakarma </b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This treatment will help cleanse the body with the use of herbal massage, herbal steam, fasting, and herbal purgation to clean the pancreas, liver, and spleen. </span>
              </div>
            </div>

             <div class="col-md-4 treatment-image-section">
                 <div class="col-md-12 treatment-image-shodanapic">

                </div>

                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Shodhana</b></h5>
                </div>

                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                  <span>This is a breathing exercise that helps expel toxins by letting air flow freely all throughout the body. </span>

                </div> 
         
            </div> 

          </div>


          <div class="row" style={{ 'margin-top' : '50px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                1) What is the best herb for lowering blood sugar?	
             </div>
              <div id="demo" class="collapse">
              Herbs like Jambhul powder, Bel, Amalaki, Gurmar, Triphala, Shilajit, and Guggul are the perfect blood sugar level controllers. 
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               2) What fruits and foods diabetics should avoid?
             </div>
              <div id="demo1" class="collapse">
                  These are the foods that diabetics should avoid: rice, potato, sweet fruits, white flour, sugar, sugar cane, jaggery, juices, wheat, red meat and sago. 
               </div>
 

            </div>




       
        
          </div>



          

  </>         
      



          );
    }
}
 
export default DiabeticCare;