import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class CheckIn extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.mainFeed}> Check in here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  mainFeed: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
