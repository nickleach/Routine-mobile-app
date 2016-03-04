import React, { Component, StyleSheet, Text, View, Image } from 'react-native';

function createUser({ password, name, username, email }) {
    fetch('https://stark-peak-45925.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            name,
            username,
            email,
        })
    })
    .then((response) => response.text())
    .then((responseText) => {
        console.log(responseText);
    })
    .catch((error) => {
        console.warn(error);
    });
}

function userLogin({ password, username }) {
    fetch('https://stark-peak-45925.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            username,
        })
    })
    .then((response) => response.text())
    .then((responseText) => {
        console.log(responseText);
    })
    .catch((error) => {
        console.warn(error);
    });
}

export {
    createUser,
    userLogin,
}
