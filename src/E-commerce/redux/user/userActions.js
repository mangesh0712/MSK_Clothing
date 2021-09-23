import { USER_ACTION} from "./userActionTypes";

export const addCurrentUser = (user) => {
  return {
    type: USER_ACTION.ADD_CURRENT_USER,
    payload: user,
  };
};

export const removeCurrentUser = () => {
    return {
      type: USER_ACTION.REMOVE_CURRENT_USER,
    };
  };
