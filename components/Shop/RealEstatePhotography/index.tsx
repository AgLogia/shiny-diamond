import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import ProductDes from '..';
import { PhotoPriceList } from '../../../pages/api/prices';
import Projects from '../../../pages/api/project';
import Services from '../../../pages/api/service';
import { CartItemStore } from '../../../stores/CartStore';
import { RootStoreContext } from '../../../stores/RootStore';
import AGSlider from '../../slider';

const ShopRealEstatePhotography = observer(() => {
  const [mark, setMark] = useState({value: 1, label: '1-999 sq.ft'});
  const cartStorage = useContext(RootStoreContext);

  const addToCart = (name: string, price: number) => {
    cartStorage.addItemToCart(new CartItemStore('photo', name, 1, price, 0, mark.label));
  }

  return (
    <section className='page-content'>
      <div className='container'>
        <div className='page-content-row'>
          <div className='shop-page'>
            <ProductDes
              subTitle={Projects[0].subTitle}
              description={Services[0].description}
              pImg={Projects[0].pImg}
              costumerReviews={25}
              startingPrice={Projects[0].startingPrice}
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
                  {[-1, 5].map((item) => (
                    <div className='col col-lg-6 col-md-6 col-12' key={item}>
                      <div className='wpo-pricing-item'>
                        <div className='wpo-pricing-top'>
                          <div className='pricing-thumb'>
                            <span>
                              {PhotoPriceList[mark.value + item].title}
                            </span>
                          </div>
                          <div className='wpo-pricing-text'>
                            <h2>${PhotoPriceList[mark.value + item].rate}</h2>
                            <p>
                              {PhotoPriceList[mark.value + item].description}
                            </p>
                          </div>
                        </div>
                        <div className='wpo-pricing-bottom'>
                          <div className='wpo-pricing-bottom-text'>
                            <ul>
                              {PhotoPriceList[mark.value + item].features?.map(
                                (f, i) => (
                                  <li key={i}>- {f}</li>
                                )
                              )}
                            </ul>
                            <a onClick={() =>addToCart(PhotoPriceList[mark.value + item].title,PhotoPriceList[mark.value + item].rate)}>
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

export default ShopRealEstatePhotography;
