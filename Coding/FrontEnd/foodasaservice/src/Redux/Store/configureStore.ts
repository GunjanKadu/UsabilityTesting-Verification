import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { TopDish } from 'Redux/Reducers/topDishes';
import { TopChef } from 'Redux/Reducers/topChefs';
import { Cuisines } from 'Redux/Reducers/cuisines';
import { Account } from 'Redux/Reducers/account';
import { AllDishes } from 'Redux/Reducers/allDishes';

const composeEnhancers =
  ((window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) &&
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
      trace: true,
      traceLimit: 25
    }) as typeof compose)) ||
  compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      topDish: TopDish,
      topChef: TopChef,
      cuisine: Cuisines,
      account: Account,
      allDishes: AllDishes
    }),
    // composeEnhancers(applyMiddleware(thunk, logger))
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
