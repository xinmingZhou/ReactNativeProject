/*
*   State（状态）
*   Eric 2018.1.16
*/

import React, { Component} from 'react';
import {
    Text,
    View
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //每1000毫秒对showText状态做一次去反
        setInterval( ()=> {
            this.setState(previousState => {
                return { showText: !previousState.showText};
            });

        }, 3000);
    }

    render() {
        //根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text: '';
        return (
            <Text> {display}</Text>
        );
    }

}

export default class  BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I Love to blink' ></Blink>
                <Blink text='Yes blinking is go great' ></Blink>
                <Blink text='Why did they ever take this out of HTML' ></Blink>
                <Blink text='Look at me look at me look at me' ></Blink>

            </View>
        );

    }
}