import * as ActionTypes from 'Redux/Actions/actions';

export const DetailsToCart = value => dispatch => {
  dispatch(AddDetailsToCart(value));
};
export const AddDetailsToCart = value => {
  return {
    type: ActionTypes.ADD_DETAILS_TO_CART,
    payload: value
  };
};

export const DisbableCartAlert = () => dispatch => {
  dispatch(DisableAlert());
};

const DisableAlert = () => {
  return {
    type: ActionTypes.DISABLE_CART_ALERT,
    payload: false
  };
};
export const EnableCartAlert = () => dispatch => {
  dispatch(EnableAlert());
};

const EnableAlert = () => {
  return {
    type: ActionTypes.ENABLE_CART_ALERT,
    payload: true
  };
};
