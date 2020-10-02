import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
  color,
  courseManageStyle,
} from '../../res/values/styles/themes/courseStyle';
import stringCourse from '../../res/values/strings/courseStr';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  objectIsNull,
  arrayIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';

export default class BuoiHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dataBHFromServer: [],
      isRefeshBH: false,
      courseName: '',
    };
  }

  componentDidMount() {
    let idCourse = this.props.navigation.getParam('courseId');
    // if(idCourse !== '')
    this.props.BHAction(idCourse);
    // else
    // this.setState({courseName:'NULL'})
  }
  componentDidUpdate(prevProps) {
    if (prevProps.BHReducers !== this.props.BHReducers) {
      if (!objectIsNull(this.props.BHReducers)) {
        if (!arrayIsEmpty(this.props.BHReducers.data)) {
          this.setState({
            dataBHFromServer: this.props.BHReducers.data,
            courseName: this.props.BHReducers.data[0].courseName,
          });
          console.log(this.state.dataBHFromServer);
        }
      }
    }
  }

  render() {
    const refreshData = () => {
      this.setState({isRefeshBH: true});
      this.props.BHAction();
      this.setState({
        dataFromServer: this.props.BHReducers.data,
        isRefeshBH: false,
      });
    };
    const renderItem = ({item}) => (
      <View style={courseManageStyle.itemContainer}>
        <View style={courseManageStyle.CourseNameContainer}>
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
        {/* trainer */}
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
            <Text style={courseManageStyle.cbqlDetail}>{item.created_by}</Text>
          </View>
        </View>

        {/* Date */}
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
              {stringCourse.ngay}
            </Text>
            <Text style={courseManageStyle.timeDetail}>
              {new Date(item.date).getDate()}/
              {new Date(item.date).getMonth() + 1}/
              {new Date(item.date).getFullYear()}
            </Text>
          </View>
        </View>
        {/* Time */}
        <View style={courseManageStyle.teacherContainer}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={24}
            color={color.red}
            style={
              (courseManageStyle.teacherCourseIcon,
              courseManageStyle.flex1Container)
            }
          />
          <View style={courseManageStyle.containerDetailKH}>
            <Text style={courseManageStyle.teacherCourseTitle}>
              {stringCourse.thoiGian}
            </Text>
            <Text style={courseManageStyle.timeDetail2}>
              {item.startedTime} - {item.endedTime}
            </Text>
          </View>
        </View>

        {/* building */}

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
        {/* wifi */}
        <View style={courseManageStyle.teacherContainerWifi}>
          <FontAwesome
            name="wifi"
            size={20}
            color={color.green2}
            style={
              (courseManageStyle.teacherCourseIcon,
              courseManageStyle.flex1Container)
            }
          />
          <View style={courseManageStyle.containerDetailKH}>
            <Text style={courseManageStyle.WifiCourse}>{item.wifi}</Text>
          </View>
          <View style={courseManageStyle.codeStyleContainer}>
            <Text style={courseManageStyle.codeStyle}>{item.code}</Text>
          </View>
        </View>
      </View>
    );
    const back = () => {
      this.props.navigation.navigate('KhoaHoc');
    };
    const add = () => {};
    const title = this.state.courseName === '' ? '' : this.state.courseName;
    return (
      <SafeAreaView style={courseManageStyle.ContainerWhite}>
        <View>
          <View style={courseManageStyle.titleContainer}>
            <FontAwesome
              name="angle-left"
              size={33}
              color={color.gray2}
              onPress={back}
              style={courseManageStyle.titleBack}
            />

            <Text style={courseManageStyle.titleText}>
              {stringCourse.qliBuoiHoc}
            </Text>

            <FontAwesome
              name="plus"
              size={24}
              color={color.gray2}
              onPress={add}
              style={courseManageStyle.titleAddKH}
            />
          </View>

          {/* content */}
          <View style={courseManageStyle.Container} />
          <Text style={courseManageStyle.NameCourseTitle}>{title}</Text>
          <FlatList
            data={this.state.dataBHFromServer}
            renderItem={renderItem}
            onRefresh={() => refreshData()}
            refreshing={this.state.isRefeshBH}
            keyExtractor={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}
