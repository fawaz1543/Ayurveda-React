import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


function StickyMenu () {
    const history=useHistory()
        return ( 

<>     

            <div class="icon-bar">
                <a href="https://www.facebook.com/adamandeveayurveda" target="blank" class="facebook" data-toggle="tooltip" data-placement="right" title="Facebook"><i class="fa fa-facebook" id="fixedicons"></i></a> 
                <a href="https://www.instagram.com/adamandeve_ayurveda" class="instagram" target="blank" data-toggle="tooltip" data-placement="right" title="Instagram"><i class="fa fa-instagram" id="fixedicons"></i></a> 
                {/* <a href="" class="google" target="_new"><i class="fa fa-google" style={{ 'color' : '#ffffff' }}></i></a> 
                <a href="#" class="linkedin" target="_new"><i class="fa fa-linkedin" style={{ 'color' : '#ffffff' }}></i></a> */}
       
                <a href="Brochure/Adam&Eve-Ayurveda Brochure.pdf" target="_blank" class="download" data-toggle="tooltip" data-placement="right" title="Download Brochure"><i class="fa fa-download" id="fixedicons"></i></a>  
            </div>

            <a class="whats-app" href="https://wa.me/+971564184499" target="blank" data-toggle="tooltip" data-placement="right" title="Whatsapp us"><i class="fa fa-whatsapp my-float" style={{ 'margin-left' : '5px' }}></i></a>
            
</>
         );
}
 

export default StickyMenu;