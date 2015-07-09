var React = require('react');
var AppStore = require('../../stores/AppStore');

function getAppData(){
    return {data:AppStore.getAppData()};
}

var Workspace = React.createClass({

    getInitialState:function(){
        return getAppData();
    },
    componentDidMount:function(){
        //TODO 侦听change事件 app node
        //初始化 直接给了data  包含app  node  默认选择的app
        AppStore.addListener('data-change',this._dataChange);
    },
    componentWillUnmount:function(){
        AppStore.removeListener('data-change',this._dataChange);
    },
    render: function() {
        return (
            <div className="app app-header-fixed app-aside-fixed">
                <div className="app-header navbar">
                    <div className="navbar-header bg-dark">
                        <button className="pull-right visible-xs dk">
                            <i className="glyphicon glyphicon-cog"></i>
                        </button>
                        <button className="pull-right visible-xs">
                            <i className="glyphicon glyphicon-align-justify"></i>
                        </button>
                        <a href="#/" className="navbar-brand text-lt">
                            <i className="fa fa-leaf"></i>
                            <span className="hidden-folded m-l-xs">React</span>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse box-shadow bg-white-only">
                        <div className="nav navbar-nav m-l-sm hidden-xs">
                            <a href className="btn no-shadow navbar-btn">
                                <i className="fa fa-indent fa-fw"></i>
                            </a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href className="dropdown-toggle">
                                    <i className="icon-bell fa-fw"></i>
                                    <span className="visible-xs-inline">app1</span>
                                    <span className="badge badge-sm up bg-danger pull-right-xs">2</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href className="dropdown-toggle clear" data-toggle="dropdown">
                                    <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                        <img src="img/default_head.png" alt="..." />
                                        <i className="on md b-white bottom"></i>
                                    </span>
                                    <span className="hidden-sm hidden-md">username</span>
                                    <b className="caret"></b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-aside hidden-xs bg-dark">
                    <div className="aside-wrap">
                        <div className="navi-wrap">
                            <nav className="navi clearfix">
                                <ul className="nav">
                                    <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                        <span>Navigation</span>
                                    </li>
                                    <li className="active">
                                        <a href className="auto">
                                            <span className="pull-right text-muted">
                                                <i className="fa fa-fw fa-angle-right text"></i>
                                                <i className="fa fa-fw fa-angle-down text-active"></i>
                                            </span>
                                            <b className="badge bg-info pull-right">8</b>
                                            <i className="glyphicon glyphicon-send text-primary-dker"></i>
                                            <span>发起新流程</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            <li className="nav-sub-header">
                                                <a href ui-sref="">
                                                    <span>node1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a ui-sref="">
                                                    <span>node2</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a ui-sref="">
                                                    <span>node3</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="app-content">
                    <div ui-butterbar></div>
                    <a href className="off-screen-toggle hide" ></a>
                    <div className="app-content-body fade-in-up" ></div>
                </div>
                <div className="app-footer wrapper b-t bg-light">
                    <span className="pull-right">version<a href ui-scroll="app" className="m-l-sm text-muted"><i className="fa fa-long-arrow-up"></i></a></span>
                &copy; 2015 Copyright.
                </div>
            </div>
        );
    },
    _dataChange:function(){
        this.setState(getAppData());
    }


});
module.exports = Workspace;