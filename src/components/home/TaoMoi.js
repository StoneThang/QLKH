import React from 'react';
import { Image, View, Text, Alert } from 'react-native';
import { ScrollView } from 'react-navigation';

import {
  color,
  courseManageStyle,
} from '../../res/values/styles/themes/courseStyle';
import DatePicker from '@react-native-community/datetimepicker';
import stringCourse from '../../res/values/strings/courseStr';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import caretdown from '../../res/images/caret-down.png';

import {
  objectIsNull,
  arrayIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';
export default class TaoMoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStart: new Date(),
      dateEnd: new Date(),
      showDateStart: false,
      showDateEnd: false,
      ableTouchDate: false,
      dataRoomFomServer: [],
      dataBuildingFomServer: [],
      CoureName: '',
      TeacherName: '',
      buiding: '',
      room: '',
      isVisibleBuilding: false,
      isVisibleRoom: false,
    };

  }
  componentDidMount() {
    this.props.getRoomBuildingAction();
  }

  componentDidUpdate(prevProps) {
    let arr = [];
    let roomArr = [];

    if (prevProps.RoomBuildingReducers !== this.props.RoomBuildingReducers) {
      if (!objectIsNull(this.props.RoomBuildingReducers)) {
        if (!arrayIsEmpty(this.props.RoomBuildingReducers.data)) {
          this.props.RoomBuildingReducers.data.map((item) => {
            arr.push({ label: item.buildingName, value: item._id });

            item.room.map((room) => {
              roomArr.push({
                label: room.roomName + ' - ' + room.location,
                value: room._id,
              });
            });
          });

          this.setState({
            dataBuildingFomServer: arr,
            dataRoomFomServer: roomArr,
          });
        }
      }
    }
  }
  checkCreateCoure = async () => {
    if (
      this.state.CoureName === '' ||
      this.state.TeacherName === '' ||
      this.state.dateStart === '' ||
      this.state.dateEnd === '' ||
      this.state.buiding === '' ||
      this.state.room === ''
    ) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin.');
    } else {
      await this.props.postCourseAction(
        this.state.CoureName,
        this.state.TeacherName,
        this.state.dateStart,
        this.state.dateEnd,
        this.state.buiding.value,
        this.state.room.value,
      );
      this.props.navigation.navigate('KhoaHoc');
      this.setState({
        CoureName: '',
        TeacherName: '',
        dateStart: null,
        dateEnd: null,
      });
    }
  };
  changeVisibility = (state) => {
    this.setState({
      isVisibleBuilding: false,
      isVisibleRoom: false,
      ...state
    });
  }
  back = () => {
    this.props.navigation.navigate('KhoaHoc');
  };


  render() {
    return (
      <ScrollView style={courseManageStyle.flex1Container1}


      >
        <View style={courseManageStyle.titleContainer}>
          <FontAwesome
            name="angle-left"
            size={35}
            color={color.gray2}
            onPress={this.back}
            style={courseManageStyle.titleBack}
          />
          <Text style={courseManageStyle.titleText}>
            {stringCourse.newKhoaHoc}
          </Text>
        </View>
        <View style={courseManageStyle.Container} />
        <View style={courseManageStyle.containerAdd}>
          {/* name */}
          <View>
            <Text style={courseManageStyle.titleAdd}>
              {stringCourse.tenKhoa}
            </Text>
            <TextInput
              placeholder={stringCourse.nhaptenkhoahoc}
              style={courseManageStyle.inputStyle}
              onChangeText={(CoureName) => {
                this.setState({ CoureName });
              }}
            />
          </View>

          {/* GV */}
          <View>
            <Text style={courseManageStyle.titleAdd}>
              {stringCourse.giangVien}
            </Text>
            <TextInput
              placeholder={stringCourse.nhaptengiangvien}
              style={courseManageStyle.inputStyle}
              onChangeText={(TeacherName) => this.setState({ TeacherName })}
            />
          </View>
          {/* From Date */}
          <View style={courseManageStyle.datetimeContainer}>
            <View style={courseManageStyle.itemDatime}>
              <Text style={courseManageStyle.titleAdd}>
                {stringCourse.tuNgay}
              </Text>
              <TouchableOpacity
                style={courseManageStyle.inputStyle}
                onPress={() => {

                  this.setState({ showDateStart: true });
                }}>
                {this.state.showDateStart && (
                  <DatePicker
                    date={this.state.dateStart}
                    value={new Date()}
                    mode="date"
                    format="DD-MM-YYYY"
                    maxDate="01-01-2080"
                    cancelBtnText="Cancel"
                    iconSource={caretdown}
                    confirmBtnText="Confirm"
                    onChange={(event, date) => {
                      if (date === undefined) {
                        this.setState({ dateStart: new Date(), showDateStart: false });
                      } else {
                        this.setState({ dateStart: date, showDateStart: false });
                      }

                    }}
                  />
                )}
                <Text style={courseManageStyle.textStyleFlex4}>
                  {' '}
                  {new Date(this.state.dateStart).getDate()}/
                  {new Date(this.state.dateStart).getMonth() + 1}/
                  {new Date(this.state.dateStart).getFullYear()}
                </Text>
                <Image
                  source={caretdown}
                  style={courseManageStyle.ImageIconDateStyle}
                />
              </TouchableOpacity>
            </View>
            {/* To Date */}
            <View style={courseManageStyle.itemDatime}>
              <Text style={courseManageStyle.titleAdd}>
                {stringCourse.denNgay}
              </Text>

              <TouchableOpacity
                style={courseManageStyle.inputStyle}
                // disabled={this.state.ableTouchDate}
                onPress={() => {
                  this.setState({ showDateEnd: true });
                }}>
                {this.state.showDateEnd && (
                  <DatePicker
                    date={this.state.dateEnd}
                    value={this.state.dateEnd}
                    mode="date"
                    format="DD-MM-YYYY"
                    cancelBtnText="Cancel"
                    confirmBtnText="Confirm"
                    onChange={(event, date) => {
                      if (date === undefined) {
                        this.setState({ dateEnd: new Date(), showDateEnd: false });
                      } else {
                        this.setState({ dateEnd: date, showDateEnd: false });
                      }

                    }}
                  />
                )}
                <Text style={courseManageStyle.textStyleFlex4}>
                  {' '}
                  {new Date(this.state.dateEnd).getDate()}/
                  {new Date(this.state.dateEnd).getMonth() + 1}/
                  {new Date(this.state.dateEnd).getFullYear()}
                </Text>
                <Image
                  source={caretdown}
                  style={courseManageStyle.ImageIconDateStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Buiding */}
          <View>
            <Text style={courseManageStyle.titleAdd}>
              {stringCourse.toaNha}
            </Text>
            <DropDownPicker
              containerStyle={courseManageStyle.DropDownPickerContainerheight}
              style={courseManageStyle.DropDownPickerStyle1}
              placeholder="chọn tòa nhà"
              itemStyle={courseManageStyle.DropDownPickerJustify}
              cancelBtnText="cancel"
              onChangeItem={(buiding) => this.setState({ buiding: buiding })}
              dropDownStyle={courseManageStyle.dropdownStyle}
              items={this.state.dataBuildingFomServer}

              isVisible={this.state.isVisibleBuilding}
              onOpen={() => this.changeVisibility({
                isVisibleBuilding: true
              })}
              onClose={() => this.setState({
                isVisibleBuilding: false
              })}
              controller={(instance) => (this.controller = instance)}
              defaultValue={this.state.dataBuildingFomServer.value}
            />
          </View>
          {/* Room */}
          <Text style={courseManageStyle.titleAdd}>{stringCourse.phong}</Text>
          <DropDownPicker
            containerStyle={courseManageStyle.DropDownPickerContainerheight}
            style={courseManageStyle.DropDownPickerStyle2}
            placeholder="chọn phòng"
            itemStyle={courseManageStyle.DropDownPickerJustify}
            dropDownStyle={courseManageStyle.dropdownStyle}
            isVisible={this.state.isVisibleRoom}
            onOpen={() => this.changeVisibility({
              isVisibleRoom: true
            })}
            onClose={() => this.setState({
              isVisibleRoom: false
            })}

            items={this.state.dataRoomFomServer}
            controller={(instance) => (this.controller = instance)}
            defaultValue={this.state.dataRoomFomServer.value}
            onChangeItem={(room) => this.setState({ room })}
          />
          {/* Button Luu */}
          <View style={courseManageStyle.btnSaveStyle2}>
            <TouchableOpacity
              style={courseManageStyle.btnSaveStyle}
              onPress={this.checkCreateCoure}>
              <FontAwesome name="save" color={color.white} size={15} />
              <Text style={courseManageStyle.btnTextSave}>
                {stringCourse.save}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}
