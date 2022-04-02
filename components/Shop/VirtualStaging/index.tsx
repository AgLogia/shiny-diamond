import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import NumericInput from 'react-numeric-input';
import ProductDes from '..';
import { VirtualStagingPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';

const ShopVirtualStaging = observer(() => {
  const [qnt, setQnt] = useState(1);
  const [price, setPrice] = useState(VirtualStagingPriceList[0].rate);
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('virtualStaging', "VIRTUAL STAGING", qnt, price, 4)
    );
  };

  const checkRate = () => {
    setPrice(+(VirtualStagingPriceList[0].rate - (Math.trunc(qnt / 5))).toFixed(2));
  }

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[4].subTitle}
              description={Services[2].description}
              pImg={Projects[4].pImg}
              costumerReviews={9}
              startingPrice={Projects[4].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='row mb-5 wpo-section-title'>
                <div className='col col-lg-4 col-md-6 col-12 mx-auto mb-2'>
                  <span>Quantity</span>
                  <NumericInput 
                    mobile 
                    min={1} 
                    max={100} 
                    value={qnt} 
                    onChange={(value) => { setQnt(value || 1); checkRate() }}
                  />
                </div>
              </div>

              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  <div className='col col-lg-4 col-md-6 col-12 mx-auto'>
                    <div className='wpo-pricing-item'>
                      <div className='wpo-pricing-top'>
                        <div className='pricing-thumb'>
                          <span>{VirtualStagingPriceList[0].title}</span>
                        </div>
                        <div className='wpo-pricing-text'>
                          <h2>${price}</h2>
                          <p>{VirtualStagingPriceList[0].description}</p>
                        </div>
                      </div>
                      <div className='wpo-pricing-bottom'>
                        <div className='wpo-pricing-bottom-text'>
                          <ul>
                            {VirtualStagingPriceList[0].features?.map(
                              (f, i) => (
                                <li key={i}>- {f}</li>
                              )
                            )}
                          </ul>
                          <a onClick={() => addToCart(VirtualStagingPriceList[0].title, price)}>
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ShopVirtualStaging;
