import { publicRequest } from "../requestMethods"
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from "./userRedux"
import { removeAllProduct } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart())

  try {
    console.log('chegou aqui')
    const res = await publicRequest.post('/login', user, {method: "POST"})
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart())

  try {
    //const res = await publicRequest.post('/auth/login', )
    dispatch(logoutSuccess())
    dispatch(removeAllProduct())
  } catch (err) {
    dispatch(logoutFailure())
  }
}