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

adminControllers.controller('AppEditCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.appId = $routeParams.appId;
    console.log($scope.appId);
}]);


