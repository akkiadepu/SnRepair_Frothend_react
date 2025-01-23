import React from 'react'
import Header from './Header'
import Footer from './Footer';
import './ContactUsStyle.css';
import RequestForm from './components/RequestForm';



function ContactUs() {
  return (
    <div>
     
<Header/>
<main>
        <section class="contact-section">
            <div class="contact-text">
                <h1>Contact</h1>
                <p>Feel free to contact us for any questions and doubts</p>
                <p>At SN Auto Enterprises, your satisfaction is our top priority. Our dedicated team is always ready to assist with any questions or concerns you may have feel free to reach out!</p>
              
              <p> KEEP IN TOUCH</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
              <RequestForm/>

        </section>
        <section class="map-section">
            <h2>Head Office</h2>
            <p>SN AUTO ENTERPRISES, GMCS-600, Auto Nagar, Vijayawada, Andhra Pradesh 520007</p>
            <p><i class="fas fa-envelope"></i> polanauma@gmail.com</p>
            <p><i class="fas fa-phone"></i> +91 85010 15055</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.844414022554!2d80.6724834!3d16.5081136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb9b8e442b9b%3A0xa9c8b28b5b69cb0e!2sSN%20AUTO%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1629141300038!5m2!1sen!2sin" width="100%" height="300" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>
        </section>
    </main>
  
  <Footer/>

    </div>
  )
}

export default ContactUs;