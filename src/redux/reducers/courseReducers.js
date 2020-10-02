import {GET_COURSE_SUCCESS, GET_COURSE_ERROR} from '../actions/actionTypes';

const courseReducers = (course = [], action) => {
  try {
    switch (action.type) {
      case GET_COURSE_SUCCESS:
        return {
          ...action.response,
          isfetching: true,
        };

      case GET_COURSE_ERROR:
        return action.response ? action.response.isSuccess : -1;

      default:
        return course;
    }
  } catch (error) {
    return course;
  }
};

export default courseReducers;
