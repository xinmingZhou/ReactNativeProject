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
  View
} from 'react-native';

import HelloComponent from './HelloComponent'
// import LifeCycleComponent from  './LifeCycleComponent'


import PropsTest from  './PropsTest'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props){
       super(props);
       this.state=({
           remove:false,
           result:''

       })
    }

  render() {

        var params={
            name:"小胖",
            age:18,
            sex:"男"
        }
        //解构 获取指定属性
      var {name, sex} = params;
    return (
      <View style={styles.container}>
         <PropsTest
             // name={params.name}
             // sex = {params.sex}

             //延展操作符 {... } 一次性取完所有属性
             // {...params}

             name = {name}
             sex = {sex}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
      marginTop: 50,
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
});
