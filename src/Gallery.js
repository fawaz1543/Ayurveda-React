import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';

export const Gallery = () => { 
    return(

        <>

      <div className="container-fluid" style={{float: 'left'}}>
        <TopSection></TopSection>
        <StickyMenu></StickyMenu>


      <div className="row gallery-banner">
         <span class="blog-title-txt">Gallery</span><br />
      </div>

      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px', marginTop: '20px', height: 'auto'}}>
      <div class="row" style={{ 'margin-top' : '10px' }}>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li ><a href="" class="active">Gallery</a></li>    
        </ul>
       </div>

        <div class="row">
          <div class="col-md-12 d-flex justify-content-center mb-5" >
            <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
            <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1" style={{ 'margin-left' : '10px' , 'background-color' : 'green' , 'color' : '#ffffff' }}>Center</button>
            <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2" style={{ 'margin-left' : '10px' }}>Gallery</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            
          </div>

          <div class="col-md-4">
            
          </div>


          <div class="col-md-4">
            
          </div>
        </div>

        
      </div>
      {/* Content Section Close Here*/}

    </div>
    
    <Footer></Footer>

 </>


    )

}