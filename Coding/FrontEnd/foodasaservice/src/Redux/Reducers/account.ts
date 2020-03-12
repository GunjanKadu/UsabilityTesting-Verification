import * as ActionTypes from 'Redux/Actions/actions';

export const Account = (
  state = {
    Loading: false,
    LoginDetailsSuccess: [],
    LoginDetailsFailed: [],
    UserDataJwt: [],
    isValidated: false,
    isSuccessfullyAdded: false,
    signUpError: '',
    isChef: false,
    becomingAChefLoading: false
  },
  action
) => {
  switch (action.type) {
    //LOGIN
    case ActionTypes.POST_LOGIN_RESPONSE:
      return { ...state, LoginDetailSuccess: action.payload };

    case ActionTypes.USER_DATA_JWT:
      return { ...state, UserDataJwt: action.payload };

    case ActionTypes.POST_LOGIN_RESPONSE_FAILED:
      return { ...state, LoginDetailsFailed: action.payload };

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

    ////CHEF
    case ActionTypes.IS_BECOMING_A_CHEF_LOADING:
      return { ...state, becomingAChefLoading: action.payload };

    case ActionTypes.IS_CHEF:
      return { ...state, isChef: action.payload };
  }
};
