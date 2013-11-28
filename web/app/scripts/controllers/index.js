'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers.controller('IndexCtrl', ['$rootScope', '$scope', '$cookies', '$location', 'tokenAuthService',
    function ($rootScope, $scope, $cookies, $location, tokenAuthService) {
        tokenAuthService();
}]);

adminControllers.controller('HeaderCtrl', ['$rootScope', '$scope', '$cookies', '$location',
    function ($rootScope, $scope, $cookies, $location) {

    }]);

adminControllers.controller('FooterCtrl', ['$rootScope', '$scope', '$cookies', '$location',
    function ($rootScope, $scope, $cookies, $location) {

    }]);