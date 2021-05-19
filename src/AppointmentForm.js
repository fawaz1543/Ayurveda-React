import React, { Component , useState } from 'react';
import config from '../src/services/config.json';
import http from '../src/services/httpservices';
import { useHistory } from 'react-router-dom';
import emailDataService from "../src/services/email-data-service";

const AppointmentForm = (params) => {
  const history=useHistory()

  const [mail,setEmail]= useState({type:2});
  const handleSubmit=(e) =>{
      e.preventDefault();
      sendMail(); 
   }

   const sendMail =  () =>{
 
    http.post(config.apiEndPoint+emailDataService.SendEmail,mail)
     .then((response) => {
      // console.log('Mailsuccess');
      history.push('/thank-you');
      
      })
    .catch((error) => {
      console.log(error)
    })
    }


   const onChange = (key, value) => {
      setEmail(prev => ({ 
          ...prev,
          [key]: value,
      }));
  }

        return ( 
<>
        <div class="container">
       
            <div className="row" id="book-appointment" style={{height: 'auto', backgroundColor: '#ededed', marginBottom: '20px', 'border-radius': '10px 50px 10px 10px' , 'margin-top' : '20px'}}>
            <div className="col-md-6" style={{padding: '20px'}}>
              <h4 style={{  'font-weight': 'bold' , 'text-align' : 'center' , 'font-size' : '20px' , 'background-image' : 'linear-gradient(45deg, #6da12e, #5fc596)' , 'border-radius' : '5px 20px 0px 20px' , 'color' : '#ffffff' ,  'padding' : '15px'   }}>Book an Appointment</h4>

              <div className="appointment-form-layout" style={{width: 'auto', marginTop: '20px'}}>
              {/*  Appointment Form   */}
             
              
  <form onSubmit={handleSubmit} data-toggle="validator" role="form">
     <div class="row">
      <div class="col-md-6">
      <div class="form-group">
      <label for="uname">Full Name <sup>*</sup></label>
      <input type="text" class="form-control" id="uname"  name="full_name" onChange={e => onChange('full_name', e.target.value)}  required />
    </div>
  
      </div>

      <div class="col-md-6">
      <div class="form-group">
      <label for="emailid">Email ID <sup>*</sup></label>
      <input type="text" class="form-control"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Incorrect Email ID .(format: xxx@xxx.xxx)"   name="email_addr" onChange={e => onChange('email_addr', e.target.value)} required />
    </div>

     </div>
     </div>


<div class="row">
     <div class="col-md-6">
               
    <div class="form-group">
      <label for="contact">Contact Number <sup>*</sup></label>
      <input type="text" class="form-control"    name="contact" onChange={e => onChange('contact', e.target.value)} required />
    </div>
    </div>
  

    <div class="col-md-6">
            
    <div class="form-group">
      <label for="contact">Preferred Date <sup>*</sup></label>
      <input type="date" class="form-control"  name="date"  onChange={e => onChange('date', e.target.value)} required />
    </div>
    
    </div>
    </div>


    <div class="row">
    <div class="col-md-12">
    <div class="form-group">
      <label for="contact">Message <sup>*</sup></label>
      <textarea class="form-control"  name="message" onChange={e => onChange('message', e.target.value)} required ></textarea>
    </div>
   </div>
</div>



    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember" required /> 
         
I understand that this is only an appointment request and will be scheduled only after a confirmation call from Adam & Eve Ayurveda helpdesk.
      </label>
    </div>

    <div className="form-group">
      <button type="Submit" className="btn btn-primary btn-block">Submit</button>
    </div>
  </form>




             
              </div>
            </div>

            <div id="why-ayurveda" class="col-md-6" style={{ 'background-image' : 'linear-gradient(45deg, #6da12e, #5fc596)' , 'border-radius' : '0px 50px 0px 50px' , 'padding' : '50px 20px 20px 20px' , 'color' : '#ffffff' , 'align-items' : 'center' , 'text-align' : 'center' }}>
              <h5><b>Why Ayurveda ?</b></h5>
              <hr/>
              <p style={{ 'text-align' : 'justify' , 'line-height' : '30px' }}>
              Ayurveda is based on the premise that the universe is made
              up of five elements: air, fire, water, earth, and ether. These
              elements are represented in humans by three ”doshas”, or
              energies: Vata, Pitta, and Kapha. When any of the doshas
              accumulate in the body beyond the desirable limit, the body
              loses its balance. 
              </p>

              <p style={{ 'text-align' : 'justify' , 'line-height' : '30px' }}>Every individual has a distinct balance, and our health and
well-being depend on getting the right balance of the three
doshas (”tridoshas”). Ayurveda suggests specific lifestyle
and nutritional guidelines to help individuals reduce the
excess dosha. </p>

              <p><i class="fa fa-arrow-left"></i> &nbsp;&nbsp;Fill up the form and Book your Appointment with us !</p>
           
           
              <div class="service-ayur-icons" style={{ 'marginTop' : '30px' }}>
                          <img src="images/ayurveda-icon1.png" style={{ 'width' : '50px' , 'margin-left' : '10px' }} />  
                          <img src="images/ayurveda-icon2.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} />  
                          <img src="images/ayurveda-icon3.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} />  
                          <img src="images/ayurveda-icon4.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} /> 
                          <img src="images/ayurveda-icon5.png" style={{ 'width' : '50px' , 'margin-left' : '10px'  }} /> 
                        </div> 

            </div>



          </div>
       </div> 
</>

         );
    
}
 
export default AppointmentForm;