/** Created by Eric on 2018/01/21 ...*/

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var  name = '小明';
const age = '22';
//批量导出
export {
    name,
    age
}

//  导出组件使用 export default
export default class EIComponent extends Component {
    render() {
        return <Text style={{fontSize:20, backgroundColor:'red'}}>
            Hello, {this.props.name}</Text>
    }
}

//导出方法
export function sum(a, b) {
    return a+b;
}
