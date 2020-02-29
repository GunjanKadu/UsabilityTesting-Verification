import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dish } from 'Redux/Reducers/dishes';
import { Chef } from 'Redux/Reducers/chef';

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ dish: Dish, chef: Chef }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  return store;
};
