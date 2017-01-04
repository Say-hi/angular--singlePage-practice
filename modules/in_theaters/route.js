/**
 * Created by vcc on 2017/01/04.
 */
// 正在热映模块的路由
(function (angular) {
    var app = angular.module('mainApp.in-theaters.route',['mainApp.in_theaters'])
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/:type/:page?',{
                templateUrl:'modules/in_theaters/tempalte.html',
                controller:'in_theatersCtrl'
            })
    }])
})(angular)