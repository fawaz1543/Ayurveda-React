import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

function RecentBlogs () {
  const history=useHistory()

        return ( 
<>
         <div class="container" id="recent-blog-container">
           <div class="row" style={{ 'margin-top' : '60px' , 'margin-bottom' : '20px' }}>
              <div class="col-md-12 col-sm-12">
                 <h4 class="Service-title">Recent Blogs</h4>
              </div>
           </div>

           <div class="row">
             <div class="col-md-3 col-sm-12 col-lg-3">
                <div className="first-section-blog">
                  <div className="first-section-header">
                    <span><a class="blog-title" href='/blog/balancing-doshas-with-nadi-pariksha'>Balancing Doshas with Nadi Pariksha</a></span>
                  </div>
                </div>
             </div>

            <div class="col-md-5">
               <div className="second-section-blog">
                  <div className="second-inner-first-blog">
                    <div className="second-inner-first-image">
                    </div>
                    <div className="second-inner-first-header">
                      <span><a href='/blog/unclogging-stuffy-nose-with-ayurveda'>Unclogging Stuffy Nose with Ayurveda<br /></a></span>
                    </div>
                  </div>
                  <div className="second-inner-second-blog">
                    <div className="second-inner-second-header">
                      <span><a href='/blog/wash-out-stress-and-anxiety-with-shirodhara'>Wash Out Stress and Anxiety with Shirodhara</a></span>
                    </div>
                    <div className="second-inner-second-imageblog">
                    </div>
                  </div>
                </div>
            </div>

            <div class="col-md-4">
              <div className="third-section-blog">
                  <div className="third-section-blog-image">
                  </div>
                  <div className="third-section-blog-header">
                    <span style={{fontSize: '20px'}}><a href='/blog/solving-cervical-spondylosis-with-ayurveda' >Solving Cervical Spondylosis with Ayurveda</a></span>
                  </div>
                </div>

            </div>

           </div>

            {/* <div className="row" id="blog-section" style={{ 'margin-top':'30px' }}>
            <h5 style={{fontWeight: 'bold'}}>Recent Blogs
              <div className="blog-wrapper">  
                <div className="first-section-blog">
                  <div className="first-section-header">
                    <span><a href="/NaadiparikshaBlog">Balancing Doshas with Nadi Pariksha</a></span>
                  </div>
                </div>
                <div className="second-section-blog">
                  <div className="second-inner-first-blog">
                    <div className="second-inner-first-image">
                    </div>
                    <div className="second-inner-first-header">
                      <span style={{fontSize: '30px', lineHeight: '20px'}}>Sinus ? <br /><span style={{fontSize: '17px'}}>Help is on the way !</span></span>
                    </div>
                  </div>
                  <div className="second-inner-second-blog">
                    <div className="second-inner-second-header">
                      <span style={{fontSize: '20px'}}>Treat the Cause &amp; Not the Pain</span>
                    </div>
                    <div className="second-inner-second-imageblog">
                    </div>
                  </div>
                </div>
                <div className="third-section-blog">
                  <div className="third-section-blog-image">
                  </div>
                  <div className="third-section-blog-header">
                    <span>A Traditional diagnostic approach for Natural healing : Nadi Pariksha</span>
                  </div>
                </div>
              </div>
            </h5>
            </div> 
         */}
        
        </div>
    
</>

         );
    
}
 
export default RecentBlogs;