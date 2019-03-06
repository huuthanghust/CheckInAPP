
import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            
        }
    }
    login() {
        this.props.navigation.navigate("main");
    }
    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    render() {
        return (
                <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email"></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={this.state.showPassword}
                    onChangeText={(password) => this.setState({ password })}></TextInput>
                <TouchableOpacity style={styles.button} onPress={ () => {
                    this.login();
                }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255 , 255, 0.3)',
        borderRadius: 23,
        margin: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff'
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
        color: "rgba(255,255,255,0.7)"
    }
});
