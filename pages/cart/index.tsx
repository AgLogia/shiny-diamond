import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import React, { Fragment, useContext } from 'react';
import NumericInput from 'react-numeric-input';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Quantity from '../../components/Quantity';
import Scrollbar from '../../components/Scrollbar';
import { RootStoreContext } from '../../stores/RootStore';
import Projects from '../api/project';

const CartPage = observer(() => {
  const store = useContext(RootStoreContext);

  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-2'} />
      <PageTitle pageTitle={'Cart'} pageSub={'Cart'} />
      <div className='cart-area section-padding'>
        <div className='container'>
          <div className='form'>
            <div className='cart-wrapper'>
              <div className='row'>
                <div className='col-12'>
                  <form action='cart'>
                    <table className='table-responsive cart-wrap'>
                      <thead>
                        <tr>
                          <th className='images images-b'>Image</th>
                          <th className='product-2'>Product Name</th>
                          <th className='pr'>Quantity</th>
                          <th className='ptice'>Price</th>
                          <th className='stock'>Total Price</th>
                          <th className='remove remove-b'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {store.cartItems.map((item, i) => (
                          <tr key={i}>
                            <td className='images'>
                              <img src={Projects[item.pId].pImg.src} alt='' />
                            </td>
                            <td className='product'>
                              <ul>
                                <li className='first-cart'>
                                  <Link
                                    href={`/shop/service/${item.type}`}
                                  >
                                    {item.desc}
                                  </Link>
                                </li>
                                <li>Details : {item.size}</li>
                              </ul>
                            </td>
                            <td className='stock'>
                              <ul className='input-style'>
                                <li className='quantity cart-plus-minus'>
                                <NumericInput 
                                  mobile 
                                  min={1} 
                                  max={100} 
                                  value={item.qnt} 
                                  onChange={(value) => { item.qnt = value || 1 }}
                                />
                                </li>
                              </ul>
                            </td>
                            <td className='ptice'>$ {item.price}</td>
                            <td className='stock'>$ {(item.price * item.qnt).toFixed(2)}</td>
                            <td className='action'>
                              <ul>
                                <li className='w-btn'>
                                  <a
                                    data-bs-toggle='tooltip'
                                    data-bs-html='true'
                                    title='Remove from Cart'
                                    onClick={() => store.removeItemFromCart(i)}
                                  >
                                    <i className='fi fa fa-trash'></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                  <div className='submit-btn-area'>
                    <ul>
                      <li>
                        <Link href='/shop'>
                          <a className='theme-btn'>
                            Continue Shopping
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                        <button type='submit'>Update Cart</button>
                      </li> */}
                    </ul>
                  </div>
                  <div className='cart-product-list'>
                    <ul>
                      <li>
                        Total product<span>{store.cartItems.length}</span>
                      </li>
                      <li>
                        Sub Price<span>${store.getSubTotal()}</span>
                      </li>
                      <li>
                        Discount({store.discount}%)<span>${store.getDiscount()}</span>
                      </li>
                      <li>
                        Tax<span>${store.getTax()}</span>
                      </li>
                      <li className='cart-b'>
                        Total Price<span>${store.getTotal()}</span>
                      </li>
                    </ul>
                  </div>

                  <div className='submit-btn-area'>
                    <ul>
                      <li>
                        <Link href='/checkout'>
                          <a className='theme-btn'>
                            Proceed to Booking
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </Fragment>
  );
});
export default CartPage;
