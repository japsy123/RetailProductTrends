import { LOAD_PRODUCT_DETAILS, SET_PRODUCT_DETAILS } from "./actions"
import {takeEvery, put, spawn, call} from 'redux-saga/effects'

function fetchProductDetails() {
    return fetch('/product').then(res => res.json())
}

function* productLoadAsync() {
    const response = yield call(fetchProductDetails)
    yield put({type: SET_PRODUCT_DETAILS, payload: {
        productInfo: response
    }})
}

export function* watchProductDetailsLoad() {
    yield takeEvery(LOAD_PRODUCT_DETAILS, productLoadAsync)
}

export default function* rootSaga() {
    yield spawn(watchProductDetailsLoad)
}