import React from 'react';
import ContactForm from '../../components/ContactForm';

const ContactSection = () => {
  return (
    <section className='wpo-contact-pg-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-10 offset-lg-1'>
            <div className='office-info'>
              <div className='row'>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-location'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Locations</h2>
                      <p>Toronto, Vaughan, Richmond Hill, Markham</p>
                    </div>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-email'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Email Us</h2>
                      <p>info@aglogia.com</p>
                      <br/>
                    </div>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-telephone'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Call Now</h2>
                      <p>+1 (416) 433-3684</p>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='wpo-contact-title'>
              <h2>Have Any Question?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div className='wpo-contact-form-area'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className='wpo-contact-map-section'>
        <div className='wpo-contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146118.79823383657!2d-79.49479369745592!3d43.75073174765491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1649344412854!5m2!1sen!2sca"></iframe>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
