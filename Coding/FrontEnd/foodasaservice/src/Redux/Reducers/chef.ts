import * as ActionTypes from 'Redux/Actions/actions';

export const Chef = (
  state = {
    Chefs: [],
    ErrorMessage: null,
    IsLoading: true
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_CHEFS:
      return {
        ...state,
        ErrorMessage: null,
        Chefs: action.payload,
        IsLoading: false
      };

    case ActionTypes.TOP_CHEFS_LOADING_FAILED:
      return {
        ...state,
        ErrorMessage: action.payload,
        Chefs: [],
        IsLoading: action.payload
      };

    case ActionTypes.CHEFS_LOADING:
      return {
        ...state,
        ErrorMessage: null,
        Chefs: [],
        IsLoading: action.payload
      };

    default:
      return state;
  }
};
