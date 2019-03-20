import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, ScrollView} from 'react-native';

import Logo from './components/Logo';
import Form from './components/Form';

export default class Login extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  render () {
    return (
        <View style={styles.container}>
          <Logo />
          <Form navigation={this.props.navigation} />
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  }
});
