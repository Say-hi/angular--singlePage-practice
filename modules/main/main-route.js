/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module('mainApp.main.route',[
        'ngRoute',
        'mainApp.in-theaters.route',
    ])
    app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider
            .when('/main',{
                templateUrl:"modules/main/template-test.html"
            })
        $locationProvider.hashPrefix('');
    }])
})(angular)