import { CART_ACTION } from "./cartActionTypes";

export const toggleCartHidden = (hideCartVal) => {
  return {
    type: CART_ACTION.TOGGLE_CART_HIDDEN,
    payload: hideCartVal,
  };
};

export const addCartItem = (item) => {
  return {
    type: CART_ACTION.ADD_ITEM,
    payload: item,
  };
};
export const removeCartItem = (item) => {
  return {
    type: CART_ACTION.REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CART_ACTION.CLEAR_ITEM_FROM_CART,
    payload: item.id,
  };
};

export const addCartCount = () => {
  return {
    type: CART_ACTION.ADD_CART_COUNT,
  };
};
export const removeCartCount = (number) => {
  return {
    type: CART_ACTION.REMOVE_CART_COUNT,
    payload: number,
  };
};
