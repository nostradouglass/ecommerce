import { OrderActionTypes } from "../actiontypes";

interface createOrderRequestAction {
  type: OrderActionTypes.ORDER_CREATE_REQUEST;
  payload: any;
}

interface createOrderSuccessAction {
  type: OrderActionTypes.ORDER_CREATE_SUCCESS;
  payload: any;
}

interface createOrderFailAction {
  type: OrderActionTypes.ORDER_CREATE_FAIL;
  payload: any;
}

type createOrderActions =
  | createOrderRequestAction
  | createOrderSuccessAction
  | createOrderFailAction;

interface listMyOrdersRequestAction {
  type: OrderActionTypes.MY_ORDER_LIST_REQUEST;
}

interface listMyOrdersSuccessAction {
  type: OrderActionTypes.MY_ORDER_LIST_SUCCESS;
  payload: any;
}

interface listMyOrdersFailAction {
  type: OrderActionTypes.MY_ORDER_LIST_FAIL;
  payload: any;
}

type listMyOrdersActions =
  | listMyOrdersRequestAction
  | listMyOrdersSuccessAction
  | listMyOrdersFailAction;

interface listOrdersRequestAction {
  type: OrderActionTypes.ORDER_LIST_REQUEST;
}

interface listOrdersSuccessAction {
  type: OrderActionTypes.ORDER_LIST_SUCCESS;
  payload: any;
}

interface listOrdersFailAction {
  type: OrderActionTypes.ORDER_LIST_FAIL;
  payload: any;
}

type listOrdersActions =
  | listOrdersRequestAction
  | listOrdersSuccessAction
  | listOrdersFailAction;

interface detailsOrderRequestAction {
  type: OrderActionTypes.ORDER_DETAILS_REQUEST;
}

interface detailsOrderSuccessAction {
  type: OrderActionTypes.ORDER_DETAILS_SUCCESS;
  payload: any;
}

interface detailsOrderFailAction {
  type: OrderActionTypes.ORDER_DETAILS_FAIL;
  payload: string;
}

type detailsOrderActions =
  | detailsOrderRequestAction
  | detailsOrderSuccessAction
  | detailsOrderFailAction;

interface payOrderRequestAction {
  type: OrderActionTypes.ORDER_PAY_REQUEST;
}

interface payOrderSuccessAction {
  type: OrderActionTypes.ORDER_PAY_SUCCESS;
  payload: any;
}

interface payOrderFailAction {
  type: OrderActionTypes.ORDER_PAY_FAIL;
  payload: string;
}

type payOrderActions =
  | payOrderRequestAction
  | payOrderSuccessAction
  | payOrderFailAction;

interface deleteOrderRequestAction {
  type: OrderActionTypes.ORDER_DELETE_REQUEST;
}

interface deleteOrderSuccessAction {
  type: OrderActionTypes.ORDER_DELETE_SUCCESS;
  payload: any;
}

interface deleteOrderFailAction {
  type: OrderActionTypes.ORDER_DELETE_FAIL;
  payload: string;
}

type deleteOrderActions =
  | deleteOrderRequestAction
  | deleteOrderSuccessAction
  | deleteOrderFailAction;

export type Actions =
  | createOrderActions
  | listMyOrdersActions
  | listOrdersActions
  | detailsOrderActions
  | payOrderActions
  | deleteOrderActions;
