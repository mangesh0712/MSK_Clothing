import { SHOP_DATA } from "../../data";
const initState = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
