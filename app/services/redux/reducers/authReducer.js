import { authTypes } from "../types";

const init = {
  loading: null,
  loggedIn: null,
  currentUser: null,
  error: null,
};

export default (state = init, action) => {
  switch (action.type) {
    case authTypes.SIGNUP_REQUEST:
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authTypes.SIGNUP_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: action.payload.currentUser,
      };
    case authTypes.SIGNUP_FAILURE:
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
