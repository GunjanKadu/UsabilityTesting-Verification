import * as ActionTypes from 'Redux/Actions/actions';

export const AllDishes = (
  state = {
    DishList: [],
    ErrorMessage: null,
    IsLoading: true
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_DISHES:
      return {
        ...state,
        ErrorMessage: null,
        DishList: action.payload,
        IsLoading: false
      };

    case ActionTypes.FETCH_ALL_DISHES_FAILED:
      return {
        ...state,
        ErrorMessage: action.payload,
        DishList: [],
        IsLoading: action.payload
      };

    case ActionTypes.FETCH_ALL_DISHES_LOADING:
      return {
        ...state,
        ErrorMessage: null,
        DishList: [],
        IsLoading: action.payload
      };

    default:
      return state;
  }
};
