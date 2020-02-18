import { call, takeLatest, put } from 'redux-saga/effects';
import { SEARCH_PRODUCT, SET_PRODUCTS } from '../../constants';
import { getSearchProduct } from '../../api/getSearchProdyct';


function* workerSearchProduct({ payload: { terms } }) {
    const res = yield call(getSearchProduct, terms);
    if(res.status === 200){
      yield put ({type : SET_PRODUCTS, payload : res.data.response.records})
    }
  }
  
  function* watcherSearchProduct() {
    yield takeLatest(SEARCH_PRODUCT, workerSearchProduct);
  }
  export default watcherSearchProduct;