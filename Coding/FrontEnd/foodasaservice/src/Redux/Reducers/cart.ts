import * as ActionTypes from 'Redux/Actions/actions';

export const Cart = (
  state = {
    CartContent: []
  },
  action
) => {
  console.log(action, 'action');
  switch (action.type) {
    case ActionTypes.ADD_DETAILS_TO_CART:
      return {
        ...state,
        CartContent: [...state.CartContent, action.payload]
      };

    default:
      return state;
  }
};
