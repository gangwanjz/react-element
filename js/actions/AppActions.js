var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    receiveAppData:function(data){
        AppDispatcher.handleAction({
            actionType:AppConstants.RECEIVE_DATA,
            data:data
        });
    },
    //获取app信息
    selectApp:function(data){

    },
    selectNode:function(data){

    }
};
module.exports = AppActions;