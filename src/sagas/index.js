import { all, fork } from 'redux-saga/effects';
import watcherAuthentication from './watcher/getAuthenticate';
import watcherSearchProduct from './watcher/searchProduct';
import watcherProductDetails from './watcher/getProductDetails'
function* saga() {
    yield all([
        fork(watcherAuthentication),
        fork(watcherSearchProduct),
        fork(watcherProductDetails)
    ])
}

export default saga;