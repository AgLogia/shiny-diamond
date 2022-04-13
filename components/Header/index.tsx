import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import MenuItems from '../../pages/api/menu';
import Projects from '../../pages/api/project';
import { RootStoreContext } from '../../stores/RootStore';
import MobileMenu from '../MobileMenu';
import Logo from '/public/images/logo.svg';

interface IProps {
  hclass: string;
}

const Header = observer((props: IProps) => {
  const [isSidebarShow, setSidebarShow] = useState(false);
  const [isCartShow, setCartShow] = useState(false);
  const cartStore = useContext(RootStoreContext);

  const sidebarHandler = () => {
    setSidebarShow(!isSidebarShow);
  };

  const SubmitHandler = (e: any) => {
    e.preventDefault();
  };

  const removeItem = (index: number) => {
    cartStore.removeItemFromCart(index);
  }

  return (
    <header id='header'>
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className='navigation navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-3 d-lg-none dl-block'>
                <div className='mobil-menu'>
                  <MobileMenu />
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-6'>
                <div className='navbar-header'>
                  <Link href='/'>
                    <a className='navbar-brand'>
                      <Logo height='50px'/>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-9 col-md-1 col-1'>
                <div
                  id='navbar'
                  className='collapse navbar-collapse navigation-holder'
                >
                  <button className='menu-close'>
                    <i className='ti-close'></i>
                  </button>
                  <ul className='nav navbar-nav mb-2 mb-lg-0'>
                    {MenuItems.map((item) => (
                      <li key={item.title} className={item.children && 'menu-item-has-children'}>
                        <Link href={item.link}>{item.title}</Link>
                        {item.children && (
                          <ul className='sub-menu'>
                            {item.children.map((subItem, index) => (
                              <li key={index}>
                                <Link href={subItem.link}>{subItem.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='col-lg-1 col-md-1 col-2'>
                <div className='header-right'>
                  <div className='header-right-menu-wrapper'>
                    <div className='header-right-menu'>
                      <div
                        className='right-menu-toggle-btn'
                        onClick={sidebarHandler}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div
                        className={`header-right-menu-wrap ${
                          isSidebarShow ? 'right-menu-active' : ''
                        }`}
                      >
                        <button
                          onClick={sidebarHandler}
                          className='right-menu-close'
                        >
                          <i className='ti-close'></i>
                        </button>
                        <div className='logo'>
                          <Logo height='50px'/>
                          {/* <Image src={Logo} alt='' />project.pImg */}
                        </div>
                        <div className='header-right-sec'>
                          <div className='project-widget widget'>
                            <h3>Our Best Services</h3>
                            <ul>
                              {Projects.slice(0, 6).map((project, pot) => (
                                <li key={pot}>
                                  <Link href={`/services/${project.id}`}>
                                    <a onClick={() => sidebarHandler()}>
                                      <Image
                                        src={project.pImg.src}
                                        alt=''
                                        width={project.pImg.width}
                                        height={project.pImg.height}
                                      />
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className='widget wpo-contact-widget'>
                            <div className='widget-title'>
                              <h3>Contact Us</h3>
                            </div>
                            <div className='contact-ft'>
                              <ul>
                                <li>
                                  <i className='fi flaticon-location'></i>Toronto, ON, Canada
                                </li>
                                <li>
                                  <i className='fi flaticon-telephone'></i>+ 1 (416) 433 3684
                                </li>
                                <li>
                                  <i className='fi flaticon-email'></i>
                                  info@aglogia.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='widget newsletter-widget'>
                            <div className='widget-title'>
                              <h3>Newsletter</h3>
                            </div>
                            <form onSubmit={SubmitHandler}>
                              <div className='input-1'>
                                <input
                                  type='email'
                                  className='form-control'
                                  placeholder='Email Address *'
                                  required
                                />
                                <div className='submit clearfix'>
                                  <button type='submit'>
                                    <i className='ti-email'></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={() => setCartShow(!isCartShow)}> 
                      <i className="fi flaticon-shopping-cart" />
                      <span className="cart-count">{cartStore.cartItems.length}</span>
                    </button>
                    <div className={`mini-cart-content ${isCartShow ? 'mini-cart-content-toggle' : ''}`}>
                      <button className="mini-cart-close" onClick={() => setCartShow(!isCartShow)}><i className="ti-close"></i></button>
                      <div className="mini-cart-items">
                        {cartStore.cartItems.map((item, i) => (
                          <div className="mini-cart-item clearfix" key={i + item.type}>
                            <div className="mini-cart-item-image">
                              <a href="/shop">
                                <Image 
                                  src={Projects[item.pId].pImg.src} 
                                  width={48} 
                                  height={48} 
                                  alt='' 
                                />
                              </a>
                            </div>
                            <div className="mini-cart-item-des">
                              <a href="/shop">{item.desc}</a>
                              <span className="mini-cart-item-price">{item.size}</span>
                              <span className="mini-cart-item-price">${item.price} x {item.qnt}</span>
                              <span className="mini-cart-item-quantity" onClick={() => removeItem(i)}>
                                <a><i className="ti-close"></i></a>
                              </span>
                            </div>
                          </div>
                        ))}              
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">Subtotal: <span>${cartStore.getSubTotal()}</span></span>
                        <div className="mini-btn">
                          <a href="/checkout" className="view-cart-btn s1">Checkout</a>
                          <a href="/cart" className="view-cart-btn">View Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
});

export default Header;
