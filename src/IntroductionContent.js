import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";

function IntroductionContent(props){
    const history=useHistory()
        return (  
<>
            <div className="container" style={{marginBottom: '20px'}} id="home-page-first-layout">
                <div class="row" >
                     <img src="images/form-image.jpg" id="img-form"  class="img-responsive" style={{ 'display' : 'none' }}/>
                 </div>
                <div className="row ayur-introduction-layout">
                    <div className="col-md-12 ayur-introduction-content" style={{textAlign: 'center'}}>
                        <h2><b>Herbal Healing Hands</b></h2>
                        <br />
                        <div style={{textAlign: 'center', lineHeight: '30px', fontWeight: 'bold'}}>
                            <p>
                            Adam & Eve is a firm believer of Ayurveda’s natural, holistic healing principles
                             that withstood the test of time by showcasing its effectivity through unquestionable
                              results. To be the best Ayurvedic centre in Abu Dhabi, we revolutionize the ancient
                               medicinal system through lifestyle interventions and amalgamating traditional and
                                modernistic practices. 
                            </p>
                            <a href="/about-us" class="btn btn-danger" style={{ 'font-weight' : 'bold' , 'background-color'  : '#dc3545 !important' , 'color' : '#fff' }}>Click to know more about Adam & Eve Ayurveda</a>
                        </div>
                    </div>
                </div> 


                <div class="row" style={{ 'margin-top' : '30px' }}>
            <iframe  style={{ 'padding' : '20px' , 'border' : 'none' , 'border-radius' : '20px' , 'width' : '100%' , 'min-height' : '500px' , 'display' : 'flex' }}
src="https://www.youtube.com/embed/NIjyTLRf7GE" allowfullscreen="allowfullscreen"
mozallowfullscreen="mozallowfullscreen" 
msallowfullscreen="msallowfullscreen" 
oallowfullscreen="oallowfullscreen" 
webkitallowfullscreen="webkitallowfullscreen">
            
            </iframe> 
</div>  
            </div> 
        
</>

        );
    
}
 
export default IntroductionContent;