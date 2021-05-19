import React, { Component } from 'react';
class BeautyTherapy extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Beauty Therapies | Adam & Eve Ayurveda',
        description: 'Ayurvedic beauty therapies are the safest approach in achieving that youthful glow that everyone wants. Using only natural medicated herbs and oils, these treatments do not have side effects that might worry patients. ',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'Ayurvedic Beauty Treatment,Ayurvedic head massage,Ayurvedic Herbal Facial '
          }
        }
      };

        return ( 

            <>
            <div class="row">
              <div class="col-md-12">
                <div className="Treatment-Title">
                  <br/>
                    <h3 id="beautytherapy"><b>Ayurvedic Beauty Therapies </b></h3> 
                    <br/> 
                    <img src="images/service-banners/BeautyTherapies.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
                </div>
                <div className="Treatment-Content-one">
                  <br/>
                  <p>Ayurveda is a traditional holistic healing system. Not only does it address every health concern but also nourishes the skin to give you that natural glow and a beautiful and healthy body from the inside out. Having existed for thousands of years, it has developed a variety of revitalizing beauty therapies from head to toe. Since Ayurveda is exclusively natural and organic, every treatment and therapy doesn’t hide side effects that might wreck the patient’s overall prinking experience. </p>
               
                  <h5><b>Head and Face Care</b></h5>
                  <p>Mukha Lepam is a treatment that detoxifies and nourishes the face by using a mixture of oils and herbs as an Ayurvedic face pack. It is followed by a face massage and face scrub. For a full relaxation on the head region, Ayurvedic head massage is done with the use of oils to moisturize the scalp and promote hair growth. In addition, using Navara rice and other herbs, and oils can exfoliate and moisturize the skin, unleashing the skin’s natural glow. It also tones the face and takes the sagginess away. The husk in Navara rice removes the outermost dead cell layer.</p>

                  <h5><b>Body Care</b></h5>
                  <p><b>Abyangham</b> removes wrinkles and heals other skin conditions. It is a full body massage that increases skin blood flow, softens and smoothes the skin, and minimizes hyperpigmentation. Moreover, detox wrap infuses the body with heat, medicated herbs and oil which is perfect to expel toxins from the body and give the patient a more vibrant, softer, and smoother skin.  </p>
                  <p><b>Njavarakizhi</b> is another treatment for skin rejuvenation. Cooked njavara rice is placed inside cotton boluses which are dipped in milk and herbal decoctions. These boluses are used to massage the body to improve skin texture. </p>
                  <p><b>Udwarthanam</b> is about the direct application of herbal powders to massage the body with upward strokes, this treatment will not just fix the body’s lymphatic flow but also exfoliate the skin. </p>
               
               
                  <h5><b>Foot massage / Foot reflexology</b></h5>
                  <p>Many Ayurvedic pressure points are located in the feet, and massaging them is as beneficial as a full body massage. For example, Padabhyangam is a type of foot massage that relieves eye strain. Foot massage is also best for smoother blood circulation and cure for insomnia.</p>  
               
               
                </div>

              </div>
  
            </div>
  
        
  
            <div class="row" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
  
               
  
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                  1) What are the natural beauty tips?	
               </div>
                <div id="demo" class="collapse">
                   <ul>
                     <li>Apple cider vinegar can tighten pores and kill bacteria when applied in the face </li>
                     <li>Coconut oil has vitamin E and fatty acids that prevents wrinkle formation. It can also be used as a make-up remover which can moisturize the skin at the same time </li>
                     <li>Aloe vera is an effective natural moisturizer for dry skin.</li>
                   </ul>
                 </div>
  
              </div>
  

            </div>
  
  
  
            
  
    </>         
        



         );
    }
}
 
export default BeautyTherapy;