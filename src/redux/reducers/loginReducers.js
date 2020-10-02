import {
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  DID_LOGIN_ACTION,
} from '../actions/actionTypes';

const initialState = 'Đăng nhập';

const loginReducers = (login = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return action.response;

    case SIGNIN_ERROR:
      return action.response;
    case DID_LOGIN_ACTION:
      return 0;

    default:
      return login;
  }
};

export default loginReducers;
