import cartReducer from "./cartReducer";
import changeNumber from "./changeNumber";
import { combineReducers } from "redux";

const rootReducer = combineReducers({cartReducer,changeNumber});

export default rootReducer;