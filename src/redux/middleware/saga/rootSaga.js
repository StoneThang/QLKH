import {all} from 'redux-saga/effects';

import {watchLogin} from './loginSagas';
import {watchCourse} from './courseSaga';
import {watchRoomBuilding} from './roomBuildingSaga';
import {watchCreateCourse} from './createNewCourseSaga';
import {watchBH} from './BHSaga';
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCourse(),
    watchRoomBuilding(),
    watchCreateCourse(),
    watchBH(),
  ]);
}
