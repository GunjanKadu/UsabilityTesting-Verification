import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import { baseURL } from 'axios-config';

//Fetch Top Dishes
export const fetchTopDishes = () => dispatch => {
  dispatch(dishesLoading(true));
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
        dispatch(
          addDishes(response.data.dishes),
          dispatch(dishesLoading(false))
        );
      })
      .catch(error => {
        dispatch(dishesFailed(error.message), dispatch(dishesLoading(false)));
      });
  }, 500);
};

export const addDishes = dishes => ({
  type: ActionTypes.FETCH_TOP_DISHES,
  payload: dishes
});

export const dishesFailed = errorMessage => ({
  type: ActionTypes.TOP_DISHES_LOADING_FAILED,
  payload: errorMessage
});

export const dishesLoading = value => ({
  type: ActionTypes.DISHES_LOADING,
  payload: value
});

//Fetch All Dishes
export const FetchAllDishes = () => dispatch => {
  dispatch(allDishesLoading(true));
  return axios
    .get(baseURL + '/dishlisting')
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
      dispatch(
        fetchAllDishes(response.data),
        dispatch(allDishesLoading(false))
      );
    })
    .catch(error => {
      dispatch(
        fetchAllFailed(error.message),
        dispatch(allDishesLoading(false))
      );
    });
};

export const allDishesLoading = value => ({
  type: ActionTypes.FETCH_ALL_DISHES_LOADING,
  payload: value
});
export const fetchAllDishes = value => ({
  type: ActionTypes.FETCH_ALL_DISHES,
  payload: value
});
export const fetchAllFailed = value => ({
  type: ActionTypes.FETCH_ALL_DISHES_FAILED,
  payload: value
});
