import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
  color,
  courseManageStyle,
} from '../../res/values/styles/themes/courseStyle';
import stringCourse from '../../res/values/strings/courseStr';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  objectIsNull,
  arrayIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';
export default class KhoaHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromServer: [],
      isRefesh: false,
    };
  }
  componentDidMount() {
    this.props.getCourseAction();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.courseReducers !== this.props.courseReducers) {
      if (!objectIsNull(this.props.courseReducers)) {
        if (!arrayIsEmpty(this.props.courseReducers.data)) {
          this.setState({ dataFromServer: this.props.courseReducers.data });
        }
      }
    }
    // this.props.getCourseAction();
  }

  refreshData = () => {
    this.setState({ isRefesh: true });
    this.props.getCourseAction();
    this.setState({
      dataFromServer: this.props.courseReducers.data,
      isRefesh: false,
    });
  };

  render() {
    const back = () => {
      this.props.navigation.navigate('Login');
    };
    const add = () => {
      this.props.navigation.navigate('TaoMoi');
    };
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('BuoiHoc', { courseId: item.course_id })
        }>
        <View style={courseManageStyle.itemContainer}>
          <View style={courseManageStyle.teacherContainer}>
            <Text style={courseManageStyle.nameCourse} numberOfLines={2}>
              {item.courseName}
            </Text>

            <FontAwesome
              name="ellipsis-v"
              size={20}
              color={color.gray3}
              style={courseManageStyle.menuCourse}
            />
          </View>
          {/* CB */}
          <View style={courseManageStyle.teacherContainer}>
            <FontAwesome
              name="user-tie"
              size={20}
              color={color.yellow}
              style={
                (courseManageStyle.teacherCourseIcon,
                  courseManageStyle.flex1Container)
              }
            />
            <View style={courseManageStyle.containerDetailKH}>
              <Text style={courseManageStyle.teacherCourseTitle}>
                {stringCourse.giangVien}
              </Text>
              <Text style={courseManageStyle.teacherCourseDetail}>
                {item.trainer}
              </Text>
            </View>
          </View>
          {/* CBQL */}
          <View style={courseManageStyle.teacherContainer}>
            <FontAwesome
              name="address-card"
              size={20}
              color={color.black}
              style={
                (courseManageStyle.teacherCourseIcon,
                  courseManageStyle.flex1Container)
              }
            />
            <View style={courseManageStyle.containerDetailKH}>
              <Text style={courseManageStyle.teacherCourseTitle}>
                {stringCourse.canBoQuanLy}
              </Text>
              <Text style={courseManageStyle.cbqlDetail}>
                {item.created_by}
              </Text>
            </View>
          </View>

          {/* Time */}
          <View style={courseManageStyle.teacherContainer}>
            <FontAwesome
              name="calendar-check"
              size={20}
              color={color.green}
              style={
                (courseManageStyle.teacherCourseIcon,
                  courseManageStyle.flex1Container)
              }
            />
            <View style={courseManageStyle.containerDetailKH}>
              <Text style={courseManageStyle.teacherCourseTitle}>
                {stringCourse.thoiGian}
              </Text>
              <Text style={courseManageStyle.timeDetail}>
                {new Date(item.startedDate).getDate()}/
                {new Date(item.startedDate).getMonth() + 1}/
                {new Date(item.startedDate).getFullYear()}-{' '}
                {new Date(item.endedDate).getDate()}/
                {new Date(item.endedDate).getMonth() + 1}/
                {new Date(item.endedDate).getFullYear()}
              </Text>
            </View>
          </View>

          {/* ToaNha */}

          <View style={courseManageStyle.teacherContainer}>
            <FontAwesome
              name="building"
              size={20}
              color={color.blue1}
              style={
                (courseManageStyle.teacherCourseIcon,
                  courseManageStyle.flex1Container)
              }
            />
            <View style={courseManageStyle.containerDetailKH}>
              <Text style={courseManageStyle.teacherCourseTitle}>
                {stringCourse.toaNha}
              </Text>
              <Text style={courseManageStyle.timeDetail}>
                {item.buildingName}
              </Text>
            </View>
          </View>

          {/* Phong */}

          <View style={courseManageStyle.teacherContainer}>
            <FontAwesome
              name="chalkboard-teacher"
              size={20}
              color={color.orange}
              style={
                (courseManageStyle.teacherCourseIcon,
                  courseManageStyle.flex1Container)
              }
            />
            <View style={courseManageStyle.containerDetailKH}>
              <Text style={courseManageStyle.teacherCourseTitle}>
                {stringCourse.phong}
              </Text>
              <Text style={courseManageStyle.timeDetail}>{item.roomName}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
    return (
      <SafeAreaView
        style={
          (courseManageStyle.ContainerWhite, courseManageStyle.flex1Container)
        }>
        <View style={courseManageStyle.titleContainer}>
          <FontAwesome
            name="angle-left"
            size={33}
            color={color.gray2}
            onPress={back}
            style={courseManageStyle.titleBack}
          />

          <Text style={courseManageStyle.titleText}>
            {stringCourse.qliKhoHoc}
          </Text>

          <FontAwesome
            name="plus"
            size={24}
            color={color.gray2}
            onPress={add}
            style={courseManageStyle.titleAddKH}
          />
        </View>
        <View style={courseManageStyle.Container} />
        <FlatList
          data={this.state.dataFromServer}
          renderItem={renderItem}
          onRefresh={() => this.refreshData()}
          refreshing={this.state.isRefesh}
          keyExtractor={(item) => item.course_id}
        />
      </SafeAreaView>
    );
  }
}
