import React from 'react';
import abimg from '../../public/images/about4.webp';
import abimg2 from '../../public/images/about-shape.jpg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const About = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className='wpo-about-area-s3 section-padding'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='wpo-about-img'>
              <Image src={abimg} alt='' />
              <div className='wpo-about-img-text'>
                <h2>10+</h2>
                <p>Years of Experience</p>
                <div className='about-shape'>
                  <Image src={abimg2} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-12 colsm-12'>
            <div className='wpo-about-text'>
              <h1>About Us</h1>
              <div className='wpo-about-title'>
                <h2>Your real estate photography partner</h2>
              </div>
              <p>
                We're a one-stop-shop for all your photography needs - from shooting to editing and marketing - so you can focus on what you do best. Our services are affordable, high-quality, and fast enough to meet even the tightest deadlines.
              </p>
              <ul className='ab-list'>
                <li>We provide free initial consultation and support.</li>
                <li>We have the professional designers team.</li>
                <li>We work with some of the most successful businesses.</li>
              </ul>
              <div className='btns'>
                <Link to='/about' onClick={ClickHandler} className='theme-btn'>
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
