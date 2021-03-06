import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Projects from '../../pages/api/project';

interface IProps {
  parentPage: string;
  isShop?: boolean;
}

const ShoppingList = (props: IProps) => {

  return (
    <section className='wpo-shop-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='shop-grids clearfix'>
              {Projects.map((item, en) => (
                <div className='grid' key={en}>
                  <div className='img-holder'>
                    <Image src={item.pImg.src} width={item.pImg.width} height={item.pImg.height} alt='' />
                  </div>
                  <div className='details'>
                    <h3>
                      <Link href={`${props.parentPage}/${item.id}`}>
                        {item.subTitle}
                      </Link>
                    </h3>
                    {props.isShop && <span>starting from ${item.startingPrice}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingList;
