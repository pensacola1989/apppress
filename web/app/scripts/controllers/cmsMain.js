'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers
    .controller('CmsMenuCtrl', function ($scope) {

    })
    .controller('CmsMainCtrl', ['$scope', '$routeParams', '$rootScope', function ($scope, $routeParams, $rootScope) {
        $rootScope.CurrentAppId = $routeParams.appId;

    }]);


