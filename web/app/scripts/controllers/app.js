'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers.controller('AppListCtrl', ['$scope', 'App', function ($scope, App) {
    var json = App.query(function() {
        $scope.apps = json.data;
        $scope.orderProp = 'id';
    });
}]);

adminControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

}]);

adminControllers.controller('AppEditCtrl', ['$scope', '$routeParams', '$location', 'StringUtil', 'App', function ($scope, $routeParams, $location, StringUtil, App) {
    $scope.appId = $routeParams.appId;
    console.log($scope.appId);

    if (StringUtil.isEmpty($scope.appId)) {
        $scope.app = new App();
    } else {
        $scope.app = App.get({appId:  $scope.appId}, function(app) {
            console.log(app);
        });
    }

    $scope.save = function(app) {
        app.$save();
        $location.path("/app/list");
    };
}]);


