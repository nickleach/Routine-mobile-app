import React, { AppRegistry, Component, StyleSheet, Text, View, Navigator } from 'react-native';
import Main from './app/components/main';

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    }),
    _component = React.createClass({
        render() {
            let page = (<Main />);
            return (
                page
            );
        }
    });


AppRegistry.registerComponent('Routine', () => _component);
