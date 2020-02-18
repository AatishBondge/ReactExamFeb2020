import { SET_TOKEN } from '../constants';
const initialState = {
  token: null
};

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
      case SET_TOKEN: {
        return { ...state, token: action.payload };
      }
      default:
        return state;
    }
  }