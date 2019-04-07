import React, {Component} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';

export default class Form extends Component {
  constructor (props) {
    super (props);
    this.state = {
      credentials: {
        email: '',
        password: '',
      },
    };
  }

  updateText (text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState ({
        credentials: newCredentials
    })
  }

  login () {
    fetch(config.baseUrl + 'login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            this.state.credentials
        ),
      })
      .then((response) => response.json())
      .then ((responseJson) => {
        console.log("data json", responseJson);
        console.log("accountId ", responseJson.id);
        console.log("role ", responseJson.role);
        if (responseJson.id !=null){
          this.props.navigation.navigate ('mainStackWithDRawer', {role: responseJson.role, accountID: responseJson.id});
        }
        else {
          alert("Đăng nhập không thành công");
        }
        
      })
      .catch(err => {
          alert(err);
      });
  }
  toggleSwitch () {
    this.setState ({showPassword: !this.state.showPassword});
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput 
        onChangeText = {text => this.updateText(text, 'email')}
        style={styles.inputBox} 
        placeholder="Email" />
        <TextInput
          onChangeText={text => this.updateText (text, 'password')}
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.login ();
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#455A64',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255 , 255, 0.3)',
    borderRadius: 23,
    margin: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
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
