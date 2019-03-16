import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Drawer extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text>
          Drawer
        </Text>
        <Button onPress={() => navigate ('')} title="Setting" />
        <Button onPress={() => navigate ('')} title="About us" />
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