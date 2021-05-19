import React, { Component } from 'react';
// import TopSection from '../TopSection';
// import Footer from '../footer';

class AdminBlogList  extends Component {
    state = {  }
    render() { 
        return ( 
            <>
           

            <div className="row" >
              <div class="col-md-2 pt-3 mt-3" style={{ 'height': '90vh' , 'background-color': '#EAEAEA' , 'text-align' : 'center' , 'border-radius': '0px 20px 20px 0px' }}>
                  <img src="images/High res logo-01.png"  alt="User Icon" style={{ 'width' : '70%' }} class="mb-3" />
                  <h4 class="p-2" style={{ 'font-weight' : '100' , 'font-size' : '17px' , 'background-color': '#23330e' , 'width' : '107%' , 'color' : '#fff'  }}>Dashboard</h4>
                <ul class="adminlist">
                    <br/>
                    <li class="active"><a href="/adminBlogList">Blog List Page</a></li>
                    <hr/>
                    <li><a href="/adminBlogDetail" >Blog Detail Page</a></li>
                    <hr/>
                    <li><a href="">View Blogs</a></li>
                </ul>
              </div>

              <div class="col-md-10" style={{ 'background-color' : '#ffffff' }}>
                  <div class="col-md-12 dashboard-right-section pt-3">
                   <div class="pt-2" style={{ 'background-color':'rgb(109 161 46)' , 'border-radius' : '5px'  }}>
                    <h3 class="p-2" style={{ 'font-size' : '20px' , 'font-weight': 'bold' , 'color' : '#fff'  }}>Blog List Page</h3>
                    </div>

                    <div class="row">
                    <h4 class="pt-5 pl-5" >Enter Details for Blog List Page</h4>
                    </div>

                    <div class="row p-5 w-100">
                        <div class="col-md-6">
                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Blog Title" />
                        <select class="form-control" style={{ 'width' : '85%' ,  'height': '50px' ,
    'background-color': '#f6f6f6' , 'margin-left' : '5px' , 'font-size': '14px' ,
    'color': '#000' ,
   'padding-left': '25px !important'  }}>
                            <option>Select Blog Category</option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <input type="date" id="Date" class="fadeIn second" name="Date" placeholder="Blog Date" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Blog Category" />
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Blog Title" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Blog Category" />

                        <input type="submit" class="fadeIn fourth mt-5 ml-0" value="Save" ></input>

                    </form>
                    </div>
                    
                        <div class="col-md-6" >
                            <img src="images/about-ayurveda.jpg" style={{ 'width' : '100%' , 'border-radius' : '20px' , 'box-shadow' : '0px 1px 6px 1px #757373' }}/>
                        </div>
                    
                    
                    </div>
                  </div>
                  
              </div>

            </div>


            </>

         );
    }
}
 
export default AdminBlogList;