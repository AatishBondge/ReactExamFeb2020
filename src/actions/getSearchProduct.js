import { SEARCH_PRODUCT } from '../constants'
export function searchProduct(terms) {
    return {
      type: SEARCH_PRODUCT,
      payload: { terms },
    };
  }