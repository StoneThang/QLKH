import {BHAction} from '../redux/actions/index';
import {connect} from 'react-redux';
import BuoiHoc from '../components/home/BuoiHoc';
import React from 'react';
const mapStateToProps = (state) => {
  return {
    BHReducers: state.BHReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    BHAction: (courseId) => {
      dispatch(BHAction(courseId));
    },
  };
};

class BHContainer extends React.Component {
  render() {
    return <BuoiHoc {...this.props} />;
  }
}
export default BHContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BHContainer);
