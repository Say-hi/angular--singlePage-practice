/**
 * Created by vcc on 2017/01/04.
 */
// 正在热映子模块
(function (angular) {
    var app = angular.module("mainApp.in_theaters",[]);
    app.controller('in_theatersCtrl',['$scope','httpService',function ($scope,httpService) {
        // 调用服务
        httpService.getJSONP('http://api.douban.com/v2/movie/in_theaters',{
            // apikey:
        },function (data) {
            $scope.data=data;
            $scope.title=data.title;
            //手动通知angular改变参数
            $scope.$apply();
        })
    }])
})(angular)