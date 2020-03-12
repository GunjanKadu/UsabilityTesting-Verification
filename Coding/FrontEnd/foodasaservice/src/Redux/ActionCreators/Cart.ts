import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { postCartDataURL } from 'axios-config';

export const DetailsToCart = value => dispatch => {
  dispatch(ContentAdded(false));
  const token = sessionStorage.getItem('userToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let price = value.price;
  return axios
    .post(
      postCartDataURL,
      {
        count: 2,
        user: value.userId,
        dish: value.dishId
      },
      config
    )
    .then(
      (response: AxiosResponse) => {
        console.log(response);
        return response;
      },
      error => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => {
      if (response.status === 201) {
        dispatch(AddPriceToCart(price));
        dispatch(AddDetailsToCart(value));
        dispatch(ContentAdded(true));
      }
    })
    .catch(error => {
      dispatch(ContentAdded(false));
      dispatch(AddDetailsToCartFailed('Not Added Succesfully'));
    });
};

export const DisbableCartAlert = () => dispatch => {
  dispatch(DisableAlert());
};

export const RemoveItemFromCart = value => dispatch => {
  dispatch(RemoveItem(value));
};

export const RemovePriceFromCart = value => dispatch => {
  dispatch(removePriceFromCart(value));
};

export const EnableCartAlert = () => dispatch => {
  dispatch(EnableAlert());
};
export const OrderedContent = () => dispatch => {
  dispatch(OrderContent());
};

//********************************************** */
const EnableAlert = () => {
  return {
    type: ActionTypes.ENABLE_CART_ALERT,
    payload: true
  };
};
const ContentAdded = value => {
  return {
    type: ActionTypes.CONTENT_ADDED,
    payload: value
  };
};
const AddDetailsToCartFailed = value => {
  return {
    type: ActionTypes.ADD_DETAILS_TO_CART_FAILED,
    payload: value
  };
};
const OrderContent = () => {
  return {
    type: ActionTypes.ORDER_CONTENT
  };
};

const DisableAlert = () => {
  return {
    type: ActionTypes.DISABLE_CART_ALERT,
    payload: false
  };
};
const RemoveItem = id => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id
  };
};

const AddDetailsToCart = value => {
  return {
    type: ActionTypes.ADD_DETAILS_TO_CART,
    payload: value
  };
};
const AddPriceToCart = value => {
  return {
    type: ActionTypes.ADD_PRICE_TO_CART,
    payload: value
  };
};
const removePriceFromCart = value => {
  return {
    type: ActionTypes.REMOVE_PRICE_FROM_CART,
    payload: value
  };
};
