import {combineReducers} from 'redux';
import loginReducers from './loginReducers';
import courseReducers from './courseReducers';
import RoomBuildingReducers from './RoomBuildingReducers';
import BHReducers from './BHReducers';
import createNewCourseReducers from './createNewCourseReducers';
const allReducers = combineReducers({
  loginReducers,
  courseReducers,
  RoomBuildingReducers,
  createNewCourseReducers,
  BHReducers,
});

export default allReducers;
