var AppActions = require('../actions/AppActions');

var Ajax = require('./Ajax');

module.exports = {
    /**
     * 获取用户信息
     */
    getUserInfo:function(){
        //用户信息的具体获取方式 我们再探讨吧
        AppActions.receiveUserInfo(
            {userName:"jiazhao"}
        );
    },
    /**
     * 获取app数据
     */
    getAppData:function(){
        Ajax({
            url: 'js/json/model.json'
            , success: function (data) {
                AppActions.receiveAppData(data);
            }
        });
    },
    /**
     * 获取选定app的nodeList
     */
    getNodeList:function(app){
        Ajax({
            url: 'js/json/nodeList.json'
            , success: function (data) {
                AppActions.receiveAppData(data);
            }
        });
    },
    /**
     * 获取指定node的content数据
     */
    getContent:function(){

    }
};