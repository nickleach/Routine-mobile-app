import React, { Component, StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import * as Colors from '../modules/colors';
import * as ServiceApi from '../modules/serviceApi';

const
    styles = StyleSheet.create({
        welcome: {
            fontSize: 55,
            alignSelf: 'center',
            marginTop: 75,
        },
        subHeader: {
            fontSize: 20,
            alignSelf: 'center',
            marginBottom: 30
        },
        textInput: {
            height: 40,
            width: 305,
            borderColor: '#333333',
        },
        inputBorder: {
            borderBottomColor: '#333333',
            borderBottomWidth: 1,
            marginBottom: 5
        },
        touchable: {
            height: 40,
            width: 305,
            position: 'relative',
            marginTop: 25,
        },
        button: {
            width: 305,
            backgroundColor: '#333333',
            color: 'white',
            height: 40,
            textAlign: 'center',
            paddingTop: 10,
            position: 'absolute'
        },
        image: {
            marginTop: 20,
            width: 305,
            height: 40,
        }
    }),

_component = React.createClass({
    statics: {
        title: 'Registration',
        description: ''
    },
    displayName: 'Register',
    propTypes: {
    },
    _onRegister() {
        ServiceApi.createUser({
            password: this.state.password,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        })
    },
    getInitialState() {
        return {
            welcome: 'Routine',
            name: 'Name (first, last)',
            email: 'E-mail Address',
            password: 'Password',
            username: 'filler'
        };
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
                <Text 
                    style={styles.subHeader}>
                    Register
                </Text>
                <View
                    style={styles.inputBorder}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(name) => this.setState({name})}
                        placeholder="Name (first, last)"
                        value={this.state.name}
                        clearTextOnFocus={true}/>
                </View>
                <View
                    style={styles.inputBorder}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        placeholder="E-mail Address"
                        value={this.state.email}
                        clearTextOnFocus={true}/>
                </View>
                <View
                    style={styles.inputBorder}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}/>
                </View>
                <TouchableHighlight
                    style={styles.touchable}
                    underlayColor="#a9a9a9"
                    activeOpacity={0.3}
                    onPress={this._onRegister}>
                    <Text
                        style={styles.button}>
                        Register
                    </Text>
                </TouchableHighlight>
                <Image
                    style={styles.image}
                    source={require('../assets/facebooklogin.png')} />
            </View>
        );
    }
});


export default _component;
