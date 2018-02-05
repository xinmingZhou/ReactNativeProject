# ReactNativeProject

记录ReactNative的学习过程，保存一些Demo


## button1
在页面上创建一个按钮

## 抽离Button
把button单独封装成一个组件

## Button2 
自定义了button的属性（props）和方法

## State(状态)
我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state。

一般来说，你需要在 constructor 中初始化state（译注：这是 ES6 的写法，早期的很多 ES5 的例子使用的是 getInitialState 方法来初始化 state，这一做法会逐渐被淘汰），然后在需要修改时调用setState方法。

假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个prop。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到state中。

## StyleSheetTest
style属性可以是一个普通的 JavaScript 对象。这是最简单的用法，因而在示例代码中很常见。你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。

实际开发中组件的样式会越来越复杂，我们建议使用StyleSheet.create来集中定义组件的样式。

## LifeCycleComponent
组件的生命周期

## CSS和UI布局
1 flex ：属性表示改元素是可伸缩的

2 flexDirection： 在React-Native中只有两个属性，一个是row(横向伸缩)和column(纵向伸缩)

3 alignSelf: 对齐方式
   alignSelf的对齐方式主要有四种：flex-start、 flex-end、 center、  auto、 stretch
   
4 水平垂直居中：
   alignItems是alignSelf的变种，跟alignSelf的功能类似，可用于水平居中；justifyContent用于垂直居中，属性较多，可以了解下
   
## 布局实战一

## 创建导航页面
创建导航栏， Navigator的使用

## 搜索页面事件绑定
touchableHight的事件绑定
