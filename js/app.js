var React = require('react');

var Workspace = require('./components/Workspace');

var Server = require('./utils/AppServer');

window.workspace = React.render(<Workspace appName="React" />,document.querySelector('body'));

Server.getAppData();


