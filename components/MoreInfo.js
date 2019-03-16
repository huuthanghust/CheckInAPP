import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class MoreInfo extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam ('name', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: '#4862A3',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 20,
      },
    };
  };

  render () {
    const name = this.props.navigation.getParam ('name');
    const price = this.props.navigation.getParam ('price');
    const model = this.props.navigation.getParam ('model');
    return (
      <View style={styles.main}>
        <View style={styles.subjectSummerizeInfo}>
          <Text style={styles.subjectInfoText}>
            {model}
          </Text>
        </View>
        <View style={styles.touchableOpacityView}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.touchableText}>
              ROLL CALL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => this.props.navigation.navigate ('subjectDetail')}
          >
            <Text style={styles.touchableText}>
              INFORMATION
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text> Click to the roll call button to start</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  main: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  subjectSummerizeInfo: {
    flex: 3,
    margin: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectInfoText: {
    color: '#003365',
    fontSize: 20,
  },
  touchableOpacityView: {
    flex: 2,
  },
  touchableText: {
    fontSize: 23,
    lineHeight: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(159,164,175,.8)',
    color: 'white',
  },
  touchableOpacity: {
    backgroundColor: '#4862A3',
    marginHorizontal: 60,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
});
