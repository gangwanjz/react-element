var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var _appData = [];
function loadAppData(data){
    _appData = data;
}
/**
 *  处理数据交互方面的问题
 */
var AppStore = _.extend({},EventEmitter.prototype,{

    getAppData:function(){
        return _appData;
    },
    addListener:function(actionType,callback){
        this.on(actionType,callback);
    },
    removeListener:function(actionType,callback){
        this.removeListener(actionType, callback);
    },
    emitHandle:function(actionType){
        this.emit(actionType);
    }

});
AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.RECEIVE_DATA :
            loadAppData(action.data);
            AppStore.emitHandle('data-change');
            break;
    }
    return true;
});

module.exports = AppStore;
