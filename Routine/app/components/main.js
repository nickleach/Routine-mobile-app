import React, { Component, StyleSheet, Text, View } from 'react-native';
import * as Colors from '../modules/colors';
import Login from './login';
import RoutinesList from './routinesList';
import Cumulative from './cumulative';
import RoutineBreakdown from './routineBreakdown';
import Registration from './registration';
import NewRoutine from './newRoutine';
import NewSubRoutine from './newSubRoutine';

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.exotic,
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
    statics: {
        title: 'Main',
        description: ''
    },
    propTypes: {
    },

    displayName: 'Main',

    getInitialState() {
        return {
            page: 'login',
        };
    },
    componentDidMount() {
    },
    componentDidUpdate(prevProps, prevState) {
    },
    _getRoute() {
        switch (this.state.page) {
            case 'login':
                return <Login />
                break;
            case 'routinesList':
                return <RoutinesList />
                break;
            case 'cumulative':
                return <Cumulative />
                break;
            case 'routineBreakdown':
                return <RoutineBreakdown />
                break;
            case 'registration':
                return <Registration />
                break;
            case 'newRoutine':
                return <NewRoutine />
                break;
            case 'newSubRoutine':
                return <NewSubRoutine />
                break;
            default: <Login />
        }
    },

    render() {
        const page = this._getRoute();
        return (
            <View style={styles.container}>
                {page}
            </View>
        );
    }
});

export default _component;
