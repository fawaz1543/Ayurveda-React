import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavLink, Route } from 'react-router-dom';


function NavigationMenu(props){
  const history=useHistory()
    // state = {  }
    // render() { 
      
        return ( 
            <>

<nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fa fa-bars" style={{ 'font-size' : '25px' }}></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                    {/* <NavLink to="/" style={{color: '#ffffff' }} activeclassName="navactive"  exact={true}>Home</NavLink> */}
                    <a className="nav-link" href="/" style={{color: '#ffffff'}}>Home</a>
                </li>
                <li className="nav-item">
                {/* <NavLink to="/about-us" style={{color: '#ffffff'}} activeclassName="navactive">About</NavLink> */}
                  <a className="nav-link" href="/about-us" style={{color: '#ffffff'}}>About Us</a>
                </li>

                <li className="nav-item">
                     {/* <NavLink to="/treatments" style={{color: '#ffffff'}} activeclassName="navactive">Our Team</NavLink> */}
                     <a className="nav-link" href="/team" style={{color: '#ffffff'}}>Our Team</a>
                  </li> 

                <li className="nav-item">
                     {/* <NavLink to="/treatments" style={{color: '#ffffff'}} activeclassName="navactive">Our Treatments</NavLink> */}
                     <a className="nav-link" href="/treatments" style={{color: '#ffffff'}}>Our Treatments</a>
                  </li> 
                <li className="nav-item dropdown">
                <a className="dropdown-toggle mt-2"  style={{color: '#ffffff'}}>Ayur Cure</a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                  {/* <h5 class="nav-title" style={{ 'font-style' : 'italic' , 'background-color' : '#EAEAEA' , 'color' : '#333333'}}>Following are the Ayurveda Services provided by Adam & Eve</h5> */}
                    <div class="dropdown-layout" style={{float: 'left'}}>
                   
                     <div class="dropdown-first-inner-layout" style={{float: 'left'}}>
                         <h5 class="nav-title">HEALTH CONCERN</h5>
                         <div class="dropdown-health-inner" style={{ 'float' : 'left' , 'border-right' : '1px solid #008000'  }}>
                           <ul className="submenu-list-health">
                        <li><a href="/cervical-spondylosis" className="dropdown-item"><i class="fa fa-leaf nav-leaf" ></i> &nbsp;Cervical Spondylosis &amp; Neck Pain</a></li>
                        <li><a href="/sciatica-and-lower-back-pain" className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp; Sciatica &amp; Lower Back Pain</a></li>
                        <li><a href="/disc-prolapse" onClick={()=>{history.push('/disc-prolapse')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Disc Prolapse</a></li>
                        <li><a href="/fibromyalgia" onClick={()=>{history.push('/fibromyalgia')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Fibromyalgia</a></li>
                        <li><a href="/arthritis-and-joint-pain" onClick={()=>{history.push('/arthritis-and-joint-pain')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Arthritis &amp; Joint Pain</a></li>
                        <li><a href="/gout" onClick={()=>{history.push('/gout')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Gout</a></li>
                        <li><a href="/frozen-shoulder" onClick={()=>{history.push('/frozen-shoulder')}}  className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Frozen Shoulder</a></li>
                        <li><a href="/varicose-veins" onClick={()=>{history.push('/varicose-veins')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Varicose Veins</a></li>
                        <li><a href="/diabetic-care-management" onClick={()=>{history.push('/diabetic-care-management')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Diabetic Care Management</a></li>
                        <li><a href="/Psoriasis-Eczema" onClick={()=>{history.push('/Psoriasis-Eczema')}} className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Psoriasis & Eczema</a></li>
                      </ul>
                         </div>

                         <div class="dropdown-health-inner" style={{ 'float' : 'left'  }}>
                      <ul className="submenu-list-health" style={{ 'float' : 'left' }}>
                      <li><a href="/obesity-management" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Obesity Management</a></li>
                        <li><a href="/sinusitis-allergy" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Sinusitis</a></li>
                        <li><a href="/dry-eye-syndrome-and-eye-strain" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Dry Eye Syndrome & EyeStrain</a></li>
                        <li><a href="/digestive-disorder" className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Digestive Disorder</a></li>
                        <li><a href="/stress-management" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Stress Management</a></li>
                        <li><a href="/insomnia"  className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Insomnia</a></li>
                        <li><a href="/pcos-and-menopause" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;PCOS & Menopause</a></li>
                        <li><a href="/multiple-sclerosis" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Multiple Sclerosis</a></li>
                        <li><a href="/systemic-lupus-erythematosus" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Systemic Lupus Erythematosus</a></li>
                        <li><a href="/sports-injury" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Sports Injury</a></li>
                        <li><a href="/hair-fall-and-dandruff" className="dropdown-item"><i class="fa fa-leaf nav-leaf"/> &nbsp;Hairfall &amp; Dandruff</a></li>
                      </ul>
                      </div>
                        <div class="service-ayur-icons" style={{ 'margin-left' : '30px' }}>
                          <img src="images/ayurveda-icon1.png" style={{ 'width' : '50px' , 'margin-left' : '10px' }} />  
                          <img src="images/ayurveda-icon2.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} />  
                          <img src="images/ayurveda-icon3.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} />  
                          <img src="images/ayurveda-icon4.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} /> 
                          <img src="images/ayurveda-icon5.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} /> 
                        </div> 
                    </div>

                   



                    <div class="right-list-service" style={{float: 'left'}}>
                    <h5 class="nav-title">DOCTOR CONSULTATION</h5>     
                      <ul className="submenu-list-doctor">
                        <li><a href="/ayurveda-consultation" className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Ayurveda Consultation</a></li>
                        <li><a href="/nadi-pariksha" className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Naadi Pariksha</a></li>
                        <li><a href="/personalized-diet-program" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Personalized Diet Program</a></li>
                        <li><a href="/lifestyle-recommendations" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Lifestyle Recommendations</a></li>
                      </ul>
                  
                      <h5 class="nav-title">WELLNESS &amp; DETOX</h5>
                      <br/>
                      <ul className="submenu-list-wellness" >
                        <li><a href="/slimming-therapies" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Slimming Therapies</a></li>
                        <li><a href="/detox-program" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Detox Program</a></li>
                        <li><a href="/beauty-therapies" className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Beauty Therapies</a></li>
                        <li><a href="/immunity-boost-program"  className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Immunity Boost Program</a></li>
                      </ul>

                      <h5 class="nav-title">PREGNANCY &amp; BABYCARE</h5>
                      <ul className="submenu-list-pregnancy">
                        <li><a href="/holistic-pregnancy"   className="dropdown-item"><i class="fa fa-leaf nav-leaf" /> &nbsp;Holistic Pregnancy</a></li>
                        <li><a href="/child-care-and-baby-care" className="dropdown-item"><i class="fa fa-leaf nav-leaf"  /> &nbsp;Child Care & Baby Care</a></li>
                      </ul>

                      </div>
                 
                  </div>
                  </div>
                  </li>

                  <li className="nav-item dropdown">
                <Link className="dropdown-toggle"  style={{color: '#ffffff'}}>Media</Link>

                  <div className="dropdown-menu media-dropdown" aria-labelledby="navbarDropdownMenuLink">
                
                  {/* <h5 class="nav-title" style={{ 'font-style' : 'italic' , 'background-color' : '#EAEAEA' , 'color' : '#333333'}}>Following are the Ayurveda Services provided by Adam & Eve</h5> */}
                    <div class="dropdown-layout media-dropdown-layout" style={{float: 'left'}}>
                      <ul class="nav-media">
                        {/* <li><a href="/Gallery"  className="dropdown-item">Gallery</a></li> */}
                        <li><a href="/video"   className="dropdown-item">Video</a></li>
                      </ul>
                      </div>
                  </div>
              </li>
                <li className="nav-item">
                     {/* <NavLink to="/blog" style={{color: '#ffffff'}} activeclassName="navactive">Blog</NavLink> */}
                  <a className="nav-link" href="/blog" style={{color: '#ffffff'}}>Blog</a>
                </li>
                <li className="nav-item">
                  {/* <NavLink to="/contact-us" style={{color: '#ffffff'}}>Contact us</NavLink> */}
                  <a className="nav-link" href="/contact-us" style={{color: '#ffffff'}}>Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>             
      


      

      
           </>

         );
    //}
}
 
export default NavigationMenu;