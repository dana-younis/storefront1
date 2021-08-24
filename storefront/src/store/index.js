import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './product';
import categoriesReducer from './categories';

let reducers = combineReducers({
  productsReducer,
  categoriesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();