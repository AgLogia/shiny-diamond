import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import hero1 from '../../public/images/slider/slide-1.webp';
import hero3 from '../../public/images/slider/slide-4.webp';
import hero2 from '../../public/images/slider/slide-3.webp';


var settings = {
  dots: false,
  arrows: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  fade: true,
};

const Hero = () => (
  <section className='wpo-hero-slider wpo-hero-style-3'>
    <div className='wpo-line-animated'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <Slider {...settings}>
          <div className='hero-slide'>
            <div
              className='slide-inner'
              style={{ backgroundImage: `url(${hero1.src})` }}
            >
              <div className='container-fluid'>
                <div className='slide-content'>
                  <div className='slide-title'>
                    <h2>We photograph what sells</h2>
                  </div>
                  <div className='clearfix'></div>
                  <div className='slide-btns'>
                    <Link href='/about' >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-slide'>
            <div
              className='slide-inner'
              style={{ backgroundImage: `url(${hero2.src})` }}
            >
              <div className='container-fluid'>
                <div className='slide-content'>
                  <div className='slide-title'>
                    <h2>Interiors</h2>
                  </div>
                  <div className='clearfix'></div>
                  <div className='slide-btns'>
                    <Link href='/about'>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-slide'>
            <div
              className='slide-inner'
              style={{ backgroundImage: `url(${hero3.src})` }}
            >
              <div className='container-fluid'>
                <div className='slide-content'>
                  <div className='slide-title'>
                    <h2>Exteriors</h2>
                  </div>
                  <div className='clearfix'></div>
                  <div className='slide-btns'>
                    <Link href='/about' >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </section>
);

export default Hero;
