import axios from "axios";
import Cookie from "js-cookie";
import { UserActionTypes } from "../actiontypes";

const URL = "http://localhost:5000"

const update =
  ({ userId, name, email, password }: any) =>
  async (dispatch: any, getState: any) => {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({
      type: UserActionTypes.USER_UPDATE_REQUEST,
      payload: { userId, name, email, password },
    });
    try {
      const { data } = await axios.put(
        `${URL}/api/users/` + userId,
        { name, email, password },
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: UserActionTypes.USER_UPDATE_SUCCESS, payload: data });
      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: UserActionTypes.USER_UPDATE_FAIL,
        payload: error.message,
      });
    }
  };

const signin = (email: any, password: any) => async (dispatch: any) => {
  dispatch({
    type: UserActionTypes.USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post(`${URL}/api/users/signin`, { email, password });
    dispatch({ type: UserActionTypes.USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error: any) {
    dispatch({
      type: UserActionTypes.USER_SIGNIN_FAIL,
      payload: error.message,
    });
  }
};

const register =
  (name: string, email: string, password: string) => async (dispatch: any) => {
    dispatch({
      type: UserActionTypes.USER_REGISTER_REQUEST,
      payload: { name, email, password },
    });
    try {
      const { data } = await axios.post(`${URL}/api/users/register`, {
        name,
        email,
        password,
      });
      dispatch({ type: UserActionTypes.USER_REGISTER_SUCCESS, payload: data });
      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: UserActionTypes.USER_REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

const logout = () => (dispatch: any) => {
  Cookie.remove("userInfo");
  dispatch({ type: UserActionTypes.USER_LOGOUT });
};
export { signin, register, logout, update };
