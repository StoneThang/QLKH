import {getCourseAction} from '../redux/actions/index';
import {connect} from 'react-redux';
import Course from '../components/home/KhoaHoc';
import React from 'react';
const mapStateToProps = (state) => {
  return {
    courseReducers: state.courseReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCourseAction: () => {
      dispatch(getCourseAction());
    },
  };
};

class CourseContainer extends React.Component {
  render() {
    return <Course {...this.props} />;
  }
}
export default CourseContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseContainer);
