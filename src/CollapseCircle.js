import React, { Component } from 'react';
class CollapseCircle extends Component {
    state = {  }
    render() { 
        return ( 
<> 
            <div class="row collapse-circle">
            <div class="collapse-faq" data-toggle="collapse" data-target="#doctorconsult"> 
            Doctor Consultation
          </div>
           <div id="doctorconsult" class="collapse">
           There are tons of home treatments and natural remedies to alleviate the neck pain. However, there is no one treatment that can reverse it.
           There are tons of home treatments and natural remedies to alleviate the neck pain. However, there is no one treatment that can reverse it.
           There are tons of home treatments and natural remedies to alleviate the neck pain. However, there is no one treatment that can reverse it.
           There are tons of home treatments and natural remedies to alleviate the neck pain. However, there is no one treatment that can reverse it.
            </div>
            </div>

</>

         );
    }
}
 
export default CollapseCircle;