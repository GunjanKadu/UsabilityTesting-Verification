// import { dishStateItems } from 'Types/Dishes';
import * as ActionTypes from 'Redux/Actions/actions';

export const Cuisines = (
  state = {
    Cuisine: [],
    ErrorMessage: null,
    IsLoading: true
  },
  action
) => {
  switch (action.type) {
    //CUISINES
    case ActionTypes.FETCH_CUISINES:
      return {
        ...state,
        ErrorMessage: null,
        Cuisine: action.payload,
        IsLoading: false
      };

    case ActionTypes.CUISINES_LOADING_FAILED:
      return {
        ...state,
        ErrorMessage: action.payload,
        Cuisine: [],
        IsLoading: action.payload
      };

    case ActionTypes.CUISINES_LOADING:
      return {
        ...state,
        ErrorMessage: null,
        Cuisine: [],
        IsLoading: action.payload
      };
    default:
      return state;
  }
};
