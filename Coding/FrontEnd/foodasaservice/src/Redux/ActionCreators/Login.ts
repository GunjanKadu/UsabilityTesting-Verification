import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { loginURL } from 'axios-config';

export const postLoginData = (email, password) => dispatch => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  };
  return axios
    .post(
      loginURL,
      {
        email: email,
        password: password
      },
      { headers: headers }
    )
    .then(
      (response: AxiosResponse) => {
        return response;
      },
      error => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => {
      console.log(response.data.token);
      sessionStorage.setItem('userData', response.data.token);
      dispatch(addLoginData(response.data));
      dispatch(addValidation(true));
    })
    .catch(error => {
      dispatch(addingLoginDataFailed(error.message));
      dispatch(addValidation(false));
    });
};

export const logOut = () => dispatch => {
  sessionStorage.removeItem('userData');
  dispatch(removeValidation());
};

export const addLoginData = response => ({
  type: ActionTypes.POST_LOGIN_RESPONSE,
  payload: response
});

export const addValidation = response => ({
  type: ActionTypes.ADD_VALIDATION,
  payload: response
});

export const removeValidation = () => ({
  type: ActionTypes.REMOVE_VALIDATION,
  payload: false
});

export const addingLoginDataFailed = errorMessage => ({
  type: ActionTypes.POST_LOGIN_RESPONSE_FAILED,
  payload: errorMessage
});
