import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dish } from 'Redux/Reducers/dishes';
import { Chef } from 'Redux/Reducers/chef';
import { Cuisines } from 'Redux/Reducers/cuisines';
const composeEnhancers =
  ((window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) &&
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
      trace: true,
      traceLimit: 25
    }) as typeof compose)) ||
  compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ dish: Dish, chef: Chef, cuisine: Cuisines }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  return store;
};
