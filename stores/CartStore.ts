export type CartItemType =
  | 'photo'
  | 'portrait'
  | 'dronePhoto'
  | 'virtualTour'
  | 'virtualStaging'
  | 'video'
  | 'droneVideo'
  | 'brochures'
  | 'website';

export class CartItemStore {
  type: CartItemType;
  desc: string;
  qnt: number;
  price: number;
  pId: number;
  size?: string;

  constructor(type: CartItemType, desc: string, qnt: number, price: number, pId: number, size?: string) {
    this.type = type;
    this.desc = desc;
    this.qnt = qnt;
    this.price = price;
    this.pId = pId;
    this.size = size;
  }
}
