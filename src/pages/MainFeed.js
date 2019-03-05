import React, {Component} from 'react'
import {
 View, StyleSheet, Text
} from 'react-native';

export default class MainFeed extends Component {
    render() {
        return (
            <View>
                <Text style = {styles.mainFeed}> This is the main feed</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainFeed: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});