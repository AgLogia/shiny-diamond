export interface IPrice {
  id: number;
  title: string;
  description: string;
  rate: number;
  features?: string[];
  link?: string;
}

const PriceList: IPrice[] = [
  { id: 1, title: 'BASIC', description: 'The basic package', rate: 329.99, features: ['Real Estate HDR Photos', '4K Video Tour'] },
  { id: 2, title: 'PREMIUM', description: 'The Most popular option, you have all you need to sell your house', rate: 659.99, features: ['Everything in BASIC', '360 Virtual Tour', 'Feature Sheets'] },
  { id: 3, title: 'ADVANCED', description: 'If you don\'t want to miss anything', rate: 999.99, features: ['Everything in PREMIUM', 'Drone Photos', '8 Virtual staging pictures'] },
];

export const VideoPriceList: IPrice[] = [
  { id: 1, title: '4K VIDEO', description: 'The basic package', rate: 199.99 },
  { id: 2, title: '4K VIDEO', description: 'The basic package', rate: 249.99 },
  { id: 3, title: '4K VIDEO', description: 'The basic package', rate: 299.99 },
  { id: 4, title: '4K VIDEO', description: 'The basic package', rate: 399.99 },
  { id: 5, title: '4K VIDEO', description: 'The basic package', rate: 499.99 },
  { id: 6, title: '4K VIDEO', description: 'The basic package', rate: 549.99 },
]

export const PhotoPriceList: IPrice[] = [
  { id: 1, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 149.99 },
  { id: 2, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 199.99 },
  { id: 3, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 249.99 },
  { id: 4, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 299.99 },
  { id: 5, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 349.99 },
  { id: 6, title: 'HDR PICTURES', description: '30 HDR Pictures', rate: 399.99 },
  
  { id: 7, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 199.99 },
  { id: 8, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 249.99 },
  { id: 9, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 299.99 },
  { id: 10, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 349.99 },
  { id: 11, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 399.99 },
  { id: 12, title: 'FLASH PICTURES', description: '30 FLASH Pictures', rate: 449.99 },
]

export const VirtualTourPriceList: IPrice[] = [
  { id: 1, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 199.99 },
  { id: 2, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 249.99 },
  { id: 3, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 299.99 },
  { id: 4, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 349.99 },
  { id: 5, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 399.99 },
  { id: 6, title: 'VIRTUAL TOUR', description: '3D Virtual Tour and Floor Plan', rate: 449.99 },
]

export const DronePriceList: IPrice[] = [
  { id: 1, title: 'PHOTOS', description: 'Drone Photos', rate: 149.99 },
  { id: 2, title: 'VIDEO', description: 'Drone Video', rate: 199.99 },
  { id: 3, title: 'PHOTOS + VIDEO', description: 'Drone Photos and Drone Video', rate: 299.99 },
]

export const VirtualStagingPriceList: IPrice[] = [
  { id: 1, title: 'EACH', description: 'High Resolution Picture', rate: 49.99 }
]

export const FeatureSheetsPriceList: IPrice[] = [
  { id: 1, title: 'DIGITAL', description: 'Digital Feature Sheet/Brochure', rate: 79.99 },
]

export const AgentPriceList: IPrice[] = [
  { id: 1, title: '4 PICTURES', description: '4 Portrait pictures, unlimited poses', rate: 399.99 },
  { id: 2, title: '+ MAKEUP', description: '4 Portrait pictures, unlimited poses and Makeup', rate: 699.99 },
]

export const WebsitePriceList: IPrice[] = [
  { id: 1, title: 'FULL WEBSITE', description: 'Website with SEO Optimization, personal domain, content management', rate: 999.99 },
]

export const ServicesList = [
  PriceList,
  VideoPriceList,
  PhotoPriceList,
  VirtualTourPriceList,
  DronePriceList,
  FeatureSheetsPriceList,
  AgentPriceList,
  WebsitePriceList
]

export default PriceList;
