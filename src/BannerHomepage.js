import React, { Component } from 'react';
import ServiceList from './ServiceList';

class BannerHomepage extends Component {
    state = {  }
    render() { 
        return (
          <>

        <div className="row">
        {/*    
        <div className="col-md-12 col-lg-12 banner">
          <ul>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
            <li style={{ 'background-image' : "  url('../images/Banner.png') " }}></li>
          </ul>
        </div>   
        */}       


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
  </ol>
  <div class="carousel-inner">
  
    {/* <div class="carousel-item active">
      <img class="d-
      block w-100" src="images/BANNER-NATIONAL.png" alt="First slide" />
    </div>  */}


    {/* <div class="carousel-item active">
      <img class="d-block w-100" src="images/christmas-ad.png" alt="First slide" />
    </div> */}



    {/* <div class="carousel-item active">
      <img class="d-block w-100" src="images/Ramadanbanner1.jpeg" alt="First slide" />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/Ramadanbanner2.jpeg" alt="First slide" />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/Ramadanbanner3.jpeg" alt="First slide" />
    </div> */}


    <div class="carousel-item active">
      <img class="d-block w-100" src="images/Beauty Care for Winter  399 AED_1500px X 533px-01 (1).png" alt="First slide" />
    </div>


    <div class="carousel-item">
      <img class="d-block w-100" src="images/offer-banner-1.jpg" alt="First slide" />
    </div>


    <div class="carousel-item ">
      <img class="d-block w-100" src="images/Banner-StressFree-2.png" alt="First slide" />
    </div>

  
    <div class="carousel-item">
      <img class="d-block w-100" src="images/Banner_Live Natural.png" alt="First slide" />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/Banner_Revive your spirit.png" alt="Second slide" />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/Banner_The best form of natural healing.png" alt="Second slide" />
    </div>


  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      </div>
  </>          
          );
    }
}
 
export default BannerHomepage;
