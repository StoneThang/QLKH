import {
  GET_ROOM_BUILDING_SUCCESS,
  GET_ROOM_BUILDING_ERROR,
} from '../actions/actionTypes';

const RoomBuildingReducers = (building = [], action) => {
  try {
    switch (action.type) {
      case GET_ROOM_BUILDING_SUCCESS:
        return {
          ...action.response,
          isfetching: true,
        };

      case GET_ROOM_BUILDING_ERROR:
        return action.response ? action.response.isSuccess : -1;

      default:
        return building;
    }
  } catch (error) {
    return building;
  }
};

export default RoomBuildingReducers;
