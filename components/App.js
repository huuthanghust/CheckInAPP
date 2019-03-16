import React, {Component} from 'react';
import 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import BasicFlatList from './BasicFlatList';
import MoreInfo from './MoreInfo';
import SubjectDetail from './SubjectDetail';

const mainStack = createStackNavigator ({
  basicFlatList: {
    screen: BasicFlatList,
    navigationOptions: () => ({
      title: 'All Subject',
    }),
  },
  moreInfo: {
    screen: MoreInfo,
  },
  subjectDetail: {
    screen: SubjectDetail,
  },
});

const MainStackContainer = createAppContainer (mainStack);

export default class App extends Component {
  render () {
    return <MainStackContainer />;
  }
}
