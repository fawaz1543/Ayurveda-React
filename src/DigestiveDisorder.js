import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class DigestiveDisorder extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Treatments for Digestive Disorders | Adam & Eve Ayurveda',
        description: 'Digestive disorders like constipation and irritable bowel syndrome will hurt the stomach in more ways than one. Fortunately, there are Ayurvedic treatments for digestive disorders that can get the bowel moving more smoothly.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'ayurveda for acidity,ayurveda treatment for acidity,indigestion ayurvedic treatment,gerd ayurveda,gerd treatment in ayurveda,ayurvedic for constipation,constipation treatment in ayurveda,Ayurvedic treatment for constipation'
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
              <h3 id="digestivedisorder"><b>Ayurvedic Treatments for Digestive Disorders </b></h3>  
              <br/>
              <img src="images/service-banners/DigestiveDisorder.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
            </div>
            <div className="Treatment-Content-one">
              <p>Hyperacidity, also known as gastritis or acid reflux, is a condition in which the acid from the stomach flushes back into the esophagus causing heartburn or an uncomfortable burning sensation in the chest. The food you intake and ill-advised eating habits are big factors of triggering hyperacidity: eating tomatoes, chocolate, garlic, mint, onions, fatty and spicy foods, and other foods that bring negative effects on acid; eating close to bedtime, eating large meals, lying down after eating, drinking alcohol, coffee, tea, and carbonated drinks.  These are the major contributors that are often overlooked which lead to high levels of acid. </p>

            </div>
            <div className="Treatment-Content-two">
            <h5><b>Hyperacidity Symptoms</b></h5>
                <ul>
                  <li>Heartburn - burning sensation in the chest area </li>
                  <li>Regurgitation - acid that goes up into the throat and mouth </li>
                  <li>Dysphagia - food gets stuck on the throat</li>
                  <li>Burping</li>
                  <li>Bloating </li>
                  <li>Dry cough</li>
                  <li>Sore throat </li>
                  <li>Nausea </li>
                </ul>
            </div>

          <p>
          Constipation is a less serious digestive disorder. This happens when your bowel movements occur less frequently than normal. Usually, this condition goes away after a few days and the patient will feel better after. 
          </p>

          <h5><b>Constipation Symptoms</b></h5>
                <ul>
                  <li>Fewer visits to the toilet </li>
                  <li>Bloating </li>
                  <li>A feeling that the food you ate did not come out </li>
                  <li>Hard or small stools </li>
                </ul>


          <p>
                Irritable Bowel Syndrome (IBS) is a combination of bowel disorders that cause discomfort and pain in the stomach. It is either defecating more or less than normal, or having a different a thin, hard, or watery stool. 
          </p>

          <h5><b>Irritable Bowel Symptoms</b></h5>
                <ul>
                  <li>Heartburn </li>
                  <li>Bloating </li>
                  <li>Constipation </li>
                  <li>Belly pains</li>
                  <li>Diarrhea </li>
                </ul>


            </div>
          </div>
        




            <div class="row">
              <div class="col-md-12">
              <h5><b>How Can Ayurveda Cure Acid Reflux and Other Digestive Disorders? </b></h5>
              </div>
          </div>
       
          <div class="row">
            <div class="col-md-4 treatment-image-section">
              <div class="col-md-12 treatment-image-Shirodhara">
                 
              </div>
              <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                <h5><b>Shirodhara</b></h5>
              </div>
              <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
               <span>Since IBS is a psychosomatic disease, using 
                 shirodhara to induce relaxation will help reduce
                  stress and anxiety </span>

              </div>
            </div>   

            <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-Virechanam">
            
                </div>
               
               <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                   <h5><b>Virechanam</b></h5>
               </div>

              <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                  <span>This is an Ayurvedic treatment that cleanses small
                     intestine and stomach to promote regular bowel 
                     movement </span>
              </div>
            </div>

            
          </div>


          <div class="row" style={{ 'margin-top' : '80px' }}>
               <div class="col-md-12">
                 <h5><b>Frequently Asked Questions</b></h5>   
               </div>

             


            <div class="col-md-12">
           
             <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
             1) Is Ginger good for diarrhea?
             </div>
              <div id="demo" class="collapse">
                  <ul>
                      <li>A 2015 study shows that ginger can treat abdominal 
                        issues, including nausea and abdominal spasms</li> 
                  </ul>
               </div>


               <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
               3) How to solve constipation problem naturally?
             </div>
              <div id="demo1" class="collapse">
                  <ul>
                      <li>Drink more water </li>
                      <li>Eat foods high in fiber, i.e. chia seeds, lentil, black beans </li>
                      <li>Eat probiotic foods, i.e. buttermilk, cheese  </li>
                      <li>Spice up your foods with cumin, coriander, ginger, fennel, and cardamom </li>
                  </ul>
               </div>


            </div>




       
        
          </div>





</>         



          );
    }
}
 
export default DigestiveDisorder ;