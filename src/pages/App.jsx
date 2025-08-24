import { faCheck, faClock, faEnvelope, faEuroSign, faLocation, faPhone, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image } from "react-bootstrap";
import { serviceData } from '../assets/data/service.js'
import { testimonialData } from '../assets/data/testimonial.js'
import barber from '../assets/images/barbershop.png'
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";



export default function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="barshop">

      {/************************ home **********************/}
      <div id="home">
        <Container>
           <Header/>
          <div className="home-container">
            <div className="home-title">
              <h1>Hair Studio</h1>
              <p>Style your hair is style your life</p>
            </div>
            <div className="home-buttons">
              <a href='/'>Find Out</a>
              <a href='/'> Read More</a>
            </div>
          </div>
        </Container>
      </div>

      {/************************** features */}
      <section id="features">
        <Container>
          <div className="section-title">
            <div className="title">
              <p>FEATURES</p>
              <h1>Why Choose Us</h1>
            </div>
          </div>
          <div className="features-container">
            <div className="feature-category">
              <div className="feature">
                <div className="title">
                  <h2>Experienced Staff</h2>
                </div>
                <div className="desc">

                  <FontAwesomeIcon icon={faShieldHalved} className="icon" />

                  <p>Our team of experienced stylists are here to help you achieve your dream look.</p>
                </div>
              </div>
              <div className="feature">
                <div className="title">
                  <h2>Pre Booking Online</h2>
                </div>
                <div className="desc">

                  <FontAwesomeIcon icon={faCheck} className="icon" />

                  <p>Our team of experienced stylists are here to help you achieve your dream look.</p>
                </div>
              </div>
              <div className="feature">
                <div className="title">
                  <h2>Affordable Cost</h2>
                </div>
                <div className="desc">

                  <FontAwesomeIcon icon={faEuroSign} className="icon" />

                  <p>Our team of experienced stylists are here to help you achieve your dream look.</p>
                </div>
              </div>
            </div>
            <div className="feature-image" data-aos="fade-up" data-aos-duration="2000">
              {/***** image placed in css */}
            </div>
          </div>
        </Container>
      </section>
      {/************ services ***************/}
      <section id="services">
        <Container>
          <div className="section-title">
            <div className="title">
              <p>SERVICES</p>
              <h1>We Provide Better</h1>
            </div>
          </div>
          <div className="services-container">
            {serviceData.map((service) =>
              <div className="service" key={service.id} data-aos="fade-up" data-aos-duration="2000">
                <div className="service-image">
                  <Image src={service.imageUrl} alt={service.name} />
                </div>
                <div className="service-desc">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/*************** testimonials *******************/}
      <section>
        <Container>
          <div className="section-title">
            <div className="title">
              <p>TESTMONIALS</p>
              <h1>What Clients Says</h1>
            </div>
          </div>
          <div className="testimonial-container">
            {testimonialData.map((testimonial) =>
              <div className="testimonial" key={testimonial.id}>
                <div className="personal-info">
                  <div className="personal-image">
                    <Image src={testimonial.imageUrl} alt={testimonial.name} />
                    <p>{testimonial.name}</p>
                  </div>
                  <div className="comment">
                    <p>" {testimonial.comment} "</p>
                  </div>
                </div>
              </div>)}
          </div>
        </Container>
      </section>

      {/********************* contact ******************/}

      <section id="contact">
        <Container>
          <div className="section-title">
            <div className="title">
              <p>CONTACT</p>
              <h1>Visit Shop Today</h1>
            </div>
          </div>
          
          <Image  src={barber} alt="barber" />

          <div className="contact-container">
            <div className="opening-hours">
              <h1>Opening Hours</h1>
              <p><FontAwesomeIcon icon={faClock} className="icon" /> Monday to Friday - 8:00am to 4:30pm</p>
              <p><FontAwesomeIcon icon={faClock} className="icon" /> saturday to Sunday - 9:00am to 11:00am</p>

            </div>
            <div className="contact-info">
              <h1>Get In Touch</h1>
              <div className="links">
                <a href="tel:0882955862">0882955862 <FontAwesomeIcon icon={faPhone} className="icon"/> </a>
                <a href="/">Area 25C, Lilongwe, Malawi <FontAwesomeIcon icon={faLocation}className="icon" />  </a>
                <a href="mailto:liwondemartin19@gmail.com">liwondemartin19@gmail.coma <FontAwesomeIcon icon={faEnvelope} className="icon" /> </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/********************* footer *****************/}
      <Footer/>
    </div>
  )
}

