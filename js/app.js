var React = require('react');

//var M = require('./utils/M');

var AppActions = require('./actions/AppActions');

var Workspace = require('./components/workspace/Workspace');

var workspace = React.render(<Workspace />,document.querySelector('body'));
AppActions.receiveAppData({});
////远程获取数据 获取成功后并返回给AppActions
//M.rcc.get('url',{},function(data){
//    //获取数据给actions
//    AppActions.receiveAppData(data);
//});


