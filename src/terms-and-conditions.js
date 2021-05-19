import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceList from './ServiceList';
import Footer from './footer';

class TermsandConditions extends Component {
    state = {  }
    render() { 
        return ( 

            <>

            <div className="container-fluid" style={{float: 'left'}}  id="terms">
            <TopSection></TopSection>
            <StickyMenu></StickyMenu>
           {/* Content Section Starts Here*/}
           <div className="container" style={{marginBottom: '20px' , marginTop: '150px' , 'text-align' : 'justify' }}>
             <div className="row">

             <div class="col-md-9 order-sm-9">
     
     <h3><b>Terms & Conditions</b></h3>
     <hr/>

     <p>Reproduction of part or all of the contents in any form is prohibited unless for personal use. None of the content of this web page may be copied or otherwise incorporated into or stored in any other website, electronic retrieval system, publication or other work in any form (whether hard copy, electronic or other). For the avoidance of doubt, framing of this site or any part of it is not permitted without express permission.</p>

     <p>Any enquiries should be directed to ayurveda@aesmc.com.</p>

     <p>Please note that the documents and information available on this website are provided as a service only and are not the official versions of Adam & Eve Ayurveda disclosure documents as required by any applicable securities, financial services, company law or any other legal requirements. In addition, website content may not always be the most current source for company information.</p>

     <p>Internet software or transmission problems could produce inaccurate or incomplete copies of various documents when downloaded and displayed on a user's computer.</p>

     <p>The information and documents available on this website are not intended to provide specific legal, accounting, investment / financial or tax advice to any user.</p>

    <p>This website may provide links or references to other sites. Adam & Eve Ayurveda makes no representations, warranties or assurances as to any information in such sites and has no responsibility for their content, accuracy, currency or completeness and shall not be liable for any damages or injury arising from that content, accuracy, currency or completeness. Any links to other sites are provided merely as a convenience to the users of this website.</p>


    <p>The trademarks, services marks, trade names, trade dress and products represented on the website are protected internationally. No use of these may be made without prior, written authorization of Adam & Eve Ayurveda except to identify the products or services of the company.</p>


    <p>Any communications you send to this website or otherwise Adam & Eve Ayurveda by electronic mail are on a non- confidential basis, and Adam & Eve Ayurveda is under no obligation to refrain from reproducing, publishing or otherwise using them in any way or for any purpose. Adam & Eve Ayurveda shall be free to use the content of any such communication, including any ideas, inventions, concepts, techniques or know-how disclosed therein, for any purpose including developing, manufacturing and/or marketing goods and services.</p>


    <p>This website is provided as a service to its visitors. Adam & Eve Ayurveda reserves the right to delete, modify or supplement the content of this site at any time for any reason without notification to anyone.</p>

   </div>

                 <div class="col-md-3 order-sm-3">
                     <ServiceList></ServiceList>
                 </div>


           </div>
     
            
             {/* <AyurvedaPackages></AyurvedaPackages>
             <RecentBlogs></RecentBlogs> */}
         
           </div>
     
          </div>
          <Footer></Footer>
                    
     
</>

         );
    }
}
 

export default TermsandConditions;