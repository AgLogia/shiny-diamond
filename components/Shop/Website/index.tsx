import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ProductDes from '..';
import { WebsitePriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';

const ShopWebsite = observer(() => {
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('website', name, 1, price, 8)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[8].subTitle}
              description={Services[7].description}
              pImg={Projects[8].pImg}
              costumerReviews={8}
              startingPrice={Projects[8].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  <div className='col col-lg-4 col-md-6 col-12 mx-auto'>
                    <div className='wpo-pricing-item'>
                      <div className='wpo-pricing-top'>
                        <div className='pricing-thumb'>
                          <span>{WebsitePriceList[0].title}</span>
                        </div>
                        <div className='wpo-pricing-text'>
                          <h2>${WebsitePriceList[0].rate}</h2>
                          <p>{WebsitePriceList[0].description}</p>
                        </div>
                      </div>
                      <div className='wpo-pricing-bottom'>
                        <div className='wpo-pricing-bottom-text'>
                          <ul>
                            {WebsitePriceList[0].features?.map(
                              (f, i) => (
                                <li key={i}>- {f}</li>
                              )
                            )}
                          </ul>
                          <a onClick={() => addToCart(WebsitePriceList[0].title, WebsitePriceList[0].rate)}>
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

export default ShopWebsite;
