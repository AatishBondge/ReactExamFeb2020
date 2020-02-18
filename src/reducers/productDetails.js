import { SET_PRODUCT_DETAILS } from '../constants';
const initialState = {
  productsDetails: []
};

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
      case SET_PRODUCT_DETAILS: {
        return { ...state, productsDetails: action.payload };
      }
      default:
        return state;
    }
  }