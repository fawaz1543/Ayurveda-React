import React, { Component } from 'react';
class MultipleSclerosis extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Fix Multiple Sclerosis with Ayurveda | Adam & Eve Ayurveda',
        description: 'Multiple sclerosis is an autoimmune disease where the immune system attacks the nerve fibers’ protective sheath. Ayurvedic treatments for multiple sclerosis can prevent vision, arm and leg movement problems, and more.',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Multiple Sclerosis ,Multiple Sclerosis Ayurvedic Treatment,Ayurveda for Multiple Sclerosis '
          }
        }
      };
  
        return (   
        
            <>

            <div class="row">
              <div class="col-md-12">
                <div className="Treatment-Title">
                  <br/>
                    <h3 id="multiplesclerosis"><b>Ayurveda for Multiple Sclerosis </b></h3>  
                    <br/>
                    <img src="images/service-banners/MultipleSclerosis.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
                </div>
                <div className="Treatment-Content-one">
                  <br/>
                  <p>Multiple sclerosis (MS) is a disease of the brain and spinal cord in which the immune system attacks the protective sheath that covers nerve fibers and causes communication problems between your brain and the rest of your body.
In Ayurveda, multiple sclerosis is associated with the diseases caused by increased Vata dosha. The functions of the brain and nerves are carried out through this dosha, and its energy imbalance leads to disturbance in their functions.  </p>
                </div>
                <div className="Treatment-Content-two">
                  <h5><b>Symptoms</b></h5>
                  <ul>
                    <li>Vision problems</li>
                    <li>Fatigue</li>
                    <li>Numbness and Tingling</li>
                    <li>Depression and Anxiety</li>
                    <li>Muscle spasms, Stiffness and Weakness</li>
                    <li>Pain</li>
                  </ul>
          
                </div>
              </div>
  
            </div>

          <div class="row">
            <div class="col-md-12">
              <h5><b>Diet recommendations as per Ayurveda for Multiple sclerosis:</b></h5>
               <ul>
                <li>Foods that balance Vata dosha should be more fluid, heavier, oily and warm</li>
                <li> Suitable oils are ghee, sesame, and olive oil. Avoid animal fats. </li>
                <li> Eat vegetables like carrots, asparagus, and zucchini. However, onion, eggplant, cabbage, mushrooms, turnips, tomatoes, peppers should be avoided</li>
                <li>Fruits that have to be included in the menu are cherries, peaches, grapes, plums, avocado, papaya, oranges, coconut and mango</li>
                <li>Apricots, watermelons, and cranberries should be avoided</li>
                <li> Spices that can be used for Vata balance – black pepper, ginger, cinnamon, turmeric, basil, cardamom, cumin, mint, oregano, nutmeg, mustard and the like</li>
                <li>Alcohol, black tea and coffee are not recommended</li>
               </ul>
            </div>
          </div>



          
          
          <div class="row" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
  
               
  
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                     1) Is Ashwagandha good for multiple sclerosis?
               </div>
                <div id="demo" class="collapse">
                   <p>Ashwagandha, the herbal supplement sometimes recommended by Ayurvedic practitioners specifically for treating MS, could theoretically worsen the disease. It may also decrease the therapeutic effects of certain medications, increase the side effects of other medications, and increase MS fatigue.</p>
                 </div>
  
  
                 <div class="collapse-faq" data-toggle="collapse" data-target="#demo1"> 
                 2) Can turmeric help MS?
               </div>
                <div id="demo1" class="collapse">
                  <p>Turmeric is a popular spice containing curcuminoids. Curcuminoids have been shown to have neuroprotective effects. Its anti-inflammatory abilities also show promise for the alleviation of MS symptoms.</p>
                 </div>

         


              <div class="collapse-faq" data-toggle="collapse" data-target="#demo2"> 
                3) Foods to avoid with MS
               </div>
                <div id="demo2" class="collapse">
                  <p>
	                	Avoid foods high in saturated fat, such as red meat, butter, cheese, and other full-fat dairy products; Caffeine and alcohol should be used in moderation.</p>
                 </div>

              </div>
  
  
  
  
         
          
            </div>
  
  


  
    </>         
        

         );
    }
}
 
export default MultipleSclerosis;