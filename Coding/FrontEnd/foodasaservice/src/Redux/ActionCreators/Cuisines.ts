import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { baseURL } from 'axios-config';

export const fetchCuisines = () => dispatch => {
  dispatch(cuisinesLoading(true));
  return setTimeout(() => {
    axios
      .get(baseURL + '/cuisine')
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
        dispatch(addCuisines(response.data), dispatch(cuisinesLoading(false)));
      })
      .catch(error => {
        dispatch(
          cuisinesFailed(error.message),
          dispatch(cuisinesLoading(false))
        );
      });
  }, 1500);
};

export const addCuisines = cuisines => ({
  type: ActionTypes.FETCH_CUISINES,
  payload: cuisines
});

export const cuisinesFailed = errorMessage => ({
  type: ActionTypes.CUISINES_LOADING_FAILED,
  payload: errorMessage
});

export const cuisinesLoading = value => ({
  type: ActionTypes.CUISINES_LOADING,
  payload: value
});
