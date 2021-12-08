import axios from "axios";
import { ProductActionTypes } from "../actiontypes";

const URL = "http://localhost:5000"

const listProducts =
  (category = "", searchKeyword = "", sortOrder = "") =>
  async (dispatch: any) => {
    try {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        `${URL}/api/products?category=` +
          category +
          "&searchKeyword=" +
          searchKeyword +
          "&sortOrder=" +
          sortOrder
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_FAIL,
        payload: error.message,
      });
    }
  };

const saveProduct = (product: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_SAVE_REQUEST,
      payload: product,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await axios.post(`${URL}/api/products`, product, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({
        type: ProductActionTypes.PRODUCT_SAVE_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = await axios.put(
        `${URL}/api/products/` + product._id,
        product,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_SAVE_SUCCESS,
        payload: data,
      });
    }
  } catch (error: any) {
    dispatch({
      type: ProductActionTypes.PRODUCT_SAVE_FAIL,
      payload: error.message,
    });
  }
};

const detailsProduct = (productId: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_DETAILS_REQUEST,
      payload: productId,
    });
    const { data } = await axios.get(`${URL}/api/products/` + productId);
    dispatch({
      type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ProductActionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

const deleteProduct =
  (productId: any) => async (dispatch: any, getState: any) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({
        type: ProductActionTypes.PRODUCT_DELETE_REQUEST,
        payload: productId,
      });
      const { data } = await axios.delete(`${URL}/api/products/` + productId, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({
        type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
        payload: data,
        success: true,
      });
    } catch (error: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_DELETE_FAIL,
        payload: error.message,
      });
    }
  };

const saveProductReview =
  (productId: any, review: any) => async (dispatch: any, getState: any) => {
    try {
      const {
        userSignin: {
          userInfo: { token },
        },
      } = getState();
      dispatch({
        type: ProductActionTypes.PRODUCT_REVIEW_SAVE_REQUEST,
        payload: review,
      });
      const { data } = await axios.post(
        `${URL}/api/products/${productId}/reviews`,
        review,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_REVIEW_SAVE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      // report error
      dispatch({
        type: ProductActionTypes.PRODUCT_REVIEW_SAVE_FAIL,
        payload: error.message,
      });
    }
  };

export {
  listProducts,
  detailsProduct,
  saveProduct,
  deleteProduct as deleteProdcut,
  saveProductReview,
};
