var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var Header = require("./Header");
var Aside = require("./Aside");

function getAppData(){
    var data = AppStore.getAppData();
    return {app:data.app||[],node:data.node||[],user:data.user||{}};
}

var Workspace = React.createClass({

    getInitialState:function(){
        //包含app  node  user  selected
        return getAppData();
    },
    componentDidMount:function(){
        //初始化 直接给了data  包含app  node  默认选择的app
        AppStore.addListener('data-change',this._dataChange);
        //更新node List的显示
        AppStore.addListener('update-node',this._updateNode);
        //更新content 的显示
        AppStore.addListener('update-content',this._updateContent);
    },
    componentWillUnmount:function(){
        AppStore.removeListener('data-change',this._dataChange);
    },
    render: function() {
        return (
            <div className="app app-header-fixed app-aside-fixed">
                <Header appName={this.props.appName}
                    appList = {this.state.app}
                    user = {this.state.user}
                    selectApp = {this._selectAppHandler}
                />
                <Aside />
                <Workspace.Content />
                <Workspace.Footer />
            </div>
        );
    },
    _dataChange:function(){
        this.setState(getAppData());
    },
    _selectAppHandler:function(code){
        AppActions.selectApp(code);
    },
    _updateNode:function(){
        console.info('update node list');
    },
    _updateContent:function(){
        console.info('update content');
    }

});
/**
 * 内容显示区域
 */
Workspace.Content = React.createClass({

    render:function(){
        return <div className="app-content">
            <div ui-butterbar></div>
            <a href className="off-screen-toggle hide" ></a>
            <div className="app-content-body fade-in-up" ></div>
        </div>;
    }
});
/**
 * Footer显示区域
 */
Workspace.Footer = React.createClass({
    render:function(){
        return <div className="app-footer wrapper b-t bg-light">
            <span className="pull-right">version<a href ui-scroll="app" className="m-l-sm text-muted"><i className="fa fa-long-arrow-up"></i></a></span>
        &copy; 2015 Copyright.
        </div>;
    }
});

module.exports = Workspace;