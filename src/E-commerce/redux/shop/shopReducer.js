import { SHOP_ACTION } from "../shop/shopActionTypes";
const initState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case SHOP_ACTION.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };
    case SHOP_ACTION.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
