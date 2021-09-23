import { USER_ACTION } from "./userActionTypes";

const intState = {
  currentUser: null,
};

export const userReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case USER_ACTION.ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};
