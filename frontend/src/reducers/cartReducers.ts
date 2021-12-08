import { CartActionTypes} from '../actiontypes'
import { CartActions } from '../actionsTs'

interface CartState {
        cartItems: any[]
        shipping?: any
        payment?: any
}

const initialState = { cartItems: [], shipping: {}, payment: {} }

function cartReducer(state: CartState = initialState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      const item = action.payload;

        //  let temp =  { ...state, cartItems: state.cartItems.map(x => x.product === item.product ? item : x)}
   
        //  return temp
      //   return {
      //     cartItems:
      //       state.cartItems.map(x => x.product === product.product ? item : x)
      //   };
       
      // return { cartItems: [...state.cartItems, item] };

      const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }
      return { cartItems: [...state.cartItems, item] };

    case CartActionTypes.CART_REMOVE_ITEM:
      //return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
      return {...state}
    case CartActionTypes.CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case CartActionTypes.CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { cartReducer }