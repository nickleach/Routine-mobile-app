import React, { Component, StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import * as Colors from '../modules/colors';
import * as ServiceApi from '../modules/serviceApi';

const
    styles = StyleSheet.create({
        touchable: {
            height: 40,
            width: 305,
            position: 'relative',
            marginTop: 25,
        },
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
            borderColor: Colors.darkGry,
        },
        inputBorder: {
            borderBottomColor: Colors.darkGry,
            borderBottomWidth: 1,
            flexDirection: 'row',
        },
        button: {
            width: 305,
            backgroundColor: Colors.darkGry,
            color: 'white',
            height: 40,
            textAlign: 'center',
            paddingTop: 10,
            position: 'absolute'
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
                email: null,
                password: null,
            };
        },
        componentDidMount() {
        },
        componentDidUpdate(prevProps, prevState) {
        },
        _onLogin() {
            ServiceApi.userLogin({ password: this.state.password, email: this.state.email})
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
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={(email) => this.setState({email})}
                            placeholder="E-mail Address"
                            value={this.state.email}
                            clearTextOnFocus={true}
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
                            placeholder="Password"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                          />
                    </View>
                    <TouchableHighlight
                        style={styles.touchable}
                        underlayColor="#a9a9a9"
                        activeOpacity={0.3}
                        onPress={this._onLogin}>
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
