import React, { Component, StyleSheet, Text, View } from 'react-native';
import * as Colors from '../modules/colors';

const
    styles = StyleSheet.create({
        welcome: {
            fontSize: 55,
            alignSelf: 'center',
            marginTop: 75,
            marginBottom: 50
        },
    }),

_component = React.createClass({
    statics: {
        title: 'Registration',
        description: ''
    },
    displayName: 'Register',
    propTypes: {
    },
    getInitialState() {
        return {
            welcome: 'Routine'
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
            </View>
        );
    }
});

export default _component;
