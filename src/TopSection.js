import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import { useHistory } from 'react-router-dom';

  function TopSection () {
  const history=useHistory()
    
        return ( 
       
        <>  
          <div className="row top-section">  
                 
          <div class="col-md-12 d-flex pt-2">
            <div class="col-md-9 offset-md-3" id="top-contact-details">
                <span id="mail" style={{ 'color':'#ffffff' , 'font-size' : '13px' }}><i class="fa fa-envelope" style={{ 'color' : '#ffffff' }}></i> &nbsp; ayurveda@aesmc.com</span>
                <span id="phone" style={{ 'color':'#ffffff' , 'font-size' : '13px' , 'margin-left' : '50px' }}><i class="fa fa-phone" style={{ 'color' : '#ffffff' }}></i> &nbsp; 02 307 1199 | 056 418 4499</span>
                <span id="website" style={{ 'color':'#ffffff' , 'font-size' : '13px' , 'margin-left' : '50px' }}><i class="fa fa-globe" style={{ 'color' : '#ffffff' }}></i> &nbsp; <a href="https://www.aesmc.com" target="_blank" style={{ 'color' :'#ffffff' }}>Adam & Eve Specialized Medical Centre</a> </span>
                <span id="hours" style={{ 'color':'#ffffff' , 'font-size' : '13px' , 'margin-left' : '50px' }}><i class="fa fa-map-marker" style={{ 'color' : '#ffffff' }}></i> &nbsp; Opening Hours : Sat - Fri 09:00AM - 10:00PM</span>
            </div>
          </div>



            <div className="col-md-12 col-lg-12">
              <div className="col-md-1 col-lg-1" style={{display: 'inline-flex'}}>
              </div>
              <div className="col-md-1 col-lg-1 logo-div" style={{display: 'inline-flex'}}>
                 <a href="/"><img src="images/AdamnEve-AyurvedaLogo.png" className="img-responsive logo" /></a>
              </div>
              <div className="col-12 col-sm-12 col-md-10 col-lg-10 menu-nav-layout" style={{display: 'inline-flex' , 'margin-top' : '20px' }}>
                  <NavigationMenu></NavigationMenu>
                  <a href='/contact-us' class="btn btn-danger home-book-appointment h-25" style={{ 'position' : 'relative' , 'top' : '0px' }}>Book an Appointment</a>
              </div>
            </div>
           
          </div> 
            
 </>

        );
    
}
 
export default TopSection;