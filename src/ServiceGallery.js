import React, { Component } from 'react';
class ServiceGallery extends Component {
    state = {  }
    render() { 
        return ( 
<>
    <div class="container" id="service-container">
        <div className="row" style={{textAlign: 'center', alignItems: 'center'}} >
          <div class="col-md-12 col-sm-12"> 
            <h4 class="Service-title" >Ayurvedic Treatments</h4>
          </div>
        <span style={{padding: '20px', fontWeight: 'bold'}}>
        Ayurvedic treatments are more than just satisfying massages and medicinal herbs. It’s about you.
         Our specialists’ primary duty is to reconnect your mind, body, and soul with the ultimate source 
         of healing— nature. Through our Ayurvedic treatments, accompanied by a healthy lifestyle, Ayurveda
          can heal various diseases from rheumatism, diabetes, gout, varicose veins, and more. Below are the
           best Ayurvedic treatments in Abu Dhabi that Adam & Eve Ayurveda Center can offer you:</span>
        {/* <div className="service-images">
          <div className="img-first-section">
            <div className="image-first-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="img-second-section">
            <div className="first-inner-second-image">
              <div className="second-section-first-inner-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="second-inner-second-image">
              <div className="second-section-second-inner-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="img-third-section">
            <div className="third-second-inner-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      */} 


     <div id="gallery" class="carousel slide service-carousel" data-ride="carousel">

    <div class="carousel-inner-service"  >
        <div class="carousel-item active">
            <div class="row">
                <div class="col-md-4 col-lg-4 col-sm-4">
                <img class="img-fluid" src="images/treatment-home/NadiPariskha.jpg" alt="NadiPariskha"/>
                <span class="service-gallery-span">&nbsp;&nbsp;Nadi Pariskha&nbsp;&nbsp;</span>
                <img class="img-fluid" src="images/treatment-home/Abyangam.jpg" alt="Abyangam"/>
                <span class="service-gallery-span">&nbsp;&nbsp;Abyangam&nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4 col-lg-4 col-sm-4">
                <img class="img-fluid" src="images/treatment-home/Podikizh.jpg" alt="Podikizhi" />
                <span class="service-gallery-span">&nbsp;&nbsp;Podikizhi &nbsp;&nbsp;</span>
                <img class="img-fluid" src="images/treatment-home/Shirodhara.jpg" alt="Shirodhara"/>
                <span class="service-gallery-span">&nbsp;&nbsp;Shirodhara &nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4 col-lg-4 col-sm-4">
                    <img class="img-fluid" src="images/treatment-home/Pizhichil.jpg" alt="Pizhichil"/>
                    <span class="service-gallery-span">&nbsp;&nbsp;Pizhichil &nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/NjavaraKizhi.jpg" alt="NjavaraKizhi"/>
                    <span class="service-gallery-span">&nbsp;&nbsp;NjavaraKizhi&nbsp;&nbsp;</span>
                </div>

            </div>
        </div>


        <div class="carousel-item">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Nasyam.jpg" alt="Nasyam"/>
                    <span class="service-gallery-span">&nbsp;&nbsp;Nasyam&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/Akshitarpanam.jpg" alt="Akshitarpanam" />
                    <span class="service-gallery-span">&nbsp;&nbsp;Akshitarpanam &nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Takradhara.jpg" alt="Takradhara" />
                    <span class="service-gallery-span">&nbsp;&nbsp;Takra Dhara&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/KashyaDhara.jpg" alt="KashyaDhara"/>
                    <span class="service-gallery-span">&nbsp;&nbsp;Kashya Dhara &nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Elakizhi.jpg" alt="Elakizhi" />
                    <span class="service-gallery-span">&nbsp;&nbsp;Elakizhi &nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/NarangaKhizi.jpg" alt="NarangaKhizi"/>
                    <span class="service-gallery-span">&nbsp;&nbsp;Naranga Kizhi &nbsp;&nbsp;</span>
                </div>
            </div>
        </div>


        <div class="carousel-item">
            <div class="row">
                <div class="col-md-4">
                     <img class="img-fluid" src="images/treatment-home/DhanyamlaDhara.jpg" alt="DhanyamlaDhara" /><span class="service-gallery-span">&nbsp;&nbsp;Dhanyamla Dhara &nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/KsheeraDhara.jpg" alt="KsheeraDhara" /><span class="service-gallery-span">&nbsp;&nbsp;Ksheera Dhara&nbsp;&nbsp;</span>

                </div>


                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Udwarthanam.jpg" alt="Udwarthanam"/><span class="service-gallery-span">&nbsp;&nbsp;Udwarthanam&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/KatiVasthi.jpg" alt="KatiVasthi" /><span class="service-gallery-span">&nbsp;&nbsp;Kati Vasthi &nbsp;&nbsp;</span>

                </div>


                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/JanuVashti.jpg" alt="JanuVashti"/><span class="service-gallery-span">&nbsp;&nbsp;Janu Vashti&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/GreevaVasthi.jpg" alt="GreevaVasthi"/><span class="service-gallery-span">&nbsp;&nbsp;Greeva Vasthi&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>


        <div class="carousel-item">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Lepam.jpg" alt="Lepam.jpg"/><span class="service-gallery-span">&nbsp;&nbsp;Lepam&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/Thalapothichil.jpg" alt="Thalapothichil"/><span class="service-gallery-span">&nbsp;&nbsp;Thalapothichil&nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4">
                     <img class="img-fluid" src="images/treatment-home/ShiroVasthi.jpg" alt="ShiroVasthi.jpg" /><span class="service-gallery-span">&nbsp;&nbsp;Shiro Vasthi &nbsp;&nbsp;</span>
                     <img class="img-fluid" src="images/treatment-home/Deeptissuemassage.jpg" alt="Deeptissuemassage" /><span class="service-gallery-span">&nbsp;&nbsp;Deep Tissue Massage &nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Lymphaticdrainage.jpg" alt="Lymphaticdrainage" /><span class="service-gallery-span">&nbsp;&nbsp;Lymphatic Drainage Massage&nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/Footreflexsology.jpg" alt="Footreflexsology" /><span class="service-gallery-span">&nbsp;&nbsp;Foot Reflexology &nbsp;&nbsp;</span>
                </div>
            </div>
        </div>




        <div class="carousel-item">
            <div class="row">
                <div class="col-md-4">
                <img class="img-fluid" src="images/treatment-home/HerbalFaceCareTherapy.jpg" alt="HerbalFaceCareTherapy"/><span class="service-gallery-span">&nbsp;&nbsp;Herbal Face Care Therapy &nbsp;&nbsp;</span>
                <img class="img-fluid" src="images/treatment-home/HotStone.jpg" alt="HotStone" /><span class="service-gallery-span">&nbsp;&nbsp;Hot Stone Massage &nbsp;&nbsp;</span>
                </div>

                <div class="col-md-4">
                    <img class="img-fluid" src="images/treatment-home/Deeptissuemassage.jpg" alt="Deeptissuemassage"/><span class="service-gallery-span">&nbsp;&nbsp;Deep Tissue Massage &nbsp;&nbsp;</span>
                    <img class="img-fluid" src="images/treatment-home/DetoxifyingScrub.jpg" alt="DetoxifyingScrub" /><span class="service-gallery-span">&nbsp;&nbsp;Detoxifying Scrub &nbsp;&nbsp;</span>        
                </div>

                <div class="col-md-4">
                   <img class="img-fluid" src="images/treatment-home/Detoxifyingwrap.jpg" alt="Detoxifyingwrap"/><span class="service-gallery-span">&nbsp;&nbsp;Detoxifying Wrap &nbsp;&nbsp;</span>
                  <img class="img-fluid" src="images/treatment-home/headmassage.jpg" alt="headmassage"/><span class="service-gallery-span">&nbsp;&nbsp;Head Massage &nbsp;&nbsp;</span>
                </div>

            </div>
        </div>


   
    </div>

    <a class="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#gallery" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>


</div>
     
     
      </div> 
    </div>
    
    
</>

         );
    }
}
 
export default ServiceGallery;