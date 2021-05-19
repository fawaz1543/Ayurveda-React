import React, { Component , useState  } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import Form from './Form';
import Footer from './footer';
import config from '../src/services/config.json';
import http from '../src/services/httpservices';
import emailDataService from "../src/services/email-data-service";
import DocumentMeta from 'react-document-meta';

const Contact = (params) => {
  const [mail,setEmail]= useState([]);
  const handleSubmit=(e) =>{
      e.preventDefault();
      sendMail(); 
   }

   const sendMail = async () =>{
     await http.post(config.apiEndPoint+emailDataService.SendEmail,mail)
     .then((response) => {
      console.log('Mailsuccess');
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


  const meta = {
   title: 'Ayurvedic Center in Abu Dhabi | Adam & Eve Ayurveda',
   description: 'If you can’t wait to visit our Ayurvedic center and experience our amazing therapies, book an appointment today! ',
   meta: {
     charset: 'utf-8',
     name: {
       keywords: 'ayurveda,ayurveda centre,ayurveda centre in abudhabi'
     }
   }
 };




   return (

     <> 
        <div className="container-fluid" style={{float: 'left'}} id="contact-anchor">
         <DocumentMeta {...meta}><span></span></DocumentMeta>
         <TopSection></TopSection>
         <StickyMenu></StickyMenu>
        
        {/* Banner Section Starts Here*/}
           <div className="row Contact-banner" >
              <div className="col-md-12 col-lg-12">
                   <span class="blog-title-txt">Contact Us</span><br />
              </div>   
           </div>
        {/* Banner Section Ends Here*/}


        {/* Content Section Starts Here*/}
        <div className="container" style={{marginBottom: '20px' , 'margin-top' : '50px' }}>
        <div class="row" style={{ 'margin-top' :'10px' }}>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="" class="active">Contact Us</a></li>    
        </ul>
       </div>

          <div className="row">
            <div className="col-md-6" style={{ 'margin-top' : '20px' , 'border' : '1px solid #EAEAEA' , 'padding': '50px' , 'color' : '#000' }}>

            <h3 style={{ 'text-align' : 'left' }}>Call us or fill up the form to book your consultation or Ayur package.</h3>
               <hr/>
               <h6 style={{  'font-size':'18px' }}>
                Our customer service representative will be in touch with you shortly.
               </h6>


               <div class="col-md-12 contact-left-layout">
                   <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;<span style={{ 'font-weight' : 'bold' , 'color' : '#fff' }}><b>General Support</b></span> <br/>
                   <span style={{ 'margin-left' : '22px' , 'font-weight': '100' }}>ayurveda@aesmc.com</span>
               </div>

               <div class="col-md-12 contact-left-layout">
               <i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;<span style={{ 'font-weight' : 'bold' , 'color' : '#fff' }}><b>Let's Talk</b></span> <br/>
                   <span style={{ 'margin-left' : '22px' , 'font-weight': '100' }}> 02 307 1199  | 056 418 4499</span>
               </div>

               <div class="col-md-12 contact-left-layout">

               <i class="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;<span style={{ 'font-weight' : 'bold' , 'color' : '#fff' }}><b>Address</b></span> <br/>
                   <div style={{ 'margin-left' : '15px' , 'font-weight': '100' }}> 
                   Pink Building, FLoor No. 01-4, Next to Royal Rose Hotel , Electra Street  P.O BOX : 48157 , Abudhabi , UAE
                   </div>
               </div>
            </div>
            <div className="col-md-6" style={{ 'margin-top' : '20px' , 'background-color' : 'rgb(237, 237, 237)' }}>
               <br/> 
                  {/* <ContactForm></ContactForm> */}
                  <Form></Form>

            </div>
          </div>

        </div>
        {/* Content Section Close Here*/}
       
           {/* <GoogleMap></GoogleMap> */}


      </div>
      <GoogleMap></GoogleMap>
             <Footer></Footer>

</>

    )


}

export default Contact;