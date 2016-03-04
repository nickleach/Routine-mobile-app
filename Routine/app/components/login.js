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
        icon: {
            width: 20,
            height: 20,
            alignSelf: 'center',
            marginRight: 10
        },
        textInput: {
            height: 40,
            width: 275,
            borderColor: '#333333',
            borderBottomWidth: 20
        },
        inputBorder: {
            borderBottomColor: '#333333',
            borderBottomWidth: 1,
            flexDirection: 'row',
        },
        button: {
            width: 305,
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
            width: 305,
            height: 40,
        }
    }),

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
    onLogin(email, password) {
        console.log(email, password);
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
                    <Image
                    style={styles.icon}
                    source={require('../assets/email.png')} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({username})}
                        placeholder="E-mail Address"
                        value={this.state.username}
                      />
                </View>
                <View
                    style={styles.inputBorder}>
                    <Image
                    style={styles.icon}
                    source={require('../assets/password.png')} />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                      />
                </View>
                <TouchableHighlight
                    underlayColor="#a9a9a9"
                    onPress={this.onLogin(this.state.username, this.state.password)}>
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
