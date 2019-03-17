import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Drawer extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text>
          This is Drawer
        </Text>
        <Button onPress={() => navigate ('AccountSetting')} title="Setting Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
});