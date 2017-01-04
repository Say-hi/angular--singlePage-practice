/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module('mainApp.search',[]);
    app.controller('searchCtrl',['$scope','$route',function ($scope,$route) {
        $scope.searchText='';
        $scope.search=function (text) {
            if(text.length>0){
                $route.updateParams({type:'search',q:$scope.searchText});
                $scope.searchText='';
            }
        }
    }])
})(angular)