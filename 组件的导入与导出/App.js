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


import EIComponent, {name, age, sum} from  './EIComponent'


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
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 20}}>名字:{name}</Text>
          <Text style={{fontSize: 20}}>年龄:{age}</Text>
          <Text style={{fontSize: 20}}
                onPress={()=>{
                   var result =sum(2,3);
                   this.setState({
                       result:result,
                   })
                }}
          >2+3={this.state.result}</Text>
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
