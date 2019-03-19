import React, {Component} from 'react';
import 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import BasicFlatList from './BasicFlatList';
import MoreInfo from './MoreInfo';
import SubjectDetail from './SubjectDetail';
import AccountSetting from '../drawer/AccountSetting';
import Drawer from '../drawer/Drawer';

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
const MainStackContainer = createAppContainer (mainStackWithDRawerandTabs);

export default class App extends Component {
  render () {
    return <MainStackContainer />;
  }
}
