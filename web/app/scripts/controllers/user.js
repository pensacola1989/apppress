'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers.controller('UserCtrl', ['$rootScope', '$scope', '$cookies', '$location', 'userService',
            function ($rootScope, $scope, $cookies, $location, userService) {
    $scope.user= {};
    $scope.reset = function() {
        $scope.user = {};
    };
    $scope.reset();

    $scope.signonWithToken = function(token) {
        userService.signonWithToken(token).success(function(json, status, headers, config) {
            console.log(json);
        });
    };

    $scope.signon = function(user) {
        userService.signon(user).success(function(json, status, headers, config) {
            console.log(json);
            $cookies.userToken = json.data.token;
            $location.path("/apps");
        });
    };

    $scope.signup = function(user) {
        userService.signup(user).success(function(json, status, headers, config) {
            console.log(json);
        });
    };

    $scope.signout = function() {
        $cookies.userToken = null;
        $rootScope.userProfile = null;
        $location.path("/signon");

    };
}]);



