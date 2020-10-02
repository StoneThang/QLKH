import {GET_BH, GET_BH_SUCCESS, GET_BH_ERROR} from '../../actions/actionTypes';

import {takeEvery, put} from 'redux-saga/effects';

import {getBH} from '../api/BHApi';

function* getBHSaga(action) {
  const {courseId} = action.data;
  const response = yield getBH(courseId);

  const error = response.message;

  if (response !== undefined) {
    if (response.resultCode === 1) {
      yield put({type: GET_BH_SUCCESS, response: response});
    } else {
      yield put({type: GET_BH_ERROR, error});
    }
  } else {
    yield put({type: GET_BH_ERROR, error});
  }
}

export function* watchBH() {
  yield takeEvery(GET_BH, getBHSaga);
}
