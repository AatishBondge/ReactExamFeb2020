import { call, takeLatest, put } from 'redux-saga/effects';
import { AUTH_REQUESTING, SET_TOKEN } from '../../constants';
import { getUserAuthentication } from '../../api/authenticationApi';


function* workerAuthenticate({ payload: { login, password } }) {
    const res = yield call(getUserAuthentication, login, password);
    if(res.status === 200){
      localStorage.setItem('access_token', res.data.access_token);
    yield put({ type: SET_TOKEN, payload: res.data.access_token });
    yield (window.location.href = '/search')
    }
  }
  
  function* watcherAuthentication() {
    yield takeLatest(AUTH_REQUESTING, workerAuthenticate);
  }
  export default watcherAuthentication;