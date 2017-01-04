/**
 * Created by vcc on 2017/01/04.
 */
// 正在热映子模块
(function (angular) {
    var app = angular.module("mainApp.in_theaters",[]);
    app.controller('in_theatersCtrl',['$scope','httpService','$route','$routeParams',function ($scope,httpService,$route,$routeParams) {
        $scope.count=5;
        $scope.currentPage=$routeParams.page||1;
        $scope.pageChange=function (page) {
            if(page>1&&page<=$scope.allPage){
                //更新参数内的值
                $route.updateParams({page:page});
            }
        }
        var searchText = $routeParams.q==undefined?"":$routeParams.q;
        // 调用服务
        httpService.getJSONP('http://api.douban.com/v2/movie/'+$routeParams.type,{
            start:($scope.currentPage-1)*$scope.count,
            count:$scope.count,
            q:searchText,
            tag:searchText,
            // apikey:'00fa6c0654689a0202ef4412fd39ce06'
        },function (data) {
            $scope.total=data.total;
            $scope.data=data.subjects;
            $scope.title=data.title;
            $scope.allPage=Math.ceil(data.total/$scope.count);
            //手动通知angular改变参数
            $scope.$apply();
        })
    }])
})(angular)