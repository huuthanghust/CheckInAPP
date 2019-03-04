
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


export default class Logo extends Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Image style={{ width: 60, height: 90 }} source={require('../images/logo.png')} />
                <Text style = {styles.textCheckIn}>HỆ THỐNG ĐIỂM DANH</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#455A64',
    },
    textCheckIn: {
        fontSize: 17,
        marginVertical: 10,
        color: 'rgba(255,255,255,0.7)'
    }
});
