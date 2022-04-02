import React from 'react';
import ins1 from '/public/images/instragram/7.jpg';
import ins2 from '/public/images/instragram/8.jpg';
import ins3 from '/public/images/instragram/9.jpg';
import ins4 from '/public/images/instragram/10.jpg';
import ins5 from '/public/images/instragram/11.jpg';
import ins6 from '/public/images/instragram/12.jpg';
import Services from '../../pages/api/service';
import Link from 'next/link';
import Image from 'next/image';

const ServiceSidebar = () => {
  const SubmitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className='col-lg-4 col-12'>
      <div className='blog-sidebar'>
        <div className='widget search-widget'>
          <form onSubmit={SubmitHandler}>
            <div>
              <input
                type='text'
                className='form-control'
                placeholder='Search Post..'
              />
              <button type='submit'>
                <i className='ti-search'></i>
              </button>
            </div>
          </form>
        </div>
        <div className='widget category-widget'>
          <h3>Services</h3>
          <ul>
            {Services.map((service, Sitem) => (
              <li key={Sitem}>
                <Link
                  href={`/services/${service.id}`}
                >
                  {service.sTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='wpo-newsletter-widget widget'>
          <h2>Newsletter</h2>
          <p>Join 1,000 Subscribers!</p>
          <form className='form' onSubmit={SubmitHandler}>
            <input type='email' placeholder='Email Address' required />
            <button type='submit'>Sign Up</button>
          </form>
          <span>
            By signing up you agree to our <Link href='#'>Privacy Policy</Link>
          </span>
        </div>
        <div className='widget wpo-instagram-widget'>
          <div className='widget-title'>
            <h3>Instagram</h3>
          </div>
          <ul className='d-flex'>
            <li>
              <Image src={ins1.src} width={ins1.width} height={ins1.height} alt='' />
            </li>
            <li>
              <Image src={ins2.src} width={ins2.width} height={ins2.height} alt='' />
            </li>
            <li>
              <Image src={ins3.src} width={ins3.width} height={ins3.height} alt='' />
            </li>
            <li>
              <Image src={ins4.src} width={ins4.width} height={ins4.height} alt='' />
            </li>
            <li>
              <Image src={ins5.src} width={ins5.width} height={ins5.height} alt='' />
            </li>
            <li>
              <Image src={ins6.src} width={ins6.width} height={ins6.height} alt='' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
