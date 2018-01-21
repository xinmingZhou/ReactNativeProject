/** Created by Eric
 createTime: 2018/1/21 14:00
 description:
 *
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
        console.log('----constructor---')
        this.state= {
            count:0,
        }
    }

    componentWillMount() {
        //服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。
        console.log('----componentWillMount---')
    }
    componentDidMount() {
        //在初始化渲染执行之后立刻调用一次，仅客户端有效
        console.log('----componentDidMount---')
    }
    componentWillReceiveProps(nextProps) {
        //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
        console.log('----componentWillReceiveProps---')
    }
    shouldComponentUpdate(nextProps, nextState) {
        //在接收到新的 props 或者 state，将要渲染之前调用。
        console.log('----shouldComponentUpdate---')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        // 在接收到新的 props 或者 state 之前立刻调用
        console.log('----componentWillUpdate---')
    }
    componentDidUpdate (prevProps, prevState) {
     // 在组件的更新已经同步到 DOM 中之后立刻被调用
        console.log('----componentDidUpdate---')

    }
    componentWillUnmount() {
        //在组件从 DOM 中移除的时候立刻被调用
        console.log('----componentWillUnmount---')
    }

    render() {
        console.log('----render---')
        return <View>
            <Text style={{fontSize:20, backgroundColor:'red'}}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,

                    })
                }}
            >有本事你打我呀 </Text>
            <Text style={{fontSize: 20}}>被打了 {this.state.count}次</Text>
        </View>
    }
}

