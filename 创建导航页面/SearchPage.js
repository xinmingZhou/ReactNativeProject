/*
 * @Author: Eric.Zhou 
 * @Date: 2018-02-02 15:45:55 
 * @Last Modified by: Eric.Zhou
 * @Last Modified time: 2018-02-02 16:11:19
 */

'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
} from 'react-native';

export default class SearchPage extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name, postcode or search near your location.</Text>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    }
})

