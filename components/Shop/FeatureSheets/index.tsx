import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ProductDes from '..';
import { FeatureSheetsPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';

const ShopFeatureSheets = observer(() => {
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('brochures', 'FEATURE SHEETS', 1, price, 7, name)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[7].subTitle}
              description={Services[4].description}
              pImg={Projects[7].pImg}
              costumerReviews={15}
              startingPrice={Projects[7].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  <div className='col col-lg-4 col-md-6 col-12 mx-auto'>
                    <div className='wpo-pricing-item'>
                      <div className='wpo-pricing-top'>
                        <div className='pricing-thumb'>
                          <span>{FeatureSheetsPriceList[0].title}</span>
                        </div>
                        <div className='wpo-pricing-text'>
                          <h2>${FeatureSheetsPriceList[0].rate}</h2>
                          <p>{FeatureSheetsPriceList[0].description}</p>
                        </div>
                      </div>
                      <div className='wpo-pricing-bottom'>
                        <div className='wpo-pricing-bottom-text'>
                          <ul>
                            {FeatureSheetsPriceList[0].features?.map(
                              (f, i) => (
                                <li key={i}>- {f}</li>
                              )
                            )}
                          </ul>
                          <a onClick={() => addToCart(FeatureSheetsPriceList[0].title, FeatureSheetsPriceList[0].rate)}>
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

export default ShopFeatureSheets;
