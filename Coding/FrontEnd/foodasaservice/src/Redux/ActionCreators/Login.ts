import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { loginURL } from 'axios-config';

export const postLoginData = (email, password) => dispatch => {
  return axios
    .post(loginURL, {
      email: email,
      password: password
    })
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
      console.log(response.data);
      dispatch(addLoginData(response.data));
    })
    .catch(error => {
      dispatch(addingLoginDataFailed(error.message));
    });
};

export const addLoginData = response => ({
  type: ActionTypes.POST_LOGIN_RESPONSE,
  payload: response
});

export const addingLoginDataFailed = errorMessage => ({
  type: ActionTypes.POST_LOGIN_RESPONSE_FAILED,
  payload: errorMessage
});
