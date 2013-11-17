'use strict';
var adminControllers = angular.module('adminControllers');

adminControllers.controller('UserSignupCtrl', ['$rootScope', '$scope', '$cookies', '$location', 'userService',
            function ($rootScope, $scope, $cookies, $location, userService) {
    $scope.user= {};
    $scope.reset = function() {
        $scope.user = {};
    };
    $scope.reset();

    $scope.signup = function(user) {
        userService.signup(user).success(function(json, status, headers, config) {
            if (json.code == 1) {
                $rootScope.userProfile = json.data;
                $cookies.userToken = json.data.token;
                $location.path("/apps");

            }
        });
    };
}]);

adminControllers.controller('UserCtrl', ['$rootScope', '$scope', '$cookies', '$location', 'userService',
    function ($rootScope, $scope, $cookies, $location, userService) {
        $scope.signon = function(user) {
            userService.signon(user).success(function(json, status, headers, config) {
                if (json.code == 1) {
                    $rootScope.userProfile = json.data;
                    $cookies.userToken = json.data.token;
                    $location.path("/apps");
                }
            });
        };

        $scope.signout = function() {
            $cookies.userToken = '';

            $rootScope.userProfile = '';
            $location.path("/signon");

        };
    }]);





