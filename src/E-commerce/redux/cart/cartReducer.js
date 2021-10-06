import { CART_ACTION } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartCount: 0,
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION.TOGGLE_CART_HIDDEN:
      if (payload) {
        return {
          ...state,
          hidden: payload,
        };
      } else {
        return {
          ...state,
          hidden: !state.hidden,
        };
      }
    case CART_ACTION.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case CART_ACTION.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CART_ACTION.REMOVE_ITEM_FROM_CART_WITH_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };
    case CART_ACTION.ADD_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case CART_ACTION.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
      };
    case CART_ACTION.REMOVE_CART_COUNT:
      if (payload) {
        return {
          ...state,
          cartCount: state.cartCount - payload,
        };
      } else {
        return {
          ...state,
          cartCount: state.cartCount - 1,
        };
      }

    default:
      return state;
  }
};
