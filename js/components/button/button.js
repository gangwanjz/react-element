
var React = require('react');

/**
 * {type|size|code|label|icon}
 * <Button label={label} clickHandle={onClick} size={small} code={code} icon={delete} type={type} disabled={disabled}>
 */
var Button = React.createClass({

    _onClick:function(){
        //var code = this.props.code;
        //Dispatcher.handleAction({
        //    actionType:"button-click",
        //    data:code
        //});
    },

    render:function(){
        var className = this.getClassName();
        var iconEl="";
        if (this.props.icon) {
            iconEl = <i className={'icon '+this.props.icon}></i>
        }
        return (
            <button className={className}>
             {iconEl + this.props.label}
            </button>
        );
    },
    getClassName:function(){
        var className = "btn";
        //样式
        if(this.props.type=="primary"){
            className+=" btn-primary";
        }else if(this.props.type=="success"){
            className+=" btn-success";
        }else if(this.props.type=="info"){
            className+=" btn-info";
        }else if(this.props.type=="warning"){
            className += " btn-warning";
        }else if(this.props.type=="danger"){
            className += " btn-danger";
        }else if(this.props.type=="dark"){
            className += " btn-dark";
        }else{
            className += " btn-default";
        }
        //大小
        if(this.props.size=="large"){

        }else if(this.props.size=="small"){

        }else if(this.props.size=="xsmall"){

        }
        return className;
    }
});
