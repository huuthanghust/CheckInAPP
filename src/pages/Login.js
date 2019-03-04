
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo></Logo>
        <Form></Form>
        <View style={styles.forgotPs}>
        <Text> Forgot your password?</Text>
        </View>
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
  forgotPs: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    margin: 16
  }
});
