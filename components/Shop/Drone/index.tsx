import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ProductDes from '..';
import { DronePriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';

const ShopDrone = observer(() => {
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('dronePhoto', 'DRONE ' + name, 1, price, 2, name)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[2].subTitle}
              description={Services[5].description}
              pImg={Projects[2].pImg}
              costumerReviews={5}
              startingPrice={Projects[2].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  {[0, 1, 2].map((item) => (
                    <div className='col col-lg-4 col-md-6 col-12 mx-auto' key={item}>
                      <div className='wpo-pricing-item'>
                        <div className='wpo-pricing-top'>
                          <div className='pricing-thumb'>
                            <span>{DronePriceList[item].title}</span>
                          </div>
                          <div className='wpo-pricing-text'>
                            <h2>${DronePriceList[item].rate}</h2>
                            <p>{DronePriceList[item].description}</p>
                          </div>
                        </div>
                        <div className='wpo-pricing-bottom'>
                          <div className='wpo-pricing-bottom-text'>
                            <ul>
                              {DronePriceList[item].features?.map(
                                (f, i) => (
                                  <li key={i}>- {f}</li>
                                )
                              )}
                            </ul>
                            <a onClick={() => addToCart(DronePriceList[item].title, DronePriceList[item].rate)}>
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

export default ShopDrone;
