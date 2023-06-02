
import { NUMBER_PRODUCT } from "../constants/product.const";

const initialState = {
    a : "a",
    numberProduct: 0,
    carts: [],

}

export default function productReducer(state = initialState, action) {
    
        switch (action.type) {
            case NUMBER_PRODUCT:
                state.numberProduct = action.payload.length;
                state.carts = action.payload;
                break;
            
            default:
                break;
        }
    return {...state};
}