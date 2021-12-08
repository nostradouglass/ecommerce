import { UserActionTypes } from "../actiontypes";
import { UserActions } from "../actionsTs";

interface ReturnStates {
  loading?: boolean;
  userInfo?: any;
  error?: any;
}

function userSigninReducer(state = {}, action: UserActions): ReturnStates {
  switch (action.type) {
    case UserActionTypes.USER_SIGNIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

function userUpdateReducer(state = {}, action: UserActions): ReturnStates {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userRegisterReducer(state = {}, action: UserActions): ReturnStates {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { userSigninReducer, userRegisterReducer, userUpdateReducer };
