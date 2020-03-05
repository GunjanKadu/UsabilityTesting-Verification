import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { registerURL } from 'axios-config';

export const postSignupData = (email, password, fullName) => dispatch => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  };
  return axios
    .post(
      registerURL,
      {
        email: email,
        password: password,
        first_name: fullName
      },
      {
        headers: headers
      }
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
      console.log(response);
      if (response.status === 201 && response.statusText === 'Created') {
        alert('Please Verify Your Email and Login Again');
        addSuccessfull(true);
      } else {
        addSuccessfull(false);
      }
    })
    .catch(error => {
      dispatch(signUpError(error.message));
    });
};

export const addSuccessfull = response => ({
  type: ActionTypes.SIGNUP_SUCCESSFULL,
  payload: response
});

export const signUpError = response => ({
  type: ActionTypes.SIGNUP_ERROR,
  payload: response
});
