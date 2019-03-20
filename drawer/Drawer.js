import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Drawer extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            style={styles.userImage}
            source={require ('../images/user.png')}
          />
          <Text style = {styles.textName}>This is future name</Text>
          <Text>Student or Teacher</Text>
        </View>
        <View style={styles.userSetting}>
          <TouchableOpacity style = {styles.touchableOpacity} 
          onPress = {() => this.props.navigation.navigate('AccountSetting')}
          >
            <Text style = {styles.touchableText}>Account Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.touchableOpacity}>
            <Text style = {styles.touchableText}>About us</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 115,
    height: 115, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  userSetting: {
    flex: 1,
  },
  textName: {
    color: '#003365',
    fontSize: 20,
    padding: 15
  },
  touchableText: {
    fontSize: 23,
    fontWeight: 'bold',
    textShadowColor: 'rgba(159,164,175,.8)',
    color: 'white',
  },
  touchableOpacity: {
    backgroundColor: '#4862A3',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
