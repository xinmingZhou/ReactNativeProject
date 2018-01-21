/** Created by Eric on 2018/01/21 ...*/

import React, { Component, PropTypes} from 'react';
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


//  方式一 ES6  （推荐）
export default class PropsTest extends Component {
    //定义默认的属性 static defaultProps
    static defaultProps={
      name: "小红",
        age:16
    }

    render() {

        return (
            <View>
                <Text style={{fontSize:20, backgroundColor:'red'}}>
                    姓名:{this.props.name}</Text>
                <Text style={{fontSize:20, backgroundColor:'red'}}>
                    年龄:{this.props.age}</Text>
                <Text style={{fontSize:20, backgroundColor:'red'}}>
                    性别:{this.props.sex}</Text>
            </View>

        )

    }
}
// //属性检查
// PropsTest.propTypes = {
//     name:React.PropTypes.string,
//     age:React.PropTypes.number,
//     //isRequired 必须传
//     sex:React.PropTypes.string.isRequired
// }