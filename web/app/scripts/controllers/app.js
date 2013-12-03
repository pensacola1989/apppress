'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers.controller('AppListCtrl', ['$scope', '$location', 'App', function ($scope, $location, App) {
    var json = App.query(function() {
        $scope.apps = json.data;
        $scope.orderProp = 'id';
    });

    $scope.delete = function(app) {
        new App(app).$delete().then(function() {
            $location.path('/app/list');
        });
    };
}]);

adminControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

}]);

adminControllers.controller('AppEditCtrl', ['$scope', '$routeParams', '$location', 'StringUtil', 'App', function ($scope, $routeParams, $location, StringUtil, App) {
    $scope.appId = $routeParams.appId;

    if (StringUtil.isEmpty($scope.appId)) {
        $scope.app = new App();
    } else {
        App.get({appId:  $scope.appId}, function(json) {
            $scope.app = new App(json.data.app);
        });
    }

    $scope.save = function() {
        $scope.app.$save().then(function() {
            $location.path('/app/list');
        });
    };
}]);


