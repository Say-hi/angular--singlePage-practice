/**
 * Created by vcc on 2017/01/04.
 */
// 创建服务模块
// 用于请求jsonp跨域参数的操作
(function (angular) {
    var app = angular.module('mainApp.service',[]);
    //请求地址，请求传递参数，回调函数
    app.service('httpService',[function () {
        this.getJSONP=function (url, param, callbackfunc) {
            //设置一个随机的函数名
            var jsonpcallback='jsonpcallback'+new Date().getTime();
            // 创建请求地址
            var strUrl =url+'?';
            for(key  in param){
                strUrl += key+"="+param[key]+'&';
            }
            //创建一个全局方法；调用回调函数
            window[jsonpcallback]=function (data) {
                //调用回调函数
                callbackfunc(data);
                //调用完毕后删除script标签
                document.body.removeChild(script);

            }
            // 将传参和路径拼接成真正的地址url
            strUrl += "callback="+jsonpcallback;
            //创建script标签
            var script  = document.createElement("script");
            // 设定标签src地址
            script.src= strUrl;
            //将标签添加到页面中
            document.body.appendChild(script);
        }
    }])
})(angular)