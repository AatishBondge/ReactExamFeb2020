import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import searchedProductsReducer from './searchProduct';
import productDetailsReducer from './productDetails';

export default combineReducers({
    authenticationReducer,
    searchedProductsReducer,
    productDetailsReducer
})