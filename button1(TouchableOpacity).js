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
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	//构造
	constructor(props) {
		super(props);
		//初始状态
		this.state = { status: 1 };
	}

  customPressHandler = () => {
  	//自定义的方法，使用属性来定义
  	alert('你按下了按钮,当前状态是 ' + this.state.status)

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <TouchableOpacity 
        style = {styles.button}
        // 箭头函数
        // onPress={()=> {alert(1)}}
        // 自定义方法
        onPress={this.customPressHandler}

        >
          <Text style = {styles.buttonText}>确定</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

	button: {
	  height: 40,
	  width: 100,
	  borderRadius: 20,
	  backgroundColor: 'green',
	  justifyContent: 'center',
	  
	},
	buttonText: {
	  textAlign: 'center',
	  color: 'white',
	},
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
});
