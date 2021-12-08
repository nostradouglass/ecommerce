import axios from "axios";
import Cookie from "js-cookie";
import { CartActionTypes } from "../actiontypes";

const URL = "http://localhost:5000"

const addToCart =
  (productId: string, qty: number) => async (dispatch: any, getState: any) => {
    try {
      const { data } = await axios.get(`${URL}/api/products/` + productId);
      dispatch({
        type: CartActionTypes.CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        },
      });
      const {
        cart: { cartItems },
      } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {}
  };
const removeFromCart = (productId: any) => (dispatch: any, getState: any) => {
  dispatch({ type: CartActionTypes.CART_REMOVE_ITEM, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
const saveShipping = (data: any) => (dispatch: any) => {
  dispatch({ type: CartActionTypes.CART_SAVE_SHIPPING, payload: data });
};
const savePayment = (data: any) => (dispatch: any) => {
  dispatch({ type: CartActionTypes.CART_SAVE_PAYMENT, payload: data });
};
export { addToCart, removeFromCart, saveShipping, savePayment };
