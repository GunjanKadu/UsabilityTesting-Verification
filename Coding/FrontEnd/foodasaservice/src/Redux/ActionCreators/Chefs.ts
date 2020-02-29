import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import baseURL from 'axios-config';

export const fetchTopCooks = () => dispatch => {
  dispatch(chefsLoading(true));
  return setInterval(() => {
    axios
      .get(baseURL + '/Chefs.json')
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
        dispatch(addChefs(response.data), dispatch(chefsLoading(false)));
      })
      .catch(error => {
        dispatch(chefsFailed(error.message), dispatch(chefsLoading(false)));
      });
  }, 1500);
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
