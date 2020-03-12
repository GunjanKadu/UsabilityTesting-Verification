import axios, { AxiosResponse } from 'axios';
import { becomeAChefUrl } from 'axios-config';
import * as ActionTypes from 'Redux/Actions/actions';

export const BecomeaChef = () => dispatch => {
  dispatch(BecomingAchefLoading(true));
  console.log('Posting');
  const token = sessionStorage.getItem('userToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  axios
    .post(becomeAChefUrl, {}, config)
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
      console.log(response);

      if (response.status === 200) {
        sessionStorage.setItem('isChef', 'true');
        dispatch(BecomingAchefLoading(false));
        dispatch(IsChef(true));
      }
    })
    .catch(error => {
      dispatch(BecomingAchefLoading(false));
      dispatch(IsChef(true));
      console.log(error);
    });
};

const BecomingAchefLoading = value => {
  return {
    type: ActionTypes.IS_BECOMING_A_CHEF_LOADING,
    payload: value
  };
};
const IsChef = value => {
  return {
    type: ActionTypes.IS_CHEF,
    payload: value
  };
};
