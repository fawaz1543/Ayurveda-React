import React, { Component } from 'react';
class ServiceCircle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
            {/* Circle Section Starts Here*/}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 circle-section">
              <div className="circle-layout-one">
                <span style={{fontWeight: 'bold'}}>Doctor Consultation</span>
              </div>
              <div className="div-circle-one">
                <h5 style={{ 'color' : '#fff' , 'font-weight' : 'bold' }}>Doctor Consultation</h5>
              </div>
              <div className="circle-layout-two">
                <span style={{marginLeft: '10px', fontWeight: 'bold'}}>Our<br /> Treatments</span>
              </div>
              <div className="div-circle-two">
                
              </div>
              <div className="circle-layout-three">
                <span style={{fontWeight: 'bold'}}>Wellness Program</span>
              </div>
              <div className="div-circle-three">
                
              </div>
              <div className="circle-layout-four">
                <span style={{fontWeight: 'bold'}}>Pregnancy &amp; Babycare</span>
              </div>
              <div className="div-circle-four">
                
              </div>
              <div className="circle-layout-five">
                <span style={{fontWeight: 'bold'}}>Beauty Treatments</span>
              </div>
              <div className="div-circle-five">
                
              </div>
            </div>   
            {/* Circle Section Ends Here*/}
          </div>

         );
    }
}
 
export default ServiceCircle;