import {
  GET_ROOM_BUILDING,
  GET_ROOM_BUILDING_SUCCESS,
  GET_ROOM_BUILDING_ERROR,
} from '../../actions/actionTypes';

import {takeEvery, put} from 'redux-saga/effects';

import {getRoomBuildingApi} from '../api/roomBuildingApi';

function* getRoomBuildingSaga(action) {
  const response = yield getRoomBuildingApi();
  const error = response.message;

  if (response !== undefined) {
    if (response.resultCode === 1) {
      yield put({type: GET_ROOM_BUILDING_SUCCESS, response: response});
    } else {
      yield put({type: GET_ROOM_BUILDING_ERROR, error});
    }
  } else {
    yield put({type: GET_ROOM_BUILDING, error});
  }
}

export function* watchRoomBuilding() {
  yield takeEvery(GET_ROOM_BUILDING, getRoomBuildingSaga);
}
