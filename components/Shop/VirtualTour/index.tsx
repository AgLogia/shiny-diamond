import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import ProductDes from '..';
import { VirtualTourPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';
import AGSlider from '../../slider';

const ShopVirtualTour = observer(() => {
  const [mark, setMark] = useState({ value: 1, label: '1-999 sq.ft' });
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('virtualTour', name, 1, price, 3, mark.label)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[3].subTitle}
              description={Services[1].description}
              pImg={Projects[3].pImg}
              costumerReviews={22}
              startingPrice={Projects[3].startingPrice}
            />

            <section className='wpo-pricing-section pb-5'>
              <div className='row'>
                <AGSlider
                  onMarkSelected={(value, label) =>
                    setMark({ value: value, label: label })
                  }
                />
              </div>

              <div className='wpo-pricing-wrap'>
                <div className='row'>
                  <div className='col col-lg-4 col-md-6 col-12 mx-auto'>
                    <div className='wpo-pricing-item'>
                      <div className='wpo-pricing-top'>
                        <div className='pricing-thumb'>
                          <span>{VirtualTourPriceList[mark.value - 1].title}</span>
                        </div>
                        <div className='wpo-pricing-text'>
                          <h2>${VirtualTourPriceList[mark.value - 1].rate}</h2>
                          <p>{VirtualTourPriceList[mark.value - 1].description}</p>
                        </div>
                      </div>
                      <div className='wpo-pricing-bottom'>
                        <div className='wpo-pricing-bottom-text'>
                          <ul>
                            {VirtualTourPriceList[mark.value - 1].features?.map(
                              (f, i) => (
                                <li key={i}>- {f}</li>
                              )
                            )}
                          </ul>
                          <a onClick={() => addToCart(VirtualTourPriceList[mark.value - 1].title, VirtualTourPriceList[mark.value - 1].rate)}>
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

export default ShopVirtualTour;
