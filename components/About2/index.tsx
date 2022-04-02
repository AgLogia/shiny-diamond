import Image from 'next/image';
import React from 'react';
import abimg from '/public/images/about.jpg';

const About2 = () => {
  return (
    <div className='wpo-about-area section-padding'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='wpo-about-img'>
              <Image
                src={abimg.src}
                width={abimg.width}
                height={abimg.height}
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-7 col-md-12 colsm-12'>
            <div className='wpo-about-text'>
              <div className='wpo-about-title'>
                <span>About Us</span>
                <h2>Take your business to the next level</h2>
              </div>
              <h5>
                Over 10 years  helping investors building their drea &
                business goals go to the perfection&quot;
              </h5>
              <p>
                We create stunning real estate photos that will have viewers
                lining up to buy your properties. You'll be able to handle all
                aspects of your business without any worries about quality
                photos because we've got this!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
