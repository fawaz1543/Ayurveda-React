import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import { Home } from './Home';
import About from './About';
import Blog from './Blog';
import { Gallery } from './Gallery';
import Video from './video'
import Contact from './Contact';
import { CervicalSpondylosis } from './CervicalSpondylosis' ;
import BlogInnerContent from './blog-inner-content';
import NaadiparikshaBlog from './Nadipariksha-blog';
import SinusitisBlog from './Sinusitis-blog';
import ShirodharaBlog from './shirodhara-blog';
import CervicalBlog from './cervical-blog';
import PrivacyPolicy from './privacy-policy';
import SuccessMail from './Success-Mail';
import SubscribeSuccess from './Subscription-Success';
import TermsandConditions from './terms-and-conditions';
import ServiceForm from './service-form';
import AbhyangamBlog from './abhyangam-blog';
import BackpainBlog from './backpain-blog';
import ArthritisBlog from './Arthritis-blog';
import WinterwellnessBlog from './winter-wellness-blog';
import HeathHackone from './health-hack-one';
import HeathHacktwo from './health-hack-two';
import HairfallBlog from './hairfall-blog';
import PanchakarmaBlog from './panchakarmaBlog';
import PsoriasisBlog from './PsoriasisBlog';
import PostnatalBlog from './PostnatalBlog';
import TulsiBlog from './tulsi-blog';
import Treatments from './treatments';
import RamadanBlog from './ramdanBlog';
import MenopauseBlog from './MenopauseBlog';
import adminLogin from '../src/admin/login';
import AdminBlogList from '../src/admin/BlogList';
import AdminBlogDetail from '../src/admin/BlogDetail';
import adminDashboard from '../src/admin/adminDashboard';
import TeamMembers from './TeamMembers';


function App() {
   return(
  <React.Fragment> 
    <Router>
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/treatments" component={Treatments} />
        <Route exact path="/cervical-spondylosis" component={CervicalSpondylosis} />
        <Route exact path="/sciatica-and-lower-back-pain" component={CervicalSpondylosis} />
        <Route exact path="/disc-prolapse" component={CervicalSpondylosis} />
        <Route exact path="/fibromyalgia" component={CervicalSpondylosis} />
        <Route exact path="/arthritis-and-joint-pain" component={CervicalSpondylosis} />
        <Route exact path="/gout" component={CervicalSpondylosis} />
        <Route exact path="/frozen-shoulder" component={CervicalSpondylosis} />
        <Route exact path="/immunity-boost-program" component={CervicalSpondylosis} />
        <Route exact path="/varicose-veins" component={CervicalSpondylosis} />
        <Route exact path="/diabetic-care-management" component={CervicalSpondylosis} />
        <Route exact path="/Psoriasis-Eczema" component={CervicalSpondylosis} />
        <Route exact path="/obesity-management" component={CervicalSpondylosis} />
        <Route exact path="/sinusitis-allergy" component={CervicalSpondylosis} />
        <Route exact path="/digestive-disorder" component={CervicalSpondylosis} />
        <Route exact path="/stress-management" component={CervicalSpondylosis} />
        <Route exact path="/insomnia" component={CervicalSpondylosis} />
        <Route exact path="/ayurveda-consultation" component={CervicalSpondylosis} />
        <Route exact path="/child-care-and-baby-care" component={CervicalSpondylosis} />
        <Route exact path="/nadi-pariksha" component={CervicalSpondylosis} />
        <Route exact path="/slimming-therapies" component={CervicalSpondylosis} />
        <Route exact path="/dry-eye-syndrome-and-eye-strain" component={CervicalSpondylosis} />
        <Route exact path="/pcos-and-menopause" component={CervicalSpondylosis} />
        <Route exact path="/multiple-sclerosis" component={CervicalSpondylosis} />
        <Route exact path="/systemic-lupus-erythematosus" component={CervicalSpondylosis} /> 
        <Route exact path="/sports-injury" component={CervicalSpondylosis} />
        <Route exact path="/hair-fall-and-dandruff" component={CervicalSpondylosis} />
        <Route exact path="/personalized-diet-program" component={CervicalSpondylosis} />
        <Route exact path="/lifestyle-recommendations" component={CervicalSpondylosis} />
        <Route exact path="/detox-program" component={CervicalSpondylosis} />
        <Route exact path="/beauty-therapies" component={CervicalSpondylosis} />
        <Route exact path="/holistic-pregnancy" component={CervicalSpondylosis} />


        <Route exact path="/adminlogin" component={adminLogin} />
        <Route exact path="/adminBlogList" component={AdminBlogList} />
        <Route exact path="/adminBlogDetail" component={AdminBlogDetail} />
        <Route exact path="/adminDashboard" component={adminDashboard} />

        <Route exact path="/team" component={TeamMembers} />
        


    
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/BlogInnerContent" component={BlogInnerContent } />
        <Route exact path="/blog/balancing-doshas-with-nadi-pariksha" component={NaadiparikshaBlog} />
        <Route exact path="/blog/unclogging-stuffy-nose-with-ayurveda" component={SinusitisBlog} />
        <Route exact path="/blog/wash-out-stress-and-anxiety-with-shirodhara" component={ShirodharaBlog} />
        <Route exact path="/blog/solving-cervical-spondylosis-with-ayurveda" component={CervicalBlog} />
        <Route exact path="/blog/abhyangam-more-than-an-oil-massage" component={AbhyangamBlog} />
        <Route exact path="/blog/causes-of-back-pain-and-how-can-ayurveda-help" component={BackpainBlog} />
        <Route exact path="/blog/don’t-let-arthritis-get-your-grip" component={ArthritisBlog} />
        <Route exact path="/blog/illnesses-to-watch-out-for-this-winter" component={WinterwellnessBlog} />


        <Route exact path="/blog/10-ayurvedic-health-hacks-you-should-try-part-1" component={HeathHackone} /> 
        <Route exact path="/blog/10-ayurvedic-health-hacks-you-should-try-part-2" component={HeathHacktwo} /> 
        <Route exact path="/blog/5-Causes-of-Hair-Loss-and-How-to-Cure-it-Naturally" component={HairfallBlog} /> 

        <Route exact path="/blog/panchakarma-five-actions-with-one-goal" component={PanchakarmaBlog} /> 
        <Route exact path="/blog/how-to-prevent-psoriasis-flare-ups-naturally" component={PsoriasisBlog} /> 

        <Route exact path="/blog/postnatal-care-with-ayurveda" component={PostnatalBlog} /> 
        <Route exact path="/blog/tulsi-a-tool-for-a-healthy-body" component={TulsiBlog} />
   
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-and-conditions" component={TermsandConditions} />

        <Route exact path="/thank-you" component={SuccessMail} />
        <Route exact path="/Thank-you-for-Subscription" component={SubscribeSuccess} />

        <Route exact path="/ServiceForm" component={ServiceForm} />
        <Route exact path="/blog/best-ramadan-offer:Ayurvedic-Treatments-to-Revitalize-Your-Well-being" component={RamadanBlog} />
        <Route exact path="/blog/How-to-Stop-Your-Menopausal-Symptoms" component={MenopauseBlog} />

      </Switch>
    </Router>
  </React.Fragment>
  )
}


export default App;