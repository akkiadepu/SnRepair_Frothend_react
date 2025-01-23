
import React from 'react'
import Header from './Header'
import './Homestyle.css';
import Footer from './Footer';
import profile from './login-user.png';

import RequestForm from './components/RequestForm';
import HomeActivitsComponent from './components/HomeActivitsComponent';

function Home() {
  return (
    <div>
          <Header/>
         <section id="hero" className="hero">
        <div className="container1">
            <div className="hero-content">
                <h1>we care about your car</h1>
                <p>We provide quality auto repair and maintenance to keep your car safe. With expert technicians ensuring reliable service for all your needs.</p>
                <a href="#" className="cta-button">
                    <i className="fas fa-phone"></i> Call Us Today: +91 85010 15055
                </a>
            </div>
        </div>
    </section>

<section className="text-center mt-5">
    <h2 className="mb-4">Our Services</h2>
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
            <div className="col">
                <div className="card custom-card-lg">
                    <img src="https://wallpaperaccess.com/full/2085201.jpg" className="card-img-top" alt="Auto Maintenance Services"/>
                    <div className="card-body">
                        <h5 className="card-title">Auto Maintenance Services</h5>
                        <p className="card-text">Keep your vehicle running smoothly with our comprehensive maintenance services, ensuring safety and performance.</p>
                 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card custom-card-lg">
                    <img src="https://wallpaperaccess.com/full/2085201.jpg" className="card-img-top" alt="Auto Maintenance Services"/>
                    <div className="card-body">
                        <h5 className="card-title">Brake System Maintenance and Repair</h5>
                        <p className="card-text">Ensure safety with our expert brake system maintenance, delivering reliable stopping power when you need it</p>
                      
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card custom-card-lg">
                    <img src="https://wallpaperaccess.com/full/2085201.jpg" className="card-img-top" alt="Auto Maintenance Services"/>
                    <div className="card-body">
                        <h5 className="card-title">Complete Car Painting</h5>
                        <p className="card-text">Revamp your vehicle's look with our complete car painting services, offering a flawless and durable finish.</p>
                    
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card custom-card-lg">
                    <img src="https://wallpaperaccess.com/full/2085201.jpg" className="card-img-top" alt="Auto Maintenance Services"/>
                    <div className="card-body">
                        <h5 className="card-title">Exterior Cleaning</h5>
                        <p className="card-text">Restore your vehicle's shine with our thorough exterior cleaning services for a like-new finish.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <button className="btn btn-primary mt-4" href="/services">Explore More</button> */}
        <a href="/services" className="btn btn-danger mt-4 p-3">Explore More</a>
    </div>
</section>

         
            <HomeActivitsComponent/>
            
   <section id="why-choose-us" className="why-choose-us ">
        <div className="container4">
            <h2>Why Choose Us</h2>
            <div className="features">
                <div className="feature">
                    <i className="fas fa-tools"></i>
                    <h3>Expert Engineer</h3>
                    <p>Our team of certified engineers brings years of expertise and technical knowledge to ensure your vehicle receives top-quality care.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-award"></i>
                    <h3>Expensive Skills</h3>
                    <p>We specialize in a wide range of repair and maintenance services, providing solutions tailored to your car's specific needs.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Guarantee Services</h3>
                    <p>We stand by the quality of our work with service guarantees, giving you peace of mind with every repair or upgrade.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-thumbs-up"></i>
                    <h3>Trusted Work</h3>
                    <p>Our reputation for reliable and trustworthy service has made us the preferred choice for countless customers.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" className="testimonials">
        <div className="container3">
            <h2>Testimonial</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <p>I have brought my brand new Tata Punch for a scratch removal work. I am impressed with the owner and staff in explaining the work to be done and pros/cons. As promised, their work speaks</p>
                    <div className="testimonial-author">
                        <img src={profile} alt="Author 1"/>
                        <div>
                            <p className="name">Hemanth Chintala</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <p>They are known for passionate, genuinity, trust, best advice, customer friendly, they love their work. They know kind of looting the customer money. I am really happy with their service Thank you! Prasad & Krishna garu.</p>
                    <div className="testimonial-author">
                        <img src={profile} alt="Author 2"/>
                        <div>
                            <p className="name">Mohan R V</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <p>Excellent service for cars.....highly professional.....Good services for car washing, painting & ceramic coating.</p>
                    <div className="testimonial-author">
                        <img src={profile} alt="Author 3"/>
                        <div>
                            <p className="name">Sundeep Sunadi</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/SN+AUTO+ENTERPRISES/@16.5081113,80.6699006,17z/data=!4m8!3m7!1s0x3a35fb9b8e442b9b:0xa9c8b28b5b69cb0e!8m2!3d16.5081113!4d80.6724755!9m1!1b1!16s%2Fg%2F11j01htl2d?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="more-comments">See More Comments</a>
        </div>
    </section>

    <section id="request-info" className="request-info mt-5">
        <div className="container18">
            <div className="request-content">
                <div className="request-text">
                    <h2>Request Info</h2>
                    <p>If you require additional information about our services or have specific inquiries, our team is here to assist you. Please fill out the form below, and we will respond promptly with the details you need.</p>
                    <ul>
                        <li>Get personalized information tailored to your needs</li>
                        <li>Consult with our expert team</li>
                        <li>Get quick responses to your inquiries</li>
                    </ul>
                </div>
               
                    <RequestForm/>
                
            </div>
        </div>
    </section>


    <Footer/>

    

</div>
   
  )
}

export default Home

