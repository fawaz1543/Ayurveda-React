import React, { Component } from 'react';
import TopSection from './TopSection';
import StickyMenu from './StickyMenu';
import Footer from './footer';

class Treatments extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        
      <div className="container-fluid" style={{float: 'left'}}>
        <TopSection></TopSection>
        <StickyMenu></StickyMenu>


      <div className="row treatment-banner">
         <span class="blog-title-txt">Our Treatments</span><br />
      </div>

      {/* Content Section Starts Here*/}
      <div className="container" style={{marginBottom: '20px', marginTop: '20px', height: 'auto'}}>
      <div class="row" style={{ 'margin-top' : '10px' }}>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li ><a href="" class="active">Our Treatments</a></li>    
        </ul>
       </div>

     <div class="row m-2">
     Adam and Eve Ayurveda center brings the holistic and rejuvenating Kerala experience to the UAE. 
     We stay true to the ancient alternative medicine through our experienced Ayurvedic doctors and
      highly-trained therapists to provide you over 25 Ayurvedic treatments that can help balance your 
      mind, body, and soul. Discover the healing wonders of Ayurveda in Abu Dhabi. 
     </div>


     <div class="row mt-4">
          <div class="col-md-3 mt-5">
               <img src="images/TreatmentThumbnail/Abyangam.jpg" alt="abhyangam" class="treatment-img-style" />
               <h5 class="card-title font-weight-bold mt-2">Abhyangam </h5>
               <p class="card-text text-justify">A therapeutic full body massage that uses lukewarm Ayurvedic oil which is aligned to the patient’s constitution.
               This treatment improves blood circulation, boosts immunity, relaxes the mind, and more. </p>
          </div>

          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Podikizhi.jpg" alt="Podikizhi" class="treatment-img-style" />
          <h5 class="card-title font-weight-bold mt-2">Podikizhi</h5>
                      <p class="card-text text-justify">This sweat-inducing treatment uses boluses filled with herbal powders to massage the body. It improves blood circulation and reduces the swelling of joints and muscles. Podikizhi is mostly used for relieving pain and swelling.  </p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Shirodhara.jpg" alt="Shirodhara" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Shirodhara</h5>
                      <p class="card-text text-justify">Originated from the two Sanskrit words shiro(head) and 
                      dhara(flow), this revitalizing and relaxing therapy uses a smooth rhythmic pattern in pouring 
                      down medicated herbal oil onto your forehead, mitigating anxiety, fatigue, and insomnia.</p>
          </div>

          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Pizhichil.jpg" alt="Pizhichil" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Pizhichil</h5>
                      <p class="card-text text-justify">Pizhichil lives up to its appellation as it combines Snehana (oil massage) 
                      with Swedana (heat treatment), two of the superior Ayurvedic treatments, to help restore your physiological functions into their optimal levels by pouring lukewarm medicated oil onto the body while performing a relaxing massage simultaneously.</p>
          </div>

          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/NjavaraKizhi.jpg" alt="Njavara Kizhi" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Njavara Kizhi</h5>
                      <p class="card-text text-justify">Using cotton poultice bags filled with njavara rice and hand-picked herbs, dipped all together in warm milk before gently pressing them against the skin and muscles, this holistic massage is one that rejuvenates and nourishes the body.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Nasyam.jpg" alt="Nasyam" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Nasyam</h5>
                      <p class="card-text text-justify">An Ayurvedic treatment dedicated for sinusitis that also relieves migraine, headache, and induces relaxation. Medicated herbal oils are applied to the nostrils to eliminate toxins in the head, nose, and throat. 
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/netratarpana.jpg" alt="Akshi Tarpanam" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Akshi Tarpanam</h5>
                      <p class="card-text text-justify">Clear your vision with this treatment. Akshi Tarpanam relieves eye strain or any vision problems using black gram flour and medicated oil.
</p>
          </div>



          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Takradhara.jpg" alt="Takradhara" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Takradhara</h5>
                      <p class="card-text text-justify">Takradhara pours buttermilk onto the body to improve blood circulation in the brain and give remedy to mild,
                       chronic diseases, and conditions like eczema, hypertension, insomnia, and more.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/kashayadhara.jpg" alt="Kashaya Dhara" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Kashaya Dhara</h5>
                      <p class="card-text text-justify">Kashaya Dhara is a treatment where medicated oil is poured on the head and all over the body. It relieves joint and pain muscles, moisturizes the skin, and extracts toxins from the tissues.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Elakizhi.jpg" alt="Elakizhi" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Elakizhi (Herbal Leaf Compress Therapy)</h5>
                      <p class="card-text text-justify">Boluses full of medicinal herbs and oil are used to massage the body to treat tissue inflammation, back pain, and arthritis. 
</p>
          </div>



          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Narangakizhi.jpg" alt="Naranga Kizhi" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Naranga Kizhi (Lemon Bundle Therapy)</h5>
                      <p class="card-text text-justify">The citrus fruit’s numerous health benefits are squeezed into this therapy by mixing lemon slices with chopped medicinal herbs inside a bolus.
                       Naranga Kizhi relieves joint pains and stiffness, swelling, and improves muscular strength.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Dhanyamla.jpeg" alt="Dhanyamla Dhara" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Dhanyamla Dhara</h5>
                      <p class="card-text text-justify">In Dhanyamla Dhara, medicated herbal oils are 
                      poured onto the body to make the body stronger, relieve musculoskeletal disorders, 
                      give the skin the glow it deserves.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/KsheeraDhara.jpg" alt="Ksheera Dhara" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Ksheera Dhara</h5>
                      <p class="card-text text-justify">Ksheeradhara is a milk version of pizhichil. Medicated
                       milk is poured on the body. This treatment relieves muscle stiffness and soreness, lubricates
                        joints, and minimizes pain. 
</p>
          </div>




          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/AyurvedicHeadMassage.jpg" alt="Ayurvedic Head Massage" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Ayurvedic Head Massage</h5>
                      <p class="card-text text-justify">The past week has been stressful. It’s okay to relax for 
                      a while and blow off some steam. A session of Ayurvedic head massage might help you to de-stress.
</p>
          </div>



          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Udwarthanam.jpg" alt="Udwarthanam" class="treatment-img-style" />  
          <h5 class="card-title font-weight-bold mt-2">Udwarthanam</h5>
                      <p class="card-text text-justify">Udwarthanam is a deep tissue massage that uses medicated oils and formulated herbal powder to stimulate lymphatic
                       flow, reduce body fats, and flush out water retention.
</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Kativasthi.jpg" alt="Kati Vasti" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Kati Vasti</h5>
                      <p class="card-text text-justify">This Ayurvedic treatment is dedicated to drawing muscle and joint pains out of your lumbar area. This method is done by placing a small pool of medicated herbal oils on top of your lower back for a specific period of time, followed by a massage on the affected area. 
</p>
          </div>



          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Janu Vashti 360 w x 173h.jpg" alt="Janu Vasti" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Janu Vasti</h5>
                      <p class="card-text text-justify">From the Sanskrit words Janu (knees) and Vashti (vessel),
                       Janu Vashti is a type of Ayurvedic treatment that prevents you from getting weak at your knees.
                        The two small pools of medicated oils will be left for a specific time to lubricate the joints
                         and relieve the knees from inflammation, soreness, or pain caused by arthritis.</p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Greeva-Basti.jpg" alt="Greeva Vasti" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Greeva Vasti</h5>
                      <p class="card-text text-justify">Neck pain is a real pain in the neck, isn’t it? Greeva vasthi can help take your neck pains away and preempt diseases like cervical spondylosis, osteoporosis, migraines, and more. </p>

          </div>



          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Lepam.jpg" alt="Lepam" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Lepam</h5>
          <p class="card-text text-justify">A healing paste for the entire body. Lepam is a treatment wherein the patient’s body is lathered with medicated herbal paste that is left until dry. It acts like a scrub that rejuvenates your skin, healing skin conditions 
                      from pimples, dark pigmentations, to acne, eczema, and psoriasis. </p>
          </div>


          <div class="col-md-3 mt-5">
          <img src="images/treatment-home/Thalapothichil.jpg" alt="Thalapothichil" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Thalapothichil</h5>
                      <p class="card-text text-justify">Thalapothichil is a Malayalam word where “Thala'' means head 
                      and “Pothichil'' means covering. The patient’s head is covered with a medicated paste that 
                      will help reduce hypertension, insomnia, dandruff, and scalp dermatitis.  
 </p>

          </div>




          <div class="col-md-3 mt-5">
          <img src="images/treatment-home/ShiroVasthi.jpg" alt="Shiro Vasti" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Shiro Vasti</h5>
                      <p class="card-text text-justify">The head is a vital part of our body and it should be taken care of with or without the presence of diseases. In Shirovasti, the patient’s head is soaked in medicated oil.
                       It is aimed to prevent neurological illnesses and boost mental and physical health.  
 </p>

          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Lymphaticdrainage.jpg" alt="Lymphatic Drainage Massage" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Lymphatic Drainage Massage</h5>
                      <p class="card-text text-justify">Ayurvedic lymphatic massage will wake the lymphatic system up and make sure that every organ is doing its job. This therapy will eliminate wastes and toxins,
                       strengthen metabolism, boost the immune system, and drain the excess fluids in the body. 
 </p>

          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Footreflexsology.jpg" alt="Foot Reflexology" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Foot Reflexology</h5>
                      <p class="card-text text-justify">A simple act of foot massage can heal our mind, body, and consciousness, stimulate
                       our immune system, and lessen stress. Foot massages do wonders to one’s body
 </p>

          </div>


          <div class="col-md-3 mt-5">
           <img src="images/treatment-home/HerbalFaceCareTherapy.jpg" alt="Herbal Face Care Therapy" class="treatment-img-style" /> 
           <h5 class="card-title font-weight-bold mt-2">Herbal Face Care Therapy</h5>
                      <p class="card-text text-justify">Not only can herbs make you healthy but it can also beautify the skin. Ayurvedic Herbal Facial
                       will cleanse, exfoliate, moisturize, and tone the face with no help from chemicals.
 </p>


          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/thai-message.jpeg" alt="Thai Massage" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Thai Massage</h5>
                      <p class="card-text text-justify">Boost your energy and lower stress through Thai Massage. It can
                       also improve your body’s range of motion and stimulate circulation.
 </p>


          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/Hot stone 360 w x 173h.jpg" alt="Hot Stone Massage" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Hot Stone Massage</h5>
                      <p class="card-text text-justify">Basalt is a type of rock only found in volcanoes. It has the ability to retain heat inside. Adam & Eve Ayurveda’s Hot Stone Massage 
                      uses smooth, flat, and heated basalt to ease stiff muscles and damaged tissues.
 </p>

          </div>


          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/prenatal.jpg" alt="Ayurvedic Prenatal Treatment" class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Ayurvedic Prenatal Treatment</h5>
                      <p class="card-text text-justify">During the prenatal stage, the soon-to-be-mom should observe a healthy lifestyle so her baby can receive the right amount of nutrients and become healthy too. The Ayurvedic prenatal treatment
                       helps moms become healthy so they can give birth to healthy babies too. 
 </p>

          </div>




          <div class="col-md-3 mt-5">
          <img src="images/TreatmentThumbnail/postnatal.jpg" alt="Ayurvedic Postnatal Treatment " class="treatment-img-style" /> 
          <h5 class="card-title font-weight-bold mt-2">Ayurvedic Postnatal Treatment </h5>
                      <p class="card-text text-justify">The first six weeks after child birth is still critical
                      for the mother. While there are still physical and hormonal changes happening, Ayurvedic 
                      treatments and programs will help new moms to get through this stage. 

 </p>
          </div>



     </div>
       
   

 <div class="row mt-5">
        Adam and Eve Ayurveda in Abu Dhabi is a place of natural healing. We aim to target the root causes 
        of our patients’ ailments and promote a healthy lifestyle to prevent illnesses in the future. Consult
         our Ayurvedic doctor so we can create a personalized approach for your health needs. 
     </div>






      </div>
      {/* Content Section Close Here*/}

    </div>
    
    <Footer></Footer>


        </>

         );
    }
}
 
export default Treatments;