import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image style={{ width: 80, height: 110 }} source={require('../../images/logo.png')} />
                <Text style = {styles.textCheckIn}>HỆ THỐNG ĐIỂM DANH</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#455A64',
    },
    textCheckIn: {
        fontSize: 18,
        marginVertical: 20,
        color: 'rgba(255,255,255,0.7)'
    }
});
