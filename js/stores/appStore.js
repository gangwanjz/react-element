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
    }

});
AppDispatcher.register(function(payload){
    var action = payload;
    switch (action.actionType){
        case AppConstants.RECEIVE_DATA :
            loadAppData(action.data);
            break;
    }
    return true;
});

module.exports = AppStore;
