import React, { Component } from 'react';
import TopSection from './TopSection';
import AyurvedaPackages from './AyurvedaPackages';
import RecentBlogs from './RecentBlogs';
import StickyMenu from './StickyMenu';
import BlogInnerContent from "./blog-inner-content";
import NaadiparikshaBlog from './Nadipariksha-blog';
import Footer from './footer';
import TeamMembers from './TeamMembers';
import BlogContent from './BlogContent';
import { useHistory } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

function Blog () {
  const history=useHistory()

  const meta = {
    title: 'What You Don’t Know About Ayurveda | Adam & Eve Ayurveda',
    description: 'Get to know more about what Ayurveda can do with their numerous treatments that have changed the lives of millions. ',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'ayurveda,ayurveda centre,ayurveda centre in abudhabi'
      }
    }
  };

    return(
        <>
      <div className="container-fluid" id="blog-anchor">
        <DocumentMeta {...meta}><span></span></DocumentMeta>
         <TopSection></TopSection>
         <StickyMenu></StickyMenu>

        {/* Banner Section Starts Here*/}
        <div className="row Blog-banner">
            <span class="blog-title-txt">Recent Blogs</span><br />
            {/* <ul style="display:flex;list-style-type:none;font-weight:bold;color:#ffffff;">
                  <li>Home</li> &nbsp;/&nbsp;
                  <li>About us</li>
                </ul> */}
        </div>   
        {/* Banner Section Ends Here*/}

      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px' , 'margin-top' : '120px' }}>

       <div class="row" style={{ 'margin-top' : '10px' }}>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li ><a href="" class="active">Blog</a></li>    
        </ul>
       </div>


      <div class="row">
        <BlogContent></BlogContent>
      </div>

        {/* <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4  blog-content">
            <div class="blog-img-wrapper col-12">    
            </div>

            <div class="blog-category">
              <h6>Doctor Consultation</h6>
            </div>

            <div class="blog-title">
              <h5><a href="/NaadiparikshaBlog"><b>Balancing Doshas with Nadi Pariksha</b></a></h5>
            </div>

            <hr/>

            <div class="Blog-date">
                <i class="fa fa-calendar"></i><span> 10th October, 2020</span>
            </div>

          </div>

          <div class="col-12 col-sm-12 col-md-4 col-lg-4 blog-content">
               <div class="blog-img-wrapper col-12">
               <div class="blog-img-wrapper col-12">    
            </div>
            
            <div class="blog-category">
              <h6>Health Concern</h6>
            </div>

            <div class="blog-title">
              <h5><a href="/Sinusitis-blog"><b>Unclogging Stuffy Nose with Ayurveda  </b></a></h5>
            </div>

            <hr/>

            <div class="Blog-date">
                <i class="fa fa-calendar"></i><span> 9th October, 2020</span>
            </div>


                </div>
          </div>

          <div class="col-12 col-sm-12 col-md-4 col-lg-4 blog-content">
             <div class="blog-img-wrapper col-12">
             <div class="blog-img-wrapper col-12">    
            </div>
            
            <div class="blog-category">
              <h6>Doctor Consultation</h6>
            </div>

            <div class="blog-title">
              <h5><a href="/BlogInnerContent"><b>Ayurveda Treatments</b></a></h5>
            </div>

            <hr/>

            <div class="Blog-date">
                <i class="fa fa-calendar"></i><span> 10th October, 2020</span>
            </div>

             </div>
          </div>

          <div class="col-12 col-sm-12 col-md-4 col-lg-4 blog-content">
             <div class="blog-img-wrapper col-12">
             <div class="blog-img-wrapper col-12">    
            </div>
            
            <div class="blog-category">
              <h6>Doctor Consultation</h6>
            </div>

            <div class="blog-title">
              <h5><a href="/BlogInnerContent"><b>Balancing Doshas with Nadi Pariksha</b></a></h5>
            </div>

            <hr/>

            <div class="Blog-date">
                <i class="fa fa-calendar"></i><span> 10th October, 2020</span>
            </div>
 
             </div>
          </div>

        
        
        </div>
       */}
      </div>
      {/* Content Section Close Here*/}

    </div>
    
      <Footer></Footer>

 </>


    )

}

export default Blog;