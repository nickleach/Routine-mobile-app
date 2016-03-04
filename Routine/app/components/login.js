import React, { Component, StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import * as Colors from '../modules/colors';

const
    styles = StyleSheet.create({
        welcome: {
            fontSize: 55,
            alignSelf: 'center',
            marginTop: 75,
            marginBottom: 50
        },
        textInput: {
            height: 40,
            width: 300,
            borderColor: '#333333',
            borderBottomWidth: 20
        },
        inputBorder: {
            borderBottomColor: '#333333',
            borderBottomWidth: 1
        },
        button: {
            width: 300,
            backgroundColor: '#333333',
            color: 'white',
            height: 40,
            textAlign: 'center',
            marginTop: 25,
            paddingTop: 10
        },
        or: {
            alignSelf: 'center',
            marginTop: 40,
            marginBottom: 40,
            fontSize: 20
        },
        image: {
            width: 300,
            height: 40,
        }
    }),
    facebookLogin = {uri: '../assets/facebookLogin.png'},

_component = React.createClass({
    statics: {
        title: 'Login',
        description: ''
    },
    displayName: 'Login',
    propTypes: {
    },
    getInitialState() {
        return {
            welcome: 'Routine',
            email: 'E-mail Address',
            password: 'Password'
        };
    },
    onLogin() {
        console.log('pressing login button');
    },
    componentDidMount() {
    },
    componentDidUpdate(prevProps, prevState) {
    },
    render() {
        return (
            <View>
                <Text
                    style={styles.welcome}>
                    {this.state.welcome}
                </Text>
                <View
                    style={styles.inputBorder}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        placeholder={this.state.email}
                        value={this.state.email}
                      />
                </View>
                <View
                    style={styles.inputBorder}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                      />
                </View>
                <TouchableHighlight
                    underlayColor="#a9a9a9"
                    onPress={this.onLogin()}>
                    <Text
                        style={styles.button}>
                        Login
                    </Text>
                </TouchableHighlight>
                <Text
                    style={styles.or}>
                    or
                </Text>
                <Image
                    style={styles.image}
                    source={require('../assets/facebooklogin.png')} />
            </View>
        );
    }
});

export default _component;
