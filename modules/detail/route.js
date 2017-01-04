/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module('mainApp.detail.route',['mainApp.detail']);
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/subject/:id',{
                templateUrl:'modules/detail/template.html',
                controller:'detailCtrl',
            })
    }])
})(angular)