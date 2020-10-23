import { combineReducers } from "redux";
import authReducer from "./authReducer";


const rootReducer = () => {
  return combineReducers({
    auth: authReducer
  });
};

export default rootReducer;
