var Ajax = require('./reqwest');

module.exports = function(obj){
    Ajax({
        url: obj.url
        , type: (obj.type&&obj.type.toLocaleUpperCase()=="JSONP")?'jsonp':"json"
        , method: (obj.method&&obj.method.toLocaleUpperCase()=='POST')?"POST":"GET"
        , contentType: obj.contentType?obj.contentType:'application/json'
        , header:obj.header
        , data:obj.data||{}
        , crossOrigin:(obj.crossOrigin==false)?false:true
        , withCredentials: (obj.withCredentials==false)?false:true
        , error: function (err) {
            if(obj.error){
                //FIXME code怎么取
                obj.error({message:err.responseText});
            }else{
                //FIXME 统一处理
            }
        }
        , success: function (rs) {
            if(rs.status=="1"){
                if(obj.success){
                    obj.success(rs.data);
                }
            }else if(rs.status=="0"){
                //这里还要分支处理重新登陆的处理
                if(obj.error){
                    obj.success(rs);
                }
            }
        }
    });
};