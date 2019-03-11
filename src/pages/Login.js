import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, ScrollView} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  signUp () {
    // alert ('Pressed');
    this.props.navigation.navigate("signup");
  }

  render () {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Logo />
          <Form navigation={this.props.navigation} />
          <View style={styles.forgotPs}>
            <Text> Forgot your password?</Text>
            <TouchableOpacity style = {styles.button}
              onPress={() => {
                this.signUp ();
              }}
            >
              <Text style = {styles.buttonText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const func = a => {};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  },
  forgotPs: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: 300,
    color: '#ffffff',
    borderRadius: 23,
    padding: 13,
    margin: 10,
    backgroundColor: '#1c313a',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
  },
});
