## 组件的流转

dispatcher --> store --> view --> action -->dispatcher

1、需要能向外派发时间

    派发事件需要dispatcher 复杂的需要 不负责的直接套用进去吧

2、可以传入参数进行渲染显示

    每个element都需要一个store 来渲染

3、view 本身就是来显示的 node

    对于业务一级的view需要一个action来处理事件


4、view下边包含了组件

    component 本身通过回调来做吧 



