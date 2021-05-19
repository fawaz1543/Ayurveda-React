import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class LifeStyleRecommendation extends Component {
    state = {  }
    render() { 

      const meta = {
        title: 'Ayurvedic Lifestyle Tips | Adam & Eve Ayurveda',
        description: 'An Ayurvedic lifestyle is healthy, safe, and is made for everyone who wants to veer away from the unhealthy, misguided path.',
        meta: {
          charset: 'utf-8',
          name: {
             keywords: 'Ayurvedic Lifestyle,Ayurvedic lifestyle consultation'  
          }
        }
      };

        return ( 
            <>
            <div class="row">
              <div class="col-md-12">
                <div className="Treatment-Title">
                    <br/>
                    <h3 id="lifestyle"><b>Change Your Lifestyle with Ayurveda </b></h3> 
                    <br/> 
                    <img src="images/service-banners/LifestyleRecommendations.jpg" style={{ width: '100%' , 'border-radius' : '10px' }}></img>
                </div>
                <div className="Treatment-Content-one">
                  <br/>
                  <p>Ayurveda’s lifestyle recommendations are organic, safe, and healthy. These teachings
                     about incorporating a healthier way of life stem from a healing system that was 
                     created thousands of years ago. Having been existing for a long time, Ayurveda’s 
                     practices have remained true to its fundamentals and have not undergone drastic changes
                      because of its efficacy, effectiveness, and safety. Switching to an Ayurvedic lifestyle
                       is a 180 degree turn to organic, all-natural means and dincharya (daily routine) of 
                       strengthening the body in forestalling diseases. </p>
                  <p>According to Ayurvedic principles, every individual is composed of their own unique blend 
                    of Doshas: Vata, Pitta, Kapha, and living a completely healthy life revolves around balancing 
                    these three. If one or two is aggravated and loses its way, the body will turn vulnerable to
                     diseases, which Ayurveda is preventing. At the heart of this lifestyle is pacifying these
                      three by understanding the nature of the Doshas, identifying the Prakriti (constitution)
                       and Vikriti (imbalances).</p>
                </div>
                <div className="Treatment-Content-two">
                  <h5><b>Here are some of the causes that imbalances Doshas. </b></h5>
                  In most cases, cervical spondylosis poses no symptoms. But if one or more symptoms occur,
                   it typically gives you neck pains and stiffness. Here are the other symptoms you can look for: 
                  <ul>
                    <li><b>Vata</b>, when imbalanced, will cause digestive and circulation problems like insomnia, constipation, and dehydration, dry and rough skin, pains and general body-ache, astringent taste in mouth.</li>
                    <li><b>Pitta</b>, on the other hand, can initiate, hyper acidity, hormonal imbalance, migraines, hot flashes, bad breath/body odour, sore throat, rashes, and fever</li>
                    <li><b>Kapha</b> gives you depression, mucoid diarrhea, pre-diabetes, cold/cough/runny nose, hay fever, cold sweats, stress, anxiety, and obesity. </li>
                  </ul>

                  <p>You can pacify the Doshas by committing to an Ayurvedic lifestyle that includes routines like going
                     to bed before 10pm and waking up at 6, eating main meals at noon, doing vigorous exercises, and having
                      a time out from cellphones and laptops to rest your eyes. </p>
  
                  <br/>
                  <h5><b>Your Ayurvedic lifestyle companion</b></h5> 
                  As spine-chilling as the term sounds, non-operative neck pain treatments are
                  predominantly effective and can actually cure it. You can use hot or cold compress
                  to relieve sore muscles or an assistance of a therapist who will guide you for proper
                  stretching techniques to strengthen neck muscles. Other cervical spondylosis treatments include
                  Ayurvedic therapies like Abhyangam, Podikzhi, Pizhichil, and Nasyam that use natural oils and 
                  herbs that can save someone’s neck. 
          
                </div>
              </div>
  
            </div>
  
  
            <div class="row" style={{ 'margin-top' : '50px' }}>
                 <div class="col-md-12">
                   <h5><b>Frequently Asked Questions</b></h5>   
                 </div>
  
               
  
  
              <div class="col-md-12">
             
               <div class="collapse-faq" data-toggle="collapse" data-target="#demo"> 
                  1) How can I follow Ayurveda lifestyle?
               </div>
                <div id="demo" class="collapse">
                  <ul>
                    <li> Avoid foods with preservatives and look for fresh alternatives. </li>
                    <li>Aside from eating healthy, take your time when eating and don’t rush to finish your meals. </li>
                    <li>Seek the help of an Ayurvedic doctor who can help detect even the smallest imbalance you have. </li>
                    <li>Cook and spice up your meals according to your Dosha type.</li>
                    <li>Go with the flow of your body. Do not get anxious in understanding what it needs and wants. Harmonizing with your body takes time. Relax.</li>
            </ul>
                 </div>
  
  
   
  
  
              </div>
  
  
  
  
         
          
            </div>
  
  
  
            
  
    </>         
        



         );
    }
}
 
export default LifeStyleRecommendation;