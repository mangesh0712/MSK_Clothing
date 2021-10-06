import { USER_ACTION } from "./userActionTypes";

const intState = {
  currentUser: null,
  isAuth: false,
};

export const userReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case USER_ACTION.ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        isAuth: true,
      };

    case USER_ACTION.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
