import {GET_BH_SUCCESS, GET_BH_ERROR} from '../actions/actionTypes';

const BHReducers = (BH = [], action) => {
  try {
    switch (action.type) {
      case GET_BH_SUCCESS:
        console.log(action.response);
        return {
          ...action.response,
          isfetching: true,
        };

      case GET_BH_ERROR:
        return action.response ? action.response.isSuccess : -1;

      default:
        return BH;
    }
  } catch (error) {
    return BH;
  }
};

export default BHReducers;
