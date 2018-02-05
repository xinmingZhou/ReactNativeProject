/*
 * @Author: Eric.Zhou 
 * @Date: 2018-02-02 15:45:55 
 * @Last Modified by: Eric.Zhou
 * @Last Modified time: 2018-02-02 17:04:17
 */

'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
} from 'react-native';

// require('image!house') 语句用于确定在你应用的 asset 目录下的图片资源

export default class SearchPage extends Component {

constructor(props){
    super(props);
    //初始化一个属性 searchString
    this.state = {
        searchString: 'london'
    }
}
// 方法 从 events 中取出了 text 属性的值，并用于更新组件的状态
// 当文字改变时，需要让这个方法被调用，调用后的文字会通过 render 函数返回到组件中。因此我们需要在标签上添加一个 onChange 属性
// this.onSearchTextChanged.bind(this)  bind 可以确保在 onSearchTextChanged 方法中, this 可以作为组件实例的引用
onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({searchString: event.nativeEvent.text});
    console.log(this.state.searchString)

}

    render(){
        console.log('SearchPage.render');
        return (
            <View style = {styles.container}>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name, postcode or search near your location.</Text>
                
                <View style={styles.flowRight}>
                    <TextInput 
                        style={styles.searchInput}
                        value={this.state.searchString}
                        onChange={this.onSearchTextChanged.bind(this)}
                        placeholder='Search via name or postcode'></TextInput>
                    <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>
                <View  style={styles.flowRight}>
                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>
                </View>
                
                {/* <Image source={require('image!house')} style={styles.image}></Image> */}
                
                

                
            </View>
        )
    }
}


var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48bbec',
        borderColor: '#48bbec',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    image: {
        width: 217,
        height: 138
    }
})

