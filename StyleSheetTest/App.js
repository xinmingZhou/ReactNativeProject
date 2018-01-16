/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';

import StyleSheetTest from './StyleSheetTest'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
        <StyleSheetTest></StyleSheetTest>


    );


  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 10
    },
    red: {
        color: 'red',
    },
});
