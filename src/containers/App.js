import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import Login from './LoginContainer';
import KhoaHoc from './CourseContainer';
import TaoMoi from './CreateCourseContainer';
import BuoiHoc from './BHContainer';

const RootStack = createStackNavigator(
  {
    
    TaoMoi: {
      screen: TaoMoi,
    },
    Login: {
      screen: Login,
    },
    KhoaHoc: {
      screen: KhoaHoc,
    },
    BuoiHoc: {
      screen: BuoiHoc,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
