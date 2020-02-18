import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_PRODUCT_DETAILS, SET_PRODUCT_DETAILS } from '../../constants';
import { productDetails } from '../../api/getProductDetails';


function* workerProductDetails({ payload: { productId } }) {
    const res = yield call(productDetails, productId);
    if(res.status === 200){
      yield put ({type : SET_PRODUCT_DETAILS, payload : res.data})
    }
  }
  
  function* watcherProductDetails() {
    yield takeLatest(GET_PRODUCT_DETAILS, workerProductDetails);
  }
  export default watcherProductDetails;