import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import HeaderButton from './HeaderButton';

export default class AccountSetting extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderButton
                    icon="md-close"
                    onPress={() => goBack()}
                />
                <Text style={styles.header}>
                    Hi,This is future account setting page
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      marginVertical: 20,
    },
  });