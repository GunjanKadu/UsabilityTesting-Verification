import * as ActionTypes from 'Redux/Actions/actions';

export type Xyz = {
  name: string;
  price: number;
};
export interface Abc {
  CartContent: Xyz[];
}

export const Cart = (
  state = {
    CartContent: [{}]
  },
  action
) => {
  console.log(action, 'action');
  switch (action.type) {
    case ActionTypes.ADD_DETAILS_TO_CART:
      return {
        ...state,
        // CartContent: state.CartContent.push(...action.payload)
        CartContent: state.CartContent.push(action.payload)
      };

    default:
      return state;
  }
};
