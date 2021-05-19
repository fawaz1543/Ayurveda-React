import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class Gout extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Treatments for Gout | Adam & Eve Ayurveda ',
        description: 'Gout is a common joint pain that happens often on the big toe. Its pain and discomfort may last for weeks but there are Ayurvedic treatments that will relieve them faster. ',
        meta: {
          charset: 'utf-8',
          name: {
             keywords: 'Gout ayurveda,Ayurveda treatment for gout,Ayurvedic medicine for gout,Ayurveda treatment for gout in Abu Dhabi'  
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
                <h3 id="gout"><b>Ayurvedic Treatments for Gout</b></h3> 
                <br/>
                <img src="images/service-banners/Gout.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
              </div>
              <div className="Treatment-Content-one">
                <p>What about Gout? It is an extremely painful joint condition wherein immediate
                   attacks of redness, swelling, and tenderness are felt in the joint areas, often
                    occurring on the big toe. The affected area feels swollen, tender, hot, and very
                     sensitive even to the lightest touch. </p>
                <p>The pain and inflammation are caused by the accumulation of urate crystals in the
                   affected joint due to high levels of uric acid in the blood. How does it happen? 
                   Purine is a type of chemical compound that is naturally in the body, which is also
                   present in the foods we eat. The body produces uric acid to break down those purines.
                   In short, the more purines, the more uric acid the body creates. </p>
              </div>
              <div className="Treatment-Content-two">
                <p>However, when the body produces too much uric acid that it doesn’t dissolve in the blood 
                  and passes through the kidneys, uric acid will start to build up forming urate crystals in
                   the affected joint. </p>

                <p>Gout is more common to men and is more likely to occur at an earlier age because biologically,
                   women have lower uric acid levels. It is during after menopause that women’s uric acid levels 
                   go up and catch up to the men’s. Since purines are found on foods and beverages, diet should be
                   monitored as well. High levels of purines are found in organ meats, steak, beer and other alcoholic
                   drinks, and beverages sweetened with fructose. Having a family history of gout will increase the 
                   chances of having the condition as well. Meanwhile, obesity may hold back the body from crushing 
                   uric acid in the system. </p>  


                   <h5><b>Symptoms</b></h5>
                <ul>
                  <li>Affected areas are swollen and tinged with red</li>
                  <li>Range of motion of joint is limited </li>
                  <li>Severe joint pains </li>
                  <li>Discomfort in the affected joints</li>
                </ul>

            </div>
             

            </div>
          </div>
         
                   
         <div class="row">
          <div class="col-md-12">
          <h5><b>Ayurvedic treatments for Gout</b></h5>
          </div>
         </div>
  
            <div class="row">   
              <div class="col-md-4 treatment-image-section">
                <div class="col-md-12 treatment-image-pizhichil">
                   
                </div>
                <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                  <h5><b>Pizhichil </b></h5>
                </div>
                <div class="col-md-12" style={{ 'text-align' : 'justify' }}>
                 <span> This treatment involved pouring lukewarm medicated oil onto the entire body coupled with relaxing massages. It relieves body pain, spasms, bone injuries, and subsides burning sensations. </span>
  
                </div>
              </div>   
  
              <div class="col-md-4 treatment-image-section">
                  <div class="col-md-12 treatment-image-Ksheeradhara">
              
                  </div>
                 
                 <div class="col-md-12" style={{ 'margin-top' : '15px' , 'text-align' : 'center' }}>
                     <h5><b>Ksheeradhara</b></h5>
                 </div>
  
                <div class="col-md-12 " style={{ 'text-align' : 'justify' }}>
                    <span> This is the milk version of pizhichil. Instead of oil, medicated milk is poured on the body. This treatment relieves muscle stiffness and soreness, lubricates joints, and minimizes pain. </span>
                </div>
              </div>
  

            </div>




            <div class="row" style={{ 'margin-top' : '80px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
  
               
  
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                  1) Do I need time off work with Gout? 
               </div>
                <div id="demo" class="collapse">
                People can work even with gout or do different duties while the affected 
                joints still hurt. However, talking to the employer might help in task management or a day off during an attack. 
                 </div>
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
                 2) What are the foods that can aggravate Gout? 
               </div>
                <div id="demo1" class="collapse">
                  Fructose-sweetened beverages can fire up gout. Other reasons are stress, pneumonia, surgery, and other medical conditions 
                </div>
  
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo2"> 
                 3) What herbs can flush uric acid out of your body?
               </div>
                <div id="demo2" class="collapse">
                Turmeric has lots of benefits and one is treating gout. A 2013 study showed that curcumin, an active ingredient found in turmeric can cure gout inflammation.  
                 </div>
  
  
  
              </div>
  
  
  
  
         
          
            </div>
  
  
  
  </>         



          );
    }
}
 
export default Gout;