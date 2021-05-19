import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';

class SuccessMail extends Component {
    state = {  }
    render() { 
        return ( 
<>

<div className="container-fluid" style={{float: 'left'}}>
       <TopSection></TopSection>
       <StickyMenu></StickyMenu>
      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '100px' , marginTop: '200px' , 'text-align' : 'center' }}>
        <div className="row" >
        
             <div class="col-md-12">
                 <img src="images/success-icon.jpg" style={{ 'width' : '200px' }}/>
                <h2 style={{ 'font-weight' : '300' , 'color' : 'green' , 'font-family' : 'Charm Regular' }}>Request has been submitted. Our customer service representative will call you shortly for the booking confirmation.</h2>
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
 
export default SuccessMail;