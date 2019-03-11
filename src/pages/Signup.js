
import React, { Component } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, ScrollView } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  signIn() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
        <Logo></Logo>
        <Form navigation={this.props.navigation}></Form>
        <View style={styles.forgotPs}>
        <Text> Already have account?</Text>
        <TouchableOpacity onPress = { () => {
          this.signIn();
        }}>
        <Text> Log in</Text>
        </TouchableOpacity>
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
    backgroundColor: '#455A64'
  },
  forgotPs: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  }
});
