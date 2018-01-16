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
