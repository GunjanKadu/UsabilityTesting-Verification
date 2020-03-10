import * as ActionTypes from "Redux/Actions/actions";

export const Cart = (
  state = {
    CartContent: [],
    CardAlert: true,
    Price: 0,
    TotalPrice: 0
  },
  action
) => {
  console.log(action, "action");
  switch (action.type) {
    case ActionTypes.ADD_DETAILS_TO_CART:
      return {
        ...state,
        CartContent: [...state.CartContent, action.payload]
      };
    case ActionTypes.ADD_PRICE_TO_CART:
      return {
        ...state,
        Price: state.Price + action.payload
      };
    case ActionTypes.DISABLE_CART_ALERT:
      return {
        ...state,
        CardAlert: action.payload
      };
    case ActionTypes.ENABLE_CART_ALERT:
      return {
        ...state,
        CardAlert: action.payload
      };

    default:
      return state;
  }
};
