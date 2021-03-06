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

import BlinkApp from './StateTest'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Greeting extends Component {
    render() {
        return (
            <Text> Hello {this.props.name}!</Text>
        );
    }
}


export default class App extends Component<{}> {
  render() {
    return (

        <View style={styles.container}>
            <BlinkApp style = {styles.container}></BlinkApp>
        </View>
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
});
