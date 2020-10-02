import {getRoomBuildingAction, postCourseAction} from '../redux/actions/index';
import {connect} from 'react-redux';
import Course from '../components/home/TaoMoi';
import React from 'react';
const mapStateToProps = (state) => {
  return {
    RoomBuildingReducers: state.RoomBuildingReducers,
    createNewCourseReducers: state.createNewCourseReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRoomBuildingAction: () => {
      dispatch(getRoomBuildingAction());
    },
    postCourseAction: (
      courseName,
      trainer,
      startedDate,
      endedDate,
      buildingId,
      roomId,
    ) => {
      dispatch(
        postCourseAction(
          courseName,
          trainer,
          startedDate,
          endedDate,
          buildingId,
          roomId,
        ),
      );
    },
  };
};

class TaoMoiContainer extends React.Component {
  render() {
    return <Course {...this.props} />;
  }
}
export default TaoMoiContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaoMoiContainer);
