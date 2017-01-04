/**
 * Created by vcc on 2017/01/04.
 */
(function (angular) {
    var app = angular.module("mainApp.detail",[]);
    app.controller('detailCtrl',['$scope','httpService','$routeParams',function ($scope,httpService,$routeParams) {
        $routeParams.id;
        httpService.getJSONP('http://api.douban.com/v2/movie/subject/'+$routeParams.id,
            {},
            function (data) {
                $scope.data=data;
                $scope.title=data.title;
                console.log($scope.title);
                // $scope.imgSrc=data.images.large;
                $scope.$apply();
        })
    }])
})(angular)