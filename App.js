/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import {Login, MainFeed, CheckIn, TimeSheet, SignUp} from './src/pages';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

const Tabs = createBottomTabNavigator (
  {
    feed: {
      screen: MainFeed,
      navigationOptions: {
        tabBarLabel: 'Thêm',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require ('./src/images/logo.png')}
            style={{
              height: 10,
              width: 10,
              tintColor: tintColor,
            }}
          />
        ),
      },
    },
    checkin: {
      screen: CheckIn,
      navigationOptions: {
        tabBarLabel: 'Thêm',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require ('./src/images/logo.png')}
            style={{
              height: 10,
              width: 10,
              tintColor: tintColor,
            }}
          />
        ),
      },
    },
    timeSheet: {
      screen: TimeSheet,
      navigationOptions: {
        tabBarLabel: 'Thêm',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require ('./src/images/logo.png')}
            style={{
              height: 10,
              width: 10,
              tintColor: tintColor,
            }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: 'orange',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: 'orange',
      showLabel: true,
      showIcon: false,
      labelStyle: {
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'center',
      },
      tabStyle: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    animationEnabled: false,
    lazy: true,
  }
);

const IntroStack = createStackNavigator (
  {
    login: {
      screen: Login,
    },
    signup: {
      screen: SignUp
    }
  }
)

const MainStack = createSwitchNavigator (
  {
    introStack: {
      screen: IntroStack,
      navigationOptions: {
        gesturesEnabled: false,
      }
    },
    main: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false,
      }
    }
  },
  {
    initialRouteName: 'introStack',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const MainStackContainer = createAppContainer (MainStack);

export default class App extends Component {
  render () {
    return (
        <MainStackContainer />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64'
  },
  welcome: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
