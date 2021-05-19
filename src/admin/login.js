import React, { Component } from 'react';
class adminLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <>


    <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img src="images/High res logo-01.png" id="icon" alt="User Icon" />
          </div>
          {/* Login Form */}
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
            <br/><br/>
            <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
          </form>
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>


            </>
         );
    }
}
 
export default adminLogin;