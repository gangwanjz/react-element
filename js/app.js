var React = require('react');

var Ajax = require('./utils/reqwest');

var AppActions = require('./actions/AppActions');

var Workspace = require('./components/Workspace');

var workspace = React.render(<Workspace appName="React" />,document.querySelector('body'));
Ajax({
    url: 'js/model.json'
    , type: 'json'
    , method: 'get'
    , contentType: 'application/json'
    , crossOrigin: true
    , withCredentials: true
    , error: function (err) { }
    , success: function (rs) {
        AppActions.receiveAppData(rs.data);
        console.info(workspace);
        console.info(rs);
    }
});

