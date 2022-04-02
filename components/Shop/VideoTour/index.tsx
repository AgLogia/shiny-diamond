import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import ProductDes from '..';
import { VideoPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';
import AGSlider from '../../slider';

const ShopVideoTour = observer(() => {
  const [mark, setMark] = useState({ value: 1, label: '1-999 sq.ft' });
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(
      new CartItemStore('video', name, 1, price, 5, mark.label)
    );
  };

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[5].subTitle}
              description={Services[3].description}
              pImg={Projects[5].pImg}
              costumerReviews={13}
              startingPrice={Projects[5].startingPrice}
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
                          <span>{VideoPriceList[mark.value - 1].title}</span>
                        </div>
                        <div className='wpo-pricing-text'>
                          <h2>${VideoPriceList[mark.value - 1].rate}</h2>
                          <p>{VideoPriceList[mark.value - 1].description}</p>
                        </div>
                      </div>
                      <div className='wpo-pricing-bottom'>
                        <div className='wpo-pricing-bottom-text'>
                          <ul>
                            {VideoPriceList[mark.value - 1].features?.map(
                              (f, i) => (
                                <li key={i}>- {f}</li>
                              )
                            )}
                          </ul>
                          <a onClick={() => addToCart(VideoPriceList[mark.value - 1].title, VideoPriceList[mark.value - 1].rate)}>
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

export default ShopVideoTour;
