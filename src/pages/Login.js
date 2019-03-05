
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
        <Logo></Logo>
        <Form></Form>
        <View style={styles.forgotPs}>
        <Text> Forgot your password?</Text>
        </View>
      </View>
      </ScrollView>
      
    );
  }
}

const func = (a) => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
    marginTop: 50,
  },
  forgotPs: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    margin: 16
  }
});
