import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import accountReducer from './accout.reducer';

const rootReducer = combineReducers({
    productReducer,
    accountReducer
});
export default rootReducer;