import * as ActionTypes from "Redux/Actions/actions";

export const DetailsToCart = value => dispatch => {
  let price = value.price;
  dispatch(AddPriceToCart(price));
  dispatch(AddDetailsToCart(value));
};

export const AddDetailsToCart = value => {
  return {
    type: ActionTypes.ADD_DETAILS_TO_CART,
    payload: value
  };
};
export const AddPriceToCart = value => {
  return {
    type: ActionTypes.ADD_PRICE_TO_CART,
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

export const RemoveItemFromCart = value => dispatch => {
  dispatch(RemoveItem(value));
};

const RemoveItem = id => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id
  };
};
