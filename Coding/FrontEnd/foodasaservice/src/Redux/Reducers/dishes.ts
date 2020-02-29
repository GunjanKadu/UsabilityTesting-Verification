// import { dishStateItems } from 'Types/Dishes';
import * as ActionTypes from 'Redux/Actions/actions';

export const Dish = (
  state = {
    Dishes: [],
    ErrorMessage: null,
    IsLoading: true
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_DISHES:
      return {
        ...state,
        ErrorMessage: null,
        Dishes: action.payload,
        IsLoading: false
      };

    case ActionTypes.TOP_DISHES_LOADING_FAILED:
      return {
        ...state,
        ErrorMessage: action.payload,
        Dishes: [],
        IsLoading: action.payload
      };

    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        ErrorMessage: null,
        Dishes: [],
        IsLoading: action.payload
      };

    default:
      return state;
  }
};
