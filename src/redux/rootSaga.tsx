import { all } from "redux-saga/effects";
import { authSaga } from './Saga/AuthSaga'


export default function* rootSaga() {
  yield all([authSaga]);
}
