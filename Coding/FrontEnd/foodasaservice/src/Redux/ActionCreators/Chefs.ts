import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { baseURL } from 'axios-config';

export const fetchTopCooks = () => dispatch => {
  dispatch(chefsLoading(true));
  return setTimeout(() => {
    axios
      .get(baseURL + '/homepage')
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
        dispatch(addChefs(response.data.chefs), dispatch(chefsLoading(false)));
      })
      .catch(error => {
        dispatch(chefsFailed(error.message), dispatch(chefsLoading(false)));
      });
  }, 500);
};

export const addChefs = chef => ({
  type: ActionTypes.FETCH_TOP_CHEFS,
  payload: chef
});

export const chefsFailed = errorMessage => ({
  type: ActionTypes.TOP_CHEFS_LOADING_FAILED,
  payload: errorMessage
});

export const chefsLoading = value => ({
  type: ActionTypes.CHEFS_LOADING,
  payload: value
});
