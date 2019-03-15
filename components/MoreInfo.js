import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class MoreInfo extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam ('name', 'A Nested Details Screen'),
    };
  };

  render () {
    const name = this.props.navigation.getParam ('name');
    return (
      <View style={styles.main}>
        <View style = {styles.subjectSummerizeInfo}>

        </View>
        <View style = {styles.touchableOpacityView}>
        <TouchableOpacity style = {styles.touchableOpacity}>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.touchableOpacity}>
        
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touchableOpacity}>
        
        </TouchableOpacity>
        </View>
        <View style = {styles.footer}>
        <Text> Click to the roll call button to start</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create ({
  main: {
    flex: 1,
    backgroundColor: '#E6E6E6'
  },
  subjectSummerizeInfo: {
      flex: 2,
      margin: 35,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 1.0,
  },
  touchableOpacityView: {
      flex: 3
  },
  touchableOpacity: {
      backgroundColor: 'white',
      marginHorizontal: 60,
      borderRadius: 10,
      padding: 30,
      marginVertical: 5,
  },
  footer: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 20
  }

});
