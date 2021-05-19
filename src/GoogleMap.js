import React, { Component } from 'react';
class GoogleMap extends Component {
    state = {  }
    render() { 
        return (

            <div className="row">
            <div class="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.774810034824!2d54.37048361498883!3d24.49325818422845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665c66cb19fd%3A0x5851d96b23fc7fa7!2sAdam%20%26%20Eve%20Ayurveda!5e0!3m2!1sen!2sae!4v1603781756859!5m2!1sen!2sae" width="100%" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>
          </div>


          );
    }
}
 
export default GoogleMap;