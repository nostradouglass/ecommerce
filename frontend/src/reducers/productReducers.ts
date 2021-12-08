import { ProductActionTypes } from "../actiontypes";
import { ProductActions } from "../actionsTs";

interface ProductsListState {
  loading?: boolean;
  products?: any[];
  error?: any;
}

function productListReducer(
  state: ProductsListState = { products: [] },
  action: ProductActions
): ProductsListState {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetailsReducer(
  state = { product: { reviews: [] } },
  action: ProductActions
) {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductActionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducer(state = { product: {} }, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case ProductActionTypes.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productSaveReducer(state = { product: {} }, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ProductActionTypes.PRODUCT_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productReviewSaveReducer(state = {}, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case ProductActionTypes.PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case ProductActionTypes.PRODUCT_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}

export {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
};
