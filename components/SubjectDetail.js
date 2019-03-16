import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SubjectDetail extends Component {
   static navigationOptions = () => {
        return {
          title: 'Detail',
          headerStyle: {
            backgroundColor: '#4862A3',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
              fontSize: 20
          }
        };
      };
  render () {
    return (
      <View style={styles.main}>
        <Text>
          This is future subject super detail
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
