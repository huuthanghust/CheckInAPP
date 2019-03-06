/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {Login, MainFeed} from './src/pages';
import { createSwitchNavigator, createAppContainer} from "react-navigation";

const MainStack = createSwitchNavigator({
    login: Login,
    main: MainFeed
});

const MainStackContainer = createAppContainer(MainStack);

export default class App extends Component {
  
  render() {
    console.log("AppComponent : render()");
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#1c313a'
          barStyle="light-content">
        </StatusBar>
        <MainStackContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    color: '#FFFFFF'
  }
});
