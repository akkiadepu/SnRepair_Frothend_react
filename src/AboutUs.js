import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Aboutstyle.css";
import profile from './login-user.png';

function AboutUs() {
  return (
    <div>
        <Header/>
        <section class="about-us">
        <div class="container10">
            <h1>About Us</h1>
        </div>
    </section>
    <section className="fixing-cars">
        <div className="container11">
            <div className="fixing-cars-content">
                <div className="left">
                    <h2>Fixing car and Trucks 
                      <br/>for over 20 years</h2>
                </div>
                <div className="right">
                    <p>With two decades of unwavering commitment to excellence, SN AUTO ENTERPRISES stands as a beacon of trust and expertise in the automotive service industry. Established in 2010, we have proudly served our community, offering a comprehensive range of top-notch services in car repair and printing.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Stats Section --> */}
    <section className="stats">
        <div className="container12">
            <ul className="about-stats">
                <li><strong>23</strong> Years in Business</li>
                <li><strong>500+</strong> Happy Customers</li>
                <li><strong>128</strong> Licensed Officers</li>
            </ul>
        </div>
    </section>

    {/* <!-- Image and Text Section --> */}
    <section className="image-text">
        <div className="container13 about-content">
            <div className="about-image">
                <img src="https://i.pinimg.com/originals/8c/76/a5/8c76a57cb3e88094115d2aa96cd1e6ad.jpg" alt="About Us Image"/>
            </div>
            <div className="about-text">
                <h2>SN AUTO ENTERPRISES</h2>
                <p>At SN AUTO ENTERPRISES, we pride ourselves on being your trusted automotive partner, offering a comprehensive range of services to meet all your vehicle needs. With a commitment to excellence and customer satisfaction, we have established ourselves as a reliable destination for car repair, washing, and printing services.</p>
                <ul>
                    <li>Brake System Maintenance and Repair</li>
                    <li>Suspension and Steering Repairs</li>
                    <li>Preventive Maintenance Services</li>
                    <li>Complete Car Painting</li>
                    <li>Panel Replacement and Alignment</li>
                    <li>Ceramic Coating Application</li>
                    <li>Express Wash Services</li>
                    <li>Wheel and Tire Cleaning</li>
                    <li>Interior Cleaning</li>
                </ul>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section className="testimonials">
        <div className="container14">
            <h2>Testimonial</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <p>I have brought my brand new Tata Punch for a scratch removal work. I am impressed with the owner and staff in explaining the work to be done and pros/cons. As promised, their work speaks</p>
                    <img src={profile} alt="Hemanth Chintala"/>
                    <div class="testimonial-author">Hemanth Chintala</div>
                    <div class="testimonial-role">Google Reviewer</div>
                </div>
                <div class="testimonial-item">
                    <p>They are known for passionate, genuinity, trust, best advice, customer friendly, they love their work. They know kind of looting the customer money. I am really happy with their service Thank you! Prasad & Krishna garu.</p>
                    <img src={profile} alt="Mohan R V"/>
                    <div class="testimonial-author">Mohan R V</div>
                    <div class="testimonial-role">Google Reviewer</div>
                </div>
                <div class="testimonial-item">
                    <p>Excellent service for cars.....highly professional.....Good services for car washing, painting & ceramic coating.</p>
                    <img src={profile} alt="Sundeep K Sunadh"/>
                    <div class="testimonial-author">Sundeep K Sunadh</div>
                    <div class="testimonial-role">Google Reviewer</div>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/SN+AUTO+ENTERPRISES/@16.5081113,80.6699006,17z/data=!4m8!3m7!1s0x3a35fb9b8e442b9b:0xa9c8b28b5b69cb0e!8m2!3d16.5081113!4d80.6724755!9m1!1b1!16s%2Fg%2F11j01htl2d?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target='_black' class="see-more-comments">See more comments →</a>
        </div>
    </section>

   <Footer/>


    </div>
  )
}

export default AboutUs