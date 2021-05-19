import React, { Component , useState } from 'react';
import config from '../src/services/config.json';
import http from '../src/services/httpservices';
import emailDataService from "../src/services/email-data-service";
import { useHistory } from 'react-router-dom';

function Footer () {
    const history=useHistory()
    const [submail,setSubscriptionEmail]= useState({type:1});
    const handleSubmit=(e) =>{
      e.preventDefault();
      emailSubscribe(); 
   }
   

   const emailSubscribe =  () =>{
   const emailSub = {
     subscription: submail
    } ;
    http.post(config.apiEndPoint+emailDataService.subscribeEmail,emailSub)
     .then((response) => {
      console.log(response);
      history.push('/Thank-you-for-Subscription');
      
      })
    .catch((error) => {
      console.log(error)
    })
    }


        return ( 
<>
   
<div className="row container-fluid footer">
  <div class="row container" style={{'margin' :'0 auto'}}>
          <div class="col-md-4">
                   <div id="first-footer-section" style={{width: '300px', height: '25px', borderBottom: '1px solid #a3a532'}}>
                      <h5 style={{color: '#ffffff' , 'font-size' : '15px'}}>About ADAM & EVE AYURVEDA</h5>
                    </div>
                    <div style={{ 'color' : '#ffffff' , 'font-size' : '13px' , 'margin-top' : '10px' , 'text-align' : 'justify' }}>
                    <p>Adam & Eve Ayurveda is an alternative healing center located in Abu Dhabi. Here, we focus on 
                      your health and its connection to nature and how you can heal with it. Mother Nature is the 
                      ultimate source of cure as she ceaselessly creates natural medicines that you probably have 
                      never heard of.We, at Adam & Eve Ayurveda, are trained and qualified to be the middlemen between nature and your
                       path to healing. </p>


                    </div>
                    {/* <ul className="footer-list" style={{float: 'left'}}>
                      <li><a href>AYURVEDA</a></li>
                      <li><a href>PAEDIATRICS</a></li>
                      <li><a href>DENTISTRY</a></li>
                      <li><a href>ORTHODONTICS</a></li>
                      <li><a href>DERMATOLOGY</a></li>
                      <li><a href>ORTHOPAEDIC</a></li>
                      <li><a href>FAMILY MEDICINE</a></li>
                    </ul>

                    <ul className="footer-list" style={{float: 'left', marginLeft: '45px'}}>
                      <li><a href>OBSTETRIC &amp; GYNAECOLOGY</a></li>
                      <li><a href>ENT</a></li>
                      <li><a href>GENERAL MEDICINE</a></li>
                      <li><a href>INTERNAL MEDICINE</a></li>
                      <li><a href>PAIN RELIEF UNIT</a></li>
                      <li><a href>PYSIOTHERAPY</a></li>
                      <li><a href>RADIOLOGY</a></li>
                    </ul> */}
          </div>

          <div class="col-md-2">
                   <div id="second-footer-section"  style={{width: '150px', height: '25px', borderBottom: '1px solid #a3a532'}}>
                      <h5 style={{color: '#ffffff' , 'font-size' : '15px'}}>QUICK LINKS</h5>
                    </div>
                    <ul className="footer-list">
                      <li><a href="#home-anchor" onClick={()=>{history.push('/')}} >HOME</a></li>
                      <li><a href="#about-anchor" onClick={()=>{history.push('/about-us')}} >ABOUT US</a></li>
                      <li><a href="#blog-anchor" onClick={()=>{history.push('/blog')}} >BLOG</a></li>
                      <li><a href="#contact-anchor" onClick={()=>{history.push('/contact-us')}}>CONTACT US</a></li>
                      <li><a href="Brochure/Adam&Eve-Ayurveda Brochure.pdf" target="_blank">DOWNLOAD BROCHURE</a></li>
                    </ul>
          </div>


          <div class="col-md-3">
                    <div  id="third-footer-section"  style={{width: '150px', height: '25px', borderBottom: '1px solid #a3a532'}}>
                      <h5 style={{color: '#ffffff' , 'font-size' : '15px'}}>CONTACT US</h5>
                    </div>
                    <ul className="footer-list">
                      <li><a><i class="fa fa-map-marker"></i> &nbsp;Pink Building, FLoor No. 01-4,</a></li>
                      <li><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next to Royal Rose Hotel</a></li>
                      <li><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electra Street P.O BOX : 48157</a></li>
                      <li><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abudhabi , UAE</a></li>
                      <li><a><i class="fa fa-phone"></i> &nbsp; 02 307 1199 | 056 418 4499</a></li>
                      <li><a><i class="fa fa-envelope"></i>&nbsp;&nbsp;ayurveda@aesmc.com</a></li>
                      <li><a><i class="fa fa-globe"></i>&nbsp;&nbsp;www.aesmc.com/ayurveda</a></li>
                    </ul>
          </div>


          <div class="col-md-3">
                    <div id="third-footer-section"  style={{width: '160px', height: '25px', borderBottom: '1px solid #a3a532'}}>
                      <h5 style={{color: '#ffffff' , 'font-size' : '15px'}}>SCAN FOR LOCATION</h5>
                    </div>
                    <div className="qrcode">
                    </div>
          </div>

          </div>

  <div class="row container" style={{ "margin" : '0 auto'}}>
         <div class="col-md-8 subscribe-layout">
         <h6 style={{ 'color' : '#ffffff' }}>Subscribe Our Newsletter</h6>
                 <form onSubmit={handleSubmit}>  
                   <div className="subscribe-wrapper">
                        <input type="submit" defaultValue="Subscribe" className="subscribe" />
                        <input type="text" placeholder="Enter your email to subscribe our Newsletter" name="email_subcription" onChange={e => setSubscriptionEmail(e.target.value)}  style={{width: '100%', height: '39px', border: 'none', outline: 'none'}} />
                  </div>
                  </form>
         </div>

         <div class="col-md-4">
                 <div className="social">
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/adamandeveayurveda" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                      <li><a href="https://www.instagram.com/adamandeve_ayurveda" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                      <li><a href="https://www.youtube.com/channel/UCcyeCShViAlaiLEerfyb8PQ" target="_blank"><i className="fa fa-youtube" ></i></a></li>
                      <li><a href="https://wa.me/+971564184499" target="_blank"><i className="fa fa-whatsapp" ></i></a></li>
                    </ul>
                  </div>
         </div>

         
  </div>

 </div> 
          <div className="row">
            <div className="copyright">
              <div style={{marginTop: '-38px'}}><a href="#privacy" href='/privacy-policy' >Privacy Policy</a> |  <a href="#terms" href='/terms-and-conditions' >Terms & Conditions</a> </div>
              <div >Copyright © Adam &amp; Eve Specialized Medical Center. All Rights Reserved | DOH Approval No. MF1103 </div>           
            </div>
          </div> 
       




 </>
         );
    
}
 
export default Footer;