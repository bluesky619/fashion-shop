import { OPEN_TOAST, SET_NAME, LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from '../constants/account.const'

export const loginAccount = (user, action) => {
    return async (dispatch) => {
        if (user.username === "") {
            return dispatch(openToast({
                open: true,
                message: "User name is required",
                type: "error"
            }))
        }
        if (user.password === "") {
            return dispatch(openToast({
                open: true,
                message: "Password is required",
                type: "error"
            }))
        }
        try {
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: user.username,
                    password: user.password
                }),
                redirect: "follow"
            };
            const response = await fetch(process.env.REACT_APP_API_FASHION_SHOP + "/api" + "loginWithEncode", requestOptions);
            const data = await response.json();
            if (data.message === "Password is incorrect") {
                return dispatch ({
                    type: OPEN_TOAST,
                    payload: {
                        open: true,
                        message: "Password is incorrect",
                        type: "error"
                    }
                })
            }
            if (data.message === "Username is incorrect") {
                return dispatch ({
                    type: OPEN_TOAST,
                    payload: {
                        open: true,
                        message: "Username is incorrect",
                        type: "error"
                    }
                })
            }
            if (data.message === "Right password, Login successful") {
                await dispatch ({
                    type: LOGIN_ACCOUNT,
                    payload: data
                })
                await dispatch ({
                    type: OPEN_TOAST,
                    payload: {
                        open: true,
                        message: "Login successfull",
                        type: "success"
                    }
                })
                localStorage.setItem("userAccount", JSON.stringify(data));
            }
        }
        catch(error) {
            console.log(error);
        }
    }
}

export const openToast = (data) => {
    return {
        type: OPEN_TOAST,
        payload: data
        }
}

export const logOutCustomer = () => {
    return {
        type: LOGOUT_ACCOUNT,
        payload: null
    }
}