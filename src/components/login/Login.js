import React from 'react';
import {Image, View, ScrollView, Text, Alert} from 'react-native';
import ic_logo from '../../res/images/ic_logo.png';
import stripe from '../../res/images/stripe.png';
import swipe from '../../res/images/swipe.png';
import loginStr from '../../res/values/strings/loginStr';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  myCourseStyles,
  color,
} from '../../res/values/styles/themes/courseStyle';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IconCheck: 'circle',
      Ischeck: false,
      hidePassword: true,
      user: '',
      password: '',
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loginReduces !== this.props.loginReduces) {
      if (this.props.loginReduces.resultCode === 1) {
        this.state.Ischeck
          ? this.SaveUserPassword()
          : this.RemoveUserPassword();
        this.props.navigation.navigate('KhoaHoc');
        console.log('success');
      } else if (this.props.loginReduces.resultCode === -1) {
        Alert.alert('Lỗi', 'Tài khoản hoặc mật khẩu sai!');
      }
    }
  }
  RemoveUserPassword = () => {
    this.setState({user: '', password: ''});
  };
  SaveUserPassword = () => {};
  CheckLogin = () => {
    this.state.Ischeck ? this.SaveUserPassword() : this.RemoveUserPassword();
    this.props.loginAction(this.state.user, this.state.password);
  };

  getUserText = () => {};

  render() {
    return (
      <View style={myCourseStyles.item.containerFlex1}>
        <ScrollView>
          <View style={myCourseStyles.item.container2}>
            <Image style={myCourseStyles.item.logoSize} source={ic_logo} />
            <Text style={myCourseStyles.item.titleTextLogo}>
              {loginStr.stripLogo}
            </Text>
            <Image style={myCourseStyles.item.stripeSize} source={stripe} />
            <Text style={myCourseStyles.item.loginTextSize}>
              {loginStr.loginSystem}
            </Text>

            {/* user */}
            <View style={myCourseStyles.item.inputTextloginContainer}>
              <Icon
                style={myCourseStyles.item.iconUserStyle}
                name="user-alt"
                size={20}
                color={color.gray}
              />

              <TextInput
                style={myCourseStyles.item.iconInputStyle}
                placeholder="Nhập tài khoản"
                onChangeText={(user) => this.setState({user})}
              />
            </View>
            <View style={myCourseStyles.item.inputTextloginContainer}>
              <Icon
                style={myCourseStyles.item.iconPassStyle}
                name="lock"
                size={20}
                color={color.gray}
              />
              {this.state.hidePassword ? (
                <TextInput
                  style={myCourseStyles.item.textInputPass}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={this.state.hidePassword}
                  placeholder="Nhập mật khẩu">
                  {this.state.password}
                </TextInput>
              ) : (
                <TextInput
                  style={myCourseStyles.item.textInputPass}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={this.state.hidePassword}
                  placeholder="Nhập mật khẩu">
                  {this.state.password}
                </TextInput>
              )}

              <TouchableOpacity
                style={myCourseStyles.item.iconPassStyle}
                onPress={() => {
                  this.setState({hidePassword: !this.state.hidePassword});
                }}>
                <Icon
                  name={this.state.hidePassword === true ? 'eye-slash' : 'eye'}
                  size={15}
                  color={color.gray}
                />
              </TouchableOpacity>
            </View>
            {/* check */}
            <View style={myCourseStyles.item.checkContainer}>
              <TouchableOpacity
                style={myCourseStyles.item.checkContainer}
                onPress={() => {
                  if (!this.state.Ischeck) {
                    this.setState({IconCheck: 'check-circle', Ischeck: true});
                  } else {
                    this.setState({IconCheck: 'circle', Ischeck: false});
                  }
                }}>
                <Icon
                  name={this.state.IconCheck}
                  size={20}
                  color={color.orange}
                />
                <Text style={myCourseStyles.item.checkText}>
                  {loginStr.loginRemember}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Button Dang nhap */}
            <TouchableOpacity
              onPress={this.CheckLogin}
              style={myCourseStyles.item.loginButtonContainer}>
              <Text style={myCourseStyles.item.loginButton}>
                {loginStr.touchLogin}
              </Text>
            </TouchableOpacity>
            <Image style={myCourseStyles.item.lastLogo} source={swipe} />
          </View>
          <View style={myCourseStyles.item.foot}>
            <Text style={myCourseStyles.item.copyRightText}>
              {loginStr.coppyright}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
