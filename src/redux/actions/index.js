import {
  INCREMENT,
  DECREMENT,
  POST_LOGIN,
  GET_COURSE,
  GET_ROOM_BUILDING,
  POST_COURSE,
  GET_BH,
} from './actionTypes';

export const increaseAction = (step) => {
  return {
    type: INCREMENT,
    step: step,
  };
};

export const decreaseAction = (step) => {
  return {
    type: DECREMENT,
    step: step,
  };
};

export const getCourseAction = () => {
  return {
    type: GET_COURSE,
  };
};

export const getRoomBuildingAction = () => {
  return {
    type: GET_ROOM_BUILDING,
  };
};

export const loginAction = (user, password) => {
  return {
    type: POST_LOGIN,
    data: {user, password},
  };
};

export const BHAction = (courseId) => {
  return {
    type: GET_BH,
    data: {courseId},
  };
};

export const postCourseAction = (
  courseName,
  trainer,
  startedDate,
  endedDate,
  buildingId,
  roomId,
) => {
  return {
    type: POST_COURSE,
    data: {
      courseName,
      trainer,
      startedDate,
      endedDate,
      buildingId,
      roomId,
    },
  };
};
