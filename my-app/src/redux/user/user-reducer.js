import { UserActionTypes } from "./user-types";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return  action.payload
    case UserActionTypes.SIGN_OUT:
      return null
    default:
      return state;
  }
};

export default userReducer;
