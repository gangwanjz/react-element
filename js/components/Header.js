var React = require('react');

/**
 * 头部 包含logo 和 app列表 user app不支持下拉 user支持下拉
 */
var Header = React.createClass({

    //渲染 显示
    render:function(){
        var self = this;
        return (
            <div className="app-header navbar">
                <div className="navbar-header bg-dark">
                    <button className="pull-right visible-xs dk">
                        <i className="glyphicon glyphicon-cog"></i>
                    </button>
                    <button className="pull-right visible-xs">
                        <i className="glyphicon glyphicon-align-justify"></i>
                    </button>
                    <a href="javascript:;" className="navbar-brand text-lt">
                        <i className="fa fa-leaf"></i>
                        <span className="hidden-folded m-l-xs">{this.props.appName}</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse box-shadow bg-primary">
                    <ul className="nav navbar-nav">
                    {this.props.appList.map(function(app){
                        return <li className={"pos-stc"+(self.selected==app.code?'active':'')} code={app.code} onClick={self._selectHandler.bind(null,app.code)}>
                            <a href="javascript:;" className="dropdown-toggle">
                                <span>{app.name}</span>
                            </a>
                        </li>;
                    })}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href className="dropdown-toggle clear" data-toggle="dropdown">
                                <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                    <img src={this.props.user.icon?this.props.user.icon:"img/default_head.png"} alt="..." />
                                    <i className="on md b-white bottom"></i>
                                </span>
                                <span className="hidden-sm">{this.props.user.username}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
    _selectHandler:function(code){
        console.info(code);
        this.setState({selected:code});
        //TODO 回调方法出去
        if(this.props.selectApp){
            this.props.selectApp(code);
        }
    }
});
Header.appItem = React.createClass({

    render:function(){

    }
});
module.exports = Header;