import {POST_COURSE_SUCCESS, POST_COURSE_ERROR} from '../actions/actionTypes';

const initialState = 'new course';

const createNewCourseReducers = (course = initialState, action) => {
  switch (action.type) {
    case POST_COURSE_SUCCESS:
      return action.response;

    case POST_COURSE_ERROR:
      return action.response;

    default:
      return course;
  }
};

export default createNewCourseReducers;
