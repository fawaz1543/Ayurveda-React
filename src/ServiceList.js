import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
function ServiceList() {
    const history=useHistory()
        return (         
           <div className="Treatment-left-service-list">
            <br />                    
            <ul className="submenu-service-list">
            <h5 style={{fontSize: '13px', marginLeft: '20px', fontWeight: 'bold' , 'color' : '#fff'}}>HEALTH CONCERN</h5>
                        <li><a href="cervical-spondylosis" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" ></i> &nbsp;Cervical Spondylosis &amp; Neck Pain</a></li>
                        <li><a href="sciatica-and-lower-back-pain" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Sciatica &amp; Lower Backpain  </a></li>
                        <li><a href="disc-prolapse" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Disc Prolapse</a></li>
                        <li><a href="fibromyalgia" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Fibromyalgia</a></li>
                        <li><a href="arthritis-and-joint-pain" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Arthritis &amp; Joint Pain</a></li>
                        <li><a href="gout" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Gout</a></li>
                        <li><a href="frozen-shoulder"  className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Frozen Shoulder</a></li>
                        <li><a href="varicose-veins" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Varicose Veins</a></li>
                        <li><a href="diabetic-care-management" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Diabetic Care Management</a></li>
                        <li><a href="Psoriasis-Eczema" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Psoriasis & Eczema</a></li>
                        <li><a href="obesity-management" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Obesity Management</a></li>
                        <li><a href="sinusitis-allergy" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Sinusitis</a></li>
                        <li><a href="dry-eye-syndrome-and-eye-strain" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Dry Eye Syndrome & EyeStrain</a></li>
                        <li><a href="digestive-disorder" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Digestive Disorder</a></li>
                        <li><a href="stress-management" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Stress Management</a></li>
                        <li><a href="insomnia" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Insomnia</a></li>
                        <li><a href="pcos-and-menopause" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;PCOS & Menopause</a></li>
                        <li><a href="multiple-sclerosis" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Multiple Sclerosis</a></li>
                        <li><a href="systemic-lupus-erythematosus" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Systemic Lupus Erythematosus</a></li>
                        <li><a href="sports-injury" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Sports Injury</a></li>
                        <li><a href="hair-fall-and-dandruff" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"/> &nbsp;Hairfall &amp; Dandruff</a></li>
             </ul>   


             <ul className="submenu-service-list">
                      <h5 style={{fontSize: '13px', marginLeft: '20px', fontWeight: 'bold' , 'color' : '#fff'}}>DOCTOR CONSULTATION</h5>
                      <li><a href="ayurveda-consultation" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Ayurveda Consultation</a></li>
                        <li><a href="nadi-pariksha" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Naadi Pariksha</a></li>
                        <li><a href="personalized-diet-program" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Personalized Diet Program</a></li>
                        <li><a href="lifestyle-recommendations" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Lifestyle Recommendations</a></li>
            </ul>

            <ul className="submenu-service-list" >
                      <h5 style={{fontSize: '13px', marginLeft: '20px', fontWeight: 'bold' , 'color' : '#fff'}}>WELLNESS &amp; DETOX</h5>
                        <li><a href="slimming-therapies" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Slimming Therapies</a></li>
                        <li><a href="detox-program" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Detox Program</a></li>
                        <li><a href="beauty-therapies" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Beauty Therapies</a></li>
                        <li><a href="immunity-boost-program" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Immunity Boost Program</a></li>
           </ul>

           <ul className="submenu-service-list">
                      <h5 style={{fontSize: '13px', marginLeft: '20px', fontWeight: 'bold' , 'color' : '#fff'}}>PREGNANCY &amp; BABYCARE</h5>
                        <li><a href="holistic-pregnancy" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white" /> &nbsp;Holistic Pregnancy</a></li>
                        <li><a href="child-care-and-baby-care" className="dropdown-item"><i class="fa fa-leaf nav-leaf-white"  /> &nbsp;Child Care & Baby Care</a></li>
          </ul>


           </div>
         );
    
}
 
export default ServiceList;