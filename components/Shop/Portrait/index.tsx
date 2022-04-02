import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import ProductDes from '..';
import { AgentPriceList, VideoPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';

const ShopPortrait = observer(() => {
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('photo', 'AGENT PORTRAIT', 1, price, 5, name)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[1].subTitle}
              description={Services[6].description}
              pImg={Projects[1].pImg}
              costumerReviews={39}
              startingPrice={Projects[1].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  {[0, 1].map((item) => (
                    <div className='col col-lg-4 col-md-6 col-12 mx-auto'>
                      <div className='wpo-pricing-item'>
                        <div className='wpo-pricing-top'>
                          <div className='pricing-thumb'>
                            <span>{AgentPriceList[item].title}</span>
                          </div>
                          <div className='wpo-pricing-text'>
                            <h2>${AgentPriceList[item].rate}</h2>
                            <p>{AgentPriceList[item].description}</p>
                          </div>
                        </div>
                        <div className='wpo-pricing-bottom'>
                          <div className='wpo-pricing-bottom-text'>
                            <ul>
                              {AgentPriceList[item].features?.map(
                                (f, i) => (
                                  <li key={i}>- {f}</li>
                                )
                              )}
                            </ul>
                            <a onClick={() => addToCart(AgentPriceList[item].title, AgentPriceList[item].rate)}>
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ShopPortrait;
