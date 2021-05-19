import React, { Component , useState } from 'react';
import config from '../src/services/config.json';
import http from '../src/services/httpservices';
import { useHistory } from 'react-router-dom';
import emailDataService from "../src/services/email-data-service";


const Form = (params) => {
    const history=useHistory()

    const [mail,setEmail]= useState([]);
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

            <div class="row" style={{height: 'auto', backgroundColor: '#ededed', marginBottom: '20px', 'border-radius': '10px' , 'margin-top' : '20px'}}>
                 <div className="col-md-12" style={{padding: '20px'}}>
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
      <input type="text" class="form-control"   name="contact" onChange={e => onChange('contact', e.target.value)} required />
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
      <button type="Submit" className="btn btn-primary  btn-block">Submit</button>
    </div>
  </form>



              
             
              </div>
            </div>
            </div>


         );
    }

export default Form;