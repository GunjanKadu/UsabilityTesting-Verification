import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'App';
import * as serviceWorker from './serviceWorker';

//Redux Store Provider
import { Provider } from 'react-redux';

//Redux Main Store
import { ConfigureStore } from 'Redux/Store/configureStore';

//Axios Interceptors
import axios from 'axios';

axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
