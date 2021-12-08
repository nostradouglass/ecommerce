import axios from "axios";
import { OrderActionTypes } from "../actiontypes";

const URL = "http://localhost:5000"

const createOrder = (order: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: OrderActionTypes.ORDER_CREATE_REQUEST, payload: order });
    const {
      userSignin: { userInfo },
    } = getState();
    const {
      data: { data: newOrder },
    } = await axios.post(`${URL}/api/orders`, order, {
      headers: {
        Authorization: " Bearer " + userInfo.token,
      },
    });
    dispatch({
      type: OrderActionTypes.ORDER_CREATE_SUCCESS,
      payload: newOrder,
    });
  } catch (error: any) {
    dispatch({
      type: OrderActionTypes.ORDER_CREATE_FAIL,
      payload: error.message,
    });
  }
};

const listMyOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: OrderActionTypes.MY_ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`${URL}/api/orders/mine`, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: OrderActionTypes.MY_ORDER_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: OrderActionTypes.MY_ORDER_LIST_FAIL,
      payload: error.message,
    });
  }
};

const listOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: OrderActionTypes.ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`${URL}/api/orders`, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: OrderActionTypes.ORDER_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: OrderActionTypes.ORDER_LIST_FAIL,
      payload: error.message,
    });
  }
};

const detailsOrder = (orderId: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_DETAILS_REQUEST,
      payload: orderId,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`${URL}/api/orders/` + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: OrderActionTypes.ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: OrderActionTypes.ORDER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

const payOrder =
  (order: any, paymentResult: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: OrderActionTypes.ORDER_PAY_REQUEST,
        payload: paymentResult,
      });
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await axios.put(
        `${URL}/api/orders/` + order._id + "/pay",
        paymentResult,
        {
          headers: { Authorization: "Bearer " + userInfo.token },
        }
      );
      dispatch({ type: OrderActionTypes.ORDER_PAY_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: OrderActionTypes.ORDER_PAY_FAIL,
        payload: error.message,
      });
    }
  };

const deleteOrder = (orderId: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: OrderActionTypes.ORDER_DELETE_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.delete(`${URL}/api/orders/` + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: OrderActionTypes.ORDER_DELETE_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: OrderActionTypes.ORDER_DELETE_FAIL,
      payload: error.message,
    });
  }
};
export {
  createOrder,
  detailsOrder,
  payOrder,
  listMyOrders,
  listOrders,
  deleteOrder,
};
