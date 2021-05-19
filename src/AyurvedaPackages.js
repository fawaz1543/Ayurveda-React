import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";

  function AyurvedaPackages (props){
    const history=useHistory()
        return ( 
<>
        <div class="container" id="package-container">
          <div class="row" style={{ 'margin-top' : '50px' }}>
              <div class="col-md-12 col-sm-12">
                <h4 class="Service-title">Our Packages</h4>
              </div>
          </div>

          <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-12 align-items-center">
                <div className="first-package">
                <div className="first-package-header">
                   <h3>Ayur - Gold</h3>
                  <div style={{ margin: '40px 40px 0px 50px ' }}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 3000</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}><img src /> 8 Full Body Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>2 Reflexology</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>1 Body Type Analysis</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>1 Consultation</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>20% Discount on Slimming Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>20% Discount on Cosmetic Treatments</li>
                  </ul>
                  <a href="/contact-us" class="btn btn-primary">Enquire Now</a>
                </div>
                </div> 
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
               <div className="second-package">
                <div className="second-package-header">
                  <h3>Ayur - Platinum</h3>
                  <div style={{ margin: '40px 40px 0px 50px '}}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 5000</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>12 Full Body Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>2 Shirodhara</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>2 Body Type Analysis</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>2 Consultation</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>30% Discount on Slimming Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>30% Discount on Cosmetic Treatments</li>
                  </ul>

                  <a href="/contact-us"  class="btn btn-primary">Enquire Now</a>

                </div>
               </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
               <div className="third-package">
                <div className="third-package-header">
                  <h3>  Ayur - Diamond</h3>
                  <div style={{ margin: '40px 40px 0px 50px '}}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 7500</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>20 Full Body Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>4 Shirodhara</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>3 Body Type Analysis</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>3 Consultation</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>40% Discount on Slimming Therapy</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>40% Discount on Cosmetic Treatments</li>
                  </ul>
                  <a href="/contact-us"  class="btn btn-primary">Enquire Now</a>
                </div>
              </div> 

              </div>





          </div>


            {/* <div className="row" id="package-section" style={{marginTop: '30px', marginBottom: '50px'}}>
            <h4 class="Service-title" >Our Packages</h4>
            <div className="package-wrapper">
              <div className="first-package">
                <div className="first-package-header">
                  <h3>Ayur - Gold</h3>
                  <div style={{ margin: '40px 40px 0px 50px ' }}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 3000</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}><img src /> 9 Full Body Podikizhi (Bundle Therapy) + Steam Bath</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>3 Shirodara + Full Body Massage</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>Free Consultation+ Body Type Analysis</li>
                  </ul>
                </div>
              </div> 
              <div className="second-package">
                <div className="second-package-header">
                  <h3>Ayur - Platinum</h3>
                  <div style={{ margin: '40px 40px 0px 50px '}}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 5000</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>12 Full Body Podikizhi (Bundle Therapy) + Steam Bath</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>6 Shirodara + Full Body Massage</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>Free Consultation+ Body Type Analysis</li>
                  </ul>
                </div>
              </div> 
              <div className="third-package">
                <div className="third-package-header">
                  <h3>  Ayur - Diamond</h3>
                  <div style={{ margin: '40px 40px 0px 50px '}}>
                    <h3 style={{color: '#e17f43', fontWeight: 'bold'}}>AED 7500</h3>
                  </div>
                  <ul className="package-list">
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>18 Full Body Podikizhi (Bundle Therapy) + Steam Bath</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>9 Shirodara + Full Body Massage</li>
                    <li style={{backgroundColor: '#EAEAEA', paddingTop: '10px'}}>5 Reflexology (1 Hr)</li>
                    <li style={{backgroundColor: '#ffffff', paddingTop: '10px'}}>2 Free Consultation+ Body Type Analysis</li>
                  </ul>
                </div>
              </div> 
            </div>
          </div> 
         */}
        </div>
         
</>

         );
    
}
 
export default AyurvedaPackages;