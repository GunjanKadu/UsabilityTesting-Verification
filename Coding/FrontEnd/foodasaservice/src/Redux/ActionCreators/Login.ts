import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { loginURL } from 'axios-config';

const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*'
};
export const postLoginData = (email, password) => dispatch => {
  dispatch(accountLoading(true));
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
        console.log(response);
        return response;
      },
      error => {
        console.log(error);
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => {
      sessionStorage.setItem('userData', response.data.token);
      dispatch(addLoginData(response.data));
      dispatch(addValidation(true));
      dispatch(accountLoading(false));
    })
    .catch(error => {
      console.log(error);
      dispatch(addingLoginDataFailed(error.message));
      dispatch(addValidation(false));
      dispatch(accountLoading(false));
    });
};

export const logOut = () => dispatch => {
  dispatch(accountLoading(true));
  setTimeout(() => {
    sessionStorage.removeItem('userData');
    dispatch(removeValidation());
    dispatch(accountLoading(false));
  }, 1500);
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

export const accountLoading = response => ({
  type: ActionTypes.ACCOUNT_LOADING,
  payload: response
});
