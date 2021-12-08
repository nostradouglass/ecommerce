import { UserActionTypes } from "../actiontypes";

interface updateRequestAction {
    type: UserActionTypes.USER_UPDATE_REQUEST
    payload: any
}

interface updateSuccessAction {
    type: UserActionTypes.USER_UPDATE_SUCCESS
    payload: any
}
interface updateFailAction {
    type: UserActionTypes.USER_UPDATE_FAIL
    payload: string
}

type updateActions = updateRequestAction | updateSuccessAction | updateFailAction


interface signinRequestAction {
    type: UserActionTypes.USER_SIGNIN_REQUEST
    payload: any
}
interface signinSuccessAction {
    type: UserActionTypes.USER_SIGNIN_SUCCESS
    payload: any
}
interface signinFailAction {
    type: UserActionTypes.USER_SIGNIN_FAIL
    payload: string
}

type signInActions = signinRequestAction | signinSuccessAction | signinFailAction


interface registerRequestAction {
    type: UserActionTypes.USER_REGISTER_REQUEST
    payload: any
}
interface registerSuccessAction {
    type: UserActionTypes.USER_REGISTER_SUCCESS
    payload: any
}
interface registerFailAction {
    type: UserActionTypes.USER_REGISTER_FAIL
    payload: string
}

type registerActions = registerRequestAction | registerSuccessAction | registerFailAction

interface logoutAction {
    type: UserActionTypes.USER_LOGOUT
}

export type Actions = updateActions | signInActions | registerActions | logoutAction