import React, {Component} from 'react';
import 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';
import BasicFlatList from './BasicFlatList';
import MoreInfo from './MoreInfo';
import SubjectDetail from './SubjectDetail';
import AccountSetting from '../drawer/AccountSetting';
import Drawer from '../drawer/Drawer';
import Login from '../login/Login';

const mainStack = createStackNavigator ({
  basicFlatList: {
    screen: BasicFlatList
  },
  moreInfo: {
    screen: MoreInfo,
  },
  subjectDetail: {
    screen: SubjectDetail,
  },
});

const mainStackWithDrawer = createDrawerNavigator (
  {
    main: {
      screen: mainStack,
    },
  },
  {
    contentComponent: props => <Drawer {...props} />,
    contentOptions: {
      style: {
        backgroundColor: '#113A5A'
      }
    }
  }
);

const mainStackWithDRawerandTabs = createStackNavigator (
  {
    DrawerWithTabs: {
      screen: mainStackWithDrawer,
    },
    AccountSetting: {
      screen: AccountSetting,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const MainStackContainerWithLogin = createSwitchNavigator({
  login: {
    screen: Login
  },
  mainStackWithDRawer: {
    screen: mainStackWithDRawerandTabs
  }
});

const MainStackContainer = createAppContainer (MainStackContainerWithLogin);

export default class App extends Component {
  render () {
    return <MainStackContainer />;
  }
}
