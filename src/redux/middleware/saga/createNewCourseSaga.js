import {
  POST_COURSE,
  POST_COURSE_ERROR,
  POST_COURSE_SUCCESS,
} from '../../actions/actionTypes';

import {takeEvery, put} from 'redux-saga/effects';

import {createNewCourseApi} from '../api/createNewCourseApi';

function* signInFlow(action) {
  const {
    courseName,
    trainer,
    startedDate,
    endedDate,
    buildingId,
    roomId,
  } = action.data;

  try {
    const response = yield createNewCourseApi(
      courseName,
      trainer,
      startedDate,
      endedDate,
      buildingId,
      roomId,
    );

    console.log(response);
    yield put({type: POST_COURSE_SUCCESS, response});
  } catch (error) {
    yield put({type: POST_COURSE_ERROR, error});
  }
}

export function* watchCreateCourse() {
  yield takeEvery(POST_COURSE, signInFlow);
}
