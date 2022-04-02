import simg from '/public/images/service-single/1.jpg';
import simg2 from '/public/images/service-single/2.jpg';
import simg4 from '/public/images/service-single/4.jpg';
import simg5 from '/public/images/service-single/5.jpg';
import simg6 from '/public/images/service-single/6.jpg';

import sSingleimg1 from '/public/images/service-single/s1.jpg';
import sSingleimg2 from '/public/images/service-single/s2.jpg';

import ins1 from '/public/images/instragram/7.jpg';


interface IService {
  id: string;
  sImg: StaticImageData;
  sTitle: string;
  description: string;
  des2: string;
  capabilities: string[];
  capabilitiesDes: string;
  workProcess: string;
  keyword: string;

  icon: string;
  ssImg1: StaticImageData;
  ssImg2: StaticImageData;
  sinst: StaticImageData;
}

const Services: IService[] = [
  {
    id: 'real-estate-photography',
    sImg: simg,
    sTitle: 'Real Estate Photography',
    description: 'Ag Logia\'s team of professionals provides a wide range of services including hdr photos and on-site photography. Our high-quality photos will set your listings apart from the competition. Talk to us about our packages today!',
    des2: 'Get the best Pictures for your house.',
    capabilitiesDes: 'We use the latest in professional equipment, including HDR and 4k technology, to capture every detail of your property with stunning clarity. We use only the most talented photographers and videographers in order to produce world-class work that you can rely on.',
    capabilities: [
      'HDR Photos',
      'Image quality improved',
      'Sky replacement',
      'Perspective Correction',
      'Colour correction',
    ],
    workProcess: 'Each shoot lasts about 2 hours. Before we get started, we will run a walkthrough to create a shot listing for that property. You and the owner do not need to be present during the shoot unless you wish.',
    keyword: 'photography',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'virtual-tour',
    sImg: simg2,
    sTitle: 'Virtual Tour',
    description: 'Our team of experts carefully captures every detail of the house to be able to create a virtual tour showcasing the best of the property. We use 360 cameras to provide you with the most up-to-date and interactive tours. Real estate agents and property managers love us because we help them show their listings in a completely new way.',
    des2: 'With realistic 3D representation of the house.',
    capabilitiesDes: 'We use the latest in professional equipment, including HDR and 4k technology, to capture every detail of your property with stunning clarity. The clients can access the virtual tour with every devices available without downloading anything.',
    capabilities: [
      'Share the 3D tour by Social Media',
      'Take measurements in real time',
      'Can be access from any PC and Smartphone',
      'Compatible with all the VR Headsets',
      'Interactive 3D models'
    ],
    workProcess: 'Each shoot lasts about 2 hours. Before we get started, we will run a walkthrough to create a shot listing for that property. You and the owner do not need to be present during the shoot unless you wish.',
    keyword: 'virtual',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'virtual-staging',
    sImg: simg2,
    sTitle: 'Virtual Staging',
    description: 'Develop a realistic first impression for potential buyers by showcasing your house with virtual staging. Virtual staging can be done from the comfort of your own home and is a cost-effective way to advertise your home. Professional virtual staging will increase the likelihood of getting a quick sale, is environmentally friendly, and is accessible to everyone.',
    des2: 'Buyers see the house virtually furnished and decorated.',
    capabilitiesDes: 'We use the latest technologies to bring photorealistic results',
    capabilities: [
      'Different style of furniture',
      'We can stage every room',
      'RTX technology',
    ],
    workProcess: 'Each shoot lasts about 2 hours. Before we get started, we will run a walkthrough to create a shot listing for that property. You and the owner do not need to be present during the shoot unless you wish.',
    keyword: 'virtual',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: '4k-video-tour',
    sImg: simg4,
    sTitle: '4K Video Tour',
    description: 'Sell your house with a Video Tour. Capture it all in one day. Get stunning 4K HDR video of every room and walk-through with a professional videographer. With Video Tour of the house, you can present your house to a potential buyer in a way that is more inviting, provides more information, and leaves them with a greater sense of ownership. It\'s an educational tool that is constantly updated, affordable and easy to set up.',
    des2: 'Say goodbye to high pressure listing tours, and see your property live.',
    capabilitiesDes: 'We use the latest in professional equipment, including HDR and 4k technology, to capture every detail of your property with stunning clarity. Every video will be available online within a click.',
    capabilities: [
      '4K Video',
      'Different languages',
      'You can share it on Social Media',
    ],
    workProcess: 'Each shoot lasts about 4 hours. Before we get started, we will run a walkthrough to create a shot listing for that property. You and the owner do not need to be present during the shoot unless you wish.',
    keyword: 'video',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'brochures-feature-sheets',
    sImg: simg5,
    sTitle: 'Brochures and Feature Sheets',
    description: 'You\'ve seen them before. They\'re everywhere. Billboards, websites, fliers, on the side of a bus, in your mailbox. We make brochures and feature sheets for the house! You know how they work: they convey information about a product or service to potential customers in an attractive, easy-to-follow way. Our brochures and feature sheets are no exception!',
    des2: 'We have the best brochures and feature sheets for your house. All you have to do is give us a call. We\'ll have them to your doorstep in no time.',
    capabilitiesDes: 'With our designers we can make professional brochures and feature sheets thanks to the latest design softwares.',
    capabilities: [
      '2 Pages',
      '4 Pages',
      'High Resolution Files',
    ],
    workProcess: 'We will take up to 3 hours to design a new Feature Sheet or Brochure, We will send the digital copy or print it and ship it to your location.',
    keyword: 'digital',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'drone-photos-videos',
    sImg: simg6,
    sTitle: 'Drone Photos and Videos',
    description: 'The only thing better than a drone is a drone to make pictures and movies of your house! Take high-quality photos and videos from any angle of your property in no time.',
    des2: 'We use a drone to make beautiful pictures and videos of the house.',
    capabilitiesDes: 'We use the latest in professional equipment, including HDR and 4k technology, to capture every detail of your property with stunning clarity.',
    capabilities: [
      '4K Videos',
      'HDR Pictures',
      'Aerial views of the entire property and land',
    ],
    workProcess: 'We will take up to 2 hours to shoot with our drone, please note that weather condition may effect the availability of the service.',
    keyword: 'photography',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'agent-portrait',
    sImg: simg6,
    sTitle: 'Agent Portrait',
    description: 'We\'re the best at taking agent portrait pictures. Our team is fun, relaxed, and talented. We use professional equipment and a simple process to create a one-of-a-kind photo that will make you look like at your best!',
    des2: 'We use a drone to make beautiful pictures and videos of the house.',
    capabilitiesDes: 'We use the latest in professional equipment, lightning and makeup to make you perfect.',
    capabilities: [
      'Digital Retouch',
      'Multiple Poses',
      'Effective Lightning',
      'Custom Backdrop',
    ],
    workProcess: 'Usually it takes less 1 hours to make 40 poses and then we will show you the best ones.',
    keyword: 'photography',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
  {
    id: 'website-development',
    sImg: simg6,
    sTitle: 'Website Development',
    description: 'Whether you are a real estate agent, mortgage broker, or just looking for ways to improve your business, our team of experts will help you create a tailored website that\'s perfect for you and your business.',
    des2: 'Website Development for Real Estate Agents.',
    capabilitiesDes: 'We use the latest in professional equipment, including HDR and 4k technology, to capture every detail of your property with stunning clarity.',
    capabilities: [
      'SEO Friendly',
      'House listing',
      'Agent Information',
      'Mobile compatible',
    ],
    workProcess: 'We will talk with you to understands your needs, and we will make the best website with the most recent technologies',
    keyword: 'digital',
    icon: 'fi flaticon-planning',
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins1,
  },
];

export default Services;
