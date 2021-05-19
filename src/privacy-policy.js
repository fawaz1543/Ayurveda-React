import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import ServiceList from './ServiceList';
import Footer from './footer';


class PrivacyPolicy extends Component {
    state = {  }
    render() { 
        return ( 

            <>

<div className="container-fluid" style={{float: 'left'}} id="privacy">
       <TopSection></TopSection>
       <StickyMenu></StickyMenu>
      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px' , marginTop: '150px' , 'text-align' : 'justify' }}>
        <div className="row">


          <div class="col-md-9 order-sm-9">

            <h3 ><b>Privacy Policy</b></h3>
            <hr/>

            <p>Adam & Eve Ayurveda respects your privacy and does not sell, rent or loan any identifiable information collected on this site. Any information that you give will be treated in a careful and secure manner. It will not be used in ways to which you have not consented. This statement explains how we may collect and use information about you through our various websites.</p>

            <p>If you have any questions about our privacy policies, want to exercise your right to see a copy of the information that we hold about you, or think that information we hold about you may need to be corrected, please send an email to ayurveda@aesmc.com</p>

            <p>We do not seek to identify individual visitors unless they volunteer their contact details through one of the forms on the site. Various forms on our site invite you to submit your contact details and other information about yourself or your organization, or to send us emails which may, of course, also identify you. In each case, the purpose for which you are invited to give us information is clear. We will only use your details to send you information from Adam & Eve Ayurveda that you have specifically requested to receive.</p>

            <p>If you no longer wish to receive such information, kindly send an e-mail to ayurveda@aesmc.com. We will not use your information for purposes that are not clear when you provide your details, and will not disclose it outside of the Adam & Eve Ayurveda, except in very limited circumstances and only with your agreement or where we are legally obliged to do so.</p>

            <p>Adam & Eve Ayurveda strives to protect the security of information that you provide, and will comply at all times with its statutory and any other obligations in this regard.</p>

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
 
export default PrivacyPolicy;