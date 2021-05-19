import React, { Component } from 'react';
export const ContactForm =() =>{
  
        return ( 
<>
        <div class="contact-wrapper" >
            <h5 style={{ 'font-weight' : 'bold' }} >Request an Appointment</h5>
            <hr/>
            <form action="/contact.php" id="phpcontactform" method="POST" data-redirect="success.html">
                                <div class="form-group">
                                    <input type="text" class="form-control " name="name" required title="Your full name please"  placeholder="Full Name"/>
                                </div>
        
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" required title="We need your email address" placeholder="Email ID" />
                                </div>
        
                                <div class="form-group">
                                    <input type="text" class="form-control" name="phone" required title="Please enter your phone number" placeholder="Contact Number" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="phone" required title="Please enter your phone number" placeholder="Contact Number" />
                                </div>
        
                                <div class="text-center top-space">
                                    <button type="submit" class="btn btn-success btn-block btn-xl" id="js-contact-btn">Book Now</button>
                                    <div id="js-contact-result" data-success-msg="Form submitted successfully." data-error-msg="Oops. Something went wrong."></div>
                                </div>
                            </form>
                                 </div> 

                {/*  <input type="text" value="{this.state.cnctno}" id="contactno" name="contactno"
                 class="contact-form" Placeholder="Enter your Contact Number"  onChange={e => this.setState({ contactno: e.target.value })}/>
                <input type="text" value="{this.state.emailid}" id="email"  name="email" class="contact-form" 
                Placeholder="Enter your Email ID"  onChange={e => this.setState({ email: e.target.value })}/>
                <input type="text" value="{this.state.subject}" id="subject" name="subject" 
                class="contact-form" Placeholder="Enter your Message"  onChange={e => this.setState({ subject: e.target.value })}/> */} 

</>
         );


}


export default ContactForm;