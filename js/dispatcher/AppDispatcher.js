var Dispacher = require('flux').Dispatcher;
var AppDispatcher = new Dispacher();
AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};
module.exports = AppDispatcher;