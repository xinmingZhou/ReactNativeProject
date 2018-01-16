/**
 * StyleSheet
 * Eric 2018.1.16
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,

} from 'react-native';

// import BlinkApp from './StateTest'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class StyleSheetTest extends Component<{}> {
    render() {
        return (
            // 多种style要用数组包起来
            <View style={styles.container}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}
                      onPress={()=>{
                          alert('111111')
                      }}
                >just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

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
