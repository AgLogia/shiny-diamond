import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ts1 from '../../public/images/testimonial/img-1.jpeg';
import ts2 from '../../public/images/testimonial/img-2.jpeg';
import ts3 from '../../public/images/testimonial/img-3.jpeg';
import SectionTitle from '../SectionTitle';

var settings = {
  dots: false,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const testimonial = [
  {
    tsImg: ts1,
    Des: '“AgLogia Photography was a nice find for me. I had been looking for some good real estate photography and stumbled across their website. They had the most affordable prices and best quality photos. I booked them for an upcoming shoot and was very pleased with how everything went!”',
    Title: 'Jenefer Mei',
    Sub: 'Agent',
  },
  {
    tsImg: ts2,
    Des: `“I'm not a fan of real estate virtual tours. I never can feel like I am really there. AgLogia photography is different, though. The images are so vibrant and crisp. It's almost like you are walking down the street and you can even see the flowers blooming on the tree close to where it says for sale! Really loved it and would recommend this”`,
    Title: 'Robert Wu',
    Sub: 'Agent',
  },
  {
    tsImg: ts3,
    Des: `“The customer service is impeccable, they are always available to answer any questions or concerns and are incredibly helpful in every way. I've used AgLogia Photography for my last two homes that I've sold and it was a seamless process! They take the best photos and make everyone in the family look great.”`,
    Title: 'Henry Bannet',
    Sub: 'Agent',
  },
];
const Testimonial = () => (
  <div className='wpo-testimonial-area section-padding'>
    <div className='container'>
      <SectionTitle
        subTitle={'Testimonial'}
        mainTitle={'People Say About Us'}
      />
      <div className='wpo-testimonial-wrap'>
        <div className='testimonial-slider owl-carousel'>
          <Slider {...settings}>
            {testimonial.map((tesmnl, tsm) => (
              <div className='wpo-testimonial-item' key={tsm}>
                <div className='wpo-testimonial-top'>
                  <div className='wpo-testimonial-img'>
                    <Image src={tesmnl.tsImg.src} width={tesmnl.tsImg.width} height={tesmnl.tsImg.height} alt='' />
                  </div>
                  <div className='wpo-testimonial-info'>
                    <h2>{tesmnl.Title}</h2>
                    <span>{tesmnl.Sub}</span>
                  </div>
                </div>
                <div className='wpo-testimonial-content'>
                  <p>{tesmnl.Des}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
