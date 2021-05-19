import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta'; 

class VericoseVein extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Treatments for Varicose Veins | Adam & Eve Ayurveda',
        description: 'With the help of Ayurvedic treatments, you can cure varicose veins and spider veins that cause discomfort and pain on the affected areas.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: ' Varicose veins treatment,Varicose veins treatment in ayurveda,Ayurvedic treatment for varicose veins,Vein disease treatment,Ayurvedic treatment for Spider vein'
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
                <h3 id="vericosevein"><b>Ayurvedic Treatments for Varicose Veins</b></h3>
                <br/>
                <img src="images/service-banners/VaricoseVein.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <p>Varicose veins are enlarged, twisted, swollen veins tinged with 
                  red or bluish-purple often found on the legs. This condition that
                   happens to around 25% of adults is caused by the veins’ failure
                    to regulate blood flow. The blood then begins to collect in the
                     veins instead of running directly to the heart thus the swollen
                      appearance. It happens mostly on the leg area because the pressure
                       in the lower body’s veins are increased due to standing and 
                       walking. Gravity also plays a part in the upward flow of the
                        blood. </p>

                <p>Women more commonly get varicose veins as hormonal changes during 
                  pregnancy and menopause increase their risk, not to mention age 
                  and family history. Standing for long periods of time and obesity
                   are the other factors that add exorbitant pressure to the veins. </p>

                <p>Spider veins is a mild, less intimidating version of varicose veins.
                   The veins do not bulge as much as varicose veins and are found closer
                    to the surface of the skin. They can also be found on the face
                     that look like bluish-purple spider webs. </p>

              </div>
              <div className="Treatment-Content-two">
              <h5><b>Symptoms of Varicose Veins</b></h5>
                  <ul>
                    <li>Bulging, swollen veins often found on the legs </li>
                    <li>Veins that are colored blue, purple, or red </li>
                    <li>There is pain around the affected area </li>
                    <li>Skin discoloration around the affected area </li>
                    <li>Pain after standing or sitting for a long time </li>
                    <li>Itching around the veins</li>
                  </ul>

              </div>

            </div>
          </div>


              <div class="row">
                <div class="col-md-12">
                     <h5><b>How can Ayurveda treat Varicose Veins?</b></h5>
                </div>
            </div>
            <br/>

            <div class="row">
              <div class="col-md-4 ">
                  <div class="col-md-12 treatment-image-Udwarthanam">
                   
                   </div>
              </div>
              <div class="col-md-8">
                <h5><b>Udwarthanam </b></h5>
                <span>This treatment uses heated herbal powder to massage the body 
                   using mainly upward strokes which can stimulate the upward flow
                    of blood trapped in the veins. </span>
               </div>
            </div>

<br/>
            <div class="row">
              <div class="col-md-4 ">
                  <div class="col-md-12 treatment-image-Lymphatic-Drainage-Massage">
                   
                   </div>
              </div>
              <div class="col-md-8">
                <h5><b>Lymphatic Drainage System </b></h5>
                <span><b>Yoga </b>- the movements and poses done in yoga help in blood 
                      circulation and bring more oxygenated blood to the organs 
                      and promotes reverse blood flow from the lower body all 
                      the way up to the heart and brain </span><br/><br/>
                      <span><b>Dietary modifications</b> - salty foods are big factors of water retention. 
                        Eating foods high in fiber and potassium can help solve the condition.
                         Some of these are: 
                         <ul>
                           <li>	Nuts</li>
                           <li>Potatoes</li>
                           <li>Leafy vegetables </li>
                           <li>Whole-grain foods</li>
                           <li>Oats and wheat</li>
                         </ul>
                      </span>
               </div>
            </div>


  
            <div class="row" style={{ 'margin-top' : '80px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
                
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
               1) How do you get rid of varicose veins naturally?	
               </div>
                <div id="demo" class="collapse">
                    <ul>
                        <li>Lifestyle changes, which is one of Ayurveda’s important 
                          principles, can help eliminate varicose veins. Try exercising,
                           yoga, and healthy dietary modifications.</li>
                       
                    </ul>
                 </div>
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
                 2) Does massage help varicose veins?
               </div>
                <div id="demo1" class="collapse">
                    <ul>
                        <li>Massage can alleviate pain, swelling, and discomfort caused by varicose veins. </li>
                    </ul>
                 </div>
  
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo2"> 
                 3) What foods are bad for varicose veins?
               </div>
                <div id="demo2" class="collapse">
                    <ul>
                        <li>Salty foods</li>
                        <li>Canned foods</li>
                        <li>Alcohol</li>
                        <li>Refined carbohydrates</li>
                    </ul>
                </div>
  
  
              </div>
  
  
  
  
         
          
            </div>
  
  



  </>         

          );
    }
}
 
export default VericoseVein;