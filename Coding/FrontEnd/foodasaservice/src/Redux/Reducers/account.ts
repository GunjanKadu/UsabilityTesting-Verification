import * as ActionTypes from 'Redux/Actions/actions';

export const Account = (state = { LoginDetails: {} }, action) => {
  switch (action.type) {
    case ActionTypes.POST_LOGIN_RESPONSE:
      return { ...state, LoginDetails: action.payload };

    default:
      return state;
  }
};
