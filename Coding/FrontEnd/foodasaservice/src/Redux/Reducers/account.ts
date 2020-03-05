import * as ActionTypes from 'Redux/Actions/actions';

export const Account = (
  state = {
    Loading: false,
    LoginDetails: {},
    isValidated: false,
    isSuccessfullyAdded: false,
    signUpError: ''
  },
  action
) => {
  switch (action.type) {
    //LOGIN
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

    //SIGNUP
    case ActionTypes.SIGNUP_SUCCESSFULL:
      return {
        ...state,
        isSuccessfullyAdded: action.payload
      };

    case ActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        signUpError: action.payload
      };
    default:
      return state;

    //LOADING
    case ActionTypes.ACCOUNT_LOADING:
      return { ...state, Loading: action.payload };
  }
};
