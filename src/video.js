import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';

class Video extends Component {
    state = {  }
    render() { 
        return ( 
        <>

      <div className="container-fluid" style={{float: 'left'}}>
        <TopSection></TopSection>
        <StickyMenu></StickyMenu>


      <div className="row gallery-banner">
         <span class="blog-title-txt">Video</span><br />
      </div>

      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px', marginTop: '20px', height: 'auto'}}>
      <div class="row" style={{ 'margin-top' : '10px' }}>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li ><a href="" class="active">Video</a></li>    
        </ul>
       </div>


        <div class="row justify-content-left mt-3">
            <h5 class="video-headings"><b>Ayur Treatments Video</b></h5>
        </div>
  

     <div class="row mt-2 mb-5">
         <div class="col-md-3 video-bg p-2">
             <div class="bg-video-block">
               <iframe src="https://www.youtube.com/embed/qTI-yFTVYvw" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">BEST HOLISTIC AYURVEDA CENTER IN ABU DHABI | ADAM & EVE AYURVEDA CENTER | UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=qTI-yFTVYvw" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
        </div>

        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
              <iframe src="https://www.youtube.com/embed/a7gvD6QI8-c" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">START YOUR AYURVEDIC JOURNEY WITH ADAM & EVE AYURVEDA | AYURVEDA UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=a7gvD6QI8-c" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
        </div>

        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
            <iframe src="https://www.youtube.com/embed/NGNBTyI-0ig" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Shirodhara Treatment | Ayurveda | Adam & Eve Ayurvedic Center | UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=NGNBTyI-0ig" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
        </div>

        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
            <iframe src="https://www.youtube.com/embed/NIjyTLRf7GE" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Ayurveda Treatment in Abu Dhabi | Ayurveda Center | United Arab Emirates</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=NIjyTLRf7GE" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
        </div>


     </div>



     <div class="row justify-content-left mt-3 ">
            <h5 class="video-headings"><b>Doctor Talks</b></h5>
        </div>

        <div class="row mt-2">
        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
         <iframe src="https://www.youtube.com/embed/_UxVv97uszQ" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Adam & Eve Ayurveda Center | Natural Healing | Abu Dhabi, UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=_UxVv97uszQ" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
        </div>

        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
         <iframe src="https://www.youtube.com/embed/fRIFfhGXeUw" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Home Remedies for Sinusitis | Adam & Eve Ayurveda | UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=fRIFfhGXeUw" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div>
         </div>


        <div class="col-md-3 video-bg p-2">
        <div class="bg-video-block">
        <iframe src="https://www.youtube.com/embed/tGReD53rbr8" class="video-bg-layout"> </iframe>  
              <h5 class="youtube-video-head">Migraine Relief at Home | Adam & Eve Ayurvedic Center | Abu Dhabi</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=tGReD53rbr8" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div> 
        </div>

        <div class="col-md-3 video-bg p-2">
        <div class="bg-video-block">
        <iframe src="https://www.youtube.com/embed/A6RJDsfGGig" class="video-bg-layout"> </iframe>  
              <h5 class="youtube-video-head">Treating Insomnia with Ayurveda | Adam & Eve Ayurvedic Center | UAE</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/watch?v=A6RJDsfGGig" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div> 
        </div>

       </div>






     <div class="row justify-content-left mt-5">
            <h5 class="video-headings"><b>Client's Testimonials</b></h5>
        </div>

        <div class="row mt-2">
        <div class="col-md-3 video-bg p-2">
         <div class="bg-video-block">
         <iframe src="https://www.youtube.com/embed/3gi_G85UIoU" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Ayurvedic treatment for Cervical spondylosis | Client Testimonial | Ayurvedic Center in Abu Dhabi</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/embed/3gi_G85UIoU" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div> 
        </div>

        <div class="col-md-3 video-bg pt-3 pb-3">
        <div class="bg-video-block">
        <iframe src="https://www.youtube.com/embed/KZ5RrdQQfO8" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Sore Knee | Arthritis symptoms | Client Testimonial | Ayurvedic Center in Abu Dhabi</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/embed/KZ5RrdQQfO8" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div> 
        </div>
      

        <div class="col-md-3 video-bg pt-3 pb-3">
        <div class="bg-video-block">
        <iframe src="https://www.youtube.com/embed/cLP_-Uy7YXA" class="video-bg-layout"> </iframe>   
              <h5 class="youtube-video-head">Shirodhara treatment Experience by Mr Rasheed at Adam & Eve Ayurveda Center</h5>
               <div style={{ 'display':'flex', 'justify-content':'flex-end' }} class="mt-3">
                 <a href="https://www.youtube.com/embed/cLP_-Uy7YXA" target="_new"><button class="btn btn-success video-bt">View Video</button></a>
               </div>
             </div> 
        </div>




       </div>




 






      </div>
      {/* Content Section Close Here*/}

    </div>
    
    <Footer></Footer>


        </>

         );
    }
}
 
export default Video;