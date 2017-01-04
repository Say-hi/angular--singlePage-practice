/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module('mainApp.main.route',[
        'ngRoute',
        'mainApp.in-theaters.route',
        'mainApp.service',
    ])
    app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider
            .otherwise('/in_theaters');
        $locationProvider.hashPrefix('');
    }])
})(angular)