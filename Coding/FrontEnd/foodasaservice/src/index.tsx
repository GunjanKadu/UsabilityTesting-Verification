import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

//Alerting
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//Redux Store Provider
import { Provider } from 'react-redux';

//Redux Main Store
import { ConfigureStore } from 'Redux/Store/configureStore';

//Axios Interceptors
import axios from 'axios';

//Alerting Setting
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 3000,
  // you can also just use 'scale'
  transition: transitions.SCALE
};

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
    <Router>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
