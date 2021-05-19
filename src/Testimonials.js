import React, { Component } from 'react';
class Testimonials extends Component {
    state = {  }
    render() { 
        return ( 
<>
         <div class="container" id="testimonial-container">
           <div class="row" style={{ 'margin-top' : '60px' }}>
              <div class="col-md-12 col-sm-12">
                  <h4 class="Service-title">Hear It From Our Community</h4>
              </div>
           </div>

           <div class="row" >
             <div class="col-md-4 col-lg-4 col-sm-12">
                 <div className="first-testimonial" >
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="testimonial-content">
                    <span>
                      I started to lose a few pounds after attending their Ayurveda
                      weight loss therapies on a regular basis. My body feels 
                      lighter than ever and I’m inviting my friends to try it too!
                      
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/testimonial1.jpg" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>Ben Chacko</span><br />
                      <span />
                    </div>
                  </div>
                </div>
             </div>

             <div class="col-md-4 col-lg-4 col-sm-12">
                 <div className="second-testimonial">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="testimonial-content">
                    <span>
                      At first, I was skeptical that these natural treatments can 
                      cure my tendinitis because I have been to different hospitals
                      already and they weren’t doing any good. But after giving Ayurveda
                      a try, my shoulders were not as painful as before. 
                     
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/testimonial1.jpg" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>John Paul</span><br />
                      <span />
                    </div>
                  </div>
                </div>
             </div>

            <div class="col-md-4 col-lg-4 col-sm-12">
            <div className="third-testimonial">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />  
                    <i className="fa fa-star" />  
                  </div>
                  <div className="testimonial-content">
                    <span>
                      I never thought Ayurveda will have an effect on my mental health.
                      Attending various Ayurvedic therapies and following the doctor’s 
                      lifestyle recommendations put my emotions in place.                     
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/testimonial1.jpg" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>Aravind</span><br />
                      <span />
                    </div>
                  </div>
                </div> 
            </div>


           </div>
            {/* <div className="row" id="testimonials-section">
            <h4 class="Service-title">Heal From Our Community</h4>
              <div className="testimonial-wrapper">  
                <div className="first-testimonial">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="testimonial-content">
                    <span>
                      I started to lose a few pounds after attending their Ayurveda
                      weight loss therapies on a regular basis. My body feels 
                      lighter than ever and I’m inviting my friends to try it too!
                      I started to lose a few pounds after attending their Ayurveda
                      weight loss therapies on a regular basis. My body feels 
                      lighter than ever and I’m inviting my friends to try it too!
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/Video call-3@2x.png" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>Mary</span><br />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="second-testimonial">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="testimonial-content">
                    <span>
                      At first, I was skeptical that these natural treatments can 
                      cure my tendinitis because I have been to different hospitals
                      already and they weren’t doing any good. But after giving Ayurveda
                      a try, my shoulders were not as painful as before. 
                      I started to lose a few pounds after attending their Ayurveda
                      weight loss therapies on a regular basis. My body feels 
                      lighter than ever and I’m inviting my friends to try it too!
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/video call-4@2x.png" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>John Paul</span><br />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="third-testimonial">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />  
                    <i className="fa fa-star" />  
                  </div>
                  <div className="testimonial-content">
                    <span>
                      I never thought Ayurveda will have an effect on my mental health.
                      Attending various Ayurvedic therapies and following the doctor’s 
                      lifestyle recommendations put my emotions in place. 
                      I started to lose a few pounds after attending their Ayurveda
                      weight loss therapies on a regular basis. My body feels 
                      lighter than ever and I’m inviting my friends to try it too!
                    </span>
                  </div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-image">
                      <img src="./images/Caller -3@2x.png" style={{width: '100px'}} /> 
                    </div>
                    <div className="testimonial-title">
                      <span>Helen</span><br />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         */}
        
        </div> 
         
</>

         );
    }
}
 
export default Testimonials;