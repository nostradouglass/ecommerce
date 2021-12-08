import { CartActionTypes } from "../actiontypes";

interface addToCartAction {
  type: CartActionTypes.CART_ADD_ITEM;
  payload: {
    product: any;
    name: string;
    image: any;
    price: number;
    countInStock: number;
    qty: number;
  };
}

interface removeFromCartAction {
  type: CartActionTypes.CART_REMOVE_ITEM;
  payload: any;
}

interface saveShipping {
  type: CartActionTypes.CART_SAVE_SHIPPING;
  payload: any;
}

interface savePayment {
  type: CartActionTypes.CART_SAVE_PAYMENT;
  payload: any;
}

export type Actions =
  | addToCartAction
  | removeFromCartAction
  | saveShipping
  | savePayment;
