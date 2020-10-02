import {
  GET_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_ERROR,
} from '../../actions/actionTypes';

import {takeEvery, put} from 'redux-saga/effects';

import {get_Course} from '../api/course';

function* getCourse(action) {
  const response = yield get_Course();

  const error = response.message;

  if (response !== undefined) {
    if (response.resultCode === 1) {
      yield put({type: GET_COURSE_SUCCESS, response: response});
    } else {
      yield put({type: GET_COURSE_ERROR, error});
    }
  } else {
    yield put({type: GET_COURSE_ERROR, error});
  }
}

export function* watchCourse() {
  yield takeEvery(GET_COURSE, getCourse);
}
