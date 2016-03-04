import React, { Component, StyleSheet, Text, View, TextInput } from 'react-native';
import * as Colors from '../modules/colors';

const
    styles = StyleSheet.create({
        textInput: {
            height: 40,
            width: 300,
            borderColor: '#333333',
            borderBottomWidth: 20
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
            email: 'E-mail Address',
            password: 'Password'
        };
    },
    componentDidMount() {
    },
    componentDidUpdate(prevProps, prevState) {
    },
    render() {
        return (
            <View>
                <Text>Routine</Text>
                <View
                    style={{borderBottomColor: '#333333', borderBottomWidth: 1}}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        placeholder={this.state.email}
                        value={this.state.email}
                      />
                </View>
                <View
                    style={{borderBottomColor: '#333333', borderBottomWidth: 1}}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                      />
                </View>
            </View>
        );
    }
});

export default _component;
