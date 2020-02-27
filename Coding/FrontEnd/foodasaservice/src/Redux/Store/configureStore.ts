import { createStore, combineReducers } from 'redux';
import { Dish } from 'Redux/Reducers/dishes';

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ dish: Dish }));
  return store;
};
