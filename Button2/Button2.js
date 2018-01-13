/**
 *  Eric 2018.1.13
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

export default class Button extends Component<{}> {
    //构造
    constructor(props) {
        super(props);
        //初始状态
        this.state = { status: 1 };
    }

    customPressHandler = () => {
        //自定义的方法，使用属性来定义
        //alert('你按下了按钮,当前状态是 ' + this.state.status)

        //调用从父节点传来的方法
        //解构
        const { dianjishijian } = this.props;
        dianjishijian();
        // 修改了取消按钮的点击事件，确定按钮会奔溃
    };

    render() {
        //解构
        const { text, beijingyanse } = this.props;

        return (
            <View style={styles.container}>


                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: beijingyanse}]}
                    // 箭头函数
                    // onPress={()=> {alert(1)}}
                    // 自定义方法
                    onPress={this.customPressHandler}
                >
                    <Text style = {styles.buttonText}>{this.props.text}</Text>

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
