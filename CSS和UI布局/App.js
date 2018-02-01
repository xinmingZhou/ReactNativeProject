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
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      // <View style = {{height: 40, borderWidth: 1, borderColor: 'red', marginTop: 20}}>
      //     <Text style = {{justifyContent: 'center',textAlign: 'center',marginTop: 10, backgroundColor: 'gray'}}>首页</Text>
        
      // </View>

      // 1 flex 属性表示改元素是可伸缩的
      // <View style = {styles.style_0}>
      //     <View style = {styles.style_1}/>
      //     <View style = {styles.style_1}/>
      //     <View style = {{flex: 10, borderColor: 'blue', borderWidth: 1}}/>
      // </View>

      // 2 flexDirection 在React-Native中只有两个属性，一个是row(横向伸缩)和column(纵向伸缩)
      // <View style = {styles.style_0}>
      //     <View style = {styles.style_1}>
      //     <Text style = {{marginTop: 40, fontSize: 25}}> 1 / 4高</Text>
      //     <Text style = {{marginTop: 40, fontSize: 25}}> 1 / 4高</Text>
      //     </View>
      //     <View style = {[styles.style_1, {flexDirection: 'column'}]}>
      //     <Text style = {{marginTop: 40, fontSize: 25}}> 1 / 4高</Text>
      //     <Text style = {{marginTop: 40, fontSize: 25}}> 1 / 4高</Text>
      //     </View>
      //     <View style = {{flex: 10, borderWidth: 1, borderColor: 'red',}}>
      //     <Text style = {{marginTop: 40, fontSize: 25}}> 1 / 2高</Text>
      //     </View>
      // </View>


      // 3 alignSelf:对齐方式
      // alignSelf的对齐方式主要有四种：flex-start、 flex-end、 center、  auto、 stretch
      // <View style = {styles.style_0}>
      //     <View style = {[styles.view]}>
      //         <Text>自由摆放</Text>
      //     </View>
      //     <View style = {[styles.view, styles.center]}>
      //         <Text>居中摆放</Text>
      //     </View>
      //     <View style = {[styles.view, styles.left]}>
      //         <Text>居左摆放</Text>
      //     </View>
      //     <View style = {[styles.view, styles.right]}>
      //         <Text>居右摆放</Text>
      //     </View>

      // </View>

      // 4 水平垂直居中
      // alignItems是alignSelf的变种，跟alignSelf的功能类似，可用于水平居中；justifyContent用于垂直居中，属性较多，可以了解下
      <View style = {styles.style_0}>
          <View style = {styles.view}>
            <Text>方块居中</Text>
          </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  // style_0: {
  //   flex: 1
  // },
  // 2
  // style_1: {
  //   flex: 5,
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: 'red'
  // },
  // style_1: {
  //   flex: 5,
  //   flexDirection: 'row',
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: 'red'
  // }

  // 3
  // style_0: {
  //   flex: 1,
  //   borderColor: 'red',
  //   borderWidth: 1,
  // },
  // view: {
  //   borderWidth: 5,
  //   borderColor: 'blue',
  //   width: 100,
  //   height: 40
  // },
  // center: {
  //   alignSelf: 'center'
  // },
  // left: {
  //   alignSelf: 'flex-start'
  // },
  // right: {
  //   alignSelf: 'flex-end'
  // }

  // 4
  style_0: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    borderWidth: 3,
    borderColor: 'blue',
    height: 50
  }

});
