var React = require('react');

/**
 * 左边栏 支持分组和二级分组 点击事件派发出来
 */
var Aside = React.createClass({

    render:function(){
        return (
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
        );
    }
});

module.exports = Aside;