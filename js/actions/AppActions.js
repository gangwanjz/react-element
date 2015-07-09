var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    receiveAppData:function(data){
        AppDispatcher.handleAction({
            actionType:'111',
            data:data
        });
    }
};
module.exports = AppActions;