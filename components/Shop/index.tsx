import Image from "next/image";

interface IProps {
  startingPrice: number;
  description: string;
  subTitle: string;
  pImg: StaticImageData;
  costumerReviews: number;
}

const ProductDes = (props: IProps) => (
  <div className='row'>
    <div className='col-lg-12'>
      <div className='shop-page-details section-padding'>
        <div className='shop-items'>
          <div className='shop-item single'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='shop-img'>
                  <Image
                    src={props.pImg.src}
                    width={props.pImg.width}
                    height={props.pImg.height}
                    alt=''
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='shop-info'>
                  <h3>{props.subTitle}</h3>
                  <ul className='rating'>
                    <li>
                      <span>
                        <i className='fa fa-star'></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='fa fa-star'></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='fa fa-star'></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='fa fa-star'></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className='fa fa-star'></i>
                      </span>
                    </li>
                  </ul>
                  <span className='review_count'>( {props.costumerReviews} Customer Reviews )</span>
                  <div className='clearfix'></div>
                  <span className='price-num'>
                    Starting from ${props.startingPrice}
                  </span>
                  <div className='des'>
                    <p>{props.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDes;