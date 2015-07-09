var React = require('react');

/**
 * 头部 包含logo 和 app列表 user app不支持下拉 user支持下拉
 */
var Header = React.createClass({

    getInitialState:function(){
      return {showed:false}
    },
    //渲染 显示
    render:function(){
        var self = this;
        return (
            <div className="app-header navbar">
                <div className="navbar-header bg-dark">
                    <button className="pull-right visible-xs dk" onClick={this._toggleAppList}>
                        <i className="glyphicon glyphicon-cog"></i>
                    </button>
                    <button className="pull-right visible-xs" onClick={this.props.toggleAside}>
                        <i className="glyphicon glyphicon-align-justify"></i>
                    </button>
                    <a href="javascript:;" className="navbar-brand text-lt">
                        <i className="fa fa-leaf"></i>
                        <span className="hidden-folded m-l-xs">{this.props.appName}</span>
                    </a>
                </div>
                <div  className={"collapse navbar-collapse box-shadow bg-primary "+(this.state.showed?'show':"")}>
                    <ul className="nav navbar-nav">
                    {this.props.appList.map(function(app){
                        return <li className={"pos-stc "+(app.selected?'active':'')}  onClick={self._selectHandler.bind(null,app)}>
                            <a href="javascript:;" className="dropdown-toggle">
                                <span>{app.name}</span>
                            </a>
                        </li>;
                    })}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="javascript:;" className="dropdown-toggle clear" data-toggle="dropdown">
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
    _selectHandler:function(app){
        if(app.selected)return;
        var appList = this.props.appList;
        for(var i=0;i<appList.length;i++){
            if(appList[i].code==app.code){
                appList[i].selected = true;
            }else{
                appList[i].selected = false;
            }
        }
        this.setState({appList:appList});
        if(this.props.selectApp){
            this.props.selectApp(app);
        }
    },
    _toggleAppList:function(){
        this.setState({showed:!this.state.showed});
    }
});
module.exports = Header;