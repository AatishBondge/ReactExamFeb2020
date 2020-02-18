import { SET_PRODUCTS } from '../constants';
const initialState = {
  products: []
};

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
      case SET_PRODUCTS: {
        return { ...state, products: action.payload };
      }
      default:
        return state;
    }
  }