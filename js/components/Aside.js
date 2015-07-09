
var React = require('react');

/**
 * 获取node
 */
function findNode(code,nodeList,nodeParent){
    if(!nodeList) return;
    var node;
    if(nodeParent){
        nodeParent
    }
    for(var i=0;i<nodeList.length;i++){
        if(nodeList[i].code==code){

        }
    }
}

/**
 * 左边栏 支持分组和二级分组 点击事件派发出来
 */
var Aside = React.createClass({

    render:function(){
        var self = this;
        return (
            <div className="aside-wrap">
                    <div className="navi-wrap">
                        <nav className="navi clearfix">
                            <ul className="nav">
                            {this.props.nodeList.map(function(node){
                                if(node&&node.type=="node"){
                                    return <li className={node.opened?'active':''} onClick={self._selectHandler.bind(null,node,null)}>
                                        <a href="javascript:;" className="auto">
                                            <b className="badge bg-info pull-right">{node.number}</b>
                                            <i className={"glyphicon "+(node.icon?"glyphicon-"+node.icon:"")}></i>
                                            <span>{node.name}</span>
                                        </a>
                                    </li>;
                                }else if(node&&node.type=="folder"){
                                    return <li className={node.opened?'active':''}>
                                        <a href="javascript:;"  onClick={self._toggleList.bind(null,node)}>
                                            <span className="pull-right text-muted">
                                                <i className={"fa fa-fw fa-angle-right "+(node.opened?'text-active':'text')}></i>
                                                <i className={"fa fa-fw fa-angle-down "+(!node.opened?'text-active':'text')}></i>
                                            </span>
                                            <b className="badge bg-info pull-right">{node.number}</b>
                                            <i className={"glyphicon "+(node.icon?"glyphicon-"+node.icon:"")}></i>
                                            <span>{node.name}</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            {node.children.map(function(item){
                                                return <li  onClick={self._selectHandler.bind(null,item,node)}>
                                                    <a href="javascript:;">
                                                        <span>{item.name}</span>
                                                    </a>
                                                </li>;
                                            })}
                                        </ul>
                                    </li>;
                                }
                            })}
                            </ul>
                        </nav>
                    </div>
                </div>
        );
    },
    _selectHandler:function(node,nodeParent){
        if(node.opened) return;
        var nodeList = this.props.nodeList;
        if(nodeParent){
            node.opened = true;
        }else{
            for(var i=0;i<nodeList.length;i++){
                if(node.code==nodeList[i].code){
                    nodeList[i].opened = true;
                }else{
                    nodeList[i].opened = false;
                }
            }
        }
        //执行回调
        if(this.props.selectNode){
            this.props.selectNode(node);
        }
        this.setState({nodeList:nodeList});
    },
    _toggleList:function(node){
        var nodeList = this.props.nodeList;
        for(var i=0;i<nodeList.length;i++){
            if(node.code==nodeList[i].code){
                nodeList[i].opened = true;
            }else{
                nodeList[i].opened = false;
            }
        }
        this.setState({nodeList:nodeList});
    }
});

module.exports = Aside;