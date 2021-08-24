import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './product';
import categoriesReducer from './categories';
import cartReducer from './cart.jsx';


let reducers = combineReducers({
  productsReducer,
  categoriesReducer,
 cartReducer ,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();