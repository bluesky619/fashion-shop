
import {
    GET_ACCOUNT, WRONG_USERNAME, WRONG_PASSWORD, ALERT_STATUS, SUCCESS_LOGIN, 
    LOG_OUT, GET_LENGTH, GET_SHORT_ID, GET_CURRENT_PAGE
} from "../constants/account.const"
const localRefToken = localStorage.getItem("refToken") || "";
const admin = JSON.parse(localStorage.getItem("admin")) || [];
const accountUser = JSON.parse(localStorage.getItem("userAccount")) || [];
const initialState = {
    account: admin.data,
    wrongAccount: "",
    openAlert: false,
    refToken: localRefToken

}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT:
            state.account = action.payload;
            break;
        case WRONG_USERNAME:
            state.wrongAccount = action.payload;
            break;
        case WRONG_PASSWORD:
            state.wrongAccount = action.payload;
            break;
        case ALERT_STATUS:
            state.openAlert = action.payload;
            break;
        case SUCCESS_LOGIN:
            state.wrongAccount = "";
            state.account = action.payload;
            state.refToken = action.payload.message;
            break;
        case LOG_OUT:
            state.refToken = action.payload;
            break;
        case GET_LENGTH:
            state.length = action.payload.length;
            state.noPage = Math.ceil(state.length / state.limit);
            break;
        // Tìm order bằng id
        case GET_SHORT_ID:
            state.length = action.payload.length;
            state.orders = action.payload;
            state.orderStatus = "None";
            state.noPage = 1;
            state.date = [{
                startDate: null,
                endDate: null,
                key: "selection"
            }];
            break;
        case GET_CURRENT_PAGE:
            state.currentPage = action.payload;
            break;
        // Tìm order bằng status

        default:
            break;
    }
    return { ...state }
}