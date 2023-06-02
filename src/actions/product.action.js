import { NUMBER_PRODUCT, SET_PAGE } from "../constants/product.const";


export const countNumberProduct = (e) => {
    return async (dispatch) => {
        
        await dispatch ({
            type: NUMBER_PRODUCT,
            payload: e
        })
    }
}
export const setPage = (data) =>{
    return{
        type: SET_PAGE,
        payload: data
    }
}