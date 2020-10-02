import {StyleSheet, Dimensions} from 'react-native';
const sizeWindow = Dimensions.get('window');
const sizeDefautft = {
  width: 692,
  height: 1451,
};
const scaleVer = sizeWindow.height / sizeDefautft.height;
// const scaleHoz = sizeWindow.width / sizeDefautft.width;
// const scaleValue =
//   Math.sqrt(Math.pow(sizeWindow.height, 2) + Math.pow(sizeDefautft.width, 2)) /
//   Math.sqrt(Math.pow(sizeDefautft.height, 2) + Math.pow(sizeDefautft.width, 2));
export const color = {
  accent: '#F3534A',
  green: '#64b5f6',
  green2: '#26a69a',
  yellow: '#fbc02d',
  primary: '#0AC4BA',
  secondary: '#2BDA8E',
  tertiary: '#FFE358',
  orange: '#fb8c00',
  black: '#323643',
  white: '#FFFFFF',
  white2: '#33FFFFFF',
  gray: '#9DA3B4',
  gray1: '#eeeeee',
  gray2: '#bdbdbd',
  gray3: '#424242',
  blue: '#007aff',
  blue1: '#0288d1',
  blue2: '#007affcc',
  blue3: '#1a237e',
  blue4: '#0d47a1',

  red: '#f44336',
  brow: '#eff0f4',
  brow2: '#fafafa',
  brow3: '#2c2c2c',
  brow4: '#eff0f4',
  brow5: '#7F7F7F',
  brow6: '#353535',
};
const basicSize = {
  s2: 2,
  s5: 5,
  s7: 7,
  s10: 10,
  s15: 15,
  s20: 20,
  s25: 25,
  s30: 30,
  s35: 35,
  s40: 40,
  s45: 45,
  s50: 50,
  s55: 55,
  s60: 60,
  s65: 65,
  s70: 70,
  s75: 75,
  s80: 80,
  s90: 90,
  s100: 100,
  s120: 120,
  s140: 140,
  s160: 160,
  s180: 180,
  s200: 200,
  s210: 210,
  s230: 230,
  s320: 320,
  s400: 400,
  s420: 420,
  s440: 440,
  s460: 460,
  s500: 500,
  s600: 610,
  h10: 10,
  h12: 12,
  h14: 14,
  h16: 16,
  h18: 18,
  h20: 20,
  h22: 22,
  h24: 24,
  h26: 26,
  h28: 28,
  h30: 30,
  h32: 32,
  h34: 34,
  h36: 36,
  h38: 38,
  h40: 40,
};

export const sizeText = {
  h10: scale(basicSize.h10),
  h12: scale(basicSize.h12),
  h14: scale(basicSize.h14),
  h16: scale(basicSize.h16),
  h18: scale(basicSize.h18),
  h20: scale(basicSize.h20),
  h22: scale(basicSize.h22),
  h24: scale(basicSize.h24),
  h26: scale(basicSize.h26),
  h28: scale(basicSize.h28),
  h30: scale(basicSize.h30),
  h32: scale(basicSize.h32),
  h34: scale(basicSize.h34),
  h36: scale(basicSize.h36),
  h38: scale(basicSize.h38),
  h40: scale(basicSize.h40),
};
export const paddding = {
  padding02: scale(basicSize.s2),
  padding5: scale(basicSize.s5),
  padding7: scale(basicSize.s7),
  padding10: scale(basicSize.s10),
  padding15: scale(basicSize.s15),
  padding20: scale(basicSize.s20),
  padding25: scale(basicSize.s25),
  padding30: scale(basicSize.s30),
  padding35: scale(basicSize.s35),
  padding40: scale(basicSize.s40),
  padding45: scale(basicSize.s45),
  padding50: scale(basicSize.s50),
  padding55: scale(basicSize.s55),
  padding60: scale(basicSize.s60),
  padding70: scale(basicSize.s70),
  padding75: scale(basicSize.s75),
  padding80: scale(basicSize.s80),
  padding90: scale(basicSize.s90),
  padding100: scale(basicSize.s100),
  padding140: scale(basicSize.s140),
  padding160: scale(basicSize.s160),
  padding200: scale(basicSize.s200),
};

export const size = {
  sizeIcon: scale(basicSize.s45),
  sizeStar: scale(basicSize.s10),
  sizeSearch: scale(basicSize.s35),
  sizeInputNote: scale(basicSize.s35),
  sizeTitleView: scale(basicSize.s80),
  sizeIconBack: scale(basicSize.s40),
  sizeStarCourse: scale(basicSize.s20),
  sizeButtonRegister: scale(basicSize.s100),
  sizeLogoLogin: scale(basicSize.s120),
  sizeThumnailLogin: scale(basicSize.s400),
  sizeThumnailWellcom: scale(basicSize.s400),
  sizePointWellcom: scale(basicSize.s25),
  sizeBadge: scale(basicSize.s60),
  sizeIconBadge: scale(basicSize.s40),
  heightProcces: scale(basicSize.s10),
  sizeVideo: scale(basicSize.s400),
  sizeTitleWellcom: scale(basicSize.s140),
  sizeTitleMycourse: scale(basicSize.s180),
  widthRecom: scale(basicSize.s230),
  heightRecom: scale(basicSize.s120),
  widthCategoryRecom: scale(basicSize.s200),
  heigthDetailCourseIntro: scale(basicSize.s140),
  heightLine: scale(basicSize.s2),
  borderButtonLogin: scale(basicSize.s2),
};
function scale(size) {
  // var sizeScale = (size * sizeWindow.width / sizeDefautft.width)
  // if (sizeWindow.width > sizeWindow.height) {
  //      sizeScale = (size * sizeWindow.height / sizeDefautft.height)
  // }
  return size * scaleVer;
}
export const basicStyles = {
  loadding: StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  }),
};

export const topMenuCustomStyle = StyleSheet.create({
  all: {
    flexDirection: 'row',
    borderColor: color.blue,
    borderRadius: paddding.padding10,
    borderWidth: paddding.padding02,
  },
  title: {
    backgroundColor: color.white,
    fontSize: sizeText.h26,
    color: color.blue,
    borderRadius: paddding.padding10,
    paddingVertical: paddding.padding10,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  titleFocus: {
    backgroundColor: color.blue,
    fontSize: sizeText.h26,
    color: color.white,
    borderRadius: paddding.padding10,
    paddingVertical: paddding.padding10,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  viewItem: {
    //   backgroundColor:color.accent
  },
});
export const starRattingStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal:5
  },
  text: {
    fontSize: sizeText.h20,
    marginLeft: paddding.padding10,
    marginRight: paddding.padding10,
  },
  icon: {
    width: size.sizeStar,
    height: size.sizeStar,
    marginHorizontal: paddding.padding02,
  },
});
export const searchBarStyle = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: color.brow,
    alignItems: 'center',
    borderRadius: paddding.padding20,
    paddingVertical: paddding.padding15,
    paddingHorizontal: paddding.padding10,
  },
  iconSearch: {
    marginHorizontal: paddding.padding10,
    resizeMode: 'contain',
  },
  input: {
    fontSize: sizeText.h28,
    paddingVertical: 0,
    textAlignVertical: 'center',
    flex: 1,
  },
  iconRemove: {
    marginHorizontal: paddding.padding15,
    resizeMode: 'contain',
  },
});

export const processStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: paddding.padding5,
    flex: 1,
    height: size.heightProcces,
    width: '100%',
    backgroundColor: color.white,
  },
  process: {
    height: '100%',
    borderTopLeftRadius: paddding.padding5,
    borderBottomLeftRadius: paddding.padding5,
    backgroundColor: color.blue,
  },
});
export const playerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: paddding.padding30,
    backgroundColor: 'white',
    padding: paddding.padding10,
    borderRadius: paddding.padding5,
  },
  mediaPlayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const menuBarStyle = StyleSheet.create({
  menuBar: {
    width: '100%',
    flexDirection: 'row',
  },
  menuBar_title: {
    paddingHorizontal: paddding.padding30,
    color: color.brow3,
    fontSize: sizeText.h26,
    fontWeight: 'bold',
  },
  menuBar_title_focus: {
    paddingHorizontal: paddding.padding40,
    color: color.brow5,
    fontSize: sizeText.h26,
    fontWeight: 'bold',
  },
  all: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: paddding.padding30,
    alignContent: 'stretch',
  },
  title: {
    fontSize: sizeText.h28,
    textAlignVertical: 'center',
    paddingHorizontal: paddding.padding15,
    textAlign: 'center',
    flex: 1,
  },
  titleFocus: {
    fontSize: sizeText.h28,
    textAlignVertical: 'center',
    paddingHorizontal: paddding.padding15,
    textAlign: 'center',
    flex: 1,
  },
  viewItem: {},
});

export const itemNoteStyle = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: sizeText.h24,
    textAlignVertical: 'center',
    paddingLeft: paddding.padding20,
  },
  iconEdit: {
    resizeMode: 'contain',
    margin: paddding.padding20,
  },
  viewEdit: {
    alignItems: 'flex-end',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export const itemDisscusStyle = StyleSheet.create({
  des_title: {
    fontSize: sizeText.h22,
    textAlignVertical: 'top',
  },
  des_name: {
    fontSize: sizeText.h28,
    textAlignVertical: 'top',
    marginRight: paddding.padding10,
  },
  des_time: {
    fontSize: sizeText.h20,
    textAlignVertical: 'top',
  },
  icon: {
    resizeMode: 'contain',
    width: size.sizeIcon,
    height: size.sizeIcon,
    marginHorizontal: paddding.padding20,
    marginVertical: paddding.padding20,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: paddding.padding20,
    paddingVertical: paddding.padding10,
  },
  des: {
    // width:'85%',
    flex: 1,
    flexDirection: 'column',
  },
  buttonSave: {
    color: color.blue,
    fontSize: sizeText.h22,
    paddingHorizontal: paddding.padding20,
  },
});

export const itemCourseStyle = StyleSheet.create({
  item_coure_title_name: {
    fontSize: sizeText.h28,
    textAlignVertical: 'center',
    flex: 1,
  },
  item_coure_title_icon: {
    resizeMode: 'contain',
    marginHorizontal: paddding.padding40,
    width: size.sizeTitleView - paddding.padding40,
    height: size.sizeTitleView - paddding.padding40,
  },
  item_coure_title: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: paddding.padding25,
  },
});
export const inputNoteStyle = StyleSheet.create({
  note_input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.brow,
    padding: paddding.padding20,
  },
  note_input_title: {
    flex: 1,
    padding: 0,
    fontSize: sizeText.h26,
  },
  note_input_icon: {
    resizeMode: 'contain',
  },
});
export const imageBadgebuttonStyle = StyleSheet.create({
  imageNoti: {
    width: size.sizeBadge,
    height: size.sizeBadge,
    margin: paddding.padding5,
  },
  numberNoti: {
    color: color.white,
    fontSize: sizeText.h20,
  },
  iconNoti: {
    width: size.sizeIconBadge,
    height: size.sizeIconBadge,
    borderRadius: size.sizeIconBadge,
    backgroundColor: '#f06257',
  },
});
export const courseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menu: {
    alignSelf: 'stretch',
    paddingTop: paddding.padding30,
    paddingBottom: paddding.padding20,
    paddingHorizontal: paddding.padding50,
    justifyContent: 'center',
    backgroundColor: color.brow,
  },
  menu_tab: {
    borderColor: color.blue,
  },
  menu_tab_active: {
    backgroundColor: color.blue,
  },
  body: {
    flex: 91.3,
    alignSelf: 'stretch',
    backgroundColor: color.white,
  },
});

export const myCourseStyles = {
  main: StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
  item: StyleSheet.create({
    container: {
      alignItems: 'center',
      margin: basicSize.h14,
      flex: 1,
      marginTop: scale(basicSize.s10),
    },
    container2: {
      alignItems: 'center',
      margin: basicSize.h10,
      width: sizeWindow.width,
      height: sizeWindow.height - scale(80),
      marginTop: scale(basicSize.s10),
    },
    containerFlex1: {
      flex: 1,
      alignItems: 'center',
    },
    containerFlex2: {
      flex: 1,
    },
    containerOut: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fafafa',
      height: sizeWindow.height,
    },
    foot: {
      // marginBottom: 1,
      // marginTop: scale(basicSize.s60),
      alignItems: 'center',
    },
    copyRightText: {
      color: '#bdbdbd',
      fontSize: scale(basicSize.h30),
      alignItems: 'center',
    },

    foot_image: {
      height: paddding.padding40,
      resizeMode: 'contain',
    },
    restSessionItem: {
      flex: 1,
      color: color.blue,
      fontSize: sizeText.h26,
    },
    restDateItem: {
      color: '#e7447c',
      fontSize: sizeText.h26,
      marginRight: paddding.padding60,
      marginTop: paddding.padding75,
    },
    progress: {
      marginRight: paddding.padding60,
    },
    progressTitle: {
      marginBottom: paddding.padding15,
      fontSize: sizeText.h26,
      color: color.brow6,
    },
    rowTitle: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: paddding.padding50,
      marginRight: paddding.padding20,
    },
    title: {
      marginTop: paddding.padding15,
      flex: 80,
      color: color.brow6,
      height: size.sizeTitleMycourse,
      fontSize: sizeText.h36,
      fontWeight: 'bold',
    },
    titleTextLogo: {
      fontSize: scale(basicSize.s50),
      color: '#1a237e',
      fontWeight: 'bold',
    },
    logoSize: {
      marginTop: size.sizeButtonRegister,
      marginBottom: size.sizeSearch,
      resizeMode: 'contain',
      height: size.sizeLogoLogin,
    },
    stripeSize: {
      resizeMode: 'center',
      margin: sizeText.h10,
    },
    loginTextSize: {
      fontSize: scale(43),
      // marginTop:size.sizeStar,
      color: color.orange,
      fontWeight: 'bold',
      margin: size.sizeIconBadge,
    },
    inputTextloginContainer: {
      width: scale(basicSize.s600),
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 2,
      backgroundColor: color.gray1,
      margin: sizeText.h10,
      marginLeft: scale(basicSize.s50),
      marginRight: scale(basicSize.s50),
    },
    checkloginStyle: {
      resizeMode: 'cover',
      flexDirection: 'row',

      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: color.gray2,
      margin: size.sizeStar,
    },
    iconUserStyle: {
      margin: scale(basicSize.h20),
    },
    iconPassStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      margin: scale(basicSize.h20),
    },
    iconInputStyle: {
      width: scale(basicSize.s460),
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    textInputPass: {
      width: scale(460),
      // alignItems:'center',
      // justifyContent:'center',
      textAlign: 'center',
      // backgroundColor:'red',
    },
    checkContainer: {
      flexDirection: 'row',
      width: '100%',
      margin: sizeText.h10,
      alignItems: 'center',
      marginLeft: scale(basicSize.s50),
    },
    loginButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: size.sizeStar,
      width: scale(basicSize.s600),
      borderRadius: size.sizeStar,
      justifyContent: 'center',
      backgroundColor: color.orange,
      margin: size.sizeStar,
    },
    lastLogo: {
      resizeMode: 'stretch',
      marginTop: scale(basicSize.s50),
      width: scale(basicSize.s500),
      height: scale(basicSize.s320),
    },
    loginButton: {
      color: color.white,

      fontSize: scale(basicSize.s40),
    },
    checkText: {
      color: color.orange,
      marginLeft: scale(10),
    },
  }),
};

export const courseManageStyle = {
  Container: {
    backgroundColor: color.gray2,
    height: 1,
  },
  textStyleFlex4: {
    flex: 4,
  },
  DropDownPickerContainerheight: {
    height: 40,
  },
  DropDownPickerJustify: {
    justifyContent: 'flex-start',
  },
  DropDownPickerStyle1: {
    backgroundColor: '#fafafa',
  },
  DropDownPickerStyle2: {
    backgroundColor: '#fafafa',
    borderRadius: 5,
  },
  ContainerWhite: {
    // backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: scale(basicSize.h20),
  },
  titleBack: {
    flex: 0.5,
  },
  titleText: {
    flex: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: color.blue3,
    fontSize: sizeText.h40,
  },
  titleAddKH: {
    flex: 0.5,
  },

  itemContainer: {
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 3,
    padding: sizeText.h24,
    borderColor: color.gray1,
    backgroundColor: color.white,
    margin: sizeText.h18,
  },
  nameCourse: {
    flex: 4,
    fontSize: sizeText.h34,
    color: color.blue3,
    fontWeight: 'bold',
  },

  menuCourse: {
    flex: 1,
    textAlign: 'right',
    marginRight: scale(basicSize.h40),
  },

  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherContainerWifi: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(basicSize.s30),
  },
  CourseNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(basicSize.s30),
  },
  teacherCourseIcon: {},
  containerDetailKH: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1Container: {
    flex: 1,
  },
  flex1Container1: {
    width: sizeWindow.width,
  },
  teacherCourseTitle: {
    padding: sizeText.h12,
    color: color.blue3,
  },
  WifiCourse: {
    padding: sizeText.h12,
    color: color.blue4,
    marginLeft: scale(10),
    fontSize: sizeText.h30,
    fontWeight: 'bold',
  },
  codeStyle: {
    padding: sizeText.h12,
    color: color.orange,
    fontSize: sizeText.h30,
    fontWeight: 'bold',
  },
  codeStyleContainer: {
    padding: scale(4),
    backgroundColor: color.gray1,
    borderRadius: scale(basicSize.s50),
    width: scale(basicSize.s160),
    alignItems: 'center',
  },
  teacherCourseDetail: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: sizeText.h30,
  },
  NameCourseTitle: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: scale(basicSize.s60),
    margin: scale(basicSize.h10),
  },
  cbqlDetail: {
    color: color.orange,
    fontSize: sizeText.h30,
    fontWeight: 'bold',
  },
  timeDetail: {
    color: color.blue4,
    fontSize: sizeText.h30,
    fontWeight: 'bold',
  },
  timeDetail2: {
    color: color.red,
    fontSize: sizeText.h30,
    fontWeight: 'bold',
  },
  containerAdd: {
    margin: scale(basicSize.h10),
    height:scale(sizeDefautft.height - 200),
  },
  titleAdd: {
    fontSize: sizeText.h34,
    color: color.blue3,
    fontWeight: 'bold',
    margin: sizeText.h10,
  },
  inputStyle: {
    borderColor: color.gray2,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(basicSize.s80),
    margin: sizeText.h10,
  },
  datetimeContainer: {
    flexDirection: 'row',
  },
  itemDatime: {
    flex: 1,
  },
  ImageIconDateStyle: {
    width: scale(basicSize.h20),
    height: scale(basicSize.h20),

    flex: 1,
  },
  dropdownStyle: {
    borderColor: color.gray2,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'pink'
  },
  btnSaveStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: scale(basicSize.s320),
    backgroundColor: color.orange,
  },
  btnSaveStyle2: {
    width: scale(basicSize.s320),
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: scale(basicSize.h30),
    fontWeight: 'bold',
  },
  btnTextSave: {
    color: color.white,
    fontSize: sizeText.h40,
    padding: scale(basicSize.h20),
  },
};
export const recommentCoursesStyles = {
  notFound: {
    color: color.black,
    fontSize: sizeText.h26,
  },
  main: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: paddding.padding20,
      paddingBottom: paddding.padding15,
    },
    containerItem: {
      flex: 1,
    },
    item: {
      flex: 3,
      flexDirection: 'row',
    },
  }),
  item: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: paddding.padding15,
      marginTop: paddding.padding40,
    },
    category: {
      padding: paddding.padding5,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: size.widthCategoryRecom,
    },
    category_title: {
      fontSize: sizeText.h26,
      color: color.white,
      paddingLeft: paddding.padding10,
    },
  }),
  item_lesstion: StyleSheet.create({
    container: {
      width: size.widthRecom,
      marginLeft: paddding.padding15,
    },
    image: {
      width: size.widthRecom,
      height: size.heightRecom,
    },
    info: {
      padding: paddding.padding5,
      backgroundColor: color.brow,
      width: '100%',
    },
    info_title: {
      fontWeight: 'bold',
      fontSize: sizeText.h26,
      marginBottom: paddding.padding15,
    },
    info_time: {
      marginTop: paddding.padding15,
      fontSize: sizeText.h20,
      width: '100%',
    },
    info_type: {color: color.blue, fontSize: sizeText.h22},
  }),
};

export const learningStyles = {
  main: StyleSheet.create({
    body: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: color.brow2,
    },
    video: {
      backgroundColor: color.black,
      height: size.sizeVideo,
    },
    intro: {},
    content: {},
    line: {
      backgroundColor: color.brow,
      width: '100%',
      height: size.heightLine,
    },
  }),
  titleCustom: StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: paddding.padding25,
      backgroundColor: color.brow4,
      alignItems: 'center',
    },
    name: {
      color: color.brow3,
      fontSize: sizeText.h38,
    },
    icon: {
      height: size.sizeIcon,
      width: size.sizeIcon,
      marginHorizontal: paddding.padding30,
      resizeMode: 'contain',
    },
  }),
  content: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.brow2,
    },
    title: {
      paddingVertical: paddding.padding20,
      paddingHorizontal: paddding.padding40,
      color: color.brow3,
      fontSize: sizeText.h26,
      fontWeight: 'bold',
    },
    item: {
      color: color.brow3,
      fontSize: sizeText.h26,
    },
  }),
};

export const detailCourseStyles = {
  main: StyleSheet.create({
    scrollView: {
      backgroundColor: '#F5FCFF',
    },
    container: {
      backgroundColor: color.brow2,
      marginBottom: size.sizeButtonRegister,
    },
    video: {
      backgroundColor: color.black,
    },
    intro: {},
    content: {},
    content_title: {
      paddingVertical: paddding.padding25,
      paddingHorizontal: paddding.padding40,
      color: color.brow3,
      fontSize: sizeText.h28,
      fontWeight: 'bold',
    },
    content_item: {
      color: color.brow3,
      fontSize: sizeText.h26,
    },
    line: {
      backgroundColor: color.brow,
      width: '100%',
      height: size.heightLine,
    },
  }),
  buttonRegister: StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      paddingVertical: paddding.padding25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.blue2,
    },
    text: {
      color: color.white,
      fontSize: sizeText.h32,
    },
  }),
  intro: StyleSheet.create({
    buttonMore: {
      color: color.blue,
      fontSize: sizeText.h24,
      marginTop: paddding.padding10,
    },
    info_title: {
      flexDirection: 'row',
      paddingVertical: paddding.padding25,
      paddingHorizontal: paddding.padding30,
      backgroundColor: color.brow4,
    },
    info_title_name: {
      color: color.brow3,
      fontSize: sizeText.h36,
      marginLeft: paddding.padding50,
    },
    info_title_icon: {
      width: size.sizeIcon,
      height: size.sizeIcon,
    },
    info_des: {
      paddingHorizontal: paddding.padding25,
      paddingVertical: paddding.padding25,
    },
    info_des_hide: {
      height: size.heigthDetailCourseIntro,
      width: '100%',
      color: color.brow3,
      fontSize: sizeText.h26,
    },
    info_des_more: {
      width: '100%',
      color: color.brow3,
      padding: 0,
      fontSize: sizeText.h26,
    },
  }),
};
