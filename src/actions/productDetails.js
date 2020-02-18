import { GET_PRODUCT_DETAILS } from '../constants'
export function getProductDetails(productId) {
    return {
      type: GET_PRODUCT_DETAILS,
      payload: { productId },
    };
  }