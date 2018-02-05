/*
 * @Author: Eric.Zhou 
 * @Date: 2018-02-02 14:58:15 
 * @Last Modified by: Eric.Zhou
 * @Last Modified time: 2018-02-02 16:10:39
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  propTypes,
  Alert,
  Button,
} from 'react-native';

import SearchPage from './SearchPage';
// var SearchPage = require('./SearchPage');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class NavigatorIOSApp extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute = {{
          title: '首页',
          component: SearchPage
        }} />
    );
  }
}

// rootView
 class HelloWorld extends Component {
  render() {
    return (
      <View >
        <Text style={[styles.text,]} 
        onPress={()=>{
          Alert.alert('提示', '消息体', [
            {text: '确定', onPress:()=>console.log('点击了确定')},
            {text: '取消', onPress:()=>{}},
          ])
        }}>
        Hello World!</Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  text: {
    color: 'black',
    
    fontSize: 30,
    margin: 80,
    
  }
});
