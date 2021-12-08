import { ProductActionTypes } from "../actiontypes";

interface listProductsRequestAction {
  type: ProductActionTypes.PRODUCT_LIST_REQUEST;
}

interface listProductsSuccessAction {
  type: ProductActionTypes.PRODUCT_LIST_SUCCESS;
  payload: any;
}

interface listProductsFailAction {
  type: ProductActionTypes.PRODUCT_LIST_FAIL;
  payload: string;
}

type listProductsActions =
  | listProductsRequestAction
  | listProductsSuccessAction
  | listProductsFailAction;

interface saveProductRequestAction {
  type: ProductActionTypes.PRODUCT_SAVE_REQUEST;
  payload: any;
}

interface saveProductSuccessAction {
  type: ProductActionTypes.PRODUCT_SAVE_SUCCESS;
  payload: any;
}

interface saveProductFailAction {
  type: ProductActionTypes.PRODUCT_SAVE_FAIL;
  payload: string;
}

type saveProductActions =
  | saveProductRequestAction
  | saveProductSuccessAction
  | saveProductFailAction;

interface detailsProductRequestAction {
  type: ProductActionTypes.PRODUCT_DETAILS_REQUEST;
  payload: any;
}

interface detailsProductSuccessAction {
  type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: any;
}

interface detailsProductFailAction {
  type: ProductActionTypes.PRODUCT_DETAILS_FAIL;
  payload: string;
}

type detailsProductActions =
  | detailsProductRequestAction
  | detailsProductSuccessAction
  | detailsProductFailAction;

interface deleteProductRequestAction {
  type: ProductActionTypes.PRODUCT_DELETE_REQUEST;
  payload: any;
}

interface deleteProductSuccessAction {
  type: ProductActionTypes.PRODUCT_DELETE_SUCCESS;
  payload: any;
}

interface deleteProductFailAction {
  type: ProductActionTypes.PRODUCT_DELETE_FAIL;
  payload: string;
}

type deleteProductActions =
  | deleteProductRequestAction
  | deleteProductSuccessAction
  | deleteProductFailAction;

interface saveProductReviewRequestAction {
  type: ProductActionTypes.PRODUCT_REVIEW_SAVE_REQUEST;
  payload: any;
}

interface saveProductReviewSuccessAction {
  type: ProductActionTypes.PRODUCT_REVIEW_SAVE_SUCCESS;
  payload: any;
}

interface saveProductReviewFailAction {
  type: ProductActionTypes.PRODUCT_REVIEW_SAVE_FAIL;
  payload: string;
}

interface saveProductReviewResetAction {
  type: ProductActionTypes.PRODUCT_REVIEW_SAVE_RESET;
}

type saveProductReviewActions =
  | saveProductReviewRequestAction
  | saveProductReviewSuccessAction
  | saveProductReviewFailAction
  | saveProductReviewResetAction;

export type Actions =
  | listProductsActions
  | saveProductActions
  | detailsProductActions
  | deleteProductActions
  | saveProductReviewActions;
