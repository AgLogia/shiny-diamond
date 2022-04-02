import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { CartItemStore } from './CartStore';
import { makePersistable } from 'mobx-persist-store';

export class RootStore {
  cartItems: CartItemStore[] = [];
  discount: number = 20;

  constructor() {
    makeAutoObservable(this);
    (typeof window !== 'undefined') && makePersistable(this, {
      name: 'cartItems',
      properties: ['cartItems'],
      storage: window.localStorage,
    });
  }

  public addItemToCart(item: CartItemStore) {
    this.cartItems.push(item);
  }

  public removeItemFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  public getSubTotal() {
    return this.cartItems.reduce((p, c) => p + c.price * c.qnt, 0).toFixed(2);
  }

  public getDiscount() {
    return (+this.getSubTotal() * 0.2).toFixed(2);
  }

  public getTax() {
    return ((+this.getSubTotal() - +this.getDiscount()) * 0.13).toFixed(2);
  }

  public getTotal() {
    return (+this.getSubTotal() - +this.getDiscount() + +this.getTax()).toFixed(2);
  }
}

export const RootStoreContext = createContext(new RootStore());
