import * as ActionTypes from 'Redux/Actions/actions';

export const Account = (
  state = { LoginDetails: {}, isValidated: false },
  action
) => {
  switch (action.type) {
    case ActionTypes.POST_LOGIN_RESPONSE:
      return { ...state, LoginDetails: action.payload };

    case ActionTypes.ADD_VALIDATION:
      return { ...state, isValidated: action.payload };

    case ActionTypes.REMOVE_VALIDATION:
      return {
        ...state,
        LoginDetails: { token: null },
        isValidated: action.payload
      };
    default:
      return state;
  }
};
