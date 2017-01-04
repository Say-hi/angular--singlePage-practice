/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module('mainApp.main.route',[
        'ngRoute',
        'mainApp.in-theaters.route',
        'mainApp.search',
        'mainApp.service',
        'mainApp.detail.route',
    ])
    app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider
            .otherwise('/movie/in_theaters');
        $locationProvider.hashPrefix('');
    }])
})(angular)