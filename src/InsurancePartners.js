import React, { Component } from 'react';
class InsurancePartners extends Component {
    state = {  }
    render() { 
        return (
<>
        <div class="container">
           <div className="row" id="client-section">
             <h5 style={{fontWeight: 'bold'}}>Our Insurance Partners</h5>
               <span>
                  We associate with all leading medical insurance companies in the region
                  to guarantee you easier access, faster approvals and hassle free quality
                  medical coverages.
                </span>

              <div class="row ml-1 mr-1 mt-1 insurance-layout">
                <div class="col-md-2 insurance-logos">
                <img src="./images/adnic@2x.png" class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/mednet-2x.png" class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/nxtcare-2x.png"  class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/axa-2x.png"  class="insurance-images" />
                </div>
                
                <div class="col-md-2 insurance-logos">
                <img src="./images/daman-2x.png"  class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/fmc-2x.png"  class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/nas-2x.png"  class="insurance-images" />
                </div>

                <div class="col-md-2 insurance-logos">
                <img src="./images/daman-new.jpg"  class="insurance-images" />
                </div>
              
               
                
                
              
                
              </div>

            </div>

            


          {/* <div className="partners-wrapper">
            <div className="partners-list">
              <img src="./images/adnic@2x.png" style={{width: '150px'}} />
              <img src="./images/mednet-2x.png" style={{width: '150px'}} />
              <img src="./images/nxtcare-2x.png" style={{width: '150px'}} />
              <img src="./images/axa-2x.png" style={{width: '150px'}} />
              <img src="./images/daman-2x.png" style={{width: '150px'}} />
              <img src="./images/fmc-2x.png" style={{width: '150px'}} />
              <img src="./images/nas-2x.png" style={{width: '150px'}} />
            </div> 
          </div> */}


        </div> 

   
     
 </>      


          );
    }
}
 
export default InsurancePartners;